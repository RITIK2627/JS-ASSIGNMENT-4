// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Add student info dynamically
    var studentInfo = document.getElementById('student-info');
    studentInfo.textContent = 'Student ID: 200544013 | Name: Ritik Patel';

    // Function to fetch weather data based on city name
    function getWeatherInfo(cityName) {
        var apiKey = '42c6f4f54d75442b88202016230812';
        var apiUrl = 'https://api.weatherapi.com/v1/current.json?q=' + cityName + '&key=' + apiKey;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Display weather information
                var weatherInfo = document.getElementById('weather-info');
                weatherInfo.innerHTML = `<h2>Current Weather in ${cityName}</h2>
                                         <p>Temperature: ${data.current.temp_c}°C</p>
                                         <p>Condition: ${data.current.condition.text}</p>`;
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                var weatherInfo = document.getElementById('weather-info');
                weatherInfo.innerHTML = `<p>Error fetching weather data. Please try again.</p>`;
            });
    }

    // Event listener for the search button
    var searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', function () {
        var cityInput = document.getElementById('city-input');
        var cityName = cityInput.value.trim();

        if (cityName !== '') {
            getWeatherInfo(cityName);
        } else {
            alert('Please enter a city name.');
        }
    });

    // Initial load with default city (Toronto)
    getWeatherInfo('toronto');
});
