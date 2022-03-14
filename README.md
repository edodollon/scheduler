# Interview Scheduler

## Project Description

Interview Scheduler is a Single Page Application (SPA) built using React. Data is persisted by the API server using a PostgreSQL database. The client application communicates with an API server over HTTP, using the JSON format.

The app allows its users to add, edit, and delete appointments in real time.

## Screenshots

### Base view
!["Base view"](https://github.com/edodollon/scheduler/blob/master/docs/base-screen.png?raw=true)

### Creating Appointment
!["Create view"](https://github.com/edodollon/scheduler/blob/master/docs/create-appointment.png?raw=true)

### Saved Appointment
!["Saved appointment"](https://github.com/edodollon/scheduler/blob/master/docs/saved-appointment.png?raw=true)

### Deleting with confirmation
!["Delete confirmation"](https://github.com/edodollon/scheduler/blob/master/docs/delete-option.png?raw=true)

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Scheduler API Setup

- Fork and clone the scheduler-api [here](https://github.com/lighthouse-labs/scheduler-api)
- Follow steps outlined in the README to install and setup database
- Fork and clone this repo
- Navigate to the root directory and install dependencies with `npm install`
- Run `npm start` from the root directory of the project once database and scheduler-api are running

## Dependecies

- Axios
- Classnames
- Normalize.css
- React
- React-dom
- React-scripts
- React-testing-library
- Babel/core
- Storybook/addon-actions
- Storybook/addon-backgrounds
- Storybook/addon-links
- Storybook/addons
- Storybook/react
- Testing-library/jest-dom
- Testing-library/react
- Babel-loader
- Node-sass
- Prop-types
- React-hooks-testing-library
- React-test-renderer