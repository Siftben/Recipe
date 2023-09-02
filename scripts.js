const triggers = document.querySelectorAll('.cool > a');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.cool');
let dropdown;

  function handleEnter() {
    this.classList.add('trigger-enter');
    setTimeout(() => {
      if(this.classList.contains('trigger-enter')){
        this.classList.add('trigger-enter-active')
      }
    }, 150);
    background.classList.add('open');

    dropdown = this.querySelector('.dropdown');
    dropdown.style.zIndex = '+1';
    background.style.zIndex = '+1';

    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();

    const coords = {
      height: dropdownCoords.height,
      width: dropdownCoords.width,
      top: dropdownCoords.top - navCoords.top,
      left: dropdownCoords.left - navCoords.left
    };

    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
  }

  function handleLeave() {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    //setTimeout(() => this.classList.remove('trigger-enter-active'), 150);
    background.classList.remove('open');
    dropdown.style.zIndex = '-1';
    background.style.zIndex = '-1';
    
  }

  triggers.forEach(trigger => trigger.addEventListener('click', handleEnter));
  triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));