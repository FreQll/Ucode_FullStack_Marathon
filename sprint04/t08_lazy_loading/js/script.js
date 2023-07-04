function lazyLoading() {
    let images = Array.from(document.querySelectorAll('img[data-src]'));
    let loadedCount = 0;
    function loadImage(img) {
        let rect = img.getBoundingClientRect();
        let viewportHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top >= 0 && rect.top <= viewportHeight) {
          let src = img.getAttribute('data-src');
          img.setAttribute('src', src);
          img.removeAttribute('data-src');
          img.style.display = 'block';
          loadedCount++;
          showMessage(`${loadedCount} images loaded from 20`, 'red');
        }
    }

    function scrollInf() {
        images.forEach(img => {
            if (img.hasAttribute('data-src')) {
                loadImage(img);
            }
        });
        if (loadedCount == images.length) {
            showMessage('20 images loaded from 20', 'green');
            setTimeout(hideMessage, 3000);
            window.removeEventListener('scroll', scrollInf);
        }
    }

    function showMessage(message, color) {
        let elem = document.getElementById('message');
        elem.textContent = message;
        elem.style.backgroundColor = color;
    }

    function hideMessage() {
        let elem = document.getElementById('message');
        elem.textContent = '';
        elem.style.backgroundColor = '';
    }

    window.addEventListener('scroll', scrollInf);
    scrollInf();
}

lazyLoading();