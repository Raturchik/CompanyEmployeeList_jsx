import { useState } from "react";
const EmployeeAddForm = ({ addEmployee, ...props }) => {
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
    <div className={props.classNameForm}>
      <form action={setNewEmployee} className={props.classNameData}>
        <input
          className={props.classNameInp}
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
          className={props.classNameInp}
          type="number"
          name="salary"
          value={salary}
          placeholder="З/П в $?"
          onChange={(e) => {
            setSalary(e.target.value);
          }}
          required
        />
        <button className={props.classNameAdd} type="submit">
          Добавить
        </button>
      </form>
    </div>
  );
};

export default EmployeeAddForm;
