var red = document.getElementById("div1")
var yellow = document.getElementById("div2")
var green = document.getElementById("div3")
var stopp = document.getElementById("b")
var startt = document.getElementById("bb")
var user = prompt("Input 'M' for manual or 'A' for automatic")

if (user === "A")
{
    startt.addEventListener('click', interval)
    function interval( )
    {
        var r=  setTimeout(function()
        {
            red.style.opacity="1"
            green.style.opacity ="0.3"
            yellow.style.opacity ="0.3"
            red.style.boxShadow="0px 0px 40px red"
            yellow.style.boxShadow="none"
            green.style.boxShadow="none"
            red.style.transition = "0.5s"
        },1000)

        var y =setTimeout(function()
        {
            yellow.style.opacity="1"
            red.style.opacity ="0.3"
            yellow.style.boxShadow="0px 0px 30px yellow"
            red.style.boxShadow="none"
            green.style.boxShadow="none"
            yellow.style.transition = "0.5s"
        },3000)    
        var g =setTimeout(function()
        {
            green.style.opacity="1"
            red.style.opacity="0.3"
            yellow.style.opacity="0.3"
            green.style.boxShadow="0px 0px 30px green"
            red.style.boxShadow="none"
            yellow.style.boxShadow="none"
            green.style.transition = "0.5s"
            
            setTimeout(function(){
            interval();
            },1000)

        },5000)
        stopp.addEventListener('click',function()
        {
            console.log("sss")
            clearInterval(r)
            clearInterval(y)
            clearInterval(g)
        })
    }
}

else if (user ==="M")
{
    startt.style.display = "none"
    stopp.style.display="none"
    red.style.opacity="1"
    red.style.boxShadow="0px 0px 30px red"
    
        red.addEventListener('click', function()
    {
        red.style.opacity="0.3"
        if(red.style.opacity==='0.3')
        {
            if(yellow.style.opacity==="1")
            {
                alert("you clicked on red, please click on green")
            }
            else
            {
                red.style.opacity="1"
                green.style.opacity ="0.3"
                yellow.style.opacity ="0.3"
                red.style.boxShadow="0px 0px 40px red"
                yellow.style.boxShadow="none"
                green.style.boxShadow="none"
                red.style.transition = "0.5s"
            }
        }
    })
    
    yellow.addEventListener('click', function()
    {
        yellow.style.opacity="0.3"
        if(yellow.style.opacity==='0.3')
        {
            if(green.style.opacity==="1")
            {
                alert("you clicked on yellow, please click on red")
            }
            else
            {
                yellow.style.opacity="1"
                red.style.opacity ="0.3"
                yellow.style.boxShadow="0px 0px 30px yellow"
                red.style.boxShadow="none"
                yellow.style.transition = "0.5s"
                green.style.boxShadow="none"
            }
        }
    })
    
    green.addEventListener('click', function()
    {
        green.style.opacity="0.3"
        if(green.style.opacity==='0.3')
        {
            if(red.style.opacity==="1")
            {
                alert("you clicked on green, please click on yellow")
            }
            else
            {
                green.style.opacity="1"
                red.style.opacity="0.3"
                yellow.style.opacity="0.3"
                green.style.boxShadow="0px 0px 30px green"
                red.style.boxShadow="none"
                yellow.style.boxShadow="none"
                green.style.transition = "0.5s"
            }
        }
    })
}
else if(user ==="")
{
    alert("empty input ")
}

else
{
    alert("invalid entry")
}