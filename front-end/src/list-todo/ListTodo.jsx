import React from "react";
import { Toaster } from "react-hot-toast";
import AppContent from "./Component/AppContent";
import AppHeaders from "./Component/AppHeaders";
import PageTitle from "./Component/PageTitle";
import styles from "./styles/modules/app.module.scss";

function ListTodo() {
    return (
      <>
        <div className="container">
          <PageTitle>Danh sách việc cần làm</PageTitle>
          <div className={styles.app__wrapper}>
            
            <AppHeaders />
            <AppContent />
          </div>
        </div>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              fontSize: "1.4rem",
            },
          }}
        />
      </>
    );
  }
  
export default ListTodo;