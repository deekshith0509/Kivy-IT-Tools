# IT‑Tools APK: Local Developer Utilities via HTTP Server

This project packages [it‑tools](https://github.com/CorentinTh/it-tools) — a collection of handy online tools for developers — into a standalone Android APK. The APK includes a complete set of utilities (built from the original Vue files via npm) and runs a local HTTP server, allowing users to access the tools via their browser.

## Overview

This Android application repackages the original it‑tools code **without any modifications**. It leverages a simple Python HTTP server to serve the contents of the pre-built distribution folder (`dist`). On launch, the app:
- Changes its working directory to `dist`.
- Starts the HTTP server.
- Enables users to access the utilities by opening Chrome (or any modern browser) on the same device or within the local network.

## Features

- **Unmodified Source:** Uses the original it‑tools code; only the build and packaging process has been adjusted.
- **Local HTTP Server:** Automatically starts a Python HTTP server to serve static files from the `dist` folder.
- **Directory Management:** Changes the working directory to `dist` at runtime.
- **Web Interface:** Users can simply open their mobile browser and navigate to the local server to interact with the tools.
- **Portable APK:** Built with Kivy Buildozer, ensuring a production-ready Android package.

## Prerequisites

- **Android Device:** Running Android 4.0 or newer (or an emulator).
- **Web Browser:** A modern browser (e.g., Chrome) to access the served content.
- **Local Network:** Required if you plan to access the server from another device on the same network.

## Build Process

1. **Build JavaScript Assets:**
   - Navigate to the original it‑tools source directory.
   - Run your npm build command (e.g., `npm run build`) to rebuild the JavaScript files from the Vue source.
   - The output is placed in the `dist` directory.

2. **Prepare the Distribution:**
   - Ensure that all generated files are present in the `dist` folder.

3. **Test the Local Server (Optional):**
   - In your project root, run:
     ```bash
     python -m http.server 8001
     ```
   - Open your browser at [http://localhost:8001](http://localhost:8001) to verify the tools are served correctly.

4. **Package into an APK:**
   - Configure your `buildozer.spec` file to include the `dist` folder and to run the Python HTTP server at startup.
   - Run:
     ```bash
     buildozer android debug deploy run
     ```
   - This command builds the APK, deploys it to your connected Android device, and launches the app.

## Usage

1. **Install the APK:**
   - Transfer and install the APK on your Android device.

2. **Launch the App:**
   - When the app starts, it will change its working directory to the `dist` folder and start the Python HTTP server (default port is 8001).

3. **Access the Tools:**
   - Open your web browser (e.g., Chrome) and navigate to:
     ```
     http://<device-local-ip>:8001
     ```
   - The IT‑Tools interface will be displayed, allowing you to use the bundled developer utilities.

## Technical Details

- **HTTP Server:** Utilizes Python’s built‑in HTTP server to serve static content.
- **Directory Handling:** Uses Python's `os.chdir()` to switch to the `dist` directory at runtime.
- **Packaging Tool:** The APK is built using Kivy Buildozer, which automates dependency management and APK creation.

## Credits

- **Original Project:** [it‑tools](https://github.com/CorentinTh/it-tools) by CorentinTh.
- **Packaging:** Built with Kivy Buildozer.
- **Contributors:** Thanks to the developers of Kivy, Buildozer, and the Python standard libraries.

## License

This project is licensed under the [GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html). See the original it‑tools repository for detailed licensing information.

