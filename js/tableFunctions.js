// COLLEGE MORNING-IN QUERY & FETCHING TABLE
let user_college = 0;
let tbody = document.getElementById('tbody1');

function addItemToTable_college(fullname, course, year, time) {
    let trow = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');

    // assign elements to parameters (strings)

    td1.innerHTML = ++user_college;
    td2.innerHTML = fullname;
    td3.innerHTML = year;
    td4.innerHTML = course;
    td5.innerHTML = time;

    // add trow on tbody
    tbody.appendChild(trow);

    // add cells to row 
    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);

}


// Add all items to the table using foreach loop
function addAllItemsToTable_college(users_college) {
    user_college = 0;
    tbody.innerHTML = "";

    users_college.forEach(element => {
        addItemToTable_college(element.fullname, element.year, element.course, element.time);
    });

}

export { addItemToTable_college, addAllItemsToTable_college };