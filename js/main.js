/* Alex Zarley, 2016
var mydiv = document.getElementById("mydiv");
mydiv.innerHTML = "Hello World"; */

//questions:
//   1) Do I need to define cityPop globally?
//   2) Not sure why the citySize is "undefined" for 2-4 cities
//     - I thought we could reassign the variable using.each
//
//   4) Is it okay that i switched from '#table' to 'table' since there is only 1
//     table on this webpage?


//initialize function called when script loads
function initialize(){
    cities();
    addColumns();
    addEvents();
    clickMe();
};

//defines an array containing an object for each city with properties for the cities name and population
var cityPop = [
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
//function to create array of city objects
function cities(){

    // //defines an array containing an object for each city with properties for the cities name and population
    // var cityPop = [
    //     {
    //         city: 'Portland',
    //         population: 609456
    //     },
    //     {
    //         city: 'Salem',
    //         population: 160614
    //     },
    //     {
    //         city: 'Eugene',
    //         population: 159190
    //     },
    //     {
    //         city: 'Gresham',
    //         population: 109397
    //     }
    // ];

    //append the able elements to the div
    $('#mydiv').append('<table>');

    //appends a table header to the table for the title
    $('table').append('<th colspan="2">Most Populous Cities in Oregon 2013</th>');

    //appends a header row for column names
    $('table').append('<tr>');

    //adds the 'City' and 'Population' columns to the header row
    $('tr').append('<th class = "colHeader">City</th><th class = "colHeader">Population</th>');

    //loop to add a new row for each City
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = '<tr><td>' + cityPop[i].city + '</td><td>' + cityPop[i].population + '</td></tr>';
        //add the row's HTML string to the table
        $('table').append(rowHtml);
    };
};

//function to loop over each city's population, categorize its size, and add a column to display that size
function addColumns(){

    //looks at each 'tr' element on page
    $('tr').each(function(i){

      //creates column header for city size
    	if (i == 0){

    		$(this).append('<th>City Size</th>');

      //sets citySize variable based on population of city in array
    	} else {
        //don't know why this variable isn't getting reset?
    		var citySize;

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};

        //appends cell to current 'tr' and adds the citySize to
    		$(this).append('<td>' + citySize + '</td>');
    	};
    });
};

//function to randomly generate an RGB text color for 'table' elements
function addEvents(){

  //the function to choose 3 values for RGB is initiated when you mouse over the table
	$('table').mouseover(function(){

		var color = "rgb(";

    //for loop that generates random numbers for color values and adds commas/parenthesis appropriately
		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);

			color += random;

			if (i<2){
				color += ",";

			} else {
				color += ")";
		  };
    };

    //adds 'color' property and RGB value to the 'table' element
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
