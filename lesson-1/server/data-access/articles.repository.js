const articles = [
  {
    id: 1,
    title: "First few steps into web",
    text: '<!DOCTYPE html>\n<html>\n<head>\n\t<meta charset="UTF-8">\n\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\t<title>My first webpage</title>\n</head>\n<body>\n\t<h1>Hello world!</h1>\n</body>\n</html>',
  },
  {
    id: 2,
    title: "Best web framework",
    text: "When choosing a web framework, consider your project requirements, team expertise, and performance needs. Popular options like React, Vue, and Angular each have unique strengths. React excels at building complex user interfaces with its component-based architecture. Vue offers a gentler learning curve with an intuitive API. Angular provides a complete, opinionated framework for enterprise applications. The 'best' framework depends on your specific use case and preferences.",
  },
  {
    id: 3,
    title: "Introduction to APIs",
    text: "An API (Application Programming Interface) allows different software applications to communicate with each other. REST APIs are the most common type used in web development, using HTTP methods like GET, POST, PUT, and DELETE to perform operations on resources. APIs enable developers to build applications that leverage existing services and data, promoting code reuse and efficient development. Understanding APIs is essential for modern web development.",
  },
  {
    id: 4,
    title: "Version Control with Git",
    text: "Git is a distributed version control system that tracks changes in your code over time. It allows multiple developers to collaborate effectively, manage different versions of a project, and revert to previous states if needed. Key concepts include repositories, branches, commits, and merges. Learning Git is fundamental to professional software development and enables teams to work together seamlessly.",
  },
  {
    id: 5,
    title: "Database Basics",
    text: "Databases store and manage data efficiently. There are two main types: relational databases (like PostgreSQL and MySQL) organize data into tables with predefined schemas, while NoSQL databases (like MongoDB) offer flexible, document-based storage. Choosing the right database depends on your data structure, scalability needs, and query patterns. Understanding database design and optimization is crucial for building robust applications.",
  },
  {
    id: 6,
    title: "Web Security Fundamentals",
    text: "Security is a critical aspect of web development. Common threats include SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF). Protect your applications by validating user input, using parameterized queries, implementing proper authentication and authorization, keeping dependencies updated, and using HTTPS for secure communication. Following security best practices helps safeguard user data and prevent attacks.",
  },
];

function findAll() {
  return articles;
}

function findById(id) {
  return articles.find((article) => article.id === id);
}

module.exports = { findAll, findById };
