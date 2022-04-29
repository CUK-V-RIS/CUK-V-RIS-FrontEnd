import React from 'react';
import styled from 'styled-components';


const StyledResponsive = styled.div`
    padding-left: 0px;
    padding-right: 0px;
    width: 1280px;
    margin: 0px auto; /*가운데정렬*/
    display: flex;

    /*브라우저 크기에 따라 가로크기 변경*/
    @media (max-width: 1280px){ /*화면크기에 따른 양옆 여백... 어떻게 해결하지??? */
        width: 768px;
    }
    @media(max-width: 768px){
        width: 100%;
    }
`;

const Responsive = ({ children, ...rest }) => {
    //styled, className, onClik, onMouseMove 등의 props를 사용할 수 있도록
    //...rest를 사용하여 StyledResponsive에게 전달!!!!!
    return <StyledResponsive {...rest}>{children}</StyledResponsive>;
};

export default Responsive;