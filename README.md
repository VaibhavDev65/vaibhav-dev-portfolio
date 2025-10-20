# Vaibhav Dev Portfolio Website

A fully responsive portfolio website built with HTML, CSS, and JavaScript featuring automatic project detection and download functionality.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Hamburger Menu**: Mobile-friendly navigation with animated hamburger menu
- **Poppins Font**: Clean, modern typography using Google Fonts
- **Auto Project Detection**: Automatically detects and displays zip files from the projects directory
- **Download Functionality**: Each project card includes a download button
- **Modern UI**: Beautiful design with hover effects and smooth animations

## File Structure

```
VaibhavDev/
├── index.html          # Home page
├── projects.html       # Projects page
├── styles.css          # All styling
├── script.js           # JavaScript functionality
├── server.js           # Node.js server for project detection
├── package.json        # Node.js dependencies
├── projects/           # Directory for project zip files
│   └── README.md       # Instructions for adding projects
└── programmer_v_02.png # Profile image
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`

### Adding Projects

1. Add your project zip files to the `projects/` directory
2. The website will automatically detect and display them
3. Each project will appear as a card with a download button

## Usage

### Navigation
- **Home**: Main landing page with welcome message and profile image
- **Projects**: Displays all detected project files in a grid layout

### Mobile Menu
- Click the hamburger menu (three lines) on mobile devices
- Menu slides in from the left with smooth animation
- Click outside the menu or on a link to close it

### Project Management
- Projects are automatically detected from the `projects/` directory
- Only `.zip` files are recognized
- Project names are automatically formatted from file names
- Each project card includes a download button

## Customization

### Adding New Projects
Simply add zip files to the `projects/` directory. The server will automatically:
- Scan for new files
- Format project names
- Create download links
- Update the projects page

### Styling
Modify `styles.css` to customize:
- Colors and themes
- Layout and spacing
- Animations and transitions
- Responsive breakpoints

### Content
Update the following files to customize content:
- `index.html`: Main page content
- `projects.html`: Projects page content
- Footer links and social media links

## Technical Details

### Server Features
- Express.js server for serving static files
- API endpoint (`/api/projects`) for project detection
- CORS enabled for cross-origin requests
- Automatic file scanning and formatting

### Responsive Design
- Mobile-first approach
- Breakpoints: 768px (tablet), 480px (mobile)
- Flexible grid layouts
- Touch-friendly navigation

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ JavaScript features
- CSS Grid and Flexbox

## Development

### Running in Development Mode
```bash
npm run dev
```
This uses nodemon for automatic server restarts when files change.

### Project Structure
- **Frontend**: Pure HTML, CSS, JavaScript (no frameworks)
- **Backend**: Node.js with Express
- **File Management**: Automatic detection and serving of project files

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

Vaibhav Dev - [Your Contact Information]

---

**Note**: Make sure to replace placeholder social media links in the footer with your actual profiles.
