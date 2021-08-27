import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, HashRouter } from "react-router-dom";

import Header from "./Components/Header";
import Search from "./Components/Search";
import ContentData from "./Components/ContentData";
import ContentDetail from "./Components/ContentDetail";

const Main = () => {
  const [detail, setDetail] = useState([]);

  const [country, setCountry] = useState([]);

  const [search, setFilter] = useState({
    input: "",
    region: "",
  });

  function FilterData(json, input) {
    return json.filter((j) =>
      j.name.toLowerCase().includes(input.toLowerCase())
    );
  }

  useEffect(() => {
    const fetchCountries = async (q) => {
      const filter = q.region !== "";
      await fetch(
        `https://restcountries.eu/rest/v2/${
          filter ? "region/" + q.region : "all"
        } `
      )
        .then((resp) => resp.json())
        .then((json) => FilterData(json, q.input))
        .then((json) => setCountry(json))
        .catch((err) => {
          console.log("Error:", err);
        });
    };
    fetchCountries(search);
  }, [search]);

  const HandleInputChange = (e) => {
    const input = e;
    setFilter({ ...search, input });
  };

  const HandleRegionChange = (e) => {
    const region = e;
    setFilter({ ...search, region });
  };

  const HandleDetails = (value) => {
    country.map((e) => {
      if (e.name === value) {
        // console.log(e)
      }
    });
  };

  console.log(detail);

  // Faz uma varredura no html e substitui os valores dos atributos conforme o tema
  const handleAttributeTheme = (el) => {
    let theme = el === "fas fa-moon";
    const elements = "*";
    for (let i = 0; i < elements.length; i++) {
      let size = document.getElementsByTagName(elements).length;

      for (let j = 0; j < size; j++) {
        try {
          document.getElementsByTagName(elements)[j].attributes.attr.nodeValue =
            theme ? "light" : "dark";
        } catch (error) {}
      }
    }
    document.getElementsByClassName(el)[0].className = theme
      ? "fas fa-sun"
      : "fas fa-moon";
    document.getElementById("mode").innerHTML = theme
      ? "Light Mode"
      : "Dark Mode";
  };

  return (
    <HashRouter basename="/">
      <div>
        <Header changeTheme={handleAttributeTheme} />
        <Route
          path=""
          exact
          render={() => (
            <>
              <Search
                HandleInputChange={HandleInputChange}
                HandleRegionChange={HandleRegionChange}
              />
              <ContentData data={country} HandleDetails={HandleDetails} />
            </>
          )}
        />
        <Route path="/:name" exact component={ContentDetail} />
      </div>
    </HashRouter>
  );
};

export default Main;
