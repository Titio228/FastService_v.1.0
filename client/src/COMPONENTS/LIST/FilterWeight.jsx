import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";

export default function FilterWeight() {
  const [selectedWeight, setSelectedWeight] = useState(null);
  const weights = [
    { name: "XS" },
    { name: "S" },
    { name: "L" },
    { name: "XL" },
    { name: "M" },
    { name: "XXL" },
  ];

  const selectedWeightTemplate = (option, props) => {
    if (option) {
      return (
        <div className="flex align-items-center">
          <div>{option.name}</div>
        </div>
      );
    }

    return <span>{props.placeholder}</span>;
  };

  const weightOptionTemplate = (option) => {
    return (
      <div className="flex align-items-center">
        <div>{option.name}</div>
      </div>
    );
  };

  return (
    <div className="card flex justify-content-center">
      <Dropdown
        value={selectedWeight}
        onChange={(e) => setSelectedWeight(e.value)}
        options={weights}
        optionLabel="name"
        placeholder="Choisir une taille"
        filter
        valueTemplate={selectedWeightTemplate}
        itemTemplate={weightOptionTemplate}
        className="w-auto mb-3"
      />
    </div>
  );
}
