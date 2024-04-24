
document.addEventListener("DOMContentLoaded",assignEvents);
function assignEvents () {
     document.getElementById("image").addEventListener("mouseover", showImage);
document.getElementById("image").addEventListener("mouseleave", hideImage);
}

function showImage() {
    document.getElementById("image").src = "images/image2.png";
}
function hideImage() {
    document.getElementById("image").src = "images/image1.png";
}