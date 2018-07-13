"use strict";


// PART 1: SHOW A FORTUNE
function getFortune(results) {
	let fortune = results;

	$("#fortune-text").html(fortune);
}

function showFortune(evt) {
	$.get('/fortune', getFortune);
}

$('#get-fortune-button').on('click', showFortune);


// PART 2: SHOW WEATHER

function getWeather(result) {
	let weather = result["forecast"];
	$('#weather-info').html(weather);
}

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get(url, formData, getWeather);
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


