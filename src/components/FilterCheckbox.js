import React, { Component,PropTypes } from 'react';
import {Button, Input} from 'phoenix-ui';

import FilterContainer from './FilterContainer.js';
import CheckboxPanel from "./FilterPanelCheckbox.js";

export default class FilterCheckbox extends Component{

    constructor(props,context){
        super(props,context);

        this.choose =  props.choose;
    }

    static propTypes= {
        groupIndex: PropTypes.number
    };

    static defaultProps = {
        groupIndex: 0,
        buttonText: '提交',
        buttonStyle: 'primary'
    };

    getChooseData(data){
        this.choose = data;
    }

    onSubmitHandle(e){
        e.preventDefault();
        if(this.props.onSubmit) this.props.onSubmit(this.choose);
    }
    
    render(){
        return (
            <div className="ph-checkbox-filter">
                <FilterContainer activeIndex={0} hideCat choose={this.choose} getChooseData={this.getChooseData.bind(this)}>
                    <CheckboxPanel groupIndex={this.props.groupIndex}>
                        {this.props.children}
                    </CheckboxPanel>
                </FilterContainer>
                <div className="ph-submit-field">
                    <Button block onClick={::this.onSubmitHandle}>{this.props.buttonText}</Button>
                </div>
            </div>
        );
    }
}
