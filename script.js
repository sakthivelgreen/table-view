function freeze_columns() {
    const firstColumn = document.querySelectorAll('#myTable td:nth-child(1), #myTable th:nth-child(1)');
    const secondColumn = document.querySelectorAll('#myTable td:nth-child(2), #myTable th:nth-child(2)');

    // Get the initial left positions of the first two columns
    const firstColumnLeft = firstColumn[0].getBoundingClientRect().left;
    const secondColumnLeft = secondColumn[0].getBoundingClientRect().left;

    // Set the sticky positions dynamically
    firstColumn.forEach(cell => {
        cell.style.position = 'sticky';
        cell.style.left = `${firstColumnLeft}px`;  // Position the first column at its initial place
    });

    secondColumn.forEach(cell => {
        cell.style.position = 'sticky';
        cell.style.left = `${secondColumnLeft}px`;  // Position the second column at its initial place
    });
}
freeze_columns()
