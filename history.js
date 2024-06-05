//for making the video frame part interactive

document.addEventListener("DOMContentLoaded", function() {
    const videosContainer = document.getElementById("videos");
    let currentPosition = 0;
    let videoWidth = videosContainer.scrollWidth;

    function scrollVideos() {
        currentPosition += 300; // Width of each video iframe
        if (currentPosition >= videoWidth) {
            currentPosition = 0;
        }
        videosContainer.style.transform = `translateX(-${currentPosition}px)`;
    }

    setInterval(scrollVideos, 20000); // Scrolls right every 20 seconds
});
