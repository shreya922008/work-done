var button
var question 
var playing
var score = 100
function preload(){
  bg1=loadImage("code 1.jpg")
  bg2=loadImage("code 2.jpg")
  bg3=loadImage("code.jpg")
  bg4=loadImage("code3.jpg")
  bg5=loadImage("code4.jpg")
  bg6=loadImage("hh 1.jpg")
  bg7=loadImage("tt.jpg")
  bg8=loadImage("hn.png")
  bg9=loadImage("hk.jpg")
  bg10=loadImage("khk.jpg")
  bg11=loadImage("end.jpg")
  bg12=loadImage("doctor.jpg")
  bg13=loadImage("cold.jpg")
  bg14=loadImage("breathing.jpg")
  bg15=loadImage("diabetes.jpg")
  bg16=loadImage("endI.png")
  bg17=loadImage("lung.png")
  bg18=loadImage("kj.jpg")
  bg19=loadImage("stay-positive.gif")
  bg20=loadImage("hg.jpg")
  bg21=loadImage("hjk.jpg")
  bg22=loadImage("di.jpg")
  bg23=loadImage("y.jpg")
  bg24=loadImage("jk.jpg")
  bg25=loadImage("stay home .jpg")
  bg26=loadImage("don't travel.jpg")
  bg27=loadImage("hh.jpg")





  

}

function setup() {
//background(bg4)
  createCanvas(displayWidth-100,displayHeight-100);
  question=new Question();
 
}

function draw() {

  background(bg4);
   textSize(20)
   stroke("yellow");
  text("Health Condition: "+ score, displayWidth-400,50);  
  question.display()
  playing.play()
//button.display()
  drawSprites();
}