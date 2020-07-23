$(document).ready(function(){
    // Tasto prev
    $(".prev").click(function(){
        prevImage();
    })
    // Tasto next
    $(".next").click(function(){
        nextImage();
    })





// Funzioni

//nextImage
    function nextImage(){
        var activeImage = $(".images img.active");
        activeImage.removeClass("active");

//nextPoint nav
        var activePoint = $(".nav i.active");
        activePoint.removeClass("active");

//se l'immagine/point attiva è l'ultima e clicco next vado all'ultima:
        if (activeImage.hasClass("last")) {
            $(".images img.first").addClass("active");
            $(".nav i.first").addClass("active");
        }else {
            activeImage.next().addClass("active");
            activePoint.next().addClass("active");
        }
    }

//prevImage
    function prevImage(){
        var activeImage = $(".images img.active");
        activeImage.removeClass("active");

//prevPoint
        var activePoint = $(".nav i.active");
        activePoint.removeClass("active");
//se l'immagine/point attiva è la prima e clicco prev vado all'ultima
        if (activeImage.hasClass("first")) {
            $(".images img.last").addClass("active");
            $(".nav i.last").addClass("active");
        } else {
            activeImage.prev().addClass("active");
            activePoint.prev().addClass("active");
        }
    }



})
