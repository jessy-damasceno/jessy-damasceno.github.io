const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const memeInsert = document.querySelector('#meme-insert');
const image = document.querySelector('#meme-image');
const imgContainer = document.querySelector('#meme-image-container');
const fireBtn = document.querySelector('#fire');
const waterBtn = document.querySelector('#water');
const earthBtn = document.querySelector('#earth');
const meme1 = document.querySelector('#meme-1');
const meme2 = document.querySelector('#meme-2');
const meme3 = document.querySelector('#meme-3');
const meme4 = document.querySelector('#meme-4');

function loadFile(event) { // https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded
  image.src = URL.createObjectURL(event.target.files[0]);
}

function showText() {
  memeText.innerText = textInput.value;
}

function addFire() {
  imgContainer.classList = '';
  imgContainer.classList.add('fire');
}

function addWater() {
  imgContainer.classList = '';
  imgContainer.classList.add('water');
}

function addEarth() {
  imgContainer.classList = '';
  imgContainer.classList.add('earth');
}

function addMeme1() {
  image.src = meme1.src;
}

function addMeme2() {
  image.src = meme2.src;
}

function addMeme3() {
  image.src = meme3.src;
}

function addMeme4() {
  image.src = meme4.src;
}

textInput.addEventListener('input', showText);
fireBtn.addEventListener('click', addFire);
waterBtn.addEventListener('click', addWater);
earthBtn.addEventListener('click', addEarth);
meme1.addEventListener('click', addMeme1);
meme2.addEventListener('click', addMeme2);
meme3.addEventListener('click', addMeme3);
meme4.addEventListener('click', addMeme4);
memeInsert.addEventListener('click', loadFile);
