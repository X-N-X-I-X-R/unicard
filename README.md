

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
to install more expo packages
```bash
npx expo install <package-name>
```
### Local Development

To run the application locally without Docker, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/X-N-X-I-X-R/unicard.git
    cd unicard
    ```

2. **Install dependencies:**


3. **Run the app for iOS:**
    ```bash
    npm run ios
    ```
    or try  
    ```bash
    make runios
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



# Stripe API 
// curl -X POST https://922f-77-127-91-12.ngrok-free.app/create-price
//curl -X POST http://localhost:3000/create-price


# 2 option to run ngrok  for stripe to expose the server 3000 to the internet 
1 - ngrok http 3000
2- make ngrok

#  2 option to  run the server for stripe  (stripe is a payment gateway , we use it to handle the payment)
1 - node server/server_stripe.js    
2 - make runstripe 




TODO: 
create a new page to register the user 
create a new page to login the user
* use the firebase to authenticate the user 
* use the firebase to store the user data

create a reset password page 
* use the firebase to reset the password
