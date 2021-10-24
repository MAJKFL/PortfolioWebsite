let appName = document.getElementById("carouselSwitching").getAttribute("data-appName");

let screenshots = [``];
let subtitle = ""
let lastScreenSize = $(window).width();

switch (appName) {
    case `tarbus`: screenshots = [`iPhone.png`, `iPhone.png`, `iPhone.png`]; subtitle = "Your pocket bus timetable"; break;
    case `What A Brick`: screenshots = [`iPhone.png`, `iPhone.png`, `iPhone.png`]; subtitle = "Identify your brick with AI!"; break;
    case `foodtracker`: screenshots = [`iPhone.png`, `iPhone.png`, `iPhone.png`]; subtitle = "Everything about foodtrucks!"; break;
    default: screenshots = []; break;
}

setScreenshots()

$(window).on(`resize`, function() {
    if (lastScreenSize < 768 && $(window).width() > 768 || lastScreenSize > 768 && $(window).width() < 768) {
        setScreenshots()
        lastScreenSize = $(window).width();
    }
});

function setScreenshots() {
    let win = $(this);
    if (win.width() < 768) {
        $(`#screenshots`).html(`<div class="row"><div class="col-sm-12 col-md-6 align-content-center bigScreenshot bigHeader pt-3 pt-md-0">\n` +
            `                    <h1 class="elementToFadeAndSlideIn1">Wonderful icons</h1>`+
            `                    <h5 class="elementToFadeAndSlideIn2">WWDC21 entry</h5>`+
            `                    <div id="carouselControls" class="carousel carousel-dark slide elementToFadeAndSlideIn3" data-bs-ride="carousel">\n` +
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
        $(`#screenshots`).html(`<div class="row bigHeader">\n` +
            `                        <div class="col-12a mb-3"><h1 class="elementToFadeAndSlideIn1">${appName}</h1><h5 class="elementToFadeAndSlideIn2">${subtitle}</h5></div>`+
            `                        <div class="col-md-4 bigScreenshot elementToFadeAndSlideIn3"><img src="../img/${screenshots[0]}" alt="tarBUS"></div>\n` +
            `                        <div class="col-md-4 bigScreenshot elementToFadeAndSlideIn3"><img src="../img/${screenshots[1]}" alt="tarBUS"></div>\n` +
            `                        <div class="col-md-4 bigScreenshot elementToFadeAndSlideIn3"><img src="../img/${screenshots[2]}" alt="tarBUS"></div>\n` +
            `                    </div>`);
    }
}