import "../pages/App.css";
import React from "react";
import imgfile0 from "../images/hear.jpg"
import imgfile1 from '../images/about.jpg'
import imgfile2 from '../images/love.jpg'
import imgfile3 from '../images/note.jpg'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

class Result extends React.Component {

  render(){
    const useStyles = makeStyles((theme) => ({
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
          margin: theme.spacing(1),
          width: theme.spacing(16),
          height: theme.spacing(16),
        },
      },
    }));

    const classes=useStyles();

    const imgStyle={
      float:left,
      width: 33,
      height: 282
  }
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

            <div className={classes.root} style={{imgStyle}}>
              <img src={imgfile1} class="img"></img><a href="https://movie.naver.com/movie/bi/mi/basic.nhn?code=92075" style={{fontSize:"15px",color:"black"}}><strong>어바웃타임</strong></a>
            </div>
            <div className="imgfile">
              <img src={imgfile2} class="img"></img><a href="https://movie.naver.com/movie/bi/mi/basic.nhn?code=92075" style={{fontSize:"15px", color:"black"}}><strong>러브 액츄얼리</strong></a>
            </div>

            <div className="imgfile">
              <img src={imgfile3} class="img"></img><a href="https://movie.naver.com/movie/bi/mi/basic.nhn?code=92075" style={{fontSize:"15px", color:"black"}}><strong>노트북</strong></a>
            </div>

          </div>

          <NavLink to ={{
                  pathname: "/Question"
              }}>
            <Button style={{width:"200px",marginTop:"50px"}} variant="outline-danger">다시 하기</Button>
          </NavLink> 

        </div>

    );
  }
}

export default Result;
