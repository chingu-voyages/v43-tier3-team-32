# voyage-tasks

Your project's `readme` is as important to success as your code. For
this reason you should put as much care into its creation and maintenance
as you would any other component of the application.

If you are unsure of what should go into the `readme` let this article,
written by an experienced Chingu, be your starting point -
[Keys to a well written README](https://tinyurl.com/yk3wubft).

And before we go there's "one more thing"! Once you decide what to include
in your `readme` feel free to replace the text we've provided here.

> Own it & Make it your Own!

# Folder Structure for MERN Stack

```
├── client
│   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   └── src
│       ├── App.js
│       ├── App.test.js
│       ├── components
│       │   ├── Footer
│       │   │   └── index.js
│       │   ├── Header
│       │   │   └── index.js
│       │   └── index.js
│       ├── index.css
│       ├── index.js
│       ├── logo.svg
│       ├── pages
│       │   ├── Home
│       │   │   └── index.js
│       │   └── index.js
│       ├── reportWebVitals.js
│       └── setupTests.js
    |── .gitignore
    |── .env
    |── package-lock.json
    |── package.json
    |── README.md
└── server
    ├── config
    │   └── keys.js
    ├── models
    │   └── User.js
    ├── package-lock.json
    ├── package.json
    ├── routes
    │   └── users.js
    └── server.js
├── .gitignore
├── .env
├── package-lock.json
├── package.json
├── README.md
```

The `client` folder contains the React frontend. The `server` folder contains the Node.js backend.
The `package.json` file in the root directory contains the dependencies for both the frontend and backend.
The `package.json` file in the `client` folder contains the dependencies for the frontend.
The `package.json` file in the `server` folder contains the dependencies for the backend.
This is just a basic folder structure for a MERN stack application. You can add more folders and files as you see fit.
