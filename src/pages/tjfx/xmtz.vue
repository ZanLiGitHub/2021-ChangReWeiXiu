<template>
  <div class="row q-pa-md">
    <q-breadcrumbs style="width:100%; margin:10px 0;">
      <q-breadcrumbs-el label="首页" icon="home" to="/main"/>
      <q-breadcrumbs-el label="统计分析" icon="moving"/>
      <q-breadcrumbs-el label="项目台账"/>
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
      <q-select outlined dense v-model="sel3" :options="options3" bg-color="white" style="width:150px"/>
      <q-select outlined dense v-model="sel4" :options="options4" bg-color="white" style="width:150px"/>
      <q-select outlined dense v-model="sel5" :options="options5" bg-color="white" style="width:150px"/>
    </div>
    <!--筛选条件end-->
    <q-space />
    <!-- <div class="text-right q-gutter-sm q-pt-sm">
      <q-btn outline text-color="blue-8" label="付款" class="apply-btn" to="/fk"/>
    </div> -->
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
            <q-toolbar-title>查看项目台账</q-toolbar-title>
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
                <div class="text-body1">HT01263</div>
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
                <div class="q-mr-sm" style="font-size:14px; color:#757575">项目年度：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">2021年</div>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">合同名称：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">XXXXX合同名称</div>
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
                <div class="q-mr-sm" style="font-size:14px; color:#757575">签订时间：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">2021-01-01</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px">
              
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">竣工时间：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">2021-06-06</div>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">合同期限：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">6个月</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px">
              
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">工程内容：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">XXXX的工程</div>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">客户名称：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">长春市热力(集团)有限责任公司</div>
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
                <div class="q-mr-sm" style="font-size:14px; color:#757575">工程所在地：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">长春市朝阳区</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px">
              
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">工程地点：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">南湖大路</div>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">质保期：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">1年</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px">
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">质保金：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">5,500.00元</div>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">付款方式:</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">分期</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px">
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">承包范围：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">范围说明</div>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">合同金额:</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">400,000.00元</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px">
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">合同补充金额：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">5,000.00元</div>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">预算金额:</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">300,000.00元</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px">
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">预算补充金额：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">XXXX合同</div>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">结算金额:</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">0元</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px">
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">应收账款：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">0元</div>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">合同资产:</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">400,000.00元</div>
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
                <div class="q-mr-sm" style="font-size:14px; color:#757575">收款金额:</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">300,000.00元</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px">
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">应收余额：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">0元</div>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">合同负债:</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">0元</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px">
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">税率：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">13%</div>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">主营业务收入:</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">100,000.00元</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px">
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">主营业务成本：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">20,000.00元</div>
              </div>
              <div class="col col-md-3 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">合同履约成本：材料费:</div>
              </div>
              <div class="col col-md-3">
                <div class="text-body1">30,000.00元</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px">
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">劳务费：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">10,000.00元</div>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">机械费:</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">10,000.00元</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px">
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">间接费：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">10,000.00元</div>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">安全费:</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">10,000.00元</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px">
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">工程毛利：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">10,000.00元</div>
              </div>
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">毛利率:</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">5%</div>
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:10px">
              <div class="col col-md-2 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">完工百分比：</div>
              </div>
              <div class="col col-md-4">
                <div class="text-body1">90%</div>
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
      sel3: "项目类型",
      sel4: "施工类型",
      sel5: "统计类型",
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
          name: "xmnd",
          required: true,
          label: "项目年度",
          align: "left",
          field: "xmnd"
        },
        {
          name: "htmc",
          required: true,
          label: "合同名称",
          align: "left",
          field: "htmc"
        },
        {
          name: "htlx",
          required: true,
          label: "合同类型",
          align: "left",
          field: "htlx"
        },
        {
          name: "qdsj",
          required: true,
          label: "签订时间",
          align: "left",
          field: "qdsj"
        },
        {
          name: "jgsj",
          required: true,
          label: "竣工时间",
          align: "left",
          field: "jgsj"
        },
        {
          name: "htqx",
          required: true,
          label: "合同期限",
          align: "left",
          field: "htqx"
        },
        {
          name: "gcnr",
          required: true,
          label: "工程内容",
          align: "left",
          field: "gcnr"
        },
        {
          name: "khmc",
          required: true,
          label: "客户名称",
          align: "left",
          field: "khmc"
        },
        {
          name: "sfglf",
          required: true,
          label: "是否关联方",
          align: "left",
          field: "sfglf"
        },
        {
          name: "gcszd",
          required: true,
          label: "工程所在地",
          align: "left",
          field: "gcszd"
        },
        {
          name: "gcdd",
          required: true,
          label: "工程地点",
          align: "left",
          field: "gcdd"
        },
        {
          name: "zbq",
          required: true,
          label: "质保期",
          align: "left",
          field: "zbq"
        },
        {
          name: "zbj",
          required: true,
          label: "质保金",
          align: "left",
          field: "zbj"
        },
        {
          name: "fkfs",
          required: true,
          label: "付款方式",
          align: "left",
          field: "fkfs"
        },
        {
          name: "cbfw",
          required: true,
          label: "承包范围",
          align: "left",
          field: "cbfw"
        },
        {
          name: "htje",
          required: true,
          label: "合同金额",
          align: "left",
          field: "htje"
        },
        {
          name: "htbcje",
          required: true,
          label: "合同补充金额",
          align: "left",
          field: "htbcje"
        },
        {
          name: "ysje",
          required: true,
          label: "预算金额",
          align: "left",
          field: "ysje"
        },
        {
          name: "ysbcje",
          required: true,
          label: "预算补充金额",
          align: "left",
          field: "ysbcje"
        },
        {
          name: "jsje",
          required: true,
          label: "结算金额",
          align: "left",
          field: "jsje"
        },
        {
          name: "yszk",
          required: true,
          label: "应收账款",
          align: "left",
          field: "yszk"
        },
        {
          name: "htzc",
          required: true,
          label: "合同资产",
          align: "left",
          field: "htzc"
        },
        {
          name: "kpje",
          required: true,
          label: "开票金额",
          align: "left",
          field: "kpje"
        },
        {
          name: "skje",
          required: true,
          label: "收款金额",
          align: "left",
          field: "skje"
        },
        {
          name: "ysye",
          required: true,
          label: "应收余额",
          align: "left",
          field: "ysye"
        },
        {
          name: "htfz",
          required: true,
          label: "合同负债",
          align: "left",
          field: "htfz"
        },
        {
          name: "sl",
          required: true,
          label: "税率",
          align: "left",
          field: "sl"
        },
        {
          name: "zyywsr",
          required: true,
          label: "主营业务收入",
          align: "left",
          field: "zyywsr"
        },
        {
          name: "zyywcb",
          required: true,
          label: "主营业务成本",
          align: "left",
          field: "zyywcb"
        },
        {
          name: "htlycb",
          required: true,
          label: "合同履约成本：材料费",
          align: "left",
          field: "htlycb"
        },
        {
          name: "lwf",
          required: true,
          label: "劳务费",
          align: "left",
          field: "lwf"
        },
        {
          name: "jxf",
          required: true,
          label: "机械费",
          align: "left",
          field: "jxf"
        },
        {
          name: "jjf",
          required: true,
          label: "间接费",
          align: "left",
          field: "jjf"
        },
        {
          name: "aqf",
          required: true,
          label: "安全费",
          align: "left",
          field: "aqf"
        },
        {
          name: "gcml",
          required: true,
          label: "工程毛利",
          align: "left",
          field: "gcml"
        },
        {
          name: "mll",
          required: true,
          label: "毛利率",
          align: "left",
          field: "mll"
        },
        {
          name: "wgbfb",
          required: true,
          label: "完工百分比",
          align: "left",
          field: "wgbfb"
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
          htmc: "XXXX合同",
          htlx: "类型1",
          qdsj: "2021-01-01",
          jgsj: "2021-06-06",
          htqx: "2021-06-06",
          gcnr: "XXXX的工程",
          khmc: "长春市热力(集团)有限责任公司",
          sfglf: "是",
          gcszd: "长春市朝阳区",
          gcdd: "南湖大路",
          zbq: "1年",
          zbj: "5,500.00元",
          fkfs: "分期",
          cbfw: "范围说明",
          htje: "400,000.00元",
          htbcje: "5,000.00元",
          ysje: "300,000.00元",
          ysbcje: "XXXX合同",
          jsje: "0元",
          yszk: "0元",
          htzc: "400,000.00元",
          htmc: "XXXX合同",
          kpje: "300,000.00元",
          skje: "300,000.00元",
          ysye: "0元",
          htfz: "0元",
          sl: "13%",
          zyywsr: "100,000.00元",
          zyywcb: "20,000.00元",
          htlycb: "30,000.00元",
          lwf: "10,000.00元",
          jxf: "10,000.00元",
          jjf: "10,000.00元",
          aqf: "10,000.00元",
          gcml: "10,000.00元",
          mll: "5%",
          wgbfb: "90%"
        },
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
      options3: ["维修项目", "新建项目"],
      options4: ["机械", "人工", "材料"],
      options5: ["全部", "财务", "工程部"],
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