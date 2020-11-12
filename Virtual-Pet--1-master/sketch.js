var stock = 20,pet,pet2,store,re,foods;

function preload()
{
  pet = loadImage("images/Dog.png");
  pet2 = loadImage("images/happydog.png");
}

function setup() {
  createCanvas(800, 700);

  dog = createSprite(400,500);
  dog.addImage("can",pet);
  dog.addImage("feet",pet2);
  dog.scale = 0.35;
 
  store = firebase.database();
  re = store.ref("food");
  re.on("value",read);
}


function draw() {  

  background("brown");

  drawSprites();

  fill("blue");
  textSize(20);
  text(" PRESS the SPACE to FEED 'ABBY'",250,50);

  if(keyWentDown(DOWN_ARROW)){
    write(stock);
    dog.changeImage("feet");
  }
  
 
  text(" Food Left "+stock,60,100);
 
}
function write(stock){
  
  if(stock <= 0){
    stock = 0;
  }
  if(stock >= 0){
    stock = stock-1;
  }
  store.ref("/").update({
    food:stock
  })
}
function read(data){
   stock = data.val();
}



