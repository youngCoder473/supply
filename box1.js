class BoxOne{


    

    constructor(x,y,w,h){

        var options={
            restitution:0.3,
            friction:0.3,
            density:1,
            isStatic:true
            }

      // this.body=Bodies.rectangle(x,y,w,h,{isStatic:true});
       this.body=Bodies.rectangle(x,y,10,150,options);
       this.w= width;
       this.h=height;
       World.add(world,this.body);
    }

    display()
    {
    push();
    var pos= this.body.position;
    this.w =this.body.width;
    this.h=this.body.height;
    fill("blue")
    rectMode(CENTER)
    rect(pos.x,pos.y,10,150)
    pop();
    }
}