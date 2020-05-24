import React from 'react';
import { VisuallyHiddenStyle } from "../../Style";

/** @jsx jsx */
import { jsx } from '@emotion/core'

// accessibility (screen readers etc)
export const VisuallyHidden = (props: {children?: any}) => (
    <span css={VisuallyHiddenStyle} >
        {props.children}
    </span>
);
