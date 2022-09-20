

document.body.style.cssText =`
padding : 0;
margin : 0;
width: 100%;
`

let container = document.createElement('div');
document.body.appendChild(container);
container.style.cssText =`
width: 1170px;
text-align : center;
margin-left :40px;

`

// start head

let head = document.createElement('div');
document.body.appendChild(head);

head.style.cssText = `

height : 800px;
background-image: url(  ./images/fashion.jpg   );
background-size: 100% 100%;

`

let namepage = document.createElement('h1');
container.appendChild(namepage);
namepage.textContent = 'fashion';

namepage.style.cssText = `
float : left;
width : 50%;
margin-left : -180px;
padding-top : 50px;
color: red;

`

let btnopen = document.createElement('button');
container.appendChild(btnopen);
btnopen.setAttribute('id','minu');
btnopen.textContent = 'minu';
btnopen.style.cssText=`
width :100px;
height :50px;
top: 5%;
right: 63px;
border : none;
border-radius: 30px;
background-color:red;
color:#fff;
position: absolute;
cursor: pointer;
font-size :30px;
`


let btnclose = document.createElement('button');
container.appendChild(btnclose);
btnclose.setAttribute('id','close');

btnclose.textContent = 'close';
btnclose.style.cssText=`
width :100px;
height :50px;
top: 5%;
right: 180px;
border : none;
border-radius: 30px;
background-color:red;
color:#fff;
position: absolute;
cursor: pointer;
display: none;
font-size :30px;
`

let link = document.createElement('div');
head.appendChild(link);
link.setAttribute('id','links');
link.style.cssText = `
cursor: pointer;
width : 10%;
height :150px;
list-style: none;
float : right;
margin-top : 100px;
font-size: large;
color: red;
line-height: 30px;
margin-right:50px;
text-align: center;
display: none;
`

link.innerHTML =`
<li>Home</li>
<li>About</li>
<li>Services</li>
<li>Gallery</li>
<li>Contact-us</li>

`

let btnopening =document.getElementById('minu');
let btnclosing =document.getElementById('close');
let links =document.getElementById('links');

btnopening.onclick = function(){
  this.style.display = 'none';
  btnclosing.style.display = 'block';
  btnclosing.style.marginRight ='-115px';
  links.style.display = 'block';
}


btnclosing.onclick = function(){
  this.style.display = 'none';
  btnopening.style.display = 'block';
  links.style.display = 'none';
}

// end head





// start about

let about = document.createElement('div');
head.after(about);

about.style.cssText = `
height : 800px;
background-image: url(  ./images/product_bg.jpg   );
background-size: 100% 100%;
`
let info = document.createElement('div');
about.appendChild(info);
info.innerHTML = `
<h1 style = 'font-size:50px; color:red; text-transform: uppercase'>About-Us</h1>
<p style = 'font-size : 20px'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humourThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour<br>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

` 

info.style.cssText = `
float : left;
width : 40%;
margin-left : 100px;
padding-top : 100px;
`

let img = document.createElement('img');
about.append(img);
img.src = './images/ban_img.png';
img.style.cssText = `
float : right;
width : 30%;
margin-right : 100px;
padding-top : 50px;

`
// end about




// start gallery

let gallery = document.createElement('div');
about.before(gallery);
gallery.style.cssText = `
height : 800px;
background-size: 100% 100%;
background-image: url(  ./images/product_bg.jpg   );
text-align: center;
`

let ourgallery = document.createElement('h1');
gallery.append(ourgallery);
ourgallery.innerHTML = 'OUR GALLERY';
ourgallery.style.cssText = `
width : 100%;
margin-top :5%;
letter-spacing: 15px;
font-size:50px;
color:red;
`

let mySlides = document.createElement('div');
gallery.append(mySlides);

mySlides.style.cssText = `
width : 50%;
margin-top:5%;
margin-left :35%
`

let img1 = document.createElement('img');
mySlides.append(img1);
img1.setAttribute('class','photo');
img1.src = './images/1.jpeg';
img1.style.cssText = `
width : 60%;
`

let img2 = document.createElement('img');
mySlides.append(img2);
img2.setAttribute('class','photo');
img2.src = './images/2.jpeg';
img2.style.cssText = `
width : 60%;
`

let img3 = document.createElement('img');
mySlides.append(img3);
img3.setAttribute('class','photo');
img3.src = './images/3.jpeg';
img3.style.cssText = `
width : 60%;
`

let img4 = document.createElement('img');
mySlides.append(img4);
img4.setAttribute('class','photo');
img4.src = './images/4.jpeg';
img4.style.cssText = `
width : 60%;
`


var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("photo");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000);    
}


// end gallery


