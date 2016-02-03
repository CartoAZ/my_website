/* Alex Zarley, 2016*/


//initialize functions called when script loads
function initialize(){
    cities();
    addColumns();
    addEvents();
    clickMe();
};

//creates array globally to be used in multiple functions
var cityPop

//function to create array of city objects, create table, and populate table with cities/populations
function cities(){

    // //defines array containing an object for each city with properties for the city's name and population
    cityPop = [
        {
            city: 'Portland',
            population: 609456
        },
        {
            city: 'Salem',
            population: 160614
        },
        {
            city: 'Eugene',
            population: 159190
        },
        {
            city: 'Gresham',
            population: 109397
        }
    ];

    //append the tble elements to the div
    $('#mydiv').append('<table>');

    //appends a table header to the table for the title
    $('table').append('<th colspan="2">Most Populous Cities in Oregon 2013</th>');

    //appends a header row for column names
    $('table').append('<tr>');

    //adds the 'City' and 'Population' columns to the header row
    $('tr').append('<th class = "colHeader">City</th><th class = "colHeader">Population</th>');

    //loop to add a new row for each City
    for (var i = 0; i < cityPop.length; i++){
        //assigns html string to a variable for ease of reading
        var rowHtml = '<tr><td>' + cityPop[i].city + '</td><td>' + cityPop[i].population + '</td></tr>';
        //add the row's HTML string to the table
        $('table').append(rowHtml);
    };
}

//function to loop over each city's population, categorize its size, and add a column to display that size
function addColumns(){

    //looks at each 'tr' element on page
    $('tr').each(function(i){

      //creates column header for city size on first pass
    	if (i == 0){

    		$(this).append('<th>City Size</th>');

      //for 2nd-4th pass creates and sets citySize variable based on population of city in array for each city
    	} else {

    		var citySize;

        //i-1 because cityPop array index starts at 0, but .each function creates header when i==0
    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};

        //appends cell to current 'tr' and adds the citySize to it
    		$(this).append('<td>' + citySize + '</td>');
      };
    });
  };

//function to randomly generate an RGB text color for 'table' elements
function addEvents(){

  //the function to choose 3 values for RGB is initiated when you mouse over the table
	$('table').mouseover(function(){

    //declares color variable with appropriate css format
		var color = "rgb(";

    //for loop that generates random numbers for RGB values and adds commas/parenthesis appropriately for css
		for (var i=0; i<3; i++){

      //randomly generates float between 0 and 1, multiplies by 255 and rounds to integer
			var random = Math.round(Math.random() * 255);

      //concatenates previous 'value' of color with value of 'random'
			color += random;

      //after first two loops, a comma is added each time
			if (i<2){
				color += ",";

        //on third loop, ) is added to 'color' string
			} else {
				color += ")";
		  };
    };

    //adds 'color' property and 'color' variable to the 'table' element for css styling
		$("table").css('color', color);
  });
};

  //function that creates popup when you click on table
	function clickMe(){

    $("table").click(function(){
		    alert('Hey, you clicked me!');
	});
};


//call the initialize function when the window has loaded
$(document).ready(initialize);
