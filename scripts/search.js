function searchVideo(event) {
    const search = event.target.value.toLowerCase();
    const videos = document.getElementsByClassName("video-card");

    for (const video of videos) {
        const [channelNameElement, categoryElement] = video.getElementsByTagName("p");

        const videoInfo = {
            title: video.getElementsByTagName("h3")[0].innerText.toLowerCase(),
            channelName: channelNameElement.innerText.toLowerCase(),
            category: categoryElement.innerText.toLowerCase()
        }

        video.style.display = "revert";

        if (!matches(videoInfo, search)) {
            video.style.display = "none";
        }
    }
}
function matches(videoInfo, searchTerm) {
    return (
        videoInfo.title.includes(searchTerm) ||
        videoInfo.channelName.includes(searchTerm) ||
        videoInfo.category.includes(searchTerm)
    );
}
