//Variable Declaration//
var Bytes = 0;
var Clickers = 0;

var Open1 = 0;
var Open2 = 0;
var Open3 = 0;

setInterval(Timer, 1000);
//Variable Declaration//





//Update Functions//
function Timer()
{
	Bytes = Bytes + Clickers;
	Update();
}

function Update()
{
	document.title = Bytes + " Bytes";
	counter.innerText = Bytes + " Bytes";
	ClickersOwned.innerText = "Generates 1.0/s: " + Clickers + " Owned";
	ClickerCost.innerText = "Clickers (" + Math.round(10 * 1.15 ** Clickers) + " Bytes)";
	second.innerText = "Bytes Per Second: " + Clickers;

	if (Bytes >= Math.round(10 * 1.15 ** Clickers))
	{
		var Label = document.getElementById("ClickerCost");
		Label.style.color = "lime";
	}

	else if (Bytes < Math.round(10 * 1.15 ** Clickers))
	{
		var Label = document.getElementById("ClickerCost");
		Label.style.color = "red";
	}
}
//Update Functions//





//Data Handling Functions//
function Load()
{
	player = new Audio("music/loop.mp3");
	player.volume = 0.4;
	player.loop = true;
	player.play();

	Bytes = localStorage.getItem("Bytes");
	Clickers = localStorage.getItem("Clickers");

	if (Bytes == null)
	{
		Bytes = 0;
	}

	if (Clickers == null)
	{
		Clickers = 0;
	}

	Bytes = parseInt(Bytes);
	Clickers = parseInt(Clickers);
	Update();
}

function Save()
{
	localStorage.setItem("Bytes", Bytes);
	localStorage.setItem("Clickers", Clickers);
}

function Erase()
{
	Bytes = 0;
	Clickers = 0;

	localStorage.setItem("Bytes", Bytes);
	localStorage.setItem("Clickers", Clickers);
	Update();
}
//Data Handling Functions//





//Byte Currency Functions//
function BuyClicker()
{
	if (Bytes >= Math.round(10 * 1.15 ** Clickers))
	{
		Bytes = Bytes - Math.round(10 * 1.15 ** Clickers);
		Clickers = Clickers + 1;
		Update();
	}
}

function Click()
{
	player = new Audio("music/tap.mp3");
	player.volume = 1.0;
	player.loop = false;
	player.play();

	Bytes = Bytes + 1;
	Update();
}
//Byte Currency Functions//





//Menu Navigation Functions//
function Nav1()
{
	if (Open1 == 1)
	{
		document.getElementById("Nav1").style.width = "0";
		document.getElementById("Nav2").style.width = "0";
		document.getElementById("Nav3").style.width = "0";
		Open1 = 0;
		Open2 = 0;
	}

	else if (Open1 == 0)
	{
		document.getElementById("Nav1").style.width = "400px";
		document.getElementById("Nav2").style.width = "0";
		document.getElementById("Nav3").style.width = "0";
		Open1 = 1;
		Open2 = 0;
		Open3 = 0;
	}  				
}

function Nav2()
{
	if (Open2 == 1)
	{
		document.getElementById("Nav3").style.width = "0";
		document.getElementById("Nav2").style.width = "0";
		document.getElementById("Nav1").style.width = "0";
		Open3 = 0;
		Open2 = 0;
		Open1 = 0;
	}

	else if (Open2 == 0)
	{
		document.getElementById("Nav2").style.width = "400px";
		document.getElementById("Nav1").style.width = "0";
		document.getElementById("Nav3").style.width = "0";
		Open2 = 1;
		Open1 = 0;
		Open3 = 0;
	}   				
}

function Nav3()
{
	if (Open3 == 1)
	{
		document.getElementById("Nav3").style.width = "0";
		document.getElementById("Nav2").style.width = "0";
		document.getElementById("Nav1").style.width = "0";
		Open3 = 0;
		Open2 = 0;
		Open1 = 0;
	}

	else if (Open3 == 0)
	{
		document.getElementById("Nav3").style.width = "400px";
		document.getElementById("Nav2").style.width = "0";
		document.getElementById("Nav1").style.width = "0";
		Open3 = 1;
		Open2 = 0;
		Open1 = 0;
	}   				
}
//Menu Navigation Functions//





//Event Listener  Check//
if ('addEventListener' in window) 
{
	window.addEventListener('load', function() { document.body.className = document.body.className.replace(/\bis-loading\b/, ''); });
}
//Event Listener  Check//