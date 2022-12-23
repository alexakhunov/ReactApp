import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        {/* <img
          src="https://cdn-p.smehost.net/sites/2ed48fdcc3904f548299cd86d78e9885/wp-content/uploads/2020/12/concert-3387324_1280.jpg"
          alt=""
        /> */}
      </div>
      <div className={s.description_block}>Ava + dicr</div>
    </div>
  );
};

export default ProfileInfo;
