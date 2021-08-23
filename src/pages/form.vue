<template>
  <div class="q-pa-lg">
    <div class="text-h6 q-pb-md">
      <strong>新建项目</strong>
    </div>
    <div class="q-my-sm">
      <q-form @submit="onSubmit" @reset="onReset">
 <div class="col-sm-5 col-xs-12">
            <div class="row items-center" style="margin-bottom:30px">
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">项目名称</div>
              </div>
              <div class="col col-md-5">
                <q-input
                  v-model="lsit"
                  outlined
                  placeholder="请输入项目名称"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || 'Please type something']"
                />
              </div>
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">项目编号</div>
              </div>
              <div class="col col-md-5">
                <q-input
                  v-model="lsit"
                  outlined
                  placeholder="请输入项目编号"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || 'Please type something']"
                />
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:30px">
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">项目类型</div>
              </div>
              <div class="col col-md-5">
                <q-select
                  v-model="sel"
                  dense
                  outlined
                  :options="options1"
                 />
              </div>
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">施工类型</div>
              </div>
              <div class="col col-md-5">
                <q-select
                  v-model="sel"
                  dense
                  outlined
                  :options="options2"
                 />
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:30px">
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">甲方名称</div>
              </div>
              <div class="col col-md-5">
                <q-input
                  v-model="lsit"
                  outlined
                  placeholder="请输入甲方名称"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || 'Please type something']"
                />
              </div>
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">乙方名称</div>
              </div>
              <div class="col col-md-5">
                <q-input
                  v-model="lsit"
                  outlined
                  placeholder="请输入乙方名称"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || 'Please type something']"
                />
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:30px">
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">项目开始时间</div>
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
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">项目结束时间</div>
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
                <div class="q-mr-sm" style="font-size:14px; color:#757575">项目负责人</div>
              </div>
              <div class="col col-md-5">
                <q-input
                  v-model="lsit"
                  outlined
                  placeholder="请输入项目负责人"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || 'Please type something']"
                />
              </div>
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">项目金额</div>
              </div>
              <div class="col col-md-5">
                <q-input
                  v-model="lsit"
                  outlined
                  placeholder="请输入项目金额"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || 'Please type something']"
                />
              </div>
            </div>
            <div class="row items-center" style="margin-bottom:30px">
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">选择关联</div>
              </div>
              <div class="col col-md-11">
                <q-radio v-model="val" label="是" /><q-radio v-model="val" label="否" />
              </div>
              
            </div>
            <div class="row items-center">
              <div class="col col-md-1 text-right">
                <span class="q-mr-sm" style="font-size:14px; color:#757575">项目简介</span>
              </div>
              <div class="col col-md-11">
              <q-input
              type="textarea"
              v-model="lsit"
              outlined
              placeholder="请输入项目简介"
              dense
              :rules="[ val => val && val.length > 0 || '请输入项目简介']"
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      lsit: null,
      age: null,
      date: "2021/01/01",
      accept: false,
      sel: null,
      val: true,
      model: null,
      options: ["一级", "二级", "三级", "四级"],
      options1: ["项目类型1", "项目类型2","项目类型3"],
      options2: ["施工类型1", "施工类型2", "施工类型3"],
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
