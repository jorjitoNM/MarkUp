

document.getElementById("calculate").addEventListener("click", calculateRadius);
function calculateRadius() {
    let radio = document.getElementById("radius").value;
    document.getElementById("volume").value = (Math.pow(radio, 3) * (4 / 3) * Math.PI);
}