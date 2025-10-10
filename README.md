# 🗺️ State and Province Landmass Map and Table
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)

Interactive dashboard showing U.S. states and Canadian provinces by landmass and population density built with React and Next.js.

Displays choropleth map and table of U.S. states and Canadian provinces with corresponding landmasses in squared miles (mi²) and population density (people/mi²).

<p align=center>
   <img src="https://github.com/user-attachments/assets/b4937762-c22d-4ee6-8b71-2898d71e65db" alt="Project Screenshot" width="700"
</p>

### Next Server
Navigate to the `frontend` directory
   ```
   cd next
   npm run dev
   ```

### Backend Setup

1. Create .env file in the backend/db folder and enter the credentials to access your MySQL database.

2. Install PHP dependencies 
    ```
    composer install
    ```

3. Run server
    ```
    php -S localhost:8000
    ```
    
### API
`GET /api/states` - Fetch U.S. states with landmasses.

`GET /api/provinces` - Fetch Canadian provinces with landmasses.

Both endpoints return the data sorted in descending order by landmass.

### Note
Canadian provinces are not yet included on the map.
