import React from "react";

import MainNavBar from "../organisms/nav/MainNavBar";


function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

/* eslint no-param-reassign: [2, { "props": false }] */
function withLayout(WrappedComponent) {
    WrappedComponent.displayName = `withLayout(${getDisplayName(
        WrappedComponent,
    )})`;

    function WrapperComponent({ ...props }) {
        return (
            <>
                <MainNavBar />
                {/* <Main className={props.fullWidth ? "container-fluid" : "container"}> */}
                <WrappedComponent {...props} />
                {/* </Main> */}
                {/* <Footer /> */}
            </>
        );
    }

    return WrapperComponent;
}

export default withLayout;