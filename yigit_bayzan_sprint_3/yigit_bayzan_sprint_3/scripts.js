$(document).ready(function() {
    
    $('#contactForm').submit(function(event) {
        var isValid = true;
        $(this).find('input, textarea').each(function() {
            if ($(this).prop('required') && $(this).val() === '') {
                isValid = false;
                $(this).addClass('error');
            } else {
                $(this).removeClass('error');
            }
        });
        if (!isValid) {
            event.preventDefault();
        }
    });

    
    $('.buttons button:last-child').click(function() {
        $('.navbar').toggleClass('active');
    });

    
    $('.navbar a').click(function() {
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });
});
$(document).ready(function() {
    
    $('.box-head img').click(function() {
        
        var imgSrc = $(this).attr('src');

        
        $('body').append('<div class="modal-overlay"><div class="modal"><img src="' + imgSrc + '" alt="Büyük Resim"><span class="modal-close">&times;</span></div></div>');

       
        $('.modal-close, .modal-overlay').click(function() {
            $('.modal-overlay').remove();
        });
    });
});
$(document).ready(function() {
    
    $('.image img').click(function() {
        
        var imgSrc = $(this).attr('src');

        
        $('body').append('<div class="modal-overlay"><div class="modal"><img src="' + imgSrc + '" alt="Büyük Resim"><span class="modal-close">&times;</span></div></div>');

        
        $('.modal-close, .modal-overlay').click(function() {
            $('.modal-overlay').remove();
        });
    });
});
$(document).ready(function() {
    $('#datepicker').datepicker();
});


