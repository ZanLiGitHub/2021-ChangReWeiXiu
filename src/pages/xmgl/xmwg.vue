<template>
  <div class="q-pa-lg">
    <div class="text-h6 q-pb-md">
      <strong>项目完工</strong>
    </div>
    <div class="q-my-sm">
      <q-form @submit="onSubmit" @reset="onReset">
 <div class="col-sm-5 col-xs-12">
            <div class="row items-center" style="margin-bottom:30px">
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">项目名称</div>
              </div>
              <div class="col col-md-5">
                <q-input outlined dense bg-color="white" color="grey-9" placeholder="请选择项目">
                 <template v-slot:append>
                 <q-icon name="search" @click="xiangmu = true"/>
                 </template>
                </q-input>
              </div>
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">竣工时间</div>
              </div>
              <div class="col col-md-5">
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
                <div class="q-mr-sm" style="font-size:14px; color:#757575">质保金</div>
              </div>
              <div class="col col-md-5">
                <q-input
                  v-model="lsit"
                  outlined
                  placeholder="请输入质保金"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || '请输入质保金']"
                />
              </div>
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">质保期</div>
              </div>
              <div class="col col-md-5">
                <q-input
                  v-model="lsit"
                  outlined
                  placeholder="请输入项目金额"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || '请输入项目金额']"
                />
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:30px">
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">合同资产</div>
              </div>
              <div class="col col-md-5">
                <q-input
                  v-model="lsit"
                  outlined
                  placeholder="请输入合同资产"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || '请输入合同资产']"
                />
              </div>
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">应收账款</div>
              </div>
              <div class="col col-md-5">
                <q-input
                  v-model="lsit"
                  outlined
                  placeholder="计算应收账款"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || '计算应收账款']"
                />
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:30px">
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">开票金额</div>
              </div>
              <div class="col col-md-5">
                <q-input
                  v-model="lsit"
                  outlined
                  placeholder="计算开票金额"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || '计算开票金额']"
                />
              </div>
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">收款金额</div>
              </div>
              <div class="col col-md-5">
                <q-input
                  v-model="lsit"
                  outlined
                  placeholder="计算收款金额"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || '计算收款金额']"
                />
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
    <!-- 附件列表 end-->
    
              </div>
            </div>
 </div>
 <div  class="col-sm-5 col-xs-12" style="text-align:center;">
          <q-btn label="确定" type="submit" color="primary" />
          <q-btn label="清除" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
    </div>
<!--合同信息弹出start-->
  <div class="q-pa-md q-gutter-sm" style="width:100%">
    <q-dialog v-model="xiangmu" >
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
 <!-- 合同表单start -->
 <q-tab-panels v-model="tab" animated style="width:100%;">
      <q-tab-panel name="dsp" style="padding:0px;margin:0px;">
        <div>
          <q-table
            :data="data_xm"
            :columns="columns_xm"
            row-key="id"
            flat
            square
            class="my-sticky-header-table tabletop"
            style="height: 500px;" 
            selection="multiple"
            :selected.sync="selected"             
          >
          <template #body-cell-hxje="props">
            <td>
              <q-input
                  v-model="lsit"
                  outlined
                  placeholder="金额"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || '金额']"
                />
            </td>
          </template>
          
          </q-table>
        </div>
      </q-tab-panel>

    </q-tab-panels>
    <!-- 合同表单 end-->
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
    <!-- 合同信息弹出end -->

  </div>
</template>

<script>
export default {
  data() {
    return {
      lsit: null,
      age: null,
      date: "2021/01/01",
      xiangmu: false,
      sel: null,
      val: true, 
      shape:"yes",
      model: null,
      options1: ["维修项目", "新建项目"],
      options2: ["机械", "人工", "材料"],
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
          name: "xmbh",
          required: true,
          label: "项目编号",
          align: "left",
          field: "xmbh",
          sortable: true
        },
        {
          name: "xmmc",
          required: true,
          label: "项目名称",
          align: "left",
          field: "xmmc",
          sortable: true
        },        
        {
          name: "xmlx",
          required: true,
          label: "项目类型",
          align: "left",
          field: "xmlx",
          sortable: true
        },
        {
          name: "sglx",
          required: true,
          label: "施工类型",
          align: "left",
          field: "sglx",
          sortable: true
        },
        {
          name: "jfmc",
          required: true,
          label: "甲方名称",
          align: "left",
          field: "jfmc",
          sortable: true
        },
        {
          name: "xmkssj",
          required: true,
          label: "项目开始时间",
          align: "left",
          field: "xmkssj",
          sortable: true
        },
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
          id:1,
          xmmc: "项目名称11111",
          xmbh: "ht2021054311",
          xmlx: "维修项目",
          sglx: "机械",
          jfmc: "吉林省XXXXXXX有限公司",
          xmkssj:"2021-06-06",          
        },
        {
          id:2,
          xmmc: "项目名称11111",
          xmbh: "ht2021054311",
          xmlx: "维修项目",
          sglx: "机械",
          jfmc: "吉林省XXXXXXX有限公司",
          xmkssj:"2021-06-06",  
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
