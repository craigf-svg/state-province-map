# 🗺️ State and Province Landmass Map and Table
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Next.js](https://img.shields.io/badge/Next.js-0F0F0F?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Go](https://img.shields.io/badge/Go-0F0F0F?style=for-the-badge&logo=go&logoColor=00ADD8)

Interactive dashboard showing U.S. states and Canadian provinces by landmass and population density built with React and Next.js.

Displays choropleth map and table of U.S. states and Canadian provinces with corresponding landmasses in squared miles (mi²) and population density (people/mi²).
   
<p align=center>
   <img width="1839" height="977" alt="Dashboard Screenshot" src="https://github.com/user-attachments/assets/0b20a7ed-ec9d-4244-8fda-d32f3182030a" />
</p>

## Start Next.js
   ```
   cd next
   npm run dev
   ```

## Go API
`GET /api/states` - Fetch U.S. state data

`GET /api/provinces` - Fetch Canadian province data

Both endpoints return data in descending order by landmass.

### Note
Canadian provinces are not yet included on the map.
