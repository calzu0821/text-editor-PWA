# text-editor-PWA

## Description
This project creates a browser-based text editor meeting Progressive Web Application (PWA) criteria. Leveraging IndexedDB for data persistence ensures content reliability even offline. The editor allows developers to create, store, and access notes or code snippets conveniently. It showcases web development, data persistence, and PWA skills gained during the course.

The project addresses the need for a dependable platform for developers to store notes or code snippets regardless of internet availability. By utilizing IndexedDB and PWA principles, the text editor facilitates seamless data retrieval and storage, enhancing productivity.

Constructing this text editor deepened my understanding of data persistence mechanisms like IndexedDB in web apps. Additionally, I learned about PWA concepts and the importance of optimizing for offline use, fostering a user-friendly experience.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
To install and run the application, follow these steps:
1. Clone the repository to your local machine.
2. Navigate to the project directory using the terminal.
3. Run `npm install` to install the required dependencies.
4. Run `npm run start` to start the backend and serve the client.
5. Run `npm run build` and `npm run start:dev` to run application.
6. Open your web browser and navigate to the provided local URL.

## Usage
1. Open the text editor application using your preferred web browser.
2. Upon opening, the application will automatically create an IndexedDB database storage.
3. Enter your desired content in the text editor.
4. Click outside the DOM window to trigger the automatic content saving to IndexedDB.
5. Even if you close the editor and reopen it, the content will be retrieved from IndexedDB, ensuring data persistence.
6. Click on the "Install" button to download the web application as an icon on your desktop.
7. The application employs a service worker created with workbox, enabling the caching of static assets for offline use.

Git Hub Repository:
https://github.com/calzu0821/text-editor-PWA.git

Heroku deployed site:
https://text-editor-calzu0821-db1f7f3224b1.herokuapp.com/

## Credits
I used the following third-party assets in this project:
- https://youtu.be/sFsRylCQblw
- https://youtu.be/egmwY9n6qWY
- https://youtu.be/IZGNcSuwBZs
- https://youtu.be/ksXwaWHCW6k
- https://youtu.be/PL2DG9LJoVQ
- https://youtu.be/-AzFQN9Vp7k
- https://youtu.be/yZ26CXny3iI
- https://youtu.be/UjYW_ggjHmk

## License
N/A