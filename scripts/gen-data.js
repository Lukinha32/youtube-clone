import { faker } from 'https://esm.sh/@faker-js/faker';

const videoGrid = document.getElementById('videos');
const VIDEOS_CATEGORIES = ['music', 'sports', 'gaming'];

for (const _ of Array(5)) {
    const videoInfo = {
        title: faker.commerce.productName(),
        thumbnail: faker.image.urlPicsumPhotos({ width: 1280, height: 720 }),
        channelName: faker.company.name(),
        category: faker.helpers.arrayElement(VIDEOS_CATEGORIES)
    }
    const video = createVideo (videoInfo);
    videoGrid.appendChild(video)
}

function createVideo(videoInfo) {
    const videoCard = document.createElement('div');
    videoCard.classList.add('video-card');
    videoCard.classList.add(videoInfo.category)

    const videoThumbnail = document.createElement('img')
    videoThumbnail.scr = videoInfo.thumbnail;
    videoThumbnail.alt = 'video thumbnail';

    const videoTitle = document.createElement('h3');
    videoTitle.textContent = videoInfo.title;

    const videochannel = document.createElement('p')
    videochannel.textContent = videoInfo.category

    const videoCategory = document.createElement('p');
    videoCategory.textContent = videoInfo.category;

    videoCard.appendChild(videoThumbnail);
    videoCard.appendChild(videoTitle);
    videoCard.appendChild(videochannel);
    videoCard.appendChild(videoCategory);

    return videoCard;

}
