/*************start a game*******************/
/*var myGamePiece;
var mySound;
function startGame() 
{
    myGameArea.start();
    mySound = new sound("music/background.mp3");
    mySound.play();
    myGamePiece = new component();
}

var myGameArea = 
{
     canvas : document.createElement("canvas"),
    //button : document.creatElement("startButton"),
    start : function() 
    {
        this.canvas.width = 1260;
        this.canvas.height = 630;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    },
    //<button id="startButton" onclick = "firstLevel()"><img src="http://localhost:8080/image/start.jpg"></button>
}

function component() 
{
  var ctx = myGameArea.context;
  //var elm = myGameArea.canvas;
  
    //elemLeft = elem.offsetLeft,
    //elemTop = elem.offsetTop,
    //elem.addEventListener('click', function(event) 
	//{
       //  alert('clicked an element');
   // }, false);
    //elements = [];
    // Add event listener for `click` events.


/* Add element.
	elements.push({
    colour: '#05EFFF',
    width: 150,
    height: 100,
    top: 20,
    left: 15
});

// Render elements.
elements.forEach(function(element) 
{
    context.fillStyle = element.colour;
    context.fillRect(element.left, element.top, element.width, element.height);
});​*/
   /*************draw different images*******************/
	  /*  function loadImages(sources, callback) 
	    {
        var images = {};
        var loadedImages = 0;
        var numImages = 0;
        // get num of sources
        for(var src in sources) 
        {
          numImages++;
        }
        for(var src in sources) 
        {
          images[src] = new Image();
          images[src].onload = function() 
          {
            if(++loadedImages >= numImages) 
            {
              callback(images);
            }
          };
          images[src].src = sources[src];
        }
      }
      var sources = 
      {
        startButton: 'image/start.jpg',
        cat: 'image/cat.jpg',
        grass: 'image/level1.jpg',
        cornfield: 'image/level2.jpg',
        river: 'image/level3.jpg',
        castle: 'image/castle.jpg'
       
      };
       loadImages(sources, function(images) 
       {
        //context.drawImage(img,x,y,width,height)
        ctx.drawImage(images.startButton, 610, 590, 100,40);
        ctx.drawImage(images.cat, 610, 510, 90,70);
        ctx.drawImage(images.grass, 300, 450, 100, 80);
        ctx.drawImage(images.cornfield, 850, 350, 100, 80);
        ctx.drawImage(images.river, 550, 200, 300, 80);
        ctx.drawImage(images.castle, 650, 20, 100, 100);
        
      });*/
      
    

  /*	function firstLevel() 
  	{
  		 var dragon = new Image();
  	     dragon.src = 'image/dragon.jpg';
  		// window.onload = function() 
  		// {
    		ctx.drawImage(dragon, 300, 400, 30, 30);
		//};
  		
  	}
  
  	function draw_smaller_dragon() {
  	c5_context.drawImage(dragon, 10, 5, 58, 100);
  	}
  
  	function draw_dragon_head() {
  	c5_context.drawImage(dragon, 0, 19, 69, 97, 300, 100, 103, 145);
  	}
  
  	function Clear_image() {
  	c5_context.clearRect(1, 1, 600, 300);
  } 
  
}8?
  
  /********Add background music*******/
	/*function sound(src) 
	{
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function()
    {
        this.sound.play();
    }
    this.stop = function()
    {
        this.sound.pause();
    }
}
*/