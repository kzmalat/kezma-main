/* ================= STATISTICS COUNTER ================= */

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");
        let count = 0;

        const updateCounter = () => {

            const increment = Math.ceil(target / 100);

            if (count < target) {

                count += increment;

                if (count > target) count = target;

                counter.innerText = count.toLocaleString();

                setTimeout(updateCounter, 20);

            }

        };

        updateCounter();

    });

};

const statsSection = document.querySelector(".stats-section");

let counterStarted = false;

function checkStatsInView() {

    if (!statsSection || counterStarted) return;

    const sectionTop = statsSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 100) {

        counterStarted = true;

        startCounter();

    }

}

window.addEventListener("scroll", checkStatsInView);
window.addEventListener("load", checkStatsInView); // NEW: also check on initial load