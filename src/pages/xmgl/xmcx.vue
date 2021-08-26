<template>
  <div class="row q-pa-md">
    <!--面包屑导航-->
    <q-breadcrumbs style="width:100%; margin:10px 0;">
      <q-breadcrumbs-el label="首页" icon="home" to="/main" />
      <q-breadcrumbs-el label="项目列表" icon="dvr" to="/xmcx" />
      <q-breadcrumbs-el label="项目查询" />
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
      <q-select
        outlined
        dense
        v-model="filter.xmlx"
        :options="options1"
        bg-color="white"
        style="width:150px"
      />
      <q-select
        outlined
        dense
        v-model="filter.sglx"
        :options="options2"
        bg-color="white"
        style="width:150px"
      />
    </div>
    <q-space />
    <!--新建项目按钮-->
    <div class="text-right q-gutter-sm q-pt-sm">
      <q-btn outline text-color="blue-8" label="新建项目" class="apply-btn" to="/xjxm" />
    </div>

    <q-separator />

    <!--项目列表-->
    <q-tab-panels v-model="tab" animated style="width:100%;">
      <q-tab-panel name="dsp" style="padding:10px 0 0 0;">
        <div>
          <q-table
            :data="data"
            :columns="columnsy"
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
                <q-btn icon="preview" flat round dense color="blue" @click="popupDetail = true;findData(props.key)">
                  <q-tooltip>查看</q-tooltip>
                </q-btn>
                <q-btn icon="tune" flat round dense color="blue" @click="popupProgress = true;findData(props.key)">
                  <q-tooltip>查看进程</q-tooltip>
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
    <!--弹出查看-->
    <div v-if="data.length > 0" class="q-pa-md q-gutter-sm" style="width:100%">
      <q-dialog v-model="popupDetail" >
        <q-layout view="Lhh lpR fff" container class="bg-white" style="width:80%; max-width:80%;height:80%;">
          <q-header class="bg-primary">
            <q-toolbar>
              <q-toolbar-title>查看项目</q-toolbar-title>
              <q-btn flat v-close-popup round dense icon="close" />
            </q-toolbar>
          </q-header>
          <q-page-container>
            <div class="q-pa-lg">
              <div class="q-my-sm">
                <q-form>
                  <div class="col-sm-5 col-xs-12">
                    <div class="row items-center" style="margin-bottom:10px">
                      <div class="col col-md-2 text-right">
                        <div class="q-mr-sm" style="font-size:14px; color:#757575">项目名称：</div>
                      </div>
                      <div class="col col-md-4">
                        <div class="text-body1">{{data[key].xmmc}}</div>
                      </div>
                      <div class="col col-md-2 text-right">
                        <div class="q-mr-sm" style="font-size:14px; color:#757575">项目编号：</div>
                      </div>
                      <div class="col col-md-4">
                        <div class="text-body1">{{data[key].xmbh}}</div>
                      </div>
                    </div>
                    <div class="row items-center" style="margin-bottom:10px">
                      <div class="col col-md-2 text-right">
                        <div class="q-mr-sm" style="font-size:14px; color:#757575">项目类型：</div>
                      </div>
                      <div class="col col-md-4">
                        <div class="text-body1">{{data[key].xmlx}}</div>
                      </div>
                      <div class="col col-md-2 text-right">
                        <div class="q-mr-sm" style="font-size:14px; color:#757575">施工类型：</div>
                      </div>
                      <div class="col col-md-4">
                        <div class="text-body1">{{data[key].sglx}}</div>
                      </div>
                    </div>
                    <div class="row items-center" style="margin-bottom:10px">
                      <div class="col col-md-2 text-right">
                        <div class="q-mr-sm" style="font-size:14px; color:#757575">甲方名称：</div>
                      </div>
                      <div class="col col-md-4">
                        <div class="text-body1">{{data[key].jfmc}}</div>
                      </div>
                      <div class="col col-md-2 text-right">
                        <div class="q-mr-sm" style="font-size:14px; color:#757575">乙方名称：</div>
                      </div>
                      <div class="col col-md-4">
                        <div class="text-body1">{{data[key].yfmc}}</div>
                      </div>
                    </div>
                    <div class="row items-center" style="margin-bottom:10px">
                      <div class="col col-md-2 text-right">
                        <div class="q-mr-sm" style="font-size:14px; color:#757575">项目开始时间：</div>
                      </div>
                      <div class="col col-md-4">
                        <div class="text-body1">{{data[key].kssj}}</div>
                      </div>
                      <div class="col col-md-2 text-right">
                        <div class="q-mr-sm" style="font-size:14px; color:#757575">项目结束时间：</div>
                      </div>
                      <div class="col col-md-4">
                        <div class="text-body1">{{data[key].jssj}}</div>
                      </div>
                    </div>
                    <div class="row items-center" style="margin-bottom:10px">
                      <div class="col col-md-2 text-right">
                        <div class="q-mr-sm" style="font-size:14px; color:#757575">项目负责人：</div>
                      </div>
                      <div class="col col-md-4">
                        <div class="text-body1">{{data[key].xmfzr}}</div>
                      </div>
                      <div class="col col-md-2 text-right">
                        <div class="q-mr-sm" style="font-size:14px; color:#757575">项目金额(元)：</div>
                      </div>
                      <div class="col col-md-4">
                        <div class="text-body1">{{data[key].xmje}}</div>
                      </div>
                    </div>
                    <div class="row items-center" style="margin-bottom:10px">
                      <div class="col col-md-2 text-right">
                        <div class="q-mr-sm" style="font-size:14px; color:#757575">选择关联：</div>
                      </div>
                      <div class="col col-md-10">
                        <div class="text-body1">{{data[key].xzgl}}</div>
                      </div>
                    </div>
                    <div class="row items-center" style="margin-bottom:10px">
                      <div class="col col-md-12">
                        <!--<div class="text-body1" :v-html="data[key].xmjj"></div>-->
                        <q-card flat bordered>
                          <q-card-section v-html="data[key].xmjj" />
                        </q-card>
                      </div>
                    </div>
                    <div class="row items-center">
                      <div class="col col-md-1２">
                        <div class="q-pa-md" style="padding:20px 0 0 0">
                          <div class="q-gutter-md" style="max-width: 50%;">

                          </div>
                        </div>
                        <!-- 附件列表start -->
                        <q-tab-panels v-model="tab" animated style="width:100%;">
                          <q-tab-panel name="dsp" style="padding:0px">
                            <div>
                              <q-table
                                :data="data[key].fjlb"
                                :columns="fjColumn"
                                row-key="name"
                                flat
                                square
                                class="my-sticky-header-table tabletop"
                                style="height:auto;"
                              >
                              </q-table>
                            </div>
                          </q-tab-panel>

                        </q-tab-panels>
                        <!--合同列表-->
                        <q-tab-panels v-model="tab" animated style="width:100%;">
                          <q-tab-panel name="dsp" style="padding:0px">
                            <div>
                              <q-table
                                :data="data[key].htlb"
                                :columns="htColumn"
                                row-key="name"
                                flat
                                square
                                class="my-sticky-header-table tabletop"
                                style="height:auto;"
                              >
                              </q-table>
                            </div>
                          </q-tab-panel>

                        </q-tab-panels>
                        <!--发票列表-->
                        <q-tab-panels v-model="tab" animated style="width:100%;">
                          <q-tab-panel name="dsp" style="padding:0px">
                            <div>
                              <q-table
                                :data="data[key].fplb"
                                :columns="fpColumn"
                                row-key="name"
                                flat
                                square
                                class="my-sticky-header-table tabletop"
                                style="height:auto;"
                              >
                              </q-table>
                            </div>
                          </q-tab-panel>

                        </q-tab-panels>
                        <!-- 附件列表 end-->
                      </div>
                    </div>
                  </div>
                  <div  class="col-sm-5 col-xs-12" style="text-align:center;">
                    <q-btn label="关闭" v-close-popup color="primary" />
                  </div>
                </q-form>
              </div>
            </div>
          </q-page-container>
        </q-layout>
      </q-dialog>
    </div>
    <!--弹出进程-->
    <div v-if="data.length > 0" class="q-pa-md q-gutter-sm" style="width:100%">
      <q-dialog v-model="popupProgress">
        <q-layout
          view="Lhh lpR fff"
          container
          class="bg-white"
          style="width:80%; max-width:80%;height:80%;"
        >
          <q-header class="bg-primary">
            <q-toolbar>
              <q-toolbar-title>项目分析</q-toolbar-title>
              <q-btn flat v-close-popup round dense icon="close" />
            </q-toolbar>
          </q-header>
          <q-page-container>
            <div class="q-pa-lg">
              <div class="q-my-sm">
                <q-form>
                  <div class="col-sm-5 col-xs-12">

                    <div class="row items-center" style="margin-bottom:10px">
                      <div class="col col-md-4 text-left">
                        <div class="q-mr-sm" style="font-size:17px; color:#757575">收款合计：</div>
                      </div>
                      <div class="col col-md-4 text-left">
                        <div class="q-mr-sm" style="font-size:17px; color:#757575">付款合计：</div>
                      </div>
                      <div class="col col-md-4 text-left">
                        <div class="q-mr-sm" style="font-size:17px; color:#757575">利润合计：</div>
                      </div>
                    </div>
                    <div class="row items-center" style="margin-bottom:10px">
                      <div class="col col-md-4 text-left">
                        <div class="text-h4" style="color:red">{{data[key].skhj}}</div>
                      </div>
                      <div class="col col-md-4 text-left">
                        <div class="text-h4"  style="color:green">{{data[key].fkhj}}</div>
                      </div>
                      <div class="col col-md-4 text-left">
                        <div class="text-h4" style="color:red">{{data[key].lrhj}}</div>
                      </div>
                    </div>
                    <div class="row items-center">
                      <div class="col col-md-12">
                        <div class="q-pa-md" style="padding:20px 0 0 0">
                          <div class="q-gutter-md" style="max-width: 50%;"></div>
                        </div>
                        <!--合同列表-->
                        <q-tab-panels v-model="tab" animated style="width:100%;">
                          <q-tab-panel name="dsp" style="padding:0px">
                            <div>
                              <q-table
                                :data="data[key].htlb"
                                :columns="jcColumn"
                                :row-key="row => row.htbh"
                                flat
                                square
                                class="my-sticky-header-table tabletop"
                                style="height:auto;"
                              >
                                <!-- 操作按钮注释start -->
                                <template #body-cell-opt="props">
                                  <td style="text-align: center;">
                                    <q-btn
                                      icon="preview"
                                      flat
                                      round
                                      dense
                                      color="blue"
                                      @click="htxx = true"
                                    >
                                      <q-tooltip>查看</q-tooltip>
                                    </q-btn>

                                  </td>
                                </template>
                                <!-- 操作按钮注释 end-->
                              </q-table>
                            </div>
                          </q-tab-panel>
                        </q-tab-panels>
                        <!-- 附件列表 end-->
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-5 col-xs-12" style="text-align:center;">
                    <q-btn label="关闭" v-close-popup color="primary" />
                  </div>
                </q-form>
              </div>
            </div>
          </q-page-container>
        </q-layout>
      </q-dialog>
    </div>

  </div>
</template>
<script>

import {getProjectList} from "../../network/data";

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
      columnsy: [
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
      ],
      loading:true,
      data:[],
      tab: "dsp",
      key: 0,

      //查看项目
      popupDetail: false,
      fjColumn: [
        {
          name: "fjbh",
          required: true,
          label: "附件编号",
          align: "left",
          field: "fjbh",
          background: "bg-teal"
        },
        {
          name: "fjmc",
          required: true,
          label: "附件名称",
          align: "left",
          field: "fjmc"
        },
        {
          name: "fjlx",
          required: true,
          label: "附件类型",
          align: "left",
          field: "fjlx"
        },
        {
          name: "fjdx",
          required: true,
          label: "附件大小",
          align: "left",
          field: "fjdx"
        },
        {
          name: "fjscrq",
          required: true,
          label: "上传日期",
          align: "left",
          field: "fjscrq"
        }
      ],
      htColumn: [
        {
          name: "htbh",
          required: true,
          label: "合同编号",
          align: "left",
          field: "htbh",
          background: "bg-teal"
        },
        {
          name: "yf",
          required: true,
          label: "乙方单位",
          align: "left",
          field: "yf"
        }
        ,
        {
          name: "je",
          required: true,
          label: "合同金额(元)",
          align: "left",
          field: "je"
        }
        ,
        {
          name: "rq",
          required: true,
          label: "合同日期",
          align: "left",
          field: "rq"
        }
      ],
      fpColumn: [
        {
          name: "fjbh",
          required: true,
          label: "发票编号",
          align: "left",
          field: "fjbh",
          background: "bg-teal"
        },
        {
          name: "fjmc",
          required: true,
          label: "乙方单位",
          align: "left",
          field: "fjmc"
        }
        ,
        {
          name: "fjlx",
          required: true,
          label: "发票金额(元)",
          align: "left",
          field: "fjlx"
        }
        ,
        {
          name: "fjdx",
          required: true,
          label: "发票日期",
          align: "left",
          field: "fjdx"
        }
      ],

      //查看进程
      popupProgress: false,
      jcColumn: [
        {
          name: "htbh",
          required: true,
          label: "合同编号",
          align: "left",
          field: "htbh"
        },
        {
          name: "xmbh",
          required: true,
          label: "项目编号",
          align: "left",
          field: "xmbh"
        },
        {
          name: "jf",
          required: true,
          label: "甲方名称",
          align: "left",
          field: "jf"
        },
        {
          name: "rq",
          required: true,
          label: "日期",
          align: "left",
          field: "rq"
        },
        {
          name: "je",
          required: true,
          label: "金额(元)",
          align: "left",
          field: "je"
        },
        {
          name: "opt",
          label: "操作",
          align: "center",
          columns: true
        }
      ],

      //查看合同
      htxx: false,
    };
  },
  computed:{

  },
  methods: {
    //通过row-key寻找被点击行的数据
    findData(id){
      for(let key in this.data){
        if(this.data[key].id === id){
          this.key = key
        }
      }
    }
  },
  //监控筛选组件
  watch: {
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
    //开启加载动画
    this.loading = true
    //获取项目列表
    getProjectList().then(res => {
      this.data = res
      //结束加载动画
      this.loading = false
    })
  },
};
</script>
