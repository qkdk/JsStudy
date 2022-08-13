const images = ["img1.jpg", "img2.jpg", "img3.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

// append 뒤에 prepend 앞에
document.body.appendChild(bgImage);
