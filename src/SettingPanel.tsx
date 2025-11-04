import React, { useState, useRef } from "react";
import { createPortal } from "react-dom";

const SettingPanel = ({ children }) => {
    const [isPin, setIsPin] = useState(true);
    const panelRef = useRef(null);

    const panelContent = (
        <div className="settings-inner">
            <h3>Settings Panel</h3>
            <button onClick={() => setIsPin(!isPin)}>
                {isPin ? "Unpin" : "Pin"}
            </button>
            {children}
        </div>
    );

    // Always render the panel content inside a single div
    const panel = <div ref={panelRef} className="settings-panel">{panelContent}</div>;

    return isPin ? panel : createPortal(panel, document.body);
};

export default SettingPanel;
