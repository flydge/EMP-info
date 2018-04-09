$('.form-check-input').click(function(e) {
    let target = e.target;
    //console.log('tagName: ', target.parentNode.parentNode.parentNode.nodeName)
    if($(target.parentNode).hasClass('form-check-right')){
        if($(target.parentNode).hasClass("activeSection")) {
            $(target.parentNode).removeClass("activeSection");
        }else {
            $(target.parentNode).addClass("activeSection");
        }
    }else {
        if($(target.parentNode.parentNode.parentNode).hasClass("activeSection")) {
            $(target.parentNode.parentNode.parentNode).removeClass("activeSection");
        }else {
            $(target.parentNode.parentNode.parentNode).addClass("activeSection");
        }
    }
});

