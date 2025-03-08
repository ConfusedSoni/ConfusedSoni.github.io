const imageGallery = [
    "https://preview.redd.it/whats-the-hardest-kendrick-lamar-picture-you-have-seen-v0-wb4s2a4b7h5b1.jpeg?width=749&format=pjpg&auto=webp&s=3c2be4f82e3006ff254152b783d7470517942748",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoVVVirS1Z2pnnf_jMWgpqlkHP_3MaVxINyw&s",
    "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/08/22/08/frank-ocean-blonde.jpg?width=1200&height=1200&fit=crop",
    "https://media.gq.com/photos/62b36cf6113243fd5c7dd881/master/w_1600%2Cc_limit/STEVE_LACY_EDITED_v.2-6001.jpg",
    "https://media.gq.com/photos/582647025e05d0d72af0917c/1:1/w_1333,h_1333,c_limit/tribe-called-quest-2016-review.jpg",
    "https://yt3.googleusercontent.com/ytc/AIdro_nG4kBTH_JqCA5PUmjKbJZBTj3M6TsAJ0lfd-k3liFnVcE=s900-c-k-c0x00ffffff-no-rj",
    "https://m.media-amazon.com/images/I/41NKk2fHW6L._UF1000,1000_QL80_.jpg",
    "https://i1.sndcdn.com/artworks-000629631715-un4h3o-t500x500.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgotAnwTmXG9i4rRLLn8rkIPAjEH97BKpCjj6bD4gUJp4SH8o1qUcHEtxo0eJXrk5wTV09hLoSvjSf290uu0YDRvgww1tZeqwijUBhpIXlPpNwkxmdmhnYIw5ZYH2XCjIHa6FISARJzVBZN/s1600/DavisBowieAladdinSane.jpg",
    "https://upload.wikimedia.org/wikipedia/en/6/6f/It%27s_a_Hard_Life_%28Queen_album_-_cover_art%29.jpg",
    "https://static01.nyt.com/images/2009/05/03/arts/03pare_600.jpg?quality=75&auto=webp&disable=upscale",
    "https://i.pinimg.com/736x/b8/98/75/b89875d846fa08b0dda7c83dbc440e74.jpg",
    "https://www.billboard.com/wp-content/uploads/2022/12/metro-boomin-press-photo-2022-billboard-1548-1.jpg?w=942&h=623&crop=1",
    "https://faroutmagazine.co.uk/static/uploads/1/2022/11/Every-Weezer-album-ranked-from-worst-to-best-1140x855.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJz0T2cDqD9m8n_k4FqPsBoss1SSgG9UdRgg&s",
    "https://shssharkattack.com/wp-content/uploads/2017/11/Eminem.jpg",
    "https://assets.exclaim.ca/image/upload/v1703866908/up-Snoop_1.jpg",
    "https://i.redd.it/47ixhl5xmvnb1.jpg",
    "https://preview.redd.it/whats-the-hardest-kanye-picture-of-all-time-v0-mbzvvj8zddjc1.jpeg?width=320&crop=smart&auto=webp&s=6dfd34a5ea6ef0988e963ed6dee8919437b091d5",
    "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/16/19/Tupac.jpg",
]

const imageElement = document.getElementById("gallery-image");
const prevButton = document.getElementById(id="prev-btn");
const nextButton = document.getElementById(id="next-btn");

let currentImgIndex = 0;

function updateImage(){
    imageElement.src = imageGallery
    [currentImgIndex];

}

nextButton.addEventListener("click", function(){
       currentImgIndex = (currentImgIndex + 1) % imageGallery. length
       updateImage()
});

prevButton.addEventListener("click", function(){
    currentImgIndex = (currentImgIndex - 1 + imageGallery. length) % imageGallery. length
    updateImage()
});

updateImage();