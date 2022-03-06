import React from "react";
import classNames from "classnames";

import "components/DayListItem.scss";


export default function DayListItem(props) {
  let dayClass = classNames("day-list__item", { 
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots < 1
  })

  let formatSpots = () => {
    if (props.spots === 0) {
      return <h3 className="text--light">no spots remaining</h3>;
    }

    if (props.spots === 1) {
      return <h3 className="text--light">1 spot remaining</h3>;
    }
  }

  return (
    <li
      onClick={() => props.setDay(props.name)}
      className={dayClass}  
    >
      <h2 className="text--regular">{props.name}</h2>
      {(props.spots < 2) 
        ? formatSpots()
        : <h3 className="text--light">{props.spots} spots remaining</h3>}
    </li>
  )
}