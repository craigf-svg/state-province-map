# 🗺️ State and Province Landmass Map and Table

This project displays a **choropleth map** and **table** of U.S. states and Canadian provinces with their corresponding landmasses in squared miles (mi²) and population density (people/mi²). Users can toggle between U.S. states and Canadian provinces and between landmass and population density.

### ⚠️ Note
- 📌 **Population density data** is **not yet included** on the table.  
- 📌 **Canadian provinces** are **not yet included** on the map.  

<p align=center>
<img src="https://github.com/user-attachments/assets/b4937762-c22d-4ee6-8b71-2898d71e65db" alt="Project Screenshot" width="700"
</p>


## Technologies Used

- **Frontend**: React.js, HTML, CSS
- **Backend**: PHP, MySQL
- **Database**: MySQL

## Usage
Once both frontend and backend are set up and running, visit http://localhost:3000 to interact with the table.

The table will initially show U.S. states sorted by landmass. Clicking the toggle button will switch to displaying Canadian provinces.

## API Documentation
- **GET /api/states** - Fetch U.S. states with landmasses.

- **GET /api/provinces** - Fetch Canadian provinces with landmasses.

Both endpoints return the data sorted in descending order by landmass.

### Frontend Setup

1. Navigate to the `frontend` directory - 
   ```
   cd frontend
   npm start
   ```

### Backend Setup

1. Navigate to the `backend` directory - 
   ```
   cd backend
   ```

2. Create a .env file in the db folder and enter the credentials to access your MySQL database. Check backend README for more info on the database.

3. Install PHP dependencies using Composer 

    ```
    composer install
    ```

3. Run your server from backend folder
    ```
    php -S localhost:8000
    ```
