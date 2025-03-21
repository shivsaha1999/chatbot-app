# ChatBot Application

This is a feature-rich ChatBot application built with **React**, **TypeScript**, and **Vite**. It boasts a modern and responsive UI with support for voice input, file attachments, and customizable themes.

## Features

- **Chat Window**: Send and receive messages with a simulated bot response.
- **Voice Input**: Use the microphone to transcribe voice into text.
- **File Attachments**: Attach files directly to your messages.
- **Dark Mode**: Switch seamlessly between light and dark themes.
- **Chat History**: View, search, and browse through past conversations.
- **Sidebar**: Easy navigation between sections like Profile, Chat, and Settings.

## Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd chatbot-app
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

4. Open the application in your browser:
    ```
    http://localhost:5173
    ```

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **TypeScript**: Ensures type safety and enhances code quality.
- **Vite**: A fast build tool for modern web projects.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Lucide Icons**: Icon library used in the user interface.
- **Speech Recognition API**: Adds voice input functionality.

## Customization

- **Themes**: Modify light and dark mode styles in `index.css`.
- **Animations**: Customize animations in `animations.css`.
- **Scrollbars**: Adjust scrollbar styles in `customScrollbar.css`.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```