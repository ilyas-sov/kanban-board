import userProfileDefault from "../../assets/user-profile-default.png";
import classes from "./Users.module.scss";

type UserAvatarType = {
  avatarSource: string | null;
  width?: string;
};

function UserAvatar({ avatarSource, width }: UserAvatarType) {
  return (
    <div
      className={classes.avatar_container}
      style={{ width: width, height: width }}
    >
      <img
        src={avatarSource ? avatarSource : userProfileDefault}
        alt="User avatar"
      />
    </div>
  );
}

export default UserAvatar;
