$('.bank').jCarouselLite({
    btnNext: '.nav-next',
    btnPrev: '.nav-prev',
    speed: 500,
    visible: 4
});

$('.reply').jCarouselLite({
    btnNext: '.reply-more',
    vertical: true,
    speed: 500,
    visible: 2
});


$('#li').click(function() {
    setTimeout("$('#li span').replaceWith('<span>файл прикреплен</span>')", 2000);

});


$(function(){

    var note = $('#note'),
        ts = new Date(2012, 0, 1),
        newYear = true;

    if((new Date()) > ts){
        // Задаем точку отсчета для примера. Пусть будет очередной Новый год или дата через 10 дней.
        // Обратите внимание на *1000 в конце - время должно задаваться в миллисекундах
        ts = (new Date()).getTime() + 10*24*60*60*1000;
        newYear = false;
    }

    $('#countdown').countdown({
        timestamp	: ts,
        callback	: function(days, hours, minutes, seconds){

            var message = "";

            message += "Дней: " + days +", ";
            message += "часов: " + hours + ", ";
            message += "минут: " + minutes + " и ";
            message += "секунд: " + seconds + " <br />";
            note.html(message);
        }
    });

});

// Подключние Яндекс-Карты

ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map("map", {
            center: [45.0122,41.9082],
            zoom: 14
        }),

    // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.8, 37.8]
            },
            // Свойства.
            properties: {

            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: true
        });

    myMap.behaviors.disable('scrollZoom');


    myMap.geoObjects
        .add(myGeoObject)
        .add(new ymaps.Placemark([45.0121,41.9154], {
            balloonContent: '<strong>ООО "Алмаз"</strong>'
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
        }))

}


$(".popup, .certificate").fancybox({
    "padding" : 0
});

$(".map").fancybox({
    "padding" : 20
});

$(".more").fancybox({
    "padding" : 20,
    "maxWidth"  : 800
});