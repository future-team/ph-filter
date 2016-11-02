# ph-filter

filter 使用方法
```jsx
            <FilterContainer onChange={function(key){
                console.log(key);
            }}>
                <Panel selected={{key:'s_flower',value:'花店'}}>
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
```
##  注意事项
	
- 	目前支持两种Panel，一级选择：PanelSimple  和  二级选择：Panel
-   Panel全部嵌套在FilterContainer里，有几个panel，cat栏目就会被几等分
-   当使用Panel时，即表明该Panel是个二级选择Panel，所有的二级分类都会被ItemGroup标签包裹，itemGroup用于切换二级分类列表
			
			
##  API
View [example](/example/src/index.js) to get more details

#### `<FilterContainer>` Props:
- onChange 用户切换分类的时候触发的回调函数，输入参数是分类的key .
- hideCat 当设置hideCat属性的时候，cat那一栏会隐藏，第一个panel会一直显示（适用于只有一个panel并且不需要cat的场景）

#### `<PanelSimple>`和 `<Panel>` Props:
- default 当用户没有选择任何分类的时候，cat栏目里显示的默认文案 .
- selected 用户选择的分类对象，必须包含key和value属性{key:'s_flower',value:'花店'}，用于高亮panel里对应的项.

#### `<Item>` Props:
- itemKey item的唯一标识，必填参数 .

#### `<ItemGroup>` Props:
- label 一级分类的显示文案，用于包裹二级分类列表，可以是string，也可以是react标签 .


### Contributing

- Fork the project
- Run the project in development view demo: `$ npm run demo`
- Make changes.
- Add appropriate tests
- `$ npm run test`
- If tests don't pass, make them pass.
- Update README with appropriate docs.
- Rnn build
- `$ npm run build`
- Commit and PR.


