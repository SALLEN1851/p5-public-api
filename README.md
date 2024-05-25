# Project 5 - Public API Requests

## Overview
This project fetches and displays 12 random users from The Random User Generator API. The application presents each user with basic information such as their image, name, email, and location. Users can click on any employee item to view detailed information in a modal window.

## Features
1. **Fetch and Display Users**:
    - Sends a single request to The Random User Generator API.
    - Displays 12 users with the following information:
        - Image
        - First and Last Name
        - Email
        - City or Location

2. **Modal Window**:
    - Displays detailed information when an employee item is clicked:
        - Image
        - Name
        - Email
        - City or Location
        - Cell Number
        - Detailed Address (including street name and number, state or country, and postcode)
        - Birthday
    - Provides a way to close the modal window.

### Built With
        -JavaScript
        -HTML
        -CSS

### Code Explanation

#### JavaScript (`scripts.js`)

1. **Global Variables**:
    - `users`: An array to store the user data fetched from the API.

2. **Functions**:
    - `getUsers()`: Fetches 12 users from the API and stores them in the `users` array. Calls `displayUsers()` to render the users on the page.
    - `displayUsers(users)`: Clears the container and populates it with the user data.
    - `generateEmptyModal()`: Creates a modal window and appends it to the DOM.
    - `modalData(user, index)`: Populates the modal with the detailed user information.
    - Event listeners to handle click events for opening and closing the modal, as well as navigating between users in the modal.
