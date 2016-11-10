import React, { Component ,PropTypes} from 'react';

export default class Item extends Component{
    constructor(props,context){
        super(props,context);
    }
    static propTypes= {
        /**
         * 当使用FilterPanel(支持二级选择)时，itemGroup的label属性被用来渲染一级选项，item自身用来渲染二级
         * @property label
         * @type 字符串或者标签
         * */
        label: React.PropTypes.oneOfType([React.PropTypes.string,React.PropTypes.element])
    };
    renderSubMenu(){
        let subContainer=this.props.subContainer;
    }
    render(){
        var self=this;
        return (
            <div className={'item'+(this.props.active?' on':'')}
                onClick={function(){
                if(self.props.readOnly){
                    return;
                }
                self.props.mainKeyChange(self.props.groupIndex)
                }}>
                {this.props.label}
            </div>
        )
    }
}