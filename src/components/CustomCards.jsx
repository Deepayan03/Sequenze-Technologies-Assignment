import UpdateModalForm from "./UpdateModalForm";

const CustomCards = ({
  data,
  handleDelete,
  localStorageData,
  setLocalStorageData,
  setRefresh
}) => {
  return (
    <>
      <div
        className="w-[370px] h-[265px] p-5 bg-white rounded-[10px]"
        onClick={() => document.getElementById("my_modal_5").showModal()}>
        <div className="w-[330px] h-[180px] bg-orange-500 bg-opacity-40 rounded-[10px] flex justify-center overflow-hidden items-center">
          <img src={data?.image} alt="image" className="cursor-pointer" />
        </div>
        <div className="text-black text-center font-semibold font-'Work Sans' leading-[30.69px] tracking-tight">
          {data?.name}
          <br />
          <span className="text-black text-xs font-semibold font-'Work Sans' leading-[23.02px] tracking-tight">
            {data?.description}
            <span className="text-orange-500 text-xs font-semibold font-'Work Sans' leading-[23.02px] tracking-tight">
              {data?.resolution}
            </span>
          </span>
        </div>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-white text-black">
          <h1 className="font-bold text-xl">{`Author : ${data.name}`}</h1>
          <p className="py-4">{`Description:  ${data.description}`}</p>
          <h3 className="text-red-400 text-lg">{`Image resolution  : ${data.resolution}`}</h3>
          <div className="flex flex-row gap-5 mt-5">
            <button
              className="btn btn-error"
              onClick={() => handleDelete(data.name)}>
              Delete
            </button>
            <button
              className="btn btn-success"
              onClick={() =>
                (document.getElementById("my_modal_3").open = true)
              }>
              {" "}
              Update Details
            </button>
            <div className="modal-action mt-0">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-error" id="close">
                  Close
                </button>
              </form>
            </div>
          </div>
        </div>
        <UpdateModalForm
          localStorageData={localStorageData}
          setLocalStorageData={setLocalStorageData}
          data={data}
          setRefresh={setRefresh}
        />
      </dialog>
    </>
  );
};

export default CustomCards;
