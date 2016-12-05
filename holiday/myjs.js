var imageArray = [
	"https://static.pexels.com/photos/7720/night-animal-dog-pet.jpg",
	"https://i.ytimg.com/vi/KY4IzMcjX3Y/maxresdefault.jpg",
	"https://files.graphiq.com/stories/t2/The_16_Dogs_That_Won8217t_Make_You_Sneeze_2060_2848.jpg",
	"https://s-media-cache-ak0.pinimg.com/736x/2e/b9/1a/2eb91a76325d9c406ab97e981990ad78.jpg"
];
var currentIndex = 0;

function renderImage() {
	if (currentIndex < 0) {
		currentIndex = imageArray.length - 1;
	} else if (currentIndex >= imageArray.length) {
		currentIndex = 0;
	}

	$('#thePhoto').attr('src', imageArray[currentIndex]);
}
renderImage();

$('#forwardBtn').on('click', function(){
	//this is what happens when it's clicked!
	currentIndex++;
	renderImage();
});

$('#backBtn').on('click', function(){
	currentIndex--;
	renderImage();
});

var name = prompt("What's your name?");
var outputString = "Happy Holidays, " + name + 
"!";
$("h1").html(outputString);


// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

// Create the data table.
var data = new google.visualization.DataTable();
data.addColumn('string', 'Person');
data.addColumn('number', 'Cheerfulness');
data.addRows([
  ['Matt', 30],
  ['Brian', 10],
  ['The Dog', 42],
  ['Mom', 30],
  ['Dad', 20]
]);

var chartWidth = $(window).width()*0.35;

// Set chart options
var options = {
	'title':'Cheerfulness of My Family',
    'width':chartWidth,
    'height':300,
    'backgroundColor': '#FFFAE4',
    'colors': ['#40627C'],
    'fontName': 'Love Ya Like A Sister'
};

// Instantiate and draw our chart, passing in some options.
var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
chart.draw(data, options);
}




