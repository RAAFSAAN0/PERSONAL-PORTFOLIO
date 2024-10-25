let section = document.querySelectorAll('section');
let navlinks = document.querySelector('header nav a');

window.onscroll= ()=> {
    sections.forEach(sec => {

        let top=window.scrollY;
        let offset = sec.offsetTop -150;
        let height=sec.offsetHeight;
        let id= sec.getAttribute('id');

        if(top >=offset && top<offset+height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.srollY>100);
};


ScrollReveal({
    reset:true,
    distance: '80px',
    duration: 2000,
    delay: 200

});

ScrollReveal().reveal('.home-content,.heading',{origin:'top'});
ScrollReveal().reveal('.home-img,.services-container, .portfolio-box, .contact form',{origin:'bottom'});


ScrollReveal().reveal('.home-content h1, .about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content',{origin:'right'});

ScrollReveal().reveal('.home-content p, .education-content',{origin:'right'});
ScrollReveal().reveal('.home-content p, .project-container',{origin:'right'});



const typed=new Typed('.multiple-text',{
    strings:['Student','Blogger','Machine Learning Developer' ],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
