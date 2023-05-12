import styled from "styled-components";
import React, { memo } from "react";
import { useRecoilValue } from "recoil";
// import { UserContext } from "../../../providers/UserProvider";
import { userState } from "../../../store/userState";

export const UserIconWithName = memo((props) => {
  const { image, name } = props;
  // const { userInfo } = useContext(UserContext);
  const userInfo = useRecoilValue(userState);
  const isAdmin = userInfo ? userInfo.isAdmin : false;
  return (
    <SContainer>
      <SImage height={160} widh={160} src={image} alt={name} />
      <SName>{name}</SName>
      {isAdmin && <SEdint>編集</SEdint>}
    </SContainer>
  );
});

const SContainer = styled.div`
  text-align: center;
`;

const SImage = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;
const SEdint = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
