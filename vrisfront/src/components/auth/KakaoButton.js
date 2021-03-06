import React from 'react';
import styled, { css } from 'styled-components';


const StyledKakaoButton = styled.button`
border: none;
border-radius: 4px;
font-size: 1rem;
font-weight: bold;
padding: 0.25rem 1rem;
color: none;
outline: none;
cursor: pointer;

${props =>
    props.fullWidth &&
    css`
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        width: 100%;
        font-size: 1.125rem;
    `}

background-size: cover;
height: 43px;
background-image: url('/assets/kakao_login2.png');
`;

const KakaoButton = props => <StyledKakaoButton{...props} />;

export default KakaoButton;