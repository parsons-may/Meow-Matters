**Meow Matters** is a responsive, accessible web application designed to promote cat adoption and awareness. The app highlights adoptable cats, and streamlines the donation process with user-friendly forms.

**Status:** In progress.

---

## 🚀 Features
- Adaptive navigation menus for mobile and desktop
- Accessible, validated subscription form modal
- Carousel, cards, and interactive UI components
- Mobile-first, responsive design
- Spring Boot REST API (`/api/cats`) that serves cat listings from a SQL database

---

## 🛠️ Tech Stack
- **Frontend:** React, Vite, JavaScript, HTML, CSS
- **Backend:** Java 17, Spring Boot, REST API
- **Database:** H2 (in-memory SQL), accessed with Spring JDBC
- **Testing:** JUnit 5
- **Tools:** Git, GitHub, VS Code, IntelliJ IDEA

---

## ▶️ Run Locally
Install dependencies once, then start the frontend and backend together:

```bash
npm install
npm run dev:all
```

- Frontend: http://localhost:5173
- Backend API: http://localhost:8080/api/cats

The database is created in memory on startup. `backend/src/main/resources/schema.sql` creates the `cats` table and `data.sql` loads the cat listings.

Run the backend tests:

```bash
cd backend && ./mvnw test
```
