import React, { Component ,PropTypes} from 'react';

export default class Item extends Component{
    static propTypes= {
        /**
         * item项的唯一标示，必填项
         * @property itemKey
         * @type String
         * */
        itemKey:React.PropTypes.string.isRequired
    };
    constructor(props,context){
        super(props,context);
        this.state={
            active:this.props.active?this.props.active:false
        }
    }
    clickCallback(){
        if(this.props.readOnly){
            return;
        }
        this.props.categoryChange&&this.props.categoryChange(this.props.panelIndex,{
            key:this.props.itemKey,
            value:this.props.children
        },this.props.refValue)
    }
    render(){
        return (
            <div className={'item'+(this.props.active?' on':'')}
                 onClick={::this.clickCallback}>
                {this.props.children}
            </div>
        )
    }
}