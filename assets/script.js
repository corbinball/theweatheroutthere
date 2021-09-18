var userFormEl = document.querySelector('#user-form');
var submitBtn = document.querySelector('#submit-btn')
var weatherButtonsEl = document.querySelector('#weather-buttons');
var nameInputEl = document.querySelector('#cityname');
var weatherContainerEl = document.querySelector('#weather-container');
var weatherSearchTerm = document.querySelector('#weather-search-term');
console.log(test2);
console.log("test3");

var getUserWeather = function () {
  var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+ nameInputEl.value +'&appid=a6915136789a2bd87e9ef2d2e50b32ba';

  console.log(apiUrl);

  fetch(apiUrl)
  .then(response => response.json())
  .then(data => console.log(data))

.catch(err => alert("Cant get the weather here!"))

}
console.log(getUserWeather);
submitBtn.addEventListener('click', getUserWeather);
console.log("test");
