OFFSET_X = 861;
OFFSET_Y = 361;

waitDuration = 0;
modHash = null;

//white: 0, lightGrey: 1, grey: 2, black: 3,
//pink: 4, red: 5, orange: 6, brown: 7,
//yellow: 8, lightGreen: 9, green: 10, cyan: 11,
//teal: 12, blue: 13, fuchsia: 14, purple: 15
f = -1;

image = [[f,f,f,f,f,f,f,f,f,f,f,f,0,0,0,0,0,0,0,0,0,0,0,0,0,f,f,f,f,f,f,f,f,f,f,f],
		[f,f,f,f,f,f,f,f,f,f,f,f,0,0,0,0,0,0,0,0,0,0,0,0,0,f,f,f,f,f,f,f,f,f,f,f],
		[f,f,f,f,f,f,f,f,f,f,f,f,0,0,3,3,3,3,3,3,3,3,3,0,0,f,f,f,f,f,f,f,f,f,f,f],
		[f,f,f,f,f,f,f,f,f,f,0,0,3,3,0,0,7,0,7,0,0,0,0,3,3,0,0,f,f,f,f,f,f,f,f,f],
		[f,f,f,f,f,f,f,f,f,0,0,3,0,0,0,7,0,7,0,0,0,0,0,0,0,3,3,0,f,f,f,f,f,f,f,f],
		[f,f,f,f,f,f,f,f,0,0,3,0,0,0,0,7,0,7,0,0,7,0,0,0,0,0,0,3,0,f,f,f,f,f,f,f],
		[f,f,f,f,f,f,f,0,0,3,0,0,0,0,0,7,0,0,7,7,0,0,0,0,0,0,0,3,0,f,f,f,f,f,f,f],
		[f,f,f,f,f,f,0,0,3,0,0,0,0,0,0,0,7,0,0,0,7,0,0,0,0,0,0,0,3,0,f,f,f,f,f,f],
		[f,f,f,f,f,f,0,0,3,0,0,0,0,0,0,0,0,7,7,7,0,0,0,0,0,0,0,0,3,0,f,f,f,f,f,f],
		[f,f,f,f,f,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,f,f,f,f,f],
		[f,f,f,f,f,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,f,f,f,f],
		[f,f,f,f,f,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,f,f,f,f],
		[f,f,f,f,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,f,f,f,f],
		[f,f,f,f,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,f,f],
		[f,f,f,f,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,1,1,3,3,0,0,1,1,3,3,3,3,3,3,3,f,f],
		[f,f,f,f,0,0,3,0,0,0,0,0,0,0,0,0,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,f,f],
		[f,f,f,f,f,0,0,3,0,0,0,0,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,f,f],
		[f,f,f,f,f,0,0,3,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,3,3,3,3,3,3,3,3,f,f],
		[f,f,f,f,f,0,0,3,3,0,1,2,3,3,3,3,3,3,3,3,3,3,3,0,0,0,3,3,3,3,3,3,3,0,f,f],
		[f,f,f,f,0,0,3,0,0,0,0,0,1,2,3,3,3,3,3,3,3,3,3,0,0,0,0,3,3,3,3,3,0,0,f,f],
		[f,f,f,f,0,0,3,0,0,0,0,0,0,1,3,3,3,3,3,3,3,3,0,0,0,3,0,0,0,3,3,3,0,0,f,f],
		[f,f,0,0,0,3,0,0,0,0,0,0,0,0,3,3,3,3,3,3,0,0,0,0,0,3,0,0,0,0,3,0,0,f,f],
		[f,f,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,3,0,0,f,f],
		[f,f,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,f,f],
		[f,f,f,f,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,0,0,0,3,0,0,0],
		[f,f,f,f,0,0,3,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,3,0,0,f,f,f],
		[f,f,f,f,f,0,0,3,3,0,3,12,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,f,f,f,f],
		[f,f,f,f,f,f,0,0,0,3,12,12,12,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,f,f,f,f,f],
		[f,f,f,f,f,0,0,0,3,12,12,12,12,3,0,3,0,0,0,0,0,0,0,0,0,0,0,3,0,0,f,f,f,f,f,f],
		[f,f,f,f,0,0,3,3,12,12,12,12,12,3,0,0,3,3,3,3,3,3,3,3,3,3,3,0,0,f,f,f,f,f,f,f],
		[f,f,0,0,3,12,12,12,12,12,12,12,3,0,3,11,11,11,11,3,0,0,3,12,12,12,12,3,0,0,f,f,f,f,f],
		[f,0,0,0,3,12,12,12,12,12,12,12,12,3,3,0,11,11,11,11,3,0,0,3,12,12,12,12,12,3,0,0,f,f,f,f],
		[f,0,0,0,3,12,12,12,12,12,12,12,12,3,0,0,11,11,11,11,3,0,3,12,12,12,12,12,12,3,0,0,f,f,f,f],
		[f,0,0,3,12,12,12,12,12,12,12,12,12,0,0,0,0,11,11,0,3,3,12,12,12,12,12,12,12,12,3,0,0,f,f,f],
		[f,0,0,3,12,12,12,12,12,12,12,12,12,0,0,0,0,11,11,0,0,0,12,12,12,12,12,12,12,12,3,0,0,f,f,f],
		[f,0,0,3,12,12,12,12,12,12,12,12,12,0,0,0,0,11,11,0,0,0,12,12,12,12,12,12,12,12,3,0,0,f,f,f],
		[0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0],
		[0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0],
		[0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,3,0,0,0,3,3,3,3,3,3,3,3,3,3,0,0],
		[0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,3,3,3,0,3,3,3,3,3,3,3,3,3,3,3,0,0],
		[0,0,3,0,3,3,3,0,3,3,0,3,3,0,3,3,0,3,3,0,3,3,0,3,3,3,3,5,3,3,3,5,5,3,0,0],
		[0,0,3,0,3,3,3,0,3,0,3,0,3,0,3,3,0,3,0,0,3,3,0,3,5,3,5,5,5,3,5,3,3,3,0,0],
		[0,0,3,0,3,0,3,0,3,0,0,0,3,0,3,3,0,3,3,5,3,3,3,5,3,5,3,5,3,3,3,5,5,3,0,0],
		[0,0,3,0,3,0,3,0,3,0,3,0,3,0,3,3,0,3,3,5,5,5,5,5,5,5,3,5,3,5,3,3,3,5,0,0],
		[0,0,3,3,0,3,0,3,3,0,3,0,3,0,0,3,0,0,5,5,3,5,3,5,3,3,3,3,5,5,3,5,5,3,0,0],
		[0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,5,3,5,3,3,5,5,3,3,3,3,3,3,3,3,0,0],
		[0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,5,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0],
		[0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];


function start() {
	modHash = getModHash();
	main(0, 0);
}

function main(x, y) {
	var timer = drawIfNecessary(x, y);
	console.log('waiting ' + timer + ' milliseconds');
	x = (x + 1) % image[y].length;
	if (x === 0) {
		y = (y + 1) % image.length;
	}
	setTimeout(main, timer, x, y);
}

function drawIfNecessary(x, y) {
	if (image[y][x] < 0) return 0;
	canvasX = x + OFFSET_X;
	canvasY = y + OFFSET_Y;
	var pixelColour = pixelRequest(canvasX, canvasY);
	console.log('found pixel colour ' + pixelColour);
	var desiredColour = image[y][x];
	return (pixelColour == desiredColour) ? 0 : draw(canvasX, canvasY, desiredColour);
}


function sendSynchronousRequest(method, url, headers, params) {
	var xhr = new XMLHttpRequest();
	xhr.open(method, url, false);
	for (var h in headers) {
		xhr.setRequestHeader(h, headers[h]);
	}
	var firstParam = true;
	var paramString = '';
	for (var p in params) {
		if (firstParam) {
			firstParam = false;
		} else {
			paramString += '&';
		}
		paramString += p + '=' + params[p];
	}
	xhr.send(paramString);
	return xhr;
}


function getModHash() {
	var xhr = sendSynchronousRequest('GET', 'api/me.json', {}, {});
	
	if (xhr.readyState !== 4) throw 'oh shit';
	if (xhr.status !== 200) {
		alert("Couldn't obtain modhash. Are you logged into Reddit?");
		throw 'bollocks';
	}
	var response = JSON.parse(xhr.responseText);
	return response.data.modhash;
}


function pixelRequest(x, y) {
	var url = '/api/place/pixel.json?x=' + x + '&y=' + y;
	
	var xhr = sendSynchronousRequest('GET', url, {
		'x-requested-with': 'XMLHttpRequest',
		'x-modhash': modHash
	}, {});
	
	if (xhr.readyState !== 4) throw 'oh shit';
	if (xhr.status !== 200) {
		console.log(xhr);
		return "jews";
	}
	var response = JSON.parse(xhr.responseText);
	return response.color;
}


function draw(x, y, colour) {
	console.log('attempting to draw a pixel at (' + x + ',' + y + ')');
	var xhr = sendSynchronousRequest('POST', '/api/place/draw.json', {
		'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
		'x-requested-with': 'XMLHttpRequest',
		'x-modhash': modHash
	}, {
		x: x,
		y: y,
		color: colour
	});
	
	if (xhr.readyState !== 4) throw 'oh shit';
	if (xhr.status !== 200 && xhr.status !== 429) {
		console.log(xhr);
		throw 'bollocks';
	}
	var response = JSON.parse(xhr.responseText);
	return response.wait_seconds * 1000;
}


start();
