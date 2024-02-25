function startProgress() {
    const progressBar = document.getElementById('progress');
    let progress = 0;
    const increment = 1;

    const interval = setInterval(() => {
        console.log(progress)
        progress += increment;
        progressBar.style.width = `${progress}%`;

        if (progress >= 100) {
            clearInterval(interval);
            progress = 0;
            progressBar.style.width = `${progress}%`;
        }
    }, 10);
}