import React, { useEffect, useState } from "react";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import styled from "styled-components";

import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as likeActions } from "../redux/modules/like";

const Like = (props) => {
  const dispatch = useDispatch();
  const is_local = localStorage.getItem("is_login")
  const userId = localStorage.getItem("userId")

  const like_list = useSelector((state) => state.like.list);
  const commentId = props.commentId


  React.useEffect(() => {
    if (like_list[commentId]?.includes(userId)) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  });

  React.useEffect(() => {
    dispatch(likeActions.getLikeFB(commentId))

  }, [commentId]);

  const [toggle, setToggle] = useState(false);

  const updateHeart = () => {
    if (!userId || !is_local) {
      return alert("로그인을 해주세요");
    } else if (!like_list[commentId]?.includes(userId)) {
      dispatch(likeActions.addLikeFB(commentId, userId));
    }
    else if (like_list[commentId]?.includes(userId)) {
      dispatch(likeActions.cancelLikeFB(commentId, userId));
    }
  };

  return (
    <>
      <LikeButtonFrame>
        {toggle ? <UnlikeButton
          onClick={() => {
            updateHeart()
          }}
        >
          취소
        </UnlikeButton> : <LikeButton
          onClick={() => {
            updateHeart()
          }}
        >
          좋아요
        </LikeButton>

        }
      </LikeButtonFrame>
    </>
  );
};

const styles = {
  fontSize: "20px",
  cursor: "pointer"

};
const LikeButtonFrame = styled.div`
  font-size: 17px;
  font-weight: 400;
  letter-spacing: -0.7px;
  line-height: 22px;
  padding: 9.5px 0px;
  margin: 0px -4px;
`;

const LikeButton = styled.button`
  background: rgb(255, 47, 110);
  color: rgb(255, 47, 110);
  border-radius: 3px;
  background: none;
  border: none;
  margin: 0px;
  cursor: pointer;
  font-size: 17px;
  font-weight: 400;
  letter-spacing: -0.7px;
  line-height: 22px;
  padding: 2px 8px;
`;
const UnlikeButton = styled.button`
  border: none;
  margin: 0px;
  cursor: pointer;
  font-size: 17px;
  font-weight: 400;
  letter-spacing: -0.7px;
  line-height: 22px;
  padding: 2px 8px;
  background: rgb(255, 47, 110);
  color: rgb(255, 255, 255);
  border-radius: 3px;
`;
export default Like;
