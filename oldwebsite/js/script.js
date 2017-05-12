var taskDescription0="With your group, choose a game. Discuss what you think the intended playerexperience is and prepare a wordless 1 minute presentation(ppt).";
var taskDescription1="The first prototype you have to work on is a sport.</br>"+
"Work in groups of 8 people max. Design a sport. Prepare a short presentation (10 minutes or so). The presentation format is free (interpretive dance, powerpoint, playing the sport, ...).</br>"+
"Why making a sport? A sport is a game, but with very special characteristics to think about:</br>"+
"- What type of game is a sport? What makes a sport a sport?</br>"+
"- What is the relation between games and sports?</br>"+
"- What is the role of spectatorship?</br>"+
"- What is the role of spaces (pitches, stadiums, ...) and technologies (hoops, goals, ...)?</br>"+
"- What's the deal with fairness, performance, rules, game balance, ...?</br>"+
"You don't need to answer these questions! I want you to think about what makes a sport a sport, and what it teaches us about game design (also videogame design: see Twitch and e-sports).</br>";
var taskDescription2="Design a Playground (groups of max. 6)</br>"+
"Work in groups of 8 people max. Design a sport. Prepare a short presentation (10 minutes or so). The presentation format is free (interpretive dance, powerpoint, playing the sport, ...).</br>"+
"Presentation is voluntary: max. 6 groups, 10 minutes each.</br>"+
"Focus on:</br>"+
"- space and context</br>"+
"- What is the role of spectatorship?</br>"+
"- Materials and props</br>"+
"- pace and flow</br>";

var taskDescription3="(Re)design an already existing game</br>"+
"Make (+-)1 change to it</br>"+
"Prototype it</br>"+
"Why?</br>"+
"- Practice: loops, rules, mechanics </br>"+
"- Playing with play experiences</br>"+
"- Almost cloning</br>"+
"What am I looking for?</br>"+
"- Reflections on the effects of your change(s) in the game structure and the game experience</br>";

var taskDescription4="Multiplayer board game with 1 loser. </br>"+
"Max. 4 players </br>"+
"Must have some kind of resource management </br>"+
"Playtime under 30 minutes</br>"+
"What to learn:</br>"+
"- Winning condition and their effect on play experience </br>"+
"- Multiplayer balance</br>"+
"- System design: resource management</br>"+
"Written deliverable including:</br>"+
"- Game manual, example of a play session</br>"+
"- 300 words max. pitch </br>";

var taskDescription5="Prototype the core loop(s) of your game</br>"+
"Prototypes need to be playable (analog/digital) </br>"+
"Reflection needs to be on the core loops of your game - what is the core play experience of your (final) game, and how you translated that into loops. And for those of you who used the prototyping to figure out what to make, I would like you to write about prototyping and finding loops as design exploration: which decisions did you take when, and why. I will be happy if you address this question in either of these modes:"+
"- The loops as first prototyped, back in the day, when I asked you to do it (thinking about the process of creating the loops as a reflection of the game experience that you discussed about).</br>"+
"- The loops as they have evolved through time, including the changes during development.</br>"+
"The goal of prototype 5 is to make you identify what makes some loops the core loops of a game, with regards to the play experience, and how these are prototyped.</br> </br>"+
"About the game:</br>"+
"Upload the game (executable)</br>"+
"Hand-in the formalized results of at least one playtest and one usability test (typically one page long). These documents should include: </br>"+
"- Details on the realization of the tests: how were they planned, how were the testers recruited, when did the tests take place, how were results collected and processed. Max. 3000 words. </br>"+
"- All documentation used for/in the test: questionnaires, audio/video files, interview transcripts, gameplay logs, …";

var linksToDocs0='<li><a target="_blank" href="https://docs.google.com/presentation/d/1I6_dZvMX88BL7by59KNIz9ScZItsXK8onPAPFTBAwLM/edit?usp=sharing">Slides</a></li>';
				
var linksToDocs1=
					'<li><a target="_blank" href="https://docs.google.com/presentation/d/1IyYETwHGEfOYAVDIrpSFjI3OVuGy3GSfT6p-oq3k52g/edit?usp=sharing">Slides</a></li>'+
					'<li><a target="_blank" href="pdfs/Navasessay.pdf">Essay</a></li>';
var linksToDocs2=
					'<li><a target="_blank" href="https://docs.google.com/presentation/d/1llWfRZquWsaOOMK3rH_iB_sq74Xgy433Yh6k8wiRA2s/edit?usp=sharing">Slides</a></li>'+
					'<li><a target="_blank" href="pdfs/DynamicPlaygroundessay.pdf">Essay</a></li>';
var linksToDocs3=
					'<li><a target="_blank" href="https://docs.google.com/presentation/d/19ALISyW0YneibwcNarHEDimS229KI3Y04r0hE0Z_KIY/edit#slide=id.g13728e2816_0_0">Slides</a></li>'+
					'<li><a target="_blank" href="pdfs/tetrisessay.pdf">Essay</a></li>';
					
var linksToDocs4='<li><a target="_blank" href="https://docs.google.com/document/d/1tImqMo2IRM7-NWCgLIK0k3iVsvqLkyGac63K4phwWEI/edit#heading=h.hq2px9mbitt4">Pitch, manual and play Session</a></li>'+
					'<li><a target="_blank" href="pdfs/Thecorridoressay.pdf">Essay</a></li>';
					
var linksToDocs5='<li><a target="_blank" href="https://monokuka.itch.io/babushka">Download the game (itch.io)</a></li>'+
					'<li><a target="_blank" href="pdfs/Loopsessay.pdf">Essay</a></li>'+
					'<li><a target="_blank" href="pdfs/Playtest.pdf">Playtest document</a></li>';


var main=function(){   
	
	// match hover div to pics sizeToContent
	
	var myList = document.getElementsByClassName("prototypeText");
	for (var i = 0; i < myList.length; i++) {
		var image_w = myList[i].childNodes[1].clientWidth;
		var image_h = myList[i].childNodes[1].clientHeight;
		
		image_w = image_w+"px";
		image_h = image_h+"px";
		
		myList[i].setAttribute("width", image_w);
		myList[i].setAttribute("height", image_h);
		
		//alert("sdasdsad" + myList[i].childNodes[1].clientWidth);
   
	}


	//.hover():is able to take two functions(){} separated by a comma (mouse over the target and mouse leaving it)
	$('#grid_container > div,#grid_container2 > div').hover(
    	  function(){
      		$(this).addClass('highlight');
   	  },
   	  function(){
      		$(this).removeClass('highlight');
   	  }
	);
	
	$('h2').hover(
    	  function(){
      		$(this).addClass('highlightH2');
   	  },
   	  function(){
      		$(this).removeClass('highlightH2');
   	  }
	);
	
	/*$('.image').hover(
    	  function(){
      		$(this).addClass('imghover');
   	  },
   	  function(){
      		$(this).removeClass('imghover');
   	  }
	);*/
	
	// Code that makes the lightbox appear
	$('.lightbox_trigger').click(function(e) {
	
	e.preventDefault();
	var number = $(this).attr("href");
	var code="";
	
	switch(parseInt(number) ){
    
	case 0:
        code ='<h1 style="text-align:center;">P0</h1>'+	
				' <h2>Description </h2>'+
				'<p>'+taskDescription0+'</p>'+
				'<h2> Links to documents </h2>'+

				'<ul class="links">'+linksToDocs0+					
				'</ul>'
        break;
	case 1:
        code ='<h1 style="text-align:center;">P1</h1>'+	
				' <h2>Description </h2>'+
				'<p>'+taskDescription1+'</p>'+
				'<h2> Links to documents </h2>'+

				'<ul class="links">'+linksToDocs1+					
				'</ul>'
        break;
		case 2:
        code ='<h1 style="text-align:center;">P2</h1>'+	
				' <h2>Description </h2>'+
				'<p>'+taskDescription2+'</p>'+
				'<h2> Links to documents </h2>'+

				'<ul class="links">'+linksToDocs2+					
				'</ul>'
        break;
		case 3:
        code ='<h1 style="text-align:center;">P3</h1>'+	
				' <h2>Description </h2>'+
				'<p>'+taskDescription3+'</p>'+
				'<h2> Links to documents </h2>'+

				'<ul class="links">'+linksToDocs3+					
				'</ul>'
        break;
		case 4:
        code ='<h1 style="text-align:center;">P4</h1>'+	
				' <h2>Description </h2>'+
				'<p>'+taskDescription4+'</p>'+
				'<h2> Links to documents </h2>'+

				'<ul class="links">'+linksToDocs4+					
				'</ul>'
        break;
		case 5:
        code ='<h1 style="text-align:center;">P5</h1>'+	
				' <h2>Description </h2>'+
				'<p>'+taskDescription5+'</p>'+
				'<h2> Links to documents </h2>'+

				
				'<ul class="links">'+linksToDocs5+					
				'</ul>'
        break;
    
    default:
        
} 
	if ($('#lightbox').length > 0) { // #lightbox exists
	
	

	//insert img tag with clicked link's href as src value
	//$('#content').html('<img src="' + image_href + '" />');
	$('#content').html(code);
   	
	//show lightbox window - you can use a transition here if you want, i.e. .show('fast')
	$('#lightbox').show();
}
else { //#lightbox does not exist 
	
	//create HTML markup for lightbox window
	
	var lightbox = 
	'<div id="lightbox">' +
		'<p id="close">Click to close</p>' +
		'<div id="content">' +code+
		'</div>' +	
	'</div>';
		
	//insert lightbox HTML into page
	$('body').append(lightbox);
}
});
	
	//Click anywhere on the page to get rid of lightbox window
	$('body').on('click', '#lightbox', function() { //must use live, as the lightbox element is inserted into the DOM
		$('#lightbox').hide();
		
	});

};

function renderGrid(idgiven,offs) {
    var blocks = document.getElementById(idgiven).children;
	var cols = 2, newleft, newtop;
	newtop= document.getElementById(idgiven).offsetTop+offs;
	//alert("top "+newtop);
	blocks[0].style.top = newtop+"px";
    for(var i = 1; i < blocks.length; i++){ //we skip reposition 0 element because we did it before
		if (i % cols == 0) {
			newtop = (blocks[i-cols].offsetTop + blocks[i-cols].offsetHeight);
		    blocks[i].style.top = newtop+"px";
		} else {
			if(blocks[i-cols]){ //only if it isnt the top row
				newleft = (blocks[i-cols].offsetTop + blocks[i-cols].offsetHeight);
				blocks[i].style.top = newleft+"px";
			}
			if(i==1){
				blocks[1].style.top = newtop+"px";
			}
			newleft = (blocks[i-1].offsetLeft + blocks[i-1].offsetWidth);
			blocks[i].style.left = newleft+"px";	
		}
    }
}

//listeners that call renderGrid() when the page is loaded or resized
var offset1=0;
var offset2=450;
window.addEventListener("load", renderGrid("grid_container", offset1), false);
window.addEventListener("resize", renderGrid("grid_container", offset1), false);
window.addEventListener("load", renderGrid("grid_container2", offset2), false);
window.addEventListener("resize", renderGrid("grid_container2", offset2), false);
$(document).ready(main);
