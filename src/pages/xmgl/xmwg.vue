<template>
  <div class="q-pa-lg">
    <div class="text-h6 q-pb-md">
      <strong>项目完工</strong>
    </div>
    <div class="q-my-sm">
      <!--页面表单-->
      <q-form @submit="onSubmit" @reset="onReset">
        <!--页面表单内容-->
        <div class="col-sm-5 col-xs-12">
          <!--第一行：项目名称，竣工时间-->
          <div class="row items-center" style="margin-bottom:30px">
            <div class="col col-md-1 text-right">
              <div class="q-mr-sm" style="font-size:14px; color:#757575">项目名称</div>
            </div>
            <div class="col col-md-5">
              <q-input
                v-model="inputs.xmmc"
                style="margin-bottom:-20px;" outlined dense bg-color="white" color="grey-9"
                placeholder="请输入项目名称"
               :rules="[val => val && val.length > 0 && val.replace(/\s/g, '').length!==0|| '请输入项目名称']">
                <template v-slot:append >
                  <q-icon name="search" @click="popupProject= true; selected=[]"/>
                </template>
              </q-input>
            </div>
            <div class="col col-md-1 text-right">
              <div class="q-mr-sm" style="font-size:14px; color:#757575">竣工时间</div>
            </div>
            <div class="col col-md-5">
              <q-input style="margin-bottom:-20px;" outlined v-model="inputs.jgrq" mask="date" :rules="['date']" dense>
                <template v-slot:prepend>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      ref="qDateProxy"
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date v-model="inputs.jgrq">
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
          <!--第二行：质保金，质保期-->
          <div class="row items-center" style="margin-bottom:30px">
            <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">质保金</div>
              </div>
              <div class="col col-md-5">
                <q-input
                  v-model="inputs.zbj"
                  outlined
                  placeholder="请输入质保金"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || '请输入质保金']"
                />
              </div>
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">质保期</div>
              </div>
              <div class="col col-md-5">
                <q-input
                  v-model="inputs.zbq"
                  outlined
                  placeholder="请输入项目金额"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || '请输入项目金额']"
                />
              </div>
            </div>
          <!--第三行：合同资产，应收账款-->
          <div class="row items-center" style="margin-bottom:30px">
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">合同资产</div>
              </div>
              <div class="col col-md-5">
                <q-input
                  v-model="inputs.htzc"
                  outlined
                  placeholder="请输入合同资产"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || '请输入合同资产']"
                />
              </div>
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">应收账款</div>
              </div>
              <div class="col col-md-5">
                <q-input
                  v-model="inputs.yszk"
                  outlined
                  placeholder="计算应收账款"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || '计算应收账款']"
                />
              </div>
            </div>
          <!--第四行：开票金额，收款金额-->
          <div class="row items-center" style="margin-bottom:30px">
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">开票金额</div>
              </div>
              <div class="col col-md-5">
                <q-input
                  v-model="inputs.kpje"
                  outlined
                  placeholder="计算开票金额"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || '计算开票金额']"
                />
              </div>
              <div class="col col-md-1 text-right">
                <div class="q-mr-sm" style="font-size:14px; color:#757575">收款金额</div>
              </div>
              <div class="col col-md-5">
                <q-input
                  v-model="inputs.skje"
                  outlined
                  placeholder="计算收款金额"
                  style="margin-bottom:-20px;"
                  dense
                  :rules="[ val => val && val.length > 0 || '计算收款金额']"
                />
              </div>
            </div>
          <!--第五行：附件列表-->
          <div class="row items-center">
            <div class="col col-md-1 text-right">
                <span class="q-mr-sm"  style="font-size:14px; color:#757575">附件列表</span>
              </div>
            <div class="col col-md-11">
              <div class="q-pa-md" style="padding:0px">
                <div class="q-gutter-md" style="max-width: 50%;">
                  <q-file filled bottom-slots v-model="inputs.fj" label="请选择您要上传的附件">
                    <template v-slot:append>
                      <q-icon v-if="inputs.fj !== null" name="close" @click.stop="inputs.fj = null" class="cursor-pointer" />
                      <q-icon name="create_new_folder" @click.stop />
                    </template>
                    <template v-slot:after>
                      <q-btn round dense flat icon="send" @click="addToAttachmentList"/>
                    </template>
                  </q-file>

                </div>
              </div>
              <!-- 附件列表-->
              <q-tab-panels v-model="tab" animated style="width:100%;">
                <q-tab-panel name="dsp" style="padding:0px">
                  <div>
                    <q-table
                      :data="inputs.fjlb"
                      :columns="columns"
                      :row-key="row => row.fjbh"
                      flat
                      square
                      class="my-sticky-header-table tabletop"
                      style="height:auto;"
                    >
                     <!-- 操作按钮注释start -->
                      <template #body-cell-opt="props">
                        <td style="text-align: center;">
                          <q-btn icon="delete_forever" flat round dense color="blue" @click="deleteData(inputs.fjlb,'fjbh',props.key)">
                            <q-tooltip>删除</q-tooltip>
                          </q-btn>
                        </td>
                      </template>
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
            </div>
          </div>
        </div>
        <div  class="col-sm-5 col-xs-12" style="text-align:center;">
          <q-btn label="确定" type="submit" color="primary" />
          <q-btn label="清除" type="reset" color="primary" flat class="q-ml-sm" />
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
import {addProjectList, editProjectList, getProjectList} from "../../network/data";
import { event } from 'quasar'
const { stopAndPrevent } = event
export default {
  data() {
    return {
      //表单
      inputs:{
        xmmc:"",
        jgrq:"",
        zbj:"",
        zbq:"",
        htzc:"",
        yszk:"",
        kpje:"",
        skje:"",
        fj:null,
        fjlb:[]
      },//输入数据
      accept: true,
      data:[],

      //文件列表
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
          name: "opt",
          label: "操作",
          align: "center",
          columns: true
        }
      ],//每列内容
      tab: "dsp",//标签页名称

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

      //日期
      date: new Date(),
    };
  },

  methods: {
    //附件：添加到文件列表
    addToAttachmentList(){
      //获取文件类型
      let fileType = ''
      if(this.inputs.fj.type.includes('text')){
        fileType = '文档'
      }
      else if(this.inputs.fj.type.includes('image')){
        fileType = '图片'
      }
      else {
        fileType = '其他'
      }

      //获取上传时间
      let fileDate = ''
      //let date = new Date()
      let date = this.date;
      let month = date.getMonth() + 1<10? "0"+(date.getMonth()+ 1):date.getMonth() + 1;
      let strDate = date.getDate()<10? "0" + date.getDate():date.getDate();
      fileDate = date.getFullYear() + "-"  + month  + "-"  + strDate + " "  + date.getHours()  + ":"  + date.getMinutes()

      //在文件列表前添加新文件
      this.inputs.fjlb.unshift({
        fjbh: "",
        fjmc: this.inputs.fj.name,
        fjlx: fileType,
        fjdx: this.inputs.fj.size < 1048576 ? (this.inputs.fj.size/1024).toFixed(1) +'K' :  (this.inputs.fj.size/1048576).toFixed(1)   +'M',
        fjscrq: fileDate
      })

      //清空上传文件
      this.inputs.fj = null

      //重新排列文件列表
      this.sortFileList()
    },
    //附件：重新排列文件列表
    sortFileList(){
      //重新给文件列表编号
      let length = this.inputs.fjlb.length
      for(let index=0; index<length; index++){
        if(index < 9) this.inputs.fjlb[index].fjbh = '0'+(index+1)
        else this.inputs.fjlb[index].fjbh = (index+1)

      }
    },
    //附件：删除文件列表项
    deleteData(array,key,findKey){
      //本地删除
      let length = array.length;
      for (let index = 0; index<length; index++){
        if(array[index][key] === findKey){
          array.splice(index,1)
          break;
        }
      }

      //重新排列文件列表
      this.sortFileList()
    },

    //完成选择项目
    finishSelect(){
      //自动填入被选项目的信息
      this.inputs.xmmc = this.selected[0].xmmc;
      this.inputs.fjlb = this.selected[0].fjlb;
    },

    //上传
    onSubmit() {
      //判断是否同意规定，如果未同意
      if (this.accept !== true) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "You need to accept the license and terms first"
        });
        //判断是否同意规定，如果同意
      }
      else {
        //清空未上传的附件
        this.inputs.fj = null;
        //生成新数据
        this.data = Object.assign(this.selected[0], this.inputs)
        console.log(this.data);

        //后端通信
        editProjectList(this.data.id ,this.data)
        //弹出通知
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Submitted"
        });
      }
    },
    //重置
    onReset() {
      this.$q.dialog({
        title: '确认清除',
        message: '将清除所有输入',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.inputs = {
          xmmc:"",
          jgrq:"",
          zbj:"",
          zbq:"",
          htzc:"",
          yszk:"",
          kpje:"",
          skje:"",
          fj:null,
          fjlb:[]
        }
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
    //获取项目列表
    getProjectList().then(res => {
      this.projectList = res
    })
  },
};
</script>
