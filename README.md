# Tips about Project Management

### Agenda
- Project Flow
- Srum
- Github


## Project Flow
- What are your steps to implement a project?
  - Define the **requirements** of your project
    
    - **stack of technologies**
      - **Frontend** with React (Context, useReducer, react-router, validator, localStorage ...)
      - **Backend** Node.js (Express, Cors, express-validator, ...)
      - **Database** MongoDB (mongoose)
      - **File Hosting** Cloudinary
      - **Authentication** JWT, cookies
      - **Version Control** Github (project, issues, kanban, feature-branches, pull-requests)
    
    - **Basic Features** (product owner)
      - User Authentication (Login, Register, Forget Password, Email Verification, Change Password, ...)
      - Product Managment (CRUD operation, product listing)
      - Cart System (cart-content, modify cart, switch to payment, store data in database ...)
      - Order System (Pament, Delivery, listing, ...)
      - Admin Dashboard (reports, manage users/products/orers, ... )
    
    - **System Requirement**
      - CPU
      - Memory
      - Storage
  
  - **Analysis & Design**
    - GUI (Graphical User Interfaces)
    - EndPoints (http://localhost:3000/users/login POST [email, password] [withCredentials, ])
    - Models {fullname, username, password, email}
    - Security (public)
  
  - **Implementation (coding)**
    - create a feature-branch-yourname
    - implement the feature
    - send a pull request
  
  - **Testing**
    - Playwright
    - Selenium
    - Jest
    - Cucumberjs
    - Postman
    - ...


## Scrum
- >"Scrum is like building a Lego set in short sessions."
  >You plan a few pieces, build them, show them, then plan the next ones.

### Scrum Roles
  - **Product Owner**: Represents the customer. Prioritizes what features to build.
  - **Scrum Master**: Keeps the team focused and removes blockers. Ensures meetings happen.
  - **Developers**: The team that codes the features, writes tests, documents, etc.

### Scrum Artifacts
- **Product Backlog**: A list of all features/bugs to do. Example: "User can register", "Cart page"
- **Sprint Backlog**: Tasks selected for the current Sprint (usually 1–4 weeks)
- **Increment**: Deployed or locally working code that can be demoed


### SCRUM Events
- Structure the project timeline with these ceremonies:

- **Sprint Planning**	Start of Sprint	 → Decide which tasks to work on. Estimate time. Use story points.
- **Daily Standup**	Daily (5–10 min) → Everyone answers: What did I do yesterday? What will I do today? Any blockers?
- **Sprint Review**	End of Sprint →	Demo what was built. Get feedback.
- **Sprint Retrospective**	End of Sprint →	Reflect: What went well? What can we improve?