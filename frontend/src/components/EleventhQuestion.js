import React from 'react';
import {Link} from "react-router-dom"
import {Radio} from 'antd';
class EleventhQuestion extends React.Component{
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
                <h1>평소 영화, 드라마, 책의 내용에 대해 당신의 반응은 어떤가요?</h1>
                <Radio.Group onChange={this.onChangeAns} value={this.state.answer}>
                   <Radio value={1}>주인공이나 특정인물에 감정이입을 많이 하는 편이다.</Radio>
                   <Radio value={2}></Radio>
                   <Radio value={3}></Radio>
                   <Radio value={4}>주인공이나 특정인물의 감정에 공감은 하지만 별개이며 허구의 이야기임을 확실히 자각하면서 본다</Radio>
                </Radio.Group>
                {
                this.props.thirdAns !== 0 && <Link to= '/'><button> 다음</button></Link>
                }

            </div>
        );

    }
}

export default EleventhQuestion;