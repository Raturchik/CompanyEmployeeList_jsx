import { useState } from "react";

import {
  EmployeeCount,
  BonusCount,
} from "../components/description/descriptionImport";
import {
  FindEmployee,
  FilterEmployee,
} from "../components/findFilterEmployee/findFilterImport";
import { EmployeeInfo } from "../components/employeeCard/employeeImport";
import EmployeeAddForm from "../components/addEmployee/EmployeeAddForm";

import style from "./App.module.scss";

function App() {
  const [employee, setEmployee] = useState([
    {
      id: 1,
      name: "John",
      salary: "1000",
      isGiveBonuses: true,
    },
  ]);

  console.log(employee);

  const addEmployee = (newEmployee) => {
    const nextEmployee = {
      ...newEmployee,
      id: employee.length + 1,
    };
    setEmployee([...employee, nextEmployee]);
  };

  const deleteEmpById = (id) => {
    setEmployee((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <section className={style.section}>
      <div className={style.top}>
        <h2>Учет сотрудников компании N</h2>
        <EmployeeCount count={employee} />
        <BonusCount />
      </div>
      <div className={style.findEmployee}>
        <FindEmployee />
        <FilterEmployee />
      </div>
      <div className={style.employeeCard}>
        <EmployeeInfo employee={employee} onDelete={deleteEmpById} />
      </div>
      <div className={style.addNewEmployee}>
        <h2>Добавьте нового сотрудника</h2>
        <EmployeeAddForm addEmployee={addEmployee} />
      </div>
    </section>
  );
}

export default App;
