import {request} from './request';

//项目管理
//获取项目列表
export function getXMList(params){
    return request({
        url:'/XMList',
        method:'get',
        params: params,
    })
}
//添加项目列表
export function addXMList(data){

  return request({
    url:`/XMList`,
    method:'post',
    data:data
  })
}
//删除项目列表
export function deleteXMList(id){

  return request({
    url:`/XMList/${id}`,
    method:'delete',
  })
}
//修改项目列表
export function editXMList(id,data){

  return request({
    url:`/XMList/${id}`,
    method:'put',
    data:data
  })
}
