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
    Action_Event()
    checkbox_Event()
}

// table structure
function row(id, profile_img, name, leave_type, date, duration, status) {
    const row = document.createElement('tr');
    row.className = 'row';
    row.id = id;
    const html = `
    <td class="col-input sticky" ><input type="checkbox" /></td>
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
    <td class="action">
        <i class="fa-solid fa-ellipsis-vertical"></i>
    </td>
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
        if (search.value.trim() !== '') {
            searchByName(search.value);
        }
        if (search.value.trim() === '') {
            tbody.innerHTML = '';
            data_Insert(data);
        }
    })

    // checkbox_Event()
    // Action_Event()
}
function checkbox_Event() {
    document.querySelectorAll('input[type="checkbox"]').forEach(item => {
        item.addEventListener('change', checkBox)
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


// Search using name
function searchByName(search_string) {
    const Employee_td = document.querySelectorAll('.Employee-name');
    Employee_td.forEach(td => {
        tbody.innerHTML = '';
        let Emp_details = data.filter(item => item.name.trim().toLocaleLowerCase().includes(search_string.trim().toLocaleLowerCase()))
        data_Insert(Emp_details);
    })
}

// CheckBox 
function checkBox(e) {
    const select_all_checkBox = thead.querySelector('#select-all');
    const allCheckbox = Array.from(tbody.querySelectorAll('input[type="checkbox"]'));
    let checkedItems;
    if (e.target.id === 'select-all') {
        allCheckbox.forEach(item => {
            item.checked = e.target.checked;
        })
    }
    checkedItems = allCheckbox.filter(item => item.checked)
    if (checkedItems.length > 0 && checkedItems.length < allCheckbox.length) {
        select_all_checkBox.indeterminate = true;
    } else if (checkedItems.length === allCheckbox.length) {
        select_all_checkBox.indeterminate = false;
        select_all_checkBox.checked = true;
    } else {
        select_all_checkBox.checked = false;
        select_all_checkBox.indeterminate = false;
    }
}

function action_menu() {
    let div = document.createElement('div');
    div.className = 'action-div';
    const html = `
            <ul class='action-ul'>
                <li id='approve'><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    Approve
                </li>
                <li id='decline'>
                    <svg width="15px" height="15px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1">
                    <path d="m10.25 5.75-4.5 4.5m0-4.5 4.5 4.5"/>
                    <rect height="10.5" width="10.5" y="2.75" x="2.75"/>
                    </svg>
                    Decline
                </li>
            </ul>
    `;
    div.innerHTML = html;
    return div;
}


// function Approve Decline Event

function Action_Event() {
    let currentOpenDiv = null;
    document.querySelectorAll('.action').forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            let parent = e.target.closest('td');
            let div = action_menu();
            let existing = parent.querySelector('.action-div');
            if (currentOpenDiv) currentOpenDiv.remove();
            if (!existing) {
                parent.appendChild(div);
                currentOpenDiv = div;
                div.addEventListener('click', (e) => {
                    e.stopPropagation();
                })
            } else {
                existing.remove();
                currentOpenDiv = null;
            }
            let approve = document.querySelector('#approve');
            let decline = document.querySelector('#decline');
            if (approve) {
                approve_decline(approve, 'Approved')
            }
            if (decline) {
                approve_decline(decline, 'Declined')
            }
        });
    });

    // Event for Resetting action-div when clicked outside
    document.addEventListener('click', (event) => {
        if (currentOpenDiv && !currentOpenDiv.contains(event.target) && !event.target.closest('.action')) {
            currentOpenDiv.remove();
            currentOpenDiv = null;
        }
    });
}

function approve_decline(element, msg) {
    element.addEventListener('click', (e) => {
        let parent = e.target.closest('tr');
        parent.querySelector('.status').setAttribute('data-status', msg);
        parent.querySelector('.status').textContent = msg;

        for (const item of data) {
            if (item.id === Number(parent.id)) {
                item.status = msg;
            }
        }
        element.closest('.action-div').remove();
    })
}