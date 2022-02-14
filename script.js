fetch("http://dummy.restapiexample.com/api/v1/employees")
  .then((response) => response.json())
  .then((data) => render(data.data))
  .catch((error) => console.log(error));

function render(data) {
  let employees = document.getElementById("list");

  data.forEach((employee) => {
    console.log(employee);
    employeeDiv = document.createElement("div");
    employeeDiv.className = "empDiv";
    names = document.createElement("h1");
    age = document.createElement("h3");
    salary = document.createElement("h3");

    names.innerHTML = employee.employee_name;
    salary.innerHTML = "Salary: " + employee.employee_salary;
    age.innerHTML = "Age: " + employee.employee_age;

    employeeDiv.append(names);
    employeeDiv.append(age);
    employeeDiv.append(salary);
    employees.append(employeeDiv);
  });
}
