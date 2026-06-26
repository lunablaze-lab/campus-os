# CampusOS

> The open-source operating system for modern educational institutions.

CampusOS is a modular, open-source platform that helps schools, colleges and universities manage academic, administrative and campus operations from a single unified system.

Instead of using dozens of disconnected applications, CampusOS provides one integrated platform for students, faculty and administrators.

---

## Vision

Build an open-source ecosystem that every educational institution can self-host, customize and extend.

Our mission is to make high-quality campus management software accessible to everyone while providing students with real-world open-source experience.

---

## Features

### Academic

* Student Information System
* Faculty Management
* Attendance
* Timetable
* Internal Marks
* Course Management
* Examination Management

### Campus Life

* Events
* Clubs
* Lost & Found
* Complaint Portal
* Hostel Management
* Bus Tracking
* Notifications

### Administration

* Authentication
* Role Based Access Control
* Departments
* User Management
* Audit Logs
* Reports
* Analytics

### AI

* Campus AI Assistant
* Document Search
* FAQ Chatbot
* Timetable Assistant
* Knowledge Base
* Smart Search

---

## Technology Stack

### Frontend

* React
* TypeScript
* Vite
* React Router
* Tailwind CSS
* TanStack Query
* Zustand
* Zod

### Backend

* Node.js
* Express
* TypeScript
* PostgreSQL
* Drizzle ORM
* JWT Authentication
* Swagger/OpenAPI

### Infrastructure

* Docker
* Docker Compose
* GitHub Actions
* Nginx

---

## Repository Structure

```
campusos
│
├── backend/
│   ├── src/
│   ├── tests/
│   ├── docs/
│   └── Dockerfile
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── vite.config.ts
│
├── docs/
│
├── scripts/
│
├── docker/
│
└── README.md
```

---

## Frontend Architecture

```
src
│
├── app
├── assets
├── components
├── config
├── features
├── hooks
├── layouts
├── lib
├── pages
├── routes
├── services
├── shared
├── store
├── styles
├── types
└── utils
```

The project follows a feature-first architecture where each module owns its UI, business logic and API integration.

---

## Backend Architecture

```
src
│
├── app
├── config
├── controllers
├── database
├── docs
├── dto
├── enums
├── middlewares
├── repositories
├── routes
├── services
├── types
├── utils
└── validators
```

The backend follows a layered architecture:

```
Route
   ↓
Controller
   ↓
Service
   ↓
Repository
   ↓
Database
```

---

## Modules

* Authentication
* Dashboard
* Students
* Faculty
* Departments
* Courses
* Timetable
* Attendance
* Events
* Clubs
* Hostel
* Library
* Placement
* Complaints
* Notifications
* AI Assistant

Each module is designed to be independently maintainable.

---

## Getting Started

### Clone

```bash
git clone https://github.com/lunablaze-lab/campusos.git
```

### Start Frontend

```bash
cd frontend
npm install
npm run dev
```

### Start Backend

```bash
cd backend
npm install
npm run dev
```

---

## Development Workflow

1. Fork the repository
2. Create a feature branch

```
feature/student-dashboard
```

3. Commit using meaningful messages

```
feat(auth): implement JWT refresh token
```

4. Open a Pull Request

Every pull request is reviewed before merging into `main`.

---

## Contributing

We welcome contributions from developers of all experience levels.

Good first issues are labeled with:

* good first issue
* documentation
* frontend
* backend
* bug
* enhancement

Please read the Contributing Guide before opening a pull request.

---

## Roadmap

### Phase 1

* Authentication
* User Roles
* Dashboard
* Student Module
* Faculty Module

### Phase 2

* Attendance
* Timetable
* Events
* Clubs

### Phase 3

* Library
* Hostel
* Placement
* Complaints

### Phase 4

* AI Assistant
* Analytics
* Mobile Application

---

## Documentation

Project documentation is available in the `/docs` directory.

Topics include:

* Architecture
* Database Design
* API Documentation
* Deployment
* Security
* Coding Standards

---

## License

MIT License

---

## Built by LunaBlaze

CampusOS is developed by the LunaBlaze open-source community.

We believe students learn best by building software that people actually use.
