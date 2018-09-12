/*
music, 103
food and drink, 110
Travel & Outdoor 109
performing and visutal arts 105
Sports & Fitness 108
Seasonal & Holiday 116 */

import * as moment from 'moment';

// Use this API call to get Eventbrite Category Ids https://www.eventbriteapi.com/v3/categories/?token=B7UELWTCRT7HCHZN3I7S

let dateFormat = "YYYY-MM-DDT00:00:00";

// Necessary letiables for weather
let city = $("#city").val();
let country = $("#country").val();
let start_date = moment($("#start-date").val()).format(dateFormat);
let end_date = moment($("#end-date").val()).format(dateFormat);
let queryURL = "https://www.eventbriteapi.com/v3/events/search/?sort_by=best&token=B7UELWTCRT7HCHZN3I7S";
// Convert start and end dates in this format YYYY-MM-DDThh:mm:ssZ or YYYY-MM-DDThh:mm:ss

// start_date.range_start=2019-01-01T00:00:00&start_date.range_end=2019-02-01T00:00:00

//Need to get categories based off which picture is clicked, each picture should have onclick function that populates a categories into the query.

$.ajax({
    url: queryURL,
    method: "GET"
})
    .then(function () {
        // Example return Music & Conversation with Marty
        // Tue, Oct 23, 6:00 PM
        // The cutting room, newyork ny
        // starts at 27.00 on ticket fly (link to ticket)
    });