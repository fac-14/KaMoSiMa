![](https://image.ibb.co/i8CNqp/Trainspotting_f.jpg)

[![Build Status](https://travis-ci.org/fac-14/KaMoSiMa.svg?branch=master)](https://travis-ci.org/fac-14/KaMoSiMa)

[![codecov](https://codecov.io/gh/FAC-14/KaMoSiMa/branch/master/graph/badge.svg)](https://codecov.io/gh/FAC-14/KaMoSiMa)

## Local Installation

1. `$ git clone https://github.com/fac-14/KaMoSiMa.git`
2. `$ npm i`
3. Create a config.env file in your project root containing a DATABASE_URL variable with a postgres:// URL to a local database
4. Build the database: `$ psql -f "db/db_build.sql" YOUR_DATABASE`
5. Run that thing:`$ npm start`
6. 🐶

## The brief :eyeglasses: 

✅ Simple web app with a node server and a database :smiling_imp: 
✅ Your database comes with a schema, which should be documented in your readme (along with any other architectural decisions) :bar_chart: 
✅ Database hosted on Heroku, or locally :house_with_garden: 
✅ Build script for your database :clipboard:
🚧 Security concerns appropriately considered (you must protect against script injections!) :cop:
🚧 Good test coverage both server- and client-side :warning:
✅ Content dynamic, but DOM manipulation kept to a minimum :100: 
✅ Mobile-first design :iphone: 
✅ Clear user journey (even if you take one of our suggested ideas, document the user journey in your readme) :runner: 

## The schema

![](https://image.ibb.co/nLzbY9/Download.jpg)

We aptly named our database DOGSPOTTING, and it has three tables:

* ***dogs :dog:***
    * Relates only to dogs: their name, their breed, and assigns a serial id as the PK
* ***parks :earth_americas:***
    * Relates only to parks: their name, their lat/lon (a stretch goal for displaying on a map), and a serial id assigned as a PK
* ***spots :eyes:***
    * A table created by joining dog names and breeds from _**dogs**_ and park names from ***parks***

## User stories & stretch goals

### User stories :book: 

* I can come to the website and choose two options: I can register that I have spotted a dog, or I can see a record of dogs that have been spotted
* If I select to see a record of dogs, I am taken to a page where the default is to display the table of dogspotting incidents
* If I select to record a dogspotting incident, I am taken to a page with a form
* The form allows me to record the dog's name and breed, and the park in which I saw the dog

### Stretch goals :soon:

* I can see a map of London containing the 6 parks and see dogspotting incidents plotted on the map
* People can leave comments on dogspotting incidents that are plotted on the map
* I can click buttons below the 'spots' table on the 'saw' table to see new data
    * A tally of the number of each breed of dog (i.e. 4 labradors, 3 beagles, 1 dachshund)
    * Every dog that has been spotted in a particular park
    * Every spot that a particular dog has been involved in
* Add more parks for the user to choose from

## The lowdown

### Day 1
We started out by planning the basic schema structure before we went on to the actual software architecture. We decided on a modular file structure including backend (server and database including testing) and frontend (3 html files: serving as home, show the user input boxes and displaying the sql tables). We then agreed on the need to prioritise testing (TDD) for this project: test all of our rooter directions (home, assets, get JSON, post JSON etc.). Setting up the environment to meet all the goals described above was quite challenging but worked out fine in the end. We set up the npm dependencies/ dev dependencies, created a config.env file including our .env variables, set up the project (including the database) onto heroku and set up travis. 

The actual coding magic started by 
- setting up our server (incl. tests)
- created a database connection to link our local .sql file to node involving Pool
- created a script to create and populate our database

### Day 2
We started coding after having had a sweet cup of coffee and a good talk with the following outcomes:
- set up router handling for assets incl. supertesting and error handling
- work on sql database query functions in node namely for getting data and posting data to the server using TDD with tape 
- connect query endpoints to the router using a fronted XHR request 
- render server responses (JSON) to the page
- create styling and debugging 
- populate database on heroku and connect database and app on heroku
- start writing the readme

## Challenges/Lessons

### Kate

* Was absent the first half of Thursday so I came in feeling stressed but my teammates calmed me down
* We kept our goals simple so we didn't feel rushed, and this felt great

### Martin

### Monika



### Simon
