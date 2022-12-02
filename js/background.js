const images = ["falcon.jpg", "universe.jpg", "Your-Name.jpg", "thumb.jpg"];

function painting() {
  const RandomNumber = Math.floor(Math.random() * images.length);

  body.style.backgroundImage = `url(img/${images[RandomNumber]})`;
}
painting();
setInterval(painting, 15000);
