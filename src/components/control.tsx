import React from "react";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";

const Control = (): JSX.Element => {
    return (
        <div style={{ background: "#e8eaf6", opacity: 0.8, padding: 10 }}>
            <IconButton className="frameless-handle-no-drag" size="small">
                <AddIcon />
            </IconButton>
        </div>
    );
};

export default Control;
