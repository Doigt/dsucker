// Counters 
var dicksSucked = 0;
var allTimeDicksSucked = 0;
var multiplier = 1;
var currentDPS = 0;

var dickSuckingMachineCounter = 0;
var cheapProstituteCounter = 0;
var antiChafingCreamCounter = 0;

var midDickSuckingMachineCounter = 0;
var withdrawingCrackWhoreCounter = 0;
var largeSpiderGagCounter = 0;

var hiDickSuckingMachineCounter = 0;
var luxuriousEscortCounter = 0;
var mouthWideningSurgeryCounter = 0;
var mouthImplantCounter = 0;

// Prices 
	// Tier 1 
var dickSuckingMachinePrice = 50;
var cheapProstitutePrice = 300;
var antiChafingCreamPrice = 600;

	// Tier 2 
var midDickSuckingMachinePrice = 2000;
var withdrawingCrackWhorePrice = 4000;
var largeSpiderGagPrice = 7500;
	
	// Tier 3 
var hiDickSuckingMachinePrice = 10000;
var luxuriousEscortPrice = 20000;
var mouthWideningSurgeryPrice = 50000;
var mouthImplantPrice = 200000;

	// Consumables 
var aerodynamicDicksPrice = 750000;
var vModePrice = 500000;
var dModePrice = 1000000;

// Multipliers 
	// Tier 1 
var dickSuckingMachineMultiplier = 0;
var cheapProstituteMultiplier = 1;
var antiChafingCreamMultiplier = 2;

	// Tier 2 
var midDickSuckingMachineMultiplier = 3;
var withdrawingCrackWhoreMultiplier = 4;
var largeSpiderGagMultiplier = 5;
	
	// Tier 3 
var hiDickSuckingMachineMultiplier = 7;
var luxuriousEscortMultiplier = 9;
var mouthWideningSurgeryMultiplier = 11;
var mouthImplantMultiplier = 15;

	// Consumables
var vModeMultiplier = 30;
var dModeMultiplier = 60;

// DPS counters 
	// Tier 1 
var dickSuckingMachineDPS = 1;
var cheapProstituteDPS = 2;
var antiChafingCreamDPS = 3;

	// Tier 2 
var midDickSuckingMachineDPS = 5;
var withdrawingCrackWhoreDPS = 7;
var largeSpiderGagDPS = 10;
	
	// Tier 3 
var hiDickSuckingMachineDPS = 12;
var luxuriousEscortDPS = 15;
var mouthWideningSurgeryDPS = 18;
var mouthImplantDPS = 25;

	// Consumables
var vModeDPS = 30;
var dModeDPS = 60;

	// Other
var displayString = "dicks sucked";
var hasVMode = false;
var hasDMode = false;

window.setInterval(tick, 1000);

function suckDick() {
	// dicksSucked += 1000000; // this is for debugging
	dicksSucked += multiplier;
	allTimeDicksSucked += multiplier;
	updateDisplay();
}

function updateDisplay() {
		// Display elements
	document.getElementById("dickSuckingDisplay").innerHTML = beautify(dicksSucked);
	document.getElementById("dickSuckingFlavorText").innerHTML = displayString;
	document.getElementById("multiplierDisplay").innerHTML = "Your click multiplier is " + beautify(multiplier);
	document.getElementById("dpsDisplay").innerHTML = "Your current DPS is " + beautify(currentDPS);
	document.getElementById("allTimeDicksSucked").innerHTML = "(all time: " + beautify(allTimeDicksSucked) + ")";
	
		// Tier 1 
	document.getElementById("buyDickSuckingMachineButton").innerHTML = "<b>Low Tech Dick Sucking Machine</b><br />" + beautify(dickSuckingMachinePrice) + " Dicksucks (+" + beautify(dickSuckingMachineDPS) + "dps)<br />Owned: <b>"+beautify(dickSuckingMachineCounter)+"</b>";
	document.getElementById("buyCheapProstituteButton").innerHTML = "<b>Cheap Prostitute</b><br />" + beautify(cheapProstitutePrice) + " Dicksucks (+" + beautify(cheapProstituteMultiplier) + "mp, +" + beautify(cheapProstituteDPS) + "dps)<br />Owned: <b>"+beautify(cheapProstituteCounter)+"</b>";
	document.getElementById("buyAntiChafingCreamButton").innerHTML = "<b>Anti Chafing Cream</b><br />" + beautify(antiChafingCreamPrice) + " Dicksucks (+" + beautify(antiChafingCreamMultiplier) + "mp, +" + beautify(antiChafingCreamDPS) + "dps)<br />Owned: <b>"+beautify(antiChafingCreamCounter)+"</b>";
		
		// Tier 2 
	document.getElementById("buyMidDickSuckingMachineButton").innerHTML = "<b>Mid Tech Cock Slurping Contraption</b><br />" + beautify(midDickSuckingMachinePrice) + " Dicksucks (+" + beautify(midDickSuckingMachineMultiplier) + "mp, +" + beautify(midDickSuckingMachineDPS) + "dps)<br />Owned: <b>"+beautify(midDickSuckingMachineCounter)+"</b>";
	document.getElementById("buyWithdrawingCrackWhoreButton").innerHTML = "<b>Withdrawing Crack Whore</b><br />" + beautify(withdrawingCrackWhorePrice) + " Dicksucks (+" + beautify(withdrawingCrackWhoreMultiplier) + "mp, +" + beautify(withdrawingCrackWhoreDPS) + "dps)<br />Owned: <b>"+beautify(withdrawingCrackWhoreCounter)+"</b>";
	document.getElementById("buyLargeSpiderGagButton").innerHTML = "<b>Large Spider Gag</b><br />" + beautify(largeSpiderGagPrice) + " Dicksucks (+" + beautify(largeSpiderGagMultiplier) + "mp, +" +  beautify(largeSpiderGagDPS) + "dps)<br />Owned: <b>"+beautify(largeSpiderGagCounter)+"</b>";
	
		// Tier 3 
	document.getElementById("buyHiDickSuckingMachineButton").innerHTML = "<b>Hi Tech Knob Gobbling Device</b><br />" + beautify(hiDickSuckingMachinePrice) + " Dicksucks (+" + beautify(hiDickSuckingMachineMultiplier) + "mp, +" + beautify(hiDickSuckingMachineDPS) + "dps)<br />Owned: <b>"+beautify(hiDickSuckingMachineCounter)+"</b>";
	document.getElementById("buyLuxuriousEscortButton").innerHTML = "<b>Luxurious Escort</b><br />" + beautify(luxuriousEscortPrice) + " Dicksucks (+" + beautify(luxuriousEscortMultiplier) + "mp, +" + beautify(luxuriousEscortDPS) + "dps)<br />Owned: <b>"+beautify(luxuriousEscortCounter)+"</b>";
	document.getElementById("buyMouthWideningSurgeryButton").innerHTML = "<b>Mouth-Widening Surgery</b><br />" + beautify(mouthWideningSurgeryPrice) + " Dicksucks (+" + beautify(mouthWideningSurgeryMultiplier) + "mp, +" + beautify(mouthWideningSurgeryDPS) + "dps)<br />Owned: <b>"+beautify(mouthWideningSurgeryCounter)+"</b>";
	document.getElementById("buyMouthImplantButton").innerHTML = "<b>Implant More Mouths</b><br />" + beautify(mouthImplantPrice) + " Dicksucks (+" + beautify(mouthImplantMultiplier) + "mp, +" + beautify(mouthImplantDPS) + "dps)<br />Owned: <b>"+beautify(mouthImplantCounter)+"</b>";
	
		// Consumables 
	document.getElementById("buyAerodynamicDicksButton").innerHTML = "<b>Aerodynamic Dicks</b><br />" + beautify(aerodynamicDicksPrice) + " Dicksucks (Effect: Doubles DPS)";
	document.getElementById("buyVModeButton").innerHTML = "<b>/v/ Mode</b><br />" + beautify(vModePrice) + " Dicksucks (Effect: ???)";
	document.getElementById("buyDModeButton").innerHTML = "<b>/d/ Mode</b><br />" + beautify(dModePrice) + " Dicksucks (Effect: ???)";
	
	toggleButtons();
	updateSlogan();
}

function buy(whatToBuy) {
		// Tier 1 
	if(whatToBuy == "dickSuckingMachine") {
		if(dicksSucked >= dickSuckingMachinePrice) {
			dickSuckingMachineCounter += 1;
			dicksSucked -= dickSuckingMachinePrice;
			multiplier += dickSuckingMachineMultiplier;
			currentDPS += dickSuckingMachineDPS;
			dickSuckingMachinePrice = Math.round(dickSuckingMachinePrice * 1.1);
		}
	} else if(whatToBuy == "cheapProstitute") {
		if(dicksSucked >= cheapProstitutePrice) {
			cheapProstituteCounter += 1;
			dicksSucked -= cheapProstitutePrice;
			multiplier += cheapProstituteMultiplier;
			currentDPS += cheapProstituteDPS;
			cheapProstitutePrice = Math.round(cheapProstitutePrice * 1.1);
		}
	} else if(whatToBuy == "antiChafingCream") {
		if(dicksSucked >= antiChafingCreamPrice) {
			antiChafingCreamCounter += 1;
			dicksSucked -= antiChafingCreamPrice;
			multiplier += antiChafingCreamMultiplier;
			currentDPS += antiChafingCreamDPS;
			antiChafingCreamPrice = Math.round(antiChafingCreamPrice * 1.1);
		}	
		// Tier 2 
	} else if(whatToBuy == "midDickSuckingMachine") {
		if(dicksSucked >= midDickSuckingMachinePrice) {
			midDickSuckingMachineCounter += 1;
			dicksSucked -= midDickSuckingMachinePrice;
			multiplier += midDickSuckingMachineMultiplier;
			currentDPS += midDickSuckingMachineDPS;
			midDickSuckingMachinePrice = Math.round(midDickSuckingMachinePrice * 1.1);
		}
	} else if(whatToBuy == "withdrawingCrackWhore") {
		if(dicksSucked >= withdrawingCrackWhorePrice) {
			withdrawingCrackWhoreCounter += 1;
			dicksSucked -= withdrawingCrackWhorePrice;
			multiplier += withdrawingCrackWhoreMultiplier;
			currentDPS += withdrawingCrackWhoreDPS;
			withdrawingCrackWhorePrice = Math.round(withdrawingCrackWhorePrice * 1.1);
		}
	} else if(whatToBuy == "largeSpiderGag") {
		if(dicksSucked >= largeSpiderGagPrice) {
			largeSpiderGagCounter += 1;
			dicksSucked -= largeSpiderGagPrice;
			multiplier += largeSpiderGagMultiplier;
			currentDPS += largeSpiderGagDPS;
			largeSpiderGagPrice = Math.round(largeSpiderGagPrice * 1.1);
		}
		// Tier 3 
	} else if(whatToBuy == "hiDickSuckingMachine") {
		if(dicksSucked >= hiDickSuckingMachinePrice) {
			hiDickSuckingMachineCounter += 1;
			dicksSucked -= hiDickSuckingMachinePrice;
			multiplier += hiDickSuckingMachineMultiplier;
			currentDPS += hiDickSuckingMachineDPS;
			hiDickSuckingMachinePrice = Math.round(hiDickSuckingMachinePrice * 1.1);
		}
	} else if(whatToBuy == "luxuriousEscort") {
		if(dicksSucked >= luxuriousEscortPrice) {
			luxuriousEscortCounter += 1;
			dicksSucked -= luxuriousEscortPrice;
			multiplier += luxuriousEscortMultiplier;
			currentDPS += luxuriousEscortDPS;
			luxuriousEscortPrice = Math.round(luxuriousEscortPrice * 1.1);
		}
	} else if(whatToBuy == "mouthWideningSurgery") {
		if(dicksSucked >= mouthWideningSurgeryPrice) {
			mouthWideningSurgeryCounter += 1;
			dicksSucked -= mouthWideningSurgeryPrice;
			multiplier += mouthWideningSurgeryMultiplier;
			currentDPS += mouthWideningSurgeryDPS;
			mouthWideningSurgeryPrice = Math.round(mouthWideningSurgeryPrice * 1.1);
		}
	} else if(whatToBuy == "mouthImplant") {
		if(dicksSucked >= mouthImplantPrice) {
			mouthImplantCounter += 1;
			dicksSucked -= mouthImplantPrice;
			multiplier += mouthImplantMultiplier;
			currentDPS += mouthImplantDPS;
			mouthImplantPrice = Math.round(mouthImplantPrice * 1.1);
		}
		// Consumables
	} else if(whatToBuy == "aerodynamicDicks") {
		if(dicksSucked >= aerodynamicDicksPrice) {
			dicksSucked -= aerodynamicDicksPrice;
			currentDPS += currentDPS;
			document.getElementById("buyAerodynamicDicksButton").setAttribute("class","hidden");
		}
	} else if(whatToBuy == "vMode") {
		if(dicksSucked >= vModePrice) {
			dicksSucked -= vModePrice;
			multiplier += vModeMultiplier;
			currentDPS += vModeDPS;
			
			if(hasDMode == true) {
				displayString = "feminine futanari dicks sucked";
			} else {
				displayString = "feminine dicks sucked";
			}
			
			document.body.style.backgroundImage = "url('./i/vModeBackground.png')";
			document.getElementById("buyVModeButton").setAttribute("class","hidden");
			
			hasVMode = true;
		}
	} else if(whatToBuy == "dMode") {
		if(dicksSucked >= dModePrice) {
			dicksSucked -= dModePrice;
			multiplier += dModeMultiplier;
			currentDPS += dModeDPS;
			
			if(hasVMode == true) {
				displayString = "feminine futanari dicks sucked";
			} else {
				displayString = "futanari dicks sucked";
			}

			document.body.style.backgroundImage = "url('./i/dModeBackground.png')";
			document.getElementById("buyDModeButton").setAttribute("class","hidden");
			
			hasDMode = true;
		}
	}
	createGrafix(whatToBuy);
	updateDisplay();
}

function toggleButtons() {
		// Tier 1
	if(dicksSucked < dickSuckingMachinePrice) {
		document.getElementById("buyDickSuckingMachineButton").disabled = true;
	} else {
		document.getElementById("buyDickSuckingMachineButton").disabled = false;
	}
	
	if(dicksSucked < cheapProstitutePrice) {
		document.getElementById("buyCheapProstituteButton").disabled = true;
	} else {
		document.getElementById("buyCheapProstituteButton").disabled = false;
	}
	
	if(dicksSucked < antiChafingCreamPrice) {
		document.getElementById("buyAntiChafingCreamButton").disabled = true;
	} else {
		document.getElementById("buyAntiChafingCreamButton").disabled = false;
	}
		// Tier 2
	if(dicksSucked < midDickSuckingMachinePrice) {
		document.getElementById("buyMidDickSuckingMachineButton").disabled = true;
	} else {
		document.getElementById("buyMidDickSuckingMachineButton").disabled = false;
	}
	
	if(dicksSucked < withdrawingCrackWhorePrice) {
		document.getElementById("buyWithdrawingCrackWhoreButton").disabled = true;
	} else {
		document.getElementById("buyWithdrawingCrackWhoreButton").disabled = false;
	}
	
	if(dicksSucked < largeSpiderGagPrice) {
		document.getElementById("buyLargeSpiderGagButton").disabled = true;
	} else {
		document.getElementById("buyLargeSpiderGagButton").disabled = false;
	}
		// Tier 3
	if(dicksSucked < hiDickSuckingMachinePrice) {
		document.getElementById("buyHiDickSuckingMachineButton").disabled = true;
	} else {
		document.getElementById("buyHiDickSuckingMachineButton").disabled = false;
	}
	
	if(dicksSucked < luxuriousEscortPrice) {
		document.getElementById("buyLuxuriousEscortButton").disabled = true;
	} else {
		document.getElementById("buyLuxuriousEscortButton").disabled = false;
	}
	
	if(dicksSucked < mouthWideningSurgeryPrice) {
		document.getElementById("buyMouthWideningSurgeryButton").disabled = true;
	} else {
		document.getElementById("buyMouthWideningSurgeryButton").disabled = false;
	}
	
	if(dicksSucked < mouthImplantPrice) {
		document.getElementById("buyMouthImplantButton").disabled = true;
	} else {
		document.getElementById("buyMouthImplantButton").disabled = false;
	}
	
		// Consumables
	if(dicksSucked < aerodynamicDicksPrice) {
		document.getElementById("buyAerodynamicDicksButton").disabled = true;
	} else {
		document.getElementById("buyAerodynamicDicksButton").disabled = false;
	}
	
	if(dicksSucked < vModePrice) {
		document.getElementById("buyVModeButton").disabled = true;
	} else {
		document.getElementById("buyVModeButton").disabled = false;
	}
	
	if(dicksSucked < dModePrice) {
		document.getElementById("buyDModeButton").disabled = true;
	} else {
		document.getElementById("buyDModeButton").disabled = false;
	}
}

function tick() {
	dicksSucked += currentDPS;
	allTimeDicksSucked += currentDPS;
	updateDisplay();
}

function beautify(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function createGrafix(which) {
	var newGrafix = document.createElement("img")
	var randTop = Math.floor(Math.random()*101);
	var randLeft = Math.floor(Math.random()*101);
	newGrafix.className = "grafix";
	newGrafix.setAttribute("style", "top: " + randTop + "%; left: " + randLeft + "%;");
	newGrafix.src = "./i/" + which + ".png";
	
	var flavorText;
	if(which == "dickSuckingMachine") {
		flavorText = "Low Tech Dick Sucking Machine #" + beautify(dickSuckingMachineCounter);
	} else if(which == "cheapProstitute") {
		flavorText = "Cheap Prostitute #" + beautify(cheapProstituteCounter);
	} else if(which == "antiChafingCream") {
		flavorText = "Anti Chafing Cream #" + beautify(antiChafingCreamCounter);
	} else if(which == "midDickSuckingMachine") {
		flavorText = "Mid Tech Cock Slurping Contraption #" + beautify(midDickSuckingMachineCounter);
	} else if(which == "withdrawingCrackWhore") {
		flavorText = "Withdrawing Crack Whore #" + beautify(withdrawingCrackWhoreCounter);
	} else if(which == "largeSpiderGag") {
		flavorText = "Large Spider Gag #" + beautify(largeSpiderGagCounter);
	} else if(which == "hiDickSuckingMachine") {
		flavorText = "Hi Tech Knob Gobbling Device #" + beautify(hiDickSuckingMachineCounter);
	} else if(which == "luxuriousEscort") {
		flavorText = "Luxurious Escort #" + beautify(luxuriousEscortCounter);
	} else if(which == "mouthWideningSurgery") {
		flavorText = "Mouth-Widening Surgery #" + beautify(mouthWideningSurgeryCounter);
	} else if(which == "mouthImplant") {
		flavorText = "Mouth Implant Procedure #" + beautify(mouthImplantCounter);
	} else if(which == "aerodynamicDicks") {
		flavorText = "Aerodynamic Dicks";
	} else if(which == "vMode") {
		flavorText = "/v/ Mode Activated";
	} else if(which == "dMode") {
		flavorText = "/d/ Mode Activated";
	}
	
	newGrafix.setAttribute("alt", flavorText);
	newGrafix.setAttribute("title", flavorText);
	document.getElementById("grafixContainer").appendChild(newGrafix);
}

function updateSlogan() {
	var slogan = document.getElementById("slogan");
	
	if(allTimeDicksSucked <= 500) {
		slogan.innerHTML = "You are an amateur dick sucker";
	} else if(allTimeDicksSucked <= 1000) {
		slogan.innerHTML = "Your cocksucking skills are really coming along";
	} else if(allTimeDicksSucked <= 5000) {
		slogan.innerHTML = "People are starting to recommend you to their friends";
	} else if(allTimeDicksSucked <= 10000) {
		slogan.innerHTML = "You are now sucking off local politicians and business owners";
	} else if(allTimeDicksSucked <= 20000) {
		slogan.innerHTML = "You start a cock sucking training course for porn stars";
	} else if(allTimeDicksSucked <= 35000) {
		slogan.innerHTML = "You've sucked off several presidents and kings";
	} else if(allTimeDicksSucked <= 50000) {
		slogan.innerHTML = "Every man, woman and pet in the world wish they had your cock sucking skills";
	} else if(allTimeDicksSucked <= 100000) {
		slogan.innerHTML = "You have now surpassed your mother in amount of dicks sucked";
	} else if(allTimeDicksSucked <= 200000) {
		slogan.innerHTML = "You bring the likes of Jenna Jameson and Bree Olson to shame";
	} else if(allTimeDicksSucked <= 350000) {
		slogan.innerHTML = "Aliens visit Earth to learn to suck cock like you";
	} else if(allTimeDicksSucked <= 500000) {
		slogan.innerHTML = "You are now sucking cock 24/7, even whilst resting";
	} else if(allTimeDicksSucked <= 750000) {
		slogan.innerHTML = "Your diet now consists exclusively of sperm and smegma";
	} else if(allTimeDicksSucked <= 1000000) {
		slogan.innerHTML = "Your body is now 98.5% semen";
	} else if(allTimeDicksSucked <= 1250000) {
		slogan.innerHTML = "The Earth is engulfed in a tidal wave of cum from your customers";
	} else if(allTimeDicksSucked <= 1500000) {
		slogan.innerHTML = "All liquids in the solar system are now semen";
	} else if(allTimeDicksSucked <= 1750000) {
		slogan.innerHTML = "You have become exceedingly efficient at sucking dicks";
	} else if(allTimeDicksSucked <= 2000000) {
		slogan.innerHTML = "Sometimes you pull on it so hard, you rip the skin";
	} else if(allTimeDicksSucked <= 2500000) {
		slogan.innerHTML = "You now get all necessary sustenance from gobbling dong";
	} else if(allTimeDicksSucked <= 3000000) {
		slogan.innerHTML = "[dick sucking intensifies]";
	} else {
		slogan.innerHTML = "It is time to stop sucking cocks";
	}
}
