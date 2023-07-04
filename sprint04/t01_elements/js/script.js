let arr = document.querySelectorAll('li');

for (let i = 0; i < arr.length; i++) {
    let data_container = document.createElement('div');
    if (arr[i].className == undefined || arr[i].className != 'good' && arr[i].className != 'evil') {
        arr[i].className = 'unknown';
    }
    console.log(arr[i].getAttribute('data-element'));
    if (arr[i].getAttribute('data-element') == null) {
        let node = document.createElement('div');
        node.classList.add('elem');
        let line = document.createElement('div');
        line.classList.add('line');
        node.appendChild(line);
        data_container.appendChild(node);
    }
    else {
        let elements = arr[i].getAttribute('data-element').split(' ');
        for (let j = 0; j < elements.length; j++) {
            let node = document.createElement('div');
            node.classList.add('elem', elements[j]);
            data_container.appendChild(node);
        }
    }
    arr[i].appendChild(data_container);
}