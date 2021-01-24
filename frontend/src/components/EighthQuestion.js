import React from 'react';
import {Link} from "react-router-dom"
import {Radio} from 'antd';
class EighthQuestion extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            answer: 0
        }
    }       
    onChangeAns = (e)=> {
        this.setState({answer : e.target.value});
        this.props.onChange(e.target.value,3);
        console.log('Third Answer', this.state.thirdAns);

    };
    render(){
        const thirdAns = this.state.thirdAns;
        return(
            <div className="question">
                <h1>청소년때 학교에서 해당 과목 관련 영화를 보여주면 당신은 어떻게 행동했나요?</h1>
                <Radio.Group onChange={this.onChangeAns} value={this.state.answer}>
                   <Radio value={1}>지루한 내용이더라도 흥미있게 보는 편이었다.</Radio>
                   <Radio value={2}></Radio>
                   <Radio value={3}></Radio>
                   <Radio value={4}>지루하면 보지 않고 바로 딴 짓을 하거나 잠을 잔다</Radio>
                </Radio.Group>
                {
                this.props.thirdAns !== 0 && <Link to= '/'><button> 다음</button></Link>
                }

            </div>
        );

    }
}

export default EighthQuestion;