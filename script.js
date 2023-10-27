const drumButtons = document.querySelectorAll('.key');

drumButtons.forEach(btn => {
    btn.addEventListener('click', function () {
        const sound = createAudio(`./assets/sounds/${btn.classList[1]}.mp3`);
        sound.play();
    });
});

document.addEventListener('keydown', function (e) {
    const pressedKey = e.key;
    let audioName = '';

    switch (pressedKey) {
        case 'w':
            audioName = 'tom-1';
            break;
        case 'a':
            audioName = 'tom-2';
            break;
        case 's':
            audioName = 'tom-3';
            break;
        case 'd':
            audioName = 'tom-4';
            break;
        case 'j':
            audioName = 'snare';
            break;
        case 'k':
            audioName = 'kick-bass';
            break;
        case 'l':
            audioName = 'crash';
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
