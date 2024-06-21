import Image
from removebg import RemoveBg

# Replace with your remove.bg API key
rmbg = RemoveBg("your-removebg-api-key", "error.log")

# Remove the background
rmbg.remove_background_from_img_file("./src/assets/file.png")

# Open the no-bg image
img = Image.open("./src/assets/file_no_bg.png")

# Resize the image
img_resized = img.resize((200, 200))

# Save the resized image
img_resized.save("./src/assets/resized-image.png")