//Create a reference for canvas 
canvas=document.getElementById("myCanvas");
//Give specific height and width to the car image
ctx=canvas.getContext("2d");
greencar_width=75;
greencar_height=100;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";
greencar_x=5;
greencar_y=225;
//Set initial position for a car image.

function add() {
	//upload car, and background images on the canvas.
	background_imgTag = new Image(); //defining a variable with a new image
	background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
	background_imgTag.src = background_image;   // load image

	greencar_imgTag = new Image(); //defining a variable with a new image
	greencar_imgTag.onload = uploadgreencar; // setting a function, onloading this variable
	greencar_imgTag.src = greencar_image;   // load image
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y>=0){
        greencar_y -=10;
        uploadBackground();
        uploadgreencar();

    }
	//Define function to move the car upward
}

function down()
{
	if(greencar_y<=500){
        greencar_y +=10;
        uploadBackground();
        uploadgreencar();

    }
	//Define function to move the car downward
}

function left()
{
	if(greencar_x>=0){
        greencar_x -=10;
        uploadBackground();
        uploadgreencar();

    }
	//Define function to move the car left side
}

function right()
{
	if(greencar_x<=700){
        greencar_x +=10;
        uploadBackground();
        uploadgreencar();

    }
	//Define function to move the car right side
}
