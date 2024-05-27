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
$(document).ready(function() {
    // Harici dosyadan veri al
    $.ajax({
        url: 'external-data.txt', // Harici dosyanın URL'si
        type: 'GET',
        dataType: 'text', // Veri tipi: metin
        success: function(data) {
            // AJAX isteği başarılı olduğunda yapılacak işlemler
            $('h1').text(data); // Aldığımız veriyi başlığa ekle
        },
        error: function(xhr, status, error) {
            // AJAX isteği başarısız olduğunda yapılacak işlemler
            console.error('AJAX Error:', status, error); // Konsola hata mesajı yazdır
        }
    });
});
$(document).ready(function() {
    // Butona tıklanınca arka plan rengini değiştir
    $('#change-color-button').click(function() {
        // Harici dosyadan veri al
        $.ajax({
            url: 'external-data.txt', // Harici dosyanın URL'si
            type: 'GET',
            dataType: 'text', // Veri tipi: metin
            success: function(data) {
                // AJAX isteği başarılı olduğunda yapılacak işlemler
                // Aldığımız renk kodunu butonun arka plan rengi olarak kullan
                $('#change-color-button').css('background-color', data);
            },
            error: function(xhr, status, error) {
                // AJAX isteği başarısız olduğunda yapılacak işlemler
                console.error('AJAX Error:', status, error); // Konsola hata mesajı yazdır
            }
        });
    });
});
// Butona tıklanınca arka plan rengini değiştir
document.getElementById('change-color-button').addEventListener('click', function() {
    // Rastgele RGB değerleri alarak bir renk kodu oluştur
    var newColor = 'rgb(' + getRandomNumber() + ',' + getRandomNumber() + ',' + getRandomNumber() + ')';
    // Yeni renk kodunu arka plan rengi olarak ayarla
    document.body.style.backgroundColor = newColor;
});

// Rastgele bir sayı üret (0 ile 255 arasında)
function getRandomNumber() {
    return Math.floor(Math.random() * 256); // Math.random() fonksiyonu 0 ile 1 arasında bir sayı döndürür, bu yüzden 256 ile çarpıyoruz
}

// Butona tıklanınca arka plan rengini değiştir
document.getElementById('change-color-button').addEventListener('click', function() {
    // Yeni bir renk seçmek için rastgele bir RGB renk kodu oluştur
    var newColor = 'rgb(' + getRandomNumber() + ',' + getRandomNumber() + ',' + getRandomNumber() + ')';
    // Yeni renk kodunu arka plan rengi olarak ayarla
    document.body.style.backgroundColor = newColor;
});

// Rastgele bir sayı üret
function getRandomNumber() {
    return Math.floor(Math.random() * 256);
}
$(document).ready(function() {
    $('#my-form').submit(function(event) {
        // Formun varsayılan davranışını engelle
        event.preventDefault();

        // Form verilerini al
        var formData = {
            name: $('#name').val(),
            email: $('#email').val()
        };

        // AJAX isteği yap
        $.ajax({
            url: 'submit.php', // Sunucuya gönderilecek dosyanın yolu
            type: 'POST', // Veriyi gönder
            data: formData, // Gönderilecek veri
            success: function(response) { // İsteği başarıyla tamamla
                $('#result').html(response); // Sunucudan gelen yanıtı göster
            },
            error: function(xhr, status, error) { // İsteği tamamlamada hata oluşursa
                console.error('AJAX error:', status, error); // Hata mesajını konsola yaz
            }
        });
    });
});





