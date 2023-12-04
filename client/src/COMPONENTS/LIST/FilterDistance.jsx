import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";

export default function FilterDistance() {
  const [selectedDistance, setSelectedDistance] = useState(null);
  const distances = [
    { name: "1 - 50km" },
    { name: "50 - 100km" },
    { name: "100 - 200km" },
  ];

  const selectedDistanceTemplate = (option, props) => {
    if (option) {
      return (
        <div className="flex align-items-center flex-wrap">
          <div>{option.name}</div>
        </div>
      );
    }

    return <span>{props.placeholder}</span>;
  };

  const distanceOptionTemplate = (option) => {
    return (
      <div className="flex align-items-center">
        <div>{option.name}</div>
      </div>
    );
  };

  return (
    <div className="card flex justify-content-center">
      <Dropdown
        value={selectedDistance}
        onChange={(e) => setSelectedDistance(e.value)}
        options={distances}
        optionLabel="name"
        placeholder="Choisir une distance"
        filter
        valueTemplate={selectedDistanceTemplate}
        itemTemplate={distanceOptionTemplate}
        className="w-auto mb-3"
      />
    </div>
  );
}
