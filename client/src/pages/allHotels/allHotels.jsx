import React from 'react'
import useFetch from '../../hooks/useFetch';
import SearchItem from '../../components/searchItem/SearchItem';
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

const Allhotels = () => {
    const { data, loading, error } = useFetch(`/hotels`);
    // const {data,loading,error,refetch} = useFetch(`/hotels`) ${data.type}
    console.log(data)
    let properties = []
    // for (item in data){
    //   if(data.type=='hotel'){
    //     console.log("it's hotel")
    //   }
    // }
  return (
    <div>
      <Navbar />
      <Header type="list" />

        <div className="listResult">
            {loading ? "Loading Please Wait..." : 
            <>
              {/* {console.log(data[0].type)} */}
              {data.map(item=>(
                <SearchItem item={item} key={item._id}/>
              ))}
            </>}
        </div>
        
        <MailList />
        <Footer />
          
            {/* <div className="listResult">
                {loading ? "Loading Please Wait..." : 
                <>
    
                {data.map(item=>(
                    <div>
                        
                        {item._id}
                        {item.title}
                    </div>
                ))}
                </>}
            </div> */}
        
    </div>

   
  );
}

export default Allhotels