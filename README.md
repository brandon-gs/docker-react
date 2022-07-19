# Docker + ReactJS + Nginx

Containerization on the front-end with React and docker in development and production, and deployment of a React application with docker and nginx.

This project is a demo from a ReactJS + Nginx + Docker that allow Development to Production workflow using multi-stage builds and docker compose.

## Getting started

You need to have [docker](https://docs.docker.com/engine/install/) installed in your machine]

Also you need to install **docker-compose** with the next command:

```bash
sudo apt install docker-compose
```

After you need to create two environment variables files, one for development and the other for production

```bash
$ cp .env.sample .env.dev
$ cp .env.sample .env
```

After create these files, you need to config it with your own values for development and production environment.

## Run with Docker for Development

Run without docker compoose

1. Build the docker image
2. Run a docker container with our image

```bash
$ docker build -f Dockerfile.dev -t react-docker-app-image-dev .
$ docker run --env-file ./.env.dev -v $(pwd)/src:/app/src:ro -d -p 3000:3000 --name react-docker-app react-docker-app-image-dev
```

Run with docker-compose

```bash
$ docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d --build
```

Stop development container with docker-compose

```bash
$ docker-compose -f docker-compose.yml -f docker-compose-dev.yml down
```

## Run with Docker for Production

For our production image we just have one docker stage with a nginx image, so we need to build our react app before create the image and the container.
Use this approach allow us to use an .env file to use environment variables in our production react app.
Run the following steps to run our app in production mode:

1. Create the .env file and config with your own values

```bash
$ cp .env.sample .env
```

2. Build react app

```bash
$ npm run build
```

3. Run with docker-compose

```bash
$ docker-compose -f docker-compose.yml -f docker-compose-prod.yml up -d --build
```

Stop production container with docker-compose

```bash
$ docker-compose -f docker-compose.yml -f docker-compose-.yml down
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
