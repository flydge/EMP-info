
$(".tabs").hover(
    function () {
        $(".tabs").addClass("activeTab-deactivated");
    },
    function () {
        $(".tabs").removeClass("activeTab-deactivated");
    });

$(".tabs").removeClass("activeTab");
switch (window.location.pathname) {
    case '/ECLproject/index.html':
        $("#tab1").addClass("activeTab");
        break;
    case '/ECLproject/index.html2':
        $("#tab2").addClass("activeTab");
        break;
    case '/ECLproject/index.html3':
        $("#tab3").addClass("activeTab");
        break;
    default:
        alert('wrong path for header.js')
}
