import os

folder_path = "/home/sofien/Desktop/raed/progress/PregressServer/middleware"

for root, dirs, files in os.walk(folder_path):
    for filename in files:
        if filename.endswith('.js'):
            old_path = os.path.join(root, filename)
            new_filename = filename.replace('.js', '.middleware.js')
            new_path = os.path.join(root, new_filename)
            os.rename(old_path, new_path)