<template>
  <div class="row q-pa-md">
    <q-breadcrumbs style="width:100%; margin:10px 0;">
      <q-breadcrumbs-el label="首页" icon="home" to="/main"/>
      <q-breadcrumbs-el label="单据管理" icon="table_view"/>
      <q-breadcrumbs-el label="收款查询"/>
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
    <div class="text-right q-gutter-sm q-pt-sm">
      <q-btn outline text-color="blue-8" label="新建收款单" class="apply-btn" to="/fksqd"/>
    </div>
    <q-separator />
    <!--tab 切换 start -->
    <q-tab-panels v-model="tab" animated style="width:100%;">
      <q-tab-panel name="dsp" style="padding:10px 0 0 0;">
        <div>
         <q-table
            :data="data1"
            :columns="columns1"           
            flat
            square
            class="my-sticky-header-table tabletop"
            style="height:auto;"          
          >
           <!-- 操作按钮注释start -->
            <template #body-cell-opt="props">
              <td style="text-align: center;">
                <q-btn icon="create" flat round dense color="blue" to="/sk_xg">
                  <q-tooltip>修改</q-tooltip>
                </q-btn> 
                <q-btn icon="delete_forever" flat round dense color="blue" @click="layout = true">
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
      selected:[],
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
      pingzheng: false,
     
columns1: [  
       {
          name: "ht",
          required: true,
          label: "合同",
          align: "left",
          field: "ht"
        },
        {
          name: "fkdw",
          required: true,
          label: "付款单位",
          align: "left",
          field: "fkdw"
        },
        {
          name: "skdw",
          required: true,
          label: "收款单位",
          align: "left",
          field: "skdw"
        },
        {
          name: "fksj",
          required: true,
          label: "收款时间",
          align: "left",
          field: "fksj"
        },
        {
          name: "fkje",
          required: true,
          label: "收款金额(元)",
          align: "left",
          field: "fkje"
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
          ht: "XXXX项目合同",
          fkdw:"吉林省XXXX有限公司",
          skdw: "长春市热力(集团)有限责任公司",
          fksj: "2021-05-01",
          fkje: "12,000.00"
        },
        {
          ht: "XXXX项目合同",
          fkdw:"长春市XXXX有限公司",
          skdw: "长春市热力(集团)有限责任公司",
          fksj: "2021-04-20",
          fkje: "60,000.00"
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