import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geo_api_url, geoApiOptions } from "@/api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);
  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(`${geo_api_url}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions);
      const result = await response.json();
      return {
        options: result.data.map((city) => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.regionCode}`,
          };
        }),
      };
    } catch (error) {
      console.error(error);
    }
  };
  console.log(geo_api_url);

  const handleOnChange = (searchdata) => {
    setSearch(searchdata);
    onSearchChange(searchdata);
  };

  return (
    <div>
      <AsyncPaginate border="none" placeholder="Serach fo city" debounceTimeout={600} value={search} onChange={handleOnChange} loadOptions={loadOptions} />
    </div>
  );
};

export default Search;
