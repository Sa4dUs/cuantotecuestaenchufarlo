$(document).ready(function() {

    if ($(window).width() >= 780)
    {
        /* Funcionalidad tooltip en las facturas */
        $('.description').before('<div class="more-info" style="z-index: 1;"></div>'); //Se insertan los botones de m�s informaci�n
        $('.description').hide();
        $('.tooltip').parent().css({"position": "relative"});
    
    
        $('#tooltip-a').css({"top": 15, "left": 188, "position": "absolute"});
        $('#tooltip-a .description').css({"position": "absolute", "z-index": 2});
        
        $('#tooltip-b').css({"top": 16, "left": 616, "position": "absolute"});
        $('#tooltip-b .description').css({"margin-left": -290, "position": "absolute", "z-index": 2});
        
        $('#tooltip-c').css({"top": 150, "left": 306, "position": "absolute"});
        
        $('#tooltip-d').css({"top": 140, "left": 570, "position": "absolute"});
        $('#tooltip-d .description').css({"margin-left": -270});
        
        $('#tooltip-e').css({"top": 350, "left": 560, "position": "absolute"});
        $('#tooltip-e .description').css({"margin-left": -270});
        
        $('#tooltip-f').css({"top": 712, "left": 584, "position": "absolute"});
        $('#tooltip-f .description').css({"margin-top": -380, "margin-left": -410});
        
        $('#tooltip-g').css({"top": 40, "left": 590, "position": "absolute"});
        $('#tooltip-g .description').css({"margin-left": -270});
        
        $('#tooltip-h').css({"top": 330, "left": 590, "position": "absolute"});
        $('#tooltip-h .description').css({"margin-left": -270});
        
        $('#tooltip-i').css({"top": 40, "left": 574, "position": "absolute"});
        $('#tooltip-i .description').css({"margin-left": -270});
        
        $('#tooltip-j').css({"top": 650, "left": 584, "position": "absolute"});
        $('#tooltip-j .description').css({"margin-left": -270});
        
        
        $('.more-info').hover(function() {
            /* Se esconden los botones de los tooltip c y d "a mano", porque en IE7 no funciona el z-index y la posici�n relativa. */
            if ($(this).parent().attr('id') == 'tooltip-a') { $('#tooltip-c').fadeOut(); }
            if ($(this).parent().attr('id') == 'tooltip-b') { $('#tooltip-d').fadeOut(); }
            $(this).next('.description').fadeIn();
        });
        
        $('.more-info').bind("mouseenter mousemove", function () {
            $(this).next('.description').fadeIn();
        });
    
        $('.tooltip').bind("mouseleave", function () {
            $('.description', this).fadeOut();
            if($(this).attr('id') == 'tooltip-a') { $('#tooltip-c').fadeIn(); }
            if($(this).attr('id') == 'tooltip-b') { $('#tooltip-d').fadeIn(); }
        });
        /* FIN funcionalidad tooltip en las facturas */
        
    }
    else
    {
        $('.paginas-factura img').hide();
        $('.description h2').after('<div class="more-info" style="z-index: 1;">Ver imagen de la factura</div>'); //Se insertan los botones de m�s informaci�n
        $(".more-info").click(function(){
            var url = "<img src='" + $('.paginas-factura img').get(0).src + "' />";
            $.modal(url, {closeHTML: "<a href='#' title='Cerrar' class='modal-close'>x</a>"}
            );
        });
    }
    
        
            /* Funcionalidad carrousel en las facturas */
    $('#facturas').carouFredSel({
        circular: false,
        infinite: false,
        direction: "left",
        items: {
            visible: 1
        },
        align: 'center',
        auto: false,
        scroll: {
            items: 1,
            fx: 'cover'
        },
        prev: {
            button: '#prev',
            key: 'left'
        },
        next: {
            button: '#next',
            key: 'right'
        },
        pagination: '#pagination'
    });
    
    $('#prev').click(function() {
        $('#facturas').trigger('pause');
    });
    
    $('#next').click(function() {
        $('#facturas').trigger('pause');
    });
    
    $('#pagination').click(function() {
        $('#facturas').trigger('pause');
    });
    /* FIN funcionalidad carrousel en las facturas */
    
    });
    