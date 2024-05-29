
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