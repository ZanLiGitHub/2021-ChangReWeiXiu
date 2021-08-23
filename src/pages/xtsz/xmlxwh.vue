<template>
  <div class="row q-pa-md">
    <q-breadcrumbs style="width:100%; margin:10px 0;">
      <q-breadcrumbs-el label="首页" icon="home" to="/main"/>
      <q-breadcrumbs-el label="系统设置" icon="miscellaneous_services"/>
      <q-breadcrumbs-el label="项目类型维护"/>
    </q-breadcrumbs>
    <div class="q-py-sm" style="width:400px">
            <q-input outlined dense bg-color="white" color="grey-9" placeholder="请输入您要搜索的关键字">
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
    <q-space />
   <div class="text-right q-gutter-sm q-pt-sm">
      <q-btn outline text-color="blue-8" label="新建项目类型" class="apply-btn" @click="layout = true"/>
    </div>
    <q-separator />
    <!--tab 切换 start -->
    <q-tab-panels v-model="tab" animated style="width:100%;">
      <q-tab-panel name="dsp" style="padding:10px 0 0 0;">
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
           <!-- 操作按钮注释start -->
            <template #body-cell-opt="props">
              <td style="text-align: center;">
                <q-btn icon="create" flat round dense color="blue" @click="layout1 = true">
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
      <q-layout view="Lhh lpR fff" container class="bg-white" style="width:40%; max-width:40%;height:40%;">
        <q-header class="bg-primary">
          <q-toolbar>
            <q-toolbar-title>新建项目类型</q-toolbar-title>
            <q-btn flat v-close-popup round dense icon="close" />
          </q-toolbar>
        </q-header>
        <q-page-container>
            <div class="q-pa-lg">

    <div class="q-my-sm">
      <q-form @submit="onSubmit" @reset="onReset">
 <div class="col-sm-5 col-xs-12">
            <div class="row items-center" style="margin-bottom:10px">
              <div class="col col-md-3 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">项目类型名称：</div>
              </div>
              <div class="col col-md-8">
                <div class="text-body1"><q-input
                  v-model="lsit"
                  outlined
                  placeholder="请输入项目类型名称"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || '请输入项目类型名称']"
                /></div>
              </div>              
            </div>         
            
 </div>
 <div  class="col-sm-5 col-xs-12" style="text-align:center;padding-top:30px;">
          <q-btn label="确定" v-close-popup color="primary" />
        </div>
      </q-form>
    </div>
  </div>
        </q-page-container>      
      </q-layout>
    </q-dialog>
  </div>
    <!-- 弹出查看end --> 
    <!--弹出查看start-->
  <div class="q-pa-md q-gutter-sm" style="width:100%">
    <q-dialog v-model="layout1" >
      <q-layout view="Lhh lpR fff" container class="bg-white" style="width:40%; max-width:40%;height:40%;">
        <q-header class="bg-primary">
          <q-toolbar>
            <q-toolbar-title>修改项目类型</q-toolbar-title>
            <q-btn flat v-close-popup round dense icon="close" />
          </q-toolbar>
        </q-header>
        <q-page-container>
            <div class="q-pa-lg">

    <div class="q-my-sm">
      <q-form @submit="onSubmit" @reset="onReset">
 <div class="col-sm-5 col-xs-12">
            <div class="row items-center" style="margin-bottom:10px">
              <div class="col col-md-3 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">项目类型名称：</div>
              </div>
              <div class="col col-md-8">
                <div class="text-body1"><q-input
                  v-model="lsit"
                  outlined
                  placeholder="请修改项目类型名称"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || '请修改项目类型名称']"
                /></div>
              </div>              
            </div>         
            
 </div>
 <div  class="col-sm-5 col-xs-12" style="text-align:center;padding-top:30px;">
          <q-btn label="确定" v-close-popup color="primary" />
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
      abc: false,      
      nodes_mechanism:[],
      icked_mechanism: [], 
      val: true,
      tab: "dsp",
      tab1: "dzc",
      layout: false,
      layout1: false,      
columns1: [
  {
          name: "xh",
          required: true,
          label: "序号",
          align: "left",
          field: "xh"
        },
        {
          name: "xmlx",
          required: true,
          label: "项目类型",
          align: "left",
          field: "xmlx"
        },
        {
          name: "whsj",
          required: true,
          label: "维护时间",
          align: "left",
          field: "whsj"
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
          xh: "XM01",
          xmlx: "维修项目",
          whsj: "2021-04-20 08:20:00"
        },
        {
          xh: "XM02",
          xmlx: "新建项目",
          whsj: "2021-04-20 08:20:00"
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
      num: null
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