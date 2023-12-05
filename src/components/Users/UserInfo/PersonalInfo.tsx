import EnvelopeIcon from "../../icons/EnvelopeIcon";
import PhoneIcon from "../../icons/PhoneIcon";
import UserAvatar from "../UserAvatar";
import classes from "./UserInfo.module.scss";

type PersonalInfoType = {
  photo: string | null;
  name: string;
  surname: string;
  role: string;
  email: string;
  phone: string | null;
};

function PersonalInfo({
  photo,
  name,
  surname,
  role,
  email,
  phone,
}: PersonalInfoType) {
  return (
    <div className={classes.personal_info}>
      <UserAvatar avatarSource={photo} width="80px" />
      <div className={classes.name}>
        <h2>
          {name} {surname}
        </h2>
        <p>{role}</p>
      </div>
      <div className={classes.contacts}>
        <h2>Contacts</h2>
        <a href={`mailto:${email}`}>
          <EnvelopeIcon /> {email}
        </a>
        {phone && (
          <a href={`tel:${phone}`}>
            <PhoneIcon /> {phone}
          </a>
        )}
      </div>
    </div>
  );
}

export default PersonalInfo;
