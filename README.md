
# VibeCall 🎥💬

**VibeCall** is a full-stack video calling and messaging web application where users can add friends, chat in real-time, and initiate video calls — all within a clean and intuitive UI.

## 🚀 Features

- 🔐 JWT-based authentication
- 🧑‍🤝‍🧑 Add & manage friends
- 💬 Real-time messaging
- 📹 One-to-one video calling
- 🌙 Beautiful UI with 32 different themes (via daisyUI)
- 📡 Optimized API calls using TanStack Query
- 🌐 Fully responsive and fast performance

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB (Mongoose)**
- **JWT** for authentication
- **React.js**
- **TanStack Query** for efficient data fetching
- **Tailwind CSS + DaisyUI** for UI components and theming
- **Streamify SDK** (For real-time chat/video communication)


## 📦 Installation

### 1. Clone the repository
```bash
git clone https://github.com/himanshur4/VibeCall.git
cd VibeCall
```

### 2. Setup the backend
```bash
cd server
npm install
# Add a `.env` file with your Mongo URI, JWT secret, etc.
npm run dev
```

### 3. Setup the frontend
```bash
cd ../client
npm install
# Make sure to configure VITE_API_URL in .env
npm run dev
```

## 🔐 Environment Variables

### Backend (`server/.env`)
```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

### Frontend (`client/.env`)
```
VITE_API_URL=http://localhost:5000
```

## 📸 Screenshots

![image](https://github.com/user-attachments/assets/e51599f4-fd36-4e6a-b2e4-036d5744da65)
![image](https://github.com/user-attachments/assets/43ffe9fa-bb49-472b-9ea4-1fb8c35ef854)
![image](https://github.com/user-attachments/assets/9b9bd22f-10dc-4524-8d07-fa0c7df7240f)
![image](https://github.com/user-attachments/assets/14052f4f-2965-4ca5-9fb5-c2bd56a6572f)
![image](https://github.com/user-attachments/assets/113c0930-cf73-440e-8ed9-3632a3963479)
![image](https://github.com/user-attachments/assets/c0ad3f59-fe89-47e8-b277-66f096000691)
![image](https://github.com/user-attachments/assets/036583e5-0c72-475b-98ed-4f277124c0ed)
![image](https://github.com/user-attachments/assets/8b4b8389-aa4e-4a83-8891-ec753779973f)



## 🙌 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

---

## 📄 License

[MIT](LICENSE)


