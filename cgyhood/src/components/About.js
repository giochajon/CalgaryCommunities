import React, {Component} from 'react';

class About extends Component {

render(){
return ( <div>

<h3> About this application	</h3>

<img  src="https://i.imgur.com/EluxAl4.png" alt="Architecture Diagram"/>

<p className = "descrip" >Full Stack Project (JS/ React, Python /Flask Postgres, Node /express  Google Maps API and react-bootstrap ) to compare Calgary Communities (that is our term we Calgarians use as the rough equivalent of what Neighborhoods are).</p>

<p className = "descrip">This project is some sample code to demonstrate the interaction of multiple technologies into a full-stack application.</p>

<p className = "descrip"> I came to Calgary about nine years ago and to this day I struggle on where the communities are located, hence the purpose of this app is to help those like me to orient ourselves as Calgary is around the same size as New York. </p>

<p className = "descrip"> The application consist in a tool to compare information of two comminities (neighborhoods) from our awesome city. </p>

<p className = "descrip">The information was obtained from the data provided by <a href="https://data.calgary.ca/">open data available from the city of calgary </a> </p>

<p className = "descrip" >As the multipoligon and points to draw the limits and center on the locations of the communities were in arcGis format, I converted them with python to be google maps compatible Also I used the react library created by<a href="https://github.com/tomchentw/react-google-maps">Tom Cheng </a>to render them in my components,  that is how I implemented the <a href="https://developers.google.com/maps/documentation/javascript/tutorial" > Google Maps API </a>calls  </p>

<p className = "descrip" > I created my Postgress database and a flask server to render the data to JSON format, as a <u>proof of concept</u> I added a Node/express/Knex server to pull the data to be consumed by asyncronous calls from the REACT front end </p>

<p className = "descrip">
The running React front-end app is published in: <a href = "https://cgyab.ca/">https://cgyab.ca/</a>  
The flask server is in: <a href = "https://cgyflask-api-heroku.herokuapp.com/">https://cgyflask-api-heroku.herokuapp.com/</a> 
The Node server is in: <a href = "http://backend.cgyab.ca">http://backend.cgyab.ca</a> or <a href ="https://cgy-node-knex.herokuapp.com/">https://cgy-node-knex.herokuapp.com/</a> 
finally the Postgres database server currently is hosted on Amazon AWS
</p>

	</div> )}

}
export default About;
