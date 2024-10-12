// src/components/WidthControlBtn/SubNav.jsx
import React from "react";
import "./SubNav.css";

function ResizeSidepanelTooltip() {

    return (
        <div className="resize-sidepanel--container">
                <div className="subnav-col-content--container">
                    <button onClick={() => handleResize("width100")}>+100%</button>
                    <button onClick={() => handleResize("width75")}>+75%</button>
                    <button onClick={() => handleResize("width50")}>+50%</button>
                    <button onClick={() => handleResize("width25")}>+25%</button>
                    <button onClick={() => handleResize("baseWidth")}>Default</button>
                </div>
            </div>
        </div>
    );
}

export default ResizeSidepanelTooltip;
