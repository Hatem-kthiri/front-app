import React from "react";
import "./style.css";
import EmployeItem from "../EmployeItem/EmployeItem";
const EmployeList = () => {
  var List = [
    {
      fullName: "James King",
      work: "President and CEO",
    },
    {
      fullName: "Julie Tayloar",
      work: "VP of Marketing",
    },
    {
      fullName: "Eugene Lee",
      work: "CFO",
    },
    {
      fullName: "John Williams",
      work: "VP of Engineering",
    },
    {
      fullName: "Ray Moore",
      work: "VP of Sales",
    },
    {
      fullName: "Paul Jones",
      work: "QA Manager",
    },
  ];

  return (
    <div>
      {List.map((employe, index) => {
        return <EmployeItem employe={employe} text={"Hello"} />;
      })}
    </div>
  );
};

export default EmployeList;
