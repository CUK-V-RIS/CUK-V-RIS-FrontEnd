import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import KakaoButton from './KakaoButton';
import { Link } from 'react-router-dom';

/**로그인(아이디, 비밀번호) 박스, 소셜로그인 아이콘을 보여줌 */

const StyledAuthForm = styled.div`
h3{
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
}
`;

/**로그인박스 스타일링 */
const StyledInput = styled.input`
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid ${palette.gray[5]};
    padding-bottom: 0.5rem;
    outline: none;
    width: 100%;
    &:focus{
        color: $oc-teal-7;
        border-bottom: 1px solid ${palette.gray[7]};
    }
    & + & {
        margin-top: 1rem;
    }
`;

/*상단 여백 */
const ButtonWidthMarginTop = styled(KakaoButton)`
    margin-top: 1rem;
`;


/*여기 백엔드랑 맞춰서 수정 필요&& 소셜로그인 공부필요*/
//컴포넌트 만들기 귀찮아서... 채식의 세계로 초대합니다 더 예쁘게 하고 싶으면 수정하겠음
const AuthForm = () => {
    return (
        <StyledAuthForm>
            <h3>　　채식의 세계로 초대합니다!</h3> 
            <form>
                <StyledInput autoComplete="username" name="username" placeholder="아이디" /> 
                <StyledInput
                    autoComplete="new-password"
                    name="password"
                    placeholder="비밀번호"
                    type="password"
                />
                <ButtonWidthMarginTop fullWidth></ButtonWidthMarginTop>
            </form>
        </StyledAuthForm>
    );
};

export default AuthForm;