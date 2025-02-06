# bazaarlive-prototype

## Overview
BazaarLive is a prototype application designed to facilitate video uploads, management, and purchases. It consists of a frontend built with React and a backend powered by Node.js.

## Project Structure
The project is organized into two main directories: `frontend` and `backend`.

### Frontend
- **public/**: Contains static assets such as images and icons.
- **src/**: Contains the source code for the React application.
  - **components/**: Reusable components for the application.
    - **Navbar**: Navigation bar component.
    - **VideoCard**: Component to display individual video information.
    - **UploadButton**: Button component for uploading videos.
  - **contexts/**: Context API for managing authentication state.
    - **AuthContext.jsx**: Authentication context.
  - **pages/**: Page components for different routes.
    - **Home.jsx**: Landing page of the application.
    - **SellerDashboard.jsx**: Dashboard for sellers to manage their videos.
    - **Checkout.jsx**: Page for handling the checkout process.
  - **App.jsx**: Main application component that sets up routing.
  - **main.jsx**: Entry point for the frontend application.

### Backend
- **controllers/**: Contains the logic for handling requests.
  - **videoController.js**: Functions for video-related requests.
  - **authController.js**: Functions for authentication-related requests.
- **models/**: Database models.
  - **Video.js**: Video model.
  - **User.js**: User model.
- **routes/**: API route definitions.
  - **videoRoutes.js**: Routes for video-related endpoints.
  - **authRoutes.js**: Routes for authentication-related endpoints.
- **utils/**: Utility functions.
  - **mockAI.js**: Functions for simulating AI behavior.
- **server.js**: Entry point for the backend application.

## Getting Started
To get started with the project, clone the repository and install the necessary dependencies for both the frontend and backend.

### Frontend
1. Navigate to the `frontend` directory.
2. Run `npm install` to install dependencies.
3. Create a `.env` file for environment variables.
4. Start the development server with `npm start`.

### Backend
1. Navigate to the `backend` directory.
2. Run `npm install` to install dependencies.
3. Start the server with `node server.js`.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.