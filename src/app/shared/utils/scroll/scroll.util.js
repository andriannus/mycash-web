export const scrollToElement = (selector, options = {}) => {
  const element = document.querySelector(selector);
  element && element.scrollIntoView(options);
};
