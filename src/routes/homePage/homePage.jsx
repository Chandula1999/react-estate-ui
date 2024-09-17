import SearchBar from "../../components/searchbar/searchBar";
import "./homePage.scss";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <div className="title">
            <h1>Find Real State & Build Dream Place</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            aperiam quisquam autem ratione dolores. Possimus, perferendis
            voluptate repudiandae inventore nisi repellat, amet placeat minima
            recusandae porro, facere velit commodi enim.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years Of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Properties</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <img src="./bg.png" alt="Image" />
      </div>
    </div>
  );
}

export default HomePage;
