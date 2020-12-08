window.onload = () => {
	setDatePicker(getRexBookingCheckInInputElm());
	setDatePicker(getRexBookingCheckOutInputElm());

	getRexBookingCheckInInputElm().value = getTodaysDate();
	getRexBookingCheckOutInputElm().value = getTodaysDate();

	getForm().addEventListener("submit", (e) => {
		e.preventDefault();
		let checkin = getRexBookingCheckInInputElm().value;
		let checkout = getRexBookingCheckOutInputElm().value;
		let adults = getAdultsElm().value;
		let children = getChildrenElm().value;
		let promo = getPromoElm().value;

		if(!checkin){
			checkin = getTodaysDate();
		}

		if(!checkout){
			checkout = getTodaysDate();
		}

		let propertyID = 2001;

		let urlEncodedString = "";

		urlEncodedString = 'propertyID='+propertyID+'&checkin='+checkin+'&checkout='+checkout+'&adults='+adults+'&children='+children;
		if(promo){
			urlEncodedString += '&promo='+promo;
		}

		window.open('https://res.windsurfercrs.com/ibe/index.aspx?'+urlEncodedString, '_self');
	});
}

function getTodaysDate(){
	var today = new Date();

	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	if(dd<10) {
	  dd = '0'+dd
	} 

	if(mm<10) {
	  mm = '0'+mm
	} 

	 today = mm + '/' + dd + '/' + yyyy;
	//today = yyyy + '-' + mm + '-' + dd;
	return today;
}

function setDatePicker(elem){
	const datepicker = new Datepicker(elem, {
	  buttonClass: 'uk-button',
	}); 
}

function getForm(){
	return document.getElementById("rex-form");
}

function getRexBookingCheckInInputElm(){
	return document.getElementById("rexBookingCheckInInput");
}

function getRexBookingCheckOutInputElm(){
	return document.getElementById("rexBookingCheckOutInput");
}

function getCheckoutElm(){
	return document.getElementById("checkout");
}

function getAdultsElm(){
	return document.getElementById("adult");
}

function getChildrenElm(){
	return document.getElementById("children");
}

function getPromoElm(){
	return document.getElementById("promo");
}