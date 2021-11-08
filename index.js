// PARALLAX
function isElementInViewport(node) {
    const domRect = node.getBoundingClientRect();
    return (
        (domRect.height > 0 || domRect.width > 0) &&
        domRect.bottom >= 0 &&
        domRect.right >= 0 &&
        domRect.top <=
            (window.innerHeight || document.documentElement.clientHeight) &&
        domRect.left <=
            (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll() {
    const parallaxElements = document.querySelectorAll(".parallax");
    parallaxElements.forEach((each) => {
        if (isElementInViewport(each)) {
            const percentageOfParallaxElementChipped = Math.round(
                (each.getBoundingClientRect().top / each.clientHeight) * 100
            );
            each.style.backgroundPositionY =
                parseInt(-(percentageOfParallaxElementChipped * 1.5)) + "px";
        }
    });
}

window.addEventListener("scroll", handleScroll);
