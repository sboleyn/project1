// This is our weather bit API key
var APIKey = "5887b8d504574dffbe86fb6dfad4bd60";

// Necessary variables for weather
var city = $("#city").val();
var country = $("#country").val();
var start_date = moment($("#start-date").val());
var end_date = moment($("#end-date").val());

// Only get up to 16 days forecast, otherwise goes back a year
var curr_date = moment();
if (curr_date.diff(end_date,"days") >= 16) { 
    start_date = start_date().subtract(1,"years");
    end_date = end_date().subtract(1,"years");
}

// Populate date array which holds range of dates
var date_arr = [];
var date_range = start_date.diff(end_date,"days");
for (let i = 0; i < date_range; ++i) {
    date_arr[i] = start_date().add(1,"days");
}

// Subtract a year from start and end date
if (country === "US") {
    var is_US_state = true;
    var state = $("#state").val();
} else {
    var is_US_state = false;
}

for (let i = 0; i < date_arr.length; ++i) {
    
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
            });
}
    