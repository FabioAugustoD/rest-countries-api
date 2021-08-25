import React from "react";
import { Link } from "react-router-dom";

const ContentData = ({ data }) => {
  function formatNumber(value) {
    return value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <div className="card">
      {data.map((el, idx) => (
        <div className="card-container" key={idx}>
          <Link to={el.name}>
            <div className="card-container-img">
              {/* <a onClick={(e) => handleTaskDetailsClick(e.target.alt)}> */}
              <img src={el.flag} alt={el.name} />
              {/* </a> */}
            </div>

            <div className="card-container-info" attr="dark">
              <ul>
                <li>
                  <h2>{el.name}</h2>
                </li>
                <li>
                  <strong>Population:</strong> {formatNumber(el.population)}{" "}
                </li>
                <li>
                  <strong>Region:</strong> {el.region}{" "}
                </li>
                <li>
                  <strong>Capital:</strong> {el.capital}{" "}
                </li>
              </ul>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ContentData;
