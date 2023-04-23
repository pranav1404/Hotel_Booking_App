import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import "./reserve.css";
import useFetch from "../../hooks/useFetch";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Reserve = ({ setOpen, hotelId }) => {
  // localStorage.removeItem("user1");
  const [selectedRooms, setSelectedRooms] = useState([]);
  // const { data, loading, error } = useFetch(`/rooms/${hotelId}`);

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { data, loading, error } = useFetch(`/hotels/find/${id}`);
  const { dates } = useContext(SearchContext);

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };

  // const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);
  // console.log(alldates)

  var alldates=0;
  if(!dates[0]){
    alldates=0;
    // console.log('alldates undefined')
  }
  else{
    alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);
    // console.log('alldates defined')
  }


  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      alldates.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(`/rooms/availability/${roomId}`, {
            dates: alldates,
          });
          return res.data;
        })
      );
      setOpen(false);
      navigate("/");
    } catch (err) {}
  };
  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />

        <h2 className="confirm">Confirm...?</h2>
        {/* <span>Select your rooms:</span>
        <div className="rItem">
            <div className="rItemInfo">
              <div className="rTitle">Single Room 
              <input style={{marginLeft: '0.5rem'}} type="checkbox" name="" id="" />
              </div>
              <div className="rDesc">for one person .</div>
              <div className="rMax">
                Max people: <b>1</b>
              </div>
              <div className="rPrice">Rs. {data.cheapestPrice}</div>
            </div>

            <div className="rItemInfo">
              <div className="rTitle">Double Room
              <input style={{marginLeft: '0.5rem'}} type="checkbox" name="" id="" />
              </div>
              <div className="rDesc">for two person</div>
              <div className="rMax">
                Max people: <b>2</b>
              </div>
              <div className="rPrice">Rs. {data.cheapestPrice * 2}
              </div>
            </div>
        </div>
        <div className="rItem">
            <div className="rItemInfo">
              <div className="rTitle">Triple Room
              <input style={{marginLeft: '0.5rem'}} type="checkbox" name="" id="" />
              </div>
              <div className="rDesc">for three people</div>
              <div className="rMax">
                Max people: <b>3</b>
              </div>
              <div className="rPrice">Rs. {data.cheapestPrice * 3}</div>
            </div>
            <div className="rItemInfo">
              <div className="rTitle">Quad Room
              <input style={{marginLeft: '0.5rem'}} type="checkbox" name="" id="" />
              </div>
              <div className="rDesc">for four people</div>
              <div className="rMax">
                Max people: <b>4</b>
              </div>
              <div className="rPrice">Rs. {data.cheapestPrice * 4}</div>
            </div>
        </div> */}
        
        <button onClick={handleClick} className="rButton">
          Reserve Now!
        </button>
      </div>
    </div>
  );
};

export default Reserve;