var ns = ['Breaking news', 'Top news']
var limiter = true
setTimeout(() => {
    let divs = document.querySelectorAll('div#dismissible');
    let targetDiv = Array.from(divs).find(div => {
        let span = div.querySelector('span#title');
        return span && ns.includes(span.textContent.trim());;
    });

    if (targetDiv) {
        console.log('Element removed:', targetDiv);
        targetDiv.remove()
    } else
        console.log('Element 404');
}, 3000);


window.addEventListener('scroll', function () {
    if (limiter) {
        limiter = false
        if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
            let divs = document.querySelectorAll('div#dismissible');
            let targetDiv = Array.from(divs).find(div => {
                let span = div.querySelector('span#title');
                return span && ns.includes(span.textContent.trim());
            });

            if (targetDiv) {
                console.log('Element removed:', targetDiv);
                targetDiv.remove()
            } else {
                console.log('Element 404');
            }
            setTimeout(() => {
                limiter = true
            }, 3000);
        }
    }

});




  