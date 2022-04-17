import "./bodydata.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
function Bodydata() {
  const [repos, setRepos] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchParam, setSearchParam] = useState("");

  // useEffect(() => {
  //   async function fetchdata() {

  //   }
  //   fetchdata();
  // }, []);
  function handleChange(e) {
    setSearchInput(e.target.value);
  }

  async function handleClick() {
if(searchParam==="language"){
  try {
    const result = await axios.get(
      `https://api.github.com/search/repositories?q=language:${searchInput}&sort=stars&order=desc`
    );

    setRepos(result.data.items);
  } catch (err) {
    console.log(err);
  }
}
else if(searchParam==="name"){
  try {
    const result = await axios.get(
      `https://api.github.com/search/repositories?q=full_name:${searchInput}&sort=stars&order=desc`
    );

    setRepos(result.data.items);
  } catch (err) {
    console.log(err);
  }
}
else {
  alert("Search field can not be empty !");
}
  }

  console.log(repos);
  function handleSelect(e){
    setSearchParam(e.target.value);
  }
  console.log(searchParam);
  return (
    <div className="body-data">
      <div className="searchbar">
        <label for="search-param">Search By ?</label>

        <select className="select-options" name="params" id="params" onChange={handleSelect}>
          <option disabled selected value> -- Select an option -- </option>
          <option value="language">Language</option>
          <option value="name">Name</option>
        </select>
        <input
          type="text"
          className="search"
          value={searchInput}
          placeholder="Search by name or language"
          onChange={handleChange}
        ></input>
        <button className="search-btn" onClick={handleClick}>
          Search
        </button>
      </div>
      <div className="repo-cards">
      {repos.map((repo) => {
        return <Card repo={repo} key={repo.id} />;
      })}
      </div>
     
    </div>
  );
}

export default Bodydata;
