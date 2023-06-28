Definición de cliente: es un resumen, con tus palabras (como si fueras el cliente que la va a consumir) de lo que hará y tendrá la aplicación (pero sin entrar en temas técnicos)
Definición técnica: en back, detalle de las tablas que tendrá, junto con sus columnas, detalle de los endpoints, con lo que recibirán en los bodys y sus respuestas. En front, será lo que contenga cada pantalla, junto con los diseños de tu aplicación hecha en Excalidraw

Client Definition:

As a young professional, I am willing to relocate in order in order to improve my quality of life and savings. 

As a user of the proposed calculator app, I was to be able to compare and calculate salary figures for different job positions. 

The application should provide the following features:

1. Calculate and display average salary figures for job positions like Junior Developer, Financial Analyst and Nurse.
2. Allow users to select the desired location (Madrid, Lisbon or Dublin).
3. Obtain and edit specific salary information and expenses.
4. Provide rent prices for most demanded neighborhoods in the available locations.
5. Include tax brackets based on user-provided income and location. 
6. Create Tables with the rent prices of demanded neighborhoods and tax brackets.
7. Calculate and display the cost of living expenses (inputs available: childcare, transportation, rent, healthcare, etc.) in each location
8. Insert the tables above using SQL, see which localhost.
9. Follow the same guidelines [https://github.com/jfernandes113/financial-sustainability-calculator.git] as Madrid Map for new locations: Lisbon and Dublin. 
10. Fix repositories [Create Madrid, Lisbon and Dublin] and clean, some files are in the incorrect repositories or not needed. Also delete Jasmine.
11. CD Map / docker-compose up -d / npm install / npm run dev

EXTRA: [1] Mobile and Desktop design. [2] Create Frankfurt Data.

Backend:
The backend of the calculator app will be built using Node.js, Express.js and PostgreSQL database. 

It will provide the necessary API endpoints to handle calculations, retrieve salary and expense data, and perform user authentization/authorization.

12. Create backend repository.
13. Built PostgreSQL database to store salary and expense data: average salary, rent expenses, tax bracket, cost of living data, and other relevant info for each location.
14. API documentation:
-	Get /cities: retrieve list of cities.
-	POST /cities: create a new city.
-	GET /cities/:id: Redirects/retrieves to information about specific city. Can be accessed by any user.
-   GET /salaries: Retrieve average salary figures for different job positions and locations.
-   GET /rents: Retrieve projected rent expenses for the most demanded neighborhoods in Madrid, Lisbon, and Dublin.
-   GET /taxes: Retrieve tax brackets based on income and location.
-   GET /expenses: Retrieve average cost of living expenses for each location.
-   POST /calculate: Perform salary and expense calculations based on user inputs.
15. Crea un nuevo endpoint GET /short/:id (puede ser usado por cualquier usuario):
-   POST /register: Register a new user.
-   POST /login: Authenticate a user and generate a session token.
-   GET /logout: Log out the currently authenticated user.
16. Create and update database credentials in the env.
17. Amend repository in the name of middleware.js, fix functions for login and authentication.
18. Install dependencies and run the backend: npm install // npm run dev11Backend should run on localhost:3000

EXTRA:  [1] Implement user registration and login functionality.[2] Post / cities/: id create city id. For authentication purposes can only be accessible for registered users. Requires authentication.


Frontend:
The frontend of the calculator app will be built using React.js and will provide intuitive and interactive interface for users to input their data and obtain calculation results.

19. Create frontend repository:
20. The following components should be in place:
-   Home Screen: Select job position and location.
-   Salary calculator: allowing users to enter their desired job position and location to calculate average salary figures.
-   Rent Calculator.
-   Tax calculator
-   Register (index.js). User authentication to register and login.
21. -Login:
*Implement routes: import {switch, route, redirect} from “wouter”
*Hooks repository.
form (react-hook-form) --submit---Petition: Post/Auth/signin
22. -Panel:
*(Add validation and error handling for form inputs.)
*(Implement forms for creating and editing city data).

##Use React.js and communicate with the backend API**
##Node.js and slonik##
##Set up: npm install, run the frond end npm start. Run with localhost:3000##

EXTRA: 
[1] Implement data visualization features to represent city information. [2] Add modals for confirmation dialogs and alerts.

