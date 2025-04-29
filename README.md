# Medical Representation Website

Welcome to the Medical Representation Website! This platform is designed to provide comprehensive information about various diseases, their causes (such as fungi, bacteria, viruses, etc.), and how they are treated. The website is powered by a machine learning (ML) integration to provide intelligent disease categorization and treatment suggestions.

## Key Features

- **Disease Information:** Get detailed descriptions of diseases, their causes, symptoms, and treatments.
- **Disease Categorization:** The website categorizes diseases based on their origin (e.g., fungal, bacterial, viral).
- **ML Integration:** Leveraging machine learning algorithms to categorize diseases and predict treatment methods.
- **Treatment Guidance:** Detailed information on treatments available for various diseases, including medications and home remedies.
- **Interactive Search:** Easily search for diseases and filter them based on type and treatment options.

## Tech Stack

- **Frontend:** 
  - **Vite**: A modern build tool to provide fast and optimized development experiences.
  - **React**: The frontend framework for building dynamic user interfaces.
  - **Tailwind CSS**: For styling the website with utility-first CSS.

- **Backend:** 
  - **Node.js**: The backend server to handle API requests and serve content.
  - **Express.js**: Web framework for Node.js, used to create APIs.
  - **MongoDB**: NoSQL database to store disease information, user data, and more.
  - **Mongoose**: ODM for MongoDB to define models and interact with the database.

- **Machine Learning:**
  - The ML integration processes disease data and makes recommendations about treatments, providing users with more accurate and personalized information.

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (either locally or using a service like MongoDB Atlas)
- NPM or Yarn

### Installation Steps

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/medical-representation-website.git

    Navigate to the project folder:

cd medical-representation-website

Install backend dependencies:

cd server
npm install

Install frontend dependencies:

cd client
npm install

Configure environment variables for both the backend and frontend:

    Set up MONGO_URI in the backend's .env file for MongoDB connection.

    Set up other necessary keys (e.g., JWT_SECRET for authentication) in .env files.

Start the backend server:

cd server
npm start

Start the frontend development server:

    cd client
    npm run dev

Usage

    Open the browser and go to http://localhost:3000 (or the port configured for the frontend).

    You can browse through various diseases, search for specific disease information, and explore treatment options.

    The ML model processes user input (if applicable) and suggests accurate disease categorization and treatment options.

Routes and API Endpoints

    GET /api/diseases: Fetch a list of all diseases.

    GET /api/diseases/:id: Fetch detailed information about a specific disease by ID.

    POST /api/auth/signup: User registration endpoint.

    POST /api/auth/login: User login endpoint (returns a JWT for authentication).
