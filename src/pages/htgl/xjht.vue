<template>
  <div class="q-pa-lg">
    <!--页面标题-->
    <div class="text-h6 q-pb-md">
      <strong>新建合同</strong>
    </div>
    <!--页面内容-->
    <div class="q-my-sm">
      <!--页面表单-->
      <q-form @submit="onSubmit" @reset="onReset">
        <!--表单内容-->
        <div class="col-sm-5 col-xs-12">
          <!--第一行：合同编号，选择关联-->
          <div class="row items-center" style="margin-bottom:30px">
            <div class="col col-md-1 text-right">
              <div class="q-mr-sm" style="font-size:14px; color:#757575">合同编号</div>
            </div>
            <div class="col col-md-5">
              <q-input
                v-model="inputs.htbh"
                outlined
                placeholder="请输入合同编号"
                style="margin-bottom:-20px;"
                dense
                :rules="[ val => val && val.length > 0 || '请输入合同编号']"
              />
            </div>
            <div class="col col-md-1 text-right">
              <div class="q-mr-sm" style="font-size:14px; color:#757575">选择关联</div>
            </div>
            <div class="col col-md-5">
              <q-radio v-model="inputs.xzgl" val="是" label="是"/>
              <q-radio v-model="inputs.xzgl" val="否" label="否"/>
            </div>
          </div>
          <!--第二行：项目名称，合同金额-->
          <div class="row items-center" style="margin-bottom:30px">
            <div class="col col-md-1 text-right">
              <div class="q-mr-sm" style="font-size:14px; color:#757575">项目名称</div>
            </div>
            <div class="col col-md-5">
              <q-input
                v-model="inputs.xmmc"
                outlined
                @keyup="searchProject"
                placeholder="请输入项目名称"
                style="margin-bottom:-20px;"
                dense
                :rules="[val => val && val.length > 0 && val.replace(/\s/g, '').length!==0|| '请输入项目名称']"
                :shadow-text="inputShadowText"
                @keydown="processInputFill"
                @focus="processInputFill">
                <template v-slot:append >
                  <q-icon name="search" @click="popupProjectWindow"/>
                </template>
              </q-input>
            </div>
            <div class="col col-md-1 text-right">
              <div class="q-mr-sm" style="font-size:14px; color:#757575">合同金额(元)</div>
            </div>
            <div class="col col-md-5">
              <q-input
                v-model="inputs.htje"
                outlined
                placeholder="请输入合同金额"
                style="margin-bottom:-20px;"
                dense
                :rules="[ val => val && val.length > 0 || '请输入合同金额']"
              />
            </div>
          </div>
          <!--第三行：甲方名称，甲方负责人-->
          <div class="row items-center" style="margin-bottom:30px">
            <div class="col col-md-1 text-right">
              <div class="q-mr-sm" style="font-size:14px; color:#757575">甲方名称</div>
            </div>
            <div class="col col-md-5">
              <q-input :rules="[ val => val && val.length > 0 || '请输入甲方名称']" style="margin-bottom: -20px" v-model="inputs.jfmc" outlined dense bg-color="white" color="grey-9" placeholder="请输入甲方名称">
                <template v-slot:append>
                  <q-icon name="search" @click="popupJFWindow"/>
                </template>
              </q-input>
            </div>
            <div class="col col-md-1 text-right">
              <div class="q-mr-sm" style="font-size:14px; color:#757575">甲方负责人</div>
            </div>
            <div class="col col-md-5">
              <q-input
                v-model="inputs.jffzr"
                outlined
                placeholder="请输入甲方负责人"
                style="margin-bottom:-20px;"
                dense
                :rules="[ val => val && val.length > 0 || '请输入甲方负责人']"
              />
            </div>
          </div>
          <!--第四行：乙方名称，乙方负责人-->
          <div class="row items-center" style="margin-bottom:30px">
            <div class="col col-md-1 text-right">
              <div class="q-mr-sm" style="font-size:14px; color:#757575">乙方名称</div>
            </div>
            <div class="col col-md-5">
              <q-input style="margin-bottom: -20px" :rules="[ val => val && val.length > 0 || '请输入乙方名称']" v-model="inputs.yfmc" outlined dense bg-color="white" color="grey-9" placeholder="请输入乙方名称">
                <template v-slot:append>
                  <q-icon name="search" @click="popupYFWindow"/>
                </template>
              </q-input>
            </div>
            <div class="col col-md-1 text-right">
              <div class="q-mr-sm" style="font-size:14px; color:#757575">乙方负责人</div>
            </div>
            <div class="col col-md-5">
              <q-input
                v-model="inputs.yffzr"
                outlined
                placeholder="请输入乙方负责人"
                style="margin-bottom:-20px;"
                dense
                :rules="[ val => val && val.length > 0 || '请输入乙方负责人']"
              />
            </div>
          </div>
          <!--第五行：开始时间，结束时间-->
          <div class="row items-center" style="margin-bottom:30px">
            <div class="col col-md-1 text-right">
              <div class="q-mr-sm" style="font-size:14px; color:#757575">开始时间</div>
            </div>
            <div class="col col-md-5">
              <q-input style="margin-bottom:-20px;" outlined v-model="inputs.kssj" mask="date" :rules="['date']" dense>
                <template v-slot:prepend>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      ref="qDateProxy"
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date v-model="inputs.kssj">
                        <div class="row items-center justify-end">
                          <q-btn v-close-popup label="Close" color="primary" flat/>
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
            <div class="col col-md-1 text-right">
              <div class="q-mr-sm" style="font-size:14px; color:#757575">结束时间</div>
            </div>
            <div class="col col-md-5">
              <q-input style="margin-bottom:-20px;" outlined v-model="inputs.jssj" mask="date" :rules="['date']" dense>
                <template v-slot:prepend>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      ref="qDateProxy"
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date v-model="inputs.jssj">
                        <div class="row items-center justify-end">
                          <q-btn v-close-popup label="Close" color="primary" flat/>
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
          </div>
          <!--第六行：签订日期，付款方式-->
          <div class="row items-center" style="margin-bottom:30px">
            <div class="col col-md-1 text-right">
              <div class="q-mr-sm" style="font-size:14px; color:#757575">签订日期</div>
            </div>
            <div class="col col-md-5">
              <q-input style="margin-bottom:-20px;" outlined v-model="inputs.qdrq" mask="date" :rules="['date']" dense>
                <template v-slot:prepend>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      ref="qDateProxy"
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date v-model="inputs.qdrq">
                        <div class="row items-center justify-end">
                          <q-btn v-close-popup label="Close" color="primary" flat/>
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
            <div class="col col-md-1 text-right">
              <div class="q-mr-sm" style="font-size:14px; color:#757575">付款方式</div>
            </div>
            <div class="col col-md-5">
              <q-select
                v-model="inputs.fkfs"
                dense
                outlined
                :options="options1"
                style="margin-bottom: -20px"
                :rules="[ val => options1.includes(val) || '请选择付款方式' ]"
              />
            </div>
          </div>
          <!--第七行：合同备注-->
          <div class="row items-center">
            <div class="col col-md-1 text-right">
              <span class="q-mr-sm" style="font-size:14px; color:#757575">合同备注</span>
            </div>
            <div class="col col-md-11">
              <KindEditor :content="inputs.xmjj" @kindeditorChange="kindeditorChange"></KindEditor>
            </div>
          </div>
          <!--第八行：附件-->
          <div class="row items-center">
            <div class="col col-md-1 text-right">
              <span class="q-mr-sm" style="font-size:14px; color:#757575">附件列表</span>
            </div>
            <div class="col col-md-11">
              <div class="q-pa-md" style="padding:0px">
                <div class="q-gutter-md" style="max-width: 50%;">
                  <q-file filled bottom-slots v-model="inputs.fj" label="请选择您要上传的附件">
                    <template v-slot:append>
                      <q-icon v-if="inputs.fj !== null" name="close" @click.stop="inputs.fj = null"
                              class="cursor-pointer"/>
                      <q-icon name="create_new_folder" @click.stop/>
                    </template>
                    <template v-slot:after>
                      <q-btn round dense flat icon="send" @click="addToAttachmentList"/>
                    </template>
                  </q-file>
                </div>
              </div>
              <!--附件列表-->
              <q-tab-panels v-model="tab" animated style="width:100%;">
                <q-tab-panel name="dsp" style="padding:0px">
                  <div>
                    <q-table
                      :data="inputs.fjlb"
                      :columns="columns_fj"
                      :row-key="row => row.fjbh"
                      flat
                      square
                      class="my-sticky-header-table tabletop"
                      style="height:auto;"
                    >
                      <!-- 操作按钮注释start -->
                      <template
                        #body-cell-opt="props">
                        <td
                          style="text-align: center;">
                          <q-btn
                            icon="delete_forever" flat round dense color="blue" @click="deleteData(inputs.fjlb,'fjbh',props.key)">
                            <q-tooltip>删除</q-tooltip>
                          </q-btn>
                        </td>
                      </template>
                      <!-- 操作按钮注释 end-->
                    </q-table>
                  </div>
                </q-tab-panel>
                <q-tab-panel name="sptg">
                  <div class="text-h6">Alarms</div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </q-tab-panel>
                <q-tab-panel name="bh">
                  <div class="text-h6">Movies</div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </q-tab-panel>
                <q-tab-panel name="gq">
                  <div class="text-h6">Movies</div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </q-tab-panel>
              </q-tab-panels>
            </div>
          </div>
        </div>
        <!--确认与清除按键-->
        <div class="col-sm-5 col-xs-12" style="text-align:center;margin-top:20px;">
          <q-btn label="确定" type="submit" color="primary"/>
          <q-btn label="清除" type="reset" color="primary" flat class="q-ml-sm"/>
        </div>

        <!--甲方弹出-->
        <div class="q-pa-md q-gutter-sm" style="width:100%">
          <q-dialog v-model="popupJF">
            <q-layout view="Lhh lpR fff" container class="bg-white" style="width:80%; max-width:80%;height:80%;">
              <q-header class="bg-primary">
                <q-toolbar>
                  <q-toolbar-title>甲方名称列表</q-toolbar-title>
                  <q-btn flat v-close-popup round dense icon="close"/>
                </q-toolbar>
              </q-header>
              <q-page-container>
                <div class="q-pa-lg">
                  <!--筛选条件-->
                  <div class="q-py-sm" style="width:400px">
                    <q-input outlined dense bg-color="white" color="grey-9" placeholder="请输入您要搜索的关键字">
                      <template v-slot:append>
                        <q-icon name="search"/>
                      </template>
                    </q-input>
                  </div>
                  <!--甲方列表-->
                  <div class="q-my-sm">
                    <q-form @submit="onSubmit" @reset="onReset">
                      <div class="col-sm-5 col-xs-12">
                        <div class="row items-center">
                          <div class="col col-md-12">
                            <div class="q-pa-md" style="padding:20px 0 0 0">
                              <div class="q-gutter-md" style="max-width: 50%;"></div>
                            </div>
                            <q-tab-panels v-model="tab" animated style="width:100%;">
                              <q-tab-panel name="dsp" style="padding:0px">
                                <div>
                                  <q-table
                                    :data="jfList"
                                    :columns="columns_JF"
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
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-5 col-xs-12" style="text-align:center;">
                        <q-btn label="关闭" v-close-popup color="primary"/>
                      </div>
                    </q-form>
                  </div>
                </div>
              </q-page-container>
            </q-layout>
          </q-dialog>
        </div>
        <!--乙方弹出-->
        <div class="q-pa-md q-gutter-sm" style="width:100%">
          <q-dialog v-model="popupYF">
            <q-layout view="Lhh lpR fff" container class="bg-white" style="width:80%; max-width:80%;height:80%;">
              <q-header class="bg-primary">
                <q-toolbar>
                  <q-toolbar-title>乙方列表</q-toolbar-title>
                  <q-btn flat v-close-popup round dense icon="close"/>
                </q-toolbar>
              </q-header>
              <q-page-container>
                <div class="q-pa-lg">
                  <!--筛选条件-->
                  <div class="q-py-sm" style="width:400px">
                    <q-input outlined dense bg-color="white" color="grey-9" placeholder="请输入您要搜索的关键字">
                      <template v-slot:append>
                        <q-icon name="search"/>
                      </template>
                    </q-input>
                  </div>
                  <div class="q-my-sm">
                    <q-form @submit="onSubmit" @reset="onReset">
                      <div class="col-sm-5 col-xs-12">
                        <div class="row items-center">
                          <div class="col col-md-12">
                            <div class="q-pa-md" style="padding:20px 0 0 0">
                              <div class="q-gutter-md" style="max-width: 50%;"></div>
                            </div>
                            <!--乙方列表start -->
                            <q-tab-panels v-model="tab" animated style="width:100%;">
                              <q-tab-panel name="dsp" style="padding:0px">
                                <div>
                                  <q-table
                                    :data="yfList"
                                    :columns="columns_YF"
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
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-5 col-xs-12" style="text-align:center;">
                        <q-btn label="关闭" v-close-popup color="primary"/>
                      </div>
                    </q-form>
                  </div>
                </div>
              </q-page-container>
            </q-layout>
          </q-dialog>
        </div>
      </q-form>
    </div>

    <!--项目列表弹出start-->
    <div class="q-pa-md q-gutter-sm" style="width:100%">
      <q-dialog v-model="popupProject" >
        <q-layout view="Lhh lpR fff" container class="bg-white" style="width:80%; max-width:80%;height:80%;">
          <q-header class="bg-primary">
            <q-toolbar>
              <q-toolbar-title>项目列表</q-toolbar-title>
              <q-btn flat v-close-popup round dense icon="close" />
            </q-toolbar>
          </q-header>
          <q-page-container>
            <div class="q-pa-lg">
              <!--筛选条件-->
              <div class="q-py-sm" style="width:400px">
                <!--搜索框-->
                <q-input outlined dense bg-color="white" color="grey-9" v-model="searchKey" placeholder="请输入您要搜索的关键字">
                  <!--搜索图标-->
                  <template v-slot:prepend>
                    <q-icon name="search" />
                  </template>
                </q-input>
              </div>
              <!--表单内容-->
              <div class="q-my-sm">
                <q-form>
                  <div class="col-sm-5 col-xs-12">
                    <div class="row items-center">
                      <div class="col col-md-12">
                        <div class="q-pa-md" style="padding:20px 0 0 0">
                          <div class="q-gutter-md" style="max-width: 50%;"></div>
                        </div>
                        <!-- 项目表单-->
                        <q-tab-panels v-model="tab" animated style="width:100%;">
                          <q-tab-panel name="dsp" style="padding:0px;margin:0px;">
                            <div>
                              <q-table
                                :data="projectList"
                                :columns="columns_xm"
                                :row-key="row => row.id"
                                flat
                                square
                                class="my-sticky-header-table tabletop"
                                style="height: 500px;"
                                selection="single"
                                :selected.sync="selected"
                                :loading="loading"
                              >
                                <!--<template #body-cell-hxje="props">-->
                                <!--  <td>-->
                                <!--    <q-input-->
                                <!--      v-model="lsit"-->
                                <!--      outlined-->
                                <!--      placeholder="金额"-->
                                <!--      style="margin-bottom:-20px;"-->
                                <!--      dense-->
                                <!--      :rules="[ val => val && val.length > 0 || '金额']"-->
                                <!--    />-->
                                <!--  </td>-->
                                <!--</template>-->

                              </q-table>
                            </div>
                          </q-tab-panel>

                        </q-tab-panels>
                      </div>
                    </div>
                  </div>
                  <div  class="col-sm-5 col-xs-12" style="text-align:center;">
                    <q-btn label="完成" v-close-popup color="primary" @click="finishSelect" />
                  </div>
                </q-form>
              </div>
            </div>
          </q-page-container>
        </q-layout>
      </q-dialog>
    </div>
  </div>
</template>

<script>
import {addContractList, addProjectList, getProjectList, getJFList, getYFList, addJFList, addYFList} from "../../network/data";
import { event } from 'quasar'
import KindEditor from "../../components/KindEditor";
const { stopAndPrevent } = event
export default {
  data() {
    return {
      inputs: {
        "id": "",
        "htbh": "",
        "xzgl": "是",
        "xmmc": "",
        "htje": "",
        "jfmc": "",
        "jffzr": "",
        "yfmc": "",
        "yffzr": "",
        "kssj": "",
        "jssj": "",
        "qdrq": "",
        "fkfs": "付款方式",
        "htbz": "",
        "fj": null,
        "fjlb": [],
        "xmje": "",
        "xmlx": "",
        "sglx": "",
        "xmkssj": "",
        "xmjssj": "",
        "fkbl": "",
        "sd": false
      },
      foundXmmc:"",//实时搜索到的项目名称
      formHasError: false,//输入是否有误
      inputFillCancelled: false,//自动补全项目名称：取消自动补全
      accept: true,//同意规定
      options1: ["现金", "转账", "汇票"],//付款方式选项

      //附件列表
      columns_fj: [
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
          name: "opt",
          label: "操作",
          align: "center",
          columns: true
        }
      ],//每列内容
      tab: "dsp",//标签页名

      //甲方列表
      popupJF:false,//弹出状态
      columns_JF: [
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
      ],//每列内容
      jfList: [],//甲方列表
      isNewJF:false,

      //乙方列表
      popupYF:false,//弹出状态
      columns_YF: [
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
      ],//每列内容
      yfList: [],//乙方列表
      isNewYF:false,

      //弹出项目列表
      popupProject:false,//弹出状态
      columns_xm: [
        {
          name: "xmbh",
          required: true,
          label: "项目编号",
          align: "left",
          field: "xmbh",
          sortable: true
        },
        {
          name: "xmmc",
          required: true,
          label: "项目名称",
          align: "left",
          field: "xmmc",
          sortable: true
        },
        {
          name: "xmlx",
          required: true,
          label: "项目类型",
          align: "left",
          field: "xmlx",
          sortable: true
        },
        {
          name: "sglx",
          required: true,
          label: "施工类型",
          align: "left",
          field: "sglx",
          sortable: true
        },
        {
          name: "jfmc",
          required: true,
          label: "甲方名称",
          align: "left",
          field: "jfmc",
          sortable: true
        },
        {
          name: "kssj",
          required: true,
          label: "项目开始时间",
          align: "left",
          field: "kssj",
          sortable: true
        },
      ],//每列内容
      projectList:[],//项目列表
      searchKey:"",//搜索关键字
      loading: false,//加载中动画
      selected:[], //被选项
      isNewProject:false,

      //日期
      date: new Date()
    };

  },

  components:{
    KindEditor
  },

  computed: {
    //自动补全项目名称：声称项目名称自动补全的文字
    inputShadowText () {
      if (this.inputFillCancelled === true || this.inputs.xmmc === "") {
        return ''
      }

      let t = this.foundXmmc
      const empty = typeof this. inputs.xmmc !== 'string' || this. inputs.xmmc.length === 0

      if (empty === true) {
        return t
      }
      //else if (t.indexOf(this. inputs.xmmc) !== 0) {
      //  return ''
      //}

      return t
        .split(this. inputs.xmmc)
        .slice(1)
        .join(this. inputs.xmmc)
    },
  },

  methods: {
    //弹出项目列表窗口
    popupProjectWindow(){
      //获取项目列表
      getProjectList().then(res => {
        this.projectList = res
      })
      this.popupProject= true;
      this.selected=[]
    },

    //弹出甲方列表窗口
    popupJFWindow(){
      //获取项目列表
      getJFList().then(res => {
        this.jfList = res
      })
      this.popupJF= true;
      this.selected=[]
    },
    //弹出乙方列表窗口
    popupYFWindow(){
      //获取项目列表
      getYFList().then(res => {
        this.yfList = res
      })
      this.popupYF= true;
      this.selected=[]
    },


    //自动补全项目名称：按下TAB键自动补全项目名称
    processInputFill (e) {
      if (e === void 0) {
        return
      }

      if (e.keyCode === 27) {
        if (this.inputFillCancelled !== true) {
          this.inputFillCancelled = true
        }
      }
      else if (e.keyCode === 9) {
        if (this.inputFillCancelled !== true && this.inputShadowText.length > 0) {
          stopAndPrevent(e)
          this. inputs.xmmc = (typeof this. inputs.xmmc === 'string' ? this. inputs.xmmc : '') + this.inputShadowText
        }
      }
      else if (this.inputFillCancelled === true) {
        this.inputFillCancelled = false
      }
    },
    //自动补全项目名称：在项目名称输入时在项目列表中寻找项目
    searchProject(){
      for(let index=0, length=this.projectList.length; index<length; index++){
        if(this.projectList[index].xmmc.includes(this.inputs.xmmc)){
          this.foundXmmc = this.projectList[index].xmmc
        }
        else{
          this.isNewProject = true
        }
      }
    },

    //完成选择项目
    finishSelect(){
      //自动填入被选项目的信息
      this.inputs.xmmc = this.selected[0].xmmc;
    },

    //添加到文件列表
    addToAttachmentList() {
      //获取文件类型
      let fileType = ''
      if (this.inputs.fj.type.includes('text')) {
        fileType = '文档'
      } else if (this.inputs.fj.type.includes('image')) {
        fileType = '图片'
      } else {
        fileType = '其他'
      }

      //获取上传时间
      let fileDate = ''
      let date = this.date;
      let month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
      let strDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      fileDate = date.getFullYear() + "-" + month + "-" + strDate + " " + date.getHours() + ":" + date.getMinutes()

      //在文件列表前添加新文件
      this.inputs.fjlb.unshift({
        fjbh: "",
        fjmc: this.inputs.fj.name,
        fjlx: fileType,
        fjdx: this.inputs.fj.size < 1048576 ? (this.inputs.fj.size / 1024).toFixed(1) + 'K' : (this.inputs.fj.size / 1048576).toFixed(1) + 'M',
        fjscrq: fileDate
      })

      //清空上传文件
      this.inputs.fj = null

      //重新排列文件列表
      this.sortFileList()
    },
    //重新排列文件列表
    sortFileList() {
      //重新给文件列表编号
      let length = this.inputs.fjlb.length
      for (let index = 0; index < length; index++) {
        if (index < 9) this.inputs.fjlb[index].fjbh = '0' + (index + 1)
        else this.inputs.fjlb[index].fjbh = (index + 1)

      }
    },
    //删除文件列表项
    deleteData(array, key, findKey) {
      //本地删除
      let length = array.length;
      for (let index = 0; index < length; index++) {
        if (array[index][key] === findKey) {
          array.splice(index, 1)
          break;
        }
      }

      //重新排列文件列表
      this.sortFileList()
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
        //清空未上传的附件
        this.inputs.fj = null;
        //生成合同id
        this.inputs.id = this.date.getTime().toString()
        addContractList(this.inputs)
        //弹出通知
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Submitted"
        });
        //跳转
        setTimeout(()=>{this.$router.push({path:'/xght'})},1000)
      }
    },

    onReset() {
      this.$q.dialog({
        title: '确认清除',
        message: '将清除所有输入',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.inputs = {
          "id": "",
          "htbh": "",
          "xzgl": "是",
          "xmmc": "",
          "htje": "",
          "jfmc": "",
          "jffzr": "",
          "yfmc": "",
          "yffzr": "",
          "kssj": "",
          "jssj": "",
          "qdrq": "",
          "fkfs": "付款方式",
          "htbz": "",
          "fj": null,
          "fjlb": [],
          "xmje": "",
          "xmlx": "",
          "sglx": "",
          "xmkssj": "",
          "xmjssj": "",
          "fkbl": "",
          "sd": false
        }
      }).onOk(() => {
        // console.log('>>>> second OK catcher')
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    }
  },

  watch: {
    //监测弹出项目列表里的搜索框
    searchKey:{
      handler(val){
        //开启加载动画
        this.loading = true

        if(val !== ""){
          console.log("重新通信");
          getProjectList().then(res => {
            {
              let newList = [];
              for(let key in res){
                let item = res[key]
                if(item.xmmc.includes(val) || item.xmlx.includes(val) || item.sglx.includes(val) || item.jfmc.includes(val) || item.yfmc.includes(val) || item.xmje.includes(val)) {
                  newList.push(item)
                }
              }
              this.projectList = newList
            }
          })
        }
        else if(val === ""){
          console.log("回到默认")
          getProjectList().then(res => {
            this.projectList = res
          })
        }
        this.loading = false
      },
    },
  },

  //生命周期：挂载后
  mounted() {

  },
};
</script>
