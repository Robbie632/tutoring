const subjects = [
  {
    name: "Setup & Tools",
    topics: [
    "installing php",
    "configuring php",
      "Using VScode for PHP/MySQL",
      "Install required PHP/MySQL/Laravel extensions (e.g., PHP Intelephense)",
      "running development php server"
    ],
    progress: 0,
    recommended_progress: 95,
    prerequisites : []
  },
  {
    name: "Server Client Architecture",
    topics: [
      "Client-server model review",
      "HTTP/HTTPS basics (methods, headers, status codes)",
      "Request/response cycle (focus on the server side)",
      "Understanding statelessness and session management"
    ],
    progress: 0,
    recommended_progress: 95,
    prerequisites : ['Setup & Tools']
  },
  {
    name: "PHP Fundamentals (Vanilla)",
    topics: [
      "Syntax, variables & data types (scalar, array, object)",
      "Control Flow (conditionals, loops)",
      "Functions and including files",
      "Superglobals ($\_GET, $\_POST, $\_SERVER, $\_SESSION, $\_COOKIE)",
      "Error handling and logging",
      "PHP Built-in Web Server"
    ],
    progress: 0,
    recommended_progress: 95,
    prerequisites : ['Setup & Tools', 'Server Client Architecture']
  },
  {
    name: "Composer & Modern PHP",
    topics: [
      "Introduction to **Composer** (PHP dependency manager)",
      "Installing and using packages (e.g., for logging or environment variables)",
      "Autoloading review",
      "Semantic Versioning (SemVer)"
    ],
    progress: 0,
    recommended_progress: 95,
    prerequisites : ['Object-Oriented PHP (OOP)']
  },
  {
    name: "Object-Oriented PHP (OOP)",
    topics: [
      "Classes, objects, properties, and methods",
      "Encapsulation, Inheritance, and Polymorphism",
      "Abstract classes and Interfaces",
      "Traits",
      "Namespaces and Autoloading (PSR standards)",
      "Introduction to Design Patterns (e.g., Singleton, Factory)"
    ],
    progress: 0,
    recommended_progress: 95,
    prerequisites : ['PHP Fundamentals (Vanilla)']
  },
  {
    name: "Database Fundamentals (MySQL)",
    topics: [
      "Relational Database concepts (Tables, Rows, Columns, Keys)",
      "SQL basics (SELECT, INSERT, UPDATE, DELETE)",
      "Joins (INNER, LEFT, RIGHT)",
      "Indexes and performance optimization",
      "Database normalization (1NF, 2NF, 3NF)",
      "Using a GUI tool (e.g., phpMyAdmin, DBeaver, MySQL Workbench)"
    ],
    progress: 0,
    recommended_progress: 95,
    prerequisites : ['Setup & Tools']
  },
  {
    name: "PHP & MySQL Integration",
    topics: [
      "Connecting to MySQL using **PDO** (PHP Data Objects)",
      "Prepared statements for **security** (preventing SQL injection)",
      "Executing queries and fetching results",
      "Building a simple CRUD (Create, Read, Update, Delete) application",
      "Session management for basic authentication"
    ],
    progress: 0,
    recommended_progress: 95,
    prerequisites : ['PHP Fundamentals (Vanilla)', 'Database Fundamentals (MySQL)']
  },
  {
    name: "Security & Best Practices (Vanilla)",
    topics: [
      "Input validation and sanitization",
      "Password hashing (using `password_hash` and `password_verify`)",
      "Preventing XSS (Cross-Site Scripting)",
      "CSRF (Cross-Site Request Forgery) prevention basics",
      "Separation of concerns (basic MVC concept)"
    ],
    progress: 0,
    recommended_progress: 95,
    prerequisites : ['PHP & MySQL Integration', 'Object-Oriented PHP (OOP)']
  },
  {
    name: "Laravel Framework - Setup & Basics",
    topics: [
      "Laravel installation via Composer",
      "Understanding the **MVC** (Model-View-Controller) architecture",
      "Routing and Controllers",
      "Blade templating engine",
      "Environment configuration (.env file)"
    ],
    progress: 0,
    recommended_progress: 95,
    prerequisites : ['Composer & Modern PHP', 'PHP & MySQL Integration']
  },
  {
    name: "Laravel - Eloquent & Databases",
    topics: [
      "Database configuration and Migrations",
      "**Eloquent ORM** (Object-Relational Mapping)",
      "Models and database relationships (One-to-One, One-to-Many, Many-to-Many)",
      "Seeding and Factories (test data generation)",
      "Query Builder vs. Eloquent"
    ],
    progress: 0,
    recommended_progress: 95,
    prerequisites : ['Laravel Framework - Setup & Basics']
  },
  {
    name: "Laravel - Advanced Backend",
    topics: [
      "Authentication and Authorization (**Laravel Breeze/Jetstream**)",
      "Middleware and request lifecycle",
      "Form validation and request objects",
      "APIs with Laravel (building RESTful endpoints)",
      "Testing (Unit and Feature tests with PHPUnit)"
    ],
    progress: 0,
    recommended_progress: 95,
    prerequisites : ['Laravel - Eloquent & Databases', 'Security & Best Practices (Vanilla)']
  },
  {
    name: "Deployment & Maintenance",
    topics: [
      "Deployment strategies (e.g., using shared hosting, VPS, or services like **Heroku/DigitalOcean**)",
      "Basic server configuration (Nginx/Apache)",
    ],
    progress: 0,
    recommended_progress: null,
    prerequisites : ['Laravel - Advanced Backend']
  },
  {
    name: "Portfolio Project (Backend Focused)",
    topics: [
      "Planning and executing a full-stack Laravel application (e.g., a blog, task manager, or e-commerce clone)",
      "Project version control with Git and GitHub",
      "Automated deployment using **GitHub Actions** or similar CI/CD",
      "API documentation (e.g., using Swagger/OpenAPI)"
    ],
    progress: 0,
    recommended_progress: null,
    prerequisites : ['Laravel - Advanced Backend', 'Deployment & Maintenance']
  }
];

export {subjects};