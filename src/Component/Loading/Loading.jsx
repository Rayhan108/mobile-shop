// import ScaleLoader from "react-spinners/ScaleLoader";
const Loading = () => {
    return (
        // flex md:mt-64 items-center justify-center
      //   <div className="min-h-screen min-w-screen flex justify-center items-center">
      //   <ScaleLoader 
      //   color="#000000"
      //   loading={true} 
      //   size={150}
   
      // />
      //   </div>
      <div>
           return <div className="flex md:mt-64 items-center justify-center ">
            <div className="radial-progress animate-spin" style={{"--value":70}}>70%</div>
          </div>
      </div>
      );
};

export default Loading;