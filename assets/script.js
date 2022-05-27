function onLoadPage(){
    const slideToLoad = document.querySelector(`#${window.location.search.split('=')[1]}`);
    switch (window.location.pathname.split('/')[2]) {
        case "nouvelles-technologies.html":
            if (window.location.search) {
                scrollSlide(window.location.search.split('=')[1]);
            }
            break;
        case "10-bonnes-raisons.html":
            if (slideToLoad) {
                slideToLoad.classList.replace('d-none', 'd-block');
            }
            else{
                document.querySelector('#intro').classList.replace('d-none', 'd-block');
            }
            break;
        default:
            break;
    }
}

onLoadPage();