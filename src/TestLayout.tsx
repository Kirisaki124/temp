import React, {useEffect} from "react";
import ChildComp from "./ChildComp.tsx";
import {createHtmlPortalNode, InPortal, OutPortal} from "react-reverse-portal";

const TestLayout: React.FC = () => {
    const portalNode = createHtmlPortalNode();

    useEffect(() => {
        const dragBox = document.getElementById("dragBox");
        let offsetX, offsetY, isDragging = false;

        dragBox.addEventListener("mousedown", (e) => {
            isDragging = true;
            // Calculate offset from top-left corner of the box
            offsetX = e.clientX - dragBox.getBoundingClientRect().left;
            offsetY = e.clientY - dragBox.getBoundingClientRect().top;
            dragBox.style.cursor = "grabbing";
        });

        document.addEventListener("mousemove", (e) => {
            if (!isDragging) return;

            // Set the new position, accounting for the initial offset
            dragBox.style.left = `${e.clientX - offsetX}px`;
            dragBox.style.top = `${e.clientY - offsetY}px`;
        });

        document.addEventListener("mouseup", () => {
            isDragging = false;
            dragBox.style.cursor = "grab";
        });
    }, []);

    return React.createElement(() => {
        const [useOuterDiv, setDivToUse] = React.useState(false);
        return <div>
            <InPortal node={portalNode}>
                <video src="https://media.giphy.com/media/l0HlKghz8IvrQ8TYY/giphy.mp4" controls loop />
                <ChildComp />
            </InPortal>

            <button onClick={() => setDivToUse(!useOuterDiv)}>
                Click to move the OutPortal
            </button>

            <hr />

            <div>
                <p>Outer OutPortal:</p>
                {useOuterDiv === true && <OutPortal node={portalNode} />}
                <div>
                </div>
                <div id="dragBox"> {useOuterDiv === false && <OutPortal node={portalNode} />}</div>
            </div>
        </div>;
    });
}

export default TestLayout;
