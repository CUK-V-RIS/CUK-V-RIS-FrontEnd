import React from 'react';
import styled, { css } from 'styled-components';


const StyledKakaoButton = styled.button`
border: none;
border-radius: 4px;
padding: 1rem 2.7rem;
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

    height: 43px;
background-image: url('/assets/kakao_login_small.png');
background-size: cover;
`;

const KakaoButton = props => <StyledKakaoButton{...props} />;

export default KakaoButton;