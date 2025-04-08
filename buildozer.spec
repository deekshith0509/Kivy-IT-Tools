# (1) General Settings
[app]
title = IT Tools
package.name = ittools
package.domain = com.docker

source.main = main.py

source.include_exts = py,png,jpg,kv,atlas,html,js,css,json
orientation = portrait
version = 0.1
source.dir = .

presplash.filename = splash.png
icon.filename = icon.png

# (2) Requirements & Dependencies
requirements = python3,kivy,kivymd,pyjnius,android
android.permissions = INTERNET

android.api = 33
android.ndk = 25b

# (3) Package Settings
fullscreen = 0
android.archs = arm64-v8a

android.add_asset_dirs = dist

# (6) Packaging & Signing
android.release = False


# (7) Debugging
log_level = 1
