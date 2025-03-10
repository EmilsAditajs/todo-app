# Project Setup


## Prerequisites

Make sure you have the following installed:

- [Composer](https://getcomposer.org/)
- [Docker](https://www.docker.com/products/docker-desktop) (For running Sail)
- [Node.js](https://nodejs.org/) (For frontend setup)
- [npm](https://www.npmjs.com/) (For managing frontend dependencies)

## Backend Setup

1. **Install Composer Dependencies**

   Navigate to the root of the project and run the following command to install PHP dependencies:

   ```bash
   composer install
   ```

2. **Create the `.env` File**

   Copy the `.env.example` file to `.env`:

   ```bash
   cp .env.example .env
   ```

3. **Run Laravel Sail**

   ```bash
   ./vendor/bin/sail up
   ```

   This will bring up the necessary containers, including the Laravel application and its dependencies.

4. **Database Migration (Optional)**

   Run the following command to run migrations:

   ```bash
   ./vendor/bin/sail artisan migrate
   ```

## Frontend Setup

1. **Navigate to the `/frontend` Directory**

   The frontend of the application is located in the `/frontend` folder.

   ```bash
   cd frontend
   ```

2. **Create the `.env` File**

   As with the backend, create the `.env` file by copying the `.env.example`:

   ```bash
   cp .env.example .env
   ```

3. **Install Frontend Dependencies**

   Install all the necessary JavaScript dependencies by running:

   ```bash
   npm install
   ```

4. **Run the Development Server**

   After the dependencies are installed, start the frontend development server by running:

   ```bash
   npm run dev
   ```

   This will start the Nuxt.js development server and make the frontend available locally at `http://localhost:3000`.

