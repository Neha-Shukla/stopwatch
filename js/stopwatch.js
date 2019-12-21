function stopwatch(elem)
    {
        var time=0;
        var interval=0;
        var offset=0;
        function update()
        {
            time+=delta();
            var formattedtime=timeformatter(time);
            elem.textContent=formattedtime;
        }
        function delta()
        {
            var now=Date.now();
            var timePassed=now-offset;
            offset=now;
            return timePassed;
        }
        function timeformatter(time)
        {
            var time=new Date(time);
            var min=time.getMinutes().toString();
            var sec=time.getSeconds().toString();
            var millisec=time.getMilliseconds().toString();
            if(min.length<2)
            {
                min='0'+min;
            }
            if(sec.length<2)
            {
                sec='0'+sec;
            }
            while(millisec.length<3)
            {
                millisec='0'+millisec;
            }
            return min+':'+sec+'.'+millisec;
        }
        this.isOn=false;
        this.start=function()
        {
          if(!this.isOn)
          {
              interval=setInterval(update,10);
              offset=Date.now();
              this.isOn=true;
          }
        };
        this.stop=function()
        {
          if(this.isOn)
          {
              clearInterval(interval);
              interval=null;
              this.isOn=false;
          }
        };
        this.reset=function()
        {
           time=0;
           update();
        };
    }
var watch=new stopwatch();
watch.start();