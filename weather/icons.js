STROKE_COLOR = 'rgb(156, 98, 54)';
FILL_COLOR = 'rgb(253, 205, 119)';

function sun(ctx){
	/* style */
	ctx.strokeStyle = STROKE_COLOR;
	ctx.fillStyle = FILL_COLOR;

	// begin path
	ctx.beginPath();

	div = 12;
	c = 68;
	R = 64;
	r = R-20;
	deg = 360/(div*2);
	u = deg*Math.PI/180;
	rad = 20*Math.PI/180; // phase

	for(i=0; i<360/deg; i++){
		rad += u;
		x = c + R*Math.cos(rad);
		y = c - R*Math.sin(rad);
		ctx.lineTo(x, y);

		rad += u;
		x = c + r*Math.cos(rad);
		y = c - r*Math.sin(rad);
		ctx.lineTo(x, y);
	}
	ctx.lineWidth = 3.6;
	ctx.closePath();
	ctx.fill();

	// begin path
	ctx.beginPath();

	div = 12;
	c = 68;
	R = 64;
	r = R-20;
	deg = 360/(div*2);
	u = deg*Math.PI/180;
	rad = 20*Math.PI/180; // phase

	for(i=0; i<360/deg; i++){
		rad += u;
		x = c + R*Math.cos(rad);
		y = c - R*Math.sin(rad);
		ctx.lineTo(x, y);

		rad += u;
		x = c + r*Math.cos(rad);
		y = c - r*Math.sin(rad);
		ctx.lineTo(x, y);
	}
	ctx.lineWidth = 3.6;
	ctx.closePath();
	ctx.stroke();

	// begin path
	ctx.beginPath();
	ctx.lineWidth = 4;
	ctx.moveTo(c+28, c);
	ctx.arc(c, c, 28, 0, 360, false);
	ctx.fillStyle = STROKE_COLOR;
	ctx.fill();
	ctx.moveTo(c+38, c);
	ctx.arc(c, c, 38, 0, 360, false);

	/* draw out */
	ctx.stroke();
}

function moon(ctx){
	/* style */
	ctx.strokeStyle = STROKE_COLOR;
	ctx.fillStyle = FILL_COLOR;
	ctx.lineWidth = 5;

	// begin path
	ctx.beginPath();
	R = 48;
	r = 36;
	c = 70;
	startAngle = 20 * Math.PI / 180;
	endAngle = 280 * Math.PI / 180;
	ctx.arc(c, c, R, startAngle, endAngle, false);
	startAngle = 232 * Math.PI / 180;
	endAngle = 60 * Math.PI / 180;
	ctx.arc(c+28, c-18, r, startAngle, endAngle, true);
	ctx.closePath();
	ctx.fill();

	// begin path
	ctx.beginPath();
	R = 48;
	r = 36;
	c = 70;
	startAngle = 20 * Math.PI / 180;
	endAngle = 280 * Math.PI / 180;
	ctx.arc(c, c, R, startAngle, endAngle, false);
	startAngle = 232 * Math.PI / 180;
	endAngle = 60 * Math.PI / 180;
	ctx.arc(c+28, c-18, r, startAngle, endAngle, true);
	ctx.closePath();
	ctx.stroke();
}

function cloud(ctx){
	/* style */
	ctx.strokeStyle = STROKE_COLOR;
	ctx.fillStyle = FILL_COLOR;

	// begin path
	ctx.beginPath();
	ctx.lineWidth = 4;
	ctx.moveTo(128, 86);
	ctx.lineTo(28, 86);

	startAngle = 100 * Math.PI / 180;
	endAngle = 316 * Math.PI / 180;
	ctx.arc(28, 69, 17, startAngle, endAngle, false);
	startAngle = 276 * Math.PI / 180;
	ctx.arc(28, 69, 17, endAngle, startAngle, true);

	startAngle = 210 * Math.PI / 180;
	endAngle = 332 * Math.PI / 180;
	ctx.arc(76, 76, 54, startAngle, endAngle, false);
	startAngle = 340 * Math.PI / 180;
	endAngle = 12 * Math.PI / 180;
	ctx.arc(98, 62, 28, startAngle, endAngle, false);
	ctx.arc(98, 62, 28, endAngle, startAngle, true);

	startAngle = 280 * Math.PI / 180;
	endAngle = 60 * Math.PI / 180;
	ctx.arc(122, 70, 18, startAngle, endAngle, false);
	ctx.closePath();
	ctx.fill();

	// begin path
	ctx.beginPath();
	ctx.lineWidth = 4;
	ctx.moveTo(128, 86);
	ctx.lineTo(28, 86);

	startAngle = 100 * Math.PI / 180;
	endAngle = 316 * Math.PI / 180;
	ctx.arc(28, 69, 17, startAngle, endAngle, false);
	startAngle = 276 * Math.PI / 180;
	ctx.arc(28, 69, 17, endAngle, startAngle, true);

	startAngle = 210 * Math.PI / 180;
	endAngle = 332 * Math.PI / 180;
	ctx.arc(76, 76, 54, startAngle, endAngle, false);
	startAngle = 340 * Math.PI / 180;
	endAngle = 12 * Math.PI / 180;
	ctx.arc(98, 62, 28, startAngle, endAngle, false);
	ctx.arc(98, 62, 28, endAngle, startAngle, true);

	startAngle = 280 * Math.PI / 180;
	endAngle = 60 * Math.PI / 180;
	ctx.arc(122, 70, 18, startAngle, endAngle, false);
	ctx.closePath();
	ctx.stroke();
}

function drizzle_rain(ctx){
	/* style */
	ctx.strokeStyle = STROKE_COLOR;
	ctx.fillStyle = FILL_COLOR;
	ctx.lineWidth = 4.8;

	// begin path
	ctx.beginPath();
	ctx.setLineDash([4.8, 9.6]);
	x = 42;
	y = 18;
	span = 48;
	for(i=0; i<2; i++){
		ctx.moveTo(x, y);
		ctx.lineTo(x-16, y+40);
		x += span;
	}
	ctx.stroke();
	ctx.setLineDash([]);
}

function dust(ctx){
	/* style */
	ctx.strokeStyle = STROKE_COLOR;
	ctx.fillStyle = FILL_COLOR;
	ctx.lineWidth = 5;

	// begin path
	ctx.beginPath();
	ctx.setLineDash([12, 10]);
	x = 24;
	y = 20;
	span = 24;
	for(i=0; i<4; i++){
		ctx.moveTo(x, y);
		ctx.lineTo(x+100, y);
		y += span;
		if(i&1){
			x += 8;
		} else {
			x -= 8;
		}
	}
	ctx.stroke();
	ctx.setLineDash([]);
}

function not_found(ctx){
	/* style */
	ctx.strokeStyle = STROKE_COLOR;
	ctx.fillStyle = FILL_COLOR;
	ctx.lineWidth = 4;
	ctx.lineJoin = "round";
	ctx.font="80px Monaco";

	// begin path
	ctx.beginPath();
	rad = 60*Math.PI / 180;
	x = 12;
	y = 12;
	side = 120;
	ctx.moveTo(x, y + side*Math.sin(rad));
	ctx.lineTo(x + side*Math.cos(rad), y);
	ctx.lineTo(x + 2*side*Math.cos(rad), y + side*Math.sin(rad));
	ctx.closePath();
	ctx.stroke();

	// begin path
	ctx.beginPath();
	rad = 60*Math.PI / 180;
	x = 12;
	y = 12;
	side = 120;
	ctx.moveTo(x, y + side*Math.sin(rad));
	ctx.lineTo(x + side*Math.cos(rad), y);
	ctx.lineTo(x + 2*side*Math.cos(rad), y + side*Math.sin(rad));
	ctx.closePath();
	ctx.fill();

	// begin path
	ctx.fillStyle = STROKE_COLOR;
	ctx.fillText("!", 48, 102);
	ctx.stroke();
}

function ice(ctx){
	/* style */
	ctx.strokeStyle = STROKE_COLOR;
	ctx.fillStyle = FILL_COLOR;
	ctx.lineWidth = 2.4;

	// begin path
	ctx.beginPath();

	margin = 10;
	r = 6;
	// vertical
	ctx.moveTo(margin, margin);
	ctx.lineTo(margin, margin + 2*r);
	// cross
	rad = 30*Math.PI / 180;
	ctx.moveTo(margin + r*Math.cos(rad), margin + r*Math.sin(rad));
	ctx.lineTo(margin - r*Math.cos(rad), margin + 2*r - r*Math.sin(rad));
	ctx.moveTo(margin - r*Math.cos(rad), margin + r*Math.sin(rad));
	ctx.lineTo(margin + r*Math.cos(rad), margin + 2*r - r*Math.sin(rad));

	ctx.closePath();
	ctx.stroke();
}

function fog(ctx){
	/* style */
	ctx.strokeStyle = STROKE_COLOR;
	ctx.fillStyle = FILL_COLOR;
	ctx.lineWidth = 3.6;

	// begin path
	ctx.beginPath();
	X = 32;
	Y = 10;
	edge = 16;
	span = 0;
	rad = 24*Math.PI / 180;
	for(j=0; j<2; j++){
		span += edge;
		x = X;
		y = Y + span;
		ctx.moveTo(x, y);
		for(i=0; i<6; i++){
			x += edge*Math.cos(rad);
			if(i&1){
				y += edge*Math.sin(rad);
			} else {
				y -= edge*Math.sin(rad);
			}
			ctx.lineTo(x, y);
		}
	}
	ctx.stroke();
}

function raindrops(ctx){
	/* style */
	ctx.strokeStyle = STROKE_COLOR;
	ctx.fillStyle = FILL_COLOR;
	ctx.lineWidth = 4;

	// begin path
	ctx.beginPath();
	ctx.setLineDash([9.6, 4.8]);
	x = 42;
	y = 18;
	span = 48;
	for(i=0; i<2; i++){
		ctx.moveTo(x, y);
		ctx.lineTo(x-16, y+40);
		x += span;
	}
	ctx.stroke();
	ctx.setLineDash([]);
}

function thunder(ctx){
	/* style */
	ctx.strokeStyle = STROKE_COLOR;
	ctx.fillStyle = STROKE_COLOR;
	ctx.lineWidth = 2;

	// begin path
	ctx.beginPath();
	ctx.moveTo(34, 12);
	ctx.lineTo(46, 12);
	ctx.lineTo(38, 24);
	ctx.lineTo(50, 24);
	ctx.lineTo(24, 50);
	ctx.lineTo(34, 32);
	ctx.lineTo(22, 32);
	ctx.closePath();
	ctx.stroke();

	// begin path
	ctx.beginPath();
	ctx.moveTo(34, 12);
	ctx.lineTo(46, 12);
	ctx.lineTo(38, 24);
	ctx.lineTo(50, 24);
	ctx.lineTo(24, 50);
	ctx.lineTo(34, 32);
	ctx.lineTo(22, 32);
	ctx.closePath();
	ctx.fill();
}

function wind(ctx){
	/* style */
	ctx.strokeStyle = STROKE_COLOR;
	ctx.fillStyle = FILL_COLOR;
	ctx.lineWidth = 2.4;

	// begin path
	ctx.beginPath();

	ctx.clearRect(0, 0, 0, 0);
	ctx.moveTo(16, 60);
	ctx.lineTo(100, 60);
	startAngle = 90*Math.PI / 180;
	tailAngle = -160*Math.PI / 180;
	ctx.arc(100, 48, 12, startAngle, tailAngle, true);
	endAngle = -320*Math.PI / 180;
	ctx.arc(96.5, 47, 8, tailAngle, endAngle, true);

	/* draw out */
	ctx.stroke();
}


function clear_sky_day(canvas){
	ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, 160, 160);
	sun(ctx);
}

function clear_sky_night(canvas){
	ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, 160, 160);
	moon(ctx);
}

function cloudy(canvas){
	ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, 160, 160);
	ctx.scale(1, 1.24);
	cloud(ctx);
}

function cloudy_day(canvas){
	// init
	ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, 160, 160);

	// sun
	ctx.setTransform(0.7, 0, 0, 0.7, 56, 0);
	sun(ctx);

	// cloud
	ctx.setTransform(1, 0, 0, 1.06, 0, 32);
	cloud(ctx);
}

function cloudy_night(canvas){
	// init
	ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, 160, 160);

	// moon
	ctx.setTransform(0.7, 0, 0, 0.7, 56, 0);
	moon(ctx);

	// cloud
	ctx.setTransform(1, 0, 0, 1.06, 0, 32);
	cloud(ctx);
}

function drizzle(canvas){
	// init
	ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, 160, 160);

	// cloud
	ctx.setTransform(1, 0, 0, 1.06, 0, -12);
	cloud(ctx);

	// drizzle
	ctx.setTransform(1, 0, 0, 1, 0, 76);
	drizzle_rain(ctx);
	ctx.setTransform(1, 0, 0, 1, 24, 70);
	drizzle_rain(ctx);
}

function dusty(canvas){
	ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, 160, 160);
	ctx.scale(1, 1.24);
	dust(ctx);
}

function error(canvas){
	ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, 160, 160);
	not_found(ctx);
}

function flurry(canvas){
	// init
	ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, 160, 160);

	// cloud
	ctx.setTransform(1, 0, 0, 1.06, 0, -12);
	cloud(ctx);

	// ice
	rad = 15*Math.PI / 180;
	ctx.setTransform(Math.cos(rad), Math.sin(rad), -Math.sin(rad), Math.cos(rad), 104, 84);
	ice(ctx);
	ctx.setTransform(Math.cos(rad), Math.sin(rad), -Math.sin(rad), Math.cos(rad), 36, 84);
	ice(ctx);
	ctx.setTransform(Math.cos(rad), Math.sin(rad), -Math.sin(rad), Math.cos(rad), 72, 96);
	ice(ctx);
}

function fogged_day(canvas){
	// init
	ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, 160, 160);

	// sun
	ctx.setTransform(0.7, 0, 0, 0.7, 28, 0);
	sun(ctx);

	// fog
	ctx.setTransform(1, 0, 0, 1, 0, 76);
	fog(ctx);
}

function fogged_night(canvas){
	// init
	ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, 160, 160);

	// moon
	ctx.setTransform(0.7, 0, 0, 0.7, 28, 0);
	moon(ctx);

	// fog
	ctx.setTransform(1, 0, 0, 1, 0, 76);
	fog(ctx);
}

function foggy(canvas){
	// init
	ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, 160, 160);

	// cloud
	ctx.setTransform(1, 0, 0, 1.06, 0, -12);
	cloud(ctx);

	// fog
	ctx.setTransform(1, 0, 0, 1, 0, 76);
	fog(ctx);
}

function rain(canvas){
	// init
	ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, 160, 160);

	// cloud
	ctx.setTransform(1, 0, 0, 1.06, 0, -12);
	cloud(ctx);

	// rain
	ctx.setTransform(1, 0, 0, 1, 0, 76);
	raindrops(ctx);
	ctx.setTransform(1, 0, 0, 1, 24, 70);
	raindrops(ctx);
}

function sleet(canvas){
	// init
	ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, 160, 160);

	// cloud
	ctx.setTransform(1, 0, 0, 1.06, 0, -12);
	cloud(ctx);

	// ice
	rad = 15*Math.PI / 180;
	ctx.setTransform(Math.cos(rad), Math.sin(rad), -Math.sin(rad), Math.cos(rad), 58, 76);
	ice(ctx);
	ctx.setTransform(Math.cos(rad), Math.sin(rad), -Math.sin(rad), Math.cos(rad), 54, 98);
	ice(ctx);
	ctx.setTransform(Math.cos(rad), Math.sin(rad), -Math.sin(rad), Math.cos(rad), 110, 76);
	ice(ctx);
	ctx.setTransform(Math.cos(rad), Math.sin(rad), -Math.sin(rad), Math.cos(rad), 102, 98);
	ice(ctx);

	// drizzle
	ctx.setTransform(1, 0, 0, 1, 0, 76);
	drizzle_rain(ctx);
}

function snow(canvas){
	// init
	ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, 160, 160);

	// cloud
	ctx.setTransform(1, 0, 0, 1.06, 0, -12);
	cloud(ctx);

	// ice
	rad = 15*Math.PI / 180;
	ctx.setTransform(Math.cos(rad), Math.sin(rad), -Math.sin(rad), Math.cos(rad), 34, 80);
	ice(ctx);
	ctx.setTransform(Math.cos(rad), Math.sin(rad), -Math.sin(rad), Math.cos(rad), 30, 102);
	ice(ctx);
	ctx.setTransform(Math.cos(rad), Math.sin(rad), -Math.sin(rad), Math.cos(rad), 86, 80);
	ice(ctx);
	ctx.setTransform(Math.cos(rad), Math.sin(rad), -Math.sin(rad), Math.cos(rad), 78, 102);
	ice(ctx);

	ctx.setTransform(Math.cos(rad), Math.sin(rad), -Math.sin(rad), Math.cos(rad), 62, 76);
	ice(ctx);
	ctx.setTransform(Math.cos(rad), Math.sin(rad), -Math.sin(rad), Math.cos(rad), 54, 98);
	ice(ctx);
	ctx.setTransform(Math.cos(rad), Math.sin(rad), -Math.sin(rad), Math.cos(rad), 110, 76);
	ice(ctx);
	ctx.setTransform(Math.cos(rad), Math.sin(rad), -Math.sin(rad), Math.cos(rad), 102, 98);
	ice(ctx);
}

function thunderstorm(canvas){
	// init
	ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, 160, 160);

	// cloud
	ctx.setTransform(1, 0, 0, 1.06, 0, -12);
	cloud(ctx);

	// thunder
	ctx.setTransform(1, 0, 0, 1, 18, 76);
	thunder(ctx);
	ctx.setTransform(1, 0, 0, 1, 60, 88);
	thunder(ctx);
}

function windy(canvas){
	// init
	ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, 160, 160);

	// sun
	ctx.setTransform(0.75, 0, 0, 0.75, 28, 12);
	sun(ctx);
	ctx.setTransform(0.7, 0, 0, 0.7, 0, 82);

	// wind
	wind(ctx);
	ctx.setTransform(1, 0, 0, 1, 0, 76);
	wind(ctx);
}

function windy_rain(canvas){
	// init
	ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, 160, 160);

	// cloud
	ctx.setTransform(1, 0, 0, 1.06, 0, -12);
	cloud(ctx);

	// wind
	ctx.setTransform(0.5, 0, 0, 0.5, 0, 82);
	wind(ctx);
	ctx.setTransform(0.8, 0, 0, 0.8, 0, 76);
	wind(ctx);

	// rain
	ctx.setTransform(1, 0, 0, 1, 24, 70);
	raindrops(ctx);
}

function windy_snow(canvas){
	// init
	ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, 160, 160);

	ctx.setTransform(1, 0, 0, 1.06, 0, -12);
	cloud(ctx);

	// wind
	ctx.setTransform(0.5, 0, 0, 0.5, 0, 82);
	wind(ctx);
	ctx.setTransform(0.8, 0, 0, 0.8, 0, 76);
	wind(ctx);

	// snow
	rad = 15*Math.PI / 180;
	ctx.setTransform(Math.cos(rad), Math.sin(rad), -Math.sin(rad), Math.cos(rad), 62, 76);
	ice(ctx);
	ctx.setTransform(Math.cos(rad), Math.sin(rad), -Math.sin(rad), Math.cos(rad), 110, 76);
	ice(ctx);
	ctx.setTransform(Math.cos(rad), Math.sin(rad), -Math.sin(rad), Math.cos(rad), 102, 98);
	ice(ctx);
}


icon_refer = {
	"0": thunderstorm,
	"1": thunderstorm,
	"2": windy_rain,
	"3": thunderstorm,
	"4": thunderstorm,
	"5": sleet,
	"6": sleet,
	"7": sleet,
	"8": flurry,
	"9": drizzle,
	"10": sleet,
	"11": drizzle,
	"12": drizzle,
	"13": flurry,
	"14": snow,
	"15": windy_snow,
	"16": snow,
	"17": snow,
	"18": sleet,
	"19": dust,
	"20": foggy,
	"21": dust,
	"22": foggy,
	"23": windy,
	"24": windy,
	"25": windy,
	"26": cloudy,
	"27": cloudy_day,
	"28": cloudy_night,
	"29": cloudy_day,
	"30": cloudy_night,
	"31": clear_sky_night,
	"32": clear_sky_day,
	"33": fogged_night,
	"34": fogged_day,
	"35": sleet,
	"36": clear_sky_day,
	"37": thunderstorm,
	"38": thunderstorm,
	"39": thunderstorm,
	"40": rain,
	"41": windy_snow,
	"42": snow,
	"43": windy_snow,
	"44": cloudy,
	"45": thunderstorm,
	"46": snow,
	"47": thunderstorm
}
