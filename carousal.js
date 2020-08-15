const carousalHelpers = {
  setStyle: (element, styleObj) => {
    const styleString = Object.entries(styleObj).reduce(
      (cssText, [property, value]) => `${property}:${value};${cssText}`,
      ''
    );

    element.style = styleString;
  }
}

const carousalContainer = document.querySelector('[data-carousal]')
carousalContainer.classList.add('carousal-container');

[...carousalContainer.children].forEach((child) => {
  child.classList.add('carousal-item')
})

var activeIndex = 0;
var rightIndex = activeIndex + 1;

carousalContainer.children.item(activeIndex).classList.add('active');
carousalContainer.children.item(rightIndex).classList.add('right');

const tick = () => {
  carousalContainer.children.item(activeIndex).classList.remove('active');
  carousalContainer.children.item(activeIndex).classList.add('left');

  carousalContainer.children.item(rightIndex).classList.remove('right');
  carousalContainer.children.item(rightIndex).classList.add('active');

  const nextRight = (rightIndex + 1) % carousalContainer.children.length;
  carousalContainer.children.item(nextRight).classList.add('right');

  setTimeout((removeLeft) => carousalContainer.children.item(removeLeft).classList.remove('left'), 1000, activeIndex);
  activeIndex = rightIndex;
  rightIndex = nextRight;
};
setInterval(tick, 2500);
