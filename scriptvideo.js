
    var video = document.querySelector('.video');
    var playPauseButton = document.querySelector('.play-pause-btn');
    var playIcon = document.querySelector('#play-icon');
    var pauseIcon = document.querySelector('#pause-icon');
    var volumeButton = document.querySelector('.volume-btn');
    var volumeIcon = document.querySelector('#volume-icon');
    var volumeControlContainer = document.querySelector('.volume-control-container');
    var volumeRange = document.querySelector('.volume-range');
    
    // Função para alternar entre play/pause
    function togglePlay() {
        if (video.paused) {
            video.play();
            playIcon.style.display = 'none'; // Oculta o ícone de play
            pauseIcon.style.display = 'inline'; // Exibe o ícone de pause
            playPauseButton.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
            playPauseButton.style.borderColor = 'rgba(255, 255, 255, 0.8)';
        } else {
            video.pause();
            playIcon.style.display = 'inline'; // Exibe o ícone de play
            pauseIcon.style.display = 'none'; // Oculta o ícone de pause
            playPauseButton.style.backgroundColor = 'transparent';
            playPauseButton.style.borderColor = 'rgba(255, 255, 255, 0.5)';
        }
    }

    // Função para alternar o volume
    function toggleVolume() {
        if (volumeControlContainer.style.display === 'none' || volumeControlContainer.style.display === '') {
            volumeControlContainer.style.display = 'block'; // Exibe a barra de volume
        } else {
            volumeControlContainer.style.display = 'none'; // Esconde a barra de volume
        }
    }

    // Função para ajustar o volume
    function setVolume(value) {
        video.volume = value;
        // Após o ajuste, a barra de volume some
        volumeControlContainer.style.display = 'none';
    }

    // Adicionando eventos para play/pause
    video.addEventListener('play', function() {
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'inline';
        playPauseButton.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        playPauseButton.style.borderColor = 'rgba(255, 255, 255, 0.8)';
    });

    video.addEventListener('pause', function() {
        playIcon.style.display = 'inline';
        pauseIcon.style.display = 'none';
        playPauseButton.style.backgroundColor = 'transparent';
        playPauseButton.style.borderColor = 'rgba(255, 255, 255, 0.5)';
    });

    // Inicializando o estado do ícone de play
    if (video.paused) {
        playIcon.style.display = 'inline';
        pauseIcon.style.display = 'none';
    } else {
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'inline';
    }

    // Inicializando o controle de volume
    video.volume = 1; // Volume inicial em 100%

