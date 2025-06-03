const filterButtons = document.querySelectorAll('.category-btn')
filterButtons.forEach((button) => button.addEventListener('click', showVideos));

function showVideos(event) {
    const button = event.target;
    const category = button.getAttribute('data-category').toLowerCase();

    filtervideos(category);
    activeButton(butoon);
}

function filtervideos(category) {
    const videos = document.querySelectorAll('.video-card');

    for (const video of videos) {
        const [, videosCategoryElement] = video.getElementsByTagName('p');
        const videocategory = videosCategoryElement.innerText.toLowerCase();

        if (category === "all" || category === videocategory) {
            video.style.display = "block";
        } else {
            video.style.display = "none"
        }
    }

}

function activeButton(button) {
    filterButtons.forEach((butoon) => butoon.classList.remove("active"));

    button.classlist.add("active");
}