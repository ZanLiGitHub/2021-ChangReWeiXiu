<template>
  <div class="row q-pa-md">
    <q-breadcrumbs style="width:100%; margin:10px 0;">
      <q-breadcrumbs-el label="首页" icon="home" to="/main"/>
      <q-breadcrumbs-el label="统计分析" icon="moving"/>
      <q-breadcrumbs-el label="成本台账"/>
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
            <q-toolbar-title>查看成本台账</q-toolbar-title>
            <q-btn flat v-close-popup round dense icon="close" />
          </q-toolbar>
        </q-header>
        <q-page-container>
            <div class="q-pa-lg">

    <div class="q-my-sm">
      <q-form @submit="onSubmit" @reset="onReset">
 <div class="col-sm-5 col-xs-12">
            <div class="row items-center" style="margin-bottom:10px; margin-top:-10px;">
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">合同编号：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">HT202100132</div>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">项目编码：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">XM0096</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px">
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">工程名称：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">工程名称</div>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">合同类别：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">合同类别1</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px">
              
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">合同类型：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">合同类型1</div>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">供应商名称：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">长春市热力(集团)有限责任公司</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px">
              
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">合同金额：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">400,000.00元</div>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">签订时间：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">2021-01-01</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px">
              
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">合同期限：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">2021-06-06</div>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">印花税：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">16%</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px">
              
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">付款方式：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">分期</div>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">是否关联方：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">是</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px">
              
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">开票日期：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">2021-05-05</div>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">不含税金额：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">300,000.00元</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px">
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">开票金额：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">300,000.00元</div>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">付款金额:</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">分期</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px">
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">未付金额：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">5,000.00元</div>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">支付比例:</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">30%</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px">
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">税率：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">20%</div>
              </div>
            </div>
           
            <div class="row items-center">         
              <div class="col col-md-12">
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
          name: "xh",
          required: true,
          label: "序号",
          align: "left",
          field: "xh",
          sortable: true
        },
        {
          name: "htbh",
          required: true,
          label: "合同编号",
          align: "left",
          field: "htbh",
          sortable: true
        },
        {
          name: "xmbm",
          required: true,
          label: "项目编码",
          align: "left",
          field: "xmbm"
        },
        {
          name: "gcmc",
          required: true,
          label: "工程名称",
          align: "left",
          field: "gcmc"
        },
        {
          name: "htmc",
          required: true,
          label: "合同名称",
          align: "left",
          field: "htmc"
        },
        {
          name: "htlb",
          required: true,
          label: "合同类别",
          align: "left",
          field: "htlb"
        },
        {
          name: "htlx",
          required: true,
          label: "合同类型",
          align: "left",
          field: "htlx"
        },
        {
          name: "gysmc",
          required: true,
          label: "供应商名称",
          align: "left",
          field: "gysmc"
        },
        {
          name: "htje",
          required: true,
          label: "合同金额",
          align: "left",
          field: "htje"
        },
        {
          name: "qdsj",
          required: true,
          label: "签订时间",
          align: "left",
          field: "qdsj"
        },
        {
          name: "htqx",
          required: true,
          label: "合同期限",
          align: "left",
          field: "htqx"
        },
        {
          name: "yhs",
          required: true,
          label: "印花税",
          align: "left",
          field: "yhs"
        },
        {
          name: "fkfs",
          required: true,
          label: "付款方式",
          align: "left",
          field: "fkfs"
        },
        {
          name: "sfglf",
          required: true,
          label: "是否关联方",
          align: "left",
          field: "sfglf"
        },
        {
          name: "kprq",
          required: true,
          label: "开票日期",
          align: "left",
          field: "kprq"
        },
        {
          name: "bhsje",
          required: true,
          label: "不含税金额",
          align: "left",
          field: "bhsje"
        },
        {
          name: "kpje",
          required: true,
          label: "开票金额",
          align: "left",
          field: "kpje"
        },
        {
          name: "fkje",
          required: true,
          label: "付款金额",
          align: "left",
          field: "fkje"
        },
        {
          name: "wfje",
          required: true,
          label: "未付金额",
          align: "left",
          field: "wfje"
        },        
        {
          name: "zfbl",
          required: true,
          label: "支付比例",
          align: "left",
          field: "zfbl"
        },
        {
          name: "sl",
          required: true,
          label: "税率",
          align: "left",
          field: "sl"
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
          xh: "1",
          htbh: "HT202100132",
          xmbm: "XM0096",
          xmnd: "2021年 ",
          gcmc: "工程名称",
          htmc: "XXXX合同",
          htlb: "类别1",
          htlx: "类型1",
          gysmc: "长春市热力(集团)有限责任公司",
          htje: "400,000.00元",
          qdsj: "2021-01-01",          
          htqx: "2021-06-06",
          yhs: "16%",
          fkfs: "分期",
          sfglf: "是",
          kprq: "2021-05-05",
          bhsje: "300,000.00元",
          kpje: "300,000.00元",
          kprq: "2021-05-05",
          bhsje: "300,000.00元",
          wfje: "100,000.00元",
          zfbl: "40%",
          sl: "13%",
          fkje: "5,000.00元",
          wfje: "5,000.00元",
          zfbl: "5,000.00元",
          sl: "5,000.00元",        
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