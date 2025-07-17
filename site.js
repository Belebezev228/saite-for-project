window.addEventListener("resize",Autoscale);
Autoscale();

function Autoscale()
{
    let width = window.innerWidth;

    if(width > 1280)
    {
        ChageScale('big');
    }
    else if (width <= 1200 && width > 720)
    {
        ChangeScale("normal");
    }
    else if(width < 720)
    {
        ChangeScale("small")
    }
}