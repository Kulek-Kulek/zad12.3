var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries');

$("#search").click(searchCountries);

function searchCountries() {
	var countryName = $("#country-name").val();
if(!countryName.length) countryName = "Poland";
$.ajax({
	url: url + countryName,
	method: "GET",
	success: showCountriesList
});
}

function showCountriesList(resp) {
	countriesList.empty();
	resp.forEach(function(item) {
		$("<li>")
			.text(item.name)
			.css({
				"font-size": "30px",
				"background-color": "yellow"
			})
			.appendTo(countriesList);

		$("<li>")
			.text(item.nativeName)
			.css({
				"font-size": "30px",
				"background-color": "yellow"
			})
				.appendTo(countriesList);

		$("<li>")
			.text(item.altSpellings)
			.css({
				"font-size": "30px",
				"background-color": "yellow"
			})
			.appendTo(countriesList);

		$("<li>")
			.text("Stolica: " + item.capital)
			.appendTo(countriesList)
			.css({
				"font-size": "25px",
				"background-color": "green",
				"padding": "5px"
			});
		
		$("<li>")
			.text("Liczba ludności: " + item.population)
			.appendTo(countriesList)
			.css({
				"font-size": "25px",
				"background-color": "orange",
				"padding": "5px"
			});

		$("<li>")
			.text("Region: " + item.region)
			.appendTo(countriesList)
			.css({
				"font-size": "25px",
				"background-color": "brown",
				"padding": "5px"
			});

		$("<li>")
			.text("Podregion: " + item.subregion)
			.appendTo(countriesList)
			.css({
				"font-size": "25px",
				"background-color": "green",
				"padding": "5px"
			});

		$("<li>")
			.text("Telefoniczny numer kierunkowy: +" + item.callingCodes)
			.appendTo(countriesList)
			.css({
				"font-size": "25px",
				"background-color": "orange",
				"padding": "5px"
			});

		$("<li>")
			.text("Strefa czasowa: " + item.timezones)
			.appendTo(countriesList)
			.css({
				"font-size": "25px",
				"background-color": "brown",
				"padding": "5px"
			});

		$("<li>")
			.text("Domena internetowa: " + item.topLevelDomain)
			.appendTo(countriesList)
			.css({
				"font-size": "25px",
				"background-color": "green",
				"padding": "5px"
			});

		$("<li>")
			.text("Graniczy z: " + item.borders)
			.appendTo(countriesList)
			.css({
				"font-size": "25px",
				"background-color": "orange",
				"padding": "5px"
			});

		$("<img>")
			.appendTo(countriesList)
			.attr("src", item.flag)
			.css({
				"display": "block",
				"width": "100px",
				"height": "75px",
				"margin": "30px"
			});
		
	}); 
}



