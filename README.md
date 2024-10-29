

# UniCard

A group payment application where multiple people can contribute toward a group purchase and manage funds efficiently using virtual cards.

## Prerequisites
- **Docker**: version 18.20.4 or higher
  - To install Docker, follow the official instructions at [Docker's official website](https://docs.docker.com/get-docker/)
- **Node.js**: version 18.20.4 or higher
  - Install Node.js from [Node.js official website](https://nodejs.org/)
- **Expo CLI**: Install it globally using npm:
    ```bash
    npm install -g expo-cli
    ```

## Installation

### Local Development

To run the application locally without Docker, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/X-N-X-I-X-R/unicard.git
    cd unicard
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Run the app for iOS:**
    ```bash
    npm run ios
    ```

4. **Run the app for Android or web:**
    ```bash
    npm run android
    npm run web
    ```

### Running with Docker

To run the application using Docker, follow these steps:

1. **Build the Docker image:**
    ```bash
    docker build -t unicard-app .
    ```

2. **Run the Docker container:**
    ```bash
    docker run -it --name my-unicard-container -p 19000:19000 -p 19001:19001 -p 19002:19002 -p 8081:8081 unicard-app
    ```

This will start the Expo server, and you can scan the QR code with Expo Go to run the app on your mobile device.

3. **Stopping the container:**
    ```bash
    docker stop my-unicard-container
    ```

4. **Restarting the container:**
    ```bash
    docker start my-unicard-container
    ```

5. **Removing the container:**
    If you want to remove the container after stopping it:
    ```bash
    docker rm my-unicard-container
    ```

---

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
├── README.md
├── app.json
├── babel.config.js
├── expo-env.d.ts
├── package-lock.json
├── package.json
└── tsconfig.json



// curl -X POST https://922f-77-127-91-12.ngrok-free.app/create-price
//curl -X POST http://localhost:3000/create-price