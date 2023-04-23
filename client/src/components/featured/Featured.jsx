import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const {data, loading, error} = useFetch("hotels/countByCity?cities=Gandhinagar,Mumbai,Hyderabad");
  
  // console.log("featured: ",data)
  return (
    <div className="featured">
      {loading ?<h3 className="lod">Loading Please Wait...</h3>
      : (<><div className="featuredItem">
        <img
          src="https://images.thrillophilia.com/image/upload/s--ItzISoBb--/c_fill,g_center,h_642,q_auto,w_1280/f_auto,fl_strip_profile/v1/images/photos/000/180/037/original/1581320085_1549520382-akshardham-gandhinagar-1.jpg.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Gandhinagar</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUfMGVeM_fSmqTKBxktr7gDL8EoyQFmcONIQ&usqp=CAU"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Mumbai</h1>
          <h2>{data[1]} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd0HNziMIZX5oGRGVB49YJ2F3XupWQvyBWxw&usqp=CAU"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Hyderabad</h1>
          <h2>{data[2]} properties</h2>
        </div>
      </div></>)}
    </div>
  );
};

export default Featured;
