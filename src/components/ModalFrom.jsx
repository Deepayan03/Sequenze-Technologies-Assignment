import { useState, useEffect, useRef } from "react";

const ModalFrom = ({
  modal,
  setModal,
  setRefresh,
  refresh,
  localStorageData,
}) => {
  const [input, setInput] = useState({
    name: "",
    image: null,
    description: "",
    resolution: "",
  });
  const [storageData, setStorageData] = useState([]);
  const fileInputRef = useRef(null);
  function handleSubmit() {
    const { name, image, description, resolution } = input;
    if (!name || !image || !description || !resolution) {
      return;
    }
    setStorageData([input, ...localStorageData]);
    setInput({
      name: "",
      image: null,
      description: "",
      resolution: "",
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    document.getElementById("close-button").click();
    alert("Form Submitted successfully");
    setRefresh(!refresh);
  }

  const handleInput = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const imageFile = files[0];
      handleFileUpload(imageFile);
    } else {
      setInput((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  useEffect(() => {
    const storedString = localStorage.getItem("CardDetails");
    if (storedString) {
      const detailsArray = JSON.parse(storedString) || [];
      setStorageData(detailsArray);
      setRefresh(!refresh);
    }
    //eslint-disable-next-line
  }, []);
  useEffect(() => {
    const stringifiedArray = JSON.stringify(storageData);
    localStorage.setItem("CardDetails", stringifiedArray);
    setRefresh(!refresh);
    //eslint-disable-next-line
  }, [storageData]);
  const handleFileUpload = (file) => {
    try {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onloadend = () => {
        setInput((prevData) => ({
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
      <input
        type="checkbox"
        id="my_modal_6"
        checked={modal}
        onChange={() => setModal(!modal)}
        className="modal-toggle"
      />
      <div className="modal" role="dialog">
        <div className="modal-box bg-white p-0 overflow-hidden">
          <div className="max-w-md mx-auto  pt-6 pb-6 pr-3 pl-3 bg-white rounded-md ">
            <h2 className="text-2xl font-semibold mb-6 text-black">
              Enter the image details
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              action=""
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
                  name="name"
                  value={input.name}
                  onChange={handleInput}
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
                  onChange={handleInput}
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
                  onChange={handleInput}
                  value={input.description}
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
                  value={input.resolution}
                  onChange={handleInput}
                  name="resolution"
                  className="w-full px-4 py-2 border rounded-md bg-gray-300 text-black focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex flex-row gap-7 ">
                {/* <input id="submit-button"  hidden className="" /> */}
                <button className="btn bg-green-600 text-white" type="submit">
                  Submit
                </button>
                <div
                  className="modal-action mt-0 "
                  onClick={() => setModal(false)}>
                  <label
                    id="close-button"
                    htmlFor="my_modal_6"
                    className="btn bg-red-600 text-white">
                    Close
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalFrom;
