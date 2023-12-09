import React from "react";
import classes from "./Tag.module.scss";
import CloseIcon from "./icons/CloseIcon";

type TagType = {
  id: string;
  value: string;
  onDelete: (id: string) => void;
};

function Tag({ id, value, onDelete }: TagType) {
  return (
    <span className={classes.tag_container}>
      {value}
      <CloseIcon onClick={() => onDelete(id)} />
    </span>
  );
}

export default React.memo(Tag);
