import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import RecentActorsIcon from "@mui/icons-material/CollectionsBookmark";
import RecentItems from "./RecentItems";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../features/userSlice";
import EditIcon from "@mui/icons-material/Edit";
import { collection, doc, documentId, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged, updateProfile } from "firebase/auth";

const Sidebar = () => {
  const [user] = useAuthState(auth)
  const currentUser = useSelector(selectUser)
  const [profileInput, setProfileInput] = useState(false) 
  const [_name, setName] = useState("")
  const [_email, setEmail] = useState("")
  const dispatch = useDispatch()

  const show = () => {
    setProfileInput(true)

    if(profileInput === true) {
      setProfileInput(false)
    }
    
  }
  const update = async () => {
    await updateDoc(doc(db, "users", user.uid), {
      name: _name,
      email: _email,
    })
    alert(`Your updated name is ${_name} and email is ${_email}`)
  }

  const authType = user.providerData[0].providerId

  return (
    <Container>
      <SidebarTop>
        <img
          src="https://images.unsplash.com/photo-1641372311163-807e54a84e4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
          className="bg-img"
        />
        <SidebarTopUpper>
          <UserAvatar sx={{ height: "70px", width: "70px" }} src={!user || !currentUser ? Avatar : user.photoURL || currentUser.image}>
          {!user?.photoURL || !currentUser?.image ? user?.displayName[0].toUpperCase() || currentUser.name[0].toUpperCase() : user?.photoURL || currentUser?.image}
          </UserAvatar>
          <h3>{!user || !currentUser ? "Username" : user.displayName || currentUser.name}</h3>
          <p
            style={{
              fontSize: "14px",
              color: "#666666",
              fontWeight: "lighter",
            }}
          >
            {!user || !currentUser ? "user@gmail.com" : user.email || currentUser.email}
          </p>
          <div className={authType === "password" ? "block mt-2" : "hidden"}>
          <EditIcon className="hover:cursor-pointer" onClick={show}/>
          <div className={profileInput === true ? "block mt-1 space-y-2" : "hidden"}>
          <input type="text" value={_name} onChange={(e) => {setName(e.target.value)}} className="border border-[1.5px solid gray] rounded-md p-2 outline-none" placeholder="Update Name"/>
          <input type="text" value={_email} onChange={(e) => {setEmail(e.target.value)}} className="border border-[1.5px solid gray] rounded-md p-2 outline-none" placeholder="Update Email"/>
          <button className="p-2 my-2 ml-28 text-[12px] bg-white border border-[1px solid gray] outline-none rounded-md hover:bg-blue-100 cursor-pointer" onClick={update}>Update</button>
          </div>
          </div>
        </SidebarTopUpper>

        <SidebarTopMiddle>
          <Stats>
            <p>Who viewed your profile</p>
            <p style={{ color: "#2d7ccb", fontWeight: "bold" }}>1234</p>
          </Stats>
          <Stats>
            <p>Views on post</p>
            <p style={{ color: "#2d7ccb", fontWeight: "bold" }}>1212</p>
          </Stats>
        </SidebarTopMiddle>

        <SidebarTopBottom>
          <p>Access exclusive tools & insights</p>
          <p>Get Hired Faster, Try Premium Free</p>
        </SidebarTopBottom>

        <Items>
          <BookmarkIcon style={{ marginRight: "5px" }} className="bookmark" />
          <p>My Items</p>
        </Items>
      </SidebarTop>

      <SidebarBottom>
        <p className="recentTag">Recent Visits</p>
        <RecentItemContiner>
          <RecentItems Icon={RecentActorsIcon} title="Programming Languages" />
          <RecentItems Icon={RecentActorsIcon} title="Programming Languages" />
          <RecentItems Icon={RecentActorsIcon} title="Programming Languages" />
          <RecentItems Icon={RecentActorsIcon} title="Programming Languages" />
          <RecentItems Icon={RecentActorsIcon} title="Programming Languages" />
          <RecentItems Icon={RecentActorsIcon} title="Programming Languages" />
          <RecentItems Icon={RecentActorsIcon} title="Programming Languages" />
        </RecentItemContiner>

        <p className="discover">Discover More</p>
      </SidebarBottom>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  position: sticky;
  top: 80px;
  flex: 0.2;
  border-radius: 10px;
  text-align: center;
  height: fit-content;

  @media (max-width: 850px) {
    display: none;
  }
`;

const SidebarTop = styled.div`
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 10px;
`;

const SidebarTopUpper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid lightgray;
  padding: 0px 17px 20px 17px;
`;

const SidebarTopMiddle = styled.div`
  padding: 10px 0px 10px 0px;
  border-bottom: 1px solid lightgray;
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 10px;
  font-size: 13px;
  transition: 0.3s;
  color: #666666;

  :hover {
    background-color: lightgray;
    cursor: pointer;
  }
`;

const SidebarTopBottom = styled.div`
  padding: 8px 10px 20px 10px;
  font-size: 13px;
  color: #666666;
  font-weight: lighter;
  border-bottom: 1px solid lightgray;
  transition: 0.3s;

  :hover {
    cursor: pointer;
    background-color: lightgray;
  }
`;

const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 10px 10px 10px;
  font-size: 14px;
  color: #666666;
  font-weight: bold;
  transition: 0.3s;

  :hover {
    background-color: lightgray;
    cursor: pointer;
  }
`;

const UserAvatar = styled(Avatar)`
  margin-bottom: 8px;
  transition: 0.5s;

  :hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

const SidebarBottom = styled.div`
  margin-top: 10px;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 10px;
`;

const RecentItemContiner = styled.div`
  border-bottom: 1px solid lightgray;
`;
