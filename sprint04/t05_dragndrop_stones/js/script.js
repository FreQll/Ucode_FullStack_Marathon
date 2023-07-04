function drag(id) {
    let stone = document.getElementById(id);
    stone.setAttribute('activity', 'on');
    updateStyles();

    stone.onmousedown = function (e) {
        stone.style.position = 'absolute';
        moveAt(e);
        document.body.appendChild(stone);
        stone.style.zIndex = 1000;
    
        function moveAt(e) {
            stone.style.left = e.pageX - stone.offsetWidth  + 'px';
            stone.style.top = e.pageY - stone.offsetHeight  + 'px';
        }
    
        document.onmousemove = function(e) {
            moveAt(e);
        }
    
        stone.ondragstart = function() {
            return false;
        }
    
        stone.onmouseup = function() {
            document.onmousemove = null;
            stone.onmouseup = null;
        }
    }
}

function updateStyles() {
    let stones = document.getElementsByClassName('stone');
    for (let i = 0; i < stones.length; i++) {
        if (stones[i].getAttribute('activity') == 'off') {
            stones[i].className += " off";
        }
        else {
            stones[i].className += " on";
        }
    }
}

updateStyles();


