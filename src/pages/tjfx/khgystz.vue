<template>
  <div class="row q-pa-md">
    <q-breadcrumbs style="width:100%; margin:10px 0;">
      <q-breadcrumbs-el label="首页" icon="home" to="/main"/>
      <q-breadcrumbs-el label="统计分析" icon="moving"/>
      <q-breadcrumbs-el label="客户/供应商台账" />
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
          </q-table>
        </div>
      </q-tab-panel>
    </q-tab-panels>
    <!--tab 切换 end -->
    
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
        }
      ],
      data: [
        {
          bm: "kh01",
          lx: "客户",
          mc: "吉林省XXXXXXXX有限公司",
          sfglf: "是",
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