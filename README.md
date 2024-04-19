# Property Finder

## Property Finder Frontend

The frontend of the Property Finder project offers a user-friendly interface packed with essential features for seamless property browsing and interaction. Users can effortlessly log in, sign up, and log out, ensuring smooth access to their accounts. The platform enables users to explore property listings, view detailed property information, and like their preferred properties for future reference. With intuitive search and filtering options, users can easily narrow down their choices based on specific criteria. Additionally, the frontend allows users to upload their properties, contributing to the growing database of listings. 

```
Here is a dummy login user login information

email: hrk@gmail.com
password: hrk123
```

### BackEnd Setup

- Clone the backend repo

      https://github.com/pythonpioneer/property-finder-backend.git

- Go to your project folder and install dependencies (make sure you have npm and node)

  ```
  cd property-finder-backend
  ```
  ```
  npm install
  ```
- Create a `.env` file at root directory (same as `.env.sample`)

   Copy this data and paste it in `.env`
  
  ```
  MONGODB_URI=mongodb+srv://pythonpioneer:DU02ug4xveJ8eX1S@todo-app.mwl8uow.mongodb.net/Property?retryWrites=true&w=majority
  SIGNATURE=thisisauniquesignaturelmao

  CLOUDINARY_CLOUD_NAME=hrk
  CLOUDINARY_API_KEY=331295534557971
  CLOUDINARY_API_SECRET=OuBuneJz0Xl4fZL86dP77Yo6jNA
  ```

- After installation, To start the app

      npm run dev
  **Note:** If the app didn't run with the given command then please explore nodemon for your machine.
  
- It will run on 4000

  To verify the port run this command on your browser
  
      http://localhost:4000/api/v1/health

## Frontend Setup

- Clone the frontend repo

      https://github.com/pythonpioneer/property-finder-frontend.git

- Go to your project folder and install dependencies (make sure you have npm and node)

  ```
  cd property-finder-frontend
  ```
  ```
  npm install
  ```
  
- Create a `.env` file at root directory (same as `.env.sample`)

   Copy this data and paste it in `.env`
  
  ```
  REACT_APP_URL=http://localhost:4000
  ```

- After installation, To start the app

      npm start

- It will run on port 3000
  
  
