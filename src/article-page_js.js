function reply(elementId){
    var commentBox = document.getElementById(elementId);
    commentBox.classList.toggle('hidden');
}

function leaveComment(){
    var targetSection = getElementById('comment');
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
}

//progress bar
function updateProgressBar() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollPosition / totalHeight) * 100;

    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = progress + '%';
}

window.addEventListener('scroll', updateProgressBar);

//book a call
var closebtn = document.getElementById("bookCallbtn");
var bookCall = document.getElementById("bookCall")

closebtn.addEventListener("click",function(){
    bookCall.classList.toggle('hidden');
})

function articlePage() {
window.location.href = "/article-page.html";
}
