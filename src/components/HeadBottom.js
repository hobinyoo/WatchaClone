import React from "react";
import styled from "styled-components";
import Creadit from "./Creadit";
import Sidebar from "./Sidebar";
import CommentBox from "./CommentBox";
import CommentMy from "./CommentMy";
import StarBar from "./StarBar";


const HeaderBottom = (props) => {
    const list = props
 
    return (
        <Bottom>
            <BottomInner>
                <BottomContent>
                    <CommentMy />
                    <BottomContentLeft>
                        <div style={{ padding: "8px 0px 0px" }}>
                            <div style={{ margin: "0px 20px" }}>
                                <BottomContentBasicInfo>
                                    기본정보
                                </BottomContentBasicInfo>
                            </div>
                            <div>
                                <div style={{ margin: "0px 20px" }}>
                                    <BottomContentSectionOneArticle>
                                        <BottomContentSectionOneArticleOne>
                                            {list.title}
                                            <br />
                                            <span>{list.year} · {list.country} · {list.genre}</span>
                                            <br />
                                            <span>{list.duration} · {list.age}세</span>
                                        </BottomContentSectionOneArticleOne>
                                        <BottomContentSectionOneArticleTwo>
                                            <BottomContentSectionOneArticleTwoDiv>
                                                {list.description}
                                            </BottomContentSectionOneArticleTwoDiv>
                                        </BottomContentSectionOneArticleTwo>
                                    </BottomContentSectionOneArticle>
                                </div>
                            </div>
                            <hr style={{ border: "0", borderBottom: "1px solid #f0f0f0", margin: "24px 20px 0 20px" }} />
                        </div>

                        <Creadit {...list} />
                        <StarBar {...list} />

                        <CommentBox />
                    </BottomContentLeft>
                </BottomContent>

                <BottomSide>
                    <BottomContentRight>
                        <Sidebar {...list} />
                    </BottomContentRight>
                </BottomSide>

            </BottomInner>
        </Bottom>
    )
}

const BottomContentBasicInfo = styled.div`
color: rgb(0, 0, 0);
font-size: 19px;
font-weight: 700;
letter-spacing: -0.7px;
line-height: 28px;
margin: 8px 0px;
margin-block-start: 0.83em;
margin-block-end: 0.83em;
margin-inline-start: 0px;
margin-inline-end: 0px;
`
const Bottom = styled.div`
padding: 28px 0px 48px;
overflow: hidden;
`
const BottomInner = styled.div`
max-width: 976px;
margin: 0px auto;
display: table;
`
const BottomContent = styled.div`
width: 640px;
padding: 0px 8px;
display: table-cell
`
const BottomContentLeft = styled.div`
border-right: 1px solid;
border-left: 1px solid;
border-top: 1px solid;
border-bottom: 1px solid;
border-top-left-radius: 6px;
border-top-right-radius: 6px;
border-bottom-left-radius: 6px;
border-bottom-right-radius: 6px;
background: rgb(255, 255, 255);
overflow: hidden;
border-color: rgb(227, 227, 227) !important;
`


const BottomContentSectionOneArticle = styled.div`
font-size: 15px;
font-weight: 400;
letter-spacing: -0.5px;
line-height: 20px;
color: rgb(74, 74, 74);

`
const BottomContentSectionOneArticleOne = styled.div`
color: rgb(74, 74, 74);
font-size: 15px;
font-weight: 400;
letter-spacing: -0.2px;
line-height: 24px;
margin: 8px 0px;

`
const BottomContentSectionOneArticleTwo = styled.div`
word-break: break-all;
max-height: 72px;
margin: 0px;
overflow: hidden;
font-size: 15px;
font-weight: 400;
letter-spacing: -0.5px;
line-height: 20px;
color: rgb(74, 74, 74);

`
const BottomContentSectionOneArticleTwoDiv = styled.div`
white-space: pre-wrap;
color: rgb(74, 74, 74);
font-size: 15px;
font-weight: 400;
letter-spacing: -0.2px;
line-height: 24px;
`


const BottomSide = styled.div`
@media only screen and (max-width: 1023px) {
    display:none
    }  
max-width: 350px;
padding: 0px 8px;
display: table-cell
`
const BottomContentRight = styled.div`
border-right: 1px solid;
border-left: 1px solid;
border-top: 1px solid;
border-bottom: 1px solid;
border-top-left-radius: 6px;
border-top-right-radius: 6px;
border-bottom-left-radius: 6px;
border-bottom-right-radius: 6px;
background: rgb(255, 255, 255);
overflow: hidden;
border-color: rgb(227, 227, 227) !important;
`


export default HeaderBottom