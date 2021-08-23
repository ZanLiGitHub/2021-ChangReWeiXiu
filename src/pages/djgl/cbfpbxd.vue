<template>
  <div class="q-pa-lg">   
    <div class="q-my-sm">
      <q-form @submit="onSubmit" @reset="onReset">
         <div class="col-sm-5 col-xs-12">
            <div class="row items-center" style="margin-bottom:30px">
                            <div class="col col-md-6">
                <div class="text-h6 q-pb-md">
                  <strong>新建成本费用报销单</strong>
                </div>
              </div>
              <div class="col col-md-6">
                <div class="text-right">
                  <q-btn outline text-color="blue-8" label="发票快速录入" class="apply-btn" style="margin-bottom:10px;" @click="xsf = true"/>
                </div>
              </div>
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">项目名称</div>
              </div>
              <div class="col col-md-5">
                <q-input outlined dense bg-color="white" color="grey-9" placeholder="选择项目">
                 <template v-slot:append>
                 <q-icon name="search" @click="hetong = true"/>
                 </template>
                </q-input>
              </div>
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">项目编码</div>
              </div>
              <div class="col col-md-5">
                <q-input
                  v-model="lsit"
                  outlined
                  placeholder="请输入项目编码"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || '请输入项目编码']"
                />
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:30px">
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">摘要</div>
              </div>
              <div class="col col-md-5">
                <q-select
                  v-model="selzy"
                  dense
                  outlined
                  :options="zhaiyao"
                 />
              </div>
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">金额(元)</div>
              </div>
              <div class="col col-md-5">
                <q-input
                  v-model="lsit"
                  outlined
                  placeholder="请输入金额"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || '请输入金额']"
                />
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:30px">
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">收款单位</div>
              </div>
              <div class="col col-md-5">
                <q-input outlined dense bg-color="white" color="grey-9" placeholder="选择收款单位">
                 <template v-slot:append>
                 <q-icon name="search" @click="xsf = true"/>
                 </template>
                </q-input>
              </div>
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">开户银行</div>
              </div>
              <div class="col col-md-5">
                <q-input
                  v-model="lsit"
                  outlined
                  placeholder="开户银行系统填入"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || '开户银行系统填入']"
                />
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:30px">
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">银行行号</div>
              </div>
              <div class="col col-md-5">
                <q-input
                  v-model="lsit"
                  outlined
                  placeholder="银行行号系统填入"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || '银行行号系统填入']"
                />
              </div>
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">票据类型</div>
              </div>
              <div class="col col-md-5">
                <q-select
                  v-model="selpj"
                  dense
                  outlined
                  :options="piaoju"
                 />
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:30px">
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">附件张数</div>
              </div>
              <div class="col col-md-5">
                <q-input
                  v-model="lsit"
                  outlined
                  placeholder="请输入附件张数"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || '请输入附件张数']"
                />
              </div>
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575"></div>
              </div>
              <div class="col col-md-5">
             
              </div>
            </div>
            <div class="row items-center">
              <div class="col col-md-1 text-right">
                <span class="q-mr-sm"  style="font-size:14px; color:#757575">附件列表</span>
              </div>
              <div class="col col-md-11">
                <div class="q-pa-md" style="padding:0px">
                  <div class="q-gutter-md" style="max-width: 50%;">
                  <q-file filled bottom-slots v-model="model" label="请选择您要上传的附件">
                       <template v-slot:append>
                        <q-icon v-if="model !== null" name="close" @click.stop="model = null" class="cursor-pointer" />
                        <q-icon name="create_new_folder" @click.stop />
                      </template>
                      <template v-slot:after>
                        <q-btn round dense flat icon="send" />
                      </template>
                    </q-file>

                  </div>
                </div>
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
          <q-btn label="确定" type="submit" color="primary" to="/cbfpbxdcx"/>
          <q-btn label="清除" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
    </div>
    <!--项目列表弹出start-->
  <div class="q-pa-md q-gutter-sm" style="width:100%">
    <q-dialog v-model="hetong" >
      <q-layout view="Lhh lpR fff" container class="bg-white" style="width:80%; max-width:80%;height:80%;">
        <q-header class="bg-primary">
          <q-toolbar>
            <q-toolbar-title>项目列表</q-toolbar-title>
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
 <!-- 项目表单start -->
 <q-tab-panels v-model="tab" animated style="width:100%;">
      <q-tab-panel name="dsp" style="padding:0px">
        <div>
          <q-table
            :data="data_xm"
            :columns="columns_xm"
            row-key="id"
            flat
            square
            class="my-sticky-header-table tabletop"
            style="height:auto;"
            selection="multiple"
            :selected.sync="selected"              
          >
          </q-table>
        </div>
      </q-tab-panel>

    </q-tab-panels>
    <!-- 项目表单end-->
              </div>
            </div>
 </div>
 <div  class="col-sm-5 col-xs-12" style="text-align:center;">
         <q-btn label="选择" type="submit" color="primary" to="/cbfpbxd"/>
          <q-btn label="关闭" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
    </div>
  </div>
        </q-page-container>      
      </q-layout>
    </q-dialog>
  </div>
    <!-- 项目列表弹出end -->
    <!--选择合同弹出start-->
  <div class="q-pa-md q-gutter-sm" style="width:100%">
    <q-dialog v-model="gmf" >
      <q-layout view="Lhh lpR fff" container class="bg-white" style="width:80%; max-width:80%;height:80%;">
        <q-header class="bg-primary">
          <q-toolbar>
            <q-toolbar-title>选择合同</q-toolbar-title>
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
 <!-- start -->
 <q-tab-panels v-model="tab" animated style="width:100%;">
      <q-tab-panel name="dsp" style="padding:0px">
        <div>
          <q-table
            :data="data_gmf"
            :columns="columns_gmf"
            row-key="id"
            flat
            square
            class="my-sticky-header-table tabletop"
            style="height:auto;"
            selection="multiple"
            :selected.sync="selected"           
          >
          </q-table>
        </div>
      </q-tab-panel>

    </q-tab-panels>
    <!-- end-->
              </div>
            </div>
 </div>
        <div  class="col-sm-5 col-xs-12" style="text-align:center;">
         <q-btn label="确认选择" type="submit" color="primary" v-close-popup to="/cbfpbxd"/>
          <q-btn label="关闭" type="reset" color="primary" flat v-close-popup class="q-ml-sm" />
        </div>
      </q-form>
    </div>
  </div>
        </q-page-container>      
      </q-layout>
    </q-dialog>
  </div>
    <!-- 选择合同弹出end -->  
    <!--收款单位弹出start-->
  <div class="q-pa-md q-gutter-sm" style="width:100%">
    <q-dialog v-model="xsf" >
      <q-layout view="Lhh lpR fff" container class="bg-white" style="width:80%; max-width:80%;height:80%;">
        <q-header class="bg-primary">
          <q-toolbar>
            <q-toolbar-title>收款单位列表</q-toolbar-title>
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
 <!-- 收款单位列表start -->
 <q-tab-panels v-model="tab" animated style="width:100%;">
      <q-tab-panel name="dsp" style="padding:0px">
        <div>
          <q-table
            :data="data_xsf"
            :columns="columns_xsf"
            row-key="id"
            flat
            square
            class="my-sticky-header-table tabletop"
            style="height:auto;"   
            selection="multiple"
            :selected.sync="selected"             
          >
          </q-table>
        </div>
      </q-tab-panel>

    </q-tab-panels>
    <!-- 收款单位列表 end-->
              </div>
            </div>
 </div>
        <div  class="col-sm-5 col-xs-12" style="text-align:center;">
         <q-btn label="选择合同" type="submit" color="primary" @click="gmf = true"/>
          <q-btn label="清除" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
    </div>
  </div>
        </q-page-container>      
      </q-layout>
    </q-dialog>
  </div>
    <!-- 收款单位弹出end -->   
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected:[],
      lsit: null,
      age: null,
      date: "2021/01/01",
      accept: false,
      sel: null,
      val: true,
      model: null,
      zhaiyao: ["材料", "劳务", "机械"],
      selzy: "摘要类型",
      piaoju: ["票据1", "票据2"],
      selpj: "票据类型",
      num: null,
      leftDrawerOpen:true,
      abc: false,      
      nodes_mechanism:[],
      icked_mechanism: [], 
      val: true,
      tab: "dsp",
      tab1: "dzc",
      layout: false,
      hetong: false,
      gmf: false,
      xsf: false,
      columns: [
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
          field: "fjlx",
          sortable: true
        },
        {
          name: "fjdx",
          required: true,
          label: "附件大小",
          align: "left",
          field: "fjdx",
          sortable: true
        },
        {
          name: "fjscrq",
          required: true,
          label: "上传日期",
          align: "left",
          field: "fjscrq"
        },
       {
            name: "opt",
            label: "操作",
            align: "center",
            columns: true
          }
      ],
      columns_xsf: [
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
      columns_gmf: [
        {
          name: "htbh",
          required: true,
          label: "合同编号",
          align: "left",
          field: "htbh",
          sortable: true
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
          label: "合同金额",
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
        {
          name: "bxje",
          required: true,
          label: "报销金额",
          align: "left",
          field: "bxje",
          sortable: true
        }
      ],
      columns: [
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
          field: "fjlx",
          sortable: true
        },
        {
          name: "fjdx",
          required: true,
          label: "附件大小",
          align: "left",
          field: "fjdx",
          sortable: true
        },
        {
          name: "fjscrq",
          required: true,
          label: "上传日期",
          align: "left",
          field: "fjscrq"
        },
       {
            name: "opt",
            label: "操作",
            align: "center",
            columns: true
          }
      ],
      data: [
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
      data_gmf: [
        {
          id:1,
          htbh: "HT0456",
          xmmc: "城市供热工程管道基础建设工程项目",
          htje: "210,000,00",
          qdrq: "2021-06-22",
          bxje: "15,000.00"
        },
        {
          id:2,
          htbh: "HT0456",
          xmmc: "城市供热工程管道基础建设工程项目",
          htje: "210,000,00",
          qdrq: "2021-06-22",
          bxje: "15,000.00"
        }
      ],
      data_xsf: [
        {
          id:1,
          xh: "01",
          gsmc: "长春市大大供热工程建设有限公司",
          nsrsbh: "110101234567890"
        },
        {
          id:2,
          xh: "02",
          gsmc: "长春市小小供热工程建设有限公司",
          nsrsbh: "110101234567891"
        }
      ],
      data_xm: [
        {
          id:1,
          xmbh: "12346501",
          htmc: "项目名称1111",
          xmlx: "维修",
          sglx: "材料",
          jfmc: "吉林省XXXX有限公司",
          xmje:"120,000.00元"
        },
        {
          id:2,
          xmbh: "12346501",
          htmc: "项目名称1111",
          xmlx: "维修",
          sglx: "材料",
          jfmc: "吉林省XXXX有限公司",
          xmje:"120,000.00元"
        },
        {
          id:3,
          xmbh: "12346501",
          htmc: "项目名称1111",
          xmlx: "维修",
          sglx: "材料",
          jfmc: "吉林省XXXX有限公司",
          xmje:"120,000.00元"
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
