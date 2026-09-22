//PLAYER CLASS
//This class will control the EcoDash delivery vehicle

class Player {
  constructor(x, y){

    //Position of vehicle on canvas
    this.x = x;
    this.y = y;

    //Vehicle size
    this.width = 40;
    this.height = 25;

    //Vehicle movement speed
    this.vx = 0;
    this.vy = 0;

    //How quickly the vehicle gains speed (acceleration)
    this.acc = 0.25;

    //How quickly the vehicle slows down (friction)
    this.friction = 0.90;

    //Vehicle max speed
    this.maxSpeed = 5;

    //Car direction
    this.angle = 0;

    //Starting battery level
    this.battery = 100;

  }

  update(keys, canvasWidth, canvasHeight) {

//To turn the vehicle left
if (keys["a"]) {
  this.angle -= 0.05;
}

//To turn the vehicle right
if (keys["d"]) {
  this.angle += 0.05;
}

//To move the vehicle forward
if (keys["w"]) {
  this.vx += Math.cos(this.angle) * this.acc;
  this.vy += Math.sin(this.angle) * this.acc;
}

//To move the vehicle backwards
if (keys["s"]) {
  this.vx -= Math.cos(this.angle) * this.acc;
  this.vy -= Math.sin(this.angle) * this.acc;
}

    //Gradually slow the vehicle down
    this.vx *= this.friction;
    this.vy *= this.friction;

    //Limit the horizontal speed
    this.vx = Math.max(
      -this.maxSpeed,
      Math.min(this.maxSpeed, this.vx)
    );

    //Limit the vertical speed
    this.vy = Math.max(
      -this.maxSpeed,
      Math.min(this.maxSpeed, this.vy)
    );

    //Move the vehicle
    this.x += this.vx;
    this.y += this.vy;

    //Stop the vehicle at the left edge of the canvas
    if (this.x < 0) {
      this.x = 0;
      this.vx = 0;
    }

    //Stop the vehicle at the right edge of the canvas
    if (this.x + this.width > canvasWidth) {
      this.x = canvasWidth - this.width;
      this.vx = 0;
    }

    //Stop the vehicle at the top edge of the canvas
    if (this.y < 0) {
      this.y = 0;
      this.vy = 0;
    }

    //Stop the vehicle at the bottom edge of the canvas
    if (this.y + this.height > canvasHeight) {
      this.y = canvasHeight - this.height;
      this.vy = 0;
    }

    //Uses battery while the vehicle is moving
    let movement = Math.abs(this.vx) + Math.abs(this.vy);

    this.battery -= movement * 0.002;

    //Stop battery from going below 0
    if (this.battery < 0) {
      this.battery = 0;
    }

  }

  draw(ctx) {

    //Save the current Canvas settings
    ctx.save();

    //Move the Canvas to the centre of the vehicle
    ctx.translate(
      this.x + this.width / 2,
      this.y + this.height / 2
    );

    //Rotate the vehicle
    ctx.rotate(this.angle);

    //Vehicle body
    ctx.fillStyle = "#2f6b3c";
    ctx.fillRect(-20, -12, 40, 24);

    //Vehicle window
    ctx.fillStyle = "#2c4d68";
    ctx.fillRect(-12, -8, 24, 16);

    //Vehicle wheels
    ctx.fillStyle = "#222";

    ctx.fillRect(-15, -15, 8, 5);
    ctx.fillRect(7, -15, 8, 5);
    ctx.fillRect(-15, 10, 8, 5);
    ctx.fillRect(7, 10, 8, 5);

    //Restore the Canvas settings
    ctx.restore();
  }
}