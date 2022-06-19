
var images = ["insideRestaurant.jpg", "bar.jpg", "fun.jpg", "outsideRestaurant.jpg"];
    $(function () {
        var i = 0;
        $("#changeBackground").css("background-image", "url(img/" + images[i] + ")");
        setInterval(function () {
            i++;
            if (i == images.length) {
                i = 0;
            }
            $("#changeBackground").fadeOut( 3000, function () {
				//Pay attention to the image path. where your images will be stored
                $(this).css("background-image", "url(img/" + images[i] + ")");
                $(this).fadeIn(3000);
            });
        }, 14000);
    });