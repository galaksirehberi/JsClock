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
Clock.secid = secid;


    Clock.Shape=()=>{
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
                
                ctx.fillRect(Vector2.x,Vector2.y, ImSize+2,ImSize+2 );   // parametreleri radyan cinsinden aliyor.
               
                console.log(i +'=>' + Vector2.x  +','+ Vector2.y+ '\n'); 
                
                i-=6;  // 2 saniye arasindaki aci derecesi 6 dir. 6*60 cizgi  = 360 derece yapar o da 1 dakika eder.

            },10);        
            
           // ctx.setTransform(1, 0, 0, 1, 0, 0);
           // ctx.clearRect(0, 0, 1800, 800);
        ctx.stroke();
    };

    Clock.YmdhHis=()=>{

        let ctx = Clock.id.getContext("2d");

        let c_date = new Date();
        let hour = c_date.getHours();
        let minute = c_date.getMinutes();
        let seconds = c_date.getSeconds();

       let  i = 360 ;
       let Vector2 = {};
       
       let interval = setInterval(function(){
                    ctx.beginPath(); 
                   
                    Vector2.x = Math.sin(i * Math.PI / 180 ) * Clock.radius;   
                    Vector2.y = Math.cos(i * Math.PI / 180 ) * Clock.radius;   
                    ctx.moveTo(0,0);
                    ctx.lineTo(Vector2.x,Vector2.y);       
                    ctx.stroke();
                    ctx.closePath();
                    i-=6;
                    if( i == 0 ){
                        i = 360; 
                    }
                    console.log(i+'\n');    



                  

        },1000);  
        
            //ctx.setTransform(1, 0, 0, 1, 0, 0);
            //ctx.rotate(90 * Math.PI / 180 )
            //ctx.clearRect(0, 0, 800, 800); 
       
    };

    Clock.getSec=()=>{
        let ctx = Clock.secid.getContext("2d");

        let  i = 6 ;
        let Vector2 = {};
        ctx.translate(Clock.coordDx,Clock.coordDy);
        ctx.beginPath(); 
        let interval = setInterval(function(){
            ctx.clearRect(0, 0, 1800, 800); 
            Vector2.x = Math.sin(i * Math.PI / 180 ) * Clock.radius;   
            Vector2.y = Math.cos(i * Math.PI / 180 ) * Clock.radius;   
            ctx.moveTo(0,0);

            ctx.rotate(i * Math.PI / 180 );       
            ctx.fillRect(0, 0, 1, Clock.radius);
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



     Clock.Shape(); 
     Clock.getSec();
   //  Clock.Clear();
 
 
   // Clock.YmdhHis();
 

   //Clock.Sec();
   //Clock.Clear();
   
   // Clock.MinuteHand();
   // Clock.HourHand();
   // Clock.SecHand();
