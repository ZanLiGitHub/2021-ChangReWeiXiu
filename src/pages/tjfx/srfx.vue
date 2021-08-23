<template>
  <div class="row q-pa-md">
    <q-breadcrumbs style="width:100%; margin:10px 0;">
      <q-breadcrumbs-el label="首页" icon="home" to="/main"/>
      <q-breadcrumbs-el label="统计分析" icon="moving"/>
      <q-breadcrumbs-el label="收入分析"/>
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
                <q-btn label="时间段搜索" unelevated rounded color="primary" />
          </div>
    <!--筛选条件end-->
     <!--筛选条件start-->
    <div class="q-py-sm">
      <q-select outlined dense v-model="sel1" :options="options1" bg-color="white" style="width:150px"/>
    </div>
    <!--筛选条件end-->

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
             <template #body="props">
              <tr :style="props.rowIndex==0?'background-color: #cecece;':''">
                <td>{{props.row.djbh}}</td>
                <td>{{props.row.skdw}}</td>
                <td>{{props.row.sksj}}</td>
                <td>{{props.row.skje}}</td>
              </tr>
            </template>
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
      sel1: "项目类型",
      abc: false,      
      nodes_mechanism:[],
      icked_mechanism: [], 
      val: true,
      tab: "dsp",
      tab1: "dzc",
      layout: false,
columns1: [
  {
          name: "djbh",
          required: true,
          label: "单据编号",
          align: "left",
          field: "djbh"
        },
        {
          name: "skdw",
          required: true,
          label: "付款单位",
          align: "left",
          field: "skdw"
        },
        {
          name: "dzsj",
          required: true,
          label: "到账时间",
          align: "left",
          field: "dzsj"
        }
        ,
        {
          name: "skje",
          required: true,
          label: "到账金额(元)",
          align: "left",
          field: "skje"
        },
//         {
//             name: "opt",
//             label: "操作",
//             align: "center",
//             columns: true
//         }
      ],
      data1: [      
        {
          djbh: "",
          skdw: "合计金额",
          sksj: "",
          skje: "235,000.00"
        },
        {
          djbh: "012345",
          skdw: "长春市热力(集团)有限责任公司",
          sksj: "2021-04-20 08:00:05",
          skje: "60,000.00"
        }
        ,
        {
          djbh: "012346",
          skdw: "长春市热力(集团)有限责任公司",
          sksj: "2021-04-18 08:00:05",
          skje: "80,000.00"
        }
        ,
        {
          djbh: "012347",
          skdw: "长春市热力(集团)有限责任公司",
          sksj: "2021-04-15 08:00:05",
          skje: "50,000.00"
        }
        ,
        {
          djbh: "012348",
          skdw: "长春市热力(集团)有限责任公司",
          sksj: "2021-04-02 08:00:05",
          skje: "45,000.00"
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
      options1: ["维修项目", "新建项目"],
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