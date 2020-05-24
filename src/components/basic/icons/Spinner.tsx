import React from 'react';

/** @jsx jsx */
import { jsx, css, keyframes, SerializedStyles } from '@emotion/core'

export const SpinnerIcon = (props: { style?: SerializedStyles }) => (
    <span css={[styles, props.style]}/>
);

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  
  to {
  transform: rotate(360deg);
  }
`;

const styles = css`
    position: absolute;
    left: 22px;
    top: 0;
    bottom: 0;
    margin: auto 0;
    display: inline-block;
    width: 11px;
    height: 11px;
    vertical-align: text-bottom;
    border: 2px solid white;
    border-right-color: transparent;
    border-radius: 50%;
    animation: ${spin} .55s linear infinite
`;
