# [SPRINT: For Your Fastest Commute](https://sprint-io.herokuapp.com/) (Back-end Repository)


SPRINT is a personal navigation tool for every day commute which takes in your destination address and calculates whether driving or taking public transit would get you there faster. 

I decided to build this app because it solves an issue that many people face during their daily commute. Google maps will tell you how long it will take you to get to your destination by car but does not take bus arrival time into account when determining how long a trip via public transportation will get take. SPRINT solves that plus showing you your transit vehicles actual location so you can plan better and stop worrying about whether the bus will be on time or not. 

Please check out [SPRINT Front-end Github Repository](https://github.com/NrupM/sprint-frontend) for the front-end code.

## Main Page

<img src="https://i.imgur.com/ZJvNKFj.jpg" width="800px">

This page features a search bar for you to enter your destination, two icons that change colors to indicate whether taking public transit or driving would get you there faster plus real time map markers showing you where exactly your next bus is located. 

### Mobile-Friendly

The app was designed for mobile accessability 

<img src="https://i.imgur.com/8fh53FY.jpg" width="300px">

## Installation Steps to preview locally

1. Clone this repository locally & cd into it
    ```
    $ git clone https://github.com/NrupM/sprint.git
    ```
2. Run `yarn install`
    ```
    $ yarn install
    ```

3. Run `yarn start` to start up the react server
    ```
    $ yarn start
    ```
4. Check it out on localhost:3000!

### Built With

* [React](https://facebook.github.io/react/) - JavaScript library
* [Node.js](https://nodejs.org/en/) - JavaScript runtime environment for the back-end application
* [Express](https://expressjs.com/) - Node.<span/>js framework used
* [CSS3 - Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3) - Stylesheet language and layout module
* [HTML5](https://en.wikipedia.org/wiki/HTML) - Standard markup language
* [RESTbus API](http://restbus.info/) - RESTful JSON API for the NextBus XML feed
* [Google Maps API](https://developers.google.com/maps/) - Web mapping service
* [React Google Maps](hhttps://github.com/tomchentw/react-google-maps) - React.js Google Maps integration component
* [Heroku](https://www.heroku.com/home) - Deploment platform
* [Uber API](https://developer.uber.com/) - Access core capabilities of the Uber app (feature started but not yet supported)

## User Stories:

1. A user can enter a destination, get arrival times for both driving and public transit options and be shown an indicator as to which travel option would be faster at that time. 

## Wireframes & Future Features

<table>
<tr>
<tr><h3>Future Features</h3>

1. A user will be able to bookmark frequent trips
2. A user will be able to see the transit line name and direction for the real time vehicle markers
3. A user will be able to click on the car icon and be sent to Uber app to order a car </tr>
<h3>Main Page</h3>
<img src="https://i.imgur.com/AEWz0y5.jpg" width="300px">
</tr>
<tr>
<h3>Bookmarks</h3>

Users will be able to bookmark frequent trips and be able to view thier bookmarks upon re-entering the app at a future date. 

<img src="https://i.imgur.com/JanvPfc.png" width="300px"></tr>
<tr><h3>Click to open Uber App</h3>

Once a User has put in thier destination and received arrival time results, they will be able to select the driving and request an Uber ride from their current location to their destination. 

<img src="https://i.imgur.com/2u4SqE1.png" width="300px">
</tr>
</table>


### User Authentication View

Original wireframes were built with the idea of having user authentication set up. I am still contemplating whether this would be a valuable feature to impliment. Maybe there is another way to save user specific bookmarks without having someone login each time they visit the app?? 

<p align="center">
<img src="https://i.imgur.com/Q0OJxCC.png" width="200px">
<img src="https://i.imgur.com/r34QYJp.png" width="200px">
<img src="https://i.imgur.com/fgeKihe.png" width="200px">
</p>

## Links

- [Heroku](https://sprint-io.herokuapp.com/)
- [Front-end Repository](https://github.com/NrupM/sprint-frontend)