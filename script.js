const drumButtons = document.querySelectorAll('.key');

drumButtons.forEach(btn => {
    btn.addEventListener('click', function () {
        const sound = createAudio(`./assets/sounds/${btn.classList[1]}.mp3`);
        btn.classList.add('playing');
        sound.play();
    });

    btn.addEventListener('transitionend', function (e) {
        if (e.propertyName !== 'transform') {
            return;
        }
        this.classList.remove('playing');
    });
});

document.addEventListener('keydown', function (e) {
    const pressedKey = e.key;
    let audioName = '';

    switch (pressedKey) {
        case 'w':
            audioName = 'tom-1';
            addClass(drumButtons[0], 'playing');
            break;
        case 'a':
            audioName = 'tom-2';
            addClass(drumButtons[1], 'playing');
            break;
        case 's':
            audioName = 'tom-3';
            addClass(drumButtons[2], 'playing');
            break;
        case 'd':
            audioName = 'tom-4';
            addClass(drumButtons[3], 'playing');
            break;
        case 'j':
            audioName = 'snare';
            addClass(drumButtons[4], 'playing');
            break;
        case 'k':
            audioName = 'kick-bass';
            addClass(drumButtons[5], 'playing');
            break;
        case 'l':
            audioName = 'crash';
            addClass(drumButtons[6], 'playing');
            break;
        default:
            return;
    }

    const sound = createAudio(`./assets/sounds/${audioName}.mp3`);
    sound.play();
});

function createAudio(audioName) {
    const sound = new Audio(audioName);
    return sound;
}

function addClass(element, className) {
    element.classList.add(className);
}
