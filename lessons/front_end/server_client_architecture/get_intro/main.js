// The client-server relationship:
// The browser (client) sends a request for data to a server.
// The server (in this case, the Open-Meteo API) processes the request and sends back a response.
// The client then uses the data from the response.

// As an experienced developer, I know that API calls are asynchronous.
// This means the code won't stop and wait for the response. We use `async/await` to handle this.
// We also handle potential errors with a `try...catch` block.
document.addEventListener('click', (e) => {
    if (e.target.id == "get-weather"){
        fetchWeatherData();
    }

})
async function fetchWeatherData() {
    // Select the HTML elements to update
    const weatherDiv = document.getElementById('weather-data');
    const loadingDiv = document.getElementById('loading');

    // Show the loading message while the request is in progress
    // This is an important part of a good user experience on the client-side.
    loadingDiv.style.display = 'block';
    weatherDiv.innerHTML = ''; // Clear previous data

    // Define the URL for the API request. This is the **server endpoint**.
    // The query parameters `?latitude=52.52&longitude=13.41&current=temperature_2m` are data sent with the request.
    const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=51.51&longitude=-0.13&current=temperature_2m,wind_speed_10m';

    try {
        // The **client** sends a `GET` request to the **server** using the `fetch` API.
        const response = await fetch(apiUrl);
        
        // The **server** sends a **response** back to the client. We first check if the request was successful.
        // A `200 OK` status code (response.ok === true) indicates a successful request.
        if (!response.ok) {
            // If the status code is not 200, we throw an error with the status code.
            // This is a key part of **error handling** in client-server communication.
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // The response from the server is a **JSON object**. We parse it so JavaScript can read it.
        const data = await response.json();

        // The data is now available for the client-side application to use.
        // We extract the temperature and wind speed from the JSON response.
        const temperature = data.current.temperature_2m;
        const windSpeed = data.current.wind_speed_10m;
        const windSpeedUnit = data.current_units.wind_speed_10m;
        const tempUnit = data.current_units.temperature_2m;

        // Hide the loading message and display the data to the user.
        loadingDiv.style.display = 'none';
        weatherDiv.innerHTML = `
            <h2>Weather in London, England</h2>
            <p>Temperature: ${temperature} ${tempUnit}</p>
            <p>Wind Speed: ${windSpeed} ${windSpeedUnit}</p>
        `;

    } catch (error) {
        // The `catch` block handles network errors or errors thrown by the `if (!response.ok)` check.
        // The client-side application can now gracefully handle the failure.
        loadingDiv.style.display = 'none';
        weatherDiv.innerHTML = `<p style="color: red;">Failed to fetch weather data: ${error.message}</p>`;
        console.error('Error:', error);
    }
}
