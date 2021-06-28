class Launcher{

constructer(body,point){
    console.log("hlo"+ body);
    this.bodyA = body;
 this.pointB = point;
 var options = {

    bodyA : body,
    pointB : point,
    stiffness : 0.005,
    length : 2

 }
    this.launcher = Constraint.create(options);
 World.add(world,this.launcher);
console.log(this.bodyA);
}
 
display(){

//if( this.launcher.bodyA ){

    var pointA = this.launcher.bodyA.position;
    var pointB = this.pointB;
    strokeWeight (5);
    line( pointA .x, pointA.y,pointB .x, pointB.y )

//}
}
fly(){
    this.launcher.bodyA = null;
}

attach(body){
    this.launcher.bodyA = body;

}




}