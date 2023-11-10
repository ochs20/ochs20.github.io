const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = [
    "images/pic1.jpg", 
    "images/pic2.jpg", 
    "images/pic3.jpg", 
    "images/pic4.jpg", 
    "images/pic5.jpg"
];

/* Declaring the alternative text for each image file */
const altText = {
    "image1": "Taylor Concert",
    "image2": "Taylor Lover",
    "image3": "Taylor Midnights",
    "image4": "Taylor Folklore",
    "image5": "Taylor Evermore"
}

/* Looping through images */
//for (let i = 0; i < images.length; i++){}//

for (let i = 0; i < images.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', images[i]);
    newImage.setAttribute('alt', altText['image'+ (i+1)]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', function () {
        displayImage(i);
    });
}

/* Display Image function */
function displayImage(index) {
    displayedImage.setAttribute('src', images[index]);
   displayedImage.setAttribute('alt', altText['image'+ (index + 1)]);
}


/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
    if (btn.getAttribute("class") == "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
        return;
    }
    if (btn.getAttribute("class") == "light") {
        btn.setAttribute("class", "dark");
        btn.textContent = "darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
        return;
    }
});