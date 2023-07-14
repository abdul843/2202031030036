const stars = document.querySelectorAll(".stars i");
stars.forEach((star, index1) => {
    star.addEventListener("click", () => {
        stars.forEach((star2, index2) => {
            index1 >= index2 ? star2.classList.add("active") : star2.classList.remove("active");
        });
        if (index1 == 0 ) {
            document.getElementById("emoji").innerHTML = "😒"
        }
        if (index1 == 1 ) {
            document.getElementById("emoji").innerHTML = "😊"
        }
        if (index1 == 2 ) {
            document.getElementById("emoji").innerHTML = "😉"
        }
        if (index1 == 3 ) {
            document.getElementById("emoji").innerHTML = "😍"
        }
        if (index1 == 4 ) {
            document.getElementById("emoji").innerHTML = "💖"
        }
    });
});

$(document).ready(function () {
    $('div.hidden').fadeIn(3000).removeClass('hidden');
});
$(document).ready(function () {
    $('div.rating-box').fadeIn(1500).removeClass('rating-box{');
});
