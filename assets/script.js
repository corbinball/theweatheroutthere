var userFormEl = document.querySelector('#user-form');
var weatherButtonsEl = document.querySelector('#weather-buttons');
var nameInputEl = document.querySelector('#cityname');
var weatherContainerEl = document.querySelector('#weather-container');
var weatherSearchTerm = document.querySelector('#weather-search-term');

var formSubmitHandler = function (event) {
  event.preventDefault();

  var cityname = nameInputEl.value.trim();

  if (cityname) {
    getUserWeather(cityname);

    weatherContainerEl.textContent = '';
    nameInputEl.value = '';
  } else {
    alert('Please enter another city');
  }
};

var buttonClickHandler = function (event) {
  // `event.target` is a reference to the DOM element of what programming language button was clicked on the page
  var weather = event.target.getAttribute('data-weather');

  // If there is no language read from the button, don't attempt to fetch repos
  if (weather) {
    getFeaturedWeather(weather);

    weatherContainerEl.textContent = '';
  }
};

var getUserWeather = function (city) {
  var apiUrl = 'api.openweathermap.org/data/2.5/weather?q='+ nameInputEl.val() +'&appid=a6915136789a2bd87e9ef2d2e50b32ba';

  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        console.log(response);
        response.json().then(function (data) {
          console.log(data);
          displayRepos(data, city);
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    })
    .catch(function (error) {
      alert('Unable to get the weather out there');
    });
};



userFormEl.addEventListener('submit', formSubmitHandler);
languageButtonsEl.addEventListener('click', buttonClickHandler);
