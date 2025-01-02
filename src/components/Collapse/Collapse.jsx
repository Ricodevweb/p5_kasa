import React, { useState, useRef } from "react";
import "./Collapse.css";
import arrowopen from "../../assets/arrowopen.png";
function Collapse(props) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className={`collapse-drop-down-list ${isOpen ? "open" : ""}`}>
            <h3 onClick={handleClick}>
                {props.title}
                <img
                    className={
                        isOpen ? "arrow arrow-to-close" : "arrow arrow-to-open"
                    }
                    src={arrowopen}
                    alt="afficher le contenu"
                />
            </h3>
            <div
                className="content-in-collapse"
                ref={contentRef}
                style={{
                    maxHeight: isOpen
                        ? `${contentRef.current.scrollHeight}px`
                        : "0",
                }}
            >
                {props.content}
            </div>
        </div>
    );
}
export default Collapse;