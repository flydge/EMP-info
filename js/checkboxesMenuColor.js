$('.form-check-input').click(function(e) {
    let target = e.target;
    let childs = $(target.parentNode.parentNode.parentNode).find('.form-check-input');

    if($(target.parentNode).hasClass('form-check-right')){
        if($(target.parentNode).hasClass("activeSection")) {
            $(target.parentNode).removeClass("activeSection");
        }else {
            $(target.parentNode).addClass("activeSection");
        }
    }else {

        if($(target.parentNode.parentNode.parentNode).hasClass("activeSection")) {

            for (let item of childs){
                item.checked = false
            }
            $(target.parentNode.parentNode.parentNode).removeClass("activeSection");
            $(target.parentNode.parentNode.parentNode).find('details').removeClass("activeSection");
            $(target.parentNode.parentNode.parentNode).find('div').removeClass("activeSection");

        }else {
            $(target.parentNode.parentNode.parentNode).addClass("activeSection");
            for (let item of childs){
                item.checked = true
            }
        }
    }
});

