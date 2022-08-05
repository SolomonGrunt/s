var score = require('./index.js')
function Player(x,y){
    this.x =x;
    this.y =y;
    this.xspeed=0;
    this.yspeed=0;
    this.friction =0.9;
    this.maxspeed =15;
    this.width =100;
    this.height =100;
    this.active =true;
    this.sum=4;
    this.step = function () {
        if(this.active){
            //
            if (!leftKey && !rightKey || leftKey && rightKey ){
                this.xspeed *=this.friction;
            } else if(rightKey){
                this.xspeed ++;
            }else if(leftKey){
                this.xspeed --;
            }
  //
            if(upKey){
                this.yspeed -=15;
                onGround=false;
            }
            this.yspeed +=5;

            if(this.xspeed > this.maxspeed){
               this.xspeed = this.maxspeed;
           } else if(this.xspeed < -this.maxspeed){
               this.xspeed = -this.maxspeed;
           }
            if(this.yspeed > this.maxspeed){
                this.yspeed = this.maxspeed;
            } else if(this.yspeed < -this.maxspeed){
                this.yspeed = -this.maxspeed;
            }
            if(this.xspeed >0){
                this.xspeed = Math.floor(this.xspeed);
            }else{
                this.xspeed = Math.ceil(this.xspeed);
            }
            if(this.yspeed >0){
                this.yspeed = Math.floor(this.yspeed);
            }else{
                this.yspeed = Math.ceil(this.yspeed);
            }

            let horizontalRect ={
                x: this.x + this.xspeed,
                y: this.y,
                width: this.width,
                height: this.height
            }
            let verticalRect ={
                x: this.x ,
                y: this.y +this.yspeed,
                width: this.width,
                height: this.height
            }
            for(let i=0 ; i< borders.length; i++) {
                let borderRect = {
                    x: borders[i].x,
                    y: borders[i].y,
                    width: borders[i].width,
                    height: borders[i].height,
                    type: borders[i].type
                }

                    if (checkIntersection(horizontalRect, borderRect)) {
                         while (checkIntersection(horizontalRect,borderRect)){
                            horizontalRect.x -=Math.sign(this.xspeed);
                          }
                          if(borderRect.type ==1){
                        this.x = horizontalRect.x + width;
                        this.xspeed = 0;
                          }else if(borderRect.type ==2) {
                              document.location.reload();}
                          else if(borderRect.type ==3) {
                              borders.splice([i],1);
                              sum -=1;
                              console.log(sum);
                              if(sum==0){
                                  alert("winner");
                                  document.location.reload();}
                          } else if(borderRect.type ==4){
                              this.width =50;
                              this.height =50;
                              borders.splice([i],1);

                          }
                    }
                    //
                    if (checkIntersection(verticalRect, borderRect)) {
                         while (checkIntersection(verticalRect,borderRect)){
                          verticalRect.y -=Math.sign(this.yspeed);
                         }if(borderRect.type ==1){
                        this.y = verticalRect.y + width;
                        this.yspeed = 0;
                         }else if(borderRect.type ==2) {
                            document.location.reload();}
                        else if(borderRect.type ==3) {
                            borders.splice([i],1);
                            sum -=1;
                            score +=1;

                            console.log(sum);
                            if(sum==0){
                                alert("winner");
                                document.location.reload();}
                        } else if(borderRect.type ==4){
                            this.width =50;
                            this.height =50;
                            borders.splice([i],1);

                        }

                    }

            }
            this.x +=this.xspeed;
            this.y +=this.yspeed;

        }
    }
    this.draw = function () {
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.x , this.y , this.width , this.height)
    }
}