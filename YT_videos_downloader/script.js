// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    // Toggle mobile menu
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // Project management functionality
    loadProjects();
});

// Function to load and display projects
function loadProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;

    // List of project files (you can modify this list or make it dynamic)
    const projects = [
        { name: 'Sample Project 1', file: 'sample1.zip' },
        { name: 'Sample Project 2', file: 'sample2.zip' },
        { name: 'Sample Project 3', file: 'sample3.zip' }
    ];

    // Clear existing projects
    projectsGrid.innerHTML = '';

    // Create project cards
    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });

    // Auto-detect zip files in projects directory
    autoDetectProjects();
}

// Function to create a project card
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    card.innerHTML = `
        <div class="project-name">${project.name}</div>
        <a href="projects/${project.file}" class="download-btn" download>
            Download Project
        </a>
    `;
    
    return card;
}

// Function to auto-detect zip files in projects directory
function autoDetectProjects() {
    console.log('Auto-detecting projects...');
    
    // For now, manually add your projects since server isn't running
    const projects = [
        { name: 'YT Videos Downloader', file: 'YT_videos_downloader.zip' }
        // Add more projects here as you create them
    ];
    
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;
    
    // Clear existing projects
    projectsGrid.innerHTML = '';
    
    if (projects.length === 0) {
        projectsGrid.innerHTML = '<p style="text-align: center; color: #666; grid-column: 1 / -1;">No projects found. Add some zip files to the projects directory!</p>';
        return;
    }
    
    // Create project cards for each project
    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

// Function to add a new project (for manual addition)
function addProject(projectName, fileName) {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;

    const project = {
        name: projectName,
        file: fileName
    };

    const projectCard = createProjectCard(project);
    projectsGrid.appendChild(projectCard);
}

// Function to remove a project
function removeProject(projectName) {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;

    const cards = projectsGrid.querySelectorAll('.project-card');
    cards.forEach(card => {
        const nameElement = card.querySelector('.project-name');
        if (nameElement && nameElement.textContent === projectName) {
            card.remove();
        }
    });
}

// Utility function to get file name without extension
function getFileNameWithoutExtension(fileName) {
    return fileName.replace(/\.[^/.]+$/, '');
}

// Utility function to format project name from file name
function formatProjectName(fileName) {
    const nameWithoutExt = getFileNameWithoutExtension(fileName);
    return nameWithoutExt
        .split(/[-_]/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Example usage for adding projects manually
// You can call these functions from the browser console or add a form to your page

// addProject('My Awesome Project', 'my-awesome-project.zip');
// removeProject('Sample Project 1');
