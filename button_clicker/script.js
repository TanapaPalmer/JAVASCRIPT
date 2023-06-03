function LogIn(e) {
    e.innerText = "Log Out";
}


function morelikes(element){
    var like = parseInt(element.innerText);
    like++
    alert ("Ninja was liked");
    element.innerText = `${like} Likes`
}

