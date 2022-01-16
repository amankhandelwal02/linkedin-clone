import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import EditIcon from "@mui/icons-material/Edit";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import FeaturedVideoIcon from "@mui/icons-material/FeaturedVideo";
import PollIcon from "@mui/icons-material/Poll";
import NoteIcon from "@mui/icons-material/Note";
import SelectIcons from "./SelectIcons";
import Posts from "./Posts";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import FlipMove from 'react-flip-move';;

const MainFeed = () => {

  const currentUser = useSelector(selectUser)
  const [user] = useAuthState(auth)
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    onSnapshot(query(collection(db, "posts"), orderBy("timestamp", "desc")), (snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const uploadPost = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "posts"), {
      name: user.displayName,
      email: user.email,
      message: input,
      photoUrl: user.photoURL,
      timestamp: serverTimestamp(),
    });

    setInput("");
  };

  return (
    <Container >
      <FeedTopHeader>
        <InputContainer>
          <UserAvatar sx={{ height: "50px", width: "50px" }} src={!user || !currentUser ? Avatar : user.photoURL || currentUser.image} > 
          {!user?.photoURL || !currentUser?.image ? user?.displayName[0].toUpperCase() || currentUser.name[0].toUpperCase() : user?.photoURL || currentUser?.image}
          </UserAvatar>
          <form action="" style={{ flex: "1" }}>
            <SearchSection>
              <EditIcon style={{ marginRight: "5px" }} />
              <Input
                placeholder="Start a post"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button onClick={uploadPost} hidden={!input} type="submit" className="postBtn">
                Post
              </button>
            </SearchSection>
          </form>
        </InputContainer>

        <SelectIcon>
          <SelectIcons
            Icon={PhotoSizeSelectActualIcon}
            name="Photos"
            
          />
          <SelectIcons Icon={FeaturedVideoIcon} name="Videos"  />
          <SelectIcons Icon={PollIcon} name="Polls"  />
          <SelectIcons Icon={NoteIcon} name="Write post"  />
        </SelectIcon>
      </FeedTopHeader>

      <Post>
      <FlipMove>
        {posts.map((post) => (
          <Posts
            key={post.id}
            id={post.id}
            name={post.data.name}
            email={post.data.email}
            message={post.data.message}
            time={post.timestamp}
            userImg={!user ? Avatar : post.data.photoUrl}
          />
        ))}
          </FlipMove>
      </Post>
    </Container>
  );
};

export default MainFeed;

const Container = styled.div`
  flex: 0.57;
  margin: 0px 18px;

  @media (max-width: 1124px) {
    flex: 0.8;
  }
  @media (max-width: 850px) {
    flex: 1;
    margin-right: 10px;
  margin-left: 10px;
  }
  @media (max-width: 600px) {
    margin-right: 10px;
  margin-left: 10px;
  }
  @media (max-width: 390px) {
    margin-right: 10px;
  margin-left: 10px;
  }
`;

const UserAvatar = styled(Avatar)`
  transition: 0.5s;
  :hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

const SearchSection = styled.div`
  margin: 10px;
  background-color: #eef3f8;
  padding: 10px 20px 10px 20px;
  border-radius: 50px;
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 10px 0px 10px;

  @media (max-width: 450px) {
    margin-bottom: 10px;
  }
`;

const Input = styled.input`
  outline-width: 0;
  border: none;
  background-color: #eef3f8;
  margin-left: 8px;
  flex: 1;
`;

const SelectIcon = styled.div`
  display: flex;
  justify-content: space-around;
`;
const FeedTopHeader = styled.div`
  background-color: white;
  border-radius: 10px;
`;

const Post = styled.div``;
