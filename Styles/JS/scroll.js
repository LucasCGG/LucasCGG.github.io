const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show-trans');
        }
        else{
            entry.target.classList.remove('show-trans');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden-trans');
hiddenElements.forEach((el) => observer.observe(el));
