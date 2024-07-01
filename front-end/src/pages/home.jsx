import GridCard from "../component/cards/card"

const Home = () => {
  return (
    <>
    Home Page
    <GridCard />
    </>
  )
}

export default Home



























// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { data } from "../component/cards/card";

// const Detail = () => {
//   const { id } = useParams();
//   const [getDatam, setDatam] = useState(null);

//   useEffect(() => {
//     const foundData = data.find(item => item.id === parseInt(id, 10));
//     setDatam(foundData);
//   }, [id]);

//   if (!getDatam) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>{getDatam.name}</h2>
//       <p>Age: {getDatam.age}</p>
//     </div>
//   );
// };

// export default Detail;
