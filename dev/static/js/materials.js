var itemsMat = document.getElementsByClassName('js-materials-expand');
var elNodes = document.querySelectorAll(".js-materials-expand");

for (var i = 0; i < itemsMat.length; i++) {
    var elem = itemsMat[i];

    elem.addEventListener("click", function() {
        this.classList.toggle('active');
    });
}
