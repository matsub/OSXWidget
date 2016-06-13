function round(num){
	head = Math.floor(num);
	return head + ("."+(num-head+"").slice(2)+"0").slice(0, 2);
}

function makeFrame(){
	// main div
	$div = $("<div></div>");
	$div.addClass("day");

	// image
	$img = $("<canvas></canvas>");
	$img.attr("width", "160px");
	$img.attr("height", "160px");

	// weekday
	$weekday = $("<p></p>");

	// temp range
	$temp = $("<div></div>");
	$max = $("<p></p>");
	$max.addClass("max");
	$max.addClass("temperature");
	$min = $("<p></p>");
	$min.addClass("min");
	$min.addClass("temperature");
	$temp.append($max);
	$temp.append($min);

	// append
	$div.append($weekday);
	$div.append($img);
	$div.append($temp);
	$div.css("display", "none");

	$("div").after($div);
}

WEEKDAY = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
function showWeather(data){
	// init
	body = data.query.results.channel;
	$.each(body.item.forecast, function(index, obj){
		$div = $("div.day:last").clone();
		$div.css("display", "inline");

		// weekday
		$div.find("p:first").html(obj.day);

		// weather
		weather = $div.find("canvas").get(0);
		if(obj.code > 47){
			error(weather);
		} else {
			draw = icon_refer[obj.code];
			draw(weather);
		}

		// temperature range
		$temperature_max = $div.find("p.max");
		$temperature_max.html(round(obj.high));
		$temperature_min = $div.find("p.min");
		$temperature_min.html(round(obj.low));

		$("div.day:last").after($div);
	});
}

function setWeather(){
	// get location
	loc = localStorage["location"];
	$("input").val(loc);
    YQL = encodeURIComponent("select item from weather.forecast where woeid in (select woeid from geo.places(1) where text=\""+loc+"\") and u='c'");
    url = "https://query.yahooapis.com/v1/public/yql?format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&unit=c&q="+YQL;

	makeFrame();
	$.getJSON(url).success(function(data){
		localStorage["weather"] = JSON.stringify(data);
	});

	// showWeather
	data = JSON.parse(localStorage["weather"]);
	console.log(data);
	showWeather(data);
	timeID = setInterval(setWeather, 1000*60*60*3);
}

function refresh(){
	clearInterval(timeID);

	$divs = $("div.day");
	length = $divs.length;
	for(i=0; i<length; i++){
		$node = $divs[i];
		$node.remove();
	}

	setWeather();
}

$(function(){
	setWeather();
});
