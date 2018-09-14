"use strict";
/*
music, 103
food and drink, 110
Travel & Outdoor 109
performing and visutal arts 105
Sports & Fitness 108
Seasonal & Holiday 116 */

// Use this API call to get Eventbrite Category Ids https://www.eventbriteapi.com/v3/categories/?token=B7UELWTCRT7HCHZN3I7S

// Convert start and end dates in this format YYYY-MM-DDThh:mm:ssZ or YYYY-MM-DDThh:mm:ss
var dateFormat = "YYYY-MM-DDT00:00:00";
// var dateFormat = "YYYY-MM-DDThh:mm:ss";

// Necessary variable for weather
var city = $("#city").val();
var country = $("#country").val();
// let start_date = moment($("#start-date").val()).format(dateFormat);
// let end_date = moment($("#end-date").val()).format(dateFormat);

// for testing
var start_date = moment().format(dateFormat);
var end_date = moment().add(10, 'days').format(dateFormat);
console.log(start_date);
console.log(end_date);

var baseURL = "https://www.eventbriteapi.com/v3/events/search/?sort_by=best&token=B7UELWTCRT7HCHZN3I7S";

var queryURL = baseURL + "&start_date.range_start=" + start_date + "&start_date.range_end=" + end_date;

//Need to get categories based off which picture is clicked, each picture should have onclick function that populates a categories into the query.


// #portfolio is the section to add div to
$("#gym").on("click", function () {

    queryURL += "&categories=108"

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (resp) {
            // Example return Music & Conversation with Marty
            // Tue, Oct 23, 6:00 PM
            // The cutting room, newyork ny
            // starts at 27.00 on ticket fly (link to ticket)
            console.log(queryURL);
            console.log(resp);
            $("#portfolio").append("<div class=col-12>");
        });

})
