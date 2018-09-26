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


var isClicked = false;

// Necessary variable for weather
var city = $("#city").val();
var country = $("#country").val();
// let start_date = moment($("#start-date").val()).format(dateFormat);
// let end_date = moment($("#end-date").val()).format(dateFormat);

$("#search-btn").click(event => {
    console.log("button works");
    console.log($("#countryId"));
});


$("#portfolio").append("<div class='row no-gutters popup-gallery' id='eventsDiv'>");

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


    $("#eventsDiv").empty();

    // if (isClicked === false) {
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (resp) {
                // Example return Music & Conversation with Marty
                // Tue, Oct 23, 6:00 PM
                // The cutting room, newyork ny
                // starts at 27.00 on ticket fly (link to ticket)
                // $("#portfolio").append("<div class='row no-gutters popup-gallery' id='eventsDiv'>");
                // $("#eventsDiv").append("<div class='col-12' id='addEvent'>");
                console.log(queryURL);
                // console.log(resp.events[0]);

                for (var i = 0; i < 5; i++) {
                    var eve = resp.events[i];
                    console.log(resp.events[i]);

                    if (eve.description.text){
                    $('#eventsDiv').append(
                        "<div class='col-lg-4 col-sm-6 mt-3'><div class='card' style='width: 18rem;'><img class='card-img-top' src="+eve.logo.original.url+" alt='Card image cap'><div class='card-body'><h5 class='card-title'>"+ eve.name.text +"</h5><p class='card-text'>"+eve.description.text.substring(0,101)+"</p><p class='card-text'>Time Zone: "+eve.start.timezone+"</p><p class='card-text'>Local Time: "+eve.start.local+"</p><a href='"+eve.url+"' class='btn btn-primary'>View Event</a></div ></div ></div>"
                    )}
                    else{
                        $('#eventsDiv').append(
                        "<div class='col-lg-4 col-sm-6 mt-3'><div class='card' style='width: 18rem;'><img class='card-img-top' src="+eve.logo.original.url+" alt='Card image cap'><div class='card-body'><h5 class='card-title'>"+ eve.name.text +"</h5><p class='card-text'>There is no description for this event.</p><p class='card-text'>Time Zone: "+eve.start.timezone+"</p><a hre<p class='card-text'>Local Time: "+eve.start.local+"</p><a href='"+eve.url+"' class='btn btn-primary'>View Event</a></div ></div ></div>"
                    )
                    }
                };


                // isClicked = true;
                // console.log(isClicked);

            });
    // }

})

$("#food").on("click", function () {

    queryURL += "&categories=110"

    $("#eventsDiv").empty();

    // if (isClicked === false) {
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (resp) {
                console.log(queryURL);
                // console.log(resp.events[0]);

                for (var i = 0; i < 5; i++) {
                    var eve = resp.events[i];
                    console.log(resp.events[i]);

                    if (eve.description.text){
                    $('#eventsDiv').append(
                        "<div class='col-lg-4 col-sm-6 mt-3'><div class='card' style='width: 18rem;'><img class='card-img-top' src="+eve.logo.original.url+" alt='Card image cap'><div class='card-body'><h5 class='card-title'>"+ eve.name.text +"</h5><p class='card-text'>"+eve.description.text.substring(0,101)+"</p><p class='card-text'>Time Zone: "+eve.start.timezone+"</p><p class='card-text'>Local Time: "+eve.start.local+"</p><a href='"+eve.url+"' class='btn btn-primary'>View Event</a></div ></div ></div>"
                    )}
                    else{
                        $('#eventsDiv').append(
                        "<div class='col-lg-4 col-sm-6 mt-3'><div class='card' style='width: 18rem;'><img class='card-img-top' src="+eve.logo.original.url+" alt='Card image cap'><div class='card-body'><h5 class='card-title'>"+ eve.name.text +"</h5><p class='card-text'>There is no description for this event.</p><p class='card-text'>Time Zone: "+eve.start.timezone+"</p><a hre<p class='card-text'>Local Time: "+eve.start.local+"</p><a href='"+eve.url+"' class='btn btn-primary'>View Event</a></div ></div ></div>"
                    )
                    }
                };


                // isClicked = true;
                // console.log(isClicked);

            });
    // }

})

$("#event").on("click", function () {

    queryURL += "&categories=103"

    $("#eventsDiv").empty();

    // if (isClicked === false) {
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (resp) {
                console.log(queryURL);
                // console.log(resp.events[0]);

                for (var i = 0; i < 5; i++) {
                    var eve = resp.events[i];
                    console.log(resp.events[i]);

                    if (eve.description.text){
                    $('#eventsDiv').append(
                        "<div class='col-lg-4 col-sm-6 mt-3'><div class='card' style='width: 18rem;'><img class='card-img-top' src="+eve.logo.original.url+" alt='Card image cap'><div class='card-body'><h5 class='card-title'>"+ eve.name.text +"</h5><p class='card-text'>"+eve.description.text.substring(0,101)+"</p><p class='card-text'>Time Zone: "+eve.start.timezone+"</p><p class='card-text'>Local Time: "+eve.start.local+"</p><a href='"+eve.url+"' class='btn btn-primary'>View Event</a></div ></div ></div>"
                    )}
                    else{
                        $('#eventsDiv').append(
                        "<div class='col-lg-4 col-sm-6 mt-3'><div class='card' style='width: 18rem;'><img class='card-img-top' src="+eve.logo.original.url+" alt='Card image cap'><div class='card-body'><h5 class='card-title'>"+ eve.name.text +"</h5><p class='card-text'>There is no description for this event.</p><p class='card-text'>Time Zone: "+eve.start.timezone+"</p><a hre<p class='card-text'>Local Time: "+eve.start.local+"</p><a href='"+eve.url+"' class='btn btn-primary'>View Event</a></div ></div ></div>"
                    )
                    }
                };


                // isClicked = true;
                // console.log(isClicked);

            });
    // }

})

$("#goToOutdoors").on("click", function () {

    queryURL += "&categories=109"

    $("#eventsDiv").empty();

    // if (isClicked === false) {
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (resp) {
                console.log(queryURL);
                // console.log(resp.events[0]);

                for (var i = 0; i < 5; i++) {
                    var eve = resp.events[i];
                    console.log(resp.events[i]);

                    if (eve.description.text){
                    $('#eventsDiv').append(
                        "<div class='col-lg-4 col-sm-6 mt-3'><div class='card' style='width: 18rem;'><img class='card-img-top' src="+eve.logo.original.url+" alt='Card image cap'><div class='card-body'><h5 class='card-title'>"+ eve.name.text +"</h5><p class='card-text'>"+eve.description.text.substring(0,101)+"</p><p class='card-text'>Time Zone: "+eve.start.timezone+"</p><p class='card-text'>Local Time: "+eve.start.local+"</p><a href='"+eve.url+"' class='btn btn-primary'>View Event</a></div ></div ></div>"
                    )}
                    else{
                        $('#eventsDiv').append(
                        "<div class='col-lg-4 col-sm-6 mt-3'><div class='card' style='width: 18rem;'><img class='card-img-top' src="+eve.logo.original.url+" alt='Card image cap'><div class='card-body'><h5 class='card-title'>"+ eve.name.text +"</h5><p class='card-text'>There is no description for this event.</p><p class='card-text'>Time Zone: "+eve.start.timezone+"</p><a hre<p class='card-text'>Local Time: "+eve.start.local+"</p><a href='"+eve.url+"' class='btn btn-primary'>View Event</a></div ></div ></div>"
                    )
                    }
                };


                // isClicked = true;
                // console.log(isClicked);

            });
    // }

})

$("#goToArts").on("click", function () {

    queryURL += "&categories=105"

    $("#eventsDiv").empty();

    // if (isClicked === false) {
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (resp) {
                console.log(queryURL);
                // console.log(resp.events[0]);

                for (var i = 0; i < 5; i++) {
                    var eve = resp.events[i];
                    console.log(resp.events[i]);

                    if (eve.description.text){
                    $('#eventsDiv').append(
                        "<div class='col-lg-4 col-sm-6 mt-3'><div class='card' style='width: 18rem;'><img class='card-img-top' src="+eve.logo.original.url+" alt='Card image cap'><div class='card-body'><h5 class='card-title'>"+ eve.name.text +"</h5><p class='card-text'>"+eve.description.text.substring(0,101)+"</p><p class='card-text'>Time Zone: "+eve.start.timezone+"</p><p class='card-text'>Local Time: "+eve.start.local+"</p><a href='"+eve.url+"' class='btn btn-primary'>View Event</a></div ></div ></div>"
                    )}
                    else{
                        $('#eventsDiv').append(
                        "<div class='col-lg-4 col-sm-6 mt-3'><div class='card' style='width: 18rem;'><img class='card-img-top' src="+eve.logo.original.url+" alt='Card image cap'><div class='card-body'><h5 class='card-title'>"+ eve.name.text +"</h5><p class='card-text'>There is no description for this event.</p><p class='card-text'>Time Zone: "+eve.start.timezone+"</p><a hre<p class='card-text'>Local Time: "+eve.start.local+"</p><a href='"+eve.url+"' class='btn btn-primary'>View Event</a></div ></div ></div>"
                    )
                    }
                };


                // isClicked = true;
                // console.log(isClicked);

            });
    // }

})

$("#goToSeasonal").on("click", function () {

    queryURL += "&categories=116"

    $("#eventsDiv").empty();

    // if (isClicked === false) {
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (resp) {
                console.log(queryURL);
                // console.log(resp.events[0]);

                for (var i = 0; i < 5; i++) {
                    var eve = resp.events[i];
                    console.log(resp.events[i]);

                    if (eve.description.text){
                    $('#eventsDiv').append(
                        "<div class='col-lg-4 col-sm-6 mt-3'><div class='card' style='width: 18rem;'><img class='card-img-top' src="+eve.logo.original.url+" alt='Card image cap'><div class='card-body'><h5 class='card-title'>"+ eve.name.text +"</h5><p class='card-text'>"+eve.description.text.substring(0,101)+"</p><p class='card-text'>Time Zone: "+eve.start.timezone+"</p><p class='card-text'>Local Time: "+eve.start.local+"</p><a href='"+eve.url+"' class='btn btn-primary'>View Event</a></div ></div ></div>"
                    )}
                    else{
                        $('#eventsDiv').append(
                        "<div class='col-lg-4 col-sm-6 mt-3'><div class='card' style='width: 18rem;'><img class='card-img-top' src="+eve.logo.original.url+" alt='Card image cap'><div class='card-body'><h5 class='card-title'>"+ eve.name.text +"</h5><p class='card-text'>There is no description for this event.</p><p class='card-text'>Time Zone: "+eve.start.timezone+"</p><a hre<p class='card-text'>Local Time: "+eve.start.local+"</p><a href='"+eve.url+"' class='btn btn-primary'>View Event</a></div ></div ></div>"
                    )
                    }
                };


                // isClicked = true;
                // console.log(isClicked);

            });
    // }

})