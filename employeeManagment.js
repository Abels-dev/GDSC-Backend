function Employee(id, name, postion, department) {
   this.id = id;
   this.name = name;
   this.postion = postion;
   this.department = department;
}
let jsonData;
let employeeList = [];

const addEmployee = (id, name, postion, department) => {
   let duplicateId = false;
   employeeList.forEach((employee) => {
      if (employee.id == id) {
         duplicateId = true;
         return;
      }
   });
   if (duplicateId) {
      // used to prevent duplicated id entry
      console.log("Id already exists please choose another id");
      return;
   }
   employeeList.push(new Employee(id, name, postion, department));
   jsonData = JSON.stringify(employeeList);
};

addEmployee("12", "dagim", "junior", "cs");
addEmployee("13", "daniel", "junior", "cs");
addEmployee("15", "berihun", "senior", "cs");

const listEmployees = () => {
   console.log("Employee List");
   for (const employee of employeeList) {
      console.log(
         "| Id - " +
            employee.id +
            " | Name - " +
            employee.name +
            " | Position - " +
            employee.postion +
            " | Department - " +
            employee.department
      );
   }
};

const findEmployee = (id) => {
   const searchedEmployee = employeeList.find((employee) => employee.id == id);
   if (searchedEmployee) {  // checks if the searchedEmployee holds truthy value
      console.log("Employee has been found");
      console.log(
         "| Id - " +
            searchedEmployee.id +
            " | Name - " +
            searchedEmployee.name +
            " | Position - " +
            searchedEmployee.postion +
            " | Department - " +
            searchedEmployee.department
      );
   } else console.log("Employee not found ");
};

//findEmployee("15");

const updateEmployee = (id, newName, newPosition, newDepartment) => {
   let isUpdated = false; // used to track if the employee has been updated succesfully or not 
   employeeList = employeeList.map((employee) => {
      if (employee.id == id) {
         employee.name = newName;
         employee.postion = newPosition;
         employee.department = newDepartment;
         isUpdated = true;
      }
      return employee;
   });
   if (isUpdated) {  // checks if it was updated successfully
      console.log("successfully updated the employee information");
      jsonData = JSON.stringify(employeeList); // update the json file 
   } else
      console.log("can't update the employee the employee id doesn't exist");
};

const deleteEmployee = (id) => {
   let isDeleted = false;  // used to track if the employee has been deleted succesfully or not 
   employeeList.forEach((employee, index) => {
      if (employee.id == id) {
         employeeList.splice(index, 1);
         isDeleted = true;
      }
   });
   if (isDeleted) {  // checks if it was deleted successfully
      console.log("successfully deleted the employee");
      jsonData = JSON.stringify(employeeList); // update the json file 
   } else
      console.log("can't delete the employee the employee id doesn't exist");
};

// updateEmployee("12", "Fekadu", "marketing director", "marketing");
// deleteEmployee("13");
listEmployees();
