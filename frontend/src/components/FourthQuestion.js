import React from 'react';
import {Link} from "react-router-dom"
import {Radio} from 'antd';
class FourthQuestion extends React.Component{
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
                <h1>영화를 보고 난 후 주로 어떻게 행동하나요?</h1>
                <Radio.Group onChange={this.onChangeAns} value={this.state.answer}>
                   <Radio value={1}>영화의 내용이나 결말에 대해 생각하면서 곱씹어본다.</Radio>
                   <Radio value={2}></Radio>
                   <Radio value={3}></Radio>
                   <Radio value={4}>간단히 재밌었다, 재미없었다 정도만 생각하고 넘긴다.</Radio>
                </Radio.Group>
                {
                this.props.thirdAns !== 0 && <Link to= '/'><button> 다음</button></Link>
                }

            </div>
        );

    }
}

export default FourthQuestion;