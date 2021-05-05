

class watch {

  constructor(minutes,analog) {
    this.min =minutes;
    this.startp=minutes*60
    this.sec =0;
    this.analog=analog;
  }

  countdown(){
  setInterval(()=>{

    ///analog

    //$(".display").text(this.min+":"+this.sec);

    var percent=(this.min*60+this.sec)/this.startp;
    this.draw(Math.PI*1.5,(Math.PI*1.999)*percent-(Math.PI/2));


    ///Digital
    if(this.sec===0 && this.min>0){
      this.min--;
      this.sec=59;

    }
    else if(this.sec>0){
      this.sec--;
    }




  }, 10);




}

draw(begin,end){///begin Math.PI*(3/2)
  if (canvas.getContext) {

      var ctx = this.analog.getContext('2d');
      ctx.beginPath();
  ctx.strokeStyle = 'blue';
      ctx.clearRect(0, 0, 450, 450);
      ctx.arc(225, 225, 200, begin, end, false);
      ctx.stroke();
  }
}

}
var canvas = document.getElementById("myCanvas");
var Pomidoro=new watch(30,canvas);
//Pomidoro.draw(Math.PI*(3/2),Math.PI*1.499);




Pomidoro.countdown();
