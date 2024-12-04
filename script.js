// Declarations
const table = document.querySelector('table');
const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

const leave_requests = document.querySelector('#leave-requests');
const leave_approved = document.querySelector('#leave-approved');
const search = document.querySelector('#search');

const data =
    [
        {
            "id": 1024,
            "img_src": "./static/60111.jpg",
            "name": "Robert Fox",
            "leave_type": "Annual Leave",
            "date": "Sep 12 - Sep 16, 2024",
            "duration": "5 days",
            "status": "Pending"
        },
        {
            "id": 1025,
            "img_src": "./static/60111.jpg",
            "name": "Arlene McCoy",
            "leave_type": "Sick Leave",
            "date": "Aug 2 - Aug 9, 2024",
            "duration": "8 days",
            "status": "Pending"
        },
        {
            "id": 1026,
            "img_src": "./static/60111.jpg",
            "name": "Brooklyn Simmons",
            "leave_type": "Annual Leave",
            "date": "April 18 - April 21, 2024",
            "duration": "4 days",
            "status": "Pending"
        },
        {
            "id": 1027,
            "img_src": "./static/60111.jpg",
            "name": "Darlene Robertson",
            "leave_type": "Annual Leave",
            "date": "April 1 - April 4, 2024",
            "duration": "4 days",
            "status": "Approved"
        },
        {
            "id": 1028,
            "img_src": "./static/60111.jpg",
            "name": "Jacob Jones",
            "leave_type": "Annual Leave",
            "date": "Mar 6 - Mar 7, 2024",
            "duration": "2 days",
            "status": "Approved"
        },
        {
            "id": 1029,
            "img_src": "./static/60111.jpg",
            "name": "Devon Lane",
            "leave_type": "Annual Leave",
            "date": "Feb 16 - Feb 18, 2024",
            "duration": "3 days",
            "status": "Declined"
        },
        {
            "id": 1030,
            "img_src": "./static/60111.jpg",
            "name": "Kathryn Murphy",
            "leave_type": "Sick Leave",
            "date": "Feb 1 - Feb 4, 2024",
            "duration": "4 days",
            "status": "Pending"
        },
        {
            "id": 1031,
            "img_src": "./static/60111.jpg",
            "name": "Ralph Edwards",
            "leave_type": "Paternity Leave",
            "date": "Dec 22 2023 - Jan 24, 2024",
            "duration": "31 days",
            "status": "Approved"
        },

        {
            'id': 1110,
            "img_src": "./static/60111.jpg",
            "name": "John Doe",
            "leave_type": "Sick Leave",
            "date": "Dec 1 - Dec 7, 2024",
            "duration": "7 days",
            "status": "Approved"
        },
        {
            'id': 1120,
            "img_src": "./static/60111.jpg",
            "name": "Emily Carter",
            "leave_type": "Casual Leave",
            "date": "Nov 20 - Nov 25, 2024",
            "duration": "6 days",
            "status": "Pending"
        },
        {
            'id': 1140,
            "img_src": "./static/60111.jpg",
            "name": "Michael Brown",
            "leave_type": "Earned Leave",
            "date": "Dec 15 - Dec 30, 2024",
            "duration": "16 days",
            "status": "Approved"
        },
        {
            'id': 1112,
            "img_src": "./static/60111.jpg",
            "name": "Sarah Lee",
            "leave_type": "Maternity Leave",
            "date": "Oct 1 - Dec 31, 2024",
            "duration": "92 days",
            "status": "Approved"
        },
        {
            'id': 1230,
            "img_src": "./static/60111.jpg",
            "name": "David Johnson",
            "leave_type": "Casual Leave",
            "date": "Nov 10 - Nov 15, 2024",
            "duration": "6 days",
            "status": "Declined"
        },
        {
            'id': 1234,
            "img_src": "./static/60111.jpg",
            "name": "Olivia Smith",
            "leave_type": "Sick Leave",
            "date": "Dec 3 - Dec 5, 2024",
            "duration": "3 days",
            "status": "Approved"
        },
        {
            'id': 4321,
            "img_src": "./static/60111.jpg",
            "name": "Ethan Taylor",
            "leave_type": "Casual Leave",
            "date": "Nov 28 - Dec 2, 2024",
            "duration": "5 days",
            "status": "Pending"
        },
        {
            'id': 8097,
            "img_src": "./static/60111.jpg",
            "name": "Sophia Martinez",
            "leave_type": "Study Leave",
            "date": "Nov 5 - Dec 5, 2024",
            "duration": "31 days",
            "status": "Approved"
        },
        {
            'id': 1156,
            "img_src": "./static/60111.jpg",
            "name": "Liam Anderson",
            "leave_type": "Casual Leave",
            "date": "Nov 18 - Nov 21, 2024",
            "duration": "4 days",
            "status": "Declined"
        },
        {
            'id': 1970,
            "img_src": "./static/60111.jpg",
            "name": "Ava Wilson",
            "leave_type": "Parental Leave",
            "date": "Nov 1 - Nov 30, 2024",
            "duration": "30 days",
            "status": "Approved"
        }
    ]

function main() { // Logics Start here
    thead.appendChild(row_thead());
    data_Insert(data);
    events()
}
main() // function Call

function data_Insert(obj) {
    obj.forEach(item => {
        tbody.appendChild(row(item.id, item.img_src, item.name, item.leave_type, item.date, item.duration, item.status))
    });
    freeze_columns();
}

// table structure
function row(id, profile_img, name, leave_type, date, duration, status) {
    const row = document.createElement('tr');
    row.className = 'row';
    const html = `
    <td class="col-input sticky"><input type="checkbox"  id="${id}" /></td>
    <td class="col-data sticky Employee-name">
    <span class='img'>
        <img src="${profile_img}" alt="profile-img">
    <span>
        <span class='name'>${name}</span>
    </td>
    <td class="col-data">${leave_type}</td>
    <td class="col-data">${date}</td>
    <td class="col-data">${duration}</td>
    <td class="col-data">
        <span class="status" data-status="${status}">
            ${status}
        </span>
    </td>
    <td class="action"><i class="fa-solid fa-ellipsis-vertical"></i></td>
    `
    row.innerHTML = html;
    return row;
}

function row_thead() {
    const row = document.createElement('tr');
    const html = `
    <th class="col-input sticky">
        <input type="checkbox" name="select-all" id="select-all" />
    </th>
    <th class="col-title sticky">Employee</th>
    <th class="col-title">Leave Type</th>
    <th class="col-title">Date Requested</th>
    <th class="col-title">Duration</th>
    <th class="col-title">Status</th>
    <th></th>`;
    row.innerHTML = html;
    return row;
}

// Events

function events() {
    leave_approved.addEventListener('click', (e) => {
        leave_requests.classList.remove('active');
        e.target.classList.add('active');
        let status_approved = data.filter(item => item.status === 'Approved');
        tbody.innerHTML = '';
        data_Insert(status_approved);
    })
    leave_requests.addEventListener('click', (e) => {
        leave_approved.classList.remove('active');
        e.target.classList.add('active');
        tbody.innerHTML = '';
        data_Insert(data);
    })

    search.addEventListener('input', () => {
        if (search.value !== '') {
            searchByName(search.value);
        }
    })
}



// for column freeze in Table
function freeze_columns() {
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
}


// search Using Name
function searchByName(search_string) {
    const Employee_td = document.querySelectorAll('.Employee-name');
    Employee_td.forEach(td => {
        let parent = td.parentElement;
        let Employee_name = td.querySelector('.name').textContent;
        Employee_name.toLocaleLowerCase().includes(search_string.toLocaleLowerCase()) ? parent.style.display = 'table-row' : parent.style.display = 'none';
    })
}