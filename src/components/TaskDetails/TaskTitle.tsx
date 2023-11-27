import React, { SyntheticEvent, useEffect, useState, useRef } from "react";
import Button from "../UI/Button";
import DoneIcon from "../icons/DoneIcon";
import EditIcon from "../icons/EditIcon";
import classes from "./TaskDetails.module.scss";

type TaskTitleType = {
  taskTitle: string;
  onSetTitle: (t: string) => void;
};

function TaskTitle({ taskTitle, onSetTitle }: TaskTitleType) {
  const [titleHeight, setTitleHeight] = useState("auto");
  const [editTitle, setEditTitle] = useState(false);

  const titleRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      const titleScrollHeight = titleRef.current.scrollHeight;
      setTitleHeight(`${titleScrollHeight}px`);
    }
  }, [editTitle]);

  function titleChangeHandler(e: SyntheticEvent<HTMLTextAreaElement>) {
    const target = e.target as HTMLTextAreaElement;
    onSetTitle(target.value);
  }

  function editTitleClickHandler() {
    setEditTitle(true);

    if (titleRef.current && titleRef.current.scrollHeight > 100) {
      setTitleHeight(`${titleRef.current.scrollHeight}px`);
    } else {
      setTitleHeight("120px");
    }
  }

  function saveTitleClickHandler() {
    setEditTitle(false);
    setTitleHeight("auto");
  }
  return (
    <div className={classes.title_container}>
      {!editTitle && <h3>{taskTitle}</h3>}
      {editTitle && (
        <textarea
          className={`${classes.task_title_textarea} ${
            !taskTitle && classes.required
          }`}
          value={taskTitle}
          placeholder="Title of the task *"
          onChange={titleChangeHandler}
          style={{ height: titleHeight }}
          ref={titleRef}
        />
      )}
      {!editTitle && (
        <Button onClick={editTitleClickHandler}>
          <EditIcon />
        </Button>
      )}
      {editTitle && (
        <Button
          className={classes.save_title_btn}
          onClick={saveTitleClickHandler}
          disabled={!taskTitle}
        >
          <DoneIcon />
        </Button>
      )}
    </div>
  );
}

export default React.memo(TaskTitle);
