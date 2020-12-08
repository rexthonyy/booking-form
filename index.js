window.onload = () => {
	setDatePicker(getRexBookingCheckInInputElm());
	setDatePicker(getRexBookingCheckOutInputElm());

	getRexBookingCheckInInputElm().value = getTodaysDate();
	getRexBookingCheckOutInputElm().value = getTodaysDate();
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

function getRexBookingCheckInInputElm(){
	return document.getElementById("rexBookingCheckInInput");
}

function getRexBookingCheckOutInputElm(){
	return document.getElementById("rexBookingCheckOutInput");
}