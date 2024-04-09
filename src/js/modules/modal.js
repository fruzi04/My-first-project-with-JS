function modal() {
    const modalOpen = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal');
    
    function openModalWindow() {
        modal.classList.remove('hide');
        modal.classList.add('show', 'fade');
        document.body.style.overflow = 'hidden'; 
        clearInterval(modalTimerId); 
    }

    modalOpen.forEach(btn => {
        btn.addEventListener('click', openModalWindow);
    });

    function closeModalWinow() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModalWinow(modal);
        }    
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModalWinow();
            document.body.style.overflow = '';
        }
    });

    const modalTimerId = setTimeout(openModalWindow, 50000)

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1) {
            openModalWindow();
            window.removeEventListener('scroll', showModalByScroll);  
        }    
    }

    window.addEventListener('scroll', showModalByScroll);
}

module.exports = modal;