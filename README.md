# CalgaryCommunities

(below is a doodle readable when you open the readmefile on any text editor)
  ____      _                         ____                            _ _         ___        __       
 / ___|__ _| | __ _  __ _ _ __ _   _ / ___|___  _ __ ___  _   _ _ __ (_| |_ _   _|_ _|_ __  / _| ___  
| |   / _` | |/ _` |/ _` | '__| | | | |   / _ \| '_ ` _ \| | | | '_ \| | __| | |  | || '_ \| |_ / _ \ 
| |__| (_| | | (_| | (_| | |  | |_| | |__| (_) | | | | | | |_| | | | | | |_| |_|  | || | | |  _| (_) |
 \____\__,_|_|\__, |\__,_|_|   \__,  \____\___/|_| |_| |_|\__,_|_| |_|_|\__|\__, |___|_| |_|_|  \___/ 
              |___/            |___/                                        |___/                     

Created by Giovanni Chajon and Alex Jinga

The application consists of a tool to compare side by side information on two communities (neighborhoods) from our awesome city.

It is a Full Stack Project (JS/ React, Python /Flask Postgres, Node /express Google Maps API and react-bootstrap ) to compare Calgary Communities (that is the term we Calgarians use as the rough equivalent of what Neighborhoods are).

This project objective is to demonstrate the interaction of multiple technologies into a full-stack application.

The idea came to us, because like most Calgarians, we struggle with locating and comparing the communities. It could be used if you wish to move to a new neighborhood or start a business. Calgary is around the same size as New York and hass 200+ communities, so this can help.

The information we present was obtained from the data provided by open data available from the city of Calgary

The multipoligon and points to draw the limits and center on the locations of the communities were converted from arcGis format, we converted them with python to be google maps compatible. Also, we used the react library created byTom Cheng to render them into components, that is how we implemented the Google Maps API calls

Alex and I created a Postgress, database a flask server to render the data to JSON format, and as a proof of concept we added a Node/express/Knex server to pull the data to be consumed by asynchronous calls from the REACT front end

The running React front-end app is published in https://cgyab.ca/ The flask server is in https://cgyflask-api-heroku.herokuapp.com/The Node server is in http://backend.cgyab.ca or https://cgy-node-knex.herokuapp.com/The the Postgres database server currently is hosted on Amazon AWS RDS The source code is found in https://github.com/giochajon/CalgaryCommunities

This also serves the purpose of fulfill competency #250 :-)





