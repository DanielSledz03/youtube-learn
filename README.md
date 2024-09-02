# React Native Youtube Learn App

![React Native](https://img.shields.io/badge/React%20Native-0.74.5-blue)
![Expo](https://img.shields.io/badge/Expo-51.0.28-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.4-blue)

## Overview

This project is a simple video application built with React Native, Expo, and TypeScript. The app serves as a resource for the latest knowledge needed by a Junior React Native Developer. It features a main screen with categorized lists, a search screen to find videos, and a video detail screen with a player and a description.

## Features

- **Main Screen**: Displays video categories ("React Native", "React", "Typescript", "Javascript") with horizontal scrolling lists.
- **Search Screen**: Allows users to search for videos using YouTube API and displays the results.
- **Video Detail Screen**: Contains a video player and detailed information about the video. Users can also take and view notes.

## Tech Stack

- **React Native**: Framework for building native apps using React.
- **Expo**: Platform for building and deploying React Native apps.
- **TypeScript**: Static typing for JavaScript, improving code quality and maintainability.
- **YouTube API**: Fetches video data for the app.
- **React Navigation**: Manages app navigation.

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/DanielSledz03/youtube-learn.git
   cd youtube-learn
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up YouTube API**:

   - Create a `.env` file in the root directory.
   - Add your YouTube API key:

     ```makefile
     YOUTUBE_API_KEY=your_youtube_api_key_here
     ```

   - If the project doesn't use environment variables, ensure that the API key is correctly set in the `useYouTubeSearch` hook.

4. **Run the app**:
   ```bash
   npx expo start
   ```
   Use Expo Go to view the app on your mobile device, or run it in an emulator.

## Project Structure

```bash
src/
│
├── components/    # Reusable components
├── screens/       # All screen components (Main, Search, Detail)
│   ├── MainScreen/
│   ├── SearchScreen/
│   └── DetailScreen/
├── hooks/         # Custom hooks (useYouTubeSearch)
├── navigation/    # React Navigation setup
├── constants/     # Constants (colors, API URLs)
└── assets/        # Images, fonts, etc.
```

## Conclusion

This project showcases my ability to build a feature-rich React Native application, adhering to best practices in code structure, state management, and UI design.

Thank you for reviewing my project! If you have any questions, please feel free to reach out.

## Contact

- **Email**: danielsledz2003@gmail.com
- **GitHub**: DanielSledz03
