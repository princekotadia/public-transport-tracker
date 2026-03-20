import { use } from "react";
import "./RouteList.css";

function listRender({selectRdata}) {
  const curTime = new Date().getHours();
  let foundNext = false;

  return (
    <ul className="list">
      {selectRdata?.stops.map((stop, index) => {
        const stopHour = Number(stop.time.split(":")[0]);

        let isNext = false;

        if (!foundNext && stopHour >= curTime) {
          isNext = true;
          foundNext = true;
        }

        return (
          <li
            className={`route-item ${isNext ? "highlight" : ""}`}
            key={index}
          >
            {stop.stopName} : {stop.time}
          </li>
        );
      })}
    </ul>
  );
}

export default listRender;