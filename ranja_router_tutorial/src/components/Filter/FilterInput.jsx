import React from "react";
import useFilterInput from "./hooks/useFilterInput";

const TextInput = (props) => {
  const [value, onChange] = useFilterInput("", props.name);
  return (
    <label htmlFor={props.id ?? ""}>
      <h3>{props.title ?? ""}</h3>
      <input {...props} value={value} onChange={onChange} />
    </label>
  );
};

const RangeInput = (props) => {
  const [value, onChange] = useFilterInput(0, props.name);
  return (
    <label htmlFor={props.htmlFor ?? ""}>
      <input {...props} value={value} onChange={onChange} type='range' />
      <span>{value}</span>
    </label>
  );
};

const FilterInput = ({ type, inputProps }) => {
  if (type === "TEXT") {
    return <TextInput {...inputProps} />;
  }
  if (type === "RANGE") {
    return <RangeInput {...inputProps} />;
  }

  if (type === "CHECKBOX") {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <h3>{inputProps.title ?? ""}</h3>
        {[1, 2, 3].map((data, i) => {
          return (
            <div>
              <input
                name={inputProps.name}
                type='checkbox'
                // checked={clickedAuthors[i]}
              />
              <span>{data}</span>
            </div>
          );
        })}
        {/* {authors.map((author, i) => {
          return (
            <div key={i} onClick={(e) => handleAuthor(i)}>
              <input
                name={`authors${i}`}
                type='checkbox'
                checked={clickedAuthors[i]}
              />
              <span>{author}</span>
            </div>
          );
        })} */}
      </div>
    );
  }

  if (!type) return null;
};

export default FilterInput;
