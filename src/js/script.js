window.addEventListener('DOMContentLoaded', () => {
    const tabs = require('./modules/tabs'),
          modal = require('./modules/modal'),
          timer = require('./modules/timer'),
          slider = require('./modules/slider'),
          forms = require('./modules/forms'),
          cards = require('./modules/cards'),
          calculator = require('./modules/calculator');  

    tabs();
    modal();
    timer();
    slider();
    forms();
    cards();
    calculator();      
});
