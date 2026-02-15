# Firebase Web Hosting Setup (React Project)

This guide explains how to host a React website using Firebase Hosting in simple steps.

---

## 📌 What is Firebase Hosting?

Firebase Hosting is a service by Google that lets you upload your website and make it live on the internet.  
After deployment, anyone can open your site using a URL.

We use **Firebase CLI** (command line tool) to upload the project.

---

## 🧰 Requirements

Make sure you have:

- Node.js installed
- npm installed
- React project ready
- Google account (for Firebase)

Check installation:

```bash
node -v
npm -v
```

---

## 1️⃣ Install Firebase CLI

Install Firebase command line tool globally:

```bash
npm install -g firebase-tools
```

Check version:

```bash
firebase --version
```

---

## 2️⃣ Login to Firebase

Login using your Google account:

```bash
firebase login
```

A browser will open → login with Gmail.

---

## 3️⃣ Create Firebase Project

1. Go to: https://console.firebase.google.com
2. Click **Create Project**
3. Enter project name
4. Click Continue
5. Disable Google Analytics (optional)
6. Click Create

Your Firebase project is ready.

---

## 4️⃣ Initialize Firebase in Project

Open terminal inside your React project folder.

```bash
cd my-react-app
firebase init
```

Select:

- Hosting (press space → Enter)

Then answer:

- Select project → choose your Firebase project
- Public directory → `build`
- Single page app → Yes
- Overwrite index.html → No

Firebase setup is complete.

---

## 5️⃣ Build React App

Before deploying, create production build:

```bash
npm run build
```

This creates a **build** folder.

---

## 6️⃣ Deploy to Firebase

Now deploy your website:

```bash
firebase deploy
```

After deployment, you will get a live link like:

```
https://your-project.web.app
```

Open it in browser → your site is live 🎉

---

## 7️⃣ Update Website

If you change code later:

```bash
npm run build
firebase deploy
```

---

## 📁 Project Structure Example

```
project-folder/
│
├── src/
├── public/
├── build/
├── firebase.json
└── .firebaserc
```

---

## 🛠 Useful Commands

Login:

```bash
firebase login
```

Init:

```bash
firebase init
```

Build:

```bash
npm run build
```

Deploy:

```bash
firebase deploy
```

Logout:

```bash
firebase logout
```

---

## ✅ Conclusion

Firebase Hosting is simple and fast.  
Steps to host website:

1. Install Firebase CLI
2. Login
3. Initialize project
4. Build project
5. Deploy

Your React website will be live online.

---
