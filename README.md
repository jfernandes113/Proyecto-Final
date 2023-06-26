Follow the same guidelines [https://github.com/jfernandes113/financial-sustainability-calculator] as Madrid Map for new locations: Lisbon and Dublin 
Fix repositories and clean, some files are in the incorrect repositories or not needed.
Create more tables with relevant information in regard average salaries (various positions), rent cost in popular neighborhoods, cost of living data, tax data, among other relevant information relevant to young professionals.
Delete Jasmine
Insert the tables above using SQL, see which localhost.
CD Map / docker-compose up -d / npm install / npm run dev
EXTRA: Mobile and Desktop design.
Backend:
Built Backend using Express.js, nodemailer and PostgreSQL, providee the necessary API endpoints for managing city information.
Create new PostgreSQL database: Create city information tables in the database using SQL queries.
Create and update database credentials in the env.
Set up a PostgreSQL database container with the necessary environment variables and port mappings.
Amend repository in the name of middleware.js, fix functions for logging and authentication.
Install dependencies and run the backend: npm install // npm run dev
Backend should run on localhost:3000
API documentation:
-	Get /cities: retrieve list of cities.
-	POST /cities: create a new city.
-	GET /cities/:id: Redirects/retrieves to information about specific city. Can be accessed by any user.

EXTRA:  [1] Implement user registration and login functionality.[2] Post / cities/: id create city id. For authentication purposes can only be accessible for registered users. Requires authentication.
Frontend:
Create frontend repository:
-Register 
Index.jsx
-Login:
Implement routes: import {switch, route, redirect} from “wouter”
Hooks repository.
form (react-hook-form) --submit---Petition: Post/Auth/signin
-Panel:
 (Add validation and error handling for form inputs.)
(Implement forms for creating and editing city data).
Use React.js and communicate with the backend API.
Node.js and slonik
Set up: npm install, run the frond end npm start. Run with localhost:3000
EXTRA: 
Implement data visualization features to represent city information.
Add modals for confirmation dialogs and alerts.

