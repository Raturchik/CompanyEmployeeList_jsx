import { useState } from "react";
import style from "./employeeAddForm.module.scss";
const EmployeeAddForm = (addEmployee) => {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");

  const setNewEmployee = (formData) => {
    console.log(formData.get("name"));

    const newEmployee = {
      name: name,
      salary: parseInt(salary),
    };

    console.log("Новый сотрудник:", newEmployee);

    addEmployee(newEmployee);
    setName("");
    setSalary("");
  };

  return (
    <div className={style.addForm}>
      <form action={setNewEmployee} className={style.employeeData}>
        <input
          className={style.input}
          type="text"
          name="name"
          value={name}
          placeholder="Как его зовут?"
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
        <input
          className={style.input}
          type="number"
          name="salary"
          value={salary}
          placeholder="З/П в $?"
          onChange={(e) => {
            setSalary(e.target.value);
          }}
          required
        />
        <button className={style.addBtn} type="submit">
          Добавить
        </button>
      </form>
    </div>
  );
};

export default EmployeeAddForm;
