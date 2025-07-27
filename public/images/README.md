# Image Assets Structure

This folder contains all image assets for the BitLab website.

## Portfolio Images

### Folder Structure
```
public/images/portfolio/
├── maison-privee/
│   ├── thumbnail.jpg      (400x300px - Grid view)
│   ├── hero.jpg          (1200x800px - Hero section)
│   ├── gallery-1.jpg     (800x600px - Gallery image)
│   ├── gallery-2.jpg     (800x600px - Gallery image)
│   ├── gallery-3.jpg     (800x600px - Gallery image)
│   └── gallery-4.jpg     (800x600px - Gallery image)
├── perfection-bridal/
│   ├── thumbnail.jpg
│   ├── hero.jpg
│   ├── gallery-1.jpg
│   ├── gallery-2.jpg
│   ├── gallery-3.jpg
│   └── gallery-4.jpg
├── vinciere/
├── vanni-architecture/
├── nomad-architectural/
├── archalley/
├── skinet/
├── m365-docs/
├── viragi/
└── hela-rasa-catering/
```

### Image Specifications
- **Thumbnail**: 400x300px, JPG/PNG, optimized for web
- **Hero**: 1200x800px, JPG/PNG, high quality
- **Gallery**: 800x600px, JPG/PNG, consistent aspect ratio

## Partner Logos

### Folder Structure
```
public/images/partners/
├── meta.png
├── namecheap.png
├── google-cloud.png
├── azure.png
├── oracle.png
├── koko.png
├── aws.png
├── mintpay.png
└── payhere.png
```

### Logo Specifications
- **Size**: 200x80px recommended
- **Format**: PNG with transparent background
- **Style**: Grayscale by default, colored on hover

## Usage in Code

### Portfolio Images
```tsx
// In PortfolioData.ts
thumbnail: '/images/portfolio/maison-privee/thumbnail.jpg'
heroImage: '/images/portfolio/maison-privee/hero.jpg'
gallery: [
  '/images/portfolio/maison-privee/gallery-1.jpg',
  '/images/portfolio/maison-privee/gallery-2.jpg',
  '/images/portfolio/maison-privee/gallery-3.jpg',
  '/images/portfolio/maison-privee/gallery-4.jpg'
]
```

### Partner Logos
```tsx
// In PartnersCarousel.tsx
logo: '/images/partners/meta.png'
```

## Image Optimization

1. **Compress images** before uploading
2. **Use appropriate formats**: JPG for photos, PNG for logos
3. **Maintain consistent dimensions** within each category
4. **Optimize for web** (under 200KB per image)

## Upload Instructions

1. Place images in the appropriate project folder
2. Use consistent naming convention
3. Ensure images are optimized for web
4. Test that images load correctly in the application 