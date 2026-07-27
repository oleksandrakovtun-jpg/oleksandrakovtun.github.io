const galleries = {

html: [
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

figma: [
"images/figma-1.png",
"images/figma-2.png"
],

canva: [
"images/canva-1.jpg",
"images/canva-2.png",
"images/canva-3.png",
"images/canva-4.png",
"images/canva-5.png",
"images/canva-6.jpg",
"images/canva-7.jpg"
],

excel: [
"images/excel-1.jpg",
"images/excel-2.jpg"
],

capcut: [
"images/capcut-1.jpg"
]

};

const titles = {

html:"HTML & CSS Projects",
figma:"Figma UI/UX",
canva:"Canva Designs",
excel:"Excel Projects",
capcut:"Video Editing"

};

function openGallery(type){

const modal=document.getElementById("galleryModal");
const gallery=document.getElementById("galleryImages");
const title=document.getElementById("galleryTitle");

gallery.innerHTML="";

title.textContent=titles[type];

galleries[type].forEach(image=>{

gallery.innerHTML+=`
<img src="${image}" onclick="previewImage('${image}')">
`;

});

modal.classList.add("active");

document.body.style.overflow="hidden";

}

function closeGallery(){

document.getElementById("galleryModal").classList.remove("active");

document.body.style.overflow="auto";

}

function previewImage(src){

const preview=document.getElementById("preview");

preview.querySelector("img").src=src;

preview.classList.add("active");

}

function closePreview(){

document.getElementById("preview").classList.remove("active");

}

window.onclick=function(e){

const modal=document.getElementById("galleryModal");

if(e.target===modal){

closeGallery();

}

}
