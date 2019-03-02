<template>
    <div>
      <RegularNav />
      <!-- <div class="container">
        <form class="search">
          <el-input
            placeholder="请输入内容"
            prefix-icon="el-icon-search">
          </el-input>
          <button type="submit" hidden ></button>
        </form>
      </div> -->
      <div class="container">
        <div class="filter">
          <div class="table">
            <el-row>
              <el-col :span="3" class="type">品牌</el-col>
              <el-col :span="21 ">
                <div class="option">三只松鼠</div>
                <div class="option">三只松鼠</div>
                <div class="option">三只松鼠</div>
                <div class="option">三只松鼠</div>
                <div class="option">三只松鼠</div>
                <div class="option">稻花香</div>
                <div class="option">周黑鸭</div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="3" class="type">分类</el-col>
              <el-col :span="21">
                <div class="option">糕点</div>
                <div class="option">三只松鼠</div>
                <div class="option">三只松鼠</div>
                <div class="option">三只松鼠</div>
                <div class="option">三只松鼠</div>
                <div class="option">三只松鼠</div>
                <div class="option">三只松鼠</div>
              </el-col>
            </el-row>
          </div>
          <div class="bar">
            <div class="group">
              <el-button-group>
                <el-button size="mini">综合</el-button>
                <el-button size="mini">销量</el-button>
                <el-button size="mini">价格</el-button>
                <el-button size="mini">新品</el-button>
              </el-button-group>
            </div>
            <div class="group" id="price-filter">
              <el-col :span="12">
                <el-input
                  size="mini"
                  placeholder="最低价格">
                </el-input>
              </el-col>
              <el-col :span="12">
                <el-input
                  size="mini"
                  placeholder="最高价格">
                </el-input>
              </el-col>
            </div>
            <div class="group">
              <el-checkbox-group>
                <el-checkbox class="mini" label="包邮"></el-checkbox>
                <el-checkbox class="mini" label="货到付款"></el-checkbox>
                <el-checkbox class="mini" label="折扣"></el-checkbox>
              </el-checkbox-group>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="result">
          <el-row :gutter="10" class="card-list vartical-gutter">
            <el-col :span="6">
              <el-card :body-style="{ padding: '0px' }">
                <img src="https://dummyimage.com/500x500/000/fff" class="image">
                <div style="padding: 14px;">
                  <span>好吃的汉堡</span>
                  <div class="bottom clearfix">
                    <!-- <time class="time">{{ currentDate }}</time> -->
                    <el-button type="text" class="button">操作按钮</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card :body-style="{ padding: '0px' }">
                <img src="https://dummyimage.com/500x500/000/fff" class="image">
                <div style="padding: 14px;">
                  <span>好吃的汉堡</span>
                  <div class="bottom clearfix">
                    <!-- <time class="time">{{ currentDate }}</time> -->
                    <el-button type="text" class="button">操作按钮</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card :body-style="{ padding: '0px' }">
                <img src="https://dummyimage.com/500x500/000/fff" class="image">
                <div style="padding: 14px;">
                  <span>好吃的汉堡</span>
                  <div class="bottom clearfix">
                    <!-- <time class="time">{{ currentDate }}</time> -->
                    <el-button type="text" class="button">操作按钮</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card :body-style="{ padding: '0px' }">
                <img src="https://dummyimage.com/500x500/000/fff" class="image">
                <div style="padding: 14px;">
                  <span>好吃的汉堡</span>
                  <div class="bottom clearfix">
                    <!-- <time class="time">{{ currentDate }}</time> -->
                    <el-button type="text" class="button">操作按钮</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
          <el-pagination
            class="text-center"
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>
        </div>
      </div>
    </div>
</template>

<script>
  import RegularNav from '../components/RegularNav';
  export default {
    name: 'Search',
    components: {
      RegularNav
    }
}
</script>

<style scoped>
  .search {
    margin-top: 1em;
    margin-bottom: 1em;
  }

  .filter {
    color: #666;
  }

  .filter > * {
    margin-bottom: .5em;
  }

  .filter .table > * {
    border: 1px solid rgba(0, 0, 0, .1);
    border-bottom-width: 0;
  }

  .filter .table > *:last-child {
    border-bottom-width: 1px;
  }

  .filter .type {
    font-size: 90%;
    opacity: .8;
  }

  .filter .type,
  .filter .option {
    display: inline-block;
    cursor: pointer;
    padding: 1em;
  }


  .bar > * {
    display: inline-block;
    vertical-align: middle;
  }

  .bar .group {
    margin-right: .5em;
  }

  #price-filter {
    max-width: 14em;
  }

  #price-filter input {
    width: 100%;
  }


  .el-checkbox {
    margin-right: .5em;
  }

  .group .mini >>> .el-checkbox__label {
    font-size: 11px;
  }
</style>