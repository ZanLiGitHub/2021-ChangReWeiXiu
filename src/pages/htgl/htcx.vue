<template>
  <div class="row q-pa-md">
    <q-breadcrumbs style="width:100%; margin:10px 0;">
      <q-breadcrumbs-el label="首页" icon="home" to="/main"/>
      <q-breadcrumbs-el label="合同列表" icon="content_paste" to="/xght"/>
      <q-breadcrumbs-el label="合同查询" />
    </q-breadcrumbs>
    <div class="q-py-sm" style="width:400px">
            <q-input outlined dense bg-color="white" color="grey-9" placeholder="请输入您要搜索的关键字">
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
     <!--筛选条件start-->
    <div class="q-px-md q-py-sm flex warp q-gutter-xs">
      <q-input style="margin-bottom:-20px;" outlined v-model="date" mask="date" :rules="['date']" dense>
                  <template v-slot:prepend>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy
                        ref="qDateProxy"
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-date v-model="date">
                          <div class="row items-center justify-end">
                            <q-btn v-close-popup label="Close" color="primary" flat />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
                <q-input style="margin-bottom:-20px;" outlined v-model="date" mask="date" :rules="['date']" dense>
                  <template v-slot:prepend>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy
                        ref="qDateProxy"
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-date v-model="date">
                          <div class="row items-center justify-end">
                            <q-btn v-close-popup label="Close" color="primary" flat />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
                <q-btn label="时间段搜索" unelevated rounded color="primary" />
          </div>
    <!--筛选条件end-->
    <q-space />
    <div class="text-right q-gutter-sm q-pt-sm">
      <q-btn outline text-color="blue-8" label="新建合同" class="apply-btn" to="/xjht"/>
    </div>
    <q-separator />
    <!--tab 切换 start -->
    <q-tab-panels v-model="tab" animated style="width:100%;">
      <q-tab-panel name="dsp" style="padding:10px 0 0 0;">
        <div>
          <q-table
            :data="data"
            :columns="columns"
            row-key="name"
            flat
            square
            class="my-sticky-header-table tabletop"
            style="height:auto;"            
          >
           <!-- 操作按钮注释start -->
            <template #body-cell-opt="props">
              <td style="text-align: center;">                
                <q-btn icon="preview" flat round dense color="blue" @click="layout = true">
                  <q-tooltip>查看</q-tooltip>
                </q-btn>
              </td>
            </template>
            <!-- 操作按钮注释 end-->
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
    <!--弹出查看start-->
  <div class="q-pa-md q-gutter-sm" style="width:100%">
    <q-dialog v-model="layout" >
      <q-layout view="Lhh lpR fff" container class="bg-white" style="width:80%; max-width:80%;height:80%;">
        <q-header class="bg-primary">
          <q-toolbar>
            <q-toolbar-title>查看合同</q-toolbar-title>
            <q-btn flat v-close-popup round dense icon="close" />
          </q-toolbar>
        </q-header>
        <q-page-container>
            <div class="q-pa-lg">

    <div class="q-my-sm">
      <q-form @submit="onSubmit" @reset="onReset">
 <div class="col-sm-5 col-xs-12">
            <div class="row items-center" style="margin-bottom:10px">
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">甲方名称：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">长春市热力(集团)有限责任公司</div>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">甲方负责人：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">赵明明</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px">
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">乙方名称：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">长春市某某某某公司</div>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">乙方负责人：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">李香香</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px">
              
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">项目名称：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">城市供热工程管道基础建设工程</div>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">项目金额(元)：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">45,000.00</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px">
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">项目类型：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">维修</div>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">施工类型：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">人工</div>
              </div>
            </div>
            
            <div class="row items-center" style="margin-bottom:10px">
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">项目开始时间：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">2021-06-22</div>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">项目结束时间：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">2021-12-22</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px">
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">签订日期：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">2021-01-01</div>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">选择关联：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">否</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px">
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">付款方式：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">分批</div>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">付款比例：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">50%</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px">
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">合同编号：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">HT2021054311</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px">
              <div class="col col-md-12">
              <div class="text-body1">　　在该项目的生产制造中，制造团队认真梳理了项目的关键节点及技术难点，克服了后期所有操作技术难点，为产品制造的顺利进行奠定了基础；分析出产计划，倒排工期，统筹安排人力和设备资源，确保计划完成率；全体核电从业人员严格按照核质保体系及程序文件要求，管控好每一个环节、每一道工序质量，所有焊缝UT探伤一次合格；为确保项目进度，全体人员放弃节假日时间，先后攻克多项制造技术难关，最终保质保量完成设备制造发运。</div>
              </div>
            </div>
            <div class="row items-center">         
              <div class="col col-md-1２">
                <div class="q-pa-md" style="padding:20px 0 0 0">
                  <div class="q-gutter-md" style="max-width: 50%;">              

                  </div>
                </div>
 <!-- 附件列表start -->
 <q-tab-panels v-model="tab" animated style="width:100%;">
      <q-tab-panel name="dsp" style="padding:0px">
        <div>
          <q-table
            :data="data1"
            :columns="columns1"
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
    <!-- 附件列表 end-->
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
    <!-- 弹出查看end -->      
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      maximized: process.env.editMaximized, //编辑全屏
      leftDrawerOpen:true,
      sel1: "项目类型",
      sel2: "施工类型",
      abc: false,      
      nodes_mechanism:[],
      icked_mechanism: [], 
      val: true,
      tab: "dsp",
      tab1: "dzc",
      layout: false,
      columns: [
        {
          name: "htbh",
          required: true,
          label: "合同编号",
          align: "left",
          field: "htbh",
          background: "bg-teal",
          sortable: true
        },
        {
          name: "jfmc",
          required: true,
          label: "甲方名称",
          align: "left",
          field: "jfmc",
          background: "bg-teal"
        },
        {
          name: "yfmc",
          required: true,
          label: "乙方名称",
          align: "left",
          field: "yfmc",
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
          name: "htje",
          required: true,
          label: "合同金额(元)",
          align: "left",
          field: "htje",
          sortable: true
        },
        {
          name: "qdrq",
          required: true,
          label: "签订日期",
          align: "left",
          field: "qdrq",
          sortable: true
        },
       {    name: "opt",
            label: "操作",
            align: "center",
            columns: true
          }
      ],
columns1: [
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
        }
        ,
        {
          name: "fjlx",
          required: true,
          label: "附件类型",
          align: "left",
          field: "fjlx"
        }
        ,
        {
          name: "fjdx",
          required: true,
          label: "附件大小",
          align: "left",
          field: "fjdx"
        }
        ,
        {
          name: "fjscrq",
          required: true,
          label: "上传日期",
          align: "left",
          field: "fjscrq"
        }
      ],
      data: [
        {
          htbh: "HT20010188",          
          jfmc: "长春市热力(集团)有限责任公司",
          yfmc: "长春市某某某某公司",
          xmmc: "城市供热工程管道基础建设工程",
          htje: "128,000.00",
          qdrq: "2021-06-10",
        },
        {
          htbh: "HT20010187",          
          jfmc: "长春市热力(集团)有限责任公司",
          yfmc: "长春市某某某某公司",
          xmmc: "城市供热工程管道基础建设工程",
          htje: "128,000.00",
          qdrq: "2021-06-05",
        },
        {
          htbh: "HT20010186",          
          jfmc: "长春市热力(集团)有限责任公司",
          yfmc: "长春市某某某某公司",
          xmmc: "城市供热工程管道基础建设工程",
          htje: "38,000.00",
          qdrq: "2021-06-01",
        },
      ],
      data1: [
      
        {
          fjbh: "01",
          fjmc: "城市供热工程管道基础建设工程合同",
          fjlx: "文档",
          fjdx: "1.2M",
          fjscrq: "2021-06-22 15:30"
        },
        {
          fjbh: "02",
          fjmc: "城市供热工程管道基础建设工程合同正本",
          fjlx: "图片",
          fjdx: "3.2M",
          fjscrq: "2021-06-22 15:25"
        }
      ],
      model: null,
      alert: false,
      lsit: null,
      age: null,
      date: "2020/01/15",
      accept: false,
      sel: null,
      val: true,
      options1: ["维修项目", "新建项目"],
      options2: ["机械", "人工", "材料"],
      num: null,
      group: ["gro1", "gro2"],
      option: [
        {
          label: "option1",
          value: "gro1"
        },
        {
          label: "option1",
          value: "gro2"
        }
      ]
    };
  },
  methods: {
    add() {
      //  this.alert=!this.alert
      this.alert = true;
    },
    onSubmit() {
      if (this.accept !== true) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "You need to accept the license and terms first"
        });
      } else {
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Submitted"
        });
      }
    },

    onReset() {
      this.lsit = null;
      this.age = null;
      this.accept = false;
    },
    onRejected(rejectedEntries) {
      // Notify plugin needs to be installed
      // https://quasar.dev/quasar-plugins/notify#Installation
      this.$q.notify({
        type: "negative",
        message: `${rejectedEntries.length} file(s) did not pass validation constraints`
      });
    }
  }
};
</script>