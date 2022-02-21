import React from "react";
import styled from "styled-components"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { history } from "../redux/configureStore";

const style = {
    width: '420px',
    minHeight: '380px',
    padding: '16px 20px 18px',
    borderRadius: '16px',
    position: 'absolute',
    display: 'inline-block',
    verticalAlign: 'middle',
    textAlign: 'left',
    height: 'auto',
    overflow: 'auto',
    background: 'rgb(255, 255, 255)',
    boxShadow: 'rgb(0 0 0 / 12%) 0px 0px 6px 0px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
};

const CommentModal = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [userName, setUserName] = React.useState("");
    const [userId, setuserId] = React.useState("");
    const [password, setpassword] = React.useState("");

    const [anchorElNav, setAnchorElNav] = React.useState(null);


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
        history.push('/detailpage');
    };

    const changeUserName = (e) => {
        setUserName(e.target.value);
    }

    const signup = () => {
        dispatch(userActions.signUpDB(userId, password, userName));
    }
    return (
        <div>
            <ConetentActionComment onClick={handleOpen}>
                <div style={{ margin: "0px 3px 0px 0px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="injected-svg" data-src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9I
                                        jAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3
                                        JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMgMTcuMjUyNVYyMS4wMDI1SDYu
                                        NzVMMTcuODEgOS45NDI1TDE0LjA2IDYuMTkyNUwzIDE3LjI1MjVaTTIwLjcxIDcuMD
                                        QyNUMyMS4xIDYuNjUyNSAyMS4xIDYuMDIyNSAyMC43MSA1LjYzMjVMMTguMzcgMy4yO
                                        TI1QzE3Ljk4IDIuOTAyNSAxNy4zNSAyLjkwMjUgMTYuOTYgMy4yOTI1TDE1LjEzIDU
                                        MTIyNUwxOC44OCA4Ljg3MjVMMjAuNzEgNy4wNDI1WiIgZmlsbD0iY3VycmVudENvbG
                                        9yIi8+Cjwvc3ZnPgo=" xmlns="http://www.w3.org/1999/xlink">
                        <path d="M3 17.2525V21.0025H6.75L17.81 9.9425L14.06 6.1925L3 
                                            17.2525ZM20.71 7.0425C21.1 6.6525 21.1 6.0225 20.71 5.6325L18.37 
                                            3.2925C17.98 2.9025 17.35 2.9025 16.96 3.2925L15.13 5.1225L18.88
                                             8.8725L20.71 7.0425Z" fill="currentColor"></path>
                    </svg>
                </div>
                코멘트
            </ConetentActionComment>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Header>
                        <Title>원피스</Title>
                        <HeaderButton onClick={handleClose} src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMC43MDY5NTYgMTMuNDM1QzEuMDk3NDggMTMuODI1NSAxLjczMDY1IDEzLjgyNTUgMi4xMjExNyAxMy40MzVMNy4wNzA5OCA4LjQ4NTE4TDEyLjAyMDggMTMuNDM1QzEyLjQxMTMgMTMuODI1NSAxMy4wNDQ1IDEzLjgyNTUgMTMuNDM1IDEzLjQzNUMxMy44MjU2IDEzLjA0NDUgMTMuODI1NiAxMi40MTEzIDEzLjQzNSAxMi4wMjA4TDguNDg1MiA3LjA3MDk3TDEzLjQzNDkgMi4xMjEyOUMxMy44MjU0IDEuNzMwNzcgMTMuODI1NCAxLjA5NzYgMTMuNDM0OSAwLjcwNzA3OEMxMy4wNDQ0IDAuMzE2NTUzIDEyLjQxMTIgMC4zMTY1NTQgMTIuMDIwNyAwLjcwNzA3OEw3LjA3MDk4IDUuNjU2NzZMMi4xMjEzMiAwLjcwNzA5NEMxLjczMDggMC4zMTY1NyAxLjA5NzYzIDAuMzE2NTcgMC43MDcxMDcgMC43MDcwOTRDMC4zMTY1ODIgMS4wOTc2MiAwLjMxNjU4MyAxLjczMDc4IDAuNzA3MTA3IDIuMTIxMzFMNS42NTY3NyA3LjA3MDk3TDAuNzA2OTU2IDEyLjAyMDhDMC4zMTY0MzEgMTIuNDExMyAwLjMxNjQzMSAxMy4wNDQ1IDAuNzA2OTU2IDEzLjQzNVoiIGZpbGw9IiMyOTJBMzIiLz4KPC9zdmc+Cg==" />
                    </Header>
                    <Comment>
                        <Textarea maxlength="10000" placeholder="이 작품에 대한 생각을 자유롭게 표현해주세요."></Textarea>
                        <Comment2></Comment2>
                    </Comment>
                    
                    <div style={{width:"100%" ,display:"flex", justifyContent:"flex-end"}}>
                    <SaveButton >저장</SaveButton>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

const ConetentActionComment = styled.button`
@media only screen and (min-width: 1023px) {
    flex-direction: row;
    font-size: 14px;
    line-height: 14px;
    width: auto;
    height: unset;
    }  
@media only screen and (min-width: 719px) {
    min-width: 55px;
    }  
    background: none;
    padding: 0;
    border: none;
    cursor: pointer;
    -webkit-box-align: center;
    align-items: center;
    text-align: center;
    color: #292a32;
    display: flex;
`

const Header = styled.div`
    position: relative;
    height: 33px;
    margin-bottom: 15px;
    line-height: 22px;
    width: 100%;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    box-sizing: border-box;
    text-align: left;
`
const Title = styled.div`
    bottom: 0px;
    color: rgb(41, 42, 50);
    font-size: 17px;
    letter-spacing: -0.5px;
    line-height: 27px;
    text-align: left;    
    display: inline-block;
    right: 0px;
    left: 0px;
    z-index: 1;
    margin: 0px;
`
const HeaderButton = styled.img`
position: absolute;
right: 0px;
background-color: rgb(238, 239, 243);
width: 22px;
height: 22px;
border-radius: 50%;
cursor: pointer;
font-size: 100%;
`
const Comment = styled.div`
box-sizing: content-box;
height: 100%;
text-align: left;
position: relative;
z-index: 1;
box-sizing: border-box;
padding: 0px;
`
const Textarea = styled.textarea`
font-weight: 600;
font-size: 14px;
letter-spacing: -0.8px;
line-height: 21px;
width: 100%;
min-height: 360px;
border: 0px;
outline: none;
margin: 1px 0px;
resize: none;
overflow: auto;
`
const Comment2 = styled.div`
font-size: 17px;
font-weight: 400;
letter-spacing: -0.7px;
position: absolute;
top: 0px;
right: 0px;
left: 0px;
z-index: -1;
line-height: 21px;
white-space: pre-line;
min-height: 292px;
padding: 30px 0px;
opacity: 0;
`

const SaveButton = styled.button`
background: none rgb(255, 47, 110);
border: none;
color: rgb(255, 255, 255);
font-size: 15px;
letter-spacing: -0.3px;
height: 38px;
padding: 0px 35px;
border-radius: 7px;
// opacity: 0.5;
// cursor: not-allowed;
cursor: pointer
`
export default CommentModal