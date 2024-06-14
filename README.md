# Web Based Minesweeper Frontend

## Project Description
This is the frontend application for the Modern Minesweeper game. It provides a user interface for interacting with the game, including starting new games, making moves, and displaying game status.

## Features
- **User Interface**: A modern and responsive design for the Minesweeper game.
- **Game Interaction**: Allows users to start new games, reveal cells, and track game progress.
- **API Integration**: Communicates with the backend to handle game logic and user authentication.

## Installation Instructions
To set up the frontend application, follow these steps:

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/asifurrahmanbubt/Web-Based-Minesweeper-Frontend
    ```

2. **Navigate to the Project Directory**:
    ```bash
    cd modern-minesweeper-frontend
    ```

3. **Unzip the node_modules all at once**

3. **Install Dependencies**:
    ```bash
    npm install
    ```

4. **Setup Environment Variables**:
    Create a `.env` file in the root directory and add the necessary environment variables. Refer to `.env.example` for the required variables.

5. **Run the Application**:
    ```bash
    npm start
    ```

## Usage
After setting up and running the application, the frontend will be available on `http://localhost:3000`. Open this URL in your web browser to start playing Minesweeper.

### Environment Variables
- `REACT_APP_API_URL`: The base URL of the backend API.

## Contributing
Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
