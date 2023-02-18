import { format, set } from "date-fns";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { delteTodo, updateTodo } from "../slices/todoSlice";
import styles from "../styles/modules/todoItem.module.scss";
import { getClasses } from "../utils/getClasses";
import CheckButton from "./CheckButton";
import TodoModal from "./TodoModal";

const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [isReadMore, setIsReadMore] = useState(true);
  const start = todo.dateStart.split("-");
  const end = todo.dateEnd.split("-");
  const dateStart = `${start[2]}/${start[1]}/${start[0]}`;
  const dateEnd = `${start[2]}/${start[1]}/${start[0]}`;
  useEffect(() => {
    if (todo.status === "complete") {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [todo.status]);

  const handleDelete = () => {
    dispatch(delteTodo(todo.id));
    toast.success("Xóa thành công");
  };
  const handleUpdate = () => {
    setUpdateModalOpen(true);
  };
  const handleCheck = () => {
    setChecked(!checked);
    dispatch(
      updateTodo({
        ...todo,
        status: checked ? "incomplete" : "complete",
      })
    );
  };
  const handleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <>
      <motion.div className={styles.item} variants={child}>
        <div className={styles.todoDetails}>
          <CheckButton checked={checked} handleCheck={handleCheck} />
          <div className={styles.fl}>
            <div className={styles.texts}>
              <p
                className={getClasses([
                  styles.todoText,
                  todo.status === "complete" && styles["todoText--completed"],
                ])}
              >
                Tiêu đề: {todo.title}
              </p>

              <p
                className={getClasses([
                  styles.todoText,
                  todo.status === "complete" && styles["todoText--completed"],
                  isReadMore && styles["todoText--expand"],
                ])}
              >
                Chi tiết công việc: <br />
                {todo.details}
              </p>
              <span onClick={handleReadMore} className={styles.readtext}>
                {isReadMore ? "Read more" : "Read less"}
              </span>
            </div>
            <div className={styles.fl_c}>
              <p
                className={
                  (todo.priority === "normal" && styles.time) ||
                  (todo.priority === "important" && styles.important) ||
                  (todo.priority === "urgent" && styles.urgent)
                }
              >
                Mức độ ưu tiên:{" "}
                {(todo.priority === "normal" && "Bình thường") ||
                  (todo.priority === "important" && "Quan trọng") ||
                  (todo.priority === "urgent" && "Khẩn cấp")}
              </p>

              <p className={styles.green}>Ngày khởi tạo: {dateStart}</p>

              <p className={styles.urgent}>Ngày kết thúc: {dateEnd}</p>
            </div>
          </div>
        </div>
        <div className={styles.todoActions}>
          <div
            className={styles.icon}
            onClick={handleDelete}
            role="button"
            onKeyDown={handleDelete}
            tabIndex={0}
          >
            <MdDelete />
          </div>
          <div
            className={styles.icon}
            onClick={handleUpdate}
            role="button"
            onKeyDown={handleUpdate}
            tabIndex={0}
          >
            <MdEdit />
          </div>
        </div>
      </motion.div>
      <TodoModal
        type="update"
        todo={todo}
        modalOpen={updateModalOpen}
        setModalOpen={setUpdateModalOpen}
      />
    </>
  );
}

export default TodoItem;
