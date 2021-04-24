import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addBoard } from "../actions";
import BoardThumbnail from "./BoardThumbnail";

const Thumbnails = styled.div`
  flex: 1;
  height: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

const CreateTitle = styled.h3`
  font-size: 2rem;
  color: white;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
`;

const CreateInput = styled.input`
  width:80vw;
  height: 80px;
  font-size: 22px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 8px;
  border: none;
  outline-color: blue;
  box-shadow: 0 2px 4px grey;
  align-self: center;
  margin-top:5rem;
  margin-bottom:10rem;
`;

const Home = ({ boards, boardOrder, dispatch }) => {
  // .this is the home  site  that shows you your boards and you can also create a Board here.

  const [newBoardTitle, setNewBoardTitle] = useState("");

  const handleChange = e => {
    setNewBoardTitle(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addBoard(newBoardTitle));
  };

  const renderBoards = () => {
    return boardOrder.map(boardID => {
      const board = boards[boardID];

      return (
        <Link
          key={boardID}
          to={`/${board.id}`}
          style={{ textDecoration: "none" }}
        >
          <BoardThumbnail {...board} />
        </Link>
      );
    });
  };

  const renderCreateBoard = () => {
    return (
      <form onSubmit={handleSubmit} style={{ textAlign: "center",marginBottom:"3rem",marginTop:"5rem" }}>
        <CreateInput
          onChange={handleChange}
          value={newBoardTitle}
          placeholder="Create a new board..."
          type="text"
        />
      </form>
    );
  };

  return (
    <HomeContainer>
      {renderCreateBoard()}
      <Thumbnails>{renderBoards()}</Thumbnails>
    </HomeContainer>
  );
};

const mapStateToProps = state => ({
  boards: state.boards,
  boardOrder: state.boardOrder
});

export default connect(mapStateToProps)(Home);
