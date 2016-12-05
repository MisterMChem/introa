var imageArray = [
	"https://static.pexels.com/photos/7720/night-animal-dog-pet.jpg",
	"http://animal-dream.com/data_images/dog/dog3.jpg",
	"http://wallpaperspicturesphotos.com/wp-content/uploads/2015/01/cute-and-funny-small-dog-wallpaper-1920x1200.jpg"
];
var currentIndex = 0;

function renderImage(){
	if (currentIndex < 0) {
		currentIndex = imageArray.length - 1;
	} else if (currentIndex >= imageArray.length) {
		currentIndex = 0;
	}

	$('#thePhoto').attr('src', imageArray[currentIndex]);
}
renderImage();

function forwardImage(){
	currentIndex++;
	renderImage();
}

function backImage(){
	currentIndex--;
	renderImage();
}

$('#forwardBtn').on('click', forwardImage);
$('#backBtn').on('click', backImage);

var name = prompt("What's your name?");
var outputString = "Happy Holidays, " + name + "!";
$('h1').html(outputString);

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {

var data = google.visualization.arrayToDataTable([
  ['Dog Breed', 'How Much I Want One'],
  ['Golden Retriever',     11],
  ['Corgi',      1],
  ['Labrador',  7],
  ['Doge', 4],
  ['Daschund',    2]
]);
//calculate 50% of page width
var chartWidth = $('body').width()*0.5;

var options = {
  title: 'My Holiday Wishlist',
  backgroundColor: '#FFFAE4',
  width: chartWidth,
  colors: ['#40627C']
};

var chart = new google.visualization.BarChart(document.getElementById('piechart'));

chart.draw(data, options);
}

