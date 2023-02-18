import React, { useEffect, useState } from "react";
import styles from "../styles/modules/modal.module.scss";
import { MdOutlineClose } from "react-icons/md";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../slices/todoSlice";
import { v4 as uuid } from "uuid";
import toast from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";

const dropin = {
  hidden: {
    opacity: 0,
    transform: "scale(0.9)",
  },
  visible: {
    transform: "scale(1)",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    transform: "scale(0.9)",
    opacity: 0,
  },
};

function TodoModal({ type, modalOpen, setModalOpen, todo }) {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [status, setStauts] = useState("incomplete");
  const [priority, setPriority] = useState("normal");
  const [dateStart, setDateStart] = useState("");

  const [dateEnd, setDateEnd] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (type === "update" && todo) {
      setTitle(todo.title);
      setStauts(todo.status);
    } else {
      setTitle("");
      setStauts("incomplete");
    }
  }, [type.todo, modalOpen]);

  const handleSumbit = (e) => {
    e.preventDefault();
    if (title === "" || status === "") {
      toast.error("Hãy nhập tất cả các thông tin !");
      return;
    }
    if (title && status && dateStart && dateEnd) {
      if (type === "add") {
        dispatch(
          addTodo({
            id: uuid(),
            title,
            details,
            status,
            priority,
            dateStart,
            dateEnd,
            // time: new Date().toLocaleDateString(),
          })
        );
        toast.success("Thêm thành công");

        setModalOpen(false);
      }
      if (type === "update") {
        if (
          todo.title !== title ||
          todo.status !== status ||
          todo.dateStart ||
          todo.dateEnd
        ) {
          dispatch(
            updateTodo({
              ...todo,
              title,
              details,
              status,
              priority,
              dateStart,
              dateEnd,
            })
          );
        } else {
          toast.error("Chưa chỉnh sửa");
          return;
        }
      }
      setDateEnd("");
      setDateStart("");
      setPriority("");
      setStauts("");
      setDetails("");
      setTitle("");
      setModalOpen(false);
    }
  };

  return (
    <AnimatePresence>
      {modalOpen && (
        <motion.div
          className={styles.wrapper}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={styles.container}
            variants={dropin}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className={styles.closeButton}
              onClick={() => setModalOpen(false)}
              onKeyDown={() => setModalOpen(false)}
              tabIndex={0}
              role="button"
              initial={{ top: 40, opacity: 0 }}
              animate={{ top: -10, opacity: 1 }}
              exit={{ top: 40, opacity: 0 }}
            >
              <MdOutlineClose />
            </motion.div>
            <form className={styles.form} onSubmit={(e) => handleSumbit(e)}>
              <h1 className={styles.formTitle}>
                {type === "update" ? "Chỉnh sửa" : "Thêm"} công việc
              </h1>
              <label htmlFor="title">
                Tiêu đề
                <input
                  value={title}
                  type="text"
                  id="title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>

              <label htmlFor="details">
                Chi tiết công việc
                <input
                  value={details}
                  type="text"
                  id="details"
                  onChange={(e) => setDetails(e.target.value)}
                />
              </label>

              <label htmlFor="status">
                Quá trình
                <select
                  name="status"
                  id="status"
                  value={status}
                  placeholder="Status...."
                  onChange={(e) => setStauts(e.target.value)}
                >
                  <option value="incomplete">Đang thực hiện</option>
                  <option value="complete">Hoàn thành</option>
                  <option value="cancel">Huỷ</option>
                </select>
              </label>

              <label htmlFor="priority">
                Mức độ ưu tiên
                <select
                  name="priority"
                  id="priority"
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                >
                  <option value="normal">Bình thường</option>
                  <option value="important">Quan trọng</option>
                  <option value="urgent">Khẩn cấp</option>
                </select>
              </label>

              <label htmlFor="time-start">
                Ngày bắt đầu
                <input
                  type="date"
                  id="time-start"
                  name="time-start"
                  value={dateStart}
                  onChange={(e) => setDateStart(e.target.value)}
                />
              </label>

              <label htmlFor="time-start">
                Ngày kết thúc
                <input
                  type="date"
                  id="time-end"
                  name="time-end"
                  value={dateEnd}
                  onChange={(e) => setDateEnd(e.target.value)}
                />
              </label>

              <div className={styles.buttonContainer}>
                <Button type="submit" variant="primary">
                  {type === "update" ? "chỉnh sửa" : "Thêm"} công việc
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => setModalOpen(false)}
                  onKeyDown={() => setModalOpen(false)}
                >
                  Hủy bỏ
                </Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default TodoModal;
