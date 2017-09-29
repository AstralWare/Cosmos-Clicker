var Atoms = 0;
var Open1 = 0;
var Open2 = 0;
var Open3 = 0;

function Loads()
{
	player = new Audio("music/loop.mp3");
	player.volume = 0.4;
	player.loop = true;
	player.play();
}

function Save()
{
	localStorage.setItem("Atoms", Atoms);
}

function Load()
{
	Atoms = localStorage.getItem("Atoms");

	if (Atoms == null)
	{
		Atoms = 0;
	}

	Atoms = parseInt(Atoms)
	document.title = Atoms + " Atoms";
	counter.innerText = Atoms + " Atoms";
}

function Erase()
{
	Atoms = 0;
	localStorage.setItem("Atoms", Atoms);
	document.title = Atoms + " Atoms";
	counter.innerText = Atoms + " Atoms";
}

function Atom()
{
	Atoms = Atoms + 1;
	document.title = Atoms + " Atoms";
	counter.innerText = Atoms + " Atoms";

	player = new Audio("music/tap.mp3");
	player.volume = 1.0;
	player.loop = false;
	player.play();
}

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

if ('addEventListener' in window) 
{
	window.addEventListener('load', function() { document.body.className = document.body.className.replace(/\bis-loading\b/, ''); });
	document.body.className += (navigator.userAgent.match(/(MSIE|rv:11\.0)/) ? ' is-ie' : '');
}

