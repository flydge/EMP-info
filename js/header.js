$(".accordion").click(function(e) {
    let target = e.target;
    if($(target.parentNode.parentNode).hasClass("activeTab")){
    }else {
        let childs = target.parentNode.parentNode.parentNode.childNodes;
        for (let item of childs){
            $(item).removeClass("activeTab");
        }
        $(target.parentNode.parentNode).addClass("activeTab");
    }
});