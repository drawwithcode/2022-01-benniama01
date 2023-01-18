//parametri globali
let r=1;
let g=1;
let b=1;

let r1=1;
let g1=1;
let b1=1;

let r2=1;
let g2=1;
let b2=1;

let r3=1;
let g3=1;
let b3=1;

//valori che regolano "la velocità" di cambiamento del colore
let variationR=1;
let variationG=3;
let variationB=2;

let variationR1=2;
let variationG1=4;
let variationB1=3;

let variationR2=3;
let variationG2=5;
let variationB2=4;

let variationR3=5;
let variationG3=2;
let variationB3=4;

function setup() {
  createCanvas(800,600);
}

function draw() {
  background(220);
  
//quadrati
  //prima riga
  noStroke()
  fill('#3cb371');
  rect(0,0,200,200);
  fill('#9370db');
  rect(200,0,200,200);
  fill('#696969');
  rect(400,0,200,200);
  fill('#ff6347');
  rect(600,0,200,200);
  //seconda riga
  fill('#f0e68c');
  rect(0,200,200,200);
  fill('#66cdaa');
  rect(200,200,200,200);
  fill('#ffd700');
  rect(400,200,200,200);
  fill('#6a5acd');
  rect(600,200,200,200);
  //terza riga
  fill('#ff6347');
  rect(0,400,200,200);
  fill('#4682b4');
  rect(200,400,200,200);
  fill('#f4a460');
  rect(400,400,200,200);
  fill('#8b0000');
  rect(600,400,200,200);

//variabili per r,g,b = primo cerchio
  if (r>255||r<0){
    let changeValueR=random(-.5,-1.5);
    variationR=variationR*changeValueR;
  }
  //ad ogni iterazione la variabile è uguale a se stessa sommata al "tasso" di variazione
  r+=variationR;

  if (g>255||g<0){
    let changeValueG=random(-.5,-1.5);
    variationG=variationG*changeValueG;
  }
  g+=variationG;

  if (b>255||b<0){
    let changeValueB=random(-.5,-1.5);
    variationB=variationB*changeValueB;
  }
  b+=variationB;
//variabili per r1,g1,b1 = secondo cerchio
  if (r1>255||r1<0){
    let changeValueR=random(-.5,-1.5);
    variationR1=variationR1*changeValueR;
  }
  r1+=variationR1;

  if (g1>255||g1<0){
    let changeValueG=random(-.5,-1.5);
    variationG1=variationG1*changeValueG;
  }
  g1+=variationG1;

  if (b1>255||b1<0){
    let changeValueB=random(-.5,-1.5);
    variationB1=variationB1*changeValueB;
  }
  b1+=variationB1;

  //variabili per r2,g2,b2 = terzo cerchio
  if (r2>255||r2<0){
    let changeValueR=random(-.5,-1.5);
    variationR2=variationR2*changeValueR;
  }
  r2+=variationR2;

  if (g2>255||g2<0){
    let changeValueG=random(-.5,-1.5);
    variationG2=variationG2*changeValueG;
  }
  g2+=variationG2;

  if (b2>255||b2<0){
    let changeValueB=random(-.5,-1.5);
    variationB2=variationB2*changeValueB;
  }
  b2+=variationB2;

  //variabili per r3,g3,b3 = quarto cerchio
  if (r3>255||r3<0){
    let changeValueR=random(-.5,-1.5);
    variationR3=variationR3*changeValueR;
  }
  r3+=variationR3;

  if (g3>255||g3<0){
    let changeValueG=random(-.5,-1.5);
    variationG3=variationG3*changeValueG;
  }
  g3+=variationG3;

  if (b3>255||b3<0){
    let changeValueB=random(-.5,-1.5);
    variationB3=variationB3*changeValueB;
  }
  b3+=variationB3;
   //cerchi_1
fill(r,g,b);
noStroke();
  //prima riga
  ellipse(100,100,185);
  ellipse(300,100,190);
  ellipse(500,100,180);
  ellipse(700,100,197);
  //seconda riga
  ellipse(100,300,188);
  ellipse(300,300,194);
  ellipse(500,300,183);
  ellipse(700,300,179);
  //terza riga
  ellipse(100,500,197);
  ellipse(300,500,182);
  ellipse(500,500,195);
  ellipse(700,500,187);

  //cerchi_2
fill(r1,g1,b1);
noStroke();
  //prima riga
  ellipse(100,100,140);
  ellipse(300,100,140);
  ellipse(500,100,140);
  ellipse(700,100,140);
  //seconda riga
  ellipse(100,300,140);
  ellipse(300,300,140);
  ellipse(500,300,140);
  ellipse(700,300,140);
  //terza riga
  ellipse(100,500,140);
  ellipse(300,500,140);
  ellipse(500,500,140);
  ellipse(700,500,140);

    //cerchi_3
fill(r2,g2,b2);
noStroke();
    //prima riga
  ellipse(100,100,110);
  ellipse(300,100,120);
  ellipse(500,100,115);
  ellipse(700,100,130);
    //seconda riga
  ellipse(100,300,108);
  ellipse(300,300,105);
  ellipse(500,300,117);
  ellipse(700,300,125);
    //terza riga
  ellipse(100,500,122);
  ellipse(300,500,113);
  ellipse(500,500,102);
  ellipse(700,500,119);

   //cerchi_4
fill(r3,g3,b3);
noStroke();
  //prima riga
  ellipse(100,100,70);
  ellipse(300,100,90);
  ellipse(500,100,80);
  ellipse(700,100,75);
  //seconda riga
  ellipse(100,300,88);
  ellipse(300,300,90);
  ellipse(500,300,83);
  ellipse(700,300,85);
  //terza riga
  ellipse(100,500,97);
  ellipse(300,500,82);
  ellipse(500,500,95);
  ellipse(700,500,87);
}

