export const hamburguerButton = () =>{

    const hamburguerButton = document.querySelector('#hamburger-button');
    const hamburguerMenu = document.querySelector('#hamburger-menu')
    const overlay = document.querySelector('#overlay')

    hamburguerButton.addEventListener('click', () => {

            hamburguerButton.classList.toggle('--active');
            hamburguerMenu.classList.toggle('--active');
            overlay.classList.toggle('--active');
    });
}