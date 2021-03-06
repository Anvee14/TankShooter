class ShootBall {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.4,
            length: 10 
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body) {
        flag = "red"
        this.sling.bodyA = body;
    }

    shoot() {
        this.sling.bodyA = null;
    }

    display() {
        if (this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            this.pointB.x = launchX;
            this.pointB.y = launchY;
            var pointB = this.pointB;
        }
    }

}