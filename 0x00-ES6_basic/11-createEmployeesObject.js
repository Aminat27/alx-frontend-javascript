export default function createEmployeesObject(departmentName, employees) {
  return{
    [Department]: [
      ...employees
    ],
  }
}