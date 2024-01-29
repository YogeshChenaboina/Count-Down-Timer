const endDate="29 January 2024 6:19 PM";
document.getElementById("end-date").innerHTML=endDate;
const inputs=document.querySelectorAll("input");
function clock()
{
    const end=new Date(endDate);
    const now=new Date();
    const diff=(end-now)/1000;
    if(diff<0) return;
    inputs[0].value=Math.floor(diff/3600/24);
    inputs[1].value=Math.floor((diff/3600)%24);
    inputs[2].value=Math.floor((diff/60)%60);
    inputs[3].value=Math.floor(diff%60);
    //1 day=24hrs
    //1 hr=60min
    //1min=60s
}
//Inital call
clock();
//every one second call
setInterval(
    ()=>{
        clock();
    } 
)