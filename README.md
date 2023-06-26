# Proyecto-Final
1. Follow the same guidelines as Madrid Map for new locations: Lisbon and Dublin. 
2. Fix repositories [Create Madrid, Lisbon and Dublin] and clean, some files are in the incorrect repositories or not needed. Also delete Jasmine.
3. Create more tables with relevant information in regard average salaries (various positions), rent cost in popular neighborhoods, cost of living data, income tax data, population stats (i.e. median age), among other relevant information relevant to young professionals. 
4. Insert the tables above using SQL, see which localhost.
5. CD Map / docker-compose up -d / npm install / npm run dev

EXTRA: [1] Mobile and Desktop design. [2] Create Frankfurt Data.

Backend:
6. Built Backend using Express.js, nodemailer and PostgreSQL, providee the necessary API endpoints for managing city information.
7. Create new PostgreSQL database: Create city information tables in the database using SQL queries.
8. Create and update database credentials in the env.
9. Set up a PostgreSQL database container with the necessary environment variables and port mappings.
10. Amend repository in the name of middleware.js, fix functions for login and authentication.
11. Install dependencies and run the backend: npm install // npm run dev11Backend should run on localhost:3000
12. API documentation:
-	Get /cities: retrieve list of cities.
-	POST /cities: create a new city.
-	GET /cities/:id: Redirects/retrieves to information about specific city. Can be accessed by any user.
EXTRA:  [1] Implement user registration and login functionality.[2] Post / cities/: id create city id. For authentication purposes can only be accessible for registered users. Requires authentication.


Frontend:
14. Create frontend repository:
15. -Register 
*Index.jsx
16. -Login:
*Implement routes: import {switch, route, redirect} from “wouter”
*Hooks repository.
form (react-hook-form) --submit---Petition: Post/Auth/signin
17. -Panel:
*(Add validation and error handling for form inputs.)
*(Implement forms for creating and editing city data).
18. Use React.js and communicate with the backend API.
19. Node.js and slonik
20. Set up: npm install, run the frond end npm start. Run with localhost:3000
EXTRA: 
[1] Implement data visualization features to represent city information. [2] Add modals for confirmation dialogs and alerts.

