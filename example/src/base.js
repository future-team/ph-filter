import React, { Component ,PropTypes} from 'react';
import {render} from 'react/lib/ReactDOM';
import {FilterContainer,PanelSimple,Panel,Item,ItemGroup} from '../../src/index.js'
export default class FilterDemo extends Component {
    constructor(props,context){
        super(props,context);
        this.state={
            panel1:[]
        };
    }
    componentDidMount(){
        var self=this;
        setTimeout(function(){
            self.setState({
                panel1:[{
                    key:'sndq',
                    value:'上南地区'
                },{
                    key:'ljz',
                    value:'陆家嘴'
                },{
                    key:'bbb',
                    value:'八佰伴'
                },{
                    key:'pdxq',
                    value:'浦东新区'
                },]
            });
        },0);
    }
    render(){
        return(
            <FilterContainer onChange={function(key){
                console.log(key);
            }}>
                <PanelSimple readOnly className='panel1' selected={{key:'ljz',value:'陆家嘴'}}>
                    {this.state.panel1.map(function(item){return <Item key={item.key} itemKey={item.key}>{item.value}</Item>})}
                </PanelSimple>
                <Panel readOnly selected={{key:'s_flower',value:'花店'}}>
                    <ItemGroup label={<span style={{color:'red'}}>美食</span>}>
                        <Item itemKey='f_all'>
                            <span style={{color:'red'}}>全部美食</span>
                        </Item>
                        <Item itemKey='f_bbc'>
                            本帮江浙菜
                        </Item>
                        <Item itemKey='f_jp'>
                            日本菜
                        </Item>
                        <Item itemKey='f_cf'>
                            咖啡厅
                        </Item>
                        <Item itemKey='f_all1'>
                            全部美食1
                        </Item>
                        <Item itemKey='f_bbc1'>
                            本帮江浙菜1
                        </Item>
                        <Item itemKey='f_jp1'>
                            日本菜1
                        </Item>
                        <Item itemKey='f_cf1'>
                            咖啡厅1
                        </Item>
                        <Item itemKey='f_all2'>
                            全部美食2
                        </Item>
                        <Item itemKey='f_bbc2'>
                            本帮江浙菜2
                        </Item>
                        <Item itemKey='f_jp2'>
                            日本菜2
                        </Item>
                        <Item itemKey='f_cf2'>
                            咖啡厅2
                        </Item>
                    </ItemGroup>
                    <ItemGroup  label='电影'>
                        <Item itemKey='m_all'>
                            全部电影
                        </Item>
                        <Item itemKey='m_p'>
                            私人影院
                        </Item>
                        <Item itemKey='m_c'>
                            电影院
                        </Item>
                    </ItemGroup>
                    <ItemGroup label='购物'>
                        <Item itemKey='s_all'>
                            全部购物
                        </Item>
                        <Item itemKey='s_shoes'>
                            服饰鞋包
                        </Item>
                        <Item itemKey='s_medicine'>
                            药店
                        </Item>
                        <Item itemKey='s_glasses'>
                            眼镜店
                        </Item>
                        <Item itemKey='s_flower'>
                            花店
                        </Item>
                    </ItemGroup>
                </Panel>
                <PanelSimple default='筛选'>
                    <Item itemKey="sjgy">世纪公园</Item>
                    <Item itemKey="ljz">陆家嘴</Item>
                    <Item itemKey="bbb">八佰伴</Item>
                    <Item itemKey="pdxq">浦东新区</Item>
                    <Item itemKey="sndq">上南地区</Item>
                    <Item itemKey="sndq">上南地区</Item>
                    <Item itemKey="sndq">上南地区</Item>
                    <Item itemKey="sndq">上南地区</Item>
                    <Item itemKey="sndq">上南地区</Item>
                    <Item itemKey="sndq">上南地区</Item>
                    <Item itemKey="sndq">上南地区</Item>
                </PanelSimple>
            </FilterContainer>
        )
    }
}


