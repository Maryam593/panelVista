# panelVista

## Overview
PanelVista is a web application designed to manage user profiles, track activity, and display key insights on a dashboard. The application is built using **React (Frontend)**, **Redux (State Management)**, and **Node.js/Express with MongoDB (Backend)**.

## Features
### 1️⃣ User Profile Management
- Users can create and update their profiles.
- Profile details include **introduction, education, profile image**, etc.
- Profile data is fetched from the backend and displayed dynamically.

### 2️⃣ Dashboard
- The dashboard greets the user and displays their latest activity.
- Quick actions like "Edit Profile" are available.
- Last login time is shown.
- Recent activities are planned to be displayed in **chart format**.

### 3️⃣ Activity Tracking (Planned Feature)
- Recent user actions like login, profile updates, and other key activities will be logged.
- **Redux** will temporarily store these activities.
- **Backend API** will be used for persistent storage.
- The activity log will be displayed on the dashboard in **chart & list formats**.

---
## Tech Stack
### 🏗 **Frontend**
- React.js (UI framework)
- Redux(RTK) (State Management)
- React Router (Navigation)
- Axios (API Calls)
- Tailwind CSS (Styling)
- Lucide-react (Icons)

### ⚙ **Backend**
- Node.js & Express (Server)
- MongoDB (Database)
- Mongoose (ODM for MongoDB)

---
## Installation & Setup
### **Step 1: Clone the Repository**
```sh
 git clone https://github.com/Maryam593/panelVista.git
 cd panelVista
```

### **Step 2: Install Dependencies**
#### Frontend
```sh
 cd frontend
 npm install
```
#### Backend
```sh
 cd backend
 npm install
```

### **Step 3: Set Up Environment Variables**
Create a `.env` file in the **backend** directory and add:
```sh
MONGO_URI=mongodb://localhost:27017/PanelVista
PORT=3000
```

### **Step 4: Run the Application**
#### Start Backend Server
```sh
 cd backend
 npm run dev
```
#### Start Frontend React App
```sh
 cd frontend
 npm run dev
```
The application will be accessible at `http://localhost:3000`.

---
## Pending Tasks 🚧 
⬜ **Profile data population in UI**  
⬜ **Dynamic recent activity tracking (Redux & API)**  
⬜ **Charts for activity visualization on Dashboard**  
---
## Contributing
If you want to contribute:
1. Fork the repository.
2. Create a feature branch.
3. Commit changes and push to GitHub.
4. Submit a pull request.

---
## Contact
For any queries, reach out at [https://github.com/Maryam593 ].

---
🚀 **Happy Coding!**

