console.log('This is code.js')

let dropBtn = document.getElementById('drop-btn')


dropBtn.addEventListener('click', toggle)



function toggle() {
    console.log('Button clicked');

    let x = document.getElementById("drop-content")
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
