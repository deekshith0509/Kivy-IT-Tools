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

icon.filename = icon.png               # <--- Add this line

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
android.allow_presplash_rotation = False
android.presplash_color = #FFFFFF
android.presplash = splash.png         # <--- Add this line

# (7) Debugging
log_level = 1
