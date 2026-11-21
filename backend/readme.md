<img width="1873" height="843" alt="Screenshot 2026-11-21 164700" src="https://github.com/user-attachments/assets/e71203cd-8b9b-4f44-a25a-69c7b7a6627e" />


# File-Based Task Manager

A lightweight notes and task management web app built with Node.js, Express, and EJS. Instead of using a database, it uses Node's built-in File System (`fs`) module to store every task locally as a `.txt` file.

## Features

- **Create Tasks:** Add a title and detailed description through a simple form.
- **Local File Storage:** Automatically saves each task as a `.txt` file inside the `files/` directory.
- **Dynamic Dashboard:** Reads the `files/` folder on every request and displays saved tasks as cards, with an empty state when no tasks exist.
- **Read Full Details:** Click "Read more..." on any card to open a dedicated page showing the full content of that note.
- **Dark UI:** Clean, responsive dark interface styled with Tailwind CSS.

## Tech Stack

- **Backend:** Node.js, Express.js
- **Templating Engine:** EJS
- **Storage:** Node.js File System (`fs`) module
- **Styling:** Tailwind CSS (via Play CDN)

## Project Structure

```text
├── files/              # Stores all created .txt task files
├── public/             # Static assets (images, stylesheets, javascripts)
├── views/
│   ├── index.ejs       # Home page with task creation form and task cards
│   └── show.ejs        # Individual task view page
├── index.js            # Express server and routes
├── package.json
└── .gitignore
```

## Routes

| Method | Route              | Description                                                                                       |
| :----- | :----------------- | :------------------------------------------------------------------------------------------------ |
| `GET`  | `/`                | Reads the `files/` directory and renders all tasks on the home page.                              |
| `POST` | `/create`          | Saves a new `.txt` file in `files/` using the submitted title and details, then redirects to `/`. |
| `GET`  | `/files/:filename` | Reads the selected `.txt` file and displays its full content on `show.ejs`.                       |

## Getting Started

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd <your-project-folder>
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create the `files` directory** (if it does not already exist)

   ```bash
   mkdir files
   ```

4. **Start the server**

   ```bash
   node index.js
   ```

5. **Open in your browser**
   Visit `http://localhost:3000`.

## How to Use

1. Open `http://localhost:3000` in your browser.
2. Enter a title in the top input field and write your task details in the box below it.
3. Click **Create Task**. Your note is saved as a `.txt` file inside the `files/` folder and appears as a card on the page.
4. Click **Read more...** on any card to open a dedicated page showing the full content of that task.
5. Click **Go Back to Home** to return to the main dashboard.

> **Note:** Because tasks are saved locally on disk using the `fs` module, this project is intended to run locally rather than on serverless hosting platforms.
