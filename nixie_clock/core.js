function zeroPadding(str, digit){
    return ("000" + str).slice(-digit);
}

function getClock(){
    date = new Date();

    s = zeroPadding(date.getSeconds(), 2);
    m = zeroPadding(date.getMinutes(), 2);
    h = zeroPadding(date.getHours(), 2);
    return [h, m, s];
}

function clock(){
    $clock = $("p.nixieOn");
    $clock.html(getClock().join(':'));

    setTimeout(clock, 1000);
}

function carrydown(index, value){
    $clock = $("p.nixieOn");
}

function setFrame(){
    $nixie = $("p.nixieOn");

    // hour
    for(i=0; i<3; i++){
        $back = $("<p></p>");
        $back.addClass("nixie");

        s = zeroPadding(11*i, 2);
        m = zeroPadding(11*i, 2);
        h = zeroPadding(11*i, 2);
        clockarr = [h, m, s];

        $back.html(clockarr.join(":"));
        $nixie.before($back);
    }

    // for minutes
    for(; i<7; i++){
        $back = $("<p></p>");
        $back.addClass("nixie");

        s = 11*i;
        m = 11*i;
        clockarr = [h, m, s];

        $back.html(clockarr.join(":"));
        $nixie.before($back);
    }
}

$(function(){
    setFrame();
    clock();
});
