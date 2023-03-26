let secid = document.getElementById("ClockSecond");
let cid = document.getElementById("ClockView");
const canvas_w = cid.width;
const canvas_h = cid.height;

const x  = canvas_w / 2;
const y  = canvas_h / 2 ;

const Clock = {};
Clock.id = cid;
Clock.coordDx = x;
Clock.coordDy = y;
Clock.radius = 220; 
Clock.startAngle = 0;
Clock.endAngle = 0.5 * Math.PI;
Clock.now = new Date();

// Sec Hand
Clock.secid = secid;
Clock.secWidth = 2;
Clock.secHeight = Clock.radius ;

// Bir kere alinacak degerler
var digitalClock = Clock.now.getHours() + ':' +  Clock.now.getMinutes()  + ':' +  Clock.now.getSeconds() ; 
document.getElementById('digital').innerHTML = digitalClock; 



    Clock.shape=()=>{
        let ctx = Clock.id.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = "#eb3ad3";
        ctx.arc( Clock.coordDx,
                 Clock.coordDy,
                 Clock.radius,
                 Clock.startAngle,
                 Clock.endAngle );
        ctx.translate(Clock.coordDx,Clock.coordDy);
        let Vector2 = {};
        let ImSize = 3;       
            let  i = 360 ; 
            let interval = setInterval(function(){
                
                if( i == 0 ) {
                    clearInterval(interval);
                } 
                Vector2.x = Math.sin(i * Math.PI / 180 ) * Clock.radius; 
                Vector2.y = Math.cos(i * Math.PI / 180 ) * Clock.radius;
                ctx.fillRect(Vector2.x,Vector2.y, ImSize+2,ImSize+2 );   
                //console.log(i +'=>' + Vector2.x  +','+ Vector2.y+ '\n'); 
                
                i-=6;  

            },10);        
        ctx.stroke();
    };



    Clock.getSec=()=>{ 
        let ctx = Clock.secid.getContext("2d");
        let  i = 6 ;
        
        //let Vector2 = {};
        ctx.beginPath();  
        ctx.translate(Clock.coordDx,Clock.coordDy);
        ctx.moveTo(0,0);
        ctx.fillStyle="RED";
        let interval = setInterval(function(){
            
            ctx.clearRect(-1, -1, 1800, 800); 
            //Vector2.x = Math.sin(i * Math.PI / 180 ) * Clock.radius;   
            //Vector2.y = Math.cos(i * Math.PI / 180 ) * Clock.radius;   
           
            ctx.rotate( i * Math.PI / 180 );       
            ctx.fillRect(0, 0, Clock.secWidth, Clock.secHeight);    
            ctx.closePath();   
        },1000);
          
    }
   
    Clock.Clear=()=>{
        let ctx = Clock.secid.getContext("2d");  
        let interval = setInterval(function(){
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.clearRect(0, 0, 1800, 800); 
        },2000);
    }



     Clock.shape(); 
     Clock.getSec();
