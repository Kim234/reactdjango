import "../pages/App.css";
import React from "react";
import imgfile0 from "../images/hear.jpg"
import imgfile1 from '../images/about.jpg'
import imgfile2 from '../images/love.jpg'
import imgfile3 from '../images/note.jpg'

class Result extends React.Component {
  render(){
    return(
    
        <div className="result">
          <div className="recommendG">
            <h3 style={{fontSize:"20px"}}>
              <strong>오늘은 로맨스 장르를 추천합니다.</strong>
            </h3>
           
            <img src={imgfile0} class="img_heart"></img>
           
          </div>

          <div className="recommendM">
            <h3 style={{fontSize:"20px"}}>
              <strong>이런 영화는 어떠세요?</strong>
            </h3>

            <div className="imgfile">
              <img src={imgfile1} class="img"></img><a style={{fontSize:"15px"}}>어바웃타임</a>
            </div>
            <div className="imgfile">
              <img src={imgfile2} class="img"></img><a style={{fontSize:"15px"}}>러브 액츄얼리</a>
            </div>

            <div className="imgfile">
              <img src={imgfile3} class="img"></img><a style={{fontSize:"15px"}}>노트북</a>
            </div>

          </div>

        </div>

    );
  }
}

export default Result;
