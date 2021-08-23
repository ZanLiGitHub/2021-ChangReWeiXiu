<template>
  <div class="row q-pa-md">
    <q-breadcrumbs style="width:100%; margin:10px 0;">
      <q-breadcrumbs-el label="首页" icon="home" to="/main"/>
      <q-breadcrumbs-el label="统计分析" icon="moving"/>
      <q-breadcrumbs-el label="发票统计" />
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
      <q-select outlined dense v-model="sel1" :options="options1" bg-color="white" style="width:150px"/>
      <q-select outlined dense v-model="sel2" :options="options2" bg-color="white" style="width:150px"/>
    </div>
    <!--筛选条件end-->
    <q-space />
    <!-- <div class="text-right q-gutter-sm q-pt-sm">
      <q-btn outline text-color="blue-8" label="新建发票" class="apply-btn" to="/xjfp"/>
    </div> -->
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
    </q-tab-panels>
    <!--tab 切换 end -->
    <!--弹出查看start-->
  <div class="q-pa-md q-gutter-sm" style="width:100%">
    <q-dialog v-model="layout" >
      <q-layout view="Lhh lpR fff" container class="bg-white" style="width:80%; max-width:80%;height:80%;">
        <q-header class="bg-primary">
          <q-toolbar>
            <q-toolbar-title>查看发票</q-toolbar-title>
            <q-btn flat v-close-popup round dense icon="close" />
          </q-toolbar>
        </q-header>
        <q-page-container>
            <div class="q-pa-lg">

    <div class="q-my-sm">
      <q-form @submit="onSubmit" @reset="onReset">
 <div class="col-sm-5 col-xs-12">
            <div class="row items-center" style="margin-top:-10px">
              <div class="col col-md-12 text-h6" style="margin-bottom:5px;">
                <strong>发票基本信息</strong>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">项目名称：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">项目的名称</div>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">发票编号：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">123456789</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px">
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">开票时间</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">2021-06-06</div>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">金额：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">16万元</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px">
              
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">税率：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">6%</div>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">含税价：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">18万元</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px; padding-bottom:20px;border-bottom:1px #b6b6b6 dashed;">
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">不含税价：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">16万元</div>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">单价:</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">16万元</div>
              </div>
            </div>
            
            <div class="row items-center" style="margin-bottom:10px">
              <div class="col col-md-12 text-h6" style="margin-bottom:5px;">
                <strong>销售方详细信息</strong>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">名称：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">吉林省销售方XXX有限公司</div>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">纳税人识别号:</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">123456789710</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px">
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">地址、电话:</div>
              </div>
              <div class="col col-md-10">
                <div class="text-body1">吉林省长春市人民大街卫星路XX写字间九层888号、0431-12345678</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px; padding-bottom:20px;border-bottom:1px #b6b6b6 dashed;">
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">开户行及账号：</div>
              </div>
              <div class="col col-md-10">
                <div class="text-body1">建设银行666000222888000888</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px">
              <div class="col col-md-12 text-h6" style="margin-bottom:5px;">
                <strong>购买方详细信息</strong>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">名称：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">吉林省销售方XXX有限公司</div>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">纳税人识别号:</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">123456789710</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px">
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">地址、电话:</div>
              </div>
              <div class="col col-md-10">
                <div class="text-body1">吉林省长春市人民大街卫星路XX写字间九层888号、0431-12345678</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px; padding-bottom:20px;border-bottom:1px #b6b6b6 dashed;">
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">开户行及账号：</div>
              </div>
              <div class="col col-md-10">
                <div class="text-body1">建设银行666000222888000888</div>
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
      sel1: "时间",
      sel2: "金额",
      abc: false,      
      nodes_mechanism:[],
      icked_mechanism: [], 
      val: true,
      tab: "dsp",
      tab1: "dzc",
      layout: false,
      columns: [
        {
          name: "fpbh",
          required: true,
          label: "发票编号",
          align: "left",
          field: "fpbh",
          background: "bg-teal"
        },
        {
          name: "xsf",
          required: true,
          label: "销售方",
          align: "left",
          field: "xsf",
          sortable: true
        },
        {
          name: "gmf",
          required: true,
          label: "购买方",
          align: "left",
          field: "gmf",
          sortable: true
        },
        {
          name: "je",
          required: true,
          label: "金额",
          align: "left",
          field: "je",
          sortable: true
        },
        {
          name: "kpsj",
          required: true,
          label: "开票时间",
          align: "left",
          field: "kpsj",
          sortable: true
        },
       {
            name: "opt",
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
          fpbh: "12345678910111",
          xsf: "吉林省长热维修实业有限公司",
          gmf: "长春市热力(集团)有限责任公司",
          je: "51万元",
          kpsj: "2021-06-20"
        }
      ],
      data1: [
      
        {
          fjbh: "01",
          fjmc: "城市供热工程管道基础建设工程发票",
          fjlx: "图片",
          fjdx: "1.2M",
          fjscrq: "2021-06-22 15:30"
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
      options1: ["本周", "本月", "近半年", "近一年"],
      options2: ["0-50万元", "50-100万元","100-500万元","500万元以上"],
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