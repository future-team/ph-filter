import React, { Component ,PropTypes} from 'react';
export default class FilterContainer extends Component{
    initCat(){
        let catList=React.Children.map(this.props.children,function(panel,index){
            //如果panel设置了selected属性的话直接读取selected属性，
            //如果panel没有设置selected属性，则读取default用来展示在cat列表中
            let cat=panel.props.selected?panel.props.selected:{
                key:'',
                value:panel.props.default?panel.props.default:''
            };
            return cat;
        });
        return catList;
    }
    constructor(props,context){
        super(props,context);
        this.state={
            catList:this.initCat(),
            activeCat:-1
        };
    }
    static propTypes= {
        /**
         * 用户选择了某一项item之后触发的回调函数
         * @property onChange
         * @type Function
         * */
        onChange:PropTypes.func
    };
    categoryChange(index,category){
        var catList=this.state.catList.slice();
        catList[index]=category;
        this.setState({
            catList,
            activeCat:-1
        });
        this.props.onChange&&this.props.onChange(category.key);
    }
    activeCat(index){
        //展开某一个cat
        if(index==this.state.activeCat){
            index=-1;
        }
        this.setState({
            activeCat:index
        });
    }
    renderPanelList(){
        let self=this,
            {catList,activeCat}=self.state;
        return React.Children.map(this.props.children,function(panel,index){
            let show=(index==activeCat);
            if(self.props.hideCat&&index==0){
                show=true;
            }
            return  React.cloneElement(panel,{
                categoryChange:self.categoryChange.bind(self),
                selected:catList[index],
                panelIndex:index,
                show:show
            })
        });
    }
    renderCatList(){
        if(this.props.hideCat){
            return null;
        }
        let self=this,
            {catList,activeCat}=self.state,
            width='100%';
        if(catList.length){
            width= (100/catList.length).toFixed(2)+'%';
        }
        return catList.map(function(catCfg,index){
            return (
                <a href="javascript:void(0)"
                   className={"item"+(index==activeCat?' active':'')}
                   style={{width}}
                   key={'cat-'+index}
                   onClick={function(){
                        self.activeCat(index);
                   }}>
                    {catList[index].value}
                </a>
            )
        });
    }
    render(){
        let panelList= this.renderPanelList(),
            catList=this.renderCatList();

        return(<div className='filter-container'>
            <div className="cat" >
                {catList}
            </div>
            {panelList}
        </div>)
    }
}
//如果设置了hideCat并且只有一个panel，则该panel一直会显示