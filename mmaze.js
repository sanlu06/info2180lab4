window.onload = function(){

$("start").observe("mouseover", beginGame);
$("start").observe("click", reStart);
$("end").observe("mouseover", gameOver);
//$("maze").observe("mouseout", cheat);
};

var status;


 var wallBoundary = $$("div#maze div.boundary"); //locates the div id and class by referencing them as in the CSS and maps it to a variable wallBoundary. 
    for (var i = 0; i < wallBoundary.length; i++) {
        wallBoundary[i].observe( "mouseover", hitBoundary);
}




function beginGame(){
    status="1";
     $("status").textContent = "Exit Maze!";
     
     var wallBoundary = $$("div#maze div.boundary");
     
     for (var i = 0; i < wallBoundary.length; i++) {
         
        wallBoundary[i].observe( "mouseover", hitBoundary);
}
     gameOver;

}



function reStart()
{
	location.reload();
}


function hitBoundary(){
    
     status="0";
     $("status").textContent="Sorry, You Lose !";
	 var wallBoundary = $$("div#maze div.boundary");
     
	 for (var n = 0; n < wallBoundary.length; n++) {
	     
		     wallBoundary[n].observe("mouseover" , wallBoundary[n].style.backgroundColor = "#ff8888");
		    }

    gameOver;
}



function gameOver(){
    if( status=="0") {
    $("status").textContent="Sorry, You Lose !";
}
else{
    $("status").textContent= "Congrats, You Won!";
}
}


/*
This function should prevent a player from going outside the maze and win 
when the mouse hovers over "E".- Failed attempt :( 

function cheat(){
    
     status="0";

   /*  $("status").textContent="Cheater, You Lose !";
	 var cheats = $$("div#maze div.boundary");
     
	 for (var n = 0; n < wallBoundary.length; n++) {
		  cheats[n].observe("mouseout" ,cheats[n].style.backgroundColor = "#ff8888");
		    }

    gameOver;
} */
