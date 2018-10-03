(function () {	
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=a94d0a5ac08570add4b47b8da933f247", true);
	xhr.onload = function () {
		var result = JSON.parse(xhr.response);

		var arrWeather = []

		var temprature = Math.round(result.main.temp - 273);
		var cloudIcon = 'http://openweathermap.org/img/w/' + result.weather[0].icon + '.png';
		var countryName = result.name;
		var windSpeed = result.wind.speed + " m/s";
		var windDeg = result.wind.deg;

		arrWeather.push(temprature, cloudIcon, countryName, windSpeed, windDeg);

		createHTML1(arrWeather);
	}
	xhr.send();

	function createHTML1 (arr) {
		var divContainer = document.createElement('div');
		divContainer.classList.add('container');
		document.body.appendChild(divContainer);

		var h1Date = document.createElement('h1')
		divContainer.appendChild(h1Date);

		var imageCloud = document.createElement('img');
		imageCloud.setAttribute('src', arr[1]);
		imageCloud.setAttribute('alt', '');
		imageCloud.classList.add('cloud');
		divContainer.appendChild(imageCloud);

		var pTemp = document.createElement('p');
		pTemp.classList.add('temp');
		pTemp.textContent = ((arr[0]>0)?("+ " + arr[0]):("- " + arr[0]))  + " °C";
		divContainer.appendChild(pTemp);

		var pCountry = document.createElement('p');
		pCountry.classList.add('country');
		pCountry.textContent = arr[2];
		divContainer.appendChild(pCountry);

		var pWindDeg = document.createElement('p');
		pWindDeg.classList.add('windDeg');
		pWindDeg.textContent = degToCard(arr[4]);
		divContainer.appendChild(pWindDeg);

		var pWindSpeed = document.createElement('p');
		pWindSpeed.classList.add('windSpeed');
		pWindSpeed.textContent = arr[3];
		divContainer.appendChild(pWindSpeed);
	}

	function degToCard(deg) {
	  	if (deg>11.25 && deg<33.75){
	    	return "NNE";
	  	}else if (deg>33.75 && deg<56.25){
	    	return "ENE";
		}else if (deg>56.25 && deg<78.75){
			return "E";
		}else if (deg>78.75 && deg<101.25){
			return "ESE";
		}else if (deg>101.25 && deg<123.75){
			return "ESE";
		}else if (deg>123.75 && deg<146.25){
			return "SE";
		}else if (deg>146.25 && deg<168.75){
			return "SSE";
		}else if (deg>168.75 && deg<191.25){
			return "S";
		}else if (deg>191.25 && deg<213.75){
			return "SSW";
		}else if (deg>213.75 && deg<236.25){
			return "SW";
		}else if (deg>236.25 && deg<258.75){
			return "WSW";
		}else if (deg>258.75 && deg<281.25){
			return "W";
		}else if (deg>281.25 && deg<303.75){
			return "WNW";
		}else if (deg>303.75 && deg<326.25){
			return "NW";
		}else if (deg>326.25 && deg<348.75){
			return "NNW";
		}else{
			return "N"; 
		}
	}

	var time = setInterval(function() {
		var date = new Date();
		document.getElementById("time").innerHTML = (date.toLocaleTimeString());
	}, 1000);
})();






(function () {	
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=a94d0a5ac08570add4b47b8da933f247", true);
	xhr.onload = function () {
		var result = JSON.parse(xhr.response);

		searchArr (result.list);
	}
	xhr.send();

	function searchArr (arr) {
		for (var i = 0; i < arr.length; i++) {
			createHTML(arr, i);
		}
	}

	function createHTML (arr, index) {
		var backContainer = document.getElementById('backContainer');

		var divNew = document.createElement('div');
		divNew.setAttribute('class', 'containerNew');
		backContainer.appendChild(divNew);

		var pDate = document.createElement('p');
		pDate.textContent = arr[index].dt_txt;
		divNew.appendChild(pDate);

		var cloud = document.createElement('img');
		var a = 'http://openweathermap.org/img/w/' + arr[index].weather[0].icon + '.png';
		cloud.setAttribute('src', a);
		cloud.setAttribute('alt', '');
		divNew.appendChild(cloud);

		var temp = document.createElement('p');
		divNew.appendChild(temp);
		var b = Math.round(arr[index].main.temp - 273);
		temp.textContent = ((b > 0)?("+ " + b):("- " + b))  + " °C";
	}
})();