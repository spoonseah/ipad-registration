import React, { useState } from "react";
import Select from "react-select";

function App() {
  const data = [
    {
      value: 1,
      label: "cerulean",
    },
    {
      value: 2,
      label: "fuchsia rose",
    },
    {
      value: 3,
      label: "true red",
    },
    {
      value: 4,
      label: "aqua sky",
    },
    {
      value: 5,
      label: "tigerlily",
    },
    {
      value: 6,
      label: "blue turquoise",
    },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setSelectedOption(e);
  };
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px dotted pink",
      color: state.isSelected ? "red" : "blue",
      padding: 20,
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: 200,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };

  return (
    <div className="App">
      <Select
        placeholder="Select Option"
        value={selectedOption} // set selected value
        options={data} // set list of the data
        onChange={handleChange} // assign onChange function
        styles={customStyles}
      />
    </div>
  );
}

export default App;
