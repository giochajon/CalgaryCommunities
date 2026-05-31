import React, {Component} from 'react';

class About extends Component {

render(){
return ( <div>

<h3> About this application	</h3>

<img  className = "image-bor" src="https://i.imgur.com/EluxAl4.png" alt="Architecture Diagram"/>
<div className = "AboutText">
		<p className = "authorsText"> Created by <a href="https://www.linkedin.com/in/giochajon/"> Giovanni Chajon </a> and <a href="https://www.linkedin.com/in/alex-jinga/">Alex Jinga </a></p> 
		<p className = "descrip"> The application consists of a tool to compare side by side information on two communities (neighborhoods) from our awesome city. </p>

	<p className = "descrip" >It is a Full Stack Project (JS/ React, Python /Flask Postgres, Node /express  Google Maps API and react-bootstrap ) to compare Calgary Communities (that is the term we Calgarians use as the rough equivalent of what Neighborhoods are).</p>

	<p className = "descrip">This project objective is to demonstrate the interaction of multiple technologies into a full-stack application.</p>

	<p className = "descrip"> The idea came to us, because like most Calgarians, we struggle with locating and comparing the communities. It could be used if you wish to move to a new neighborhood or start a business. Calgary is around the same size as New York and hass 200+ communities, so this can help.   </p>

	
	<p className = "descrip">The information we present was obtained from the data provided by <a href="https://data.calgary.ca/">open data available from the city of Calgary </a> </p>

	<p className = "descrip" >The multipoligon and points to draw the limits and center on the locations of the communities were converted from arcGis format, we converted them with python to be google maps compatible. Also, we used the react library created by<a href="https://github.com/tomchentw/react-google-maps">Tom Cheng </a>to render them into components,  that is how we implemented the <a href="https://developers.google.com/maps/documentation/javascript/tutorial" > Google Maps API </a>calls  </p>

	<p className = "descrip" > Alex and I created a Postgress, database a flask server to render the data to JSON format, and as a <u>proof of concept</u> we added a Node/express/Knex server to pull the data to be consumed by asynchronous calls from the REACT front end </p>

	<p className = "descrip">
	The running React front-end app is published in <a href = "https://cgyab.ca/">https://cgyab.ca/</a>  
	The flask server is in <a href = "https://cgyflask-api-heroku.herokuapp.com/">https://cgyflask-api-heroku.herokuapp.com/</a> 
	The Node server is in <a href = "http://backend.cgyab.ca">http://backend.cgyab.ca</a> or <a href ="https://cgy-node-knex.herokuapp.com/">https://cgy-node-knex.herokuapp.com/</a> 
	The the Postgres database server currently is hosted on Amazon AWS RDS

	The source code is found in <a href = "https://github.com/giochajon/CalgaryCommunities">https://github.com/giochajon/CalgaryCommunities </a>

	</p>
</div>

	</div> )}

}
export default About;

