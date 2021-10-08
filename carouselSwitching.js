let appName = document.getElementById("carouselSwitching").getAttribute("data-appName");

var screenshots = [``];

switch (appName) {
    case `tarbus`: screenshots = [`iPhone.png`, `iPhone.png`, `iPhone.png`]; break;
    case `whatABrick`: screenshots = [`iPhone.png`, `iPhone.png`, `iPhone.png`]; break;
    case `foodtracker`: screenshots = [`iPhone.png`, `iPhone.png`, `iPhone.png`]; break;
    default: screenshots = []; break;
}

setScreenshots()

$(window).on(`resize`, function() {
    setScreenshots()
});

function setScreenshots() {
    let win = $(this);
    if (win.width() < 768) {
        $(`#screenshots`).html(`<div class="row"><div class="col-sm-12 col-md-6 align-content-center bigScreenshot pt-3 pt-md-0">\n` +
            `                    <div id="carouselControls" class="carousel carousel-dark slide" data-bs-ride="carousel">\n` +
            `                        <div class="carousel-inner">\n` +
            `                            <div class="carousel-item active">\n` +
            `                                <img src="/img/${screenshots[0]}" alt="tarBUS">\n` +
            `                            </div>\n` +
            `                            <div class="carousel-item">\n` +
            `                                <img src="/img/${screenshots[1]}" alt="tarBUS">\n` +
            `                            </div>\n` +
            `                            <div class="carousel-item">\n` +
            `                                <img src="/img/${screenshots[2]}" alt="tarBUS">\n` +
            `                            </div>\n` +
            `                        </div>\n` +
            `                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselControls" data-bs-slide="prev">\n` +
            `                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>\n` +
            `                            <span class="visually-hidden">Previous</span>\n` +
            `                        </button>\n` +
            `                        <button class="carousel-control-next" type="button" data-bs-target="#carouselControls" data-bs-slide="next">\n` +
            `                            <span class="carousel-control-next-icon" aria-hidden="true"></span>\n` +
            `                            <span class="visually-hidden">Next</span>\n` +
            `                        </button>\n` +
            `                    </div>\n` +
            `                </div></div>`);
    }
    else
    {
        $(`#screenshots`).html(`<div class="row">\n` +
            `                        <div class="col-md-4 bigScreenshot"><img src="../img/${screenshots[0]}" alt="tarBUS"></div>\n` +
            `                        <div class="col-md-4 bigScreenshot"><img src="../img/${screenshots[1]}" alt="tarBUS"></div>\n` +
            `                        <div class="col-md-4 bigScreenshot"><img src="../img/${screenshots[2]}" alt="tarBUS"></div>\n` +
            `                    </div>`);
    }
}