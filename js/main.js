document.addEventListener('DOMContentLoaded', () => {
    // Modal Logic
    const modal = document.getElementById('project-info-modal');
    const modalContent = document.querySelector('.modal-content');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalImage = document.getElementById('modal-image'); // Image element
    const modalLinkedIn = document.getElementById('modal-linkedin'); // LinkedIn link
    const modalGitHub = document.getElementById('modal-github'); // GitHub link
    const closeBtn = document.querySelector('.close-btn');
    const infoButtons = document.querySelectorAll('.info-btn');

    const projectInfo = {
        'project1-info': {
            title: 'Image Converter Web Browser Application',
            description:
                'The Image Converter is an essential tool for anyone needing to effortlessly convert images between popular formats such as JPG, JPEG, and PNG. This project, crafted using HTML, CSS, JavaScript, and Python Flask, ensures high-quality conversions without any loss in image fidelity. Users can easily upload their images, choose their desired output format, and download the converted file. This application is particularly useful for graphic designers and photographers looking to maintain optimal image quality across different formats.',
            image: 'images/project1-thumbnail.png', // Placeholder image path
            linkedin: 'https://www.linkedin.com/posts/thejivanrm_webdevelopment-flask-python-activity-7239685120817815554-dzIZ?utm_source=share&utm_medium=member_desktop', // Placeholder LinkedIn URL
            github: 'https://github.com/Jivanrm/ImageConverter1.0' // Placeholder GitHub URL
        },
        'project2-info': {
            title: 'Classical TIC TAC TOE Game',
            description:
                'This interactive version of Tic Tac Toe is not just a simple game; it’s an immersive experience enhanced by sound effects from an imported audio library. Built with HTML, CSS, and JavaScript, the game features intuitive gameplay where players can enjoy familiar mechanics with the added delight of auditory feedback, making each move feel more impactful and alive. This project is perfect for demonstrating how traditional games can be transformed into engaging digital experiences.',
            image: 'images/project2-thumbnail.png',
            linkedin: 'https://www.linkedin.com/posts/thejivanrm_webdevelopment-gamedevelopment-tictactoe-activity-7260443751838318592-CQ9i?utm_source=share&utm_medium=member_desktop',
            github: 'https://www.linkedin.com/posts/thejivanrm_webdevelopment-gamedevelopment-tictactoe-activity-7260443751838318592-CQ9i?utm_source=share&utm_medium=member_desktop'
        },
        'project3-info': {
            title: 'Interactive Coffee Shop Rating Page',
            description:
                'Designed for coffee enthusiasts and casual browsers alike, this interactive webpage allows users to rate coffee shops using a star system and view contact details and social media links for each shop. Developed with HTML, CSS, and JavaScript, the site includes dynamic messaging that changes based on the star rating given, providing personalized feedback and enhancing the user interactive experience. This project showcases the ability to create user-friendly interfaces for feedback and customer engagement.',
            image: 'images/project3-thumbnail.png',
            linkedin: 'https://www.linkedin.com/posts/thejivanrm_techinternship-frontendinternship-softwaredevelopmentintern-activity-7279015237624717312-Fn-o?utm_source=share&utm_medium=member_desktop3',
            github: 'https://github.com/Jivanrm/coffeeShop_rating'
        },
        'project4-info': {
            title: 'Dynamic Todo List Web Application',
            description:
                'This Todo List website is a robust tool for task management, offering features that allow users to organize tasks based on their current status: pending, in process, or completed. Each status is color-coded, providing a clear and visual representation of task progress. The site is developed using HTML, CSS, and JavaScript, emphasizing usability and functional aesthetics. It\'s an excellent example of how web technologies can be used to create efficient, user-centric tools that enhance productivity.',
            image: 'images/project4-thumbnail.png',
            linkedin: 'https://www.linkedin.com/posts/thejivanrm_webdevelopment-javascript-html-activity-7252173888887902208-3tDh?utm_source=share&utm_medium=member_desktop',
            github: 'https://github.com/Jivanrm/todo_listv1.0'
        },
        'project5-info': {
            title: 'Flag of The USA',
            description:
                'This project uses Python’s Turtle graphics library to draw the US flag, demonstrating the potential of programming in creating educational and iconic imagery. Users can witness the step-by-step construction of the flag in a graphical interface, making it an excellent tool for educational purposes or for anyone interested in graphical programming. It showcases the versatility of Python programming and its applicability in educational technology.',
            image: 'images/project5-thumbnail.jpg',
            linkedin: 'https://www.linkedin.com/posts/thejivanrm_webdevelopment-python-turtlegraphics-activity-7261604470663331840-c0QD?utm_source=share&utm_medium=member_desktop',
            github: 'https://github.com/Jivanrm/US_FLAG_PYGRAPH'
        },
        'project6-info': {
            title: 'The Movie Hub Web App',
            description:
                'Movie Hub is a sophisticated platform designed to showcase proficiency in handling and integrating external APIs, specifically The Movie Database (TMDB). This website displays movies sorted by genre along with detailed information such as release dates. Developed using HTML, CSS, JavaScript, and robust API handling techniques, it serves as a testament to the developers ability to create rich, informative, and user-friendly web applications that leverage external data sources effectively.',
            image: 'images/project6-thumbnail.jpg',
            linkedin: 'https://www.linkedin.com/posts/thejivanrm_techinternship-frontendinternship-softwaredevelopmentintern-activity-7277820577430585345-u_yj?utm_source=share&utm_medium=member_desktop',
        },
        'project7-info': {
            title: 'The Keyboard for Pianist',
            description:
                'The Keyboard Piano project is a creative reimagining of musical interaction on the web. It allows users to play music using their computer\'s keyboard, with each key corresponding to different musical notes. The application supports various waveform types—sine, square, triangle, and sawtooth—offering users a range of sounds to experiment with. Developed using HTML, CSS, JavaScript, and audio APIs, this project is a perfect blend of technology and creativity, providing a unique musical experience to its users.',
            image: 'images/project7-thumbnail.jpg',
            linkedin: 'https://www.linkedin.com/posts/thejivanrm_techinternship-frontendinternship-webdevelopment-activity-7279757030700015616-yjhy?utm_source=share&utm_medium=member_desktop',
            github: 'https://github.com/Jivanrm/Keyboard_piano'
        }
    };

    // Open modal when clicking "Project Info"
    infoButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor behavior
            const projectKey = button.dataset.project;
            if (projectInfo[projectKey]) {
                modalTitle.textContent = projectInfo[projectKey].title;
                modalDescription.textContent = projectInfo[projectKey].description;
                modalImage.src = projectInfo[projectKey].image; // Update image source
                modalLinkedIn.href = projectInfo[projectKey].linkedin; // Update LinkedIn URL
                modalGitHub.href = projectInfo[projectKey].github; // Update GitHub URL

                // Ensure modal is visible
                modal.style.display = 'flex';
                setTimeout(() => {
                    modal.classList.add('visible'); // Trigger animations
                }, 10); // Slight delay to ensure CSS transition is applied
            }
        });
    });

    // Close modal on clicking close button
    closeBtn.addEventListener('click', () => {
        closeModal();
    });

    // Close modal when clicking outside content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    function closeModal() {
        modal.classList.remove('visible');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300); // Matches the CSS transition duration
    }

 // ========================
    // ✅ Navbar (Mobile Menu)
    // ========================
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevents event bubbling
        navMenu.classList.toggle('active');
        hamburger.querySelector('i').classList.toggle('fa-bars');
        hamburger.querySelector('i').classList.toggle('fa-times'); // Toggle icon
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove('active');
            hamburger.querySelector('i').classList.add('fa-bars');
            hamburger.querySelector('i').classList.remove('fa-times');
        }
    });

    // Close menu when clicking a menu link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.querySelector('i').classList.add('fa-bars');
            hamburger.querySelector('i').classList.remove('fa-times');
        });
    });
    
});
