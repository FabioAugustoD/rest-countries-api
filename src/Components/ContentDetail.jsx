import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ContentDetail = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchCountries = async () => {
      await fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then((resp) => resp.json())
        .then((json) => setCountry(json))
        .catch((err) => {
          console.log("Error:", err);
        });
    };
    fetchCountries();
  }, [name]);

  return (
    <>
      <section className="country">
        <Link to="/" className="btn btn-light">
          <i className="fas fa-arrow-left"></i> Back Home
        </Link>
        {country.map((c) => {
          const {
            numericCode,
            flag,
            name,
            nativeName,
            population,
            region,
            subregion,
            capital,
            topLevelDomain,
            currencies,
            languages,
            borders,
          } = c;

          return (
            <div className="detail" key={numericCode}>
              <div className="detail-flag">
                <img src={flag} alt="" />
              </div>

              <div className="detail-info">
                <div className="detail-info-title">
                  <h2>{name}</h2>
                </div>

                <div className="detail-info-desc">
                  <ul>
                    <li>Native Name: {nativeName}</li>
                    <li>Population: {population}</li>
                    <li>Region: {region}</li>
                    <li>Sub Region: {subregion}</li>
                    <li>Capital: {capital}</li>
                  </ul>

                  <ul>
                    <li>Top Level Domain: {topLevelDomain}</li>
                    <li>Currencies: {currencies[0].name}</li>
                    <li>Languages: {languages[0].name}</li>
                  </ul>
                </div>

                <div className="detail-info-border">
                  {borders.map((border) => {
                    return (
                      <ul key={border}>
                        <li>{border}</li>
                      </ul>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ContentDetail;

{
  /* <article key={numericCode}>
<div className="country-inner">
  <div className="flag">
    <img src={flag} alt={name} />
  </div>

  <div className="country-details">
    <div>
      <h2>{name}</h2>
      <h5>
        Native Name: <span>{nativeName}</span>
      </h5>
      <h5>
        Population: <span>{population}</span>
      </h5>
      <h5>
        Region: <span>{region}</span>
      </h5>
      <h5>
        Sub Region: <span>{subregion}</span>
      </h5>
      <h5>
        Capital: <span>{capital}</span>{" "}
      </h5>
    </div>

    <div>
      <h5>
        Top Level Domain: <span>{topLevelDomain}</span>
      </h5>
      <h5>
        Currencies: <span>{currencies[0].name}</span>
      </h5>
      <h5>
        Languages: <span>{languages[0].name}</span>
      </h5>
    </div>
  </div>
</div>

<div>
  <h3>Border Countries: </h3>
  <div className="borders">
    {borders.map((border) => {
      return (
        <ul key={border}>
          <li>{border}</li>
        </ul>
      );
    })}
  </div>
</div>
</article> */
}
