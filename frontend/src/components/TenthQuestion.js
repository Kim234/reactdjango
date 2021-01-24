import React from 'react';
import {Link} from "react-router-dom"
import {Radio} from 'antd';
class TenthQuestion extends React.Component{
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
                <h1>영화가 어땠냐고 물어보는 친구한테 어떤 식으로 설명할 것인가요?</h1>
                <Radio.Group onChange={this.onChangeAns} value={this.state.answer}>
                   <Radio value={1}>내가 느낀 감정을 주 이야기로 말한다.</Radio>
                   <Radio value={2}></Radio>
                   <Radio value={3}></Radio>
                   <Radio value={4}>스토리를 설명한다.</Radio>
                </Radio.Group>
                {
                this.props.thirdAns !== 0 && <Link to= '/'><button> 다음</button></Link>
                }

            </div>
        );

    }
}

export default TenthQuestion;