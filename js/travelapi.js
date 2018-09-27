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


// var isClicked = false;

var city = "";
// var state = ""
var country = "";
var start_date = "";
var end_date = "";
var baseURL = "https://www.eventbriteapi.com/v3/events/search/?sort_by=best&token=B7UELWTCRT7HCHZN3I7S";

$("#portfolio").append("<div class='row no-gutters popup-gallery' id='eventsDiv'>");

$("#search-btn").on("click", function () {

    // Necessary variables for weather
    if ($("#cityId").val()){
    city = $("#cityId").val().trim();
    };

    if ($("#countryId").val()){
    country = $("#countryId").val().trim();
    };
    
    start_date = moment($("#calendar-input").daterangepicker().val().split("-")[0].trim())["_i"];
    end_date = moment($("#calendar-input").daterangepicker().val().split("-")[1].trim())["_i"];
    console.log(city);
    console.log(country);
    var query = baseURL + "&start_date.range_start=" + moment(start_date, 'MM-DD-YYYY').format(dateFormat) + "&start_date.range_end=" + moment(end_date, 'MM-DD-YYYY').format(dateFormat) +"&location.address="+ city +"," + country;
    // + city +"," + country
    console.log(query);
    
    $("#gym").on("click", function () {

        var query1 = query + "&categories=108";
    
    
        $("#eventsDiv").empty();
    
        // if (isClicked === false) {
        $.ajax({
            url: query,
            method: "GET"
        })
            .then(function (resp) {
                // Example return Music & Conversation with Marty
                // Tue, Oct 23, 6:00 PM
                // The cutting room, newyork ny
                // starts at 27.00 on ticket fly (link to ticket)
                console.log(query1);
    
                for (var i = 0; i < 5; i++) {
                    var eve = resp.events[i];
                    console.log(resp.events[i]);
    
                    if (eve.description.text) {
                        $('#eventsDiv').append(
                            "<div class='col-lg-4 col-sm-6 mt-3'><div class='card' ;'><img class='card-img-top' src=" + eve.logo.original.url + " alt='Card image cap'><div class='card-body'><h5 class='card-title'>" + eve.name.text + "</h5><p class='card-text'>" + eve.description.text.substring(0, 101) + "</p><p class='card-text'>Time Zone: " + eve.start.timezone + "</p><p class='card-text'>Local Time: " + eve.start.local + "</p><a href='" + eve.url + "' class='btn btn-primary'>View Event</a></div ></div ></div>"
                        )
                    }
                    else {
                        $('#eventsDiv').append(
                            "<div class='col-lg-4 col-sm-6 mt-3'><div class='card' ;'><img class='card-img-top' src=" + eve.logo.original.url + " alt='Card image cap'><div class='card-body'><h5 class='card-title'>" + eve.name.text + "</h5><p class='card-text'>There is no description for this event.</p><p class='card-text'>Time Zone: " + eve.start.timezone + "</p><a hre<p class='card-text'>Local Time: " + eve.start.local + "</p><a href='" + eve.url + "' class='btn btn-primary'>View Event</a></div ></div ></div>"
                        )
                    }
                };
    
    
                // isClicked = true;
                // console.log(isClicked);
    
            });
        // }
    
    })
    
    $("#food").on("click", function () {
    
        var query1 = query + "&categories=110";
    
        $("#eventsDiv").empty();
    
        // if (isClicked === false) {
        $.ajax({
            url: query,
            method: "GET"
        })
            .then(function (resp) {
                console.log(query1);
                // console.log(resp.events[0]);
    
                for (var i = 0; i < 5; i++) {
                    var eve = resp.events[i];
                    console.log(resp.events[i]);
    
                    if (eve.description.text) {
                        $('#eventsDiv').append(
                            "<div class='col-lg-4 col-sm-6 mt-3'><div class='card' ;'><img class='card-img-top' src=" + eve.logo.original.url + " alt='Card image cap'><div class='card-body'><h5 class='card-title'>" + eve.name.text + "</h5><p class='card-text'>" + eve.description.text.substring(0, 101) + "</p><p class='card-text'>Time Zone: " + eve.start.timezone + "</p><p class='card-text'>Local Time: " + eve.start.local + "</p><a href='" + eve.url + "' class='btn btn-primary'>View Event</a></div ></div ></div>"
                        )
                    }
                    else {
                        $('#eventsDiv').append(
                            "<div class='col-lg-4 col-sm-6 mt-3'><div class='card' ;'><img class='card-img-top' src=" + eve.logo.original.url + " alt='Card image cap'><div class='card-body'><h5 class='card-title'>" + eve.name.text + "</h5><p class='card-text'>There is no description for this event.</p><p class='card-text'>Time Zone: " + eve.start.timezone + "</p><a hre<p class='card-text'>Local Time: " + eve.start.local + "</p><a href='" + eve.url + "' class='btn btn-primary'>View Event</a></div ></div ></div>"
                        )
                    }
                };
    
    
                // isClicked = true;
                // console.log(isClicked);
    
            });
        // }
    
    })
    
    $("#event").on("click", function () {
    
        var query1 = query + "&categories=103";
    
        $("#eventsDiv").empty();
    
        // if (isClicked === false) {
        $.ajax({
            url: query,
            method: "GET"
        })
            .then(function (resp) {
                console.log(query1);
                // console.log(resp.events[0]);
    
                for (var i = 0; i < 5; i++) {
                    var eve = resp.events[i];
                    console.log(resp.events[i]);
    
                    if (eve.description.text) {
                        $('#eventsDiv').append(
                            "<div class='col-lg-4 col-sm-6 mt-3'><div class='card' ;'><img class='card-img-top' src=" + eve.logo.original.url + " alt='Card image cap'><div class='card-body'><h5 class='card-title'>" + eve.name.text + "</h5><p class='card-text'>" + eve.description.text.substring(0, 101) + "</p><p class='card-text'>Time Zone: " + eve.start.timezone + "</p><p class='card-text'>Local Time: " + eve.start.local + "</p><a href='" + eve.url + "' class='btn btn-primary'>View Event</a></div ></div ></div>"
                        )
                    }
                    else {
                        $('#eventsDiv').append(
                            "<div class='col-lg-4 col-sm-6 mt-3'><div class='card' ;'><img class='card-img-top' src=" + eve.logo.original.url + " alt='Card image cap'><div class='card-body'><h5 class='card-title'>" + eve.name.text + "</h5><p class='card-text'>There is no description for this event.</p><p class='card-text'>Time Zone: " + eve.start.timezone + "</p><a hre<p class='card-text'>Local Time: " + eve.start.local + "</p><a href='" + eve.url + "' class='btn btn-primary'>View Event</a></div ></div ></div>"
                        )
                    }
                };
    
    
                // isClicked = true;
                // console.log(isClicked);
    
            });
        // }
    
    })
    
    $("#goToOutdoors").on("click", function () {
    
        var query1 = query + "&categories=109";
    
        $("#eventsDiv").empty();
    
        // if (isClicked === false) {
        $.ajax({
            url: query,
            method: "GET"
        })
            .then(function (resp) {
                console.log(query1);
                // console.log(resp.events[0]);
    
                for (var i = 0; i < 5; i++) {
                    var eve = resp.events[i];
                    console.log(resp.events[i]);
    
                    if (eve.description.text) {
                        $('#eventsDiv').append(
                            "<div class='col-lg-4 col-sm-6 mt-3'><div class='card' ;'><img class='card-img-top' src=" + eve.logo.original.url + " alt='Card image cap'><div class='card-body'><h5 class='card-title'>" + eve.name.text + "</h5><p class='card-text'>" + eve.description.text.substring(0, 101) + "</p><p class='card-text'>Time Zone: " + eve.start.timezone + "</p><p class='card-text'>Local Time: " + eve.start.local + "</p><a href='" + eve.url + "' class='btn btn-primary'>View Event</a></div ></div ></div>"
                        )
                    }
                    else {
                        $('#eventsDiv').append(
                            "<div class='col-lg-4 col-sm-6 mt-3'><div class='card' ;'><img class='card-img-top' src=" + eve.logo.original.url + " alt='Card image cap'><div class='card-body'><h5 class='card-title'>" + eve.name.text + "</h5><p class='card-text'>There is no description for this event.</p><p class='card-text'>Time Zone: " + eve.start.timezone + "</p><a hre<p class='card-text'>Local Time: " + eve.start.local + "</p><a href='" + eve.url + "' class='btn btn-primary'>View Event</a></div ></div ></div>"
                        )
                    }
                };
    
    
                // isClicked = true;
                // console.log(isClicked);
    
            });
        // }
    
    })
    
    $("#goToArts").on("click", function () {
    
        var query1 = query + "&categories=105";
    
        $("#eventsDiv").empty();
    
        // if (isClicked === false) {
        $.ajax({
            url: query,
            method: "GET"
        })
            .then(function (resp) {
                console.log(query1);
                // console.log(resp.events[0]);
    
                for (var i = 0; i < 5; i++) {
                    var eve = resp.events[i];
                    console.log(resp.events[i]);
    
                    if (eve.description.text) {
                        $('#eventsDiv').append(
                            "<div class='col-lg-4 col-sm-6 mt-3'><div class='card' ;'><img class='card-img-top' src=" + eve.logo.original.url + " alt='Card image cap'><div class='card-body'><h5 class='card-title'>" + eve.name.text + "</h5><p class='card-text'>" + eve.description.text.substring(0, 101) + "</p><p class='card-text'>Time Zone: " + eve.start.timezone + "</p><p class='card-text'>Local Time: " + eve.start.local + "</p><a href='" + eve.url + "' class='btn btn-primary'>View Event</a></div ></div ></div>"
                        )
                    }
                    else {
                        $('#eventsDiv').append(
                            "<div class='col-lg-4 col-sm-6 mt-3'><div class='card' ;'><img class='card-img-top' src=" + eve.logo.original.url + " alt='Card image cap'><div class='card-body'><h5 class='card-title'>" + eve.name.text + "</h5><p class='card-text'>There is no description for this event.</p><p class='card-text'>Time Zone: " + eve.start.timezone + "</p><a hre<p class='card-text'>Local Time: " + eve.start.local + "</p><a href='" + eve.url + "' class='btn btn-primary'>View Event</a></div ></div ></div>"
                        )
                    }
                };
    
    
                // isClicked = true;
                // console.log(isClicked);
    
            });
        // }
    
    })
    
    $("#goToSeasonal").on("click", function () {
    
        var query1 = query + "&categories=116";
    
        $("#eventsDiv").empty();
    
        // if (isClicked === false) {
        $.ajax({
            url: query,
            method: "GET"
        })
            .then(function (resp) {
                console.log(query1);
                // console.log(resp.events[0]);
    
                for (var i = 0; i < 5; i++) {
                    var eve = resp.events[i];
                    console.log(resp.events[i]);
    
                    if (eve.description.text) {
                        $('#eventsDiv').append(
                            "<div class='col-lg-4 col-sm-6 mt-3'><div class='card' ;'><img class='card-img-top' src=" + eve.logo.original.url + " alt='Card image cap'><div class='card-body'><h5 class='card-title'>" + eve.name.text + "</h5><p class='card-text'>" + eve.description.text.substring(0, 101) + "</p><p class='card-text'>Time Zone: " + eve.start.timezone + "</p><p class='card-text'>Local Time: " + eve.start.local + "</p><a href='" + eve.url + "' class='btn btn-primary'>View Event</a></div ></div ></div>"
                        )
                    }
                    else {
                        $('#eventsDiv').append(
                            "<div class='col-lg-4 col-sm-6 mt-3'><div class='card' ;'><img class='card-img-top' src=" + eve.logo.original.url + " alt='Card image cap'><div class='card-body'><h5 class='card-title'>" + eve.name.text + "</h5><p class='card-text'>There is no description for this event.</p><p class='card-text'>Time Zone: " + eve.start.timezone + "</p><a hre<p class='card-text'>Local Time: " + eve.start.local + "</p><a href='" + eve.url + "' class='btn btn-primary'>View Event</a></div ></div ></div>"
                        )
                    }
                };
    
    
                // isClicked = true;
                // console.log(isClicked);
    
            });
        // }
    
    })
});