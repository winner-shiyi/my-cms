<template>
  <div>
    <div class="cms-edit-body">
      <div class="edit-box">
        <div class="comps-box">
          <section class="comps-section">
            <h2 class="title">基础组件库</h2>
            <div class="grid">
              <ul>
                <li class="grid-item">
                  <div class="icon-box">
                    <i class="icon-cms-search"></i>
                  </div>
                  <span class="name">文本</span>
                </li>
                <li class="grid-item">
                  <div class="icon-box">
                    <i class="icon-cms-banner"></i>
                  </div>
                  <span class="name">文本</span>
                </li>
                <li class="grid-item">
                  <div class="icon-box">
                    <i class="icon-cms-type"></i>
                  </div>
                  <span class="name">文本</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
        <div class="mobile-box">
          <div class="mobile-content">
            <div class="header">
              <span class="name">魏娜项目<i class="el-icon-edit"></i></span>
            </div>
          </div>
        </div>
        <div class="config-box">
        配置
        </div>
      </div>
    </div>
    <div class="cms-edit-footer">
      <el-button type="primary" >保存</el-button>
      <el-button>取消</el-button>
    </div>
  </div>
</template>

<style lang="stylus">
  .cms-eidt-header{
    background-color #fff
    // line-height 20px;
    // padding 15px 20px;
    margin-bottom 20px
    display flex
    align-items center
    height 30px
    .item{
      flex 1
    }
  }
  .cms-edit-body{
    position relative
    overflow-y hidden
    .edit-box{
      display flex
    }
    .comps-box{
      flex 0 0 220px
      margin 0 20px 0 0
      height calc(100vh - 151px - 60px)
      overflow-y scroll
      background #fff
      &::-webkit-scrollbar{
        display none
      }
      .comps-section{
        padding 0 20px 20px
      }
      .title{
        font-size 16px
        height 40px
        line-height 40px
        border-bottom 1px solid #e5e8ed
      }
      .grid-item{
        display inline-block
        margin 10px 12px
        cursor move
        text-align center
      }
      .grid{
        padding-top 10px
      }
      .icon-box{
        width 60px
        height 60px
        line-height: 60px;
        border-radius: 2px;
        background-color: #fff;
        border: solid 1px #dadee2;
        color: #dadee2;
        font-size: 28px;
        text-align: center;
      }
    }
    .mobile-box{
      flex 1
      min-width 360px
      margin 0 20px 0 0
      height calc(100vh - 151px - 60px)
      overflow hidden
      overflow-y scroll
      background #ecedf1
      &::-webkit-scrollbar{
        display none
      }
      .header{
        background url('../../assets/header.png') top no-repeat
        background-size 100%
        height 58px
        color #fff
        text-align center
        font-size 16px
        cursor pointer
      }
      .name{
        display inline-block
        width 200px
        padding-top 30px
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
      }
      .el-icon-edit{
        margin-left 3px
        color #f1f98c
        vertical-align middle
      }
    }
    .mobile-content{
      margin 0 auto
      width 360px
      height 100%
      background #fff
    }
    .config-box{
      flex 0 0 400px
      height calc(100vh - 151px - 60px)
      background #fff
    }
  }
  .cms-edit-footer{
      display flex
      align-items center
      justify-content center
      margin-top 28px
      height 80px
      width calc(100vw - 200px)
      background-color #ffffff
      .el-button{
        width 180px
      }
    }
</style>
