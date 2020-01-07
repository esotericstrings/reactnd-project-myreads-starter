# MyReads Project
This is the final assessment project for Udacity's React Fundamentals course. This bookshelf app allows you to search for and organize books into shelves by reading status.

## Setup

To start the project:

* install all project dependencies with `npm install`
* start the development server with `npm start`

After commands are run, a locally hosted version of the project can be found at: http://localhost:3000

## What You're Getting

├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms to use with the app.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Basic styles for the app. 
    ├── App.js # This is the root of the app.
    ├── App.test.js # Used for testing. Provided with Create React App.
    ├── utils
	    └── BooksAPI.js # A JavaScript API for the provided Udacity backend.
    ├── components # Pages and components used in apps
    │   ├── Book #Book component for search and app shelves
    │   ├── Bookshelf #Shelves for app book organizing
    │   ├── Header #Shared Header for 404 and Index
    │   ├── IndexPage #Default app page
    │   ├── NotFoundPage #Very basic 404 page
    │   └── SearchPage #Search page to add books to shelves
    ├── index.css # Global styles. 
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.

## Bookshelf Functionality
This app allows you to search for new books and add searched books to your personal bookshelves by updating the book status.

Books on your personal shelves can be categorized as and moved between "Currently Reading", "Want to Read", and "Read" shelf categories.

## Search Terms
The backend API is limited to a fixed set of cached search results and is limited to a particular set of search terms.

For valid search results, try the following terms:

'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'History', 'History', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Program Javascript', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction',

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
