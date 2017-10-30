import React, { Component ,PropTypes} from 'react';
import classnames from 'classnames';
import {Input} from 'phoenix-ui';

export default class Item extends Component{
    static propTypes= {
        /**
         * item项的唯一标示，必填项
         * @property itemKey
         * @type String
         * */
        itemKey:PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        /**
         * 是否是选择全部的checkbox，可选all
         * @property type
         * @type String
         * @default 无
         * */
        type: PropTypes.string,
        /**
         * 状态
         * @property disabled
         * @type Boolean
         * @default false
         * */
        disabled: PropTypes.bool
    };

    static defaultProps = {
        disabled: false
    };

    constructor(props,context){
        super(props,context);
        
        this.state={
            active: this.props.active? this.props.active:false
        }
    }

    clickCallback(){
        if(this.props.readOnly || this.props.filterType){
            return;
        }
        this.props.categoryChange&&this.props.categoryChange(this.props.panelIndex,{
            key:this.props.itemKey,
            value:this.props.children
        },this.props.refValue)
    }

    onChange(e){
        let {mainKey, itemKey} = this.props;
        this.props.onItemChange(mainKey, itemKey, e);
    }

    renderChildren(){
        let {filterType, checked, disabled, children} = this.props;
        
        if(filterType){
            return <Input type="checkbox" label={children} disabled={disabled} checked={checked && !disabled} onChange={::this.onChange} />;
        }else{
            return children;
        }
    }

    render(){
        return (
            <div className={classnames('item'+(this.props.active?' on':''), this.props.disabled? 'ph-disabled':'')}
                    onClick={::this.clickCallback}>
                {this.renderChildren()}
            </div>
        )
    }
}