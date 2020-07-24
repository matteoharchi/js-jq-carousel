$(document).ready(function(){
    // Tasto prev
    $(".prev").click(function(){
        prevImage();
    })
    // Tasto next
    $(".next").click(function(){
        nextImage();
    })

    //BONUS
    $(".nav i").click(function(){
        //trovo la posizione del pallino cliccato
        var posizione = $(this).index();
        //rimuovo classe active
        $(".images img").removeClass("active");
        // do classe active tramite eq
        $(".images img").eq(posizione).addClass("active");
        //rimuovo classe active al pallino
        $(".nav i").removeClass("active");
        //do la classe al pallino giusto
        $(".nav i").eq(posizione).addClass("active");
    })

// TENTATIVO CON NTH-CHILD
    // $(".nav i").click(function(){
    //     var activeImage = $(".images img.active");
    //     var activePoint = $(".nav i.active");
    //     activeImage.removeClass("active");
    //     activePoint.removeClass("active");
    //
    //     $(this).addClass("active");
    //
    //     if ($(nav i:first-child).hasClass("active")) {
    //         $("images img:nth-child(1)").addClass("active");
    //     }else if ($("nav i:nth-child(2)").hasClass("active")) {
    //         $("images img:nth-child(2)").addClass("active");
    //     }else if ($("nav i:nth-child(3)"").hasClass("active")) {
    //         $("images img:nth-child(3)").addClass("active");
    //     }else if ($("nav i:nth-child(4)"").hasClass("active")) {
    //         $("images img:nth-child(4)").addClass("active");
    //
    //     }
    // })




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
