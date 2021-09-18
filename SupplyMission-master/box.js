class Box{
constructor(x,y,w,h){
this.bottomBody=Bodies.rectangle(x,y,w,h,{isStatic:true})
World.add(world,this.bottomBody)
this.w=w 
this.h=h
}
display(){rect(this.bottomBody.position.x,this.bottomBody.position.y,this.w,this.h)
}
}