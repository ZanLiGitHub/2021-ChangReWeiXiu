<template>
  <div class="row q-pa-md">
    <q-breadcrumbs style="width:100%; margin:10px 0;">
      <q-breadcrumbs-el label="首页" icon="home" to="/main"/>
      <q-breadcrumbs-el label="统计分析" icon="moving"/>
      <q-breadcrumbs-el label="关联方清单"/>
    </q-breadcrumbs>
    <div class="q-py-sm" style="width:400px">
            <q-input outlined dense bg-color="white" color="grey-9" placeholder="请输入您要搜索的关键字">
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
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
          field: "bm"
        },
        {
          name: "mc",
          required: true,
          label: "名称",
          align: "left",
          field: "mc",
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
          name: "lxdh",
          required: true,
          label: "联系电话",
          align: "left",
          field: "lxr"
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
          bm: "GLF01",
          mc: "吉林省XXXX有限公司",
          lxr: "张明明",
          lxdh: "12345678900",
          khh: "中国工商银行",
          zh: "440000123456789",
        },
        {
          bm: "GLF02",
          mc: "吉林省XXXX有限公司",
          lxr: "李天天",
          lxdh: "12345678901",
          khh: "中国工商银行",
          zh: "440000123456780",
        }
      ],
      model: null,
      alert: false,
      lsit: null,
      age: null,
      accept: false,
      sel: null,
      val: true,
      num: null,
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