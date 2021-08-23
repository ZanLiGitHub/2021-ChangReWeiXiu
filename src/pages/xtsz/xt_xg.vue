<template>
  <div class="q-pa-lg">
    <div class="q-my-sm">
      <q-form @submit="onSubmit" @reset="onReset">
      <div class="text-h6 q-pb-md">
        <strong>修改客户/供应商基本信息</strong>
      </div>
         <div class="col-sm-5 col-xs-12">
            <div class="row items-center" style="margin-bottom:30px">
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">编码</div>
              </div>
              <div class="col col-md-5">
                <q-input
                  v-model="lsit"
                  outlined
                  placeholder="KH01"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || 'KH01']"
                />
              </div>
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">创建时间</div>
              </div>
              <div class="col col-md-5">
                2011-01-05
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:30px">
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">名称</div>
              </div>
              <div class="col col-md-5">
                <q-input
                  v-model="lsit"
                  outlined
                  placeholder="名称"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || '名称']"
                />
              </div>
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">类型</div>
              </div>
              <div class="col col-md-5">
                <q-radio v-model="shape" val="kh" label="客户" /><q-radio v-model="shape" val="gys" label="供应商" /><q-radio v-model="shape" val="all" label="两者都是" />
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:30px">
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">是否关联方</div>
              </div>
              <div class="col col-md-5">
                <q-radio v-model="shape" val="shi" label="是" /><q-radio v-model="shape" val="fou" label="否" />
              </div>
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">内部交易</div>
              </div>
              <div class="col col-md-5">
                <q-input
                  v-model="lsit"
                  outlined
                  placeholder="内部交易"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || '内部交易']"
                />
              </div>
            </div>            
            <div class="row items-center" style="margin-bottom:30px">
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">联系人</div>
              </div>
              <div class="col col-md-5">
                <q-input
                  v-model="lsit"
                  outlined
                  placeholder="张明明"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || '张明明']"
                />
              </div>
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">联系电话</div>
              </div>
              <div class="col col-md-5">
                <q-input
                  v-model="lsit"
                  outlined
                  placeholder="1234567890000"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || '1234567890000']"
                />
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:30px">
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">邮寄地址</div>
              </div>
              <div class="col col-md-5">
                <q-input
                  v-model="lsit"
                  outlined
                  placeholder="吉林省长春市人民大街卫星路XX写字间九层888号XXX号楼XX室"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || '邮寄地址']"
                />
              </div>
            </div>
            <div class="text-h6 q-pb-md">
            <strong>修改客户/供应商发票信息</strong>
            </div>
            <div class="row items-center" style="margin-bottom:30px">
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">名称</div>
              </div>
              <div class="col col-md-5">
                <q-input
                  v-model="lsit"
                  outlined
                  placeholder="吉林省销售方XXX有限公司"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || '名称']"
                />
              </div>
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">纳税人识别号</div>
              </div>
              <div class="col col-md-5">
                <q-input
                  v-model="lsit"
                  outlined
                  placeholder="123456789710"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || '纳税人识别号']"
                />
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:30px">
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">开户行</div>
              </div>
              <div class="col col-md-5">
                <q-input
                  v-model="lsit"
                  outlined
                  placeholder="中国人民银行"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || '开户行']"
                />
              </div>
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">账号</div>
              </div>
              <div class="col col-md-5">
                <q-input
                  v-model="lsit"
                  outlined
                  placeholder="123456789710000"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || '账号']"
                />
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:30px">
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">地址</div>
              </div>
              <div class="col col-md-5">
                <q-input
                  v-model="lsit"
                  outlined
                  placeholder="吉林省长春市人民大街卫星路XX写字间九层888号"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || '地址']"
                />
              </div>
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">电话</div>
              </div>
              <div class="col col-md-5">
                <q-input
                  v-model="lsit"
                  outlined
                  placeholder="0431-12345678"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || '电话']"
                />
              </div>
            </div>
 </div>
 <div  class="col-sm-5 col-xs-12" style="text-align:center;">
          <q-btn label="确定" type="submit" color="primary" to="/khgys"/>
          <q-btn label="清除" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
    </div>
    <!--项目信息弹出start-->
  <div class="q-pa-md q-gutter-sm" style="width:100%">
    <q-dialog v-model="xiangmu" >
      <q-layout view="Lhh lpR fff" container class="bg-white" style="width:50%; max-width:50%;height:80%;">
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
    <!-- 项目表单 end-->
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
    <!-- 项目信息弹出end -->
    <!--购买方弹出start-->
  <div class="q-pa-md q-gutter-sm" style="width:100%">
    <q-dialog v-model="gmf" >
      <q-layout view="Lhh lpR fff" container class="bg-white" style="width:50%; max-width:50%;height:80%;">
        <q-header class="bg-primary">
          <q-toolbar>
            <q-toolbar-title>购买方列表</q-toolbar-title>
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
            :data="data_gmf"
            :columns="columns_gmf"
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
    <!-- 项目表单 end-->
              </div>
            </div>
 </div>
 <div  class="col-sm-5 col-xs-12" style="text-align:center;">
          <q-btn label="关闭" v-close-popup  color="primary" />
        </div>
      </q-form>
    </div>
  </div>
        </q-page-container>      
      </q-layout>
    </q-dialog>
  </div>
    <!-- 购买方弹出end -->  
    <!--销售方弹出start-->
  <div class="q-pa-md q-gutter-sm" style="width:100%">
    <q-dialog v-model="xsf" >
      <q-layout view="Lhh lpR fff" container class="bg-white" style="width:50%; max-width:50%;height:80%;">
        <q-header class="bg-primary">
          <q-toolbar>
            <q-toolbar-title>销售方列表</q-toolbar-title>
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
            :data="data_xsf"
            :columns="columns_xsf"
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
    <!-- 销售方弹出end -->   
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
      shape: "",
      val: true,
      model: null,
      num: null,
      leftDrawerOpen:true,
      abc: false,      
      nodes_mechanism:[],
      icked_mechanism: [], 
      val: true,
      tab: "dsp",
      tab1: "dzc",
      layout: false,
      xiangmu: false,
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
      columns_xm: [
        {
          name: "xh",
          required: true,
          label: "序号",
          align: "left",
          field: "xh",
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
          name: "qdrq",
          required: true,
          label: "签订日期",
          align: "left",
          field: "qdrq",
          sortable: true
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
      data_xm: [
        {
          xh: "01",
          xmmc: "项目名称11111",
          qdrq:"2021-06-06"
        },
        {
          xh: "02",
          xmmc: "项目名称2222",
          qdrq:"2021-06-06"
        }
      ],
      data_xsf: [
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
      data_gmf: [
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
