import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { getUserInfo } from "../../_actions/user_actions";
import UserInfo from "../../components/view/MyPageInfo/UserInfo";

const StyledButton = styled.button`
  border: none;
  background: none;
  padding: 20px 10px;
  cursor: pointer;
`;

function MyPage() {
  const dispatch = useDispatch();
  const { state } = useLocation();

  const [userInfo, setUserInfo] = useState();

  let header = {
    headers: {
      Authorization: state,
    },
  };

  useEffect(() => {
    let isLoading = true;
    dispatch(getUserInfo(header)).then((res) => {
      if (isLoading) {
        setUserInfo(res.payload.data[0]);
      }
    });
    return () => (isLoading = false);
  });

  const [chkButton, setChkButton] = useState(1);

  return (
    <div>
      <div
        style={{
          position: "relative",
          width: "1000px",
          margin: "0 auto",
          paddingTop: "36px",
        }}
      >
        <aside
          style={{
            width: "150px",
            marginRight: "0",
            float: "left",
            background: "#fbfafa",
          }}
        >
          <StyledButton
            onClick={() => {
              setChkButton(1);
            }}
          >
            회원정보수정
          </StyledButton>
          <StyledButton
            onClick={() => {
              setChkButton(2);
            }}
          >
            내가 참여한 굿즈
          </StyledButton>

          <StyledButton
            onClick={() => {
              setChkButton(3);
            }}
          >
            결제 완료 굿즈
          </StyledButton>
          <StyledButton>회원 탈퇴하기</StyledButton>
        </aside>
        {userInfo && chkButton === 1 && (
          <div style={{ width: "830px", float: "right" }}>
            <UserInfo props={userInfo} />
          </div>
        )}
        {userInfo && chkButton === 2 && <div>user info is here 2</div>}
        {userInfo && chkButton === 3 && <div>user info is here 3</div>}
      </div>
    </div>
  );
}

export default MyPage;