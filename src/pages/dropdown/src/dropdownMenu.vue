<template>
    <div>
        <!--<span @click="show">下拉菜单</span>-->
        <div class="download-text"  @click="show">{{text}}</div>
        <dropdown-menu-item v-show="isShow">
            <template>
                <div>
                    <ul>
                        <li class="li" :class="{'on':indexs===index}" v-for="(item,index) in list" @click="change(index,item)">{{item}}</li>
                        <!--<li class="li">1</li>
                        <li class="li">2</li>
                        <li class="li">3</li>
                        <li class="li">4</li>
                        <li class="li">5</li>-->
                    </ul>
                </div>
            </template>
        </dropdown-menu-item>
    </div>
</template>
<script>
import DropdownMenuItem from './dropdownMenuItem'
export default {
    props:{
        datas: {
            type: Array,
            default: ''
        }
    },
    data(){
        return{
            isShow: false,
            list:[1,2,3,4,5],
            indexs:'000',
            text:''
        }
    },
    components:{
        DropdownMenuItem
    },
    methods:{
        mounted:function(){
          console.log(this.indexs)
        },
        show(){
            // if(!this.isShow){
            //     this.isShow = true
            // }else{
            //     this.isShow = false
            // }
            console.log(this.indexs)
            this.isShow=!this.isShow
        },
        change(index,item){
            console.log(index)
            this.indexs=index;
            this.text=item;
            this.isShow=false
        }
    //     change(index){
    //     let arrIndex = this.indexList.indexOf(index);
    //     console.log(arrIndex)
    //     if (arrIndex > -1){
    //       this.indexList.splice(arrIndex,1)
    //     }else{
    //       this.indexList.push(index)
    //     }
    //     console.log(this.indexList)
    //   }
    }
}
</script>
<style scoped>
   .download-text{
       width:150px;
       height:30px;
       line-height:30px;
       border:1px solid #f1f1f1;
       padding:0 5px;
       box-sizing:border-box;
   }
   ul{
       border:1px solid #f5f5f5;
   }
   .li{
       width:150px;
       line-height:30px;
       border-bottom:1px solid #f5f5f5;
       padding:0 5px;
       box-sizing:border-box;
   }
   .on{
       background:#C9E3FD;
   }
</style>
