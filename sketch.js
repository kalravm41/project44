var database;
var button1;
var button2;
var form1;
var button8;
var k;
var l;
var i;

function setup(){
var canvas = createCanvas(displayWidth-20,displayHeight-30);
textSize(50);
text("Login Who are you : ",displayWidth/2-250,100);
button1 = createButton("Hospital Authority");
button1.position(displayWidth/2-250,displayHeight/2-100);
button2 = createButton("User");
button2.position(displayWidth/2+150,displayHeight/2-100);
form1 = new Form1();
}


function draw(){
button1.mousePressed(()=>{
clear();
button1.hide();
button2.hide();
form1.display();

})
}