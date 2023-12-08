import { useState } from "react";
import userProfileDefault from "../../assets/user-profile-default.png";
import classes from "./Users.module.scss";

type UserAvatarType = {
  avatarSource: string | null;
  width?: string;
};

function UserAvatar({ avatarSource, width }: UserAvatarType) {
  const [imageError, setImageError] = useState(false);

  function handleImageError() {
    setImageError(true);
  }

  return (
    <div
      className={classes.avatar_container}
      style={{ width: width, height: width }}
    >
      <img
        src={!avatarSource || imageError ? userProfileDefault : avatarSource}
        alt="User avatar"
        onError={handleImageError}
      />
    </div>
  );
}

export default UserAvatar;
