import React from "react";

function AchievementWidget() {
  return (
    <div className="HomePageContent-achievementsAndCustomizeButton">
      <div className="AchievementsWidget HomePageContent-achievements">
        <div className="AchievementsWidgetContent AchievementsWidgetContent--lightAccents">
          <div className="AchievementsWidgetContent-selectMenu">
            <div
              className="AbstractThemeableRectangularButton--isEnabled AbstractThemeableRectangularButton AbstractThemeableRectangularButton--medium InverseSubtleButton FloatingSelect AchievementsWidgetContent-anchor"
              role="button"
              aria-expanded="false"
              tabIndex={0}
            >
              <span className="FloatingSelect-label">My week</span>
              <svg
                className="MiniIcon AbstractThemeableRectangularButton-rightIcon ArrowDownMiniIcon"
                focusable="false"
                viewBox="0 0 24 24"
              >
                <path d="M3.5,8.9c0-0.4,0.1-0.7,0.4-1C4.5,7.3,5.4,7.2,6,7.8l5.8,5.2l6.1-5.2C18.5,7.3,19.5,7.3,20,8c0.6,0.6,0.5,1.5-0.1,2.1 l-7.1,6.1c-0.6,0.5-1.4,0.5-2,0L4,10.1C3.6,9.8,3.5,9.4,3.5,8.9z"></path>
              </svg>
            </div>
          </div>
          <div className="AchievementsWidgetContent-divider"></div>
          <div className="AchievementsWidgetContent-statistic">
            <div className="AchievementsWidgetStatistic">
              <div className="AchievementsWidgetStatistic-numberSection--smallNumber AchievementsWidgetStatistic-numberSection">
                <svg
                  className="Icon CheckIcon"
                  focusable="false"
                  viewBox="0 0 32 32"
                >
                  <path d="M10.9,26.2c-0.5,0-1-0.2-1.4-0.6l-6.9-6.9c-0.8-0.8-0.8-2,0-2.8s2-0.8,2.8,0l5.4,5.4l16-15.9c0.8-0.8,2-0.8,2.8,0s0.8,2,0,2.8L12.3,25.6C11.9,26,11.4,26.2,10.9,26.2z"></path>
                </svg>
                <div className="NumberTicker" aria-label="1">
                  <div aria-hidden="true">
                    <div className="NumberTicker-row NumberTicker-row--h4">
                      <div className="NumberTicker-column NumberTicker-column--1">
                        <h4 className="NumberTicker-number AchievementsWidgetStatistic-numberTicker--lightAccents Typography Typography--colorDarkGray2 Typography--h4 Typography--fontWeightMedium">
                          &nbsp;
                        </h4>
                        <h4 className="NumberTicker-number AchievementsWidgetStatistic-numberTicker--lightAccents Typography Typography--colorDarkGray2 Typography--h4 Typography--fontWeightMedium">
                          0
                        </h4>
                        <h4 className="NumberTicker-number AchievementsWidgetStatistic-numberTicker--lightAccents Typography Typography--colorDarkGray2 Typography--h4 Typography--fontWeightMedium">
                          1
                        </h4>
                        <h4 className="NumberTicker-number AchievementsWidgetStatistic-numberTicker--lightAccents Typography Typography--colorDarkGray2 Typography--h4 Typography--fontWeightMedium">
                          2
                        </h4>
                        <h4 className="NumberTicker-number AchievementsWidgetStatistic-numberTicker--lightAccents Typography Typography--colorDarkGray2 Typography--h4 Typography--fontWeightMedium">
                          3
                        </h4>
                        <h4 className="NumberTicker-number AchievementsWidgetStatistic-numberTicker--lightAccents Typography Typography--colorDarkGray2 Typography--h4 Typography--fontWeightMedium">
                          4
                        </h4>
                        <h4 className="NumberTicker-number AchievementsWidgetStatistic-numberTicker--lightAccents Typography Typography--colorDarkGray2 Typography--h4 Typography--fontWeightMedium">
                          5
                        </h4>
                        <h4 className="NumberTicker-number AchievementsWidgetStatistic-numberTicker--lightAccents Typography Typography--colorDarkGray2 Typography--h4 Typography--fontWeightMedium">
                          6
                        </h4>
                        <h4 className="NumberTicker-number AchievementsWidgetStatistic-numberTicker--lightAccents Typography Typography--colorDarkGray2 Typography--h4 Typography--fontWeightMedium">
                          7
                        </h4>
                        <h4 className="NumberTicker-number AchievementsWidgetStatistic-numberTicker--lightAccents Typography Typography--colorDarkGray2 Typography--h4 Typography--fontWeightMedium">
                          8
                        </h4>
                        <h4 className="NumberTicker-number AchievementsWidgetStatistic-numberTicker--lightAccents Typography Typography--colorDarkGray2 Typography--h4 Typography--fontWeightMedium">
                          9
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <span className="AchievementsWidgetStatistic-text Typography Typography--s">
                task completed
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="AbstractThemeableRectangularButton--isEnabled AbstractThemeableRectangularButton AbstractThemeableRectangularButton--large InverseSecondaryButton HomePageContent-customizeButton"
        role="button"
        tabIndex={0}
      >
        <svg
          className="Icon AbstractThemeableRectangularButton-leftIcon AppsIcon"
          focusable="false"
          viewBox="0 0 32 32"
        >
          <path d="M9.5,2C10.878,2,12,3.122,12,4.5v5c0,1.378-1.122,2.5-2.5,2.5h-5C3.122,12,2,10.878,2,9.5v-5C2,3.122,3.122,2,4.5,2H9.5M9.5,0h-5C2.015,0,0,2.015,0,4.5v5C0,11.985,2.015,14,4.5,14h5c2.485,0,4.5-2.015,4.5-4.5v-5C14,2.015,11.985,0,9.5,0L9.5,0zM27.5,2C28.879,2,30,3.122,30,4.5v5c0,1.378-1.121,2.5-2.5,2.5h-5c-1.379,0-2.5-1.122-2.5-2.5v-5C20,3.122,21.121,2,22.5,2H27.5M27.5,0h-5C20.015,0,18,2.015,18,4.5v5c0,2.485,2.015,4.5,4.5,4.5h5c2.485,0,4.5-2.015,4.5-4.5v-5C32,2.015,29.985,0,27.5,0L27.5,0z M9.5,20c1.378,0,2.5,1.122,2.5,2.5v5c0,1.378-1.122,2.5-2.5,2.5h-5C3.122,30,2,28.878,2,27.5v-5C2,21.122,3.122,20,4.5,20H9.5M9.5,18h-5C2.015,18,0,20.015,0,22.5v5C0,29.985,2.015,32,4.5,32h5c2.485,0,4.5-2.015,4.5-4.5v-5C14,20.015,11.985,18,9.5,18L9.5,18z M24,24v-5c0-0.55,0.45-1,1-1s1,0.45,1,1v5h5c0.55,0,1,0.45,1,1s-0.45,1-1,1h-5v5c0,0.55-0.45,1-1,1s-1-0.45-1-1v-5h-5c-0.55,0-1-0.45-1-1s0.45-1,1-1H24z"></path>
        </svg>
        Customize
      </div>
    </div>
  );
}

export default AchievementWidget;
