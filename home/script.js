const home = document.getElementById('home');
const git = document.getElementById('github');
const profile = document.getElementById('profile');
const linkedin = document.getElementById('linkedin');
const spanHome = document.getElementById('span-home');
const spanGit = document.getElementById('span-git');
const spanProfile = document.getElementById('span-profile');
const spanLink = document.getElementById('span-linkedin');
const spans = document.getElementsByTagName('span');


function homeColor() {
  document.body.style.backgroundColor = 'rgb(229, 169, 54)';
  spanHome.style.display = 'inline';
}

function gitColor() {
  document.body.style.backgroundColor = 'rgba(30, 30, 30, 0.8)';
  spanGit.style.display = 'inline';
}

function profileColor() {
  document.body.style.backgroundColor = 'green';
  spanProfile.style.display = 'inline';
}

function linkedinColor() {
  document.body.style.backgroundColor = 'rgb(8, 120, 172)';
  spanLink.style.display = 'inline';

}

function retornaCor() {
  document.body.style.backgroundColor = 'rgb(229, 169, 54)';
  for (let span of spans) {
    span.style.display = 'none';
  }
}

function wow() {
  console.log(`

  \  (oo)\_______
     (__)\       )\/\
         ||----w |
         ||     ||                `);
}

var x = window.matchMedia("(max-width: 700px)")

if (x.matches) {
  home.addEventListener('mouseover', homeColor);
  home.addEventListener('click', wow)
  home.addEventListener('mouseout', retornaCor);
  
  git.addEventListener('mouseover', gitColor);
  git.addEventListener('mouseout', retornaCor);
  
  profile.addEventListener('mouseover', profileColor);
  profile.addEventListener('mouseout', retornaCor);
  
  linkedin.addEventListener('mouseover', linkedinColor);
  linkedin.addEventListener('mouseout', retornaCor);
}