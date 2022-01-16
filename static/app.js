const form = document.getElementById("form");
const searchResult = document.getElementById("searchResult");
var buttonGuide = document.querySelectorAll("#buttonGuide");
const buttonBar = document.getElementById("buttonBar");
var infoButton = document.querySelectorAll("#infoButton");

let volumes = [];
let search = "";
let last_index = 0;

const generateButtons = (buttonIndex) => {
    let html = "";
    html +=
    `<div class="btn-group me-2" role="group" aria-label="First group">
    <button id="buttonGuide" type="button" class="button-bar btn btn-primary">${buttonIndex}</button>
    <button id="buttonGuide" type="button" class="button-bar btn btn-primary">${buttonIndex + 1}</button>
    <button id="buttonGuide" type="button" class="button-bar btn btn-primary">${buttonIndex + 2}</button>
    <button id="buttonGuide" type="button" class="button-bar btn btn-primary">${buttonIndex + 3}</button>
    <button id="buttonGuide" type="button" class="button-bar btn btn-primary">${buttonIndex + 4}</button>
    <p class="d-block me-1">...</p>
    <button id="buttonGuide" type="button" class="button-bar btn btn-primary">${buttonIndex + 8}</button>
    </div>`;
    buttonBar.innerHTML = html;
    buttonGuide=document.querySelectorAll("#buttonGuide");
    for (const button of buttonGuide) {
    button.addEventListener("click", function() {
        let buttonIndex = parseInt(button.innerHTML);
        buttonSearch(buttonIndex);
    });
}
};

const buttonSearch = async(buttonIndex) => {
    let url = `https://www.googleapis.com/books/v1/volumes?q=${search}&startIndex=${(buttonIndex - 1) * 12}&maxResults=12&key=AIzaSyAE0EN46PbOyM_tOnc35d2psq605FSWGMQ`;
    console.log(url);
    console.log(search);
    try {
        const res = await fetch(url);
        volumes = await res.json();
    } catch(err) {
        //load sorry page
        searchResult.innerHTML = "<h1>ERROR</h1>";
        console.log(err);
    }
    if (volumes.error != undefined) {
        searchResult.innerHTML = "<h1>ERROR</h1>";
        return;
    }
    console.log(volumes);
    console.log(volumes.items[0]);
    console.log(volumes.items[0].volumeInfo.imageLinks);
    const html = volumes.items
    .map((volume) => {
        //let title = volume.volumeInfo.title === undefined ? "Title not found" : `${volume.volumeInfo.title.substr(0, Math.min())}`
        let source = volume.volumeInfo.imageLinks === undefined ? "static/error.jpg" : `${volume.volumeInfo.imageLinks.smallThumbnail}`;
        let authors = volume.volumeInfo.authors === undefined ? "Unknown Author" : `${volume.volumeInfo.authors.join("<br>")}`;
        if (authors.length > 22) {
            authors = authors.substr(0,22) + "...";
        }
        let description = volume.volumeInfo.description === undefined ? "Description not found" : `${volume.volumeInfo.description}`;
        console.log(volume.id)
        return `
        <div class="col-sm-4 col-md-3 d-flex justify-content-center mb-2">
            <div class="card">
                <img src=${source} class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">${volume.volumeInfo.title}</h5>
                    <h6 class="card-subtitle" style="color: gray;">${authors}</h6>
                    <p class="card-text" style="height: 12rem;">${description}</p>
                    <a href=${volume.volumeInfo.infoLink} target="blank" <button name="submit_button" id="infoButton" value=${volume.id} type="submit" class="btn btn-primary">More info</button></a>
                </div>
            </div>
        </div>
        `;
    })
    .join("");
    generateButtons(buttonIndex);
    searchResult.innerHTML = html;
};



form.addEventListener("submit", function(e) {
    search = form.query.value
    if (search === "") {
        alert("Enter a valid search!");
        return false;
    }
    search = search.replaceAll(" ","+");
    console.log(search);
    buttonSearch(1);
    e.preventDefault();
});











