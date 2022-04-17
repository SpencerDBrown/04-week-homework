setInterval( function() {
    time--;

    if( time >= 0 ){
        id = document.getElementById("time")
        id.innerHTML = time;
    }

    if( time === 0 ){
        //id.innerHTML = "Game Over!";
        alert("Game Over!")
    }
}, 1000);   