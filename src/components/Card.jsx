// import addImage from "../Assets/AddImage.svg";
// eslint-disable-next-line
const Card = ({ image }) => {
  console.log(image);
  const {download_url} = image;
  return (
    <>
      <div className="w-[370px] h-[265px] p-5 bg-white rounded-[10px]">
        <div className="w-[330px] h-[180px] bg-orange-500 bg-opacity-40 rounded-[10px] flex justify-center overflow-hidden items-center">
          <img src={download_url } alt="image" className="cursor-pointer" />
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
      </div>
    </>
  );
};

export default Card;
