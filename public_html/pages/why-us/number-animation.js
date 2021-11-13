const counter = document.querySelectorAll('.counter');
const speed = 734;

counter.forEach(counter => {
    const updateCount = () => {
        const final = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = final / speed;

        if (count < final) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 1);
        } else {

            count.innerText = final;
        }
    }
    updateCount();
});