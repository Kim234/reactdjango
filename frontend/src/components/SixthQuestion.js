import React from 'react';
import {Link} from "react-router-dom"
import {Radio} from 'antd';
class SixthQuestion extends React.Component{
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
                <h1>일이 많았던 오늘, 하루를 영화를 보면서 마무리하고싶은데 어떻게 영화를 볼까요?</h1>
                <Radio.Group onChange={this.onChangeAns} value={this.state.answer}>
                   <Radio value={1}>영화관에서 본다.</Radio>
                   <Radio value={2}></Radio>
                   <Radio value={3}></Radio>
                   <Radio value={4}>집에서 본다.</Radio>
                </Radio.Group>
                {
                this.props.thirdAns !== 0 && <Link to= '/'><button> 다음</button></Link>
                }

            </div>
        );

    }
}

export default SixthQuestion;