<template>
  <div class="q-pa-lg">
    
    <div class="q-my-sm">
      <q-form @submit="onSubmit" @reset="onReset">
         <div class="col-sm-5 col-xs-12">
           <div class="row items-center" style="margin-bottom:30px">
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">选择合同</div>
              </div>
              <div class="col col-md-5">
                <q-input outlined dense bg-color="white" color="grey-9" placeholder="选择合同">
                 <template v-slot:append>
                 <q-icon name="search" @click="xiangmu = true"/>
                 </template>
                </q-input>
              </div>
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">开票时间</div>
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
              <div class="col col-md-6">
                <div class="text-h6 q-pb-md">
                  <strong>购买方详细信息</strong>
                </div>
              </div>
              <div class="col col-md-6">
                <div class="text-right">
                  <q-btn outline text-color="blue-8" label="购买方详细信息" class="apply-btn" style="margin-bottom:10px;" @click="gmf = true"/>
                </div>
              </div>
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">名称</div>
              </div>
              <div class="col col-md-5">
                <q-input outlined dense bg-color="white" color="grey-9" placeholder="名称">
                 <template v-slot:append>
                 <q-icon name="search" @click="gmf = true"/>
                 </template>
                </q-input>
              </div>
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">纳税人识别号</div>
              </div>
              <div class="col col-md-5">
                <q-input
                  v-model="lsit"
                  outlined
                  placeholder="购买方纳税人识别号"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || '购买方纳税人识别号']"
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
                  placeholder="购买方地址"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || '购买方地址']"
                />
              </div>
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">电话</div>
              </div>
              <div class="col col-md-5">
                <q-input
                  v-model="lsit"
                  outlined
                  placeholder="购买方电话"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || '购买方电话']"
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
                  placeholder="购买方开户行"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || '购买方开户行']"
                />
              </div>
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">账号</div>
              </div>
              <div class="col col-md-5">
                <q-input
                  v-model="lsit"
                  outlined
                  placeholder="购买方账号"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || '购买方账号']"
                />
              </div>
            </div>
              <div class="text-h6 q-pb-md">
                <strong>发票内容</strong>
              </div>
            <div class="row items-center" style="margin-bottom:30px">
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">发票代码</div>
              </div>
              <div class="col col-md-5">
                <q-input
                  v-model="lsit"
                  outlined
                  placeholder="发票代码"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || '发票代码']"
                />
              </div>
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">发票号码</div>
              </div>
              <div class="col col-md-5">
                <q-input
                  v-model="lsit"
                  outlined
                  placeholder="发票号码"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || '发票号码']"
                />
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:30px">
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">数量</div>
              </div>
              <div class="col col-md-5">
                <q-input
                  v-model="lsit"
                  outlined
                  placeholder="数量"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || '数量']"
                />
              </div>
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">单价</div>
              </div>
              <div class="col col-md-5">
                <q-input
                  v-model="lsit"
                  outlined
                  placeholder="单价"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || '单价']"
                />
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:30px">
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">税率</div>
              </div>
              <div class="col col-md-5">
                <q-input
                  v-model="lsit"
                  outlined
                  placeholder="税率"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || '税率']"
                />
              </div>
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">不含税价</div>
              </div>
              <div class="col col-md-5">
                <q-input
                  v-model="lsit"
                  outlined
                  placeholder="不含税价"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || '不含税价']"
                />
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:30px">
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">税价合计</div>
              </div>
              <div class="col col-md-5">
                <q-input
                  v-model="lsit"
                  outlined
                  placeholder="税价合计"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || '税价合计']"
                />
              </div>
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575"></div>
              </div>
              <div class="col col-md-5">
                
              </div>
            </div>
            
            <div class="row items-center" style="margin-bottom:30px">
              <div class="col col-md-6">
                <div class="text-h6 q-pb-md">
                  <strong>销售方详细信息</strong>
                </div>
              </div>
              <div class="col col-md-6">
                <div class="text-right">
                  <q-btn outline text-color="blue-8" label="选择已有销售方" class="apply-btn" style="margin-bottom:10px;" @click="xsf = true"/>
                </div>
              </div>
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">名称</div>
              </div>
              <div class="col col-md-5">
                <q-input outlined dense bg-color="white" color="grey-9" placeholder="销售方名称">
                 <template v-slot:append>
                 <q-icon name="search" @click="xsf = true"/>
                 </template>
                </q-input>
              </div>
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">纳税人识别号</div>
              </div>
              <div class="col col-md-5">
                <q-input
                  v-model="lsit"
                  outlined
                  placeholder="销售方纳税人识别号"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || '销售方纳税人识别号']"
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
                  placeholder="销售方地址"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || '销售方地址']"
                />
              </div>
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">电话</div>
              </div>
              <div class="col col-md-5">
                <q-input
                  v-model="lsit"
                  outlined
                  placeholder="销售方电话"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || '销售方电话']"
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
                  placeholder="销售方开户行"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || '销售方开户行']"
                />
              </div>
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">账号</div>
              </div>
              <div class="col col-md-5">
                <q-input
                  v-model="lsit"
                  outlined
                  placeholder="销售方账号"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || '销售方账号']"
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
            <q-toolbar-title>合同列表</q-toolbar-title>
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
    <!--购买方弹出start-->
  <div class="q-pa-md q-gutter-sm" style="width:100%">
    <q-dialog v-model="gmf" >
      <q-layout view="Lhh lpR fff" container class="bg-white" style="width:80%; max-width:80%;height:80%;">
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
          <q-btn label="关闭" v-close-popup color="primary" />
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
      <q-layout view="Lhh lpR fff" container class="bg-white" style="width:80%; max-width:80%;height:80%;">
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
          <q-btn label="关闭"  v-close-popup color="primary" />
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
      selected:[],
      lsit: null,
      age: null,
      date: "2021/01/01",
      accept: false,
      sel: null,
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
          name: "hxje",
          required: true,
          label: "核销金额(元)",
          align: "left",
          field: "hxje",
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
          name: "jf",
          required: true,
          label: "甲方",
          align: "left",
          field: "jf"
        },
        {
          name: "yf",
          required: true,
          label: "乙方",
          align: "left",
          field: "yf"
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
        },
        {
          name: "je",
          required: true,
          label: "金额(元)",
          align: "left",
          field: "je"
        },
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
          id:1,
          htbh: "ht2021054311",
          jf: "吉林省XXXXXXX有限公司",
          yf: "吉林省XXXXXXX有限公司",
          xmmc: "项目名称11111",
          qdrq:"2021-06-06",
          je: "123,154.00",
        },
        {
          id:2,
          htbh: "ht2021054322",
          jf: "吉林省XXXXXXX有限公司",
          yf: "吉林省XXXXXXX有限公司",
          xmmc: "项目名称222",
          qdrq:"2021-06-06",
          je: "123,154.00",
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
