import React, { useState } from "react";
import Button, { SelectButton } from "./Button";
import styles from "../styles/modules/app.module.scss";
import TodoModal from "./TodoModal";
import { useDispatch, useSelector } from "react-redux";
import { updateFilterStatus } from "../slices/todoSlice";
import { SearchOutlined } from "@ant-design/icons";
import styled from "styled-components";
export default function AppHeader() {
  const [modalOpen, setModalOpen] = useState(false);
  const filterStatus = useSelector((state) => state.todo.filterStatus);
  const dispatch = useDispatch();

  const updatedFilter = (e) => {
    dispatch(updateFilterStatus(e.target.value));
  };
  const Search = styled.div`
    width: 50%;
    /* background-color: red; */
    position: relative;
    margin: 0 auto;
  `;

  const Input = styled.input`
    background-color: transparent;
    width: 100%;
    padding: 10px;
    border: none;
    border-bottom: 1px solid #ccc;
    &:focus {
      outline: none;
    }
  `;
  const Loop = styled.div`
    position: absolute;
    font-size: 20px;
    color: #ccc;
    bottom: -4px;
    right: 5px;
    transform: translate(-50%, -10px);
  `;
  return (
    <div className={styles.appHeader}>
      <Button variant="primary" onClick={() => setModalOpen(true)}>
        Tạo công việc mới
      </Button>
      <Search>
        <Input type="text" placeholder="Search ..." />
        <Loop>
          <SearchOutlined />
        </Loop>
      </Search>
      <SelectButton id="status" value={filterStatus} onChange={updatedFilter}>
        <option value="all">Tất Cả</option>
        <option value="incomplete">Đang thực hiện</option>
        <option value="complete">Hoàn thành</option>
      </SelectButton>
      <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}
