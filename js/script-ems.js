// GLOBAL VARIABLES
let id, name, extension, email, department;
let form = document.getElementById('addForm');          // Get the 'Add Employee' Form object from the DOM
let table = document.getElementById('empTable');         // Get the 'Employees Table' object from the DOM
let tbody = document.getElementById('empTableBody');     // Get the 'Employees Table' TBODY section from the DOM
let tbodyRows, tbodyContent;
let empCountOutput = document.getElementById('empCount');
let empCount;

// CREATE AN ARRAY OF EMPLOYEES [id, name, 4-digit, email, dept]
let storage;
let employee = [];
let employees = [
[12323476, 'Zak Ruvalcaba', 4242, 'zruvalca@sdccd.edu', 'Executive'],
[73456345, 'Sally Smith', 2423, 'sally@vectacorp.com', 'Administration'],
[94949539, 'Mark Martin', 3456, 'mark@vectacorp.com', 'Marketing'],
[24836954, 'Greg Green', 2987, 'greg@vectacorp.com', 'Engineering'],
[32693682, 'Jane Jones', 9384, 'jan@vectacorp.com', 'Sales'] ];


// SET FOCUS AT THE ID TEXT BOX WHEN THE PAGE LOADS
document.getElementById("id").focus();

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF STORAGE OBJECT EXISTS, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
storage = localStorage.getItem('employees' || [])
if (storage.length = 0) {
    console.log("Local Storage is Empty! Use employees array and update local storage.")
    // UPDATE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employees));
} else {
    employees = JSON.parse(localStorage.getItem('employees'))
}

// GET DOM ELEMENTS - Helper Function
const $ = (id) => document.getElementById(id);

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid();

// GET EMPLOYEE COUNT AND DISPLAY
displayEmpCount();

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    tbody.innerHTML = "";
    tbodyRows = "";
    // REBUILD THE TBODY FROM SCRATCH AND BIND TO EMPLOYEE TABLE
    // LOOP THROUGH THE ARRAY OF EMPLOYEES. REBUILDING THE ROW STRUCTURE
    for (let i=0; i<employees.length; i++) {
        const row = document.createElement("tr");
        row.setAttribute("row-id", employees[i][0]);
        row.innerHTML= `
            <td>${employees[i][0]}</td>
            <td>${employees[i][1]}</td>
            <td>${employees[i][2]}</td>
            <td>${employees[i][3]}</td>
            <td>${employees[i][4]}</td>
            <td><button class="btn btn-danger btn-sm float-end delete">X</button></td>
        `;
        tbody.appendChild(row);
    };
};

// ADD EMPLOYEE FUNCTION
function addEmployee() {
    // GET THE VALUES FROM THE FORM ELEMENTS
    id = parseInt($('id').value);
    name = $('name').value;
    extension = parseInt($('extension').value);
    email = $('email').value;
    department = $('department').value;
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    employee.push(id, name, extension, email, department);
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(employee);
    // UPDATE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employees));
    // BUILD THE GRID
    buildGrid();
    // DISPLAY UPDATED EMPLOYEE COUNT
    displayEmpCount();
    // RESET THE FORM (CLEAR THE FORM)
    form.reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById("id").focus();
    // RESET THE TEMP EMPLOYEE VARIABLE FOR THE NEXT ADD EMPLOYEE
    employee = [];
};

// DELETE EMPLOYEE FUNCTION
function deleteEmployee(rowID) {
    // REMOVE EMPLOYEE FROM ARRAY
    const index = employees.findIndex(emp => emp[0] === rowID);
    console.log(rowID + ",  " + index);
    if (index !== -1) {
        employees.splice(index, 1);
        // UPDATE THE ARRAY IN STORAGE
        localStorage.setItem('employees', JSON.stringify(employees));
        // BUILD THE GRID
        buildGrid();
        // DISPLAY UPDATED EMPLOYEE COUNT
        displayEmpCount();
    }
}

form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // CALL FUNCTION addEmployee() TO ADD NEW EMPLOYEE
    addEmployee();
});

empTable.addEventListener('click', (e) => {
    // GET THE SELECTED ROW INDEX FOR THE TR (PARENTNODE.PARENTNODE)
    if (e.target.classList.contains('delete')) {
        // CONFIRM THE DELETE
        if (confirm('Are you sure you want to delete this employee?')) {
            const row = e.target.closest("tr");
            const rowID = parseInt(row.getAttribute("row-id"));
            console.log(rowID)   
            deleteEmployee(rowID);
        }
    }
});

// Refresh Employee Count Display
function displayEmpCount() {
    empCount = employees.length;
    if (empCount > 0) {
        empCountOutput.innerHTML = `(${empCount})`;
    } else {
        empCountOutput.innerHTML = "";
    }
}