<template>
  <div class="row q-pa-md">
    <q-breadcrumbs style="width:100%; margin:10px 0;">
      <q-breadcrumbs-el label="首页" icon="home" to="/main"/>
      <q-breadcrumbs-el label="单据管理" icon="table_view"/>
      <q-breadcrumbs-el label="付款申请单查询"/>
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
    <div class="text-right q-gutter-sm q-pt-sm">
      <q-btn outline text-color="blue-8" label="新建付款申请单" class="apply-btn" to="/fksqd"/>
      <q-btn outline text-color="blue-8" label="凭证生成" class="apply-btn" @click="pingzheng = true"/>
    </div>
    <q-separator />
    <!--tab 切换 start -->
    <q-tab-panels v-model="tab" animated style="width:100%;">
      <q-tab-panel name="dsp" style="padding:10px 0 0 0;">
        <div>
         <q-table
            :data="data1"
            :columns="columns1"
            row-key="id"
            flat
            square
            class="my-sticky-header-table tabletop"
            style="height:auto;" 
            selection="multiple"
            :selected.sync="selected"           
          >
           <!-- 操作按钮注释start -->
            <template #body-cell-opt="props">
              <td style="text-align: center;">
                <q-btn icon="create" flat round dense color="blue" to="/fksqd_xg">
                  <q-tooltip>修改</q-tooltip>
                </q-btn>             
                
                <q-btn icon="post_add" flat round dense color="blue" @click="layout = true">
                  <q-tooltip>查看凭证</q-tooltip>
                </q-btn>
              </td>
            </template>
            <!-- 操作按钮注释 end-->
          </q-table>
        </div>
      </q-tab-panel>
    </q-tab-panels>
    <!--tab 切换 end -->
    <!--弹出查看凭证start-->
  <div class="q-pa-md q-gutter-sm" style="width:100%">
    <q-dialog v-model="layout" >
      <q-layout view="Lhh lpR fff" container class="bg-white" style="width:80%; max-width:80%;height:80%;">
        <q-header class="bg-primary">
          <q-toolbar>
            <q-toolbar-title>付款凭证</q-toolbar-title>
            <q-btn flat v-close-popup round dense icon="close" />
          </q-toolbar>
        </q-header>
        <q-page-container>
         <div class="q-pa-lg">
    <div class="q-my-sm">
      <q-form @submit="onSubmit" @reset="onReset">
 <div class="col-sm-5 col-xs-12">
            <div class="row items-center" style="margin-bottom:10px">
              <div class="col col-md-12 text-h6" style="margin-bottom:5px;">
                <strong>借方</strong>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">总帐科目：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">借方科目信息</div>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">明细科目：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">贷方科目信息</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px; padding-bottom:20px;border-bottom:1px #b6b6b6 dashed;">
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">摘要：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">摘要</div>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">金额(元)：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">160,000.00</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px">
              <div class="col col-md-12 text-h6" style="margin-bottom:5px;">
                <strong>贷方</strong>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">总帐科目：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">借方科目信息</div>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">明细科目：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">贷方科目信息</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px; padding-bottom:20px;border-bottom:1px #b6b6b6 dashed;">
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">摘要：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">摘要</div>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">金额(元)：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">160,000.00</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px">
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">记帐日期：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">2021-06-28</div>
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
    <!-- 弹出查看凭证end --> 
    <!--弹出凭证生成start-->
  <div class="q-pa-md q-gutter-sm" style="width:100%">
    <q-dialog v-model="pingzheng" >
      <q-layout view="Lhh lpR fff" container class="bg-white" style="width:50%; max-width:50%;height:80%;">
        <q-header class="bg-primary">
          <q-toolbar>
            <q-toolbar-title>凭证生成</q-toolbar-title>
            <q-btn flat v-close-popup round dense icon="close" />
          </q-toolbar>
        </q-header>
        <q-page-container>
            <div class="q-pa-lg">
    <div class="q-my-sm">
      <q-form @submit="onSubmit" @reset="onReset">
        <div class="col-sm-5 col-xs-12">
            <div class="row items-center" style="margin-top:-10px">
              <q-img src="/img/icon_cg.png" style=" width:400px; margin:0 auto;"></q-img>              
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
    <!-- 弹出凭证生成end --> 
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      selected:[],
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
      pingzheng: false,
     
columns1: [  
       {
          name: "ht",
          required: true,
          label: "合同",
          align: "left",
          field: "ht"
        },
        {
          name: "skdw",
          required: true,
          label: "收款单位",
          align: "left",
          field: "skdw"
        },
        {
          name: "fkdw",
          required: true,
          label: "付款单位",
          align: "left",
          field: "fkdw"
        },
        {
          name: "fksj",
          required: true,
          label: "付款时间",
          align: "left",
          field: "fksj"
        },
        {
          name: "fkje",
          required: true,
          label: "付款金额(元)",
          align: "left",
          field: "fkje"
        },
        {
            name: "opt",
            label: "操作",
            align: "center",
            columns: true
        }
      ],
      data1: [      
        {
          id:1,
          ht: "XXXX项目合同",
          skdw:"吉林省XXXX有限公司",
          fkdw: "长春市热力(集团)有限责任公司",
          fksj: "2021-05-01",
          fkje: "12,000.00"
        },
        {
          id:2,
          ht: "XXXX项目合同",
          skdw:"长春市XXXX有限公司",
          fkdw: "长春市热力(集团)有限责任公司",
          fksj: "2021-04-20",
          fkje: "60,000.00"
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