# CalgaryCommunities
  ____      _                         ____                            _ _         ___        __       
 / ___|__ _| | __ _  __ _ _ __ _   _ / ___|___  _ __ ___  _   _ _ __ (_| |_ _   _|_ _|_ __  / _| ___  
| |   / _` | |/ _` |/ _` | '__| | | | |   / _ \| '_ ` _ \| | | | '_ \| | __| | |  | || '_ \| |_ / _ \ 
| |__| (_| | | (_| | (_| | |  | |_| | |__| (_) | | | | | | |_| | | | | | |_| |_|  | || | | |  _| (_) |
 \____\__,_|_|\__, |\__,_|_|   \__,  \____\___/|_| |_| |_|\__,_|_| |_|_|\__|\__, |___|_| |_|_|  \___/ 
              |___/            |___/                                        |___/                     

Full Stack Project (JS/ React, Python /Flask Postgres, Google Maps API and react-bootstrap ) to compare Calgary Communities (that is our term we Calgarians use as the rough equivalent of what Neighborhoods are)

This project is some sample code to demonstrate the interaction of multiple technologies into a full-stack application.

I came to Calgary about nine years ago and to this day I struggle on where the communities are located, hence the purpose of this app is to help those like me to orient ourselves as Calgary is around the same size as New York.  

The application consist in a tool to compare information of two comminities (neighborhoods) from our awesome city.

The information was obtained from the data provided by open data available from the city of calgary site (see) => https://data.calgary.ca/

As the multipoligon and points to draw the limits and center on the locations of the communities were in arcGis format,
I converted them with python to be google maps compatible 
Also I used the react library created by Tom Cheng to render them in my components, see  https://github.com/tomchentw/react-google-maps ) that is how I implemented the Google Maps API calls -> https://developers.google.com/maps/documentation/javascript/tutorial


I created my Postgress database and a flask server to render the data to JSON format to be consumed by asyncronous calls from the REACT front end, I did not use redux as I use only one state (inspired by this article https://web.archive.org/web/20171020192305/http://blog.reactandbethankful.com/posts/2015/09/15/understanding-the-functional-revolution/ which we read and discussed in our program)






