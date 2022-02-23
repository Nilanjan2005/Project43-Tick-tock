var hr,sc,mn;
var scAngle,mnAngle,hrAngle;


function setup(){

  createCanvas(1250,650);

 
  angleMode(DEGREES)

}  
function draw(){

  background(rgb(237,34,93));
 
  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr%12,0,12,0,360);

    //arc(625, 650, 625, 625, 0, HALF_PI);

   arc(625, 650, 675, 675, scAngle);
   arc(625, 650, 700, 700, PI, PI + QUARTER_PI);
   arc(625, 650, 800, 800, PI + QUARTER_PI, TWO_PI);

  line(625,325,800,425);

}
