import React, { Component ,PropTypes} from 'react';
import {render} from 'react/lib/ReactDOM';
import {FilterCheckbox, ItemGroup, Item} from '../../src/index.js';
import {Input} from 'phoenix-ui';

import shopList from './data/shop-list.js';

export default class FilterDemo extends Component {
    constructor(props,context){
        super(props,context);
    }

    onSubmit(data){
        console.log(data);
    }

    render(){
        const chooseData = "3244945,13893492,5687880,18418332,6210703,24890244"; // string
        const filterData = shopList.msg.cityShopList;

        return(
            <FilterCheckbox choose={chooseData} groupIndex={0} buttonText='确定' buttonStyle="info" onSubmit={::this.onSubmit}>
                {
                    filterData.map((cityShopList,index)=>{
                        return (
                            <ItemGroup key={cityShopList.cityId} mainKey={cityShopList.cityId} label={cityShopList.cityName}>
                                {
                                    cityShopList.shopInfoDTOList.map((shopInfo)=>{
                                        return (
                                            <Item disabled={shopInfo.status==1} key={shopInfo.shopId} itemKey={shopInfo.shopId}>{shopInfo.shopName}</Item>
                                        );
                                    })
                                }
                            </ItemGroup>
                        );
                    })
                }
                
            </FilterCheckbox>
        )
    }
}


