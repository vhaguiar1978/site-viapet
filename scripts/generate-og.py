"""Generate OpenGraph image (1200x630) for ViaPet — just the mascot logo on a clean background."""
from PIL import Image
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / "public"
LOGO = PUBLIC / "logo-viapet.png"
OUT = PUBLIC / "og-image.png"

W, H = 1200, 630
BG = (255, 255, 255)  # clean white

img = Image.new("RGB", (W, H), BG)

logo = Image.open(LOGO).convert("RGBA")
target_h = int(H * 0.85)  # 85% of canvas height with breathing room
ratio = target_h / logo.height
logo = logo.resize((int(logo.width * ratio), target_h), Image.LANCZOS)

x = (W - logo.width) // 2
y = (H - logo.height) // 2
img.paste(logo, (x, y), logo)

img.save(OUT, "PNG", optimize=True)
print(f"Saved: {OUT}  ({OUT.stat().st_size // 1024} KB)")
