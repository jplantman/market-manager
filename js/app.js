data = {
	invId: 0,
	purchaseId: 0,
	inventory: [],
	currentPurchase: [],
	purchaseHtml: '',
	sales: 0,
	itemsSold: 0,
	numOfSales: 0,
	smallestSale: 0,
	largestSale: 0
}
data.options = {
	displayName: "",
	confirmPurchases: true,
	confirmDeleteItem: true,
	confirmCancelPurchase: true,
	currencySymbol: "$"
}

function nameFromId(id){
	for (var i = 0; i < data.inventory.length; i++) {
		if( data.inventory[i].id == id ){
			return data.inventory[i].name;
		}
	};
}

var marketModeHTML = '';

function setMode(mode){
	hideAll();
	if (mode == 'inventory'){
		displayInventory();
	} else if (mode == 'market') {
		displayMarket();
	} else if (mode == 'report'){
		displayReport();
	} else if (mode = 'options'){
		displayOptions();
	}
}

function hideAll() {
	$("#mode #inventory").hide();
	$("#mode #market").hide();
	$("#mode #report").hide();
	$("#mode #options").hide();
}

function updateViews(){
	updateInventoryList();
	updateMarket();
	updatePurchasePanel();
}


function dollars(n){
	return data.options.currencySymbol+(n/100).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
}

function validNum(input){
	if (typeof parseInt(input) == 'number' && input > 0){
		return true;
	} else {
		return false;
	}
}

function validInt(input){
	if ( (Math.round(input) == input) && validNum(input) ){
		return true;
	}
	return false;
}

function validItem(input){
	if ( (/^[a-z0-9\-\,\.\#\$\@ ]+$/i).test(input) ){
		return true;
	}
	return false;
}
function validQuanttitySet(input){
	if ( (/^[0-9]+\/[0-9]+$/).test(input) ){
		return true;
	}
	return false;
}

// function confirmYes(callbackY){

// }

function cConfirm(msg, callbackY, callbackN){
	$('.overlay .confirm p').html(msg)
	$('.overlay .alert').hide();
	$('.overlay .confirm').show();
	$('.overlay').show();
	$('#confirmYes').click(function(){
		if (callbackY){
			callbackY();
		}
		$('.overlay .confirm').hide();
		$('.overlay').hide();
	});
	$('#confirmNo').click(function(){
		if (callbackN){
			callbackN();
		}
		$('.overlay .confirm').hide();
		$('.overlay').hide();
	});
}
function cAlert(msg){
	$('.overlay .alert p').html(msg)
	$('.overlay .confirm').hide();
	$('.overlay .alert').show();
	$('.overlay').show();
}
function alertOk(){
	$('.overlay .alert').hide();
	$('.overlay').hide();	
}


function menu(){
	$('#menu').slideToggle();
}
window.addEventListener('resize', function(){
	if (window.innerWidth < 500) {
		$('.spacer').html('');
	} else {
		$('.spacer').html('|');
	}
}, true);
//setMode('inventory');



