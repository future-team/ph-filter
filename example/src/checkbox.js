import React, { Component ,PropTypes} from 'react';
import {render} from 'react/lib/ReactDOM';
import {FilterCheckbox, ItemGroup, Item} from '../../src/index.js';
import {Input} from 'phoenix-ui';

import shopList from './data/shop-list.js';

export default class FilterDemo extends Component {
    constructor(props,context){
        super(props,context);

        this.state = {
            chooseData: undefined // string
        }

        this.getData('./src/data/choose.json'); // 模拟请求
    }

    getData(fileName){ // 获取数据方法，ajax方法在下面定义了
        ajax(fileName).then((json)=>{
            
            this.setState({
                chooseData: json.choose
            });

        }, (error)=>{// 加载失败
            console.error("出错了", error)
        });
    }

    onSubmit(data){
        console.log(data);
    }

    render(){
        const filterData = shopList.msg.cityShopList;

        return(
            <FilterCheckbox choose={this.state.chooseData} groupIndex={0} buttonText='确定' buttonStyle="info" onSubmit={::this.onSubmit}>
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

let ajax = url => {
  return new Promise((resolve, reject)=>{
    let xhr = new XMLHttpRequest();
    xhr.open("get", url, true);
    xhr.responseType = "json";
    xhr.onreadystatechange = readyStateHandle;
    xhr.send();

    function readyStateHandle(){
      if(this.readyState !== 4) return;
      if(this.status === 200){
        setTimeout(()=>{ // 虚拟请求时间1s
            resolve(this.response);
        }, 1000);
      }else{
        setTimeout(()=>{  // 虚拟请求时间1s
            reject(new Error(this.statusText));
        }, 1000); 
      }
    }
  });
}


