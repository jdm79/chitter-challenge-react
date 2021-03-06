# Chitter Challenge 

Write a small Twitter clone that will allow the users to post messages to a public stream.

Features:
## STRAIGHT UP
```
As a Maker
So that I can let people know what I am doing  
I want to post a message (peep) to chitter

As a maker
So that I can see what others are saying  
I want to see all peeps in reverse chronological order

As a Maker
So that I can better appreciate the context of a peep
I want to see the time at which it was made

As a Maker
So that I can post messages on Chitter as me
I want to sign up for Chitter
```

## HARDER
```
As a Maker
So that only I can post messages on Chitter as me
I want to log in to Chitter

As a Maker
So that I can avoid others posting messages on Chitter as me
I want to log out of Chitter
```

## ADVANCED
```
As a Maker
So that I can stay constantly tapped in to the shouty box of Chitter
I want to receive an email if I am tagged in a Peep
Notes on functionality:
You don't have to be logged in to see the peeps.
Makers sign up to chitter with their email, password, name and a username (e.g. samm@makersacademy.com, password123, Sam Morgan, sjmog).
The username and email are unique.
Peeps (posts to chitter) have the name of the maker and their user handle.
Your README should indicate the technologies used, and give instructions on how to install and run the tests.
Bonus:
If you have time you can implement the following:

In order to start a conversation as a maker I want to reply to a peep from another maker.
And/Or:

Work on the CSS to make it look good.
Good luck and let the chitter begin!

Code Review
In code review we'll be hoping to see:

All tests passing
High Test coverage (>95% is good)
The code is elegant: every class has a clear responsibility, methods are short etc.
```

# Tech Stack

* Create React App
* Jest
* Cypress

# How to install

# How to test

Run the React app before running any tests with the following command:
```
$ npm start
```

Then in another terminal tab:
```
$ ./node_modules/.bin/cypress open 
```
or 
```
$ npx cypress open
```

* this will open the Cypress GUI 
* click to run all tests, or choose to only run specific ones

# How to run the app

```
$ npm start
```

