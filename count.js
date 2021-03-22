var c=0;
function inc()
{c=c+1;
    document.getElementById("h1").innerHTML=c;

}
function dec()
{c=c-1;
    document.getElementById("h1").innerHTML=c;

}
function refresh()
{
    document.getElementById("h1").innerHTML=0;
    c=0;
}
