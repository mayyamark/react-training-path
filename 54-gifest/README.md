# Gifest

This is a SPA for viewing and uploading gifs with the following pages and functionalities:
- A page with infinite scroll, that displays trending gifs
  - Each gif could be liked by double-clicing on it
  - Hovering an individual gif, displays its details
- A header with search field, that allows users to search gifs by keyword form any page
A page, that displays all liked gifs
- A page for uploading a gif
- A page, that displays all uploaded gifs

## Project structure
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
It follows the [Atomic Design Methodology](https://atomicdesign.bradfrost.com/chapter-2/#:~:text=Atomic%20design%20is%20atoms%2C%20molecules,parts%20at%20the%20same%20time.).
In the [public](./public/) directory we can find all assets and our html file.
In the [src](./src/) directory we have all the logic - components, custom hooks, generic types, etc.

## Environment variables
In the project directory, there is a [`.template.env`](./.template.env) file. You can use it by renaming it to `.env`. The only change you need to make is to generate your own [Giphy API key](https://developers.giphy.com/dashboard/?create=true).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://react.dev/).
