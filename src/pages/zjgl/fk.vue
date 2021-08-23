<template>
  <div class="q-pa-lg">
    <div class="text-h6 q-pb-md">
      <strong>付款信息</strong>
    </div>
    <div class="q-my-sm">
      <q-form @submit="onSubmit" @reset="onReset">
 <div class="col-sm-5 col-xs-12">
            <div class="row items-center" style="margin-bottom:30px">
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">收款单位</div>
              </div>
              <div class="col col-md-11">
                <q-input outlined dense bg-color="white" color="grey-9" placeholder="请输入收款单位">
                 <template v-slot:append>
                 <q-icon name="search" @click="skdw = true"/>
                 </template>
                </q-input>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:30px">
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">收款日期</div>
              </div>
              <div class="col col-md-11">
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
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:30px">
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">收款金额</div>
              </div>
              <div class="col col-md-11">
                <q-input
                  v-model="lsit"
                  outlined
                  placeholder="请输入收款金额"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || '请输入收款金额']"
                />
              </div>
          </div>
          <div class="row items-center">
              <div class="col col-md-5">
                    <div class="text-h6 q-pb-md">
                      <strong>发票信息</strong>
                    </div>
              </div>
              <div class="col col-md-7">
                <div class="text-right">
                      <q-btn outline text-color="blue-8" label="选择发票" class="apply-btn" style="margin-bottom:10px;" @click="xzfp = true"/>
                </div>
               </div> 
            </div>  
            <div class="row items-center">             
              <div class="col col-md-12">
 <!-- 附件列表start -->
 <q-tab-panels v-model="tab" animated style="width:100%;">
      <q-tab-panel name="dsp" style="padding:0px">
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
                <q-btn icon="delete_forever" flat round dense color="blue">
                  <q-tooltip>删除</q-tooltip>
                </q-btn>
              </td>
            </template>
            <!-- 操作按钮注释 end-->
          </q-table>
        </div>
      </q-tab-panel>
    </q-tab-panels>
    <!-- 附件列表 end-->
    </div>
   </div>
 </div>
 <div  class="col-sm-5 col-xs-12" style="text-align:center;">
          <q-btn label="确定" type="submit" color="primary" to="/skcx"/>
          <q-btn label="清除" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
    </div>
    <!--付款单位弹出start-->
  <div class="q-pa-md q-gutter-sm" style="width:100%">
    <q-dialog v-model="skdw" >
      <q-layout view="Lhh lpR fff" container class="bg-white" style="width:50%; max-width:50%;height:80%;">
        <q-header class="bg-primary">
          <q-toolbar>
            <q-toolbar-title>付款单位列表</q-toolbar-title>
            <q-btn flat v-close-popup round dense icon="close" />
          </q-toolbar>
        </q-header>
        <q-page-container>
            <div class="q-pa-lg">
              <!--筛选条件start-->
<div class="q-py-sm" style="width:400px">
            <q-input outlined dense bg-color="white" color="grey-9" placeholder="请输入您要搜索的关键字">
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
    <!--筛选条件end-->

    <div class="q-my-sm">
      <q-form @submit="onSubmit" @reset="onReset">
 <div class="col-sm-5 col-xs-12">
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
            :data="data_skdw"
            :columns="columns_skdw"
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
      </q-form>
    </div>
  </div>
        </q-page-container>      
      </q-layout>
    </q-dialog>
  </div>
    <!-- 付款单位弹出end -->
    <!--选择发票弹出start-->
  <div class="q-pa-md q-gutter-sm" style="width:100%">
    <q-dialog v-model="xzfp" >
      <q-layout view="Lhh lpR fff" container class="bg-white" style="width:50%; max-width:50%;height:80%;">
        <q-header class="bg-primary">
          <q-toolbar>
            <q-toolbar-title>发票列表</q-toolbar-title>
            <q-btn flat v-close-popup round dense icon="close" />
          </q-toolbar>
        </q-header>
        <q-page-container>
            <div class="q-pa-lg">
              <!--筛选条件start-->
<div class="q-py-sm" style="width:400px">
            <q-input outlined dense bg-color="white" color="grey-9" placeholder="请输入您要搜索的关键字">
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
    <!--筛选条件end-->

    <div class="q-my-sm">
      <q-form @submit="onSubmit" @reset="onReset">
 <div class="col-sm-5 col-xs-12">
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
            :data="data"
            :columns="columns_fp"
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
      </q-form>
    </div>
  </div>
        </q-page-container>      
      </q-layout>
    </q-dialog>
  </div>
    <!-- 选择发票弹出end -->  
  </div>
</template>

<script>
export default {
  data() {
    return {
      lsit: null,
      age: null,
      date: "2021/01/01",
      accept: false,
      sel: null,
      val: true,
      model: null,
      options: ["一级", "二级", "三级", "四级"],
      options1: ["项目类型1", "项目类型2","项目类型3"],
      options2: ["施工类型1", "施工类型2", "施工类型3"],
      num: null,
      leftDrawerOpen:true,
      sel1: "项目类型",
      sel2: "施工类型",
      abc: false,      
      nodes_mechanism:[],
      icked_mechanism: [], 
      val: true,
      tab: "dsp",
      tab1: "dzc",
      skdw: false,
      xzfp: false,
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
      columns_skdw: [
        {
          name: "xh",
          required: true,
          label: "序号",
          align: "left",
          field: "xh"
        },
        {
          name: "gsmc",
          required: true,
          label: "公司名称",
          align: "left",
          field: "gsmc",
          background: "bg-teal"
        },
        {
          name: "nsrsbh",
          required: true,
          label: "纳税人识别号",
          align: "left",
          field: "nsrsbh"
        }
      ],
      columns_fp: [
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
      data_skdw: [
        {
          xh: "01",
          gsmc: "长春市大大供热工程建设有限公司",
          nsrsbh: "110101234567890"
        },
        {
          xh: "02",
          gsmc: "长春市小小供热工程建设有限公司",
          nsrsbh: "110101234567891"
        }
      ],
    };
    
  },

  methods: {
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
    }
  }
};
</script>
