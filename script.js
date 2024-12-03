document.addEventListener("DOMContentLoaded", function () {
    const firstColumn = document.querySelectorAll('.sticky.col-input');
    const secondColumn = document.querySelectorAll('.sticky.col-data');
    const headerColumn = document.querySelector('.sticky.col-title');

    if (firstColumn && secondColumn) {
        // Get the width of the first sticky column
        const firstStickyWidth = firstColumn[0].offsetWidth;
        // Set the left property of the second sticky column
        headerColumn.style.left = `${firstStickyWidth}px`;
        secondColumn.forEach(item => { item.style.left = `${firstStickyWidth}px` });
    }
});
