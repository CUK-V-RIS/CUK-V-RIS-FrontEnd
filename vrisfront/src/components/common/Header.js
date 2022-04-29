import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import Button from './Button';

const StyledHeader = styled.div`
    position: fixed;
    width: 100%;
    background: #F0FFF0;
    border-bottom: 1px solid #e0e0e0;

    
`;

//**Responsive 컴포넌트에 스타일을 추가하여 새로운 컴포넌트를 생성 */

const Wrapper = styled(Responsive)`
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between; //자식 엘리먼트 사이 여백 최대로 설정
    .logo{
        font-size: 1.125rem;
        font-weight: 800;
        letter-spacing: 2px;
    }
    .right{
        display: flex;
        align-items: center;
        float: right;
    }    
`;

const Spacer = styled.div`
    height: 4rem;
`;

const Header = () => {
    return (
        <>
            <StyledHeader>
                <Wrapper>
                    <div className='logo'>V-RIS</div>
                    <div className='right'>
                        <Button>로그인</Button>
                    </div>
                </Wrapper>
            </StyledHeader>
            <Spacer />
        </>

    );
};

export default Header;