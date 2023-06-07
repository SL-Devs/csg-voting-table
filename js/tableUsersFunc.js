// COLLEGE MORNING-IN QUERY & FETCHING TABLE
let user_college = 0;
let tbody = document.getElementById('tbody1');

function addItemToTable_college(name) {
    let trow = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');

    // assign elements to parameters (strings)

    td1.innerHTML = ++user_college;
    td2.innerHTML = name;

    // add trow on tbody
    tbody.appendChild(trow);

    // add cells to row 
    trow.appendChild(td1);
    trow.appendChild(td2);

}


// Add all items to the table using foreach loop
function addAllItemsToTable_college(users_college) {
    user_college = 0;
    tbody.innerHTML = "";

    users_college.forEach(element => {
        addItemToTable_college(element.name);
    });

}

export { addItemToTable_college, addAllItemsToTable_college };