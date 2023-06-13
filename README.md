# recipe-app
My Recipes is a full-stack recipe sharing application that enables users to share their favorite recipes, browse others' recipes and create own recipes. Built with TypeScript and React theme, My recipes is a great example of a modern, performant, and scalable MERN stack application.

You can visit the deployed version of My Recipes [https://my-recipes.netlify.app](In Progress). Please note that the backend of the application is hosted on render.com's free tier, which shuts down when not in use. As a result, the application might take a few minutes to activate if it hasn't been used in a while.

## Features

My Recipes offers a variety of features, including:

-   Responsive design: The app is optimized for different screen sizes, so it can be used on both desktop and mobile devices.
-   Login and Register user using JWT authentication. 
-   Recipe sharing: Users can create, read, update, and delete their own recipes.
-   Browse all recipes: Users can browse all recipes in the database.
-   Save recipes: Users can save recipes for future reference, and easily access them from their profile page - Pending

### Screenshots

Here are a few screenshots of the My Recipes app in action:

#### Login page

#### All recipes page

#### Recipe details page

#### Saved recipes page


## Technologies Used

My Recipes leverages a number of technologies to create a seamless user experience. Some of the primary tools and technologies used include:

### Frontend

-   [TypeScript](https://www.typescriptlang.org/) - a strongly typed programming language that builds on JavaScript by adding optional static types.
-   [React](https://reactjs.org/) - a popular JavaScript library for building user interfaces.
-   [Material UI](https://mui.com/) - a popular UI framework for React-based applications that offers a variety of customizable components.
-   [React Hook Form](https://react-hook-form.com/) - a library for managing form inputs in React-based applications.
-   [Netlify](https://www.netlify.com/) - a cloud-based platform that provides a variety of services for building,  deploying, and managing web applications.
-   [Redux Toolkit](https://redux-toolkit.js.org/) - is a set of tools that helps simplify Redux development. It     includes utilities for creating and managing Redux stores, as well as for writing Redux actions and reducers.


### Backend

-   [Node.js](https://nodejs.org/) - a popular runtime environment for building server-side applications in JavaScript.
-   [Express](https://expressjs.com/) - a lightweight and flexible web application framework for Node.js.
-   [MongoDB](https://www.mongodb.com/) - a popular NoSQL database used for building scalable and flexible applications.
-   [Mongoose](https://mongoosejs.com/) - a powerful object modeling library for MongoDB in Node.js.
-   [Cors](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) - a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.
-   [Cloudinary](https://cloudinary.com/) - a cloud-based image and video management service that offers a variety of features, including storage, manipulation, optimization, and delivery.
-   [Render](https://render.com/) - a cloud platform for building and hosting modern applications.

## Getting Started

If you want to run it on your local machine, please follow the steps below. 

### Prerequisites

-   [Node.js](https://nodejs.org/en/) v14 or higher installed on your machine

### Installation

1.  Clone the repository

	`git clone https://github.com/gulati89/recipe-app.git` 

2.  Install frontend dependencies

	`cd client`  
	`npm install` 

3.  Install backend dependencies

	`cd ../server`  
	`npm install` 

4.  Set up environment variables
	-   Create a `.env` file in the backend directory with the following variables:

		`MONGODB_URI=<your-mongodb-uri>`  
		`CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>`  
		`CLOUDINARY_API_KEY=<your-cloudinary-api-key>`  
		`CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>`   
		`PORT=8080<or-port-of-your-choice>`


5.  Change the base url in /client/src/App.tsx
    -  Search and modify all instances of https://my-recipes-backend.onrender.com to your localhost, for example, http://localhost:8080

6.  Start the backend server

	`cd server`  
	`npm run start` 

7.  Start the frontend server

	`cd ../client`  
	`npm run dev` 

8.  Open [http://localhost:3000](http://localhost:3000/) in your browser to see the app

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

-   Email: [gulati89@gmail.com](mailto:youremail@example.com)
-   GitHub: [https://github.com/gulati89](https://github.com/%7Busername%7D)
