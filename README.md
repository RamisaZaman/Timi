# Timi - Your AI-Powered Personal Assistant

Timi is a modern mobile application built with Expo and React Native that helps you manage your daily activities, schedule, and interactions with people. The app features AI-powered suggestions and voice interaction capabilities.

## Features

- 🤖 AI-powered suggestions for activities and scheduling
- 🎙️ Voice interaction support
- 📱 Modern, responsive UI with Expo Router
- 🔥 Firebase integration for backend services
- 📅 Activity and schedule management
- 👥 People management

## Tech Stack

- React Native
- Expo
- TypeScript
- Firebase
- Expo Router
- NativeWind (Tailwind CSS for React Native)

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Expo CLI
- Firebase account

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/timi.git
cd timi
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up Firebase:
   - Create a new Firebase project
   - Copy your Firebase configuration to `firebase.ts`

4. Start the development server:
```bash
npx expo start
```

## Project Structure

```
timi/
├── app/                    # Main application screens
│   ├── (tabs)/            # Tab navigation screens
│   └── _layout.tsx        # Root layout
├── components/            # Reusable components
├── hooks/                 # Custom React hooks
├── stores/               # State management
├── types/                # TypeScript type definitions
└── assets/               # Static assets
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 