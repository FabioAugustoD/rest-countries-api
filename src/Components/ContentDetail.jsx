import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ContentDetail = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
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

  function formatNumber(value) {
    return value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <>
      <div className="btn-container">
        <div className="btn-back">
          <Link to="/" className="btn btn-light" attr="dark">
            <i className="fas fa-arrow-left"></i> Back
          </Link>
        </div>
      </div>

      <section className="country">
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
                  <div>
                    <ul>
                      <li>
                        <span> Native Name:</span> {nativeName}
                      </li>
                      <li>
                        <span> Population:</span> {formatNumber(population)}
                      </li>
                      <li>
                        <span> Region:</span> {region}
                      </li>
                      <li>
                        <span> Sub Region:</span> {subregion}
                      </li>
                      <li>
                        <span> Capital:</span> {capital}
                      </li>
                    </ul>
                  </div>

                  <div>
                    <ul>
                      <li>
                        <span> Top Level Domain:</span> {topLevelDomain}
                      </li>
                      <li>
                        <span> Currencies:</span> {currencies[0].name}
                      </li>
                      <li>
                        <span> Languages:</span> {languages[0].name}
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="detail-info-border">
                  <div>
                    <h5>Border Countries:</h5>
                  </div>
                  {borders.map((border) => {
                    return (
                      <div>
                        <ul key={border}>
                          <li>
                            <span attr="dark">{border}</span>
                          </li>
                        </ul>
                      </div>
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
