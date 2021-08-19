const indicator = {
  DOM: document.getElementById('sync-indicator'),
  init(list) {
    this.list = list;
    this.DOM.addEventListener('click', () => {
      this.DOM.className = 'sync-indicator-loading';
      console.log(this.list);

      setTimeout(() => {
        this.DOM.className = 'sync-indicator-done';
      }, 2000);
    });
  },
};

export default indicator;
