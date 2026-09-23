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

    //Type of obstacle (e.g., "tree", "rock", "pothole")
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

  }

}