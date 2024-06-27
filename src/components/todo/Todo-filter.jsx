import classNames from "classnames";
import React from "react";

const TodoFilter = ({ setfilter, filterMap, activeFilter }) => {
  const filterKeys = Object.keys(filterMap);
  return (
    <div className="btns">
      {filterKeys.map((filterName) => (
        <button
          key={filterName}
          onClick={() => setfilter(filterName)}
          className={classNames("btn", {active: activeFilter === filterName})}
        >
          {filterName}
        </button>
      ))}
    </div>
  );
};

export default TodoFilter;
