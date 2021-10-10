import React from "react";
import cn from "classnames";
import s from "./Sidebar.module.css";

function BaseButton() {
  return (
    <div className={s.SidebarInvite}>
      <div className={s.SibebarInvite_button} role="button" tabIndex={0}>
        <div className={s.SidebarInvite_contentContainer}>
          <img
            alt="Button icon"
            className={s.SidebarInvite_buttonImage}
            src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/8a613bc1f8e95548a8ccf856b77261a748868a44/illustration_invite_teammates.svg"
          />
          <span className={cn(s.SidebarInvite_buttonText, s.Typography)}>
            Invite teammates
          </span>
        </div>
      </div>
    </div>
  );
}

export default BaseButton;
