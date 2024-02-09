import { FiTrash2 } from "react-icons/fi";
import {useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { deleteProfile } from "../services/operations/settingApi";

function DeleteAccount() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { token } = useSelector((state) => state.AuthSlice);

    async function handleDeleteAccount() {
      try {
        dispatch(deleteProfile(token, navigate));
      } catch (error) {
        console.log("ERROR MESSAGE - ", error.message);
      }
    }

  return (
    <>
      <div className="my-10 flex flex-row gap-x-5 rounded-md border-[1px] p-8 px-12 bg-slate-50">
        <div className="flex aspect-square h-14 w-14 items-center justify-center rounded-full bg-[#E53935]">
          <FiTrash2 className="text-3xl text-pink-200" />
        </div>
        <div className="flex flex-col space-y-2">
          <h2 className="text-lg font-semibold text-richblack-5">
            Delete Account
          </h2>
          <div className="w-3/5 text-pink-25">
            <p>Would you like to delete account?</p>
            <p>
              This account may contain Paid Courses. Deleting your account is
              permanent and will remove all the contain associated with it.
            </p>
          </div>
          <button
            type="button"
            className="w-fit cursor-pointer italic text-[#E53935]"
            onClick={handleDeleteAccount}
          >
            I want to delete my account.
          </button>
        </div>
      </div>
    </>
  );
}
export default DeleteAccount;
