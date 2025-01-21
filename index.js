var dic_1 = Math.floor(6*Math.random())+1;
var dic_2 = Math.floor(6*Math.random())+1;


document.querySelector(".dice .img1").setAttribute("src" , "images/dice" + dic_1 + ".png");
document.querySelector(".dice .img2").setAttribute("src" , "images/dice" + dic_2 + ".png");

if(dic_1==dic_2)
{
    document.querySelector("h1").innerHTML="Draw!";
}
else if(dic_1>dic_2)
{
    document.querySelector("h1").innerHTML="🚩 Player "+ "1" + " Wins!";
}
else
{
    document.querySelector("h1").innerHTML="Player "+ "2" + " Wins! 🚩";
}