import React from 'react';
import {Radio} from 'antd';
import {Link} from "react-router-dom"
import imgfile2 from '../images/harry.jpg'
import imgfile3 from '../images/true.jpg'
import imgfile4 from '../images/inception.jpg'
import imgfile5 from '../images/about.jpg'
import imgfile6 from '../images/grown.jpg'

class FirstQuestion extends React.Component {
    constructor(props){
        super(props);
        this.onChangeAns = this.onChangeAns.bind(this);
        this.state ={
            answer : 0
        }
    }

    onChangeAns = (e)=>{
        this.setState({answer:e.target.value})
        console.log("Answer : ",this.state.answer);
        this.props.onChange(e.target.value,1);
    }

    render(){
        return(
            <div class="imgtext">
                
                <img class="harry" src={imgfile2} alt=""></img>
                <img class="true" src={imgfile3} alt=""></img>
                <img class="inception" src={imgfile4} alt=""></img>
                <img class="about" src={imgfile5} alt=""></img>
                <img class="grown" src={imgfile6} alt=""></img>
                <div className="question">
                    <h1>당신의 현재 기분은 어떤가요?</h1>
                    <Radio.Group onChange={this.onChangeAns} value={this.state.answer}>
                    <Radio value={1} required>기쁨</Radio>
                    <Radio value={2}>그냥</Radio>
                    <Radio value={3}>슬픔</Radio>
                    </Radio.Group>
                    <Link to= '/SecondQuestion'><button> 다음</button></Link>
                    

                </div>
            </div>
        );

    }
}
export default FirstQuestion