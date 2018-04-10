
let clientHeight = document.documentElement.clientHeight;
let leftBlock = document.querySelector('.left-block');
let rightBlock = document.querySelector('.right-block');
let centralBlock = document.querySelector('.central-block');
let centralBlockChild = document.querySelector('.central-block-child');
let leftBlockChild = document.querySelector('.left-block-child');
let rightBlockWhitLine = document.querySelector('.right-block-whiteLine');
leftBlock.style.setProperty('--leftBlockHeight', (clientHeight-47) + 'px');
rightBlock.style.setProperty('--rightBlockHeight', (clientHeight-47) + 'px');
centralBlock.style.setProperty('--centralBlockHeight', (clientHeight-47) + 'px');
centralBlockChild.style.setProperty('--centralBlockChildHeight', (clientHeight-47) + 'px');
rightBlockWhitLine.style.setProperty('--rightBlockWhiteLine', (clientHeight) + 'px');





let clientWidth = document.documentElement.clientWidth;
let cardsFoundBlock = document.querySelector('.cardsFound');
let centralBlockWidth = centralBlock.clientWidth;
let leftBlockWidth = leftBlock.clientWidth + 5;
let rightBlockWidth = rightBlock.clientWidth + 5;

/*if($.browser.mozilla) {
    rightBlockWidth += 15;
}*/

console.log('centralBlock',centralBlockWidth);
console.log('leftBlock',leftBlockWidth);
console.log('rightBlock',rightBlockWidth);
console.log('clientWidth',clientWidth);
console.log(centralBlockWidth- leftBlockWidth - rightBlockWidth + ':centralBlockWidth- leftBlockWidth - rightBlockWidth')


//let cardsFoundPercent = (centralBlockWidth - (leftBlockWidth + rightBlockWidth)) / (centralBlockWidth / 100) - 3.2;
let cardsFoundPercent = (clientWidth - (leftBlockWidth + rightBlockWidth + 50));
cardsFoundBlock.style.setProperty('--cardsFoundWidth', cardsFoundPercent  + 'px' );
leftBlockChild.style.setProperty('--centralBlockLeftPadding',leftBlockWidth + 'px');
centralBlockChild.style.setProperty('--centralBlockRightPadding',rightBlockWidth + 'px');

console.log(((centralBlockWidth - (leftBlockWidth + rightBlockWidth)) / (centralBlockWidth / 100) )  + '%');



new ResizeSensor(jQuery('.left-block'), function(){

    let centralBlockWidth = centralBlock.clientWidth;
    let leftBlockWidth = leftBlock.clientWidth + 5;
    let rightBlockWidth = rightBlock.clientWidth + 5 ;

    let cardsFoundPercent = (clientWidth - (leftBlockWidth + rightBlockWidth + 50));
    leftBlockChild.style.setProperty('--centralBlockLeftPadding',leftBlockWidth + 'px');
    centralBlockChild.style.setProperty('--centralBlockRightPadding',rightBlockWidth + 'px');
    cardsFoundBlock.style.setProperty('--cardsFoundWidth', cardsFoundPercent  + 'px' );



});

new ResizeSensor(jQuery('.right-block'), function(){

    let centralBlockWidth = centralBlock.clientWidth;
    let leftBlockWidth = leftBlock.clientWidth + 5;
    let rightBlockWidth = rightBlock.clientWidth + 5  ;

    let cardsFoundPercent = (clientWidth - (leftBlockWidth + rightBlockWidth + 50));

    leftBlockChild.style.setProperty('--centralBlockLeftPadding',leftBlockWidth + 'px');
    centralBlockChild.style.setProperty('--centralBlockRightPadding',rightBlockWidth + 'px');
    cardsFoundBlock.style.setProperty('--cardsFoundWidth', cardsFoundPercent  + 'px' );



});












































