<template>
  <div class="row q-pa-md">
    <q-breadcrumbs style="width:100%; margin:10px 0;">
      <q-breadcrumbs-el label="首页" icon="home" to="/main"/>
      <q-breadcrumbs-el label="系统设置" icon="miscellaneous_services"/>
      <q-breadcrumbs-el label="用户/权限管理" />
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
      <q-btn outline text-color="blue-8" label="新增" class="apply-btn" to="/yhgl_xz"/>
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
                <q-btn icon="create" flat round dense color="blue" to="/yhgl_xg">
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
      <q-layout view="Lhh lpR fff" container class="bg-white" style="width:50%; max-width:50%;height:35%;">
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
              <!-- <div class="col col-md-12 text-h6" style="margin-bottom:5px;">
                <strong>发票信息</strong>
              </div> -->
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">姓名：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">张大大</div>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">昵称:</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">33等6</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px">
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">帐号:</div>
              </div>
              <div class="col col-md-10">
                <div class="text-body1">admin</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px; padding-bottom:20px;">
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">密码：</div>
              </div>
              <div class="col col-md-10">
                <div class="text-body1">5438125lie</div>
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
          name: "xh",
          required: true,
          label: "序号",
          align: "left",
          field: "xh",
          sortable: true
        },
        {
          name: "yhmc",
          required: true,
          label: "用户名称",
          align: "left",
          field: "yhmc",
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
          name: "yhqx",
          required: true,
          label: "用户权限",
          align: "left",
          field: "yhqx",
          sortable: true
        },
        {
          name: "cjsj",
          required: true,
          label: "创建时间",
          align: "left",
          field: "cjsj",
          sortable: true
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
          xh: "user01",
          yhmc: "管理员",
          lx: "管理员",
          yhqx: "所有权限",
          cjsj: "2021-06-25 08:20"
        },
        {
          xh: "user01",
          yhmc: "管理员",
          lx: "管理员",
          yhqx: "所有权限",
          cjsj: "2021-06-25 08:20"
        },
        {
          xh: "user01",
          yhmc: "管理员",
          lx: "管理员",
          yhqx: "所有权限",
          cjsj: "2021-06-25 08:20"
        },
        {
          xh: "user01",
          yhmc: "管理员",
          lx: "管理员",
          yhqx: "所有权限",
          cjsj: "2021-06-25 08:20"
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