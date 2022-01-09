import React, { forwardRef } from "react";
import styled from "styled-components";
import { Avatar } from "@mui/material";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';
import IosShareIcon from '@mui/icons-material/IosShare';
import SelectIcons from "./SelectIcons";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const Posts = forwardRef(({ name, email, message, userImg, time }, ref) => {
  const [user] = useAuthState(auth)
  return (
    <div ref={ref}>
      <Post>
        <PostHead>
          <UserAvatar sx={{ height: "50px", width: "50px" }} src={userImg} />
          <PostHeadInfo>
            <h3 style={{ fontSize: "15px" }}>{name}</h3>
            <p
              style={{ fontSize: "13px", fontWeight: "bold", color: "#666666" }}
            >
              {email}
            </p>
          </PostHeadInfo>
          <p style={{ fontSize: "13px", fontWeight: "bold", color: "#666666" }}>
            {time}
          </p>
        </PostHead>

        <p className="message">{message}</p>

        <PostBody>
          <img
            src=""
            alt=""
            className="postImg"
          />
        </PostBody>

        <PostIcon>
        <SelectIcons Icon={ThumbUpOffAltIcon} name="Like"  />
          <SelectIcons Icon={CommentIcon} name="Comment" />
          <SelectIcons Icon={IosShareIcon} name="Share" />
          <SelectIcons Icon={SendIcon} name="Send" />
        </PostIcon>
      </Post>
    </div>
  );
});

export default Posts;

const Post = styled.div`
  background-color: white;
  border-radius: 10px;
  margin-top: 15px;
`;

const PostHead = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px 14px 0px 10px;
`;

const UserAvatar = styled(Avatar)`
  transition: 0.5s;

  :hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

const PostHeadInfo = styled.div`
  margin-left: 10px;
  flex: 1;
`;
const PostBody = styled.div``;

const PostIcon = styled.div`
display: flex;
justify-content: space-around;

@media (max-width: 485px) {
    flex-wrap: wrap;
  }
`;
