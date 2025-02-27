# Project File Structure

## Root Configuration Files
- `index.html`: Main HTML entry point for the application
- `package.json`: Project dependencies, scripts, and configuration
- `tailwind.config.js`: Tailwind CSS configuration
- `tsconfig.json`: TypeScript compiler configuration

## Source Files (src/)
### Core Files
- `main.tsx`: Application entry point that renders the root React component
- `App.tsx`: Main application component containing routing setup
- `index.css`: Global styles, animations, and Tailwind imports
- `types.ts`: TypeScript type definitions and interfaces

### Components (src/components/)
- `AchievementPopup.tsx`: Displays popups for unlocked achievements
- `ActionButton.tsx`: Button component for game actions
- `Button.tsx`: Base reusable button component
- `MonsterDisplay.tsx`: Renders the current challenge monster
- `PointsPopup.tsx`: Animated popup for points earned
- `ProgressBar.tsx`: Progress bar component for sleep progress
- `ScoreDisplay.tsx`: Displays current and total points

### Data (src/data/)
- `achievements.ts`: Defines game achievements
- `challenges.ts`: Defines game challenges and their properties

### Screens (src/screens/)
- `Home.tsx`: Landing page screen
- `MainMenu.tsx`: Main menu screen
- `Gameplay.tsx`: Main game screen where challenges take place
- `Victory.tsx`: Victory screen shown after completing a challenge
- `Results.tsx`: Final results screen showing game statistics

## Purpose of Each Component

### Core Components
- The application is built on React with TypeScript
- Routing is handled by React Router
- Styling uses Tailwind CSS with custom animations
- State management uses React's built-in useState and localStorage for persistence

### Game Flow
1. User starts at Home screen
2. Navigates through Main Menu
3. Plays through Gameplay screen
4. Sees Victory screen after each challenge
5. Finally reaches Results screen with total score and achievements

### State Management
- Game state is maintained in localStorage
- Includes progress, points, achievements, and challenge status
- Each component manages its local state as needed

### Styling
- Consistent design system using Tailwind CSS
- Custom animations for interactions
- Responsive layout that works on various screen sizes
