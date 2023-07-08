-- Jobs table
CREATE TABLE IF NOT EXISTS Jobs (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL
);

--Locations table
CREATE TABLE IF NOT EXISTS Locations (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

-- Salaries table
CREATE TABLE IF NOT EXISTS Salaries (
  id SERIAL PRIMARY KEY,
  job_id INTEGER REFERENCES Jobs(id),
  location_id INTEGER REFERENCES Locations(id),
  average_salary NUMERIC(10, 2) NOT NULL
);

--  Neighborhoods table
CREATE TABLE IF NOT EXISTS Neighborhoods (
  id SERIAL PRIMARY KEY,
  location_id INTEGER REFERENCES Locations(id),
  name TEXT NOT NULL,
  rent_price NUMERIC(10, 2) NOT NULL
);

-- TaxBrackets table
CREATE TABLE IF NOT EXISTS TaxBrackets (
  id SERIAL PRIMARY KEY,
  location_id INTEGER REFERENCES Locations(id),
  income_range TEXT NOT NULL,
  tax_rate NUMERIC(4, 2) NOT NULL
);
