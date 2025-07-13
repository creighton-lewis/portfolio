# Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Features dark/light mode toggle, smooth animations, and support for Canva embeds.

## Features

- 🌙 **Dark/Light Mode Toggle** - Switch between themes with a beautiful animated toggle
- 📱 **Fully Responsive** - Looks great on all devices
- 🎨 **Custom Fonts** - Uses Josefin Sans and Nunito Sans as requested
- ✨ **Smooth Animations** - Typing effect, scroll animations, and hover effects
- 🔗 **Canva Embed Support** - Easy integration with Canva designs
- ♿ **Accessible** - Keyboard navigation and screen reader support
- 💾 **Theme Persistence** - Remembers your theme preference

## Getting Started

1. **Clone or download** this repository
2. **Open `index.html`** in your web browser
3. **Customize** the content to match your portfolio

## Customization Guide

### Personal Information

Edit the following in `index.html`:

```html
<!-- Update your name -->
<h1>Your Name</h1>

<!-- Update hero section -->
<h1 class="hero-title">Hi, I'm <span class="highlight">Your Name</span></h1>
<p class="hero-subtitle">Creative Professional & Designer</p>

<!-- Update contact information -->
<a href="mailto:your.email@example.com">your.email@example.com</a>
<a href="https://linkedin.com/in/yourprofile">linkedin.com/in/yourprofile</a>
```

### Adding Canva Embeds

Replace the placeholder divs in the projects section with your Canva embed codes:

```html
<!-- Replace this placeholder -->
<div class="embed-placeholder">
    <p>Canva Embed Placeholder</p>
    <small>Replace this with your actual Canva embed code</small>
</div>

<!-- With your actual Canva embed code -->
<iframe src="your-canva-embed-url" width="100%" height="400" frameborder="0" allowfullscreen></iframe>
```

### Customizing Colors

The color scheme is defined using CSS variables in `index.css`. You can easily customize:

```css
:root {
    --accent-primary: #007bff;    /* Main accent color */
    --accent-secondary: #6f42c1;  /* Secondary accent color */
    /* ... other colors */
}
```

### Adding More Projects

Duplicate the project card structure:

```html
<div class="project-card">
    <div class="project-content">
        <h3 class="project-title">Your Project Title</h3>
        <p class="project-description">Your project description</p>
        <div class="project-embed">
            <!-- Your Canva embed code here -->
        </div>
    </div>
</div>
```

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── index.css           # Styles with dark/light mode
├── index.js            # JavaScript functionality
├── images/             # Your images (optional)
├── fonts/              # Custom fonts (optional)
└── README.md           # This file
```

## Features Explained

### Dark/Light Mode
- Toggle button in the navigation
- Automatically saves preference to localStorage
- Smooth transitions between themes
- Accessible with keyboard support

### Typography
- **Josefin Sans**: Used for headings (h1, h2, h3, etc.)
- **Nunito Sans**: Used for body text and navigation

### Animations
- Typing effect on the hero title
- Scroll-triggered animations for project cards
- Hover effects on buttons and cards
- Smooth scrolling navigation

### Responsive Design
- Mobile-first approach
- Breakpoints at 768px and 480px
- Flexible grid system for projects

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Performance

- Optimized CSS with efficient selectors
- Minimal JavaScript with modern ES6+ features
- Lazy loading support for images
- Smooth animations using CSS transforms

## Deployment

### GitHub Pages (Recommended)
1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select your main branch as source
4. Your site will be available at `https://username.github.io/repository-name`

### Other Hosting Options
- Netlify
- Vercel
- Any static hosting service

## Customization Tips

1. **Images**: Add your images to the `images/` folder and reference them in your HTML
2. **Fonts**: If you want to use local fonts, add them to the `fonts/` folder and update the CSS
3. **SEO**: Update the `<title>` tag and add meta descriptions for better search engine optimization
4. **Analytics**: Add Google Analytics or other tracking codes to the `<head>` section

## Troubleshooting

### Canva Embeds Not Working
- Make sure your Canva design is published and public
- Check that the embed code is complete
- Test the embed URL directly in a browser

### Theme Toggle Not Working
- Check that JavaScript is enabled in your browser
- Open browser console (F12) to check for errors
- Ensure all files are in the same directory

### Mobile Issues
- Test on actual devices, not just browser dev tools
- Check that viewport meta tag is present
- Verify touch targets are large enough (44px minimum)

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you need help customizing your portfolio, feel free to:
- Check the browser console for errors
- Validate your HTML at [validator.w3.org](https://validator.w3.org/)
- Test accessibility with browser dev tools

---

**Happy coding! 🚀**
