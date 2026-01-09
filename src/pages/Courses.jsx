import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./styles/Courses.css";

const Courses = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);

    const courses = [
        {
            id: "A",
            title: "Java",
            description: "Learn Java programming from basics to advanced topics including OOP, multithreading, and collections.",
            details: `
                    - **Introduction to Java**: Learn Java syntax, data types, and basic operations.
                    - **Object-Oriented Programming (OOP)**: Understand classes, objects, inheritance, polymorphism, and encapsulation.
                    - **Multithreading**: Learn how to create and manage threads for concurrent programming.
                    - **Collections Framework**: Master Lists, Sets, Maps, and their implementations.
                    - **Exception Handling**: Handle runtime errors using try-catch blocks and custom exceptions.
                    - **Java Streams & Lambda Expressions**: Write functional-style Java code efficiently.
                    - **Spring Boot & Web Development**: Build RESTful APIs and backend applications.
                    - **Database Connectivity**: Use JDBC and Hibernate to interact with databases.
                `,
            imgMain: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
            imgHover: "https://cdn-icons-png.flaticon.com/512/5968/5968282.png"
        },
        {
            id: "B",
            title: "Python",
            description: "Master Python for data science, automation, web development, and AI applications.",
            details: `
                    - **Introduction to Python**: Learn Python syntax, data types, and basic operations.
                    - **Control Flow**: Understand loops, conditionals, and functions.
                    - **Object-Oriented Programming (OOP)**: Learn about classes, objects, inheritance, polymorphism, and encapsulation.
                    - **Data Structures & Algorithms**: Lists, Tuples, Dictionaries, Sets, and searching/sorting algorithms.
                    - **File Handling**: Read, write, and manipulate files in Python.
                    - **Modules & Packages**: Learn how to create and use Python modules and libraries.
                    - **Database Connectivity**: Work with MySQL, PostgreSQL, and SQLite using Python (via 'sqlite3' and 'MySQL Connector').
                    - **Web Development with Flask & Django**: Build REST APIs and full-stack web applications.
                    - **Data Science & Machine Learning**: Use libraries like NumPy, Pandas, Matplotlib, and Scikit-learn.
                    - **Automation & Scripting**: Automate tasks using Python scripts (e.g., web scraping, email automation).
                    - **Artificial Intelligence (AI) & Deep Learning**: Learn TensorFlow, PyTorch, and Keras.
                    - **Cybersecurity & Ethical Hacking**: Use Python for penetration testing and security analysis.
                    - **Deployment & Cloud Computing**: Deploy applications on AWS, Heroku, and Docker.
                `,
            imgMain: "./img/07.png",
            imgHover: "./img/08.png"
        },
        {
            id: "C",
            title: "JavaScript",
            description: "Build dynamic web applications using JavaScript, ES6+, and modern frameworks.",
            details: `
                    - **Introduction to JavaScript**: Learn about variables, data types, operators, and basic syntax.
                    - **Functions & Scope**: Understand function declarations, expressions, arrow functions, and scope (global vs local).
                    - **DOM Manipulation**: Learn how to interact with HTML and CSS using JavaScript.
                    - **ES6+ Features**: Explore modern JavaScript features like let/const, template literals, spread/rest operators, and destructuring.
                    - **Event Handling**: Handle user interactions such as clicks, form submissions, and keyboard events.
                    - **Asynchronous JavaScript**: Master callbacks, promises, async/await, and AJAX requests.
                    - **Modules & Webpack**: Organize JavaScript code using modules and bundlers like Webpack.
                    - **Fetch API & API Integration**: Work with REST APIs, fetch data dynamically, and handle JSON responses.
                    - **Object-Oriented Programming (OOP) in JavaScript**: Learn about classes, prototypes, and inheritance.
                    - **Error Handling & Debugging**: Use try/catch, console debugging, and performance optimization techniques.
                    - **Modern JavaScript Frameworks**: Introduction to React.js, Vue.js, and Angular for front-end development.
                    - **Node.js & Backend Development**: Use JavaScript on the server-side with Express.js and MongoDB.
                    - **Testing & Deployment**: Write unit tests with Jest, automate builds, and deploy JavaScript applications on Firebase or Vercel.
                `,
            imgMain: "./img/43.png",
            imgHover: "./img/44.png"
        },
        {
            id: "D",
            title: "HTML & CSS",
            description: "Learn the core technologies for building beautiful and responsive web pages.",
            details: `
                    - **Introduction to HTML**: Learn HTML syntax, tags, and document structure.
                    - **HTML Forms & Input Elements**: Work with forms, input fields, buttons, and form validation.
                    - **HTML5 Features**: Learn about semantic elements, audio/video embedding, and canvas.
                    - **CSS Basics**: Understand CSS selectors, properties, and how to apply styles to HTML elements.
                    - **Box Model & Layout**: Master margins, padding, borders, and positioning techniques.
                    - **Flexbox & Grid**: Build responsive and flexible layouts using modern CSS techniques.
                    - **CSS Animations & Transitions**: Create smooth UI effects using keyframes and transitions.
                    - **Media Queries & Responsive Design**: Make your websites mobile-friendly and adaptable.
                    - **CSS Preprocessors (SASS & LESS)**: Learn how to use variables, mixins, and nesting for scalable CSS.
                    - **Bootstrap & Tailwind CSS**: Utilize frameworks to speed up development and maintain consistency.
                    - **CSS Custom Properties (CSS Variables)**: Use variables to create reusable styles efficiently.
                    - **Web Accessibility (A11Y)**: Ensure websites are accessible to all users.
                    - **Best Practices & Performance Optimization**: Learn about minification, lazy loading, and performance techniques.
                `,
            imgMain: "./img/23.png",
            imgHover: "./img/24.png"
        },
        {
            id: "E",
            title: "MVC",
            description: "Understand the Model-View-Controller architecture for scalable web applications.",
            details: `
                    - **Introduction to MVC**: Learn the core principles of the Model-View-Controller pattern.
                    - **Understanding the Model Layer**: How to handle data, databases, and business logic.
                    - **View Layer & Templating**: Creating user interfaces using HTML, CSS, and templating engines (JSP, Thymeleaf, EJS, etc.).
                    - **Controller Layer**: Managing user requests, processing inputs, and connecting the model with the view.
                    - **Routing & URL Handling**: Implementing navigation and request handling in an MVC framework.
                    - **MVC in Web Development**: Learn how MVC is implemented in frameworks like Spring MVC, ASP.NET MVC, Django, and Ruby on Rails.
                    - **Dependency Injection & Service Layers**: Understanding how to structure scalable applications.
                    - **RESTful APIs & MVC**: Implementing REST APIs with proper MVC design.
                    - **Authentication & Authorization in MVC**: Handling user logins, sessions, and role-based access.
                    - **State Management & Data Binding**: Managing dynamic data flow between components.
                    - **Testing & Debugging MVC Applications**: Unit testing controllers, models, and integration tests.
                    - **Deployment & Performance Optimization**: Best practices for deploying scalable MVC applications.
                `,
            imgMain: "./img/29.png",
            imgHover: "./img/30.png"
        },
        {
            "id": "F",
            "title": "ASP.NET",
            "description": "Develop enterprise-grade web applications using ASP.NET Core and C#.",
            "details": `
                    - **Introduction to ASP.NET**: Learn about ASP.NET, .NET Core, and the advantages of using ASP.NET for web development.
                    - **C# Fundamentals**: Understand C# syntax, OOP concepts, and advanced programming techniques.
                    - **ASP.NET Core vs ASP.NET Framework**: Learn the differences and when to use each.
                    - **MVC Architecture in ASP.NET**: Implement the Model-View-Controller pattern for scalable web applications.
                    - **Routing & Middleware**: Understand how ASP.NET Core handles requests and middleware customization.
                    - **Entity Framework Core (EF Core)**: Work with databases using ORM, migrations, and LINQ queries.
                    - **Dependency Injection**: Implement DI for modular and testable applications.
                    - **Authentication & Authorization**: Secure applications using Identity, JWT, and OAuth.
                    - **RESTful APIs with ASP.NET Core**: Build, test, and document APIs using Swagger.
                    - **Blazor for Web UI**: Build interactive web applications using Blazor and Razor components.
                    - **SignalR for Real-Time Applications**: Implement real-time messaging and notifications.
                    - **Unit Testing & Debugging**: Test controllers, services, and API endpoints using NUnit/XUnit.
                    - **Deployment & CI/CD**: Deploy ASP.NET apps to Azure, AWS, and Docker with CI/CD pipelines.
                `,
            "imgMain": "./img/27.png",
            "imgHover": "./img/28.png"
        },
        {
            "id": "G",
            "title": "C / C++",
            "description": "Learn the foundations of system programming and object-oriented programming with C/C++.",
            "details": `
                    - **Introduction to C & C++**: Learn about the history, features, and differences between C and C++.
                    - **Basic Syntax & Data Types**: Understand variables, operators, and control structures.
                    - **Functions & Memory Management**: Learn function declarations, recursion, pointers, and dynamic memory allocation.
                    - **Object-Oriented Programming (OOP) in C++**: Master classes, objects, inheritance, polymorphism, encapsulation, and abstraction.
                    - **Standard Template Library (STL)**: Explore data structures like vectors, lists, maps, and sets.
                    - **File Handling in C & C++**: Learn how to read/write files and handle streams.
                    - **Multi-threading & Concurrency**: Implement parallel programming using threads.
                    - **Data Structures & Algorithms**: Master linked lists, stacks, queues, trees, graphs, sorting, and searching algorithms.
                    - **Game Development with C++**: Basics of using C++ for game programming with SDL or Unreal Engine.
                    - **Competitive Programming**: Learn problem-solving techniques for coding contests.
                    - **System Programming in C**: Understand low-level programming concepts, including OS and networking.
                    - **Debugging & Optimization**: Techniques to optimize and debug C/C++ programs effectively.
                    - **Building Real-world Projects**: Implement C/C++ in software development, embedded systems, and high-performance applications.
                `,
            "imgMain": "./img/31.png",
            "imgHover": "./img/32.png"
        },
        {
            "id": "H",
            "title": "C#",
            "description": "Develop robust applications with C#, focusing on .NET framework and desktop applications.",
            "details": `
                    - **Introduction to C#**: Learn about C# syntax, data types, variables, and operators.
                    - **Object-Oriented Programming (OOP) in C#**: Master classes, objects, inheritance, polymorphism, encapsulation, and abstraction.
                    - **Exception Handling**: Handle runtime errors with try-catch-finally and custom exceptions.
                    - **Collections & LINQ**: Work with Lists, Dictionaries, Queues, and use LINQ for data querying.
                    - **File Handling & Streams**: Learn to read, write, and manipulate files in C#.
                    - **Multithreading & Asynchronous Programming**: Implement parallel programming with async/await and tasks.
                    - **Windows Forms & WPF Applications**: Build desktop applications with graphical user interfaces.
                    - **.NET Framework & .NET Core**: Understand the differences and how to build cross-platform apps.
                    - **Database Connectivity with ADO.NET & Entity Framework**: Work with MySQL, SQL Server, and SQLite.
                    - **Web Development with ASP.NET Core**: Create REST APIs and MVC-based web applications.
                    - **Game Development with Unity & C#**: Learn C# scripting for game programming in Unity.
                    - **Dependency Injection & Design Patterns**: Understand SOLID principles and best coding practices.
                    - **Deployment & Debugging**: Optimize and debug C# applications for production.
                `,
            "imgMain": "./img/34.png",
            "imgHover": "./img/33.png"
        },
        {
            "id": "I",
            "title": "MySQL",
            "description": "Manage relational databases efficiently using MySQL and SQL queries.",
            "details": `
                    - **Introduction to Databases & MySQL**: Learn database concepts, relational databases, and MySQL installation.
                    - **SQL Basics**: Understand data types, tables, constraints, and relationships.
                    - **Data Manipulation**: Perform CRUD operations (Create, Read, Update, Delete).
                    - **Joins & Subqueries**: Work with INNER, LEFT, RIGHT, and FULL JOINs for complex queries.
                    - **Functions & Stored Procedures**: Utilize built-in SQL functions and create stored procedures.
                    - **Indexes & Performance Optimization**: Improve query efficiency using indexes and best practices.
                    - **Transactions & ACID Properties**: Learn about atomicity, consistency, isolation, and durability.
                    - **Triggers & Event Scheduling**: Automate database actions using triggers and scheduled events.
                    - **Database Normalization**: Optimize database design using normalization techniques.
                    - **Backup & Recovery**: Learn strategies for database backup, restore, and disaster recovery.
                    - **MySQL with Programming Languages**: Connect MySQL with Java, Python, and Node.js.
                    - **Security & User Management**: Implement user roles, privileges, and encryption.
                    - **Scaling MySQL Databases**: Learn about replication, clustering, and load balancing.
                `,
            "imgMain": "./img/09.png",
            "imgHover": "./img/10.png"
        },
        {
            "id": "J",
            "title": "OOPS (Object-Oriented Programming)",
            "description": "Understand object-oriented programming principles and design patterns.",
            "details": `
                    - **Introduction to OOP**: Understand the fundamentals of object-oriented programming and why it's used.
                    - **Classes & Objects**: Learn how to define and use classes, objects, constructors, and methods.
                    - **Encapsulation**: Implement data hiding and access control using private, public, and protected modifiers.
                    - **Abstraction**: Learn how to simplify complex systems by exposing only relevant data and methods.
                    - **Inheritance**: Understand how to reuse code and establish parent-child relationships between classes.
                    - **Polymorphism**: Learn method overloading and method overriding for flexible and reusable code.
                    - **Interfaces & Abstract Classes**: Differentiate between interfaces and abstract classes and their use cases.
                    - **Association, Aggregation & Composition**: Understand relationships between classes for effective design.
                    - **Exception Handling in OOP**: Learn how to handle runtime errors efficiently.
                    - **File Handling & Streams**: Work with files, streams, and I/O operations in an OOP language.
                    - **Multithreading & Concurrency**: Learn how to run parallel processes using threads.
                    - **Design Patterns**: Explore key patterns like Singleton, Factory, Observer, and MVC.
                    - **OOP in Different Languages**: Compare OOP implementation in Java, C++, Python, and C#.
                    - **Best Practices & Code Optimization**: Learn clean coding practices, SOLID principles, and refactoring techniques.
                `,
            "imgMain": "./img/19.png",
            "imgHover": "./img/22.png"
        },
        {
            "id": "K",
            "title": "MHT-CET",
            "description": "Prepare for the Maharashtra Common Entrance Test with expert guidance and study materials.",
            "details": `
                    - **Introduction to MHT-CET**: Overview of the exam pattern, syllabus, and marking scheme.
                    - **Mathematics**: Covers Algebra, Trigonometry, Calculus, Probability, and Coordinate Geometry.
                    - **Physics**: Topics include Mechanics, Thermodynamics, Electromagnetism, Optics, and Modern Physics.
                    - **Chemistry**: Organic, Inorganic, and Physical Chemistry with important concepts and numerical problem-solving.
                    - **Biology (For PCB Students)**: Focus on Genetics, Human Physiology, Ecology, and Biotechnology.
                    - **Mock Tests & Previous Year Papers**: Solve full-length mock tests and analyze past year question papers.
                    - **Time Management & Exam Strategies**: Learn effective techniques for time-saving and accuracy improvement.
                    - **Doubt Solving & Mentorship**: Get personalized guidance and expert mentorship sessions.
                    - **Online & Offline Study Materials**: Access digital notes, video lectures, and reference books.
                    - **Shortcuts & Tricks**: Learn shortcut methods for faster calculations in Mathematics and Physics.
                `,
            "imgMain": "./img/35.png",
            "imgHover": "./img/36.png"
        },
        {
            "id": "L",
            "title": "IIT JEE",
            "description": "Ace the IIT JEE exam with top-quality resources and mentorship.",
            "details": `
                    - **Introduction to IIT JEE**: Overview of the JEE Main and Advanced exam pattern, syllabus, and marking scheme.
                    - **Mathematics**: Covers Algebra, Trigonometry, Coordinate Geometry, Calculus, Probability, and Vectors.
                    - **Physics**: Mechanics, Thermodynamics, Electromagnetism, Optics, Modern Physics, and Advanced Problem Solving.
                    - **Chemistry**: Covers Organic, Inorganic, and Physical Chemistry with a focus on conceptual understanding and numerical problem-solving.
                    - **Problem-Solving Techniques**: Learn step-by-step approaches for tackling complex problems efficiently.
                    - **Mock Tests & Previous Year Papers**: Regular full-length and topic-wise tests with detailed solutions.
                    - **Time Management & Exam Strategies**: Learn effective techniques to improve speed and accuracy.
                    - **Doubt Solving & One-on-One Mentorship**: Get expert guidance and personalized study plans.
                    - **Live Classes & Video Lectures**: Access high-quality video lessons by experienced IITians and top faculty.
                    - **AI-Based Performance Analysis**: Track progress with AI-driven test analysis and personalized improvement plans.
                `,
            "imgMain": "./img/37.png",
            "imgHover": "./img/38.png"
        },
        {
            "id": "M",
            "title": "11th / 12th",
            "description": "Build a strong foundation in science and mathematics for competitive exams.",
            "details": `
                    - **Mathematics**: Covers Algebra, Trigonometry, Coordinate Geometry, Calculus, Probability, and Statistics.
                    - **Physics**: Mechanics, Thermodynamics, Electromagnetism, Optics, Modern Physics, and Problem-Solving Techniques.
                    - **Chemistry**: Organic, Inorganic, and Physical Chemistry with an emphasis on conceptual clarity.
                    - **Biology (For PCB Students)**: Human Physiology, Genetics, Biotechnology, and Ecology.
                    - **Board Exam Preparation**: Conceptual understanding, NCERT solutions, and important questions.
                    - **Competitive Exam Preparation**: Covers IIT JEE, NEET, MHT-CET, and other entrance exams.
                    - **Doubt Solving & Mentorship**: Personalized guidance and one-on-one doubt sessions.
                    - **Live Classes & Video Lectures**: High-quality lessons by experienced faculty.
                    - **Mock Tests & Previous Year Papers**: Regular tests with detailed solutions and AI-based analysis.
                    - **Time Management & Exam Strategies**: Techniques to improve speed, accuracy, and retention.
                `,
            "imgMain": "./img/40.png",
            "imgHover": "./img/39.png"
        },
        {
            "id": "N",
            "title": "ISO Certifications",
            "description": "Learn about ISO standards and certifications for quality management.",
            "details": `
                    - **Introduction to ISO**: Understanding the International Organization for Standardization (ISO) and its significance.
                    - **ISO 9001: Quality Management System (QMS)**: Learn the principles of quality management, process improvements, and compliance.
                    - **ISO 14001: Environmental Management System (EMS)**: Study environmental policies, sustainability practices, and regulatory requirements.
                    - **ISO 27001: Information Security Management System (ISMS)**: Learn cybersecurity best practices, risk management, and data protection.
                    - **ISO 45001: Occupational Health & Safety (OHSMS)**: Understand workplace safety, risk assessment, and compliance measures.
                    - **ISO 22000: Food Safety Management System (FSMS)**: Study food safety protocols, hazard control, and HACCP principles.
                    - **ISO 13485: Medical Device Quality Management**: Learn regulatory requirements for medical devices.
                    - **ISO Certification Process**: Steps for certification, audits, documentation, and implementation.
                    - **Internal & External Audits**: Learn how to conduct ISO audits and prepare for certification.
                    - **Compliance & Legal Aspects**: Understanding global compliance and legal frameworks.
                    - **Career Opportunities in ISO Certification**: Jobs in quality assurance, compliance, and auditing.
                `,
            "imgMain": "./img/41.png",
            "imgHover": "./img/42.png"
        }
    ]

    useEffect(() => {
        if (selectedCourse) {
            import(`./modal-${selectedCourse.id}.css`).catch(() => {
                console.log("No specific CSS found for this course.");
            });
        }
    }, [selectedCourse]);

    const openModal = (course) => {
        setSelectedCourse(course);
    };

    const closeModal = () => {
        setSelectedCourse(null);
    };

    return (
        <>
            <Navbar />
            <h1 className="courses-title">COURSES</h1>
            <hr />

            <section className="services-container">
                {courses.map(course => (
                    <div key={course.id} className={`service-card-${course.id}`}>
                        <div className={`service-icon-${course.id}`}>
                            <img className={`main-img-${course.id}`} src={course.imgMain} alt={course.title} />
                            <img className={`hover-img-${course.id}`} src={course.imgHover} alt={`Hover ${course.title}`} />
                        </div>
                        <div className={`service-text-${course.id}`}>
                            <h3 className="service-title">{course.title}</h3>
                            <p className={`service-info-${course.id}`}>{course.description}</p>
                            <button className="service-btn" onClick={() => openModal(course)}>Know More</button>
                        </div>
                        <div className={`serial-number-${course.id}`}>{course.id}</div>
                    </div>
                ))}
            </section>

            {/* Modal for Course Details */}
            {selectedCourse && (
                <div className={`modal-overlay modal-${selectedCourse.id}`} onClick={closeModal}>
                    <div className={`modal-content modal-${selectedCourse.id}`} onClick={(e) => e.stopPropagation()}>
                        <span className="close-btn" onClick={closeModal}>&times;</span>
                        <img src={selectedCourse.imgMain} alt="" className="modal-img" />
                        <p>{selectedCourse.description}</p>
                        {selectedCourse.details && (
                            <div className="course-details">
                                <h3>Course Highlights</h3>
                                <p dangerouslySetInnerHTML={{ __html: selectedCourse.details.replace(/\n/g, "<br>") }}></p>
                            </div>
                        )}
                    </div>
                </div>
            )}


            <Footer />
        </>
    );
}

export default Courses;


