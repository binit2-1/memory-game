# Rick and Morty Memory Game

A fun and interactive memory card game built with React, Vite, and Tailwind CSS, featuring characters from the Rick and Morty universe.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Components](#components)
- [API Integration](#api-integration)
- [Styling](#styling)
- [Contributing](#contributing)
- [License](#license)

## Description

Test your memory with this Rick and Morty themed card matching game. Flip cards to find matching pairs of your favorite characters from the show. The game offers three difficulty levels: Easy, Medium, and Hard, each with a different grid size.

## Features

- Responsive design for various screen sizes.
- Three difficulty levels (Easy: 3x3, Medium: 4x4, Hard: 5x5).
- Dynamic background video and theme music.
- Volume control for the background music.
- Link to the project's GitHub repository.
- Score tracking (implementation pending).
- Character data fetched from the Rick and Morty API.

## Technologies Used

- **React 19**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool and development server.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Lucide React**: A library of React icon components.
- **Rick and Morty API**: Provides character data for the game.

## Getting Started

### Prerequisites

- Node.js (version 18 or later recommended)
- npm (usually comes with Node.js) or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/binit2-1/memory-game.git
   ```
2. Navigate to the project directory:
   ```bash
   cd memory-game
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Application

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:5173` (or the URL provided in the terminal) to view the application in your browser.

To build the project for production:

```bash
npm run build
# or
yarn build
```

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

## Project Structure

```
memory-game/
├── public/              # Static assets (images, videos, audio)
├── src/
│   ├── api/             # API integration logic
│   ├── components/      # Reusable React components
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Entry point for the React application
│   └── index.css        # Global CSS styles and Tailwind directives
├── index.html           # Main HTML file
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
├── eslint.config.js     # ESLint configuration
├── package.json         # Project dependencies and scripts
└── README.md            # This file
```

## Components

- **App.jsx**: The main application component. Handles overall layout, state management (audio, game mode, scorecard visibility), and initial data fetching.
- **CircularButton.jsx**: A reusable styled circular button component, used for GitHub, volume, and help icons.
- **HeroText.jsx**: Displays the main "Memory Game" title.
- **GameModeSelection.jsx**: Provides buttons for selecting the game difficulty (Easy, Medium, Hard).
- **Scorecard.jsx**: Displays the current score and best score (logic not yet implemented).
- **FlipCard.jsx**: Intended to represent individual game cards with character images (implementation incomplete).

## API Integration

Character data is fetched from the [Rick and Morty API](https://rickandmortyapi.com/). The `fetchCharacters` function in `src/api/rickAndMorty.js` retrieves character information which is then intended to be used to populate the game board.

## Styling

The application uses Tailwind CSS for styling, with custom fonts (`Bangers` for titles, `Inter` for body text) and custom component classes defined in `src/index.css`.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License.