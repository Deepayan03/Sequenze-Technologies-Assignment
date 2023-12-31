import { useEffect, useState } from "react";
// import getImages from "../api/Getpictures";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

const MainPage = () => {
  const [images, setImages] = useState([]);
  const getImages = async () => {
   try {
    const data = await fetch("https://picsum.photos/v2/list?page=1&limit=6");
    const jsonData = await data.json();
    setImages(jsonData);
   } catch (error) {
    console.log(error);
   }
  };
  useEffect(() => {
    getImages();
  }, []);
  return (
    <Navbar>
      <div>
        <div className="ml-[290px] pt-12 pl-8  max-sm:flex max-lg:ml-[190px] max-sm:justify-center max-sm:ml-0 max-sm:items-center ">
          <div className="w-full h-full">
            <div className="font-bold text-4xl text-black">Sample Projects</div>
          </div>
        </div>
        <div
          className="ml-[290px] flex flex-wrap mt-8 max-sm:ml-0 max-lg:ml-[190px] gap-10 z-50 overflow-y-scroll custom-scrollbar"
          style={{ maxHeight: "500px" }}>
          {images.map((image, i) => (
            <Card key={i} image={image} />
          ))}
        </div>
      </div>
    </Navbar>
  );
};

export default MainPage;
