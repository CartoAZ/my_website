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

//call the initialize function when the window has loaded
$(document).ready(initialize);
