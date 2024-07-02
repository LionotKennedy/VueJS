const animatedScrollObserver = new IntersectionObserver(
    (entries, animatedScrollObserver) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                entry.target.classList.add('before-enter');
                animatedScrollObserver.unobserve(entry.target);
            }
        })
    }
)

export default {
    bind(elem) {
        elem.classList.add('before-enter');
        animatedScrollObserver.observe(elem);
    }
}