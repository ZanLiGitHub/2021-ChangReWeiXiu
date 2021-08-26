<template>
  <div class="q-pa-lg">
    <!--页面标题-->
    <div class="text-h6 q-pb-md">
      <strong>修改项目</strong>
    </div>
    <!--页面内容-->
    <div class="q-my-sm">
      <!--页面表单-->
      <q-form @submit="onSubmit" @reset="onReset">
        <!--页面表单内容-->
        <div class="col-sm-5 col-xs-12">
          <!--第一行：项目名称，项目编号-->
          <div class="row items-center" style="margin-bottom:30px">
            <div class="col col-md-1 text-right">
              <div class="q-mr-sm" style="font-size:14px; color:#757575">项目名称</div>
            </div>
            <div class="col col-md-5">
              <q-input
                ref="xmmcRef"
                v-model="inputs.xmmc"
                outlined
                placeholder="请输入项目名称"
                style="margin-bottom:-20px;"
                dense
                :rules="[ val => val && val.length > 0 && val.replace(/\s/g, '').length!==0|| '请输入项目名称']"
              />
            </div>
            <div class="col col-md-1 text-right">
              <div class="q-mr-sm" style="font-size:14px; color:#757575">项目编号</div>
            </div>
            <div class="col col-md-5">
              <q-input
                ref="xmidRef"
                v-model="inputs.xmbh"
                outlined
                placeholder="请输入项目编号"
                style="margin-bottom:-20px;"
                dense
                :rules="[ val => val && val.length > 0 && val.replace(/\s/g, '').length!==0|| '请输入项目编号']"
              />
            </div>
          </div>
          <!--第二行：项目类型，施工类型-->
          <div class="row items-center" style="margin-bottom:30px">
            <div class="col col-md-1 text-right">
              <div class="q-mr-sm" style="font-size:14px; color:#757575">项目类型</div>
            </div>
            <div class="col col-md-5">
              <q-select
                style="margin-bottom:-20px;"
                ref="xmlxRef"
                v-model="inputs.xmlx"
                dense
                outlined
                :options="options1"
                :rules="[ val => options1.includes(val) || '请选择项目类型' ]"
              />
            </div>
            <div class="col col-md-1 text-right">
              <div class="q-mr-sm" style="font-size:14px; color:#757575">施工类型</div>
            </div>
            <div class="col col-md-5">
              <q-select
                style="margin-bottom:-20px;"
                ref="sglxRef"
                v-model="inputs.sglx"
                dense
                outlined
                :options="options2"
                :rules="[ val => options2.includes(val) || '请选择施工类型' ]"
              />
            </div>
          </div>
          <!--第三行：甲方名称，乙方名称-->
          <div class="row items-center" style="margin-bottom:30px">
            <div class="col col-md-1 text-right">
              <div class="q-mr-sm" style="font-size:14px; color:#757575">甲方名称</div>
            </div>
            <div class="col col-md-5">
              <q-input
                ref="jfmcRef"
                v-model="inputs.jfmc"
                outlined
                placeholder="请输入甲方名称"
                style="margin-bottom:-20px;"
                dense
                :rules="[ val => val && val.length > 0 || '请输入甲方名称']"
              />
            </div>
            <div class="col col-md-1 text-right">
              <div class="q-mr-sm" style="font-size:14px; color:#757575">乙方名称</div>
            </div>
            <div class="col col-md-5">
              <q-input
                ref="yfmcRef"
                v-model="inputs.yfmc"
                outlined
                placeholder="吉林省长热维修实业有限公司"
                style="margin-bottom:-20px;"
                dense
                :rules="[ val => val && val.length > 0 || '吉林省长热维修实业有限公司']"
              />
            </div>
          </div>
          <!--第四行：项目开始时间，项目结束时间-->
          <div class="row items-center" style="margin-bottom:30px">
            <div class="col col-md-1 text-right">
              <div class="q-mr-sm" style="font-size:14px; color:#757575">项目开始时间</div>
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
                          <q-btn v-close-popup label="Close" color="primary" flat />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
          </div>
          <!--第五行：项目负责人，项目金额-->
          <div class="row items-center" style="margin-bottom:30px">
            <div class="col col-md-1 text-right">
              <div class="q-mr-sm" style="font-size:14px; color:#757575">项目负责人</div>
            </div>
            <div class="col col-md-5">
              <q-input
                ref="xmfzrRef"
                v-model="inputs.xmfzr"
                outlined
                placeholder="请输入项目负责人"
                style="margin-bottom:-20px;"
                dense
                :rules="[ val => val && val.length > 0 || '请输入项目负责人']"
              />
            </div>
            <div class="col col-md-1 text-right">
              <div class="q-mr-sm" style="font-size:14px; color:#757575">项目金额(元)</div>
            </div>
            <div class="col col-md-5">
              <q-input
                ref="xmjeRef"
                v-model="inputs.xmje"
                outlined
                placeholder="请输入项目金额"
                style="margin-bottom:-20px;"
                dense
                :rules="[ val => val && val.length > 0 || '请输入项目金额']"
              />
            </div>
          </div>
          <!--第六行：选择关联-->
          <div class="row items-center" style="margin-bottom:30px">
            <div class="col col-md-1 text-right">
              <div class="q-mr-sm" style="font-size:14px; color:#757575">选择关联</div>
            </div>
            <div class="col col-md-11">
              <q-radio v-model="inputs.xzgl" val="是" label="是" /><q-radio v-model="inputs.xzgl" val="否" label="否" />
            </div>

          </div>
          <!--第七行：项目简介-->
          <div class="row items-center">
            <div class="col col-md-1 text-right">
              <span class="q-mr-sm" style="font-size:14px; color:#757575">项目简介</span>
            </div>
            <div class="col col-md-11">
              <KindEditor :content="inputs.xmjj" @kindeditorChange="kindeditorChange"></KindEditor>
            </div>
          </div>
          <!--第八行：附件列表-->
          <div class="row items-center">
            <div class="col col-md-1 text-right">
              <span class="q-mr-sm"  style="font-size:14px; color:#757575">附件列表</span>
            </div>

            <div class="col col-md-11">
              <!--选择附件-->
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
              <!--附件列表-->
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
                      <!-- 操作按钮注释 end-->
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
        <!--提交按钮-->
        <div  class="col-sm-5 col-xs-12" style="text-align:center;">
          <q-btn label="确定" type="submit" color="primary" />
          <q-btn label="重置 " type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
import {editProjectList, getProjectList} from "../../network/data";
import KindEditor from "../../components/KindEditor";

export default {
  data() {
    return {
      //输入数据
      inputs:{},
      //用于还原数据
      preinputs:{},

      //是否同意规定
      accept: true,

      //项目类型，施工类型
      options1: ["维修项目", "新建项目"],
      options2: ["机械", "人工", "材料"],

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
      ],
      tab: "dsp",

      //日期
      date: new Date(),

      formHasError: false
    };

  },

  components:{
    KindEditor
  },

  methods: {
    //添加到文件列表
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

      console.log(this.inputs.fj);

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
    //重新排列文件列表
    sortFileList(){
      //重新给文件列表编号
      let length = this.inputs.fjlb.length
      for(let index=0; index<length; index++){
        if(index < 9) this.inputs.fjlb[index].fjbh = '0'+(index+1)
        else this.inputs.fjlb[index].fjbh = (index+1)

      }
    },
    //删除文件列表项
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
    //上传
    onSubmit() {
      //检查输入
      //假设表单没有错误
      this.formHasError = false
      //查看表单是否有错
      //for(let key in this.$refs){
      //  let item = this.$refs[key]
      //  if(item.validate){
      //    item.validate()
      //    if(item.hasError){
      //      console.log("error in " + key);
      //      this.formHasError = true
      //    }
      //  }
      //}
      //检查输入通过
      if(!this.formHasError){
        //判断是否同意规定，如果未同意
        if (this.accept !== true) {
          this.$q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "You need to accept the license and terms first"
          });
        //如果同意规定
        }
        else {
          //清空未上传的附件
          this.inputs.fj = null;
          //后端通信
          editProjectList(this.inputs.id ,this.inputs)
          //弹出通知
          this.$q.notify({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: "Submitted"
          });
          //跳转
          setTimeout(()=>{this.$router.push({path:'/xgxm'})},1000)
        }
      }
    },
    //重置
    onReset() {
      //深拷贝恢复原数据
      this.inputs = JSON.parse(JSON.stringify(this.preinputs))
    }
  },

  mounted() {
    //后端通信获取项目列表
    getProjectList({id:this.$route.query.id}).then(res=>{
      //获取原数据
      this.inputs = res[0]
      //深拷贝备份原数据
      this.preinputs = JSON.parse(JSON.stringify(this.inputs))
    })
  }
};
</script>
