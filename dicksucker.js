var dicksSucked = 0;
var allTimeDicksSucked = 0;
var multiplier = 1;
var currentDPS = 0;
var displayString = "dicks sucked";

var tickIntervalID;
var saveIntervalID;

var products = [
    {objID: "dickSuckingMachine",    displayName: "Low Tech Dick Sucking Machine",      counter: 0,   price: 50,      multiplier: 0,    dps: 2  },
    {objID: "cheapProstitute",       displayName: "Cheap Prostitute",                   counter: 0,   price: 300,     multiplier: 1,    dps: 4  },
    {objID: "antiChafingCream",      displayName: "Anti Chafing Cream",                 counter: 0,   price: 600,     multiplier: 2,    dps: 6  },
    {objID: "midDickSuckingMachine", displayName: "Mid Tech Cock Slurping Contraption", counter: 0,   price: 2000,    multiplier: 3,    dps: 12 },
    {objID: "withdrawingCrackWhore", displayName: "Withdrawing Crack Whore",            counter: 0,   price: 4000,    multiplier: 5,    dps: 18 },
    {objID: "largeSpiderGag",        displayName: "Large Spider Gag",                   counter: 0,   price: 7500,    multiplier: 10,   dps: 24 },
    {objID: "hiDickSuckingMachine",  displayName: "Hi Tech Knob Gobbling Device",       counter: 0,   price: 10000,   multiplier: 15,   dps: 30 },
    {objID: "luxuriousEscort",       displayName: "Luxurious Escort",                   counter: 0,   price: 20000,   multiplier: 30,   dps: 36 },
    {objID: "mouthWideningSurgery",  displayName: "Mouth-Widening Surgery",             counter: 0,   price: 50000,   multiplier: 50,   dps: 40 },
    {objID: "mouthImplant",          displayName: "Implant More Mouths",                counter: 0,   price: 200000,  multiplier: 70,   dps: 50 },
    {objID: "cockPortal",            displayName: "Cock Universe Portal",               counter: 0,   price: 350000,  multiplier: 100,  dps: 72 }
];

var consumables = [
    {objID: "vMode",                 displayName: "/v/ Mode",                           owned: false, price: 500000,  multiplier: 200,  dps: 120, effectText: "???"         },
    {objID: "dMode",                 displayName: "/d/ Mode",                           owned: false, price: 1000000, multiplier: 250,  dps: 250, effectText: "???"         },
    {objID: "anonGetOut",            displayName: "ANON GET OUT",                       owned: false, price: 1250000, multiplier: 200,  dps: 120, effectText: "Lovely music"},
    {objID: "permaLube",             displayName: "Permanently Lubed Throat",           owned: false, price: 1500000, multiplier: 500,  dps: 0,   effectText: "+500mp"      },
    {objID: "aerodynamicDicks",      displayName: "Aerodynamic Dicks",                  owned: false, price: 2000000, multiplier: 0,    dps: 0,   effectText: "Doubles DPS" },
    {objID: "lukesDoubleDicking",    displayName: "Luke's Double Dicking",              owned: false, price: 3000000, multiplier: 0,    dps: 0,   effectText: "Doubles MP"  }
];

var slogans = [
    {maxValue: 500,      message: "You are an amateur dick sucker"                                               },
    {maxValue: 1000,     message: "Your cocksucking skills are really coming along"                              },
    {maxValue: 5000,     message: "People are starting to recommend you to their friends"                        },
    {maxValue: 10000,    message: "You are now sucking off local politicians and business owners"                },
    {maxValue: 20000,    message: "You start a cock sucking training course for porn stars"                      },
    {maxValue: 35000,    message: "You've sucked off several presidents and kings"                               },
    {maxValue: 50000,    message: "Every man, woman and pet in the world wish they had your cock sucking skills" },
    {maxValue: 100000,   message: "You have now surpassed your mother in amount of dicks sucked"                 },
    {maxValue: 200000,   message: "You bring the likes of Jenna Jameson and Bree Olson to shame"                 },
    {maxValue: 350000,   message: "Aliens visit Earth to learn to suck cock like you"                            },
    {maxValue: 500000,   message: "You are now sucking cock 24/7, even whilst resting"                           },
    {maxValue: 750000,   message: "Your diet now consists exclusively of sperm and smegma"                       },
    {maxValue: 1000000,  message: "Your body is now 98.5% semen"                                                 },
    {maxValue: 1250000,  message: "The Earth is engulfed in a tidal wave of cum from your customers"             },
    {maxValue: 1500000,  message: "All liquids in the solar system are now semen"                                },
    {maxValue: 1750000,  message: "You have become exceedingly efficient at sucking dicks"                       },
    {maxValue: 2000000,  message: "Sometimes you pull on it so hard, you rip the skin"                           },
    {maxValue: 2500000,  message: "You now get all necessary sustenance from gobbling dong"                      },
    {maxValue: 3000000,  message: "[dick sucking intensifies]"                                                   },
    {maxValue: 5000000,  message: "The universe is now cum to the atomic level"                                  },
    {maxValue: 10000000, message: "It's time to stop sucking cocks"                                              }
];

function saveGame() {
    $.cookie("DSDicksSucked",   dicksSucked,                 {expires: 365} );
    $.cookie("DSAllTime",       allTimeDicksSucked,          {expires: 365} );
    $.cookie("DSMultiplier",    multiplier,                  {expires: 365} );
    $.cookie("DSCurrentDPS",    currentDPS,                  {expires: 365} );
    $.cookie("DSDisplayString", displayString,               {expires: 365} );
    $.cookie("DSProducts",      JSON.stringify(products),    {expires: 365} );
    $.cookie("DSConsumables",   JSON.stringify(consumables), {expires: 365} );

    $('#saveStatus').fadeIn(2000, function() { $('#saveStatus').fadeOut(2000); });
}

function loadGame() {
    if($.cookie("DSDicksSucked") != null) {
        dicksSucked =        new Number($.cookie("DSDicksSucked"));
        allTimeDicksSucked = new Number($.cookie("DSAllTime"));
        multiplier =         new Number($.cookie("DSMultiplier"));
        currentDPS =         new Number($.cookie("DSCurrentDPS"));
        displayString =      $.cookie("DSDisplayString");
        loadedProducts =     $.parseJSON($.cookie("DSProducts"));
        loadedConsumables =  $.parseJSON($.cookie("DSConsumables"));

        // Copy counters and prices to global array
        for(l = 0; l < products.length; l++) {
            for(m = 0; m < loadedProducts.length; m++) {
                if(loadedProducts[m].objID == products[l].objID) {
                    products[l].counter = loadedProducts[m].counter;
                    products[l].price = loadedProducts[m].price;
                    break;
                }
            }
        }

        for(n = 0; n < consumables.length; n++) {
            for(o = 0; o < loadedConsumables.length; o++) {
                if(loadedConsumables[o].objID == consumables[n].objID) {
                    consumables[n].owned = loadedConsumables[o].owned;
                    break;
                }
            }
        }

        // Recreate grafix
        for(i = 0; i < products.length; i++) {
            if(products[i].counter > 0) {
                for(j = 0; j < products[i].counter; j++) {
                    createGrafix(products[i].objID);
                }
            }
        }

        for(k = 0; k < consumables.length; k++) {
            if(consumables[k].owned == true) {
                var newGrafix = document.createElement("img")
                var randTop = Math.floor(Math.random()*101);
                var randLeft = Math.floor(Math.random()*101);
                var flavorText = consumables[k].displayName;
                newGrafix.className = "grafix";
                newGrafix.setAttribute("style", "top: " + randTop + "%; left: " + randLeft + "%;");
                newGrafix.setAttribute("alt", flavorText);
                newGrafix.setAttribute("title", flavorText);
                newGrafix.src = "./i/" + consumables[k].objID + ".png";

                if(consumables[k].objID == "vMode" || consumables[k].objID == "dMode") {
                    document.body.style.backgroundImage = "url('./i/" + consumables[k].objID + "Background.png')";
                }

                if(consumables[k].objID == "anonGetOut") {
                    addMusic();
                }

                document.getElementById("grafixContainer").appendChild(newGrafix);
                document.getElementById(consumables[k].objID + "Button").setAttribute("class","hidden");
            }
        }

        updateDisplay();
    }
}

function resetGame() {
    if(confirm('Are you sure you want to clear your saved data and start over?')) {
        window.clearInterval(tickIntervalID);
        window.clearInterval(saveIntervalID);

        var cookies = document.cookie.split(";");
        for(var i = 0; i < cookies.length; i++) {
            var equals = cookies[i].indexOf("=");
            var name = equals > -1 ? cookies[i].substr(0, equals) : cookies[i];
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }

        location.reload();
    }
}

function main() {
    for(x = 0; x < products.length; x++) {
        createButton(products[x], false);
    }

    for(y = 0; y < consumables.length; y++) {
        createButton(consumables[y], true);
    }

    var suckDickButton = document.createElement("button");
    suckDickButton.setAttribute("id", "suckDickButton");
    suckDickButton.innerHTML = "<img src=\"./i/leftGuy.png\" class=\"buttonImage left\" /> Suck dick <img src=\"./i/rightGuy.png\" class=\"buttonImage right\" />";
    document.getElementById("suckDickButtonContainer").appendChild(suckDickButton);
    $('#suckDickButton').mouseup( function(event) { if(event.which == 1) { suckDick() } });

    tickIntervalID = window.setInterval(tick, 1000);
    window.onresize = function() { scaleDivs(); };
    scaleDivs();

    loadGame();
    saveIntervalID = window.setInterval(saveGame, 30000);
}

function scaleDivs() {
    document.getElementById("shopContainer").style.height = (window.innerHeight - 60) + "px";
    document.getElementById("grafixContainer").style.height = (window.innerHeight - 100) + "px";
    // ^
    // Some images may overflow the div and cause scroll bars to appear
    // and we don't want that, so leave some room at the bottom.
    //
    // The tallest image is 89px at the moment so an extra 100px should
    // cover it if it appears at the very bottom of the div.
}

function createButton(product, consumable) {
    var newButton = document.createElement("button");
    newButton.className = "buyButton";
    newButton.setAttribute("id", product.objID + "Button");
    newButton.onclick = function() { buy(product.objID); };
    newButton.disabled = true;

    if(consumable == true) {
        newButton.innerHTML = "<b>"+ product.displayName + "</b><br />" + beautify(product.price) + " Dicksucks (" + product.effectText + ")";
        document.getElementById("consumablesContainer").appendChild(newButton);
    } else {
        newButton.innerHTML = "<b>"+ product.displayName + "</b><br />" + beautify(product.price) + " Dicksucks (+" + beautify(product.multiplier) + "mp, " + beautify(product.dps) + "dps)<br />" + "Owned: <b>" + beautify(product.counter) + "</b>";
        document.getElementById("productsContainer").appendChild(newButton);
    }
}

function suckDick() {
    dicksSucked += multiplier;
    // dicksSucked += 1000000;
    allTimeDicksSucked += multiplier;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("dickSuckingDisplay").innerHTML = beautify(dicksSucked);
    document.getElementById("dickSuckingFlavorText").innerHTML = displayString;
    document.getElementById("multiplierDisplay").innerHTML = "Your click multiplier is " + beautify(multiplier);
    document.getElementById("dpsDisplay").innerHTML = "Your current DPS is " + beautify(currentDPS);
    document.getElementById("allTimeDicksSucked").innerHTML = "(all time: " + beautify(allTimeDicksSucked) + ")";
    document.title = beautify(dicksSucked) + " " + displayString;

    for(i = 0; i < products.length; i++) {
            document.getElementById(products[i].objID + "Button").innerHTML =
                "<b>"+ products[i].displayName + "</b><br />" +
                beautify(products[i].price) + " Dicksucks (+" + beautify(products[i].multiplier) + "mp, " + beautify(products[i].dps) + "dps)<br />" +
                "Owned: <b>" + beautify(products[i].counter) + "</b>";
    }

    toggleButtons();
    updateSlogan();
}

function buy(whatToBuy) {
    for(i = 0; i < products.length; i++) {
        if(products[i].objID == whatToBuy) {
            if(dicksSucked >= products[i].price) {
                dicksSucked -= products[i].price;
                multiplier += products[i].multiplier;
                currentDPS += products[i].dps;
                products[i].price = Math.round(products[i].price * 1.1);
                products[i].counter += 1;
                createGrafix(whatToBuy);
                updateDisplay();
                return;
            }
        }
    }

    for(j = 0; j < consumables.length; j++) {
        if(consumables[j].objID == whatToBuy) {
            if(dicksSucked >= consumables[j].price) {
                dicksSucked -= consumables[j].price;
                multiplier += consumables[j].multiplier;
                currentDPS += consumables[j].dps;

                var newGrafix = document.createElement("img")
                var randTop = Math.floor(Math.random()*101);
                var randLeft = Math.floor(Math.random()*101);
                var flavorText = consumables[j].displayName;
                newGrafix.className = "grafix";
                newGrafix.setAttribute("style", "top: " + randTop + "%; left: " + randLeft + "%;");
                newGrafix.setAttribute("alt", flavorText);
                newGrafix.setAttribute("title", flavorText);
                newGrafix.src = "./i/" + whatToBuy + ".png";

                // Boost-specific effects
                switch (whatToBuy) {
                    case "vMode":
                        if(consumables[1].owned == true) { // if user has /d/ mode already
                            displayString = "feminine futanari dicks sucked";
                        } else {
                            displayString = "feminine dicks sucked";
                        }

                        document.body.style.backgroundImage = "url('./i/vModeBackground.png')";
                        break;
                    case "dMode":
                        if(consumables[0].owned == true) { // if user has /v/ mode already
                            displayString = "feminine futanari dicks sucked";
                        } else {
                            displayString = "futanari dicks sucked";
                        }

                        document.body.style.backgroundImage = "url('./i/dModeBackground.png')";
                        break;
                    case "lukesDoubleDicking":
                        multiplier += multiplier;
                        break;
                    case "aerodynamicDicks":
                        currentDPS += currentDPS;
                        break;
                    case "permaLube":
                        break;
                    case "anonGetOut":
                        addMusic();
                        break;
                }

                document.getElementById("grafixContainer").appendChild(newGrafix);
                document.getElementById(consumables[j].objID + "Button").setAttribute("class","hidden");
                consumables[j].owned = true;
                updateDisplay();

                // check whether user has all consumables
                var success = true;
                for(var desu = 0; desu < consumables.length; desu++) {
                    if(consumables[desu].owned == false) {
                        success = false;
                        break;
                    }
                }

                if(success) {
                    alert("YOU'RE WINNER!\n\nCongratulations! You've successfully beaten the game in its current state.\nThank you for playing! Stay tuned for updates, and feel free to submit feature\nsuggestions, bugs or comments on GitHub (link on bottom of the page).\n\nTell your friends!")
                }
            }
        }
    }
}

function addMusic() {
    var embedElement = document.createElement("embed");
    embedElement.src = "https://youtube.googleapis.com/v/-F4gG7rXw1s?autoplay=1&loop=1&playlist=-F4gG7rXw1s";
    embedElement.setAttribute("type", "application/x-shockwave-flash");
    embedElement.setAttribute("id", "anonGetOutEmbed");
    embedElement.width = "1px";
    embedElement.height = "1px";
    document.getElementById("grafixContainer").appendChild(embedElement);
	
	var killElement = document.createElement("button");
	killElement.setAttribute("id", "killMusicButton");
	killElement.innerHTML = "Kill music";
	killElement.style.position = "absolute";
	killElement.style.left = 0;
	killElement.style.top = 0;
	killElement.onclick = function(){ killMusic(); };
	document.body.appendChild(killElement);
}

function killMusic() {
    var embedElement = document.getElementById("anonGetOutEmbed");
    var killElement = document.getElementById("killMusicButton");
    embedElement.parentNode.removeChild(embedElement);
    killElement.parentNode.removeChild(killElement);
}

function toggleButtons() {
    for(i = 0; i < products.length; i++) {
        if(dicksSucked < products[i].price) {
            document.getElementById(products[i].objID + "Button").disabled = true;
        } else {
            document.getElementById(products[i].objID + "Button").disabled = false;
        }
    }

    for(j = 0; j < consumables.length; j++) {
        if(dicksSucked < consumables[j].price) {
            document.getElementById(consumables[j].objID + "Button").disabled = true;
        } else {
            document.getElementById(consumables[j].objID + "Button").disabled = false;
        }
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
    var flavorText;
    newGrafix.className = "grafix";
    newGrafix.setAttribute("style", "top: " + randTop + "%; left: " + randLeft + "%;");
    newGrafix.src = "./i/" + which + ".png";

    for(i = 0; i < products.length; i++) {
        if(which == products[i].objID) {
            flavorText = products[i].displayName + " #" + beautify(products[i].counter);
            break;
        }
    }

    newGrafix.setAttribute("alt", flavorText);
    newGrafix.setAttribute("title", flavorText);
    document.getElementById("grafixContainer").appendChild(newGrafix);
}

function updateSlogan() {
    var sloganElement = document.getElementById("slogan");

    for(i = 0; i < slogans.length; i++) {
        if(allTimeDicksSucked <= slogans[i].maxValue) {
            sloganElement.innerHTML = slogans[i].message;
            break;
        }
    }
}
