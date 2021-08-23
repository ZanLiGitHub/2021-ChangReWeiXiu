<template>
  <div class="row q-pa-md">
    <!--tab menu start -->
    <q-tabs
      v-model="tab"
      class="#676767"
      active-color="primary"
      indicator-color="primary"
      align="justify"
      narrow-indicator
    >
      <q-tab name="dsp" label="待审批" />
      <q-tab name="sptg" label="审批通过" />
      <q-tab name="bh" label="驳回" />
      <q-tab name="gq" label="过期" />
    </q-tabs>
    <!--tab menu end -->
    <q-space />
    <div class="text-right q-gutter-sm q-pt-sm">
      <q-btn outline text-color="primary" label="借阅申请" class="apply-btn" />
      <q-btn outline text-color="primary" label="档案借阅" class="apply-btn" />
    </div>
    <q-separator />
    <!--tab 切换 start -->
    <q-tab-panels v-model="tab" animated style=" width:100%;  ">
      <q-tab-panel name="dsp" style="padding:10px 0 0 0">
        <div>
          <q-table :data="data" :columns="columns222" row-key="name" flat square class="my-sticky-header-table tabletop"/>
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
     <div class="col-12  q-mb-sm">
    <!--tab 切换 end -->
      <div class="flex q-gutter-sm">
         <!--select start -->
        <q-select
          outlined
          dense
          v-model="model"
          :options="options"
          label="下拉"
          style="min-width: 150px; max-width: 200px"
        />
        <q-select
          outlined
          dense
          v-model="model"
          :options="options"
          label="2020"
          style="min-width: 100px; max-width: 150px"
        />
        <q-select
          outlined
          dense
          v-model="model"
          :options="options"
          label="04"
          style="min-width: 100px; max-width: 150px"
        />
         <!--select end -->
<q-space/>
      <!--btn start -->
        <div class="text-right q-gutter-sm">
        <q-btn label="新增" class="apply-btn bg-primary" text-color="white" @click="add()" />
        <q-btn outline text-color="primary" color="none" label="装册" />
        <q-btn outline text-color="primary" color="none" label="数量装册" />
        <q-btn outline text-color="primary" color="none" label="删除" />
        <!--弹出start-->
        <q-dialog v-model="alert">
          <q-card class="col-7 q-pl-xl">
            <q-toolbar style="border-bottom:1px solid #">
              <q-toolbar-title>
                <span class="text-weight-bold">数据采集</span>
              </q-toolbar-title>
              <q-btn flat round dense icon="close" v-close-popup />
            </q-toolbar>
            <q-card-section class="q-pt-none">
              <div class="q-my-sm">
                <q-form @submit="onSubmit" @reset="onReset">
                  <div class="row items-center">
                    <!--第一列start-->
                    <div class="col-sm-6 col-xs-11">
                      <div class="row items-center">
                        <div class="col-11">
                          <q-input
                            v-model="lsit"
                            outlined
                            placeholder="会计凭证"
                            dense
                            :rules="[ val => val && val.length > 0 || 'Please type something']"
                          >
                            <template v-slot:before class>
                              <span style="width:60px; font-size:14px;">目录</span>
                            </template>
                          </q-input>
                        </div>
                        <div class="col-11">
                          <q-select
                            v-model="sel"
                            dense
                            outlined
                            :options="options"
                            style="margin-bottom:20px;"
                          >
                            <template v-slot:before class>
                              <span style="width:60px; font-size:14px;">密集</span>
                            </template>
                          </q-select>
                        </div>
                        <div class="col-11">
                          <q-input
                            v-model="num"
                            outlined
                            placeholder="请输入凭证页数"
                            dense
                            :rules="[ val => val && val.length > 0 || 'Please type something']"
                          >
                            <template v-slot:before class>
                              <span style="width:60px; font-size:14px;">页数</span>
                            </template>
                          </q-input>
                        </div>
                      </div>
                    </div>
                    <!--第一列end-->
                    <!--第二列start-->
                    <div class="col-sm-6 col-xs-12">
                      <div class="row items-center">
                        <div class="col-11">
                          <q-input
                            v-model="lsit"
                            outlined
                            placeholder="请输入文号"
                            dense
                            :rules="[ val => val && val.length > 0 || 'Please type something']"
                          >
                            <template v-slot:before class>
                              <span style="width:60px; font-size:14px;">文号</span>
                            </template>
                          </q-input>
                        </div>
                        <div class="col-11">
                          <q-input
                            v-model="lsit"
                            outlined
                            placeholder="请输入关键词"
                            dense
                            :rules="[ val => val && val.length > 0 || 'Please type something']"
                          >
                            <template v-slot:before class>
                              <span style="width:60px; font-size:14px;">关键词</span>
                            </template>
                          </q-input>
                        </div>
                        <div class="col-11">
                          <q-input
                            v-model="lsit"
                            outlined
                            placeholder="请输入凭证摘要"
                            dense
                            :rules="[ val => val && val.length > 0 || 'Please type something']"
                          >
                            <template v-slot:before class>
                              <span style="width:60px; font-size:14px;">摘要</span>
                            </template>
                          </q-input>
                        </div>
                        <div class="col-11">
                          <q-input
                            v-model="lsit"
                            outlined
                            placeholder="请输入企业联系人"
                            dense
                            :rules="[ val => val && val.length > 0 || 'Please type something']"
                          >
                            <template v-slot:before class>
                              <span style="width:60px; font-size:14px;">责任人</span>
                            </template>
                          </q-input>
                        </div>
                        <div class="col-11">
                          <q-select
                            v-model="sel"
                            dense
                            outlined
                            :options="options1"
                            style="margin-bottom:20px;"
                          >
                            <template v-slot:before class>
                              <span style="width:60px; font-size:14px;">来源</span>
                            </template>
                          </q-select>
                        </div>
                        <div class="col-11">
                          <q-select
                            v-model="sel"
                            dense
                            outlined
                            :options="options2"
                            style="margin-bottom:20px;"
                          >
                            <template v-slot:before class>
                              <span style="width:60px;  font-size:14px;">储存形式</span>
                            </template>
                          </q-select>
                        </div>
                      </div>
                    </div>
                    <!--第二列end-->
                  </div>

                  <div class="row items-center">
                    <div class="col-10">
                      <q-input
                        type="textarea"
                        v-model="lsit"
                        outlined
                        placeholder="请输入规范内容"
                        dense
                        :rules="[ val => val && val.length > 0 || '请输入目录内容']"
                      >
                        <template v-slot:before class>
                          <span style="width:60px;  font-size:14px;">目录</span>
                        </template>
                      </q-input>
                    </div>
                  </div>
                  <q-toggle v-model="accept" label="I accept the license and terms" />
                  <div>
                    <q-btn label="确定" type="submit" color="primary" />
                    <q-btn label="清楚" type="reset" color="primary" flat class="q-ml-sm" />
                  </div>
                </q-form>
              </div>
            </q-card-section>
          </q-card>
        </q-dialog>
        <!--弹出end-->
      </div>
       <!--btn end -->
    </div>
    
     </div>
      <!--bottom tab start --> 
    <q-tabs
      v-model="tab1"
      class="#676767"
      active-color="primary"
      indicator-color="primary"
      align="justify"
      narrow-indicator
    >
      <q-tab name="dzc" label="待装册（0）" />
      <q-tab name="yzc" label="已装册/待归档（0）" />
      <q-tab name="ygd" label="已归档（0）" />
    </q-tabs>
    <q-separator />
    <q-tab-panels v-model="tab1" animated style=" width:100%;  ">
      
      <!--待装册 start-->
      <q-tab-panel name="dzc" style="padding:10px 0 0 0">
            <q-table :data="data" :columns="columns222" row-key="name" flat square class="my-sticky-header-table tabletop"/>
      </q-tab-panel>
      <!--待装册 end-->
       <!--已装册 start-->
      <q-tab-panel name="yzc">
        12345667
         <q-table :data="data" :columns="columns222" row-key="name" flat square class="my-sticky-header-table tabletop" />
      </q-tab-panel>
      <!--已装册 end-->
      <!--已归档 start-->
      <q-tab-panel name="ygd" style="padding:10px 0 0 0">
       已归档
         <q-table :data="data" :columns="columns222" row-key="name" flat square class="my-sticky-header-table tabletop"/>
      </q-tab-panel>
      <!--已归档 end-->
     </q-tab-panels>  
  </div>
</template>
<style lang="sass">

</style>
<script>
export default {
  name: "",
  data() {
    return {
      val: true,
      tab: "dsp",
      tab1: "dzc",
      columns: [
        {
          name: "company",
          required: true,
          label: "单位",
          align: "left",
          field: "company",
          background: "bg-teal"
        },
        {
          name: "orderno",
          required: true,
          label: "申请单号",
          align: "left",
          field: "orderno"
        },
        {
          name: "applydate",
          required: true,
          label: "申请日期",
          align: "left",
          field: "applydate",
          sortable: true
        },
        {
          name: "borrowingdata",
          required: true,
          label: "借阅日期",
          align: "left",
          field: "borrowingdata",
          sortable: true
        },
        {
          name: "applyreason",
          required: true,
          label: "申请原因",
          align: "left",
          field: "applyreason"
        },
        {
          name: "approvalstatus",
          required: true,
          label: "审批状态",
          align: "left",
          field: "approvalstatus"
        },
        {
          name: "approvalopinions",
          required: true,
          label: "审批意见",
          align: "left",
          field: "approvalopinions"
        }
      ],
      columns222: [
        {
          name: "company",
          required: true,
          label: "单位",
          align: "left",
          field: "company",
          background: "bg-teal"
        },
        {
          name: "orderno",
          required: true,
          label: "申请单号",
          align: "left",
          field: "orderno"
        },
        {
          name: "applydate",
          required: true,
          label: "申请日期",
          align: "left",
          field: "applydate",
          sortable: true
        },
        {
          name: "borrowingdata",
          required: true,
          label: "借阅日期",
          align: "left",
          field: "borrowingdata",
          sortable: true
        },
        {
          name: "applyreason",
          required: true,
          label: "申请原因",
          align: "left",
          field: "applyreason"
        },
        {
          name: "approvalstatus",
          required: true,
          label: "审批状态",
          align: "left",
          field: "approvalstatus"
        },
        {
          name: "approvalopinions",
          required: true,
          label: "审批意见",
          align: "left",
          field: "approvalopinions"
        }
      ],
      data: [
        {
          company: "长春广电网络-基准账簿",
          orderno: "CY202008230002",
          applydate: "2020-08-23",
          borrowingdata: "2020-08-22-2020-08-31",
          applyreason: "qq1",
          approvalstatus: "已审批",
          approvalopinions: "14%"
        }
      ],
      model: null,
      options: ["税务云", "税务云", "税务云", "税务云", "税务云"],
      alert: false,
      lsit: null,
      age: null,
      date: "2020/01/15",
      accept: false,
      sel: null,
      val: true,
      options: ["一级", "二级", "三级", "四级"],
      options1: ["手工采集", "财务系统"],
      options2: ["电子", "电子+纸质"],
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
    }
  }
};
</script>
