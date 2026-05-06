"""Generate OpenGraph image (1200x630) for ViaPet using the existing logo."""
from PIL import Image, ImageDraw, ImageFont
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / "public"
LOGO = PUBLIC / "logo-viapet.png"
OUT = PUBLIC / "og-image.png"

W, H = 1200, 630

# Brand colors (taken from the mascot palette)
BG_TOP = (255, 244, 224)      # creme suave
BG_BOTTOM = (255, 218, 170)   # creme/laranja claro
ORANGE = (242, 125, 35)       # laranja viapet
DARK = (60, 30, 10)           # marrom escuro p/ texto
RED = (224, 62, 45)           # vermelho do logo

FONTS = "C:/Windows/Fonts"
font_title = ImageFont.truetype(f"{FONTS}/segoeuib.ttf", 64)
font_brand = ImageFont.truetype(f"{FONTS}/segoeuib.ttf", 100)
font_sub = ImageFont.truetype(f"{FONTS}/segoeui.ttf", 32)
font_badge = ImageFont.truetype(f"{FONTS}/segoeuib.ttf", 28)

# --- Background gradient (vertical) ---
img = Image.new("RGB", (W, H), BG_TOP)
draw = ImageDraw.Draw(img)
for y in range(H):
    t = y / (H - 1)
    r = int(BG_TOP[0] * (1 - t) + BG_BOTTOM[0] * t)
    g = int(BG_TOP[1] * (1 - t) + BG_BOTTOM[1] * t)
    b = int(BG_TOP[2] * (1 - t) + BG_BOTTOM[2] * t)
    draw.line([(0, y), (W, y)], fill=(r, g, b))

# Soft circular accents (decorative paws-like dots)
def soft_circle(cx, cy, r, color, alpha=60):
    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    od = ImageDraw.Draw(overlay)
    od.ellipse((cx - r, cy - r, cx + r, cy + r), fill=color + (alpha,))
    img.alpha_composite(overlay) if img.mode == "RGBA" else img.paste(
        Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB")
    )

img = img.convert("RGBA")
overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
od = ImageDraw.Draw(overlay)
od.ellipse((-120, -120, 260, 260), fill=ORANGE + (35,))
od.ellipse((W - 220, H - 220, W + 120, H + 120), fill=ORANGE + (35,))
od.ellipse((W - 360, -80, W - 120, 160), fill=RED + (25,))
img = Image.alpha_composite(img, overlay)
draw = ImageDraw.Draw(img)

# --- Logo (right side) ---
logo = Image.open(LOGO).convert("RGBA")
target_h = 460
ratio = target_h / logo.height
logo = logo.resize((int(logo.width * ratio), target_h), Image.LANCZOS)
logo_x = W - logo.width - 80
logo_y = (H - logo.height) // 2
img.paste(logo, (logo_x, logo_y), logo)

# --- Text block (left side) ---
left_x = 70
text_max_width = logo_x - left_x - 30  # safety margin to avoid overlap

# "ViaPet" big brand
draw.text((left_x, 120), "ViaPet", font=font_brand, fill=ORANGE,
          stroke_width=3, stroke_fill=DARK)

# Subtitle
draw.text((left_x, 250), "Sistema completo para", font=font_title, fill=DARK)
draw.text((left_x, 322), "Pet Shop & Veterinária", font=font_title, fill=RED)

# Tagline
draw.text((left_x, 420), "Banho e tosa, agenda, financeiro,", font=font_sub, fill=DARK)
draw.text((left_x, 460), "estoque e WhatsApp em um só lugar.", font=font_sub, fill=DARK)

# Badge "30 dias grátis"
badge_text = "30 DIAS GRÁTIS  •  50% OFF"
bbox = draw.textbbox((0, 0), badge_text, font=font_badge)
bw = bbox[2] - bbox[0] + 44
bh = bbox[3] - bbox[1] + 22
bx, by = left_x, 530
draw.rounded_rectangle((bx, by, bx + bw, by + bh), radius=20, fill=ORANGE)
draw.text((bx + 22, by + 6), badge_text, font=font_badge, fill=(255, 255, 255))

# Save final
img.convert("RGB").save(OUT, "PNG", optimize=True)
print(f"Saved: {OUT}  ({OUT.stat().st_size // 1024} KB)")
