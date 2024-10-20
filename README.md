# UniCard

UniCard is a group payment application that allows users to create pools, add participants, and generate a prepaid card for group purchases. Each participant can contribute funds to the pool, and the group creator can manage the payments. The app supports Apple Pay integration for seamless money transfers and tracking of contributions and expenses.

## Features

- **Create a Pool**: Easily create a group pool with a custom name and invite participants.
- **Add Participants**: Add contacts from your address book to the pool and invite them to join.
- **Prepaid Card Creation**: Generate a prepaid card for group payments with multiple card types (Gold, Platinum, Diamond).
- **Apple Pay Integration**: Use Apple Pay to add funds to the pool and load the prepaid card.
- **Track Contributions**: View real-time updates of participant contributions and track expenses.

## Installation

### Prerequisites
- Docker version 18.20.4 or higher
- Node.js version 18.20.4 or higher
- Expo CLI

### Local Development

To run the application locally without Docker, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/X-N-X-I-X-R/unicard.git
    cd unicard
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the app:
    ```bash
    npm run ios
    ```

4. For Android or web:
    ```bash
    npm run android
    npm run web
    ```

### Running with Docker

To run the application using Docker, follow these steps:

1. Build the Docker image:
    ```bash
    docker build -t unicard-app .
    ```

2. Run the Docker container:
    ```bash
   docker run -it --name my-unicard-container -p 19000:19000 -p 19001:19001 -p 19002:19002 -p 8081:8081 unicard-app
    ```

   This will start the Expo server, and you can scan the QR code to run the app on your mobile device using Expo Go.
## Project Structure

```bash
├── app
│   ├── (tabs)               # Main tabs layout
│   │   ├── _layout.tsx
│   │   ├── app.tsx
│   │   ├── explore.tsx
│   │   └── index.tsx
│   ├── +html.tsx
│   ├── +not-found.tsx
│   └── _layout.tsx
├── assets                   # Images, fonts
│   ├── fonts
│   │   └── SpaceMono-Regular.ttf
│   └── images
│       ├── logo.png
│       └── logo.webp
├── components               # Reusable UI components
│   ├── Addcontacts.tsx
│   ├── AppContent.tsx
│   ├── Cardtype.tsx
│   ├── Collapsible.tsx
│   ├── ContactsList.tsx
│   ├── Createpool.tsx
│   ├── ExternalLink.tsx
│   ├── HelloWave.tsx
│   ├── ParallaxScrollView.tsx
│   ├── PoolContext.jsx
│   ├── PoolContext.tsx
│   ├── PoolScreen.tsx
│   ├── ReviewChoices.tsx
│   ├── ThemedText.tsx
│   ├── ThemedView.tsx
│   ├── __tests__
│   │   ├── ThemedText-test.tsx
│   │   └── __snapshots__
│   │       └── ThemedText-test.tsx.snap
│   ├── navigation
│   │   └── TabBarIcon.tsx
│   └── types.ts
├── constants                # App constants like colors
│   └── Colors.ts
├── hooks                    # Custom hooks for theming
│   ├── useColorScheme.ts
│   ├── useColorScheme.web.ts
│   └── useThemeColor.ts
├── scripts                  # Utility scripts
│   └── reset-project.js
├── Dockerfile
├── Makefile
├── [README.md](http://_vscodecontentref_/0)
├── app.json
├── babel.config.js
├── expo-env.d.ts
├── package-lock.json
├── package.json
└── tsconfig.json# unicard
