<template>
  <div class="row q-pa-md">
    <!--面包屑导航-->
    <q-breadcrumbs style="width:100%; margin:10px 0;">
      <q-breadcrumbs-el label="首页" icon="home" to="/main"/>
      <q-breadcrumbs-el label="项目列表" icon="dvr" to="/xgxm"/>
      <q-breadcrumbs-el label="修改项目" />
    </q-breadcrumbs>
    <!--搜索栏-->
    <div class="q-py-sm" style="width:400px">
      <q-input outlined dense bg-color="white" color="grey-9" v-model="filter.searchKey" placeholder="请输入您要搜索的关键字">
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>
     <!--筛选条件-->
    <div class="q-px-md q-py-sm flex warp q-gutter-xs">
      <q-select outlined dense v-model="filter.xmlx" :options="options1" bg-color="white" style="width:150px"/>
      <q-select outlined dense v-model="filter.sglx" :options="options2" bg-color="white" style="width:150px"/>
    </div>
    <q-space />
    <!--新建项目按钮-->
    <div class="text-right q-gutter-sm q-pt-sm">
      <q-btn outline text-color="blue-8" label="新建项目" class="apply-btn" to="/xjxm"/>
    </div>

    <q-separator />

    <!--tab 切换 start -->
    <q-tab-panels v-model="tab" animated style="width:100%;">
      <q-tab-panel name="dsp" style="padding:10px 0 0 0;">
        <div>
          <q-table
            :data="data"
            :columns="columns"
            :row-key="row => row.id"
            :loading="loading"
            flat
            square
            class="my-sticky-header-table tabletop"
            style="height:auto;"
          >

            <!-- 操作按钮注释start -->
            <template #body-cell-opt="props">
              <td style="text-align: center;">
                <q-btn icon="create" flat round dense color="blue" :to="{path:'/xgxm_xg', query:{id:props.key}}">
                  <q-tooltip>修改</q-tooltip>
                </q-btn>
                <q-btn icon="delete_forever" flat round dense color="blue" @click="deleteData(props.key)">
                  <q-tooltip>删除</q-tooltip>
                </q-btn>
              </td>
            </template>
            <!-- 操作按钮注释 end-->


          </q-table>

        </div>
      </q-tab-panel>
      <q-tab-panel name="sptg">
        <div class="text-h6">Alarms</div>Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>
      <q-tab-panel name="bh">
        <div class="text-h6">Movies</div>Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>
      <q-tab-panel name="gq">
        <div class="text-h6">Movies</div>Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>
    </q-tab-panels>
    <!--tab 切换 end -->
  </div>
</template>
<script>
import {getProjectList, deleteProjectList} from "../../network/data";
export default {
  name: "",
  data() {
    return {
      //筛选项
      options1: ["全部","维修项目", "新建项目"], //筛选条件
      options2: ["全部","机械", "人工", "材料"], //筛选条件
      filter:{
        //搜索与筛选参数
        searchKey:"", //搜索栏关键字
        xmlx: "项目类型", //筛选结果
        sglx: "施工类型", //筛选结果

      },

      //项目列表
      columns: [
        {
          name: "xmbh",
          required: true,
          label: "项目编号",
          align: "left",
          field: "xmbh",
          background: "bg-teal"
        },
        {
          name: "xmmc",
          required: true,
          label: "项目名称",
          align: "left",
          field: "xmmc"
        },
        {
          name: "xmlx",
          required: true,
          label: "项目类型",
          align: "left",
          field: "xmlx",
          sortable: true
        },
        {
          name: "sglx",
          required: true,
          label: "施工类型",
          align: "left",
          field: "sglx",
          sortable: true
        },
        {
          name: "jfmc",
          required: true,
          label: "甲方名称",
          align: "left",
          field: "jfmc"
        },
        {
          name: "yfmc",
          required: true,
          label: "乙方名称",
          align: "left",
          field: "yfmc"
        },
        {
          name: "xmje",
          required: true,
          label: "项目金额(元)",
          align: "left",
          field: "xmje"
        },
        {
          name: "opt",
          label: "操作",
          align: "center",
          columns: true
        }
      ],//表格列名
      loading:true,
      data: [],//列表数据
      tab: "dsp",

      maximized: process.env.editMaximized, //编辑全屏
    };
  },
  methods: {
    //删除项目列表项
    deleteData(id){
      //开启加载动画
      this.loading = true
      //后端通信
      deleteProjectList(id)
      getProjectList().then(res => {this.data = res})
      console.log("重新通信");
      //关闭加载动画
      this.loading = false
    },
  },
  //监控筛选组件
  watch: {
    //监测filter
    filter:{
      handler(val){
        //开启加载动画
        this.loading = true
        let xmlx = val.xmlx==="项目类型"||val.xmlx==="全部"? null : val.xmlx
        let sglx = val.sglx==="施工类型"||val.sglx==="全部"? null : val.sglx

        if(xmlx !== null || sglx !==null || val.searchKey !== ""){
          console.log("重新通信");
          getProjectList({xmlx,sglx}).then(res => {
            if(val.searchKey === ""){
              this.data = res
            }
            else{
              let newList = [];
              for(let key in res){
                let item = res[key]
                if(item.xmmc.includes(val.searchKey) || item.xmlx.includes(val.searchKey) || item.sglx.includes(val.searchKey) || item.jfmc.includes(val.searchKey) || item.yfmc.includes(val.searchKey) || item.xmje.includes(val.searchKey)) {
                  newList.push(item)
                }
              }
              this.data = newList
            }
          })
        }
        else if(val.searchKey === ""){
          console.log("回到默认")
          getProjectList({xmlx,sglx}).then(res => {
            if (val.searchKey === "") {
              this.data = res
            }
          })
        }
        this.loading = false
      },
      deep:true
    },
  },
  //生命周期：挂载后
  mounted() {
    this.loading = true
    //获取项目列表
    getProjectList().then(res => {
      this.data = res
      this.loading = false
    })
  },
};
</script>
