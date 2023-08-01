import glob, os
import image_slicer

os.chdir("./")
for file in glob.glob("*.jpg"):
    image_slicer.slice(file, 2)