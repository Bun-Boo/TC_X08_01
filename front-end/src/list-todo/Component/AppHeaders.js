import React, { useState } from "react";
import Button, { SelectButton } from "./Button";
import styles from "../styles/modules/app.module.scss";
import TodoModal from "./TodoModal";
import { useDispatch, useSelector } from "react-redux";
import { updateFilterStatus } from "../slices/todoSlice";

export default function AppHeader() {
  const [modalOpen, setModalOpen] = useState(false);
  const filterStatus = useSelector((state) => state.todo.filterStatus);
  const dispatch = useDispatch();

  const updatedFilter = (e) => {
    dispatch(updateFilterStatus(e.target.value));
  };

  return (
    <div className={styles.appHeader}>
      <Button variant="primary" onClick={() => setModalOpen(true)}>
        Tạo công việc mới
      </Button>
      <SelectButton id="status" value={filterStatus} onChange={updatedFilter}>
        <option value="all">Tất Cả</option>
        <option value="incomplete">Đang thực hiện</option>
        <option value="complete">Hoàn thành</option>
      </SelectButton>
      <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}