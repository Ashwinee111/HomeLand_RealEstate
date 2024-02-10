import { useDispatch, useSelector } from "react-redux";
import { useRef, useEffect, useState } from "react";
import { PiUploadSimpleBold } from "react-icons/pi";
import { updateDisplayPicture } from "../services/operations/settingApi";

function ChangeProfilePicture() {
  const fileRef = useRef(null);
  const { token } = useSelector((state) => state.AuthSlice);
  const { user } = useSelector((state) => state.ProfileSlice);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [previewSource, setPreviewSource] = useState(null);

  function handleFileChange(event) {
    // NOTE: `event.target.files[0]` retrieves the first file selected by the user from the file input. If the user selects multiple files, only the first one is considered.
    // NOTE: The previewFile function is responsible for generating a preview of the selected image file using the FileReader API. It reads the contents of the file and converts it into a data URL, which can be used as the source for an <img> tag to display the preview of the selected image.
    const file = event.target.files[0];
    if (file) {
      setImageFile(file);
      previewFile(file);
    }
  }

  function previewFile(file) {
    // Create a new instance of FileReader
    const reader = new FileReader();
    // Read the contents of the specified file as a data URL
    reader.readAsDataURL(file);
    // Define an event handler for when the file reading operation is complete
    reader.onload = () => {
      // When the file reading is complete, update the previewSource state variable
      // with the result of the FileReader operation, which is the data URL of the file
      setPreviewSource(reader.result);
    };
  }

  async function handleFileUpload() {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("displayPicture", imageFile);
      dispatch(updateDisplayPicture(token, formData));
      setLoading(false);
    } 
    catch (error) {
      console.log("ERROR MESSAGE - ", error.message);
    }
    finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (imageFile) {
      previewFile(imageFile);
    }
  }, [imageFile]);

  
  return (
    <div className="flex flex-col md:flex-row gap-y-3 items-center gap-x-5 rounded-md border p-8 px-12 w-[100%] bg-slate-50">
      <div>
        <img
          src={previewSource || user?.image}
          alt="profileImage"
          className="aspect-square w-[100px] rounded-full object-cover"
        />
      </div>
      <div>
        <h2 className="text-base md:text-lg mb-1">Change Profile Picture</h2>
        <div className="flex gap-2">
          <input
            type="file"
            ref={fileRef}
            hidden
            accept="image/*"
            onChange={handleFileChange}
          />
          <button
            className="bg-green-500 hover:bg-green-600 text-white rounded  text-sm w-full transition px-[15px] py-[10px]"
            onClick={() => fileRef.current.click()}
          >
            Select
          </button>
          <button
            onClick={handleFileUpload}
            className="bg-violet-700 hover:bg-violet-800 text-white rounded text-sm w-full transition px-[15px] py-[10px]"
          >
            {loading ? (
              "Uploading..."
            ) : (
              <div className="flex items-center justify-center gap-x-2">
                Upload <PiUploadSimpleBold />
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
export default ChangeProfilePicture;
