
const clientHeight = document.documentElement.clientHeight;
let asideBlock = document.querySelector('.aside-block');
//alert((clientHeight-60) + 'px');
asideBlock.setProperty('asideBlockHeight', (clientHeight-60) + 'px');


