# TimerDoc Landing Page

TimerDoc is a Document Management System designed to help users register documents, track deadlines, and manage responsibilities. The platform allows users to associate each document with its required completion period, the client requesting the document, and the person responsible for its delivery. This ensures efficient document tracking, accountability, and timely completion for organizations and teams.

This repository contains the landing page for the TimerDoc platform, built with React and styled for a modern, responsive web experience.

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Configuration](#configuration)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- Responsive landing page built with React
- Modern design and user experience
- Highlights TimerDoc's main features and team
- Contact form for inquiries
- Sectioned layout: Features, About, Team, Contact

---

## Project Structure

```
timerdoc__lp/
├── public/
│   ├── bg.jpg
│   ├── contato.jpg
│   ├── TD-ACRONYM-V1-FIT-WO-BG.png
│   ├── TD-FULL-V1-FIT-WO-BG.png
│   ├── favicon.ico
│   ├── index.html
│   └── ...
├── src/
│   ├── _components/
│   │   ├── about/
│   │   ├── button/
│   │   ├── contact/
│   │   ├── input/
│   │   ├── main-display/
│   │   ├── services/
│   │   ├── team/
│   │   └── topbar/
│   ├── _pages/
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── ...
```

---

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Start the development server:**
   ```sh
   npm start
   ```

3. **Open your browser:**
   - Visit [http://localhost:3000](http://localhost:3000)

---

## Scripts

- `npm start` – Start the development server
- `npm run build` – Build the app for production
- `npm test` – Run tests

See all scripts in [package.json](./package.json).

---

## Configuration

- Static assets and configuration files are in the `public/` folder.
- No environment variables are required for the landing page.

---

## Testing

- Tests are written with [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/).
- Run all tests:
  ```sh
  npm test
  ```

---

## Contributing

Pull requests are welcome! Please lint and test your code before submitting.

---

## License

This project is **UNLICENSED**. See [package.json](./package.json) for details.

## References

- [Main Project](https://github.com/ricardoponcio/TimerDoc)