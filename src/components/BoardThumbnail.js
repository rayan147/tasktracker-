import React from "react";
import styled from "styled-components";

const Thumbnail = styled.div`
  height: 180px;
  width: 180px;
  background:  white;
  padding: 10px;
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 2px 4px grey;
`;

const Title = styled.h4`
  color: red;
  text-decoration: none;
`;

const BoardThumbnail = ({ title }) => {
  return (
    <Thumbnail>
      <Title>{title}</Title>
    </Thumbnail>
  );
};

export default BoardThumbnail;