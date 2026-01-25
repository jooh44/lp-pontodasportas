
import sys
from collections import Counter
try:
    from PIL import Image
    
    def get_dominant_colors(image_path, num_colors=4):
        try:
            image = Image.open(image_path)
            image = image.convert('RGB')
            # Resize for speed
            image = image.resize((100, 100))
            pixels = list(image.getdata())
            # Simple most common colors
            counts = Counter(pixels)
            common = counts.most_common(num_colors)
            return [f"#{r:02x}{g:02x}{b:02x}" for (r, g, b), count in common]
        except Exception as e:
            return str(e)

    colors = get_dominant_colors('foto-logo.png')
    print(colors)

except ImportError:
    print("PIL not installed")
