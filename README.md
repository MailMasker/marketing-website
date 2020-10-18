## MailMasker.com Marketing Webiste

### Getting started

install Gatsby CLI - [more info](https://www.gatsbyjs.org/tutorial/part-zero/)

```sh
npm install -g gatsby-cli
```

or

```sh
yarn global add gatsby-cli
```

install dependencies:

```sh
yarn install
```

start the development server:

```sh
yarn start
```

or, if you're like me and had issues with the automatic HTTPS set up above:

```sh
brew install nss
npm install -g devcert-cli
devcert generate localhost
NODE_TLS_REJECT_UNAUTHORIZED=0 yarn develop --https --cert-file ./localhost.cert --key-file ./localhost.key
```

At the project root, compile your application for deployment:

```sh
gatsby build
```

Clean the cache to fix certain errors - run the clean command before starting the dev server:

```sh
gatsby clean
```

At the project root, serve the production build of your site:

```sh
gatsby serve
```

### Styles

This uses [styled-components](https://www.styled-components.com/). The theme file contains the base styles `src/styles/theme.js` and the global styles file contains basic element styles and a style reset `src/styles/GlobalStyles.js`.

### Navigation

This uses [react-anchor-link-smooth-scroll](https://github.com/mauricevancooten/react-anchor-link-smooth-scroll#readme) and [react-scrollspy](https://github.com/makotot/react-scrollspy).
To link a navigation item to a section simply add an id and string value to a section parent element that corresponds to the same navigation string value in `navigation.js`

### Updating the Warrant Canary

We update our Warrant Canary once a month.

```
cd canary-tools
./generate.sh
# ... enter password that Jon has stored securely, which unlocks a private key
```

then commit the changes and deploy
