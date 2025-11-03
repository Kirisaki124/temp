import React, { useRef, useState, useEffect } from "react";
import SettingPanel from "./SettingPanel.tsx";

const TestLayout: React.FC = () => {
    return (
        <div className="content">
            <div className="workspace">
                <SettingPanel />
                <div className="main">
                    <h3>Main Panel</h3>
                </div>
            </div>
            <div className="commands">
                <h3>Command Panel</h3>
            </div>
        </div>
    );
};

export default TestLayout;
