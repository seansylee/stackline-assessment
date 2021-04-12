import React from "react";
import "../styles/SideBar.css";

type SideBarProps = {
  title: string;
  image: string;
  subtitle: string;
  tags: string[];
};

const SideBar: React.FC<SideBarProps> = (props: SideBarProps) => {

  const { title, image, subtitle, tags } = props;

  return (
    <div>
      <div className="item-container">
        <div className="item-description">
          <img className="item-avatar" src={image} alt="Item display" />
          <h3 className="title">{title}</h3>
          <p className="subtitle">{subtitle}</p>
        </div>
        <div className="tag-container">
          <div className="tag-sub-container">
            {tags.map((tag: string) => (
              <div className="tag">{tag}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="side-nav-container">
        <div className="nav-button" style={{ color: "grey" }}>
          <i
            className="fa fa-home"
            // to keep the UI as disabled
            style={{ color: "grey" }}
            aria-hidden="true"
          ></i>
          OVERVIEW
        </div>
        <div className="nav-button" style={{ color: "black" }}>
          <i
            className="fa fa-bar-chart"
            style={{ color: "#008DA9" }}
            aria-hidden="true"
          ></i>
          SALES
        </div>
      </div>
    </div>
  );
};

export default SideBar;
