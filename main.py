import threading
import os
import socket
import logging
import http.server
import socketserver
import webbrowser

from kivy.app import App
from kivy.lang import Builder
from kivy.clock import Clock
from kivy.properties import NumericProperty, StringProperty, BooleanProperty
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.popup import Popup
from kivy.uix.label import Label
from kivy.core.window import Window
from kivy.metrics import dp, sp
from kivy.uix.widget import Widget

# Set up logging configuration
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')


def is_port_in_use(port):
    """Return True if the given port is in use."""
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        return s.connect_ex(('localhost', port)) == 0


def get_local_ip():
    """Return the local IP address; fallback to 'localhost'."""
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
    except Exception:
        ip = "localhost"
    finally:
        s.close()
    return ip


class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    """Custom request handler that falls back to index.html if file not found."""
    def do_GET(self):
        requested_file = self.path.lstrip("/")
        if requested_file == "" or os.path.exists(requested_file):
            return super().do_GET()
        self.path = "index.html"
        return super().do_GET()


class ReusableTCPServer(socketserver.TCPServer):
    allow_reuse_address = True


class StatusIndicator(Widget):
    """Circular indicator: green if server is running, red otherwise."""
    server_running = BooleanProperty(False)


class ServerDashboard(BoxLayout):
    port = NumericProperty(8001)
    server_directory = StringProperty(os.path.join(os.getcwd(), "dist"))
    local_ip = StringProperty("")
    server_url = StringProperty("")
    status_text = StringProperty("Server Status: Stopped")
    log_text = StringProperty("")
    server_running = BooleanProperty(False)

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.orientation = "vertical"
        self.padding = dp(20)
        self.spacing = dp(10)
        self.local_ip = get_local_ip()
        self.server_url = f"http://{self.local_ip}:{self.port}"
        self.httpd = None
        self.server_thread = None
        self.toggle_lock = threading.Lock()

    def start_stop_server(self):
        if not self.toggle_lock.acquire(blocking=False):
            return
        if not self.server_running:
            if not os.path.exists(self.server_directory):
                self.show_error("Error: Directory not found!")
                self.toggle_lock.release()
                return
            if is_port_in_use(self.port):
                self.show_error(f"Error: Port {self.port} is already in use!")
                self.toggle_lock.release()
                return
            self.server_thread = threading.Thread(target=self.run_server, daemon=True)
            self.server_thread.start()
            self.server_running = True
            self.status_text = "Server Status: Running"
            self.append_log("HTTP server started.")
        else:
            if self.httpd:
                self.httpd.shutdown()
                self.httpd.server_close()
                self.httpd = None
                self.append_log("HTTP server shutdown.")
            self.server_running = False
            if self.server_thread and self.server_thread.is_alive():
                self.server_thread.join(timeout=5)
                self.append_log("Server thread joined.")
            self.status_text = "Server Status: Stopped"
            self.append_log("Server stopped.")
        Clock.schedule_once(lambda dt: self.toggle_lock.release(), 0.3)

    def run_server(self):
        os.chdir(self.server_directory)
        handler = CustomHTTPRequestHandler
        try:
            with ReusableTCPServer(("", self.port), handler) as httpd:
                self.httpd = httpd
                logging.info(f"Serving at port {self.port}")
                httpd.serve_forever(poll_interval=0.5)
        except Exception as e:
            logging.error(f"Error running server: {e}")
            Clock.schedule_once(lambda dt: self.show_error(f"Server error:\n{e}"), 0)
            Clock.schedule_once(lambda dt: setattr(self, 'status_text', "Server Status: Stopped"), 0)
        finally:
            self.server_running = False
            Clock.schedule_once(lambda dt: setattr(self, 'status_text', "Server Status: Stopped"), 0)
            self.append_log("Exiting server thread.")

    def open_browser(self):
        webbrowser.open(self.server_url)
        self.append_log(f"Opening URL in browser: {self.server_url}")

    def clear_logs(self):
        self.log_text = ""

    def append_log(self, message):
        self.log_text += message + "\n"

    def show_error(self, message):
        content = BoxLayout(orientation="vertical", padding=dp(10), spacing=dp(10))
        content.add_widget(Label(text=message, color=(1, 1, 1, 1), font_size=Window.width * 0.04))
        popup = Popup(title="Error", content=content, size_hint=(0.6, 0.4))
        popup.open()


kv = '''
#:import Window kivy.core.window.Window
#:import dp kivy.metrics.dp
#:import sp kivy.metrics.sp

<DashboardLabel@Label>:
    text_size: self.width - dp(20), None
    halign: "left"
    valign: "middle"
    size_hint_y: None
    height: self.texture_size[1] + dp(10)
    color: 1,1,1,1
    font_size: Window.width * 0.035

<WrappedButton@Button>:
    text_size: self.width - dp(10), None
    halign: "center"
    valign: "middle"
    size_hint_y: None
    height: dp(50)
    shorten: False
    font_size: Window.width * 0.04

<StatusIndicator>:
    size_hint: None, None
    size: dp(20), dp(20)
    canvas:
        Color:
            rgba: (0.2, 0.8, 0.2, 1) if self.server_running else (0.8, 0.2, 0.2, 1)
        Ellipse:
            pos: self.pos
            size: self.size

<ServerDashboard>:
    canvas.before:
        Color:
            rgba: 0.1, 0.1, 0.15, 1
        RoundedRectangle:
            pos: self.pos
            size: self.size
            radius: [dp(20),]
    # Header: Contains title and a status indicator.
    BoxLayout:
        size_hint_y: 0.12
        padding: dp(10)
        spacing: dp(10)
        canvas.before:
            Color:
                rgba: 0.12, 0.22, 0.38, 1
            RoundedRectangle:
                pos: self.pos
                size: self.size
                radius: [dp(20),]
        Label:
            text: "IT-Tools Server"
            font_size: Window.width * 0.06
            bold: True
            color: 1,1,1,1
            halign: "center"
            valign: "middle"
            text_size: self.size
            size_hint_x: 1
        StatusIndicator:
            server_running: root.server_running
    # Main TabbedPanel
    TabbedPanel:
        do_default_tab: False
        tab_height: dp(40)
        tab_width: self.width/2
        # Dashboard Tab: Server details and controls.
        TabbedPanelItem:
            text: "Dashboard"
            BoxLayout:
                orientation: "vertical"
                padding: dp(15)
                spacing: dp(15)
                # Server Details Card
                BoxLayout:
                    orientation: "vertical"
                    padding: dp(10)
                    spacing: dp(10)
                    size_hint_y: 0.5
                    canvas.before:
                        Color:
                            rgba: 0.13, 0.13, 0.2, 1
                        RoundedRectangle:
                            pos: self.pos
                            size: self.size
                            radius: [dp(10),]
                    Label:
                        text: "Server Details"
                        halign: "center"
                        valign: "middle"
                        font_size: Window.width * 0.05
                        color: 1,1,1,1
                        size_hint_y: None
                        height: self.texture_size[1] + dp(10)
                    DashboardLabel:
                        text: "Directory: " + root.server_directory
                    DashboardLabel:
                        text: "Port: " + str(root.port)
                    DashboardLabel:
                        text: "Access URL: " + root.server_url
                # Status Card
                BoxLayout:
                    orientation: "vertical"
                    padding: dp(10)
                    spacing: dp(10)
                    size_hint_y: 0.3
                    canvas.before:
                        Color:
                            rgba: 0.12, 0.18, 0.28, 1
                        RoundedRectangle:
                            pos: self.pos
                            size: self.size
                            radius: [dp(10),]
                    Label:
                        text: "Status"
                        font_size: Window.width * 0.05
                        color: 1,1,1,1
                        size_hint_y: None
                        height: self.texture_size[1] + dp(10)
                    Label:
                        text: root.status_text
                        font_size: Window.width * 0.045
                        color: 1,1,1,1
                        halign: "center"
                        valign: "middle"
                        text_size: self.size
                # Action Buttons Card
                BoxLayout:
                    size_hint_y: None
                    height: dp(60)
                    spacing: dp(15)
                    WrappedButton:
                        text: "Start/Stop Server"
                        background_color: 0.17, 0.63, 0.37, 1
                        on_release: root.start_stop_server()
                    WrappedButton:
                        text: "Open in Browser"
                        background_color: 0.18, 0.45, 0.71, 1
                        on_release: root.open_browser()
                    WrappedButton:
                        text: "Clear Logs"
                        background_color: 0.82, 0.21, 0.21, 1
                        on_release: root.clear_logs()
        # Logs Tab: Displays log messages.
        TabbedPanelItem:
            text: "Logs"
            BoxLayout:
                orientation: "vertical"
                padding: dp(15)
                ScrollView:
                    do_scroll_x: False
                    Label:
                        text: root.log_text
                        font_size: Window.width * 0.045
                        color: 1,1,1,1
                        text_size: self.width - dp(10), None
                        halign: "left"
                        valign: "top"
                        size_hint_y: None
                        height: self.texture_size[1] + dp(20)
'''

Builder.load_string(kv)

class ServerDashboardApp(App):
    def build(self):
        return ServerDashboard()

    def on_stop(self):
        root = self.root
        if root.httpd:
            root.httpd.shutdown()
            root.httpd.server_close()
        if root.server_thread and root.server_thread.is_alive():
            root.server_thread.join(timeout=5)

if __name__ == '__main__':
    ServerDashboardApp().run()
