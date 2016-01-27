/* Alex Zarley, 2016
var mydiv = document.getElementById("mydiv");
mydiv.innerHTML = "Hello World"; */

//initialize function called when script loads
function initialize(){
    cities();
};

//function to create table with cities & populations

function cities(){
    //define two arrays for cities & populations

    var cityPop = [
        {
            city: 'Madison',
            population: '23309'
        },
        {
            city: 'Milwaukee',
            population: 594833
        },
        {
            city: 'Green Bay',
            population: 104057
        },
        {
            city: 'Superior',
            population: 27244
        }
    ];

    //append the able elements to the div
    $('#mydiv').append('<table>');

    //appends a header row to the table
    $('table').append('<tr>');

    //adds the 'City' and 'Population' columns to the header row
    $('tr').append('<th>City</th><th>Population</th>');

    //loop to add a new row for each City
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = '<tr><td>' + cityPop[i].city + '</td><td>' + cityPop[i].population + '</td></tr>';
        //add the row's HTML string to the table
        $('table').append(rowHtml);
    };
};

//call the initialize function when the window has loaded
$(document).ready(initialize);
