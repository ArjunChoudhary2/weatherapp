import { useState } from "react";
import { GoChevronLeft, GoChevronDown } from "react-icons/go";
import classNames from "classnames";

function Accordion({ items ,className, ...rest}) {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  // const finalClassName = classNames('border-x border-t rounded',className);

  const handleClick = (nextIndex) => {
    if (expandedIndex === nextIndex) setExpandedIndex(-1);
    else setExpandedIndex(nextIndex);
  };

  const renderdItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="text-xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );
    return (
      <div>
        <div
          className="flex justify-between p-3 border-b items-center cusrsor-pointer"
          onClick={() => {
            handleClick(index);
          }}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded ">{renderdItems}</div>;
}

export default Accordion;
