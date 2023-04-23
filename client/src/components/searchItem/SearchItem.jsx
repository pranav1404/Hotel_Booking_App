import "./searchItem.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const SearchItem = ({item}) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState();
  // console.log("search: ",userData)
  const handleClick = () => {
    if(userData){
      navigate(`/hotels/${item._id}`)
    }
    else(
      navigate('/login')
    )
  };

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem('user1')));
    // console.log(userData)
    });
  return (
    <div className="searchItem">
      <img
        src={item.photos[0]}
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{item.title}</h1>
        <span className="siDistance">{item.distance} meter from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          About Property
        </span>
        <span className="siFeatures">
          {item.desc.length > 250 ?
          (
            <div className="siDesc">
              {`${item.desc.substring(0, 250)}...`}
              {/* <a href="">Read more</a> */}
            </div>
          ) :
          <p>{item.desc}</p>
          }
          {/* {item.desc.substring(0,250)} */}
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">Rs. {item.cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          {/* <Link to={`/hotels/${item._id}`}> */}
          <button onClick={handleClick} className="siCheckButton">See availability</button>
          {/* </Link> */}
          
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
