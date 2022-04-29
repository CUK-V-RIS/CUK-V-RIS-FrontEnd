import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

/** 회원가입/로그인 페이지 레이아웃(틀) 
 * children으로 받은 값을 보여주기만 함!! (스타일링)
*/
/* 색상 수정해야함. 팔레트에 색상 추가 필요 */
/* 스타일드 컴포넌트 자동완성 안되는 중인데 왜 안됨...?: vscode-styled-components 확장 설치로 해결  */

/* 화면 전체를 채움 */
const StyledAuthTemplate = styled.div`
position: absolute;
left: 0;
top: 0;
bottom: 0;
right: 0;
background: ${palette.gray[2]};

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

/* 흰색 박스 */
const WhiteBox = styled.div`
.logo-area{
    display:block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
}
box-shadow: 0 0 8px rgba(0, 0, 0.025);
padding: 2rem;
width: 360px;
background: white;
border-radius: 2px;
`;

//타이틀 V-RIS 예쁘게 하고 싶으면 컴포넌트 만들어 추후 수정함
const AuthTemplate = ({ children }) => {
    return (
        <StyledAuthTemplate>
            <WhiteBox>
                <div className="logo-area">
                    <Link to="/">V-RIS</Link>
                </div>
                {children}
            </WhiteBox>
        </StyledAuthTemplate>
    );
};

export default AuthTemplate;