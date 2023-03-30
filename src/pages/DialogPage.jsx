import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import "../App.css";
import DialogsPreviewList from "../components/Dialogs/DialogPreviewList";
import MessageList from "../components/Dialogs/MessageList";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const DialogPage = (props) => {
  const { id } = useParams();

  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content-wrapper">
          <Sidebar />
          <DialogsPreviewList />
          <div className="dialog-page">
            <MessageList id={id} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DialogPage;
