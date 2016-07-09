import React, { Component ,PropTypes} from 'react';
import PanelBase from './FilterPanelBase.js';
export default class FilterPanelSimple extends PanelBase{
    constructor(props,context){
        super(props,context);
    }
    render(){
        var itemList=this.renderItemList(this.props.children);
        return(
            this.props.show?(
                <div className={(this.props.className?this.props.className+' ':'')+"selector simple-selector"} >
                    <div className="menu sub full" >
                        <div >
                            {itemList}
                        </div>
                    </div>
                </div>
            ): null

        )
    }
}