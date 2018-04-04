$( function() {
    $( ".resizableRightMenu" ).resizable({
        resizeHeight: false,
        handles: "w",
    });
} );

$( function() {
    $( ".resizableLeftMenu" ).resizable({
        resizeHeight: false,
        handles: "e",
    });
} );


const el = document.querySelector('.el', '.el2');
const height = el.scrollHeight;
el.style.setProperty('--max-height', height + 'px');
