# Project Name

This project is a React application built using Create React App and Material-UI (Mui). It provides an interface for managing restaurant reservations, focusing on functionality rather than design.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/raniakbr/reservation-app.git
   cd reservation-app
   ```

2. **Install dependencies:**

   ```bash
   yarn install
   ```

3. **Run the development server:**

   ```bash
   yarn start
   ```

4. **Open in the browser:**
   Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Project Structure

The project follows a typical React folder structure:

- `src/`
  - `components/`: Contains reusable UI components.
  - `hooks/`: Contains custom hooks for managing state and logic.
  - `pages/`: Contains page-level components.
  - `utils/`: Contains utility functions used throughout the project.
  - `data/`: Contains static data used in the application.
  - `mocks/`: Contains mock data used for testing and development.
  - `App.js`: Main component that serves as the entry point of the application.
  - `index.js`: Entry point for React rendering.

## Components and Hooks

### SearchSection

The `SearchSection` component contains filters for searching and filtering reservations. It includes inputs for customer name, status, shift, area, and date.

### BodySection

The `BodySection` component is a container component that holds other components related to reservation management. It utilizes the `useFilterReservations` hook to manage filtering logic.

### ReservationList

The `ReservationList` component displays a list of reservations in a table format. It receives an array of reservation objects as a prop and renders each reservation as a table row. It also includes sorting functionality to sort reservations by various criteria.

### useFilterReservations

The `useFilterReservations` hook encapsulates all the logic related to filtering reservations. It provides state variables and functions for filtering, clearing search criteria, and handling sorting.

## Note

Since no design specifications were provided, the focus of this project is on functionality rather than visual design. The UI components provided by Material-UI are used for simplicity and consistency.
