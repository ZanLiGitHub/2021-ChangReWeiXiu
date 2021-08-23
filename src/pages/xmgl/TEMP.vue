<template>
  <!--第一行：项目名称，项目编号-->
  <div class="row items-center" style="margin-bottom:30px">
    <div class="col col-md-1 text-right">
      <div class="q-mr-sm" style="font-size:14px; color:#757575">项目名称</div>
    </div>
    <div class="col col-md-5">
      <q-input
        v-model="lsit"
        outlined
        placeholder="项目名称"
        style="margin-bottom:-20px;"
        dense
        :rules="[ val => val && val.length > 0 || '项目名称']"
      />
    </div>
    <div class="col col-md-1 text-right">
      <div class="q-mr-sm" style="font-size:14px; color:#757575">项目编号</div>
    </div>
    <div class="col col-md-5">
      <q-input
        v-model="lsit"
        outlined
        placeholder="项目编号"
        style="margin-bottom:-20px;"
        dense
        :rules="[ val => val && val.length > 0 || '项目编号']"
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
        v-model="sel1"
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
        v-model="sel2"
        dense
        outlined
        :options="options2"
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
        v-model="lsit"
        outlined
        placeholder="甲方名称"
        style="margin-bottom:-20px;"
        dense
        :rules="[ val => val && val.length > 0 || '甲方名称']"
      />
    </div>
    <div class="col col-md-1 text-right">
      <div class="q-mr-sm" style="font-size:14px; color:#757575">乙方名称</div>
    </div>
    <div class="col col-md-5">
      <q-input
        v-model="lsit"
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
  <!--第五行：项目负责人，项目金额-->
  <div class="row items-center" style="margin-bottom:30px">
    <div class="col col-md-1 text-right">
      <div class="q-mr-sm" style="font-size:14px; color:#757575">项目负责人</div>
    </div>
    <div class="col col-md-5">
      <q-input
        v-model="lsit"
        outlined
        placeholder="项目负责人"
        style="margin-bottom:-20px;"
        dense
        :rules="[ val => val && val.length > 0 || '项目负责人']"
      />
    </div>
    <div class="col col-md-1 text-right">
      <div class="q-mr-sm" style="font-size:14px; color:#757575">项目金额(元)</div>
    </div>
    <div class="col col-md-5">
      <q-input
        v-model="lsit"
        outlined
        placeholder="项目金额"
        style="margin-bottom:-20px;"
        dense
        :rules="[ val => val && val.length > 0 || '项目金额']"
      />
    </div>
  </div>
  <!--第六行：选择关联-->
  <div class="row items-center" style="margin-bottom:30px">
    <div class="col col-md-1 text-right">
      <div class="q-mr-sm" style="font-size:14px; color:#757575">选择关联</div>
    </div>
    <div class="col col-md-11">
      <q-radio v-model="shape" val="yes" label="是" /><q-radio v-model="shape" val="no" label="否" />
    </div>

  </div>
  <!--第七行：项目简介-->
  <div class="row items-center">
    <div class="col col-md-1 text-right">
      <span class="q-mr-sm" style="font-size:14px; color:#757575">项目简介</span>
    </div>
    <div class="col col-md-11">
      <q-input
        type="textarea"
        v-model="lsit"
        outlined
        placeholder="项目简介"
        dense
        :rules="[ val => val && val.length > 0 || '项目简介']"
      />
    </div>
  </div>
  <!--第八行：附件列表-->
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
      <!--  附件列表start  -->
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
              <!--  操作按钮注释start  -->
              <template  #body-cell-opt="props">
                <td  style="text-align:  center;">
                  <q-btn  icon="delete_forever"  flat  round  dense  color="blue">
                    <q-tooltip>删除</q-tooltip>
                  </q-btn>
                </td>
              </template>
              <!--  操作按钮注释  end-->
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
      <!--  附件列表  end-->
    </div>
  </div>
</template>

<script>
export default {
  name: "TEMP"
}
</script>

<style scoped>

</style>
