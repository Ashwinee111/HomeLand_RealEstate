import ChangePassword from "../components/ChangePassword";
import ChangeProfilePicture from "../components/ChangeProfilePicture";
import DeleteAccount from "../components/DeleteAccount";
import ProfileInformation from "../components/ProfileInformation";


function EditProfile() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center py-16 mb-10">
      <div>
        <h2 className="mb-8 text-3xl font-medium">Edit Profile</h2>
      </div>
      <div className="w-[80%]">
        <ChangeProfilePicture />
        <ProfileInformation />
        <ChangePassword />
        <DeleteAccount />
      </div>
    </div>
  );
}
export default EditProfile;
