"""Replace logo-viapet.png with the high-resolution mascot."""
from PIL import Image
from pathlib import Path

SRC = Path("C:/Users/Gamer/OneDrive/Pictures/ViaPet.APP/mascotenovo.jpg")
DST = Path(__file__).resolve().parent.parent / "public" / "logo-viapet.png"

img = Image.open(SRC).convert("RGB")
print(f"Source: {img.size}  ({SRC.stat().st_size // 1024} KB)")
img.save(DST, "PNG", optimize=True)
print(f"Saved:  {DST.name}  {Image.open(DST).size}  ({DST.stat().st_size // 1024} KB)")
