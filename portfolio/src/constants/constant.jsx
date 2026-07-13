export const myProjects = [
  {
    title: 'Resume Analyzer',
    desc: 'AI-powered resume analysis tool that matches resumes against job descriptions and returns actionable feedback.',
    subdesc:
      'Developed a Spring Boot REST API enabling PDF resume uploads, extracting text via Apache PDFBox and persisting data in MySQL using JPA. Integrated Ollama (LLaMA 3.2) to analyze resumes against job descriptions, returning match score, matching skills, missing skills, and recommendations. Containerized the full stack with Docker Compose, orchestrating Spring Boot, MySQL, and Ollama for seamless deployment.',
    href: 'https://github.com/MyshaZeshan/Resume-Analyzer.git',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    
  },
  {
    title: 'Business Analyzer Agent',
    desc: 'An AI-powered business analysis tool that uses a multi-agent system to research, evaluate, and generate actionable insights for any business idea or company.',
    subdesc:
      'Built with CrewAI for agent orchestration, Ollama for local LLM inference, and Streamlit for an interactive interface — enabling private, cost-free AI analysis without relying on external APIs.',
    href: 'https://github.com/MyshaZeshan/Business-Analyzer.git',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    
  },

  {
    title: 'Sports Day Registration System',
    desc: 'An end-to-end registration platform for sports day events, supporting participant sign-ups, admin-level oversight, and simulated payment handling via JazzCash integration.',
    subdesc:
      'Developed with Flask and Jinja2 templating, backed by SQLAlchemy ORM and SQLite, with role-based access for admins and users, plus searchable, paginated records and CSV export functionality.',
    href: 'https://github.com/MyshaZeshan/Sports-Registration-Website.git',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    
  },
]