
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// // Animations on Scroll
// const sections = document.querySelectorAll('.section');

// const options = {
//     threshold: 0.1
// };

// const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show');
//             observer.unobserve(entry.target);
//         }
//     });
// }, options);

// sections.forEach(section => {
//     observer.observe(section);
// });
// Smooth Scroll
// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animations on Scroll
const sections = document.querySelectorAll('.section');

const options = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});
