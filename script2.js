
function showPage(id){

let pages=document.querySelectorAll('.page');

pages.forEach(page=>{
page.classList.remove('active');
});

let active=document.getElementById(id);
active.classList.add('active');

window.scrollTo(0,0);
}
