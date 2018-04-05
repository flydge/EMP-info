
let clientHeight = document.documentElement.clientHeight;
let leftBlock = document.querySelector('.left-block');
let rightBlock = document.querySelector('.right-block');
leftBlock.style.setProperty('--leftBlockHeight', (clientHeight-47) + 'px');
rightBlock.style.setProperty('--asideBlockHeight', (clientHeight-47) + 'px');




let clientWidth = document.documentElement.clientWidth;
let centralBlock = document.querySelector('.central-block');
let cardsFoundBlock = document.querySelector('.cardsFound');

let centralBlockWidth = centralBlock.clientWidth;
let leftBlockWidth = leftBlock.clientWidth + 18.5;
let rightBlockWidth = rightBlock.clientWidth;
console.log('centralBlock',centralBlockWidth);
console.log('leftBlock',leftBlockWidth);
console.log('rightBlock',rightBlockWidth);
console.log('clientWidth',clientWidth);
console.log(centralBlockWidth- leftBlockWidth - rightBlockWidth + ':centralBlockWidth- leftBlockWidth - rightBlockWidth')
//alert(asideBlock2.clientWidth + ' | ' + asideBlock.clientWidth + '=' + (asideBlock2.clientWidth+ asideBlock.clientWidth));
//centralBlock.style.setProperty('--centralBlockWidth', (clientWidth- leftBlockWidth - rightBlockWidth) + 'px');
//centralBlock.style.setProperty('--centralBlockWidth', 800 + 'px');
//rightBlock.style.setProperty('--rightBlockWidth', (clientWidth-centralBlockWidth+leftBlockWidth) + 'px');
//rightBlock.style.setProperty('--rightBlockWidth', 600 + 'px');

cardsFoundBlock.style.setProperty('--cardsFoundWidth', ((leftBlockWidth + rightBlockWidth) / (centralBlockWidth / 100) )  + '%' );
centralBlock.style.setProperty('--centralBlockLeftPadding',leftBlockWidth + 'px');
centralBlock.style.setProperty('--centralBlockRightPadding',rightBlockWidth + 'px');
console.log(((centralBlockWidth - (leftBlockWidth + rightBlockWidth)) / (centralBlockWidth / 100) )  + '%');



new ResizeSensor(jQuery('.left-block'), function(){

    let clientWidth = document.documentElement.clientWidth;
    let leftBlockWidth = leftBlock.clientWidth + 18.5;
    let rightBlockWidth = rightBlock.clientWidth;

    centralBlock.style.setProperty('--centralBlockLeftPadding',leftBlockWidth + 'px');
    centralBlock.style.setProperty('--centralBlockRightPadding',rightBlockWidth + 'px');



});

new ResizeSensor(jQuery('.right-block'), function(){

    let clientWidth = document.documentElement.clientWidth;
    let leftBlockWidth = leftBlock.clientWidth + 18.5;
    let rightBlockWidth = rightBlock.clientWidth;

    centralBlock.style.setProperty('--centralBlockLeftPadding',leftBlockWidth + 'px');
    centralBlock.style.setProperty('--centralBlockRightPadding',rightBlockWidth + 'px');


});












































