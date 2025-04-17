# 🏨 Project Plan: Hotel Website

## 🔧 Project Summary
Build a full-stack hotel booking and informational website inspired by https://www.bauernhof-hotel-leogang.com/en/. The site will include room browsing, seasonal content, and user enquiries, using modern web technologies.

---

## 🔨 Tech Stack
- **Frontend**: React, React Router, Bootstrap or SCSS, React Hook Form
- **Backend (optional)**: Node.js, Express, MongoDB (if bookings or CMS-like functionality is needed)
- **Dev Tools**: Vite, GitHub, Postman, VS Code
- **Deployment**: Netlify or Vercel (frontend), Render or Railway (backend)

---

## 🗂️ Project Structure
### Pages
- `/` - Home (hero image, welcome message, featured rooms)
- `/accommodation` - List of rooms/apartments
- `/accommodation/:id` - Room detail page
- `/summer-holiday` - Info page
- `/winter-holiday` - Info page
- `/contact` - Contact & enquiry form

### Components
- `Navbar`
- `Footer`
- `RoomCard`
- `ImageGallery`
- `SeasonSection`
- `ContactForm`

---

## 🧱 MVP Feature Plan

### 1. Navigation & Routing
- [ ] Install React Router
- [ ] Set up layout with `<Outlet />`
- [ ] Create routes for all pages

### 2. Homepage
- [ ] Hero image (static or slideshow)
- [ ] Welcome message
- [ ] Highlighted rooms (3 cards)

### 3. Accommodation Listing
- [ ] Display all rooms with images, summary, and “more info” link
- [ ] Optional filters (guests, type, price)

### 4. Room Details Page
- [ ] Full image gallery
- [ ] Description, price, amenities
- [ ] Booking enquiry button (link to contact)

### 5. Seasonal Pages (Summer/Winter)
- [ ] Description of activities
- [ ] Embedded video or image section
- [ ] Links to relevant services (spa, hiking, skiing etc.)

### 6. Contact Form
- [ ] Name, email, message
- [ ] Optional dropdown: which room, arrival/departure
- [ ] Validate + submit to console or backend

---

## 🧪 Stretch Features (Optional)
- [ ] Live weather widget (API)
- [ ] Webcam embed
- [ ] Admin dashboard (if backend is used)
- [ ] Image upload via Cloudinary
- [ ] Basic blog / news section
- [ ] Room availability calendar

---

## 🔄 Workflow
- Use Git with feature branches: `feature/component-name`
- Create a kanban board (GitHub Projects, Notion, or Jira)
- Code review via Pull Requests

---

## 🕒 Timeline (4 weeks example)
| Week | Goal |
|------|------|
| 1 | Routing, layout, homepage basic setup |
| 2 | Accommodation list/detail, contact form |
| 3 | Seasonal pages, styling, form validation |
| 4 | Final polish, deployment, docs |

---

## 📁 Assets Needed
- Room images
- Hotel description content (placeholder okay for now)


INITIAL FILE STRUCTURE:

/src
│
├── /assets/                # Static assets (images, logos, icons)
│   └── hero.jpg (or multiple heroes + vids)
│
├── /components/            # Reusable UI components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── RoomCard.jsx
│   ├── ImageGallery.jsx
│   ├── SeasonSection.jsx
│   └── ContactForm.jsx
│
├── /pages/                 # Route-level pages
│   ├── Home.jsx
│   ├── Accommodation.jsx
│   ├── RoomDetail.jsx
│   ├── SummerHoliday.jsx
│   ├── WinterHoliday.jsx
│   └── Contact.jsx
│
├── /data/                  # Static data (room descriptions etc.)
│   └── rooms.json
│
├── /styles/                # Global or modular SCSS/CSS
│   ├── global.scss
│   └── components.scss
│
├── App.jsx                 # Main App component with routes
├── main.jsx                # Vite entry point
└── vite.config.js
