import Navbar from "../components/Navbar";
import cardImage from "../Assets/AddImage.svg";
import ModalFrom from "../components/ModalFrom";
import CustomCards from "../components/CustomCards";
import { useEffect, useState } from "react";
const CustomCardPage = () => {
  const [modal, setModal] = useState(false);
  const [dataRefresh, setDataRefresh] = useState(false);
  const [localStorageData, setLocalStorageData] = useState([]);
  const deleteCourseByAuthorName = (AuthorName) => {
    const userPermission = confirm("Do you want to delete this card ?");
    if (!userPermission) {
      return;
    } 
    const arr = localStorageData.filter((data) => data.name != AuthorName);
    localStorage.setItem("CardDetails", JSON.stringify(arr));
    document.getElementById("close").click();
    setDataRefresh(!dataRefresh);
  };
  useEffect(() => {
    const storedString = localStorage.getItem("CardDetails");
    console.log(storedString);
    const retrievedArray = JSON.parse(storedString);
    setLocalStorageData(retrievedArray);
    console.log(retrievedArray);
    console.log(localStorageData);
    //eslint-disable-next-line
  }, [dataRefresh]);
  return (
    <Navbar>
      <div className="ml-[290px] pt-12 pl-8  max-sm:flex max-lg:ml-[190px] max-sm:justify-center max-sm:ml-0 max-sm:items-center">
        <div className="w-full h-full">
          <div className="font-bold text-4xl text-black">My Projects</div>
        </div>
      </div>
      <div
        className="ml-[290px] flex flex-wrap mt-8 max-sm:ml-0 max-lg:ml-[190px] gap-10 z-50 overflow-y-scroll custom-scrollbar"
        style={{ maxHeight: "500px" }}>
        <div
          className="w-[370px] h-[265px] p-5 bg-white rounded-[10px]"
          onClick={() => setModal(true)}>
          <div className="w-[330px] h-[180px] bg-orange-500 bg-opacity-40 rounded-[10px] flex justify-center overflow-hidden items-center">
            <img src={cardImage} alt="image" className="cursor-pointer" />
          </div>
          <div className="text-black text-center font-semibold font-'Work Sans' leading-[30.69px] tracking-tight">
            Create a new project
            <br />
            <span className="text-black text-xs font-semibold font-'Work Sans' leading-[23.02px] tracking-tight">
              or try a{" "}
              <span className="text-orange-500 text-xs font-semibold font-'Work Sans' leading-[23.02px] tracking-tight">
                sample project
              </span>
            </span>
          </div>
          <ModalFrom
            modal={modal}
            setModal={setModal}
            setRefresh={setDataRefresh}
            refresh={dataRefresh}
            localStorageData={localStorageData}
          />
        </div>
        {localStorageData.map((singleData, i) => (
          <CustomCards
            key={i}
            data={singleData}
            handleDelete={deleteCourseByAuthorName}
            localStorageData={localStorageData}
            setLocalStorageData={setLocalStorageData}
            refresh={setDataRefresh}
            setRefresh={setDataRefresh}
          />
        ))}
      </div>
    </Navbar>
  );
};

export default CustomCardPage;
