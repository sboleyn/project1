// This is our weather bit API key
var APIKey = "5887b8d504574dffbe86fb6dfad4bd60";

// Necessary variables for weather
var city = $("#city").val();
var country = $("#country").val();
var start_date = $("#start-date").val();
var end_date = $("#end-date").val();
if (country === "US") {
    var is_US_state = true;
    var state = $("#state").val();
} else {
    var is_US_state = false;
}

// Here we are building the URL we need to query the database
if (is_US_state) {
    var queryURL = "https://api.weatherbit.io/v2.0/history/daily?" +
    "city=" + city + "," + state + "," + country + "&start_date=" +  start_date +
    "&end_date" + end_date + "&key=" + APIKey;
} else {
    var queryURL = "https://api.weatherbit.io/v2.0/history/daily?" +
    "city=" + city + "," + country + "&start_date=" +  start_date +
    "&end_date" + end_date + "&key=" + APIKey;  
}

    // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // We store all of the retrieved data inside of an object called "response"
        .then(function(response) {
            $(".city").html("<h1>" + response.name + " Weather Details</h1>");
            $(".wind").text("Wind Speed: " + response.wind.speed);
            $(".humidity").text("Humidity: " + response.main.humidity);
            $(".temp").text("Temperature (F) " + response.main.temp);

            // Log the data in the console as well
            console.log("Wind Speed: " + response.wind.speed);
            console.log("Humidity: " + response.main.humidity);
            console.log("Temperature (F): " + response.main.temp);
        });
    