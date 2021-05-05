// #88BCC2  #5EACBD 10%, #C9DCD6 10%, #FFFFFF 10%, #F6E1CF 10%, #F27545 10%, #FC5A67  #664760

class watch {

  constructor(minutes,analog) {
    this.min =minutes;
    this.startp=minutes*60;
    this.sec =0;

    this.analog=analog;
    this.percent=(this.min*60+this.sec)/this.startp;
  }

  countdown(){
  setInterval(()=>{

    ///analog

    //$(".display").text(this.min+":"+this.sec);

    this.percent=(this.min*60+this.sec)/this.startp;
    this.draw(Math.PI*1.5,(Math.PI*1.999)*this.percent-(Math.PI/2));


    console.log(this.percent);
  this.background();


    // if(percent>=0.90){
    //   $('html').css({"background-image":"linear-gradient(135deg, #5EACBD 0%, #88BCC2 100%, #C9DCD6 100%)"});
    // }




    ///Digital
    if(this.sec===0 && this.min>0){
      this.min--;
      this.sec=59;

    }
    else if(this.sec>0){
      this.sec--;
    }




  }, 1000);





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

background(){

  setInterval(()=>{
    let percentB=(this.min*this.sec*100)/(60*this.min);
    if(this.percent>=0.75){
      $('html').css({"background-image":"linear-gradient(135deg, #5EACBD 0%, #88BCC2 "+percentB+"%, #C9DCD6 100%)"});
    }
    if(this.percent<0.75 && this.percent >=0.5){
      $('html').css({"background-image":"linear-gradient(135deg, #88BCC2 0%, #C9DCD6 "+percentB+"%, #F6E1CF 100%)"});

    }
    else if(this.percent <0.5 && this.percent>0.25){
        $('html').css({"background-image":"linear-gradient(135deg, #C9DCD6 0%, #F6E1CF "+percentB+"%, #F04F5C 100%)"});

    }
    else if(this.percent <=0.65 && this.percent >=0.50 ){
        $('html').css({"background-image":"linear-gradient(45deg, #F6E1CF 0%, #F04F5C "+percentB+"%, #F27545 100%)"});

    }
    else if(this.percent <=0.55 &&this.percent>=0.30){
      $('html').css({"background-image":"linear-gradient(45deg, #F04F5C 0%, #F27545 "+percentB+"%, #6B4861 100%)"});

    }
    else if(this.percent <=0.30){
        $('html').css({"background-image":"linear-gradient(45deg, #F27545 0%, #6B4861 "+percentB+"%, #090E1E 100%)"});

    }
  },1000)

}



}


var canvas = document.getElementById("myCanvas");
var Pomidoro=new watch(5,canvas);
//Pomidoro.draw(Math.PI*(3/2),Math.PI*1.499);




Pomidoro.countdown();
