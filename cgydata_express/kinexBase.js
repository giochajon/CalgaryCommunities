require('dotenv').config();

var knex = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    host : 'rainforester.cn8i3ndstyb0.us-east-2.rds.amazonaws.com',
    user : process.env.db_user,
    password : process.env.db_password,
    database : process.env.db_name
  }
});



function get_community_list() {

return knex.select('name').from('cgy2018')
}



function get_community_by_name(cname) {
 
return knex('cgy2018').where({'name': cname}) 
}


function get_compare_two(city1,city2) {
 
return knex('graph_stats').whereIn('name', [city1,city2]) 
}


module.exports.get_community_list = get_community_list  
module.exports.get_community_by_name = get_community_by_name 
module.exports.get_compare_two = get_compare_two