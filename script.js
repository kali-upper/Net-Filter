function addYouTubeVideo(videoId, title, containerId) {
    const videoEmbedUrl = `https://www.youtube.com/embed/${videoId}?controls=1`;
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
    
    const videoCard = `
        <div class="video-card">
            <iframe width="100%" height="315" src="${videoEmbedUrl}" frameborder="0" allowfullscreen allow="autoplay; encrypted-media"></iframe>
            <div class="video-content">
                <h2 class="video-title">${title}</h2>
                <a href="${videoUrl}" target="_blank" class="video-link">Watch Now</a>
                <button class="theater-mode-btn" onclick="toggleTheaterMode(this)">Theater Mode</button>
            </div>
        </div>
    `;
    document.querySelector(`#${containerId}`).innerHTML += videoCard;
}
function toggleTheaterMode(button) {
    const videoCard = button.closest('.video-card');
    videoCard.classList.toggle('theater-mode');
}
document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeIcon.textContent = "🌞";
    } else {
        document.body.classList.add("light-mode");
        themeIcon.textContent = "🌙";
    }

    themeToggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeIcon.textContent = "🌞";
            localStorage.setItem("theme", "dark");
        } else {
            themeIcon.textContent = "🌙";
            localStorage.setItem("theme", "light");
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const uploadInput = document.getElementById("upload-video");
    const uploadButton = document.getElementById("custom-upload-button");
    const uploadedVideosContainer = document.getElementById("uploaded-videos-container");

    uploadButton.addEventListener("click", () => uploadInput.click());

    uploadInput.addEventListener("change", (event) => {
        const file = event.target.files[0];
        if (file) {
            const videoUrl = URL.createObjectURL(file);
            addUploadedVideo(videoUrl, file.name);
        }
    });
    function addUploadedVideo(videoUrl, videoName) {
        const videoCard = `
            <div class="video-card">
                <video width="100%" height="315" controls>
                    <source src="${videoUrl}" type="video/mp4">
                    متصفحك لا يدعم تشغيل الفيديو.
                </video>
                <div class="video-content">
                    <h2 class="video-title">${videoName}</h2>
                    <button class="theater-mode-btn" onclick="toggleTheaterMode(this)">Theater Mode</button>
                </div>
            </div>
        `;
        uploadedVideosContainer.innerHTML += videoCard;
    }
});
const backToTop = document.getElementById('back-to-top');
backToTop.addEventListener('click', () => {
window.scrollTo({ top: 0, behavior: 'smooth' });
});
document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("search-button");
    const searchInput = document.getElementById("search-input");
    const allVideos = document.querySelectorAll(".video-card");

    searchButton.addEventListener("click", () => {
        const searchQuery = searchInput.value.toLowerCase();
        let found = false;
        allVideos.forEach((videoCard) => {
            const title = videoCard.querySelector(".video-title").textContent.toLowerCase();
            if (title.includes(searchQuery)) {
                videoCard.style.display = "block";
                found = true;
            } else {
                videoCard.style.display = "none";
            }
        });

        if (!found) {
            alert("لم يتم العثور على فيديوهات تطابق البحث.");
        }
    });
});
searchButton.addEventListener("click", () => {
    const searchQuery = searchInput.value.toLowerCase();
    let found = false;
    allVideos.forEach((videoCard) => {
        const title = videoCard.querySelector(".video-title").textContent.toLowerCase();
        if (title.includes(searchQuery)) {
            videoCard.style.display = "block";
            found = true;
        } else {
            videoCard.style.display = "none";
        }
    });

    if (!found) {
        alert("لم يتم العثور على فيديوهات تطابق البحث.");
    }
});