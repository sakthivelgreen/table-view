document.addEventListener("DOMContentLoaded", function () {
    const firstColumn = document.querySelectorAll('.sticky.col-input');
    const secondColumn = document.querySelectorAll('.sticky.col-data');
    const headerColumn = document.querySelector('.sticky.col-title');

    if (firstColumn && secondColumn) {
        firstColumn.forEach(item => { item.style.padding = '16px 30px' })
        const firstStickyWidth = firstColumn[0].offsetWidth;
        headerColumn.style.left = `${firstStickyWidth}px`;
        secondColumn.forEach(item => { item.style.left = `${firstStickyWidth}px` });
    }

    const tableContainer = document.querySelector('.container');
    const cells = document.querySelectorAll('td:not(.sticky), th:not(.sticky)');

    tableContainer.addEventListener('scroll', () => {

        cells.forEach(cell => {
            const cellRect = cell.getBoundingClientRect();

            if (cellRect.left - tableContainer.getBoundingClientRect().left <= 50) {
                cell.style.opacity = 0;
            } else {
                cell.style.opacity = 1;
            }

        });
    });

});