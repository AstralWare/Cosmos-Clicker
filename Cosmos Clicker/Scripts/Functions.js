var AtomCount = 0; 

function add()
{

	AtomCount = AtomCount + 1;
	document.getElementById("text").value = AtomCount
	document.title = "Cosmos Clicker (" + AtomCount + ")"

}