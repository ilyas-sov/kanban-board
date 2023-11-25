import classes from "./Tag.module.scss";
import CloseIcon from "./icons/CloseIcon";

type TagType = {
  value: string;
  onDelete: () => void;
};

function Tag({ value, onDelete }: TagType) {
  return (
    <span className={classes.tag_container}>
      {value}
      <CloseIcon onClick={onDelete} />
    </span>
  );
}

export default Tag;
