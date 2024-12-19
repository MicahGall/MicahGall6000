Skip to content
DEV Community
Find related posts...
Powered by  Algolia
Log in
Create account

2
Jump to Comments

0
Save

Boost

Codewithrandom Blogs
Codewithrandom Blogs
Posted on Jun 5, 2023


6
Car Racing Game Using HTML and JavaScript Code
Hello Coder! Welcome to the Codewithrandom blog. In this blog, we learn how to create the Car Racing Game Using Html, Css, and JavaScript Code. In this car game, we have score and highest score. It's a basic car game project in which the developer will learn about the javascript and CSS concepts that help them build their skill set and their core skill set in web development.

A car race is a straightforward racing game in which several vehicles compete against one another. A higher score is awarded to the player who successfully crosses every vehicle without colliding. To continue the game, the player must keep his car safe from other hazards; if the car crashes, the user will see the top score.

I hope you enjoy our blog so let's start with a basic html structure for the Car Racing Game. 

Car Game Html Code:-
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Game</title>
<link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet">
<link rel="stylesheet" href="newgame.css">
<!-- <script src="newgame.js"></script> -->
</head>
<body>
<div class="game">
<div class="score"></div>
<div class="highScore"></div>
<div class="startScreen">
<p class="ClickToStart">Click here to start the game <br><br></p>
<p> INSTRUCTIONS: <br>
Use Arrow keys to move the car <br>
If you hit any car then game will end</p>
</div>
<div class="gameArea"></div>
</div>
<script src="game.js"></script>
</body>
</html>
The container for our game will be made using the div> element with the class "game," and inside of that container, containers for the "score," "high score," and "startScreen" will be made. Now, inside the start screen, we will add a paragraph for clicking to start as well as directions for the player using the p tag.

The div tag with the class "gameArea" will then be used to make a container for our game area.

There is all the html code for the Car Racing Game. Now, you can see an output with Css and JavaScript. then we write Css for styling Car Game and use JavaScript for the main functionality of Racing in Car Game.

CSS Code For Car Racing Game:-
 * {
margin: 0;
padding: 0;
font-family: 'Lobster', cursive;
}
.game{
background-image: url(bg.jpg);
background-repeat: no-repeat;
background-size: 100% 100%;
}
.hide {
display: none;
}
.startScreen {
width: 500px;
height: 107px;
line-height: 20px;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 2;
margin: auto;
background-color: rgb(43, 205, 226);
text-align: center;
border-bottom: 2px solid rgb(132, 197, 197);
}
.score,
.highScore {
position: absolute;
top: 10px;
left: 20px;
text-align: center;
background-color: rgb(100, 224, 156);
width: 200px;
color: rgb(59, 40, 40);
line-height: 40px;
border-radius: 4px;
font-size: 1.2em;
}
.ClickToStart {
cursor: pointer;
}
.gameArea {
height: 100vh;
width: 400px;
margin: auto;
position: relative;
background-color: rgb(32, 32, 32);
overflow: hidden;
border-left: 4px dashed white;
border-right: 4px dashed white;
}
.car{
background: url(car.png);
background-repeat: no-repeat;
background-size: 100% 100%;
height: 75px;
width: 50px;
position: absolute;
top: 520px;
}
.Opponents {
background: url(opponent car.png);
background-repeat: no-repeat;
background-size: 100% 100%;
height: 75px;
width: 50px;
position: absolute;
top: 520px;
}
.roadLines {
height: 100px;
width: 10px;
background-color: white;
position: absolute;
margin-left: 195px;
}
Step 1: Using the universal selector (*) we will set the padding and margin as "zero" and using the font-family property we will set the font family as "lobster".

Now using the class selector we will select the game container and we will add a background to our using the background property "background-repeat" we will set as"no-repeat" and using the background-size property we will set the background as "100%".

* {
    margin: 0;
    padding: 0;
    font-family: 'Lobster', cursive;
}

.game {
    background-image: url(bg.jpg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
Step2: The start page class selector will now receive styling. We will set the background colour to sky blue, the width and height to 500px and 107px, respectively. We will also use the line height property to set the line height as "20px," the top and left properties to add 50% space from the top and left, and the z index property to set their z-axis value to 2.

.startScreen {
    width: 500px;
    height: 107px;
    line-height: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    margin: auto;
    background-color: rgb(43, 205, 226);
    text-align: center;
    border-bottom: 2px solid rgb(132, 197, 197);
}
Step3: We will set the game area's height and breadth to "100vh" and 400px using the class selector (.gameArea). Additionally, we'll set the border property to "auto" and the overflow property to "hidden" using their respective properties.

The width and height will be set using the class selector to add styling to the cars and the roadlines, and the position property will be used to establish the position as "absolute."

.gameArea {
    height: 100vh;
    width: 400px;
    margin: auto;
    position: relative;
    background-color: rgb(32, 32, 32);
    overflow: hidden;
    border-left: 4px dashed white;
    border-right: 4px dashed white;
}

.car {
    background: url(car.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 75px;
    width: 50px;
    position: absolute;
    top: 520px;
}

.Opponents {
    background: url('opponent car.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 75px;
    width: 50px;
    position: absolute;
    top: 520px;
}

.roadLines {
    height: 100px;
    width: 10px;
    background-color: white;
    position: absolute;
    margin-left: 195px;
}
This completes the CSS code for the auto-racing games. This code should be copied and pasted into style.css or any other CSS file you've made.

Car Racing Game JavaScript Code:-
const score = document.querySelector('.score');
const highScore = document.querySelector('.highScore');
const startScreen = document.querySelector('.startScreen');
const gameArea = document.querySelector('.gameArea');
const ClickToStart = document.querySelector('.ClickToStart');
// const grass = document.querySelector('.grass');
// const garden = document.querySelector('.garden');
ClickToStart.addEventListener('click', Start);
document.addEventListener('keydown', keydown);
document.addEventListener('keyup', keyup);
let keys = {
ArrowUp: false,
ArrowDown: false,
ArrowLeft: false,
ArrowRight: false,
}
let player = {
speed: 5,
score: 0,
highScore: 0
};
function keydown(e) {
keys[e.key] = true
}
function keyup(e) {
keys[e.key] = false;
}
// starting the game
function Start() {
gameArea.innerHTML = "";
startScreen.classList.add('hide');
player.isStart = true;
player.score = 0;
window.requestAnimationFrame(Play);
// creating the road lines
for (i = 0; i < 5; i++) {
let roadLines = document.createElement('div');
roadLines.setAttribute('class', 'roadLines');
roadLines.y = (i * 140);
roadLines.style.top = roadLines.y + "px";
gameArea.appendChild(roadLines);
}
// creating the opponents car
for (i = 0; i < 3; i++) {
let Opponents = document.createElement('div');
Opponents.setAttribute('class', 'Opponents');
Opponents.y = ((i) * -300);
Opponents.style.top = Opponents.y + "px";
gameArea.appendChild(Opponents);
Opponents.style.left = Math.floor(Math.random() * 350) + "px";
Opponents.style.backgroundColor=randomColor();
}
let car = document.createElement('div');
car.setAttribute('class', 'car');
gameArea.appendChild(car);
player.x = car.offsetLeft;
player.y = car.offsetTop;
}
function randomColor(){
function c(){
let hex=Math.floor(Math.random()*256).toString(16);
return ("0"+String(hex)).substr(-2);
}
return "#"+c()+c()+c();
}
//play the game
function Play() {
let car = document.querySelector('.car');
let road = gameArea.getBoundingClientRect();
if (player.isStart) {
moveLines();
moveOpponents(car);
if (keys.ArrowUp && player.y > (road.top + 70)) { player.y -= player.speed }
if (keys.ArrowDown && player.y < (road.height - 75)) { player.y += player.speed }
if (keys.ArrowRight && player.x < 350) { player.x += player.speed }
if (keys.ArrowLeft && player.x > 0) { player.x -= player.speed }
car.style.top = player.y + "px";
car.style.left = player.x + "px";
highScore.innerHTML = "HighScore" + ":" + (player.highScore - 1);
player.score++;
player.speed += 0.01;
if (player.highScore < player.score) {
player.highScore++;
highScore.innerHTML = "HighScore" + ":" + (player.highScore - 1);
highScore.style.top="80px";
}
score.innerHTML = "Score" + ":" + (player.score - 1);
window.requestAnimationFrame(Play);
}
}
function moveLines() {
let roadLines = document.querySelectorAll('.roadLines');
roadLines.forEach(function (item) {
if (item.y >= 700)
item.y -= 700;
item.y += player.speed;
item.style.top = item.y + "px";
})
}
function moveOpponents(car) {
let Opponents = document.querySelectorAll('.Opponents');
Opponents.forEach(function (item) {
if (isCollide(car, item)) {
endGame();
}
if (item.y >= 750) {
item.y -= 900;
item.style.left = Math.floor(Math.random() * 350) + "px";
}
item.y += player.speed;
item.style.top = item.y + "px";
})
}
//check whether the cars collide or not
function isCollide(a, b) {
aRect = a.getBoundingClientRect();
bRect = b.getBoundingClientRect();
return !((aRect.top > bRect.bottom) || (aRect.bottom < bRect.top) || (aRect.right < bRect.left) || (aRect.left > bRect.right))
}
//game is end
function endGame() {
player.isStart = false;
player.speed = 5;
startScreen.classList.remove('hide');
}
To start, all of the HTML components will be selected using the document.queryselector. additionally, keep their values in the constant variable. Next, we'll add three more event listeners.Event listeners are click,key up  and down.

Now using the let keyword we will create a keys array and store a boolean value inside variable ,similarly we will create another variable we will set the speed as 5, Score is set to "zero" and highscore is set to "zero".

Now we will create a function called start to start the game inside the we have just used the javascript concept for loop to create the roadlines as the player moves forward to create more line and also create random opponents in between the track.

Similalry we will create the function for the movement of the car using the key eventlistener we will add the input for the car movement.

Finally, we did all html,css, and javascript Code for the car racing game. here is a demo of the project.

 Hope you like the Car Racing Game. you can see the output video and project screenshots. See our other blogs and gain knowledge in front-end development.

Thank you!

In this post, we learn how to create a Car Racing Game Using HTML, CSS, and JavaScript Code. If we made a mistake or any confusion, please drop a comment to reply or help you in easy learning.

Written by - Code With Random/Anki 

profile
Heroku
Promoted

Heroku

This site is built on Heroku
Join the ranks of developers at Salesforce, Airbase, DEV, and more who deploy their mission critical applications on Heroku. Sign up today and launch your first app!

Get Started

Top comments (2)
Subscribe
pic
Add to the discussion
 
 
nora_2b5ca57f338a479bcc91 profile image
Nora
•
Oct 15

I really love the way you share every information. I have made a website on Car Parking game. And I used HTML & CSS for its designing. It would be great if you take a look on my website and give kind suggestions on it.


1
 like
Like
Reply
 
 
seoakbarali profile image
akbarali seo
•
Sep 2

I apprecitated you for this great program about car parking game, next step take about car parking skin mod , its modified version that help to player get unlimited colors collections.


1
 like
Like
Reply
Some comments may only be visible to logged-in visitors. Sign in to view all comments.

Code of Conduct • Report abuse
profile
Heroku
Promoted

Heroku

This site is built on Heroku
Join the ranks of developers at Salesforce, Airbase, DEV, and more who deploy their mission critical applications on Heroku. Sign up today and launch your first app!

Get Started

Read next
simone_morellato profile image
How to Deploy Envoy Across Multiple Kubernetes Clusters
Simone Morellato - Dec 18

kkazala profile image
Extortion Pack
Kinga - Dec 18

abhay_yt_52a8e72b213be229 profile image
Getting Started with Material-UI (MUI) in React: A Complete Guide
Abhay Singh Kathayat - Dec 18

abhay_yt_52a8e72b213be229 profile image
Optimizing Performance with Lazy Loading in React Router v6
Abhay Singh Kathayat - Dec 18


Codewithrandom Blogs
Follow
we are group of developer,sharing free project code
Location
India,Rajsthan
Joined
May 8, 2023
More from Codewithrandom Blogs
Rainbow Text Animation Using HTML and CSS
Create Reveal Text On Card Hover Using HTML and CSS
Div Follows Mouse Cursor using HTML &amp; JavaScript
profile
Heroku
Promoted

Heroku

Build apps, not infrastructure.
Dealing with servers, hardware, and infrastructure can take up your valuable time. Discover the benefits of Heroku, the PaaS of choice for developers since 2007.

Visit Site

const score = document.querySelector('.score');
const highScore = document.querySelector('.highScore');
const startScreen = document.querySelector('.startScreen');
const gameArea = document.querySelector('.gameArea');
const ClickToStart = document.querySelector('.ClickToStart');
// const grass = document.querySelector('.grass');
// const garden = document.querySelector('.garden');
ClickToStart.addEventListener('click', Start);
document.addEventListener('keydown', keydown);
document.addEventListener('keyup', keyup);
let keys = {
ArrowUp: false,
ArrowDown: false,
ArrowLeft: false,
ArrowRight: false,
}
let player = {
speed: 5,
score: 0,
highScore: 0
};
function keydown(e) {
keys[e.key] = true
}
function keyup(e) {
keys[e.key] = false;
}
// starting the game
function Start() {
gameArea.innerHTML = "";
startScreen.classList.add('hide');
player.isStart = true;
player.score = 0;
window.requestAnimationFrame(Play);
// creating the road lines
for (i = 0; i < 5; i++) {
let roadLines = document.createElement('div');
roadLines.setAttribute('class', 'roadLines');
roadLines.y = (i * 140);
roadLines.style.top = roadLines.y + "px";
gameArea.appendChild(roadLines);
}
// creating the opponents car
for (i = 0; i < 3; i++) {
let Opponents = document.createElement('div');
Opponents.setAttribute('class', 'Opponents');
Opponents.y = ((i) * -300);
Opponents.style.top = Opponents.y + "px";
gameArea.appendChild(Opponents);
Opponents.style.left = Math.floor(Math.random() * 350) + "px";
Opponents.style.backgroundColor=randomColor();
}
let car = document.createElement('div');
car.setAttribute('class', 'car');
gameArea.appendChild(car);
player.x = car.offsetLeft;
player.y = car.offsetTop;
}
function randomColor(){
function c(){
let hex=Math.floor(Math.random()*256).toString(16);
return ("0"+String(hex)).substr(-2);
}
return "#"+c()+c()+c();
}
//play the game
function Play() {
let car = document.querySelector('.car');
let road = gameArea.getBoundingClientRect();
if (player.isStart) {
moveLines();
moveOpponents(car);
if (keys.ArrowUp && player.y > (road.top + 70)) { player.y -= player.speed }
if (keys.ArrowDown && player.y < (road.height - 75)) { player.y += player.speed }
if (keys.ArrowRight && player.x < 350) { player.x += player.speed }
if (keys.ArrowLeft && player.x > 0) { player.x -= player.speed }
car.style.top = player.y + "px";
car.style.left = player.x + "px";
highScore.innerHTML = "HighScore" + ":" + (player.highScore - 1);
player.score++;
player.speed += 0.01;
if (player.highScore < player.score) {
player.highScore++;
highScore.innerHTML = "HighScore" + ":" + (player.highScore - 1);
highScore.style.top="80px";
}
score.innerHTML = "Score" + ":" + (player.score - 1);
window.requestAnimationFrame(Play);
}
}
function moveLines() {
let roadLines = document.querySelectorAll('.roadLines');
roadLines.forEach(function (item) {
if (item.y >= 700)
item.y -= 700;
item.y += player.speed;
item.style.top = item.y + "px";
})
}
function moveOpponents(car) {
let Opponents = document.querySelectorAll('.Opponents');
Opponents.forEach(function (item) {
if (isCollide(car, item)) {
endGame();
}
if (item.y >= 750) {
item.y -= 900;
item.style.left = Math.floor(Math.random() * 350) + "px";
}
item.y += player.speed;
item.style.top = item.y + "px";
})
}
//check whether the cars collide or not
function isCollide(a, b) {
aRect = a.getBoundingClientRect();
bRect = b.getBoundingClientRect();
return !((aRect.top > bRect.bottom) || (aRect.bottom < bRect.top) || (aRect.right < bRect.left) || (aRect.left > bRect.right))
}
//game is end
function endGame() {
player.isStart = false;
player.speed = 5;
startScreen.classList.remove('hide');
}
Thank you to our Diamond Sponsor Neon for supporting our community.

DEV Community — A constructive and inclusive social network for software developers. With you every step of your journey.

Home
DEV++
Podcasts
Videos
Tags
DEV Help
Forem Shop
Advertise on DEV
DEV Challenges
DEV Showcase
About
Contact
Free Postgres Database
Guides
Software comparisons
Code of Conduct
Privacy Policy
Terms of use
Built on Forem — the open source software that powers DEV and other inclusive communities.

Made with love and Ruby on Rails. DEV Community © 2016 - 2024.
