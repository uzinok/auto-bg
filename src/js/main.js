window.onload = () => {
    let headings = document.querySelectorAll('.heading-bd');
    let style = '';

    for (let i = 0; i < headings.length; i++) {
        headings[i].classList.add('heading-bd--' + i);

        style += `.heading-bd--${i}::before{background-color: rgb(${Math.round(randomInteger(190, 220))},${Math.round(randomInteger(220, 250))},${Math.round(randomInteger(190, 220))});transform: rotate(${randomInteger(-2, 2)}deg)}`;
    }

    let styleTag = document.createElement('style');
    styleTag.innerHTML = style;
    document.head.appendChild(styleTag);

    function randomInteger(min, max) {
        return min - 0.5 + Math.random() * (max - min + 1);
        // return Math.round(rand);
      }
};