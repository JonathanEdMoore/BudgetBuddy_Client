# BudgetBuddy

##
Creator:
 Jonathan Moore

## Link to app

https://budgetbuddy-app.now.sh/

## Demo

To see apps functionality just log in with demo credentials.
email: demo@email.com
Password: Asdf123!

## Landing

![landing](/src/Images/Landing.png "Landing Page")

Landing Page has information about the project as well as links to the sign-up and login pages.

## Sign-Up

![signup](/src/Images/Signup.png "Sign-up Page")

The Sign-Up Page allows the user to register an account for the site.

## Login

![login](/src/Images/Login.png "Login page")

The Login Page allows the user to login to their account

## Home Page

![Home](/src/Images/Homepage.png "Home page")

This displays to transactions the user has made.

## Database Related Documentation and Routes

### Category:

In the database, I have a list of categories for transactions. This will be useful if the user is interested in identifying transactions by category type.

### Transactions:

This table of the databse is where the bulk of the information resides. The transactions table stores all information related to transactions any user might want to store. It uses a foreign key to link the transaction to a specific user.

### Users:

The users table stores all information relating to the user. This inclues first and last names, email, and passwords. The password is hashed prior to being inserted into the database.

## Summary

BudgetBuddy is a virtual check registry application. The purpose of the application is to be an easy to use app that will allow the user to keep track of their daily transactions. 

## Technology Used

HTML5
CSS3
ReactJS
NodeJS
Express
Enzyme
Mocha
PostgreSQL

________________________________________________________________________________________________________________________________________________________



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
