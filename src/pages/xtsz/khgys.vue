<template>
  <div class="row q-pa-md">
    <q-breadcrumbs style="width:100%; margin:10px 0;">
      <q-breadcrumbs-el label="首页" icon="home" to="/main"/>
      <q-breadcrumbs-el label="系统设置" icon="miscellaneous_services"/>
      <q-breadcrumbs-el label="客户/供应商管理" />
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
    </div>
    <!--筛选条件end-->
    <q-space />
    <div class="text-right q-gutter-sm q-pt-sm">
      <q-btn outline text-color="blue-8" label="新增" class="apply-btn" to="/xt_xz"/>
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
                <q-btn icon="create" flat round dense color="blue" to="/xt_xg">
                  <q-tooltip>修改</q-tooltip>
                </q-btn>
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
    <!--tab 切换 end -->
    <!--弹出查看start-->
  <div class="q-pa-md q-gutter-sm" style="width:100%">
    <q-dialog v-model="layout" >
      <q-layout view="Lhh lpR fff" container class="bg-white" style="width:50%; max-width:50%;height:80%;">
        <q-header class="bg-primary">
          <q-toolbar>
            <q-toolbar-title>详细信息</q-toolbar-title>
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
                <strong>基本信息</strong>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">编码：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">KH01</div>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">创建时间：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">2011-01-05</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px">
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">名称：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">吉林省XXXXXXXX有限公司</div>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">类型：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">客户</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px">
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">是否关联方：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">是</div>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">内部交易:</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">内部交易</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px">
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">联系人：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">张明明</div>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">联系电话:</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">1234567890000</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px; padding-bottom:20px;border-bottom:1px #b6b6b6 dashed;">
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">邮寄地址：</div>
              </div>
              <div class="col col-md-10">
                <div class="text-body1">吉林省长春市人民大街卫星路XX写字间九层888号XXX号楼XX室</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px">
              <div class="col col-md-12 text-h6" style="margin-bottom:5px;">
                <strong>发票信息</strong>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">名称：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">吉林省销售方XXX有限公司</div>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">纳税人识别号：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">123456789710</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px">
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">开户行：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">中国人民银行</div>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">账号：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">123456789710000</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px">
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">地址：</div>
              </div>
              <div class="col col-md-10">
                <div class="text-body1">吉林省长春市人民大街卫星路XX写字间九层888号</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px; padding-bottom:20px;border-bottom:1px #b6b6b6 dashed;">
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">电话：</div>
              </div>
              <div class="col col-md-10">
                <div class="text-body1">0431-12345678</div>
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
      sel1: "所有类型",
      abc: false,      
      nodes_mechanism:[],
      icked_mechanism: [], 
      val: true,
      tab: "dsp",
      tab1: "dzc",
      layout: false,
      columns: [
        {
          name: "bm",
          required: true,
          label: "编码",
          align: "left",
          field: "bm",
          sortable: true
        },                
        {
          name: "lx",
          required: true,
          label: "类型",
          align: "left",
          field: "lx",
          sortable: true
        },
        {
          name: "mc",
          required: true,
          label: "名称",
          align: "left",
          field: "mc"
        },
        {
          name: "sfglf",
          required: true,
          label: "是否关联方",
          align: "left",
          field: "sfglf",
          sortable: true
        },
        {
          name: "sxsj",
          required: true,
          label: "失效时间",
          align: "left",
          field: "sxsj",
          sortable: true
        },
        {
          name: "lxr",
          required: true,
          label: "联系人",
          align: "left",
          field: "lxr"
        },
        {
          name: "lxrdh",
          required: true,
          label: "联系人电话",
          align: "left",
          field: "lxrdh"
        },        
        {
          name: "khh",
          required: true,
          label: "开户行",
          align: "left",
          field: "khh"
        },
        {
          name: "zh",
          required: true,
          label: "账号",
          align: "left",
          field: "zh"
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
          bm: "kh01",
          lx: "客户",
          mc: "吉林省XXXXXXXX有限公司",
          sfglf: "是",
          sxsj: "2022-05-25 08:30",
          lxr: "赵天天",
          lxrdh: "12345678900",
          khh: "中国工商银行",
          zh: "440000123456789"          
        },
        {
          bm: "kh02",
          lx: "客户",
          mc: "吉林省XXXXXXXX有限公司",
          sfglf: "是",
          sxsj: "2022-05-25 08:30",
          lxr: "赵天天",
          lxrdh: "12345678900",
          khh: "中国工商银行",
          zh: "440000123456789"   
        },
        {
          bm: "kh03",
          lx: "客户",
          mc: "吉林省XXXXXXXX有限公司",
          sfglf: "是",
          sxsj: "2022-05-25 08:30",
          lxr: "赵天天",
          lxrdh: "12345678900",
          khh: "中国工商银行",
          zh: "440000123456789"   
        },
        {
          bm: "kh04",
          lx: "客户",
          mc: "吉林省XXXXXXXX有限公司",
          sfglf: "否",
          lxr: "赵天天",
          lxrdh: "12345678900",
          khh: "中国工商银行",
          zh: "440000123456789"   
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
      options1: ["客户", "供应商", "客户/供应商"],
      num: null
    };
  },
  
};
</script>