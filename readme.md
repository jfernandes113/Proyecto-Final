Client Definition:

As a young professional, I am willing to relocate in order in order to improve my quality of life and savings. 

As a user of the proposed calculator app, I wan't to be able to compare and calculate salary figures for different job positions. 

The application should provide the following features:

1. Calculate and display average salary figures for job positions like Junior Developer, Financial Analyst and Nurse.
2. Allow users to select the desired location (Madrid, Lisbon or Dublin).
3. Obtain and edit specific salary information and expenses.
4. Provide rent prices for most demanded neighborhoods in the available locations.
5. Include tax brackets based on user-provided income and location. 
6. Calculate and display the cost of living expenses (inputs available: childcare, transportation, rent, healthcare, etc.) in each location

Backend:
The backend of the calculator app will be built using Node.js, Express.js and PostgreSQL database. 

It will provide the necessary API endpoints to handle calculations, retrieve salary and expense data, and perform user authentization/authorization.

7. Create backend repository.
8. Built PostgreSQL database: Jobs, Locations, Salaries and Neighborhoods:

Jobs table:
id (primary key)
title (job position title)

Locations table:
id (primary key)
name (location name)

Salaries table:
id (primary key)
job_id (foreign key referencing Jobs.id)
location_id (foreign key referencing Locations.id)
average_salary (average salary for the job position and location)

Neighborhoods table:
id (primary key)
location_id (foreign key referencing Locations.id)
name (neighborhood name)
rent_price (rent price for the neighborhood)

TaxBrackets table:
id (primary key)
location_id (foreign key referencing Locations.id)
income_range (income range for the tax bracket)
tax_rate (tax rate for the income range)

9. API documentation:

GET /salaries: Retrieve average salary figures for different job positions and locations.
GET /rents: Retrieve projected rent expenses for the most demanded neighborhoods in Madrid, Lisbon, and Dublin.
GET /taxes: Retrieve tax brackets based on income and location.
GET /expenses: Retrieve average cost of living expenses for each location.
POST /calculate: Perform salary and expense calculations based on user inputs.


Frontend:
10. The frontend of the calculator app will be built using React.js and will provide intuitive and interactive interface for users to input their data and obtain calculation results.

11. Create frontend repository:
12. The following components should be in place:
Home Screen: Select job position and location.
Salary and Expense Calculator: Allow users to enter their desired job position and location to calculate average salary figures. Also support expenses.
Login and Register: User authentication to register and login.
Panel: Provide forms for creating and editing city data.

HASTA ACA, EL RESTO SERIA EXTRA.

EXTRA: 
6. Create Tables with the rent prices of demanded neighborhoods and tax brackets.
8. Insert the tables above using SQL, see which localhost.
9. Follow the same guidelines [https://github.com/jfernandes113/financial-sustainability-calculator.git] as Madrid Map for new locations: Lisbon and Dublin. 
10. Fix repositories [Create Madrid, Lisbon and Dublin] and clean, some files are in the incorrect repositories or not needed. Also delete Jasmine.
11. CD Map / docker-compose up -d / npm install / npm run dev
[1] Mobile and Desktop design. [2] Create Frankfurt Data.
[1] Implement user registration and login functionality.[2] Post / cities/: id create city id. For authentication purposes can only be accessible for registered users. Requires authentication.
[1] Implement data visualization features to represent city information. [2] Add modals for confirmation dialogs and alerts.
8. Insert the tables above using SQL, see which localhost.
9. Follow the same guidelines [https://github.com/jfernandes113/financial-sustainability-calculator.git] as Madrid Map for new locations: Lisbon and Dublin. 
10. Fix repositories [Create Madrid, Lisbon and Dublin] and clean, some files are in the incorrect repositories or not needed. Also delete Jasmine.

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

Rent Calculator: Display projected rent expenses for the most demanded neighborhoods in Madrid, Lisbon, and Dublin.
Tax Calculator: Calculate tax brackets based on user-provided income and location.

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
