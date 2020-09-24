<template>
  <div id="app">
    <div class="sv-header"></div>
    <div class="sv-body">
      <div class="sv-left">
        <ul>
          <li>
            <router-link to="/">Button 按钮</router-link>
          </li>
          <li>
            <router-link to="/dialog">Dialog 对话框</router-link>
          </li>
          <li>
            <router-link to="/dropdown">downLoad 按钮</router-link>
          </li>
          <li>
            <router-link to="/">Button 按钮</router-link>
          </li>
          <li>
            <router-link to="/">Button 按钮</router-link>
          </li>
          <li>
            <router-link to="/">Button 按钮</router-link>
          </li>
         <li>
            <router-link to="/">Button 按钮</router-link>
          </li>
          <li>
            <router-link to="/">Button 按钮</router-link>
          </li>
          <li>
            <router-link to="/">Button 按钮</router-link>
          </li>
          <li>
            <router-link to="/">Button 按钮</router-link>
          </li>
          <li>
            <router-link to="/">Button 按钮</router-link>
          </li>
        </ul>
      </div>
      <div class="sv-right">
         <router-view/>
      </div>   
    </div>  
  </div>
</template>
<script>
export default {
  name: 'App',
  methods:{
    del(){
      console.log(12)
      this.$confirm("确认删除吗?",[
        {
          text:"取消",
          onPress: ()=>{
            console.log("取消按钮")
          }
        },
        {
          text:"确认",
          onPress: ()=>{
            console.log("确认按钮")
          }
        }
      ])
    }
  }
}
</script>
<style lang="less">
*{
  margin: 0;
  padding: 0;
}
#app{
  // background: grey;
  height: 100%;
  text-decoration: none;
  .sv-header{
    height: 200px;
    background: #99CCFF;
  }
  .sv-body{
    display: flex;
    .sv-left{
      width: 200px;
      height:calc(100vh - 200px);
      background: rgba(155, 208, 240, 1);
      ul{
        text-align: center;
        li{
          margin: 10px auto;
        }
      }
    }
    .sv-right{
      margin-left: 20px;
      margin-top: 20px;
    }
  }
  li{
    list-style-type:none;
  }
  
}
</style>