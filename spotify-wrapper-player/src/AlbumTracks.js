export default function renderAlbumTracks(data, element) {
    const markup = data.map((item,index) =>`
    <div class="music" data-track-preview="${item.preview_url}">
        <p class="music-number">${item.track_number}</p>
        <p class="music-title">${item.name}</p>
        <p class="music-duration">${item.duration_ms}</p>
    </div>`).join('');
    

    element.innerHTML = markup;
    
}
