


# VibeCall 🎥💬

**VibeCall** is a full-stack video calling and messaging web application where users can add friends, chat in real-time, and initiate video calls — all within a clean and intuitive UI.

**Live Preview:** https://vibe-call.vercel.app

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

![image](https://github.com/user-attachments/assets/8ff274a7-5759-49eb-a4c1-a73a332aa0cc)
![image](https://github.com/user-attachments/assets/de445ae0-8a21-4da1-88b6-96c7ea546520)

![image](https://github.com/user-attachments/assets/0c25f16b-f127-407a-8f91-ecd81fc9ccc8)





## 🙌 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

---

## 📄 License

[MIT](LICENSE)


