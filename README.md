# Coffee Bean Dream

> An application for tracking and rating your favorite coffee beans.

Coffee Bean Dream is a full-stack web application designed for coffee enthusiasts to catalog, review, and organize their coffee purchases. It was built using Angular, TypeScript, Node.js, Express, and Sequelize.

## Key Features

-   **View & Manage Coffee:** See your entire collection on the homepage.
-   **Add New Coffee:** Easily add new bags of coffee via a simple form.
-   **Search:** Quickly find specific coffees with the header search bar.
-   **Detailed View:** Click on any coffee to see more details.
-   **Rate & Review:** Assign a 1-5 star rating and write detailed tasting notes.
-   **Tasted Collection:** View all your previously rated coffees on a dedicated "Tasted" page.
-   **Delete Entries:** Remove coffees from your collection.

## Tech Stack

-   **Frontend:** Angular, TypeScript
-   **Backend:** Node.js, Express.js
-   **Database:** Sequelize (ORM), MySQL
-   **Containerization:** Docker
-   **CI/CD:** GitHub Actions

## Getting Started

Follow these instructions to get a local copy up and running.

### Prerequisites

Make sure you have the following installed:
-   Node.js & npm
-   Docker

### Run with Docker (Recommended)

1.  Clone the repository:
    ```sh
    git clone [<your-repository-url>](https://github.com/justinberg97/coffee-bean-dream.git)
    ```
2.  Install dependencies:
    ```sh
    npm install
    ```
3.  Build and run the Docker containers:
    ```sh
    docker compose up --build
    ```
4.  Once the build is complete, open your browser and navigate to `http://localhost:80`.
- This is preferred way to run the application over locally.

### Run Locally

1.  Install dependencies:
    ```sh
    npm install
    ```
2.  Seed the database:
    ```sh
    node server/seed.js
    ```
3.  Start the backend server:
    ```sh
    npm run server-dev
    ```
4.  In a **separate terminal**, navigate to the `public` folder and run the Angular development server:
    ```sh
    cd public
    ng serve
    ```
5.  Open your browser and navigate to `http://localhost:4200`.

## About the Author

**Justin Berg**

This project was my first solo full-stack application using the Angular framework. I am a software developer focused on enhancing my skills and demonstrating proficiency in new languages and frameworks.

Special thanks to **Daniel Paiz** for his collaboration on Dockerizing the application and setting up the CI/CD pipeline with GitHub Actions.

Feel free to reach out with any questions you may have.

-   **GitHub**: [github.com/justinberg97](https://github.com/justinberg97)
-   **LinkedIn**: [linkedin.com/in/justin-berg](https://www.linkedin.com/in/justin-berg-07409518a/)
-   **Email**: [justinmberg97@gmail.com](mailto:justinmberg97@gmail.com)

## License

This project is licensed under the MIT License.
