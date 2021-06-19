import { ReactComponent as DefaultUser } from "../../../assets/images/default-avatar.svg";

const UserProfile = () => {
  return (
    <>
      <div className="w-24 mx-auto p-2 inline-flex rounded-full overflow-hidden">
        <DefaultUser
          className="fill-teal-500 w-24 h-24"
          style={{ width: 90, height: 90 }}
        />
      </div>
      <h6 className="text-white text-xl">Hariyanto</h6>
    </>
  );
};

export default UserProfile;
