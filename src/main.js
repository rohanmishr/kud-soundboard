let currentImage = 1;

setInterval(() => {
    document.querySelector('#sound-player-cover').innerHTML = document.querySelector('#sound-player-cover').innerHTML.replace(currentImage.toString(), (currentImage + 1).toString());
    currentImage++;

    if (currentImage == 9) {
        currentImage = 1;
    }
}, 5000);