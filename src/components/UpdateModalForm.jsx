import { useRef, useState } from "react";

const UpdateModalForm = ({ data , localStorageData  , setRefresh }) => {
  const fileInputRef = useRef();
  const [updatedInput, setUpdatedInput] = useState(data);
  const handleUpdate = () => {
    console.log(data.name);
    const arr= localStorageData.filter((item) => item.name !== data.name);
    arr.push(updatedInput);
    localStorage.setItem("CardDetails", JSON.stringify(arr));
    alert("Updation successful");
    setRefresh((prev) => !prev);
    document.getElementById("my_modal_3").open = false;
  };
  
  const handleDataChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const imageFile = files[0];
      handleFileUpload(imageFile);
    } else {
      setUpdatedInput((prevData) => ({
        ...prevData,
        [name]: value,
      }));
      console.log(updatedInput)
    }
  };
  const handleFileUpload = (file) => {
    try {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onloadend = () => {
        setUpdatedInput((prevData) => ({
          ...prevData,
          image: fileReader.result,
        }));
      };
    } catch (error) {
      console.log("Error reading file:", error);
    }
  };
  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box max-w-md mx-auto  pt-6 pb-6 pr-3 pl-3 bg-white rounded-md ">
          <h2 className="text-2xl font-semibold mb-6 text-black">
            Update the card details
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdate();
            }}
            method="dialog"
            id="form">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-black text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                readOnly
                name="name"
                value={updatedInput.name}
                onChange={handleDataChange}
                className="w-full px-4 py-2 border rounded-md text-black bg-gray-300  focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="image"
                className="block text-black text-sm font-medium mb-2">
                Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                ref={fileInputRef}
                onChange={handleDataChange}
                className="w-full px-4 py-2 border rounded-md text-black focus:outline-none bg-gray-300 focus:border-blue-500"
                accept="image/*"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block  text-sm text-black font-medium mb-2">
                Description
              </label>
              <textarea
                id="description"
                onChange={handleDataChange}
                value={updatedInput.description}
                name="description"
                className="w-full px-4 py-2 border rounded-md text-black bg-gray-300  focus:outline-none focus:border-blue-500"
                rows="4"
                required></textarea>
            </div>
            <div className="mb-4">
              <label
                htmlFor="resolution"
                className="block text-black text-sm font-medium mb-2">
                Image Resolution
              </label>
              <input
                type="text"
                id="resolution"
                value={updatedInput.resolution}
                onChange={handleDataChange}
                name="resolution"
                className="w-full px-4 py-2 border rounded-md bg-gray-300 text-black focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex flex-row gap-7 ">
              {/* <input id="submit-button"  hidden className="" /> */}
              <button className="btn bg-green-600 text-white" type="submit">
                Submit
              </button>
              <button
                type="button"
                onClick={() => {
                  document.getElementById("my_modal_3").open = false;
                }}
                className="btn bg-red-600 text-white modal-action mt-0">
                Close
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default UpdateModalForm;
