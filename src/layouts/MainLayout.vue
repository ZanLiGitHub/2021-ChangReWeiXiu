<template>
  <q-layout view="hHh lpR fFf">

    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <img src="/img/logo_m.png" />
        </q-toolbar-title>
        <!--顶部导航start-->
          <div class="self-stretch row no-wrap gt-md" style="float:left;">
            <q-btn flat :to="value.to" :label="value.label" v-for="(value,index) in com">
              <q-menu transition-show="jump-down" transition-hide="jump-up">
                <q-list style="min-width: 100px">
                  <q-item clickable v-close-popup v-for="nav in value.child" :to="nav.to">
                    <q-item-section>
                      <q-item-label>{{nav.label}}</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </div>
          <!--顶部导航end-->
          <q-btn flat round dense icon="person_outline" label="管理员" title="管理信息" />
          <q-btn flat round dense icon="power_settings_new" class="q-ml-lg" label="退出"  to="/"/>
      </q-toolbar>
    </q-header>

    <!-- <q-drawer show-if-above v-model="left" side="left" bordered>

    </q-drawer> -->
    <!-- 菜单 -->
    <q-drawer show-if-above v-model="left" side="left" elevated id="menu" style="background:#0CC">
      <q-list class="bg-primary-menu-BGColor" style="overflow:hidden">
        <template v-for="(item1, index1) in menuData.data">
          <!-- 一级有子集 -->
          <q-expansion-item v-if="item1.children!=undefined" group="one" :label="item1.name" :icon="item1.icon" expand-separator class="text-primary-column bg-primary-menu-BGColor">
            <template v-for="(item2, index2) in item1.children">
              <!-- 二级有子集 -->
              <q-expansion-item v-if="item2.children!=undefined" group="tow" :label="item2.name" :icon="item2.icon" dense-toggle expand-separator :header-inset-level="0.2" class="text-primary-column">
                <template v-for="(item3, index3) in item2.children">
                  <!-- 三级有子集 -->
                  <q-expansion-item v-if="item3.children!=undefined" group="three" :label="item3.name" :icon="item3.icon" dense-toggle :header-inset-level="0.4" class="text-primary-column">
                    <template v-for="(item4, index4) in item3.children">
                      <!-- 四级只可以为菜单 -->
                      <q-item :to="item4.urlPath" :key="item4.id" clickable v-ripple class="text-primary-menu-unselected">
                        <q-item-section avatar>
                          <q-icon :name="item4.icon" style="margin-left: 35px;margin-right: 15px;"/>
                        </q-item-section>
                        <q-item-section>
                          {{ item4.name }}
                        </q-item-section>
                      </q-item>
                    </template>
                  </q-expansion-item>
                  <!-- 三级无子集 -->
                  <q-item v-if="item3.children==undefined" :to="item3.urlPath" :key="item3.id" clickable v-ripple class="text-primary-menu-unselected">
                    <q-item-section avatar>
                      <q-icon :name="item3.icon" style="margin-left: 23px;margin-right: 15px;"/>
                    </q-item-section>
                    <q-item-section>
                      {{ item3.name }}
                    </q-item-section>
                  </q-item>
                </template>
              </q-expansion-item>
              <!-- 二级无子集 -->
              <q-item v-if="item2.children==undefined" :to="item2.urlPath" :key="item2.id" clickable v-ripple class="text-primary-menu-unselected">
                <q-item-section avatar>
                  <q-icon :name="item2.icon" style="margin-left: 12px;margin-right: 15px;"/>
                </q-item-section>
                <q-item-section>
                  {{ item2.name }}
                </q-item-section>
              </q-item>
            </template>
          </q-expansion-item>
          <!-- 一级无子集 -->
          <q-item v-if="item1.children==undefined" :to="item1.urlPath" :key="item1.id" clickable v-ripple class="text-primary-menu-unselected">
            <q-item-section avatar>
              <q-icon :name="item1.icon"/>
            </q-item-section>
            <q-item-section>
              {{ item1.name }}
            </q-item-section>
          </q-item>
        </template>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      left: false,
      com: [
        /*{
            label:"首页",
            to:"/main",

          },*/
        {
          label: "项目管理",

          child: [
            {
              label: "新建项目",
              to: "/xjxm"
            },
            {
              label: "修改项目",
              to: "/xgxm"
            },
            {
              label: "项目查询",
              to: "/xmcx"
            },
            {
              label: "项目完工",
              to: "/xmwg"
            }
          ]
        },
        {
          label: "合同管理",
          child: [
            {
              label: "新建合同",
              to: "/xjht"
            },
            {
              label: "修改合同",
              to: "/xght"
            },
            {
              label: "合同查询",
              to: "/htcx"
            },
            {
              label: "合同完结",
              to: "/htwj"
            }
          ]
        },
        {
          label: "发票管理",
          child: [
            {
              label: "新建发票",
              to: "/xjfp"
            },
            {
              label: "修改发票",
              to: "/xgfp"
            },
            {
              label: "发票查询",
              to: "/fpcx"
            },
            {
              label: "发票统计",
              to: "/fptj"
            }
          ]
        },
        {
          label: "单据管理",
          child: [
            {
              label: "收款单",
              to: "/sk"
            },
            {
              label: "收款查询",
              to: "/skcx"
            },
            {
              label: "付款单",
              to: "/fksqd"
            },
            {
              label: "付款单查询",
              to: "/fkcx"
            },
            {
              label: "成本费用报销单",
              to: "/cbfpbxd"
            },
            {
              label: "成本费用报销单查询",
              to: "/cbfpbxdcx"
            }
          ]
        },
        {
          label: "统计分析",
          child: [
            {
              label: "项目统计",
              to: "/xmtj"
            },
            {
              label: "发票汇总",
              to: "/fphz"
            },
            {
              label: "支出分析",
              to: "/zcfx"
            },
            {
              label: "收入分析",
              to: "/srfx"
            },
            {
              label: "项目台账",
              to: "/xmtz"
            },
            {
              label: "成本台账",
              to: "/cbtz1"
            },
            {
              label: "客户/供应商台账",
              to: "/khgystz"
            },
            {
              label: "关联方清单",
              to: "/glfqd"
            }
          ]
        },
        {
          label: "系统设置",
          child: [
            {
              label: "客户/供应商管理",
              to: "/khgys"
            },
            {
              label: "用户/权限管理",
              to: "/yhgl"
            },
            {
              label: "历史凭证",
              to: "/lspz"
            },
            {
              label: "项目类型维护",
              to: "/xmlxwh"
            },
            {
              label: "施工类型维护",
              to: "/sglxwh"
            }
          ]
        }
      ],
      menuData:{
        data:[
          {
                "id":"xmgl","pId":"aaaaa","label":"项目管理","icon":"dvr","name":"项目管理","uuid":"aa001","puuid":"xmgl","sort":1,"state":"","type":"menu",
                "children":[
                  {"id":"xjxm","pId":"xmgl","label":"新建项目","path":"xjxm","icon":"playlist_add","name":"新建项目","puuid":"xmgl","sort":11,"type":"menu","urlPath":"xjxm","uuid":"xjxm"},
                  {"id":"xgxm","pId":"xmgl","label":"修改项目","path":"list","icon":"border_color","name":"修改项目","puuid":"xmgl","sort":12,"type":"menu","urlPath":"xgxm","uuid":"xgxm"},
                  {"id":"xgcx","pId":"xmgl","label":"项目查询","path":"xmcx","icon":"search","name":"项目查询","puuid":"xmgl","sort":13,"type":"menu","urlPath":"xmcx","uuid":"xmcx"},
                  {"id":"xmwg","pId":"xmgl","label":"项目完工","path":"xmwg","icon":"domain_verification","name":"项目完工","puuid":"xmgl","sort":14,"type":"menu","urlPath":"xmwg","uuid":"xmwg"}
                ]
              },
          {
            "id":"htgl","pId":"aaaaa","label":"合同管理","icon":"content_paste","name":"合同管理","uuid":"aa001","puuid":"xmgl","sort":2,"state":"","type":"menu",
            "children":[
              {"id":"xjht","pId":"htgl","label":"新建合同","path":"xjht","icon":"playlist_add","name":"新建合同","puuid":"htgl","sort":21,"type":"menu","urlPath":"xjht","uuid":"xjht"},
              {"id":"xght","pId":"htgl","label":"修改合同","path":"xght","icon":"reorder","name":"修改合同","puuid":"htgl","sort":22,"type":"menu","urlPath":"xght","uuid":"xght"},
              {"id":"htcx","pId":"htgl","label":"合同查询","path":"htcx","icon":"search","name":"合同查询","puuid":"htgl","sort":23,"type":"menu","urlPath":"htcx","uuid":"htcx"},
              {"id":"htwj","pId":"htgl","label":"合同完结（锁止）","path":"htwj","icon":"domain_verification","name":"合同完结","puuid":"htgl","sort":24,"type":"menu","urlPath":"htwj","uuid":"htwj"}
            ]
          },
          {
            "id":"fpgl","pId":"aaaaa","label":"发票管理","icon":"receipt_long","name":"发票管理","uuid":"aa001","puuid":"xmgl","sort":3,"state":"","type":"menu",
            "children":[
              {"id":"xjfp","pId":"fpgl","label":"新建发票","path":"xjfp","icon":"playlist_add","name":"新建发票","puuid":"fpgl","sort":31,"type":"menu","urlPath":"xjfp","uuid":"xjfp"},
              {"id":"xgfp","pId":"fpgl","label":"修改发票","path":"xgfp","icon":"reorder","name":"修改发票","puuid":"fpgl","sort":32,"type":"menu","urlPath":"xgfp","uuid":"xgfp"},
              {"id":"fpcx","pId":"fpgl","label":"发票查询","path":"fpcx","icon":"search","name":"发票查询","puuid":"fpgl","sort":33,"type":"menu","urlPath":"fpcx","uuid":"fpcx"},
              {"id":"fptj","pId":"fpgl","label":"发票统计","path":"fptj","icon":"equalizer","name":"发票统计","puuid":"fpgl","sort":34,"type":"menu","urlPath":"fptj","uuid":"fptj"}
            ]
          },
          {
            "id":"zjgl","pId":"aaaaa","label":"单据管理","icon":"table_view","name":"单据管理","uuid":"aa001","puuid":"xmgl","sort":4,"state":"","type":"menu",
            "children":[
              {"id":"sk","pId":"zjgl","label":"收款单","path":"sk","icon":"receipt_long","name":"收款单","puuid":"zjgl","sort":41,"type":"menu","urlPath":"sk","uuid":"sk"},
              {"id":"skcx","pId":"zjgl","label":"收款查询","path":"skcx","icon":"search","name":"收款查询","puuid":"zjgl","sort":42,"type":"menu","urlPath":"skcx","uuid":"skcx"},
              // {"id":"fk","pId":"zjgl","label":"付款单","path":"fk","icon":"attach_money","name":"付款单","puuid":"zjgl","sort":43,"type":"menu","urlPath":"fk","uuid":"fk"},
              // {"id":"fkcx","pId":"zjgl","label":"付款查询","path":"fkcx","icon":"attach_money","name":"付款查询","puuid":"zjgl","sort":44,"type":"menu","urlPath":"fkcx","uuid":"fkcx"},
              {"id":"fksqd","pId":"kjgl","label":"付款单","path":"fksqd","icon":"shopping_cart","name":"付款单","puuid":"fksqd","sort":71,"type":"menu","urlPath":"fksqd","uuid":"fksqd"},
              {"id":"fksqdcx","pId":"kjgl","label":"付款单查询","path":"fksqdcx","icon":"search","name":"付款单查询","puuid":"kjgl","sort":72,"type":"menu","urlPath":"fksqdcx","uuid":"fksqdcx"},
              {"id":"cbfpbxd","pId":"kjgl","label":"成本费用报销单","path":"cbfpbxd","icon":"description","name":"成本费用报销单","puuid":"kjgl","sort":73,"type":"menu","urlPath":"cbfpbxd","uuid":"cbfpbxd"},
              {"id":"cbfpbxdcx","pId":"kjgl","label":"成本费用报销单查询","path":"cbfpbxdcx","icon":"search","name":"成本费用报销单查询","puuid":"kjgl","sort":74,"type":"menu","urlPath":"cbfpbxdcx","uuid":"cbfpbxdcx"},
              {"id":"pzsc","pId":"kjgl","label":"凭证生成","path":"pzsc","icon":"image_aspect_ratio","name":"凭证生成","puuid":"kjgl","sort":75,"type":"menu","urlPath":"pzsc","uuid":"pzsc"}
            ]
          },
          {
            "id":"tjfx","pId":"aaaaa","label":"统计分析","icon":"insert_chart_outlined","name":"统计分析","uuid":"aa001","puuid":"xmgl","sort":5,"state":"","type":"menu",
            "children":[
              {"id":"xmtj","pId":"tjfx","label":"项目统计","path":"xmtj","icon":"equalizer","name":"项目统计","puuid":"tjfx","sort":51,"type":"menu","urlPath":"xmtj","uuid":"xmtj"},
              {"id":"fphz","pId":"tjfx","label":"发票汇总*","path":"fphz","icon":"library_books","name":"发票汇总*","puuid":"tjfx","sort":52,"type":"menu","urlPath":"fphz","uuid":"fphz"},
              {"id":"zcfx","pId":"tjfx","label":"支出分析","path":"zcfx","icon":"calculate","name":"支出分析","tjfx":"tjfx","sort":53,"type":"menu","urlPath":"zcfx","uuid":"zcfx"},
              {"id":"srfx","pId":"tjfx","label":"收入分析","path":"srfx","icon":"functions","name":"收入分析","puuid":"tjfx","sort":54,"type":"menu","urlPath":"srfx","uuid":"srtj"},
              {"id":"xmtz","pId":"tjfx","label":"项目台账*","path":"xmtz","icon":"dvr","name":"项目台账*","puuid":"tjfx","sort":55,"type":"menu","urlPath":"xmtz","uuid":"xmtz"},
              {"id":"cbtz1","pId":"tjfx","label":"成本台账*","path":"cbtz1","icon":"exposure","name":"成本台账*","puuid":"tjfx","sort":56,"type":"menu","urlPath":"cbtz1","uuid":"cbtz1"},
              {"id":"khgystz","pId":"tjfx","label":"客户/供应商台账*","path":"khgystz","icon":"group","name":"客户/供应商台账*","puuid":"tjfx","sort":57,"type":"menu","urlPath":"khgystz","uuid":"khgystz"},
              {"id":"glfqd","pId":"tjfx","label":"关联方清单*","path":"all_inclusive","icon":"social_distance","name":"关联方清单*","puuid":"tjfx","sort":58,"type":"menu","urlPath":"glfqd","uuid":"glfqd"}
            ]
          },
          {
            "id":"xtsz","pId":"aaaaa","label":"系统设置","icon":"miscellaneous_services","name":"系统设置","uuid":"aa001","puuid":"xmgl","sort":6,"state":"","type":"menu",
            "children":[
              {"id":"khgys","pId":"xtsz","label":"客户/供应商管理","path":"khgys","icon":"people_alt","name":"客户/供应商管理","puuid":"xtsz","sort":61,"type":"menu","urlPath":"khgys","uuid":"khgys"},
              {"id":"yhgl","pId":"xtsz","label":"用户/权限管理","path":"yhgl","icon":"how_to_reg","name":"用户/权限管理","puuid":"xtsz","sort":62,"type":"menu","urlPath":"yhgl","uuid":"yhgl"},
              {"id":"lspz","pId":"xtsz","label":"历史凭证","path":"lspz","icon":"post_add","name":"历史凭证","puuid":"xtsz","sort":63,"type":"menu","urlPath":"lspz","uuid":"lspz"},
              {"id":"xmlxwh","pId":"xtsz","label":"项目类型维护","path":"xmlxwh","icon":"post_add","name":"项目类型维护","puuid":"xtsz","sort":64,"type":"menu","urlPath":"xmlxwh","uuid":"xmlxwh"},
              {"id":"sglxwh","pId":"xtsz","label":"施工类型维护","path":"sglxwh","icon":"post_add","name":"施工类型维护","puuid":"xtsz","sort":65,"type":"menu","urlPath":"sglxwh","uuid":"sglxwh"}
            ]
          }
        ]
      }
    }
  },
  /*mounted() {
     this.leftDrawerOpen=false,
     this.disable=true
    },*/
  methods: {
    tabclick(index) {
      if (
        this.com[index].child != undefined &&
        this.com[index].child.length > 0
      ) {
        (this.leftDrawerOpen = true), (this.disabl = false);
      } else {
        (this.leftDrawerOpen = false), (this.disabl = true);
      }
    },
    changeColor(color) {
      colors.setBrand("primary", color);
      this.customizeColor = color;
    },
    changeCustomizeColor() {
      colors.setBrand("primary", this.customizeColor);
    }
  }
}
</script>
