const galleries={

html:[
"images/html-1.png",
"images/html-2.png",
"images/html-3(1).png",
"images/html-3(2).png",
"images/html-4(1).png",
"images/html-4(2).png",
"images/html-4(3).png",
"images/html-4(4).png",
"images/html-4(5).png",
"images/html-4(6).png",
"images/html-4(7).png",
"images/html-5.png",
"images/html-6(1).png",
"images/html-6(2).png",
"images/html-7(1).png",
"images/html-7(2).png",
"images/html-7(3).png"
],

figma:[
"images/figma-1.png",
"images/figma-2.png"
],

canva:[
"images/canva-1.jpg",
"images/canva-2.png",
"images/canva-3.png",
"images/canva-4.png",
"images/canva-5.png",
"images/canva-6.jpg",
"images/canva-7.jpg"
],

excel:[
"images/excel-1.jpg",
"images/excel-2.jpg"
],

capcut:[
"images/capcut-1.jpg"
]

};

let currentGallery=[];
let currentIndex=0;

function openGallery(name){

currentGallery=galleries[name];
currentIndex=0;

document.getElementById("galleryModal").style.display="flex";
document.getElementById("galleryImage").src=currentGallery[currentIndex];

}

function closeGallery(){

document.getElementById("galleryModal").style.display="none";

}

function nextImage(){

currentIndex++;

if(currentIndex>=currentGallery.length){

currentIndex=0;

}

document.getElementById("galleryImage").src=currentGallery[currentIndex];

}

function prevImage(){

currentIndex--;

if(currentIndex<0){

currentIndex=currentGallery.length-1;

}

document.getElementById("galleryImage").src=currentGallery[currentIndex];

}
