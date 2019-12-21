var timer=document.getElementById('timer');
var togglebtn=document.getElementById('toggle');
var resetbtn=document.getElementById('reset');
watch=new stopwatch(timer);
togglebtn.addEventListener('click',function()
{ 
    if(watch.isOn)
    {
        watch.stop();
    }
    else
    {    
        watch.start();
    }
});
resetbtn.addEventListener('click',function()
{ 
   watch.reset();
});