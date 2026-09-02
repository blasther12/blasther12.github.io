from pathlib import Path
import cairosvg

root = Path(__file__).resolve().parents[1]
source = root / 'assets/images/portal-mark.svg'
for filename, size in [
    ('portal-icon-32.png', 32),
    ('portal-apple-touch-icon.png', 180),
    ('portal-icon-192.png', 192),
    ('portal-icon-512.png', 512),
]:
    target = root / 'assets/images' / filename
    cairosvg.svg2png(url=str(source), write_to=str(target), output_width=size, output_height=size)
    print(f'generated {target.name} ({size}x{size})')