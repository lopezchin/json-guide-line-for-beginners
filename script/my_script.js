$(document).ready( function() {
 $.getJSON("json_data.json", function(data){
       $.each(data.person, function(){
	         $("ul").append("
	         		<li>Name: "+this['name']+"</li>
                    <li>Age: "+this['age']+"</li>
                    <br />");
	   });
 });