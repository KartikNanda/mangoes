class Mango{
    construcor(x,y,r);

}
var option={
    isStatic=true,
    restitution :0,
    friction :1,
}
this.x=x;
this.y=y;
this.image=loadImage("images/mango.png");
this.body=Bodies.circle(this.x,this.y,this.r,options);
World.add(world,this.body);