<template>
  <div class="row q-pa-md">
    <q-breadcrumbs style="width:100%; margin:10px 0;">
      <q-breadcrumbs-el label="首页" icon="home" to="/main"/>
      <q-breadcrumbs-el label="系统设置" icon="miscellaneous_services"/>
      <q-breadcrumbs-el label="历史凭证"/>
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
    </div>
    <!--筛选条件end-->
    <q-space />
   
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
      abc: false,      
      nodes_mechanism:[],
      icked_mechanism: [], 
      val: true,
      tab: "dsp",
      tab1: "dzc",
      layout: false,
      
columns1: [
  {
          name: "pzbh",
          required: true,
          label: "凭证编号",
          align: "left",
          field: "pzbh"
        },
        {
          name: "xmmc",
          required: true,
          label: "项目名称",
          align: "left",
          field: "xmmc"
        },
        {
          name: "jfmc",
          required: true,
          label: "往来单位",
          align: "left",
          field: "jfmc"
        },
        {
          name: "jfzzkm",
          required: true,
          label: "借方总帐科目",
          align: "left",
          field: "jfzzkm",
          background: "bg-teal"
        },
        {
          name: "jfmxkm",
          required: true,
          label: "借方明细科目",
          align: "left",
          field: "jfmxkm",
          background: "bg-teal"
        },
        {
          name: "dfzzkm",
          required: true,
          label: "贷方总帐科目",
          align: "left",
          field: "dfzzkm",
          background: "bg-teal"
        },
        {
          name: "dfmxkm",
          required: true,
          label: "贷方明细科目",
          align: "left",
          field: "dfmxkm",
          background: "bg-teal"
        },
        {
          name: "je",
          required: true,
          label: "金额（元）",
          align: "left",
          field: "je"
        },
        {
          name: "rq",
          required: true,
          label: "日期",
          align: "left",
          field: "rq"
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
          pzbh: "a000123",
          xmmc: "XXX项目",
          jfmc: "吉林省XXXX有限公司",          
          jfzzkm: "借方总帐科目",
          jfmxkm: "借方明细科目",
          dfzzkm: "贷方总帐科目",
          dfmxkm: "贷方明细科目",
          rq: "2021-04-20",
          je: "1200,000.00"
        },
        {
          pzbh: "a000125",
          xmmc: "XXX项目",
          jfmc: "吉林省XXXX有限公司",  
          jfzzkm: "借方总帐科目",
          jfmxkm: "借方明细科目",
          dfzzkm: "贷方总帐科目",
          dfmxkm: "贷方明细科目",
          rq: "2021-04-20",
          je: "1200,000.00"
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