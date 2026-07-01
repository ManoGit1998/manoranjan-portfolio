export const profile = {
  name: "Manoranjan Nayak",
  title: "Java Backend Developer",
  tagline: "Building resilient microservices for distributed banking systems.",
  location: "Bengaluru, India",
  email: "itsmanoranjan1998@gmail.com",
  phone: "+91 7978402298",
  linkedin: "https://linkedin.com/in/your-profile",
  github: "https://github.com/your-username",
};

export const logLines = [
  "[boot] initializing service: manoranjan-nayak",
  "[boot] role=java-backend-developer env=production",
  "[auth] identity verified — clearance: full-stack-backend",
  "[kafka] consumer connected — topic=banking.events partitions=12",
  "[spring] microservices online — services=6 status=healthy",
  "[jenkins] pipeline triggered — build=#482 result=SUCCESS",
  "[deploy] region=sbm-bank-kenya downtime=0s",
  "[status] uptime=100% incidents=0 client_appreciation=received",
];

export const experience = [
  {
    id: "rumango",
    company: "Rumango Software and Consulting Services Pvt Ltd",
    role: "Java Backend Developer",
    period: "Aug 2023 — Present",
    location: "Bengaluru, Karnataka",
    status: "RUNNING",
    logs: [
      "Developed and maintained microservices for banking applications using Spring Boot, improving performance and scalability across distributed systems",
      "Integrated Kafka-based event-driven communication between services, enabling real-time asynchronous processing",
      "Automated CI/CD pipelines using Jenkins for deployment reliability, reducing manual release effort significantly",
      "Provided production support and resolved critical issues during releases and post-go-live stabilization",
    ],
  },
  {
    id: "sbm-kenya",
    company: "SBM Bank, Kenya — Onsite Deployment",
    role: "Median ESB Delivery Engineer",
    period: "5 Months",
    location: "Nairobi, Kenya",
    status: "STABLE",
    logs: [
      "Delivered Median ESB solution at client location and handled production go-live activities end-to-end",
      "Resolved critical issues during go-live and post go-live stabilization, ensuring zero business disruption",
      "Received formal client appreciation for successful delivery and exceptional system stability under pressure",
    ],
  },
];

export const projects = [
  {
    id: "icust",
    name: "ICUST Banking Platform & Median ESB",
    status: "production",
    stack: ["Spring Boot", "Java", "Kafka", "Oracle"],
    description:
      "RESTful backend services powering core banking modules — Wallet, Teller Operations, Loan & Account Origination, and Internet Banking — built as Spring Boot microservices.",
    highlights: [
      "Kafka-based real-time messaging decouples banking workflows for high-throughput event reliability",
      "End-to-end production deployment and system integration for SBM Bank, Kenya",
      "Stabilized platform during and after go-live with zero business disruption",
    ],
  },
  {
    id: "median-middleware",
    name: "Median Middleware Application",
    status: "production",
    stack: ["Java", "Spring Boot", "WebLogic", "Oracle"],
    description:
      "System-to-system middleware enabling seamless message transfer across heterogeneous banking platforms.",
    highlights: [
      "Multi-protocol message exchange: HTTP/HTTPS, JSON, XML, ISO 1987/1993",
      "Bridges legacy and modern banking systems without data loss",
    ],
  },
  {
    id: "sias",
    name: "SIAS File Management System",
    status: "stable",
    stack: ["Java", "Spring Boot", "Tomcat", "Oracle"],
    description:
      "Secure file upload and retrieval system built for high availability and controlled access.",
    highlights: [
      "Role-based access control across all file operations",
      "Automated Jenkins CI/CD pipelines for build, test, and deployment — reducing manual effort and deployment errors",
    ],
  },
];

export const skillGroups = [
  {
    label: "languages",
    items: ["Java 8/11", "SQL", "JavaScript"],
  },
  {
    label: "frameworks_apis",
    items: ["Spring Boot", "Microservices", "REST API", "JPA / Hibernate"],
  },
  {
    label: "messaging_esb",
    items: ["Apache Kafka", "Median ESB", "Enterprise Service Bus"],
  },
  {
    label: "databases",
    items: ["Oracle DB", "MySQL", "PostgreSQL"],
  },
  {
    label: "tools_platforms",
    items: ["Jenkins CI/CD", "Docker", "Git", "Oracle WebLogic", "Apache Tomcat", "JIRA", "GitHub"],
  },
  {
    label: "practices",
    items: ["Agile / Scrum", "Production Support", "System Integration", "Go-Live Delivery"],
  },
];

export const education = {
  school: "Biju Patnaik University of Technology",
  degree: "Master of Computer Applications",
  period: "2019 — 2022",
  location: "Odisha, India",
  score: "85.4%",
};

export const certifications = [
  {
    name: "Oracle Certified Professional, Java SE 8 Programmer",
    issuer: "Oracle Corporation",
  },
];

export const achievements = [
  "Received formal client appreciation from SBM Bank, Kenya for on-time delivery and exceptional system stability during go-live",
];
