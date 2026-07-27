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
"videos/capcut-1.mp4"
]

};

const titles = {
html: "HTML & CSS Projects",
figma: "Figma UI/UX",
canva: "Canva Designs",
excel: "Excel Projects",
capcut: "Video Editing"
};

function openGallery(type){

const modal = document.getElementById("galleryModal");
const gallery = document.getElementById("galleryImages");
const title = document.getElementById("galleryTitle");

gallery.innerHTML = "";
title.textContent = titles[type];

galleries[type].forEach(file => {

const extension = file.split('.').pop().toLowerCase();

if(extension === "mp4" || extension === "webm"){

gallery.innerHTML += `
<video
class="gallery-video"
src="${file}"
controls
muted
playsinline
onclick="previewMedia('${file}')">
</video>
`;

}else{

gallery.innerHTML += `
<img
src="${file}"
onclick="previewMedia('${file}')">
`;

}

});

modal.classList.add("active");
document.body.style.overflow = "hidden";

}

function closeGallery(){

document.getElementById("galleryModal").classList.remove("active");
document.body.style.overflow = "auto";

}

function previewMedia(file){

const preview = document.getElementById("preview");
const content = document.getElementById("previewContent");

const extension = file.split('.').pop().toLowerCase();

if(extension === "mp4" || extension === "webm"){

content.innerHTML = `
<video controls autoplay style="max-width:95%; max-height:90vh; border-radius:15px;">
<source src="${file}" type="video/mp4">
</video>
`;

}else{

content.innerHTML = `
<img src="${file}" style="max-width:95%; max-height:90vh; border-radius:15px;">
`;

}

preview.classList.add("active");

}

function closePreview(){

document.getElementById("preview").classList.remove("active");

const content = document.getElementById("previewContent");
content.innerHTML = "";

}

window.onclick = function(e){

const modal = document.getElementById("galleryModal");
const preview = document.getElementById("preview");

if(e.target === modal){
closeGallery();
}

if(e.target === preview){
closePreview();
}

};
