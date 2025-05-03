# 🎯 React Quiz App

This is a simple quiz app built with **React**. It displays one question at a time, allows users to select options, and navigate through questions. Super beginner-friendly and a great starter project.

---

## 🚀 Features

- ✅ Multiple-choice questions
- ✅ Track selected answers
- ✅ Navigate with "Next" and "Previous"
- ✅ Answer stays saved when moving between questions
- ✅ Clean layout (you can style it your way)
- ✅ See The Result At The Last;
- ✅ Restaart  The Quiz Again;

---

## 🧠 How It Works

- Questions are stored in an array called `questionsBank`.
- The app uses:
  - `useState()` to track current question index
  - Another `useState()` to store selected answers in an array
- When a user selects an option, it updates the answer in the array.
- The selected option is highlighted.
- Navigation buttons let users move between questions, but stay disabled if no answer is selected.

---

## 🛠️ Tech Stack

- React (Functional Components)
- JavaScript (ES6+)
- HTML + CSS (Basic styling, feel free to level up)

---

## 📁 Project Structure

📦 quiz-app
┣ 📄 Quiz.jsx
┣ 📄 App.jsx
┣ 📄 index.js
┣ 📄 README.md



---

## 🧪 How to Run

1. Make sure you have Node.js installed.
2. Open your terminal in the project folder.
3. Run these commands:

```bash
npm install
npm start
