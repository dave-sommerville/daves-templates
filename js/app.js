'use strict';
/*-------------------------------------->
  UTILITY FUNCTIONS 
<--------------------------------------*/

function select(selector, scope = document) {
  return scope.querySelector(selector);
}

function selectAll(selector, scope = document) {
  return scope.querySelectorAll(selector);
}

function listen(event, element, callback) {
  if (element) {
    element.addEventListener(event, callback);
  }
}

/*-------------------------------------->
  SNAPPY ALBUMS (REMBER TO CHANGE IF MULTIPLE ALBUMS ADDED)
<--------------------------------------*/
const contentWrapper = select('.content-wrapper');
const scrollLeftBtn = select('.y-album-left');
const scrollRightBtn = select('.y-album-right');

const boxWidth = contentWrapper.querySelector('.box').offsetWidth + 10;

listen('click', scrollRightBtn, () => {
  contentWrapper.scrollBy({
    left: boxWidth,
    behavior: 'smooth',
  });
});

listen('click', scrollLeftBtn, () => {
  contentWrapper.scrollBy({
    left: -boxWidth,
    behavior: 'smooth',
  });
});
