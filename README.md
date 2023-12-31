This project is live at https://sequenze-technologies-assignment-8z9wnbdoe-deepayan03s-projects.vercel.app/

This project is built using React-js (using Vite) , Tailwind css and Daisy-UI as the component library.

There are two main pages :
  Sample Projects: Inside the sample projects page, the image source of the cards is the provided Lorem-Picsum api endpoint https://picsum.photos/v2/list?page=1&limit=6
  My Projects: Inside this page, custom cards can be created by filling up certain fields of the projects. The cards can be created, read , updated and deleted.

Storage Space:
  No backend server or database is used to make this project. The custom card's data is stored as an array of objects inside the localstorage.
  The images are handled by converting them into Base64 string and then storing them as a field inside the main custom card data object.
  

  
