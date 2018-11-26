
//lempute su jQuery
$('.lempute').on({
    'click': function() {
        var src = ($(this).attr('src') === '/img/lamp-on.png')
            ? '/img/lamp-off.png' : '/img/lamp-on.png';
        $(this).attr('src', src);
    }
});

// $('#all').click(function () {
//     $('.container').show();
// });
//
//
//     var cSharp = $("#cSharp1").val();
//
//     $('#cSharp').click(function () {
//         $('.container').not(".cSharp").hide();
//
//     });


var activebtn = $('.active').attr('href');
$(activebtn).show();

$('.btn').click(function(e){
    e.preventDefault();
    $('.btn').removeClass('active');
    $(this).addClass('active');
    activebtn = $(this).attr('href');
    if(activebtn != '#all'){
        $('.filterDiv').hide();
        $(activebtn).show();
    } else {$('.filterDiv').show();}

});


// $(".photo").hide();
// $(".photo:contains("+filter+")").show();
// .not('.'+filter).hide();
// var filter = $("#filter").val();

// function filter() {
//     var filter = $("#filter").val();
//     $('.photo').show();
//     if (filter != '') $('.photo').not('.'+filter).hide();
// }