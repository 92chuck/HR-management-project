# HR Managment Project

<em>Group project with Aiden and Yizhou</em>

## About HR Managment Project

Provides simple and efficient onboarding and hiring process, and housing mangement for both employees and HR

## Video walkthrough :movie_camera:


## Key Features :key:

- Employee can create onboarding application
- Employee can edit or delete personal information and preview or download all the documents submitted in the portal
- Employee can submit docmuents about OPT / H1 visa status step by step on HR's approval
- Employee can manage housing and make a report

- Admin can send registration link via email
- Admin can view all the employees' onboarding application and make approval or rejection
- Admin can view all the profiles of employees and search
- Admin can view all the progress of employees visa management status and make approval or rejection with comments
- Admin can view and manange all housing and reports

## Tech Stack :books:

Below is a non-exhaustive list of technologies used throughout the project.

| Front End | Back End | APIs | Libraries/Frameworks |
| :-------: | :------: | :--: | :------------------: |
| Typescript| MongoDB  |      |      Bootstrap5      |
|   HTML    | Node.js  |      |      Angular
|   CSS     | Express  |      |

## Setup :rocket:

If you want to explore with Hula, feel free to clone this repo! After cloning, please enter the following commands:

Create .env file with the followings (PORT, MONGO_URL, SALT, JWT_KEY, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, EMAIL)

Go into Backend directory

- npm i
- npm run seed
- npm run dev

At the same time in Frontend directory

- npm i
- npm start

Check seed file for admin account information

Runs the app in the development mode.
- Open [http://localhost:4200] to view it in your browser.
- Open [http://localhost:3000] to view json data.
