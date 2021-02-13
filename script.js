// API Calls
function searchMovies(movie) {
    $("#results").empty();

    // Youtube API Call
    let youtubeApiKey = "AIzaSyDBrUxXa2vD-HgvutwEKgqgiowdM_Ex0zc";
    let youtubeQueryURL = "https://www.googleapis.com/youtube/v3/search" + "?part=snippet&q=" + movie + "&type=video&videoCaption=closedCaption&key=" + youtubeApiKey;

    $.ajax({
        url: youtubeQueryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        let videoid = response.items[0].id.videoId
        console.log(videoid);
        let iframe = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoid}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

        // Empty the contents, append the new video
        $("#results").append(iframe);
    });

    // OMBD API Call
    let OMBDApiKey = "2c5e22f8";
    let OMBDQueryURL = "http://www.omdbapi.com/?apikey=" + OMBDApiKey + "?t=" + movie;


    $.ajax({
        url: OMBDQueryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        let videoid = response.items[0].id.videoId
        console.log(videoid);
    });
};

$("#searchButton").on("click", function () {
    event.preventDefault();
    let inputMovie = $("#findtext").val().trim();

    searchArtists(inputMovie);
});
