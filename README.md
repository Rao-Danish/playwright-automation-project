# 🎭 Playwright Automation Framework  

An advanced **end-to-end testing framework** built using **Playwright**, designed for **web application testing** with features like custom logging, HTML reports, CI/CD integration, and screenshot evidence for failed tests.  

---

## ✨ Features  

✅ **Modular Test Design** – Organized structure for scalability and maintainability.  
✅ **Custom Logger Utility** – Simple and beautiful console logs for info, success, and errors.  
✅ **HTML Reporting** – Automatically generates a detailed test report after every run.  
✅ **Screenshot on Failure** – Captures evidence when a test fails.  
✅ **Environment Variables Support** – Manage credentials or config securely with `.env`.  
✅ **GitHub Actions CI/CD** – Runs your Playwright tests automatically on every push or pull request.  

---

## 🗂️ Project Structure  

📁 playwright-automation/
│
├── 📁 tests/ # Test files (organized by feature)
├── 📁 utils/ # Custom utilities like logger
│ └── logger.js
├── 📁 reports/ # HTML reports generated after test runs
├── 📁 screenshots/ # Failed test screenshots
├── .github/workflows/ # GitHub Actions configuration (Playwright.yml)
├── .env # Environment variables (not committed to repo)
├── package.json
└── playwright.config.js

---

🧑‍💻 Author

Danish Bilal
💼 Software QA Engineer | 💻 Automation Enthusiast
📍 Lahore, Pakistan
🔗 LinkedIn

⭐ Support

If you like this project, please ⭐ it on GitHub —
it motivates me to keep improving this automation framework ❤️

🛠️ Built With

Playwright
Node.js
GitHub Actions
