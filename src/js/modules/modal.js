function openModalWindow(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);

    modal.classList.remove('hide');
    modal.classList.add('show', 'fade');
    document.body.style.overflow = 'hidden'; 
    
    console.log(modalTimerId);
    if (modalTimerId) {
    clearInterval(modalTimerId); 
    }
}

function closeModalWinow(modalSelector) {
    const modal = document.querySelector(modalSelector);
    
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function modal(triggerSelector, modalSelector, modalTimerId) {
    const modalOpen = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector);
    
    modalOpen.forEach(btn => {
        btn.addEventListener('click', () => openModalWindow(modalSelector, modalTimerId));
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModalWinow(modalSelector);
        }    
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModalWinow(modalSelector);
            document.body.style.overflow = '';
        }
    });

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1) {
            openModalWindow(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);  
        }    
    }

    window.addEventListener('scroll', showModalByScroll);
}

export default modal;
export {openModalWindow};
export {closeModalWinow};