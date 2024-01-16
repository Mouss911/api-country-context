import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const getDetailsPays = async (id, setCountry ) => {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/capital/${id}`
    );

    const data = await response.json();
    const countryData = data[0];
    setCountry(countryData);
  } catch (error) {
    console.error(error, "la récupération des details du pays a échoué");
  }
};

const DetailsPays = () => {
  const [country, setCountry] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

 

  useEffect(() => {
    getDetailsPays(id, setCountry );
  }, [id, setCountry ]);

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="container mb-4 pt-5 ">
      
        <div className="row mx-1 mt-5 mb-0">
          <button
            className="col-3 col-lg-1 p-2 mx-3 mx-lg-0 border-0 elements style"
            id="back"
            onClick={handleBackClick}
          >
            <FaArrowLeft className=" me-2" /> Back
          </button>
          <div className="row mx-1 mt-5 mb-0">
            <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
              <div className="col-12 col-lg-6 rounded-3">
                <img src={country.flags.png} alt="flag" className="img-fluid" />
              </div>
              <div className="d-flex justify-content-around flex-column col-12 col-lg-6 my-5">
                <div className="d-flex justify-content-between col-12 flex-column flex-lg-row align-items-0 align-items-lg-center col-lg-12">
                  <div className="">
                    <h5 className="title fw-bold mb-3">
                      {country.name.common}
                    </h5>
                    <p className="m-1 population">
                      <span className="style">Population</span> :{" "}
                      {country.population}
                    </p>
                    <p className="m-1 region">
                      <span className="style">Region</span> : {country.region}
                    </p>
                    <p className="m-1 sub-region">
                      <span className="style">Sub Region</span> :{" "}
                      {country.subregion}
                    </p>
                    <p className="m-1 capital">
                      <span className="style">Capitale</span> :{" "}
                      {country.capital}
                    </p>
                  </div>
                  <div className="mt-2">
                    <p className="m-1 top">
                      <span className="style">Top Level Domain</span> :{" "}
                      {country.tld[0]}
                    </p>
                    <p className="m-1 independent">
                      <span className="style">independent</span> :{" "}
                      {country.independent ? "true" : "False"}
                    </p>
                    <p className="m-1 independent">
                      <span className="style">Currencies</span> :
                    </p>
                  </div>
                </div>
                <div className="d-flex flex-column col-lg-11 mt-2 ">
                  <div className="d-inline align-items-center borderers">
                    <span className="p-2 text-start style">
                      Border Countries :
                    </span>
                    {country.borders?.length === 0 ? (
                      <span>Pas de pays frontaliers</span>
                    ) : (
                      <div>
                        {country.borders?.map((border, index) => (
                          <Link
                            key={border}
                            to={`/country/${country.capital}`}
                            className="text-decoration-none text-white"
                          >
                            <button className="elements border-0 m-2 p-0 px-0 p-lg-2 px-lg-3">
                              {border}
                            </button>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default DetailsPays;
