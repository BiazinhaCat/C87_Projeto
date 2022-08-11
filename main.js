var canvas = new fabric.Canvas("myCanvas")

 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function newImage(get_image)
{
	fabric.Image.fromURL(get_image, function(Img){
      blockImageObject = Img;

        blockImageObject.scaleToWidth(blockImageObject);
        blockImageObject.scaleToHeight(blockImageObject);

        blockImageObject.set({

            top: blockY,
            left: blockX
        });
         canvas.add(blockImageObject);

   }) 
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '69')
	{
		newImage("rr.jpg")
		console.log("e")
	}
	if(keyPressed == '86')
	{
		newImage("gr.png")
		console.log("v")
	}
	
	if(keyPressed == '65')
	{
		newImage("yr.png")
		console.log("a")
	}
	if(keyPressed == '82')
	{
		newImage("pr.png")
		console.log("r")
	}
	if(keyPressed == '73')
	{
		newImage("br.png")
		console.log("i")
	}
	
}

