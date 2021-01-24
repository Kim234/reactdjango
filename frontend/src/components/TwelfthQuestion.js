import React from 'react';
import {Link} from "react-router-dom"
import {Radio} from 'antd';
class TwelfthQuestion extends React.Component{
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
                <h1>복잡하고 다양한 해석이 존재하는 영화를 보고나서 당신은 어떤 생각을하나요?</h1>
                <Radio.Group onChange={this.onChangeAns} value={this.state.answer}>
                   <Radio value={1}>영화는 머리 식힐려고 보는 것이기때문에 재밌게 보지 못했다.</Radio>
                   <Radio value={2}></Radio>
                   <Radio value={3}></Radio>
                   <Radio value={4}>다양한 해석에 신기해하고 흥미롭게 본다.</Radio>
                </Radio.Group>
                {
                this.props.thirdAns !== 0 && <Link to= '/'><button> 다음</button></Link>
                }

            </div>
        );

    }
}

export default TwelfthQuestion;