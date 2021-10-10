import React from "react";
import s from "./Sidebar.module.css";
import cn from "classnames";
function SideBarLearningHubButton() {
  return (
    <div className={s.Sidebar_learningHubButtonContainer}>
      <div className={s.SidebarLearningHubButton} role="button" tabIndex={0}>
        <div className={cn(s.SidebarLearningHubButton_icon)}>
          <svg className={s.MiniIcon} focusable="false" viewBox="0 0 24 24">
            <path d="M5.47461 7.35C5.47461 3.75 8.62461 1.5 11.9996 1.5C15.0746 1.5 18.5246 3.6 18.5246 6.975C18.5246 9.15 17.4746 10.65 15.7496 11.85C15.1496 12.3 14.4746 12.825 13.9496 13.35C13.4246 14.025 13.0496 14.85 13.0496 15.9H10.1246C10.0496 15.525 9.97461 15 9.97461 14.7C9.97461 10.425 15.1496 10.05 15.1496 7.05C15.1496 5.4 13.4996 4.425 12.0746 4.425C10.1996 4.425 8.77461 5.925 8.77461 7.8C8.77461 8.1 8.77461 8.325 8.84961 8.55L5.54961 8.4C5.47461 8.1 5.47461 7.725 5.47461 7.35ZM11.6246 22.5C12.7496 22.5 13.7246 21.6 13.7246 20.475C13.7246 19.35 12.7496 18.375 11.6246 18.375C10.4996 18.375 9.59961 19.275 9.59961 20.475C9.59961 21.675 10.4996 22.5 11.6246 22.5Z"></path>
          </svg>
        </div>
        Help &amp; getting started
      </div>
    </div>
  );
}

export default SideBarLearningHubButton;
