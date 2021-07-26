window.addEventListener('keyup', (ev) => {
    // blur activeElement
    if(ev.key === 'Escape') {
        document.activeElement.blur();
    }

    if(ev.key === 'ArrowUp') {
        if(document.activeElement.nodeName === 'BODY') {
            document.querySelector('li:last-child').childNodes[1].focus();
        }
        const items = document.activeElement.parentNode;
    }

    if(ev.key === 'ArrowDown') {}
});