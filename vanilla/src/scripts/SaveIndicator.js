const indicator = {
  DOM: document.getElementById('save-indicator'),
  init(list) {
    this.list = list;
    this.DOM.addEventListener('click', () => {
      this.DOM.className = 'save-indicator-loading';
      console.log(this.list);

      setTimeout(() => {
        this.DOM.className = 'save-indicator-done';
      }, 2000);
    });
  },
};

export default indicator;
