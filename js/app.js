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


    Clock.Shape=()=>{
        let ctx = Clock.id.getContext("2d");
        ctx.beginPath();
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
                if( i % 30 == 0){
                            ctx.fillRect(Vector2.x,Vector2.y, 
                            ImSize+2,ImSize+2 );
                }
               // ctx.fillRect(Vector2.x, Vector2.y,
               //             ImSize,ImSize);
                
                console.log(i +'=>' + Vector2.x  +','+ Vector2.y+ '\n'); 
                i-=6;

            },50);              
        ctx.stroke();
    };



    Clock.FindCoordinates=()=>{

        let ctx = Clock.id.getContext("2d");  
      
        //ctx.arc( Clock.coordDx,
        //         Clock.coordDy,
        //         Clock.radius,
        //         Clock.startAngle,
        //         Clock.endAngle ); 

        // Soru 15:36:12  Saat Dakika Saniye Kaç dereceye işaret eder. 
        let c_date = new Date();
        let hour = c_date.getHours();
        let minute = c_date.getMinutes();
        let seconds = c_date.getSeconds();

        // sin 0 ve cos 0 'ın oldugu saati biliyoruz 6 yada 18         
        // sin 30 * r = x 
        // cos 30 * r = y 
         
     
       let  i = 360 ;
       let Vector2 = {};

       
       let interval = setInterval(function(){
       ctx.beginPath();          

     
            Vector2.x = Math.sin(i * Math.PI / 180 ) * Clock.radius;   // sin30 = x / hipotenus
            Vector2.y = Math.cos(i * Math.PI / 180 ) * Clock.radius;   // con30 = y / hipotenus 
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


    Clock.SecHand=()=>{
        /// 1 saniye de 1 defa calis   => 1*1000 (Interval)
       /* 
        let secondView = document.getElementById("SecondView");
        let ctx_secondview = secondView.getContext("2d");           
        ctx_secondview.moveTo(0,0);
        ctx_secondview.lineTo(0,220);
        ctx_secondview.save();
        ctx_secondview.stroke();
        */
    }
    
    Clock.MinuteHand=()=>{
        // 60  saniye de 1 defa calis  => 60*1000(Interval)
        let ctx =  Clock.id.getContext("2d");
        ctx.moveTo(0,0);
        ctx.lineTo(-90,25); 
        ctx.stroke();
        Clock.now.getMinutes();

    };

    Clock.HourHand=()=>{
        // 3600 saniye de 1 defa calis  => 3600*1000 (Interval)  
        let ctx =  Clock.id.getContext("2d");
        ctx.moveTo(0,0);
        ctx.lineTo(50,65);
        ctx.stroke();
        Clock.now.getHours();

    };

    Clock.Shape(); 
   Clock.FindCoordinates();
   // Clock.MinuteHand();
   // Clock.HourHand();
   // Clock.SecHand();
//tests