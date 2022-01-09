import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import HeaderIcon from "./HeaderIcon";
import WorkIcon from "@mui/icons-material/Work";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AppsIcon from "@mui/icons-material/Apps";
import { auth, provider } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signInWithPopup, signOut } from "firebase/auth";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import { useDispatch } from "react-redux";


const Header = () => {
  const [user] = useAuthState(auth)
  const currentUser = useSelector(selectUser)
  const dispatch = useDispatch()

  return (
    <Container>
      <HeaderLeft>
        <LogoImage src="https://cdn-icons-png.flaticon.com/512/174/174857.png" />
        <Searchbar>
          <SearchIcon />
          <SearchInput placeholder="Search..."/>
        </Searchbar>
      </HeaderLeft>

      <HeaderRight>
        <HeaderIcon Icon={HomeIcon} title="Home" />
        <HeaderIcon Icon={GroupIcon} title="My Network"/>
        <HeaderIcon Icon={WorkIcon} title="Jobs" className="abc"/>
        <HeaderIcon Icon={ChatIcon} title="Messaging"/>
        <HeaderIcon Icon={NotificationsIcon} title="Notifications" />
        <HeaderIcon src={!user?.photoURL || !currentUser?.image ? Avatar : user?.photoURL || currentUser?.image} />
      </HeaderRight>

      <HeaderCorner>
        <HeaderCornerIcon className="workIcon" onClick={() => {!user || !currentUser ? signInWithPopup(auth, provider) : signOut(auth) || dispatch(logout()) }} >
          <AppsIcon sx={{ height: "25px", width: "25px" }} className="appIcon"/>
          <p style={{ fontSize: "12px", color: "#666666" }}>{!user || !currentUser ? "Google Sign In" : "Sign Out"}</p>
        </HeaderCornerIcon>
        <HeaderCornerText>
          <p style={{ fontSize: "12px", color: "#915907" }} className="getHired">Get Hired Faster</p>
          <p style={{ fontSize: "12px", color: "#915907" }} className="getHired">Try Premium Free</p>
        </HeaderCornerText>
      </HeaderCorner>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 999;
  width: 100%;
  display: flex;
  background-color: white;
  justify-content: space-evenly;

`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 605px) {
    display: none;
  }
`;

const LogoImage = styled.img`
  object-fit: contain;
  height: 35px;
  padding-left: 10px;

  :hover {
    cursor: pointer;
  }

  @media (max-width: 750px) {
    margin-right: 15px;
  }
`;

const Searchbar = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  background-color: #eef3f8;
  padding: 7px 80px 7px 12px;
  border-radius: 5px;
  border: 1px solid lightgray;

  @media (max-width: 968px) {
    display: none;
  }
`;

const SearchInput = styled.input`
  outline-width: 0;
  border: none;
  background-color: #eef3f8;
  margin-left: 8px;
`;

const HeaderCorner = styled.div`
  padding: 7px 10px 7px 20px;
  display: flex;
  align-items: center;
  border-left: 1px solid lightgray;

  :hover {
    cursor: pointer;
  }
`;
const HeaderCornerIcon = styled.div`
  text-align: center;
`;

const HeaderCornerText = styled.div`
  margin-left: 20px;
  text-align: center;
`;
