var blocks1 = $('[data-rubric1]');
var blocks2 = $('[data-rubric2]');
var blocks3 = $('[data-rubric3]');
var checkbox_items = $('.checkbox-filter :checkbox');

$('body').on('click', '.checkbox-filter :checkbox', function() {
    var name = $(this).attr('name');
    if($('.checkbox-filter :checkbox:checked').length == 1){
        if($(this).prop('checked')) {
            blocks1.hide();
            blocks2.hide();
            blocks3.hide();
            $('[data-rubric1='+ name +']').show();
            $('[data-rubric2='+ name +']').show();
            $('[data-rubric3='+ name +']').show();
        } else {
            $('[data-rubric1='+ name +']').hide();
            $('[data-rubric2='+ name +']').hide();
            $('[data-rubric3='+ name +']').hide();
        }
    } else if($('.checkbox-filter :checkbox:checked').length > 1) {
        if($(this).prop('checked')) {
            $('[data-rubric1='+ name +']').show();
            $('[data-rubric2='+ name +']').show();
            $('[data-rubric3='+ name +']').show();
        } else {
            $('[data-rubric1='+ name +']').hide();
            $('[data-rubric2='+ name +']').hide();
            $('[data-rubric3='+ name +']').hide();
        }
    } else {
        blocks1.show();
        blocks2.show();
        blocks3.show();
    }
});