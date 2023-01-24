# Everlance UI Testing Project

This is a demo challenge site for Everlance.\
For a quick preview please visit: https://tangerine-fox-c5642c.netlify.app

This site was builded using React and Typescript, you can install and run this site following the steps below:

## Step 1

Make sure you have installed Node Js in your local machine.\
Install all the node packages of this project using NPM and running the following command in your terminal console:
### `npm install`

## Step 2

Run this application usign the following command: 
### `npm start`

It Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


## This site is builded using the following packages

### Tailwind

Used to add all the css styles on this page. \
For more info please refer to https://tailwindcss.com/

## For cleaning code this project use the following linters

### Eslint

Used to keep clean the javascrip and typescrip code.\
For more info please refer to https://eslint.org/docs/latest/user-guide/configuring/

### Prettier

Used as a code formatter.\
For more info please refer to https://prettier.io/docs/en/editors.html

### Acceptance Criteria

### GitHub API
## User search

https://api.github.com/search/users?q=gabriel&page=1&per_page=10

- q: The search bar input value
- page: The current page number
- Initial is 1
- per_page: The current page size
- initial is 10

## User detail

https://api.github.com/users/gabrielgarza

## Technical Requirements

1. [ ] To handle all requests and the app state please use React Query. // I used my own custom hooks
It’s encouraged not to use a component library.
You must at least build the search field component from scratch

## Features

2. [X] Search by username or email and return a list of results
3. [X] Display each result as a card, 3 max per row.
4. [X] Ability to view a profile detail on a different page
5. [X] Ability to paginate and load more items to the list

## Design

6. [X] Please use Tailwind CSS

This code was developed by:
 
Giovanni Ortega Arias\
Front-End Developer\
Email: giortega@giorttega.com\
Linkedin: https://www.linkedin.com/in/giovanni-ortega-arias