function round(num){
    head = Math.floor(num);
    return head + ("."+(num-head+"").slice(2)+"0").slice(0, 2);
}

function showWeather(data){
    // init
    body = data.query.results.channel;
    atmosphere = body.atmosphere;
    weather = body.item.condition;
    today = body.item.forecast[0];

    // weather
    weather_icon = $("div#weather > canvas").get(0);
    if(weather.code > 47){
        error(weather_icon);
    } else {
        draw = icon_refer[weather.code];
        draw(weather_icon);
    }
    $weather_name = $("div#weather > p:last");
    $weather_name.html(weather.text);
    scroll(120);

    // temperature
    $temperature_location = $("div#temperature > input");
    $temperature_location.attr("value", loc);
    $temperature_temp = $("div#temperature > p");
    $temperature_temp.html(round(weather.temp));

    // detail
    $detail_max = $("div#detail > p.max");
    $detail_max.html(round(today.high));
    $detail_min = $("div#detail > p.min");
    $detail_min.html(round(today.low));
}

function setWeather(){
    // get location
    loc = localStorage["location"];
    if(loc == undefined){
        loc = "Tokyo";
        localStorage["location"] = loc;
    }
    $("input").val(loc);
    YQL = encodeURIComponent("select item from weather.forecast where woeid in (select woeid from geo.places(1) where text=\""+loc+"\") and u='c'");
    url = "https://query.yahooapis.com/v1/public/yql?format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&unit=c&q="+YQL;

    $.getJSON(url).success(function(data){
        localStorage["weather"] = JSON.stringify(data);
    });

    // showWeather
    data = JSON.parse(localStorage["weather"]);
    showWeather(data);
    watchdog = 1000*60*60*3;
    weatherTime = setInterval(setWeather, watchdog);
}

function scroll(pos){
    $weather = $("div#weather > p:last");
    length = $weather.html().length;

    if(pos < length*-10){
        pos = 120;
    }

    $weather.css("left", pos+"px");
    pos -= 1;
    scrollTime = setInterval(scroll, 24, pos);
}

function refresh(){
    value = $("input").val();
    localStorage["location"] = value;

    // refresh canvas
    canvas = $("div#weather > canvas").get(0);
    ctx = canvas.getContext('2d');
    ctx.clearRect(-160, -160, 320, 320);

    clearInterval(weatherTime);
    clearInterval(scrollTime);
    setWeather();
}

$(function(){
    setWeather();
});
