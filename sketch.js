function setup() {
  createCanvas(400, 400);
}

let xJogador1 = 0;
let xJogador2 = 0;

function draw() {
  ativaJogo()
  desenhaJogadores()
  desenhaLinhaDeChegada()
  verificarVencedor()
}
  function ativaJogo(){
    if(focused == true){
       background(220);
    } else {
       background('rgb(11,129,109)');
    }
  }
function desenhaJogadores(){
   textSize(40);
  text("🥵", xJogador1, 100);
  text("🤬", xJogador2, 200);
}
  function desenhaLinhaDeChegada(){
    fill('white')
    rect(350, 0, 10, 400);
    fill('black')
    for (let yAtual = 0; yAtual<400; yAtual +=20) {  rect(350, yAtual, 10, 10);}
  }
    function verificarVencedor() {
      if (xJogador1 > 350) {
    text("Jogador 1 venceu!", 30, 200);
    noLoop(); }
    }
    if (xJogador2 > 350){
    text("Jogador 2 venceu!", 30, 200);
    noLoop(); 
    }

funtion keyReleased() {
  if (key =="a"){
      xJogador1 += random(20);
  }
  if (key =="s"){
    xJogador2 += random(5);
  }
}

  
  xJogador1 = xJogador1 + random(5);
  xJogador2 = xJogador2 + random(5);
  if (xJogador1 > 350) {
    text("Jogador 1 venceu!", 30, 200);
    noLoop();
  }
  if (xJogador2 > 350) {
    text("Jogador 2 venceu!", 30, 200);
    noLoop();
  
}
