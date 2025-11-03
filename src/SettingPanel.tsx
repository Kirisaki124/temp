import React, {useEffect, useState} from "react";
import { createPortal } from 'react-dom';

const SettingPanel = () => {

    const [isPin, setIsPin] = useState(false);

    useEffect(() => {
        const divider = document.getElementById("divider");
        const settings = document.getElementById("settings");

        let isResizing = false;

        divider.addEventListener("mousedown", () => {
            isResizing = true;
        });

        document.addEventListener("mousemove", (e) => {
            if (!isResizing) return;

            const parentRect = settings.parentElement.getBoundingClientRect();
            const newWidth = e.clientX - parentRect.left;

            const minWidth = 150;
            const maxWidth = parentRect.width;

            if (newWidth > minWidth && newWidth < maxWidth) {
                settings.style.width = newWidth + "px";
            }
        });

        document.addEventListener("mouseup", () => {
            isResizing = false;
        });
    }, []);


    if (isPin) {
        return <>
                <div className="settings" id="settings">
                    <h3>Settings Panel</h3>
                    <button onClick={() => setIsPin(!isPin)}>Toggle Panel</button>
                </div>
                <div className="divider" id="divider"></div>
            </>
    }
    else {
        return createPortal(
            <div>
                <div className="settings-unpin" id="settings">
                    <h3>Settings Panel</h3>
                    <button onClick={() => setIsPin(!isPin)}>Toggle Panel</button>
                </div>
                <div className="divider" id="divider"></div>
            </div>,
            document.body
        )
    }
}

export default SettingPanel;