# Node.js Live App with GitHub Self-Hosted Runner 🚀

This project demonstrates how to automatically deploy a Node.js application using a self-hosted GitHub Actions runner on an EC2 instance.

## 💡 Features

- Simple Express.js web server
- GitHub self-hosted runner for automatic deployment
- Live deployment to EC2 public IP on code push

## 🛠️ Setup Instructions

### 1. Clone & Install

```bash
git clone https://github.com/YOUR_USERNAME/nodejs-github-runner-app.git
cd nodejs-github-runner-app
npm install
npm start
```

### 2. Create EC2 Instance & Setup Runner

- Install Node.js & npm
- Follow GitHub's self-hosted runner setup:
  - Settings > Actions > Runners > New Runner

### 3. GitHub Actions Workflow

Located at `.github/workflows/deploy.yml`, it runs on every push to main and:

- Installs dependencies
- Restarts the app

## 🌐 Access the App

Visit `http://YOUR_PUBLIC_IP:3000` to see the app live.

---

Made with ❤️ for live CI/CD practice.