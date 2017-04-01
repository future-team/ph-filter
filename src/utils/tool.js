let Tool = {
    transToArray: (val)=>{
        switch(typeof val){
            case 'string':
                let arr = [];
                arr = val.split(',');
                return arr;
                break;
            case 'number':
                return val.toString();
            default:
                return val;
        }
    }
}

export default Tool;