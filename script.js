// DOM Content Loaded Event
document.addEventListener("DOMContentLoaded", () => {
  // Initialize the portfolio
  initializePortfolio();

  // Setup navigation
  setupNavigation();

  // Setup scroll animations
  setupScrollAnimations();

  // Setup form handling
  setupContactForm();

  // Setup mobile menu
  setupMobileMenu();
});

// Initialize Portfolio with Data
function initializePortfolio() {
  const studentData = {
    personal: {
      name: "John Doe",
      title: "Web Developer",
      description:
        "A passionate web developer with a focus on creating responsive and user-friendly websites.",
      profileImage: "path/to/profile.jpg",
      email: "john.doe@example.com",
    },
    social: {
      github: "https://github.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
    },
    about: {
      description: "I am a web developer with over 5 years of experience.",
      stats: {
        projectsCount: 10,
        experienceYears: 5,
        skillsCount: 15,
      },
      quickFacts: [
        "Loves coding",
        "Experienced with JavaScript",
        "Enjoys problem-solving",
      ],
    },
    education: [
      {
        year: "2015-2019",
        degree: "Bachelor of Science in Computer Science",
        institution: "University of Example",
        description: "Focused on web development and software engineering.",
      },
    ],
    skills: {
      Frontend: {
        icon: "fab fa-html5",
        skills: ["HTML", "CSS", "JavaScript"],
      },
      Backend: {
        icon: "fab fa-node-js",
        skills: ["Node.js", "Express", "MongoDB"],
      },
    },
    projects: [
      {
        title: "Project Alpha",
        description: "A web application for managing tasks.",
        technologies: ["React", "Node.js", "MongoDB"],
        github: "https://github.com/johndoe/project-alpha",
        demo: "https://project-alpha.example.com",
      },
    ],
    contact: {
      email: "john.doe@example.com",
      phone: "123-456-7890",
      location: "New York, USA",
      availability: "Available",
    },
  };

  populatePersonalInfo(studentData);
  populateAboutSection(studentData);
  populateEducation(studentData);
  populateSkills(studentData);
  populateProjects(studentData);
  populateContact(studentData);
}

// Populate Personal Information
function populatePersonalInfo(studentData) {
  const { personal, social } = studentData;

  // Navigation and footer
  document.getElementById("nav-name").textContent = personal.name;
  document.getElementById("footer-name").textContent = personal.name;

  // Hero section
  document.getElementById("student-name").textContent = personal.name;
  document.getElementById("student-title").textContent = personal.title;
  document.getElementById("student-description").textContent =
    personal.description;
  document.getElementById("profile-image").src = personal.profileImage;
  document.getElementById(
    "profile-image"
  ).alt = `${personal.name} - Profile Picture`;

  // Social links
  document.getElementById("github-link").href = social.github;
  document.getElementById("linkedin-link").href = social.linkedin;
  document.getElementById("email-link").href = `mailto:${personal.email}`;
}

// Populate About Section
function populateAboutSection(studentData) {
  const { about } = studentData;

  document.getElementById("about-description").textContent = about.description;
  document.getElementById("projects-count").textContent =
    about.stats.projectsCount;
  document.getElementById("experience-years").textContent =
    about.stats.experienceYears;
  document.getElementById("skills-count").textContent = about.stats.skillsCount;

  // Quick facts
  const quickFactsList = document.getElementById("quick-facts");
  quickFactsList.innerHTML = "";
  about.quickFacts.forEach((fact) => {
    const li = document.createElement("li");
    li.textContent = fact;
    quickFactsList.appendChild(li);
  });

  // Animate counters
  animateCounters();
}

// Populate Education Timeline
function populateEducation(studentData) {
  const { education } = studentData;
  const timeline = document.getElementById("education-timeline");

  timeline.innerHTML = "";
  education.forEach((edu, index) => {
    const timelineItem = document.createElement("div");
    timelineItem.className = "timeline-item";
    timelineItem.innerHTML = `
              <div class="timeline-content">
                  <div class="timeline-year">${edu.year}</div>
                  <h3 class="timeline-title">${edu.degree}</h3>
                  <div class="timeline-institution">${edu.institution}</div>
                  <p class="timeline-description">${edu.description}</p>
              </div>
          `;
    timeline.appendChild(timelineItem);
  });
}

// Populate Skills Section
function populateSkills(studentData) {
  const { skills } = studentData;
  const skillsGrid = document.getElementById("skills-grid");

  skillsGrid.innerHTML = "";
  Object.entries(skills).forEach(([category, data]) => {
    const skillCategory = document.createElement("div");
    skillCategory.className = "skill-category";
    skillCategory.innerHTML = `
              <h3>${data.icon} ${category}</h3>
              <div class="skill-list">
                  ${data.skills
                    .map((skill) => `<span class="skill-tag">${skill}</span>`)
                    .join("")}
              </div>
          `;
    skillsGrid.appendChild(skillCategory);
  });
}

// Populate Projects Section
function populateProjects(studentData) {
  const { projects } = studentData;
  const projectsGrid = document.getElementById("projects-grid");

  projectsGrid.innerHTML = "";
  projects.forEach((project, index) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";
    projectCard.innerHTML = `
              <div class="project-image">
                  <span>${project.icon}</span>
              </div>
              <div class="project-content">
                  <h3 class="project-title">${project.title}</h3>
                  <p class="project-description">${project.description}</p>
                  <div class="project-tech">
                      ${project.technologies
                        .map((tech) => `<span class="tech-tag">${tech}</span>`)
                        .join("")}
                  </div>
                  <div class="project-links">
                      <a href="${
                        project.github
                      }" class="project-link" target="_blank">
                          <i class="fab fa-github"></i> Code
                      </a>
                      <a href="${
                        project.demo
                      }" class="project-link" target="_blank">
                          <i class="fas fa-external-link-alt"></i> Demo
                      </a>
                  </div>
              </div>
          `;
    projectsGrid.appendChild(projectCard);
  });
}

// Populate Contact Section
function populateContact(studentData) {
  const { contact, personal } = studentData;
  const contactItems = document.getElementById("contact-items");

  const contactData = [
    {
      icon: "fas fa-envelope",
      label: "Email",
      value: contact.email,
      link: `mailto:${contact.email}`,
    },
    {
      icon: "fas fa-phone",
      label: "Phone",
      value: contact.phone,
      link: `tel:${contact.phone}`,
    },
    {
      icon: "fas fa-map-marker-alt",
      label: "Location",
      value: contact.location,
      link: "#",
    },
    {
      icon: "fas fa-clock",
      label: "Availability",
      value: contact.availability,
      link: "#",
    },
  ];

  contactItems.innerHTML = "";
  contactData.forEach((item) => {
    const contactItem = document.createElement("div");
    contactItem.className = "contact-item";
    contactItem.innerHTML = `
              <div class="contact-icon">
                  <i class="${item.icon}"></i>
              </div>
              <div class="contact-details">
                  <strong>${item.label}</strong>
                  <p>${item.value}</p>
              </div>
          `;
    if (item.link !== "#") {
      contactItem.style.cursor = "pointer";
      contactItem.addEventListener("click", () => {
        window.open(item.link, "_blank");
      });
    }
    contactItems.appendChild(contactItem);
  });
}

// Setup Navigation
function setupNavigation() {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section");

  // Smooth scrolling for navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }

      // Close mobile menu if open
      const navMenu = document.querySelector(".nav-menu");
      navMenu.classList.remove("active");
    });
  });

  // Update active navigation link on scroll
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      if (
        window.pageYOffset >= sectionTop &&
        window.pageYOffset < sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === current) {
        link.classList.add("active");
      }
    });
  });
}

// Setup Scroll Animations
function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Observe sections
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    observer.observe(section);
  });

  // Observe timeline items
  const timelineItems = document.querySelectorAll(".timeline-item");
  timelineItems.forEach((item) => {
    observer.observe(item);
  });

  // Observe project cards
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card) => {
    observer.observe(card);
  });
}

// Animate Counters
function animateCounters() {
  const counters = document.querySelectorAll(".stat-number");

  counters.forEach((counter) => {
    const target = Number.parseInt(counter.textContent);
    const increment = target / 50;
    let current = 0;

    const updateCounter = () => {
      if (current < target) {
        current += increment;
        counter.textContent = Math.ceil(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };

    // Start animation when element is visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          updateCounter();
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(counter);
  });
}

// Setup Contact Form
function setupContactForm() {
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Simple validation
    if (!name || !email || !message) {
      showNotification("Please fill in all fields.", "error");
      return;
    }

    // Simulate form submission
    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;

    submitButton.textContent = "Sending...";
    submitButton.disabled = true;

    setTimeout(() => {
      showNotification(
        "Message sent successfully! I'll get back to you soon.",
        "success"
      );
      this.reset();
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    }, 2000);
  });
}

// Setup Mobile Menu
function setupMobileMenu() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Close menu when clicking on a link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
}

// Show Notification
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
          <div class="notification-content">
              <span>${message}</span>
              <button class="notification-close">&times;</button>
          </div>
      `;

  // Add styles
  notification.style.cssText = `
          position: fixed;
          top: 20px;
          right: 20px;
          background: ${
            type === "success"
              ? "#10b981"
              : type === "error"
              ? "#ef4444"
              : "#3b82f6"
          };
          color: white;
          padding: 1rem 1.5rem;
          border-radius: 8px;
          box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
          z-index: 10000;
          transform: translateX(100%);
          transition: transform 0.3s ease;
          max-width: 400px;
      `;

  notification.querySelector(".notification-content").style.cssText = `
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
      `;

  notification.querySelector(".notification-close").style.cssText = `
          background: none;
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          padding: 0;
          line-height: 1;
      `;

  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  // Auto remove after 5 seconds
  setTimeout(() => {
    removeNotification(notification);
  }, 5000);

  // Close button functionality
  notification
    .querySelector(".notification-close")
    .addEventListener("click", () => {
      removeNotification(notification);
    });
}

// Remove Notification
function removeNotification(notification) {
  notification.style.transform = "translateX(100%)";
  setTimeout(() => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification);
    }
  }, 300);
}

// Parallax Effect for Hero Section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero");
  const heroContent = document.querySelector(".hero-content");

  if (hero && heroContent) {
    const rate = scrolled * -0.5;
    heroContent.style.transform = `translateY(${rate}px)`;
  }
});

// Add loading animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded");

  // Add CSS for loading state
  const style = document.createElement("style");
  style.textContent = `
          body:not(.loaded) {
              overflow: hidden;
          }
          
          body:not(.loaded)::before {
              content: '';
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: white;
              z-index: 10000;
              display: flex;
              align-items: center;
              justify-content: center;
          }
          
          body:not(.loaded)::after {
              content: '';
              position: fixed;
              top: 50%;
              left: 50%;
              width: 50px;
              height: 50px;
              border: 3px solid #f3f3f3;
              border-top: 3px solid #6366f1;
              border-radius: 50%;
              animation: spin 1s linear infinite;
              z-index: 10001;
              transform: translate(-50%, -50%);
          }
          
          @keyframes spin {
              0% { transform: translate(-50%, -50%) rotate(0deg); }
              100% { transform: translate(-50%, -50%) rotate(360deg); }
          }
      `;
  document.head.appendChild(style);
});
