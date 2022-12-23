import React from "react";
import s from "./Dialogs.module.css";
import { BrowserRouter, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const MessageItem = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: "David" },
    { id: 2, name: "Chris" },
    { id: 3, name: "Adam" },
    { id: 4, name: "Steven" },
    { id: 5, name: "Fred" },
    { id: 6, name: "Kimberly" },
  ];

  let dialogElements = [
    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />,
    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />,
    <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />,
    <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />,
  ];

  let messagesData = [
    { id: 1, message: "Hello there" },
    { id: 2, message: "Angel from my nightmare" },
    { id: 3, message: "Can we stop this world from turning" },
    { id: 4, message: "Brain power" },
    { id: 5, message: "Brain power" },
    { id: 6, message: "Brain power" },
  ];

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {dialogElements}

        {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />,
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />,
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />, */}
      </div>
      <div className={s.messages}>
        <MessageItem message={messagesData[0].message} />
        <MessageItem message={messagesData[1].message} />
        <MessageItem message={messagesData[2].message} />
      </div>
    </div>
  );
};

export default Dialogs;
