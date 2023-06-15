let ar=[];
let br=[];
function disableBtn() {
    document.getElementById("star").disabled = true;
}
function enableBtn() {
    document.getElementById("star").disabled = false;
}

function start()
{
    let f=document.getElementById("star");
    disableBtn();
    f.style.cursor="not-allowed";
    f.style.opacity="0";
let count =0;
while(count<25)
{
    let a=Math.round(Math.random()*25);if(a==0) continue;
    let ind=ar.findIndex((item)=>item==a);
    if(ind<0)
    {
        ar.push(a);count++;
    }
}
 mapping();

 let count2=0;
    while(count2<5)
    {
        let a=Math.round(Math.random()*25);
        if(a== ar[6]||a==ar[8] ||a==ar[16] ||a==ar[18] ||a==0) continue;

        let ind=br.indexOf(a);
        if(ind==-1) {
            br.push(a); count2++;
        }
    }

    let ab=document.getElementById("patt");
    ab.innerHTML=br[0]+" "+br[1]+" "+br[2]+" "+br[3]+" "+br[4];
    console.log(ab);
}
function mapping(){
    let c=1;
    ar.map((item)=>{
        let a=document.getElementById(`e${c}`);
        a.innerHTML=item;
        c++;
    });   
    

}

const timer= async ()=>
{
var counterSec=0,counterMin=0,counterHour=0;
const timer=setInterval(()=>{
    counterSec+=1;
    if(counterSec>59)
    {
        counterSec=0;
        counterMin+=1;
    }
    if(counterMin>59)
    {
        counterMin=0;
        counterHour+=1;
    }
    let sch=String(counterHour);
    let scm=String(counterMin);
    let scs=String(counterSec);
    if(counterHour<10)
    sch="0"+sch;
    if(counterMin<10)
    scm="0"+scm;
    if(counterSec<10)
    scs="0"+scs;
    document.getElementById("timer").innerHTML=""+sch+":"+scm+":"+scs;
},1000);
}
let move=(abc)=>{
    if(ar.length==0)
     location.reload();
    else{
        let ind=document.getElementsByClassName("ele");
        for(let i=1;i<=25;i++)
        {
            if(i!=7&&i!=9&&i!=17&&i!=19)
            ind[i-1].style.background="white";
        }
        let a=abc.substr(1);
        let b=Number(a);
        b-=7;
        let d=ar[b+2];
        ar[b+2]=ar[b+1];
        ar[b+1]=ar[b];
        ar[b]=ar[b+5];
        ar[b+5]=ar[b+10];
        ar[b+10]=ar[b+11];
        ar[b+11]=ar[b+12];
        ar[b+12]=ar[b+7];
        ar[b+7]=d;
        let i,w;
        for( i=b;i<=b+10;i+=5)
        {
            for(w=i;w<i+3;w++)
            {
                if(w==b+6) continue;
                 let c=document.getElementById(`e${w+1}`);
                 c.style.background="#FF7F50";
            }
        }
        mapping();
    } 
}

function submit()
{
    enableBtn();
    let flag=1;
    for(let i=0;i<5;i++)
    {
        if(br[i]!=ar[i+10])
         flag=0;
    }
    if(flag)
    {
        alert("congralution you won");
        
    }
    else
    {
        alert(" You loss,Better luck next time!")
    }
    location.reload();
}
