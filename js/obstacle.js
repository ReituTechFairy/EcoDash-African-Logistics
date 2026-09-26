//Obstacle Class
//This class creates obstacles that appear in the EcoDash environment

class Obstacle {

  constructor(x, y, width, height, type) {

    //Position of the obstacle on the canvas
    this.x = x;
    this.y = y;

    //Size of the obstacle
    this.width = width;
    this.height = height;

    //Type of obstacle
    this.type = type;

  }

  draw(ctx) {

    //Pothole
    if (this.type === "pothole") {

      ctx.fillStyle = "#333";

      ctx.beginPath();

      ctx.arc(
        this.x + this.width / 2, 
        this.y + this.height / 2, 
        this.width / 2, 0, Math.PI * 2
      );

      ctx.fill();
    }

    //Fallen Tree
    if (this.type === "tree") {

      ctx.fillStyle = "#6b4226";

      ctx.fillRect(
        this.x, 
        this.y, 
        this.width, 
        this.height
      );

    }

    //River
    if (this.type === "river") {

      ctx.fillStyle = "#1e90ff";

      ctx.fillRect(
        this.x, 
        this.y, 
        this.width, 
        this.height
      );
    }

    //Construction Area
    if (this.type === "construction") {

      ctx.fillStyle = "#d99a2b";

      ctx.fillRect(
        this.x, 
        this.y, 
        this.width, 
        this.height
      );
    }

    //Solar Microgrid Zone
    if (this.type === "solar") {

      //Draw the solar area
      ctx.fillStyle = "#f2c94c";

      ctx.fillRect(
        this.x,
        this.y,
        this.width,
        this.height
      );

      //Draw lines to make it look like solar panels
      ctx.strokeStyle = "#333";
      ctx.lineWidth = 2;

      ctx.beginPath();

      ctx.moveTo(this.x + 20, this.y);
      ctx.lineTo(this.x + 20, this.y + this.height);

      ctx.moveTo(this.x + 40, this.y);
      ctx.lineTo(this.x + 40, this.y + this.height);

      ctx.moveTo(this.x + 60, this.y);
      ctx.lineTo(this.x + 60, this.y + this.height);

      ctx.stroke();
    }

  }

}