let hourid = document.getElementById("ClockHour");
let minid = document.getElementById('ClockMinute');
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

// Min Hand 
Clock.minid = minid;
Clock.minWidth = 10;
Clock.minHeight = Clock.radius - 100 ;

// Hour Hand
Clock.hourid = hourid;
Clock.hourWidth = 15;
Clock.hourHeight = Clock.radius - 130;


// Bir kere alinacak degerler
var digitalClock = Clock.now.getHours() + ':' +  Clock.now.getMinutes()  + ':' +  Clock.now.getSeconds() ; 
document.getElementById('digital').innerHTML = digitalClock; 



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
                ctx.fillRect(Vector2.x,Vector2.y, ImSize+2,ImSize+2 );   
                //console.log(i +'=>' + Vector2.x  +','+ Vector2.y+ '\n'); 
                
                i-=6;  

            },10);        
        ctx.stroke();
    };



    Clock.Work=()=>{ 
        let ctxHour = Clock.hourid.getContext("2d");
        let ctxMin = Clock.minid.getContext("2d");
        let ctx = Clock.secid.getContext("2d");
        let  i = 6 ;
        
        //let Vector2 = {};

        // hour Hand 
        ctxHour.beginPath();
        ctxHour.translate(Clock.coordDx,Clock.coordDy);
        ctxHour.moveTo(0,0);
        ctxHour.fillStyle = "GREEN";
        ctxHour.rotate(Math.PI);                                              // Ibreyi SIFIRLA
        ctxHour.rotate( i * Clock.now.getHours() * Math.PI / 180 ) ;        // Su andaki dakika konumuna getir.  
        ctxHour.fillRect(0, 0, Clock.hourWidth, Clock.hourHeight);    
        ctxHour.closePath();   


        // min Hand 
        ctxMin.beginPath();
        ctxMin.translate(Clock.coordDx,Clock.coordDy);
        ctxMin.moveTo(0,0);
        ctxMin.fillStyle = "ORANGE";
        ctxMin.rotate(Math.PI);                                              // Ibreyi SIFIRLA
        ctxMin.rotate( i * Clock.now.getMinutes() * Math.PI / 180 ) ;        // Su andaki dakika konumuna getir.  
        ctxMin.fillRect(0, 0, Clock.minWidth, Clock.minHeight);    
        ctxMin.closePath();   

        // Sec Hand 
        ctx.beginPath();  
        ctx.translate(Clock.coordDx,Clock.coordDy);
        ctx.moveTo(0,0);
        ctx.fillStyle="ORANGE";
        ctx.rotate( Math.PI );                                              // ibreyi 6 dan al 12 ye getir. (SIFIRLA)
        ctx.rotate( i * Clock.now.getSeconds() * Math.PI / 180 ) ;          // Su andaki saniye konumuna getir.  
        ctx.fillRect(0, 0, Clock.secWidth, Clock.secHeight);      

        let interval = setInterval(function(){
            
            
            //Vector2.x = Math.sin(i * Math.PI / 180 ) * Clock.radius;   
            //Vector2.y = Math.cos(i * Math.PI / 180 ) * Clock.radius;   
           
            ctx.clearRect(-1, -1, 1800, 800); 
            ctx.rotate( i * Math.PI / 180  );          
            ctx.fillRect(0, 0, Clock.secWidth, Clock.secHeight);    
            ctx.closePath();   


            ctxMin.clearRect(-1, -1, 1800, 800); 
            ctxMin.rotate( i * Math.PI / 180  );          
            ctxMin.fillRect(0, 0, Clock.minWidth, Clock.minHeight);    
            ctxMin.closePath();   

            
            ctxHour.clearRect(-1, -1, 1800, 800); 
            ctxHour.rotate( i * Math.PI / 180  );          
            ctxHour.fillRect(0, 0, Clock.hourWidth, Clock.hourHeight);    
            ctxHour.closePath();   
          
            
           
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
     Clock.Work();


    