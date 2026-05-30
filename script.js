let navbar = document.querySelector('.navbar')


document.querySelector('#menu-btn').onclick =()=>{

   searchform.classList.remove('active');
   cartItem.classList.remove('active');

   navbar.classList.toggle('active');

}

let searchform = document.querySelector('.search-form')

 document.querySelector('#search-btn').onclick =()=>{

    navbar.classList.remove('active');
    cartItem.classList.remove('active');

    searchform.classList.toggle('active')
    
}

let cartItem = document.querySelector('.cart-items-container')

 document.querySelector('#cart-btn').onclick =()=>{

    searchform.classList.remove('active');
    navbar.classList.remove('active');

    cartItem.classList.toggle('active')
    
    
}




let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar a');

window.onscroll = () => {

   navbar.classList.remove('active');
   searchform.classList.remove('active');
   cartItem.classList.remove('active');

    let current = '';

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop - 200 &&
           pageYOffset < sectionTop + sectionHeight - 200){

            current = section.getAttribute('id');
        }

    });

    navLinks.forEach(link => {

        link.classList.remove('active');

        if(link.getAttribute('href') === `#${current}`){
            link.classList.add('active');
        }

    });

};

document.querySelectorAll('.navbar a').forEach(link => {

   link.onclick = () => {
       navbar.classList.remove('active');
   }

});

document.addEventListener('click', (e) => {

   if(
       !e.target.closest('.navbar') &&
       !e.target.closest('#menu-btn')
   ){
       navbar.classList.remove('active');
   }

});

