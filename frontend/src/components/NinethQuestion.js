import React from 'react';
import {Link} from "react-router-dom"
import {Radio} from 'antd';
class NinethQuestion extends React.Component{
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
                <h1>둘 중 어떤 종류의 캐릭터를 더 좋아하시나요?</h1>
                <Radio.Group onChange={this.onChangeAns} value={this.state.answer}>
                   <Radio value={1}>무조건 만능, 제일 강한 캐릭터</Radio>
                   <Radio value={2}></Radio>
                   <Radio value={3}></Radio>
                   <Radio value={4}>갖은 고난을 겪고 힘겹게 극복하는 대기만성형 캐릭터</Radio>
                </Radio.Group>
                {
                this.props.thirdAns !== 0 && <Link to= '/'><button> 다음</button></Link>
                }

            </div>
        );

    }
}

export default NinethQuestion;