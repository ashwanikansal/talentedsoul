const parallex = ()=>{

    const homeimg = document.querySelector('.space');
    const back1 = document.querySelector('header .back1');
    const back2 = document.querySelector('header .back2');
    const back3 = document.querySelector('header .back3');
    const back4 = document.querySelector('header .back4');
    const back5 = document.querySelector('header .back5');

    window.addEventListener('scroll', ()=>{
        const y = window.scrollY;
        back1.style.transform = `translateY(-${y/2}px)`;
        back2.style.transform = `translateY(-${y/4}px)`;
        back3.style.transform = `translateY(-${y/8}px)`;
        back4.style.transform = `translateY(-${y/16}px)`;
        back5.style.transform = `translateY(-${y/32}px)`;

        homeimg.style.transform = `translateY(-${y/2}px)`;
    });


};

const stickynav = () => {
    const navbar = document.querySelector('.navbar');
    const logo = document.querySelector('.navbar .logo');
    // const navlinks = document.querySelector('.navbar .navlinks');
    const burgerline = document.querySelectorAll('.navbar .line');
    
    window.addEventListener('scroll', ()=>{
        const y = window.scrollY;
        if( y > 8){
            navbar.classList.add('sticky');
            logo.classList.add('sticky');
            // navlinks.classList.add('sticky');
            burgerline.forEach(line=>{
                line.classList.add('sticky');
            });
        }
        else{
            navbar.classList.remove('sticky');
            logo.classList.remove('sticky');
            // navlinks.classList.remove('sticky');
            burgerline.forEach(line=>{
                line.classList.remove('sticky');
            });
        }
    });
}

parallex();
stickynav();