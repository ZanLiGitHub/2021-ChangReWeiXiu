<template>
  <div class="row q-pa-md">
    <q-breadcrumbs style="width:100%; margin:10px 0;">
      <q-breadcrumbs-el label="首页" icon="home" to="/main"/>
      <q-breadcrumbs-el label="统计分析" icon="moving"/>
      <q-breadcrumbs-el label="客户台账"/>
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
<!--             <template #body-cell-opt="props">
              <td style="text-align: center;">
                <q-btn icon="create" flat round dense color="blue" to="/fk">
                  <q-tooltip>修改</q-tooltip>
                </q-btn>             
                
                <q-btn icon="delete_forever" flat round dense color="blue">
                  <q-tooltip>删除</q-tooltip>
                </q-btn>
              </td>
            </template> -->
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
      columns: [
        {
          name: "khbm",
          required: true,
          label: "客户编码",
          align: "left",
          field: "khbm"
        },
        {
          name: "khmc",
          required: true,
          label: "客户名称",
          align: "left",
          field: "khmc",
          sortable: true
        },
        {
          name: "sfglf",
          required: true,
          label: "是否关联方",
          align: "left",
          field: "sfglf"
        },
        {
          name: "nbjy",
          required: true,
          label: "内部交易",
          align: "left",
          field: "nbjy"
        }
        ,
        {
          name: "nsrsbh",
          required: true,
          label: "纳税人识别号",
          align: "left",
          field: "nsrsbh"
        }
        ,
        {
          name: "dz",
          required: true,
          label: "地址",
          align: "left",
          field: "dz"
        }
        ,
        {
          name: "dh",
          required: true,
          label: "电话",
          align: "left",
          field: "dh"
        }
        ,
        {
          name: "khh",
          required: true,
          label: "开户行",
          align: "left",
          field: "khh"
        }
        ,
        {
          name: "zh",
          required: true,
          label: "账号",
          align: "left",
          field: "zh"
        }
        ,
        {
          name: "yjdz",
          required: true,
          label: "邮寄地址",
          align: "left",
          field: "yjdz"
        }
        ,
        {
          name: "lxr",
          required: true,
          label: "联系人",
          align: "left",
          field: "lxr"
        }
        ,
        {
          name: "sj",
          required: true,
          label: "手机",
          align: "left",
          field: "sj"
        }
      ],
      data: [
        {
          khbm: "KH01",
          khmc: "长春市热力(集团)有限责任公司",
          sfglf: "否",
          nbjy: "内部交易",
          nsrsbh: "444222666000",
          dz: "吉林省长春市",
          dh: "0431-12345678",
          khh: "中国工商银行",
          zh: "444222666000",
          yjdz: "吉林省长春市人民大街",
          lxr: "赵明明",
          sj: "12345678910"
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