import ChangeProfilePicture from "../components/ChangeProfilePicture";
import DeleteAccount from "../components/DeleteAccount";


function EditProfile() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center py-16 mb-10">
      <div>
        <h2 className="mb-8 text-2xl font-medium">Edit Profile</h2>
      </div>
      <div className="w-[80%]">
        <ChangeProfilePicture />
        <DeleteAccount />
      </div>
    </div>
  );
}
export default EditProfile;
