// interior nav slide part function
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}


// Fonksiyonlar iki ayrı değişken alıyor. o yüzden iki tane ayrı fonksiyon var
// daha sonra bir js veri yapısı yardımıyla tek fonksiyon haline getirelecek



// interior nav slide part function
var slideIndex = 1;
showDivs1(slideIndex);

function plusDivs1(n) {
    showDivs1(slideIndex += n);
}

function showDivs1(n) {
    var i;
    var x = document.getElementsByClassName("mySlides1");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}