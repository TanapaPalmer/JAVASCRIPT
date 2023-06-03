var vid = document.getElementsByClassName("vids");
[].forEach.call(vid, function (item) {
    item.addEventListener('mouseover', onmouseover, false);
    item.addEventListener('mouseout', onmouseout, false);
});

function onmouseover(e)
{   
    this.play();
}
function onmouseout(e)
{
    this.pause();
}

var vid = document.getElementsByClassName("big-v");
[].forEach.call(vid, function (item) {
    item.addEventListener('mouseover', onmouseover, false);
    item.addEventListener('mouseout', onmouseout, false);
});

function onmouseover(e)
{   
    this.play();
}
function onmouseout(e)
{
    this.pause();
}