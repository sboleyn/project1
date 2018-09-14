$(document).ready(function() {
    $("#calendar-input").daterangepicker();
    $("#search-btn").on("click", function () {

        // Necessary variables for weather
        var city = $("#cityId").val().trim();
        var country = $("#countryId").val().trim();
        var start_date = moment($("#calendar-input").daterangepicker().val().split("-")[0].trim());
        var end_date = moment($("#calendar-input").daterangepicker().val().split("-")[1].trim());

        // Only get up to 16 days forecast, otherwise goes back a year
        var prediction = "forecast";
        var predict = true;
        var curr_date = moment();
        if ((end_date.diff(curr_date,"days") >= 16) && end_date.isAfter(curr_date)) { 
            prediction = "history";
            predict = false;
            start_date.subtract(1,"years");
            end_date.subtract(1,"years");
        }

        // Populate date array which holds range of dates
        var date_range = end_date.diff(start_date,"days") + 1; // 'Off by 1'
        var date_offset = start_date.diff(curr_date,"days") + 1 ; // 'Off by 1'
        // Check if country is US
        if (country === "United States") {
            var is_US_state = true;
            var state_fullname = $("#stateId").val().trim();
            state = abbrState(state_fullname,"abbr");
        } else {
            var is_US_state = false;
        }

        // This is our weather bit API key, can use another one for more calls
        var APIKey = "5887b8d504574dffbe86fb6dfad4bd60";

        // DO NOT Run this repeatedly, API only allows a finite number of calls for weather data !!
        // Only one a day for historical data :/
        // Here we are building the URL we need to query the database   
        if (is_US_state && !predict) {
            var queryURL_withspaces = "https://api.weatherbit.io/v2.0/" + prediction + "/daily?" +
            "city=" + city + "," + state + "&start_date=" + start_date.format("YYYY-MM-DD") +
            "&end_date=" + end_date.format("YYYY-MM-DD") + "&key=" + APIKey;
        } else if (!is_US_state && !predict) {
            var queryURL_withspaces = "https://api.weatherbit.io/v2.0/" + prediction + "/daily?" +
            "city=" + city + "," + country + "&start_date=" + start_date.format("YYYY-MM-DD") +
            "&end_date=" + end_date.format("YYYY-MM-DD") + "&key=" + APIKey;  
        } else if (is_US_state && predict) {
            var queryURL_withspaces = "https://api.weatherbit.io/v2.0/" + prediction + "/daily?" +
            "city=" + city + "," + state + "&key=" + APIKey;
        } else if (!is_US_state && predict) {
            var queryURL_withspaces = "https://api.weatherbit.io/v2.0/" + prediction + "/daily?" +
            "city=" + city + "," + country + "&key=" + APIKey;  
        }

        queryURL = queryURL_withspaces.split(' ').join('+');
        function display_weather(i) {
            // Here we run our AJAX call to the WeatherBit API
            $.ajax({
                url: queryURL,
                method: "GET"
            })
                // We store all of the retrieved data inside of an object called "response"
                // Documentation available at https://www.weatherbit.io/api/weather-forecast-16-day
                .then(function(response) {
                    console.log("Index: " + i);
                    console.log("Date: " + response.data[i].valid_date);
                    console.log("Temperature (F): " + response.data[i].temp);
                    console.log("Max Temperature (F): " + response.data[i].max_temp);
                    console.log("Min Temperature (F): " + response.data[i].min_temp);
                });
        }
        for (var i = date_offset; i < date_range + date_offset; ++i){
            display_weather(i);
        }
    });
});
    