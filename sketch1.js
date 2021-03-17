var box,edges;
var box1,box2,box3,box4;
function setup(){
    createCanvas(400,400);
    box=createSprite(random(20,380),20,20,20);
    box.shapeColor="blue"
    box.setVelocity(6,4);
    box1=createSprite(50,390,50,10);
    box1.shapeColor="green"
    box2=createSprite(150,390,50,10);
    box2.shapeColor="red"
    box3=createSprite(250,390,50,10);
    box3.shapeColor="yellow"
    box4=createSprite(350,390,50,10);
    box4.shapeColor="brown"
}
function draw(){
    background("black");
    edges=createEdgeSprites();
    box.bounceOff(edges);
   
    if(isTouching(box,box1)){
        bounceOff(box,box1)
        box.shapeColor=box1.shapeColor;
    }
    if(isTouching(box,box2)){
        bounceOff(box,box2)
        box.shapeColor=box2.shapeColor;
    }
    if(isTouching(box,box3)){
        collide(box,box3)
        box.shapeColor=box3.shapeColor;
    }
    if(isTouching(box,box4)){
        bounceOff(box,box4)
        box.shapeColor=box4.shapeColor;
    }
    
    drawSprites();
}