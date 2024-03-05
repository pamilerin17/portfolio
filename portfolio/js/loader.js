window.addEventListener('load',()=>{
    const load = document.querySelector('.loader');

    load.classList.add('loader-hidden');

    load.addEventListener('transitionend', ()=>{
        document.body.removeChild('loader');
    })
})