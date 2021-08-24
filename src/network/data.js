import {request} from './request';

//项目管理
//获取项目列表
export function getProjectList(params){
    return request({
        url:'/ProjectList',
        method:'get',
        params: params,
    })
}
//添加项目列表
export function addProjectList(data){

  return request({
    url:'/ProjectList/',
    method:'post',
    data:data
  })
}
//删除项目列表
export function deleteProjectList(id){

  return request({
    url:`/ProjectList/${id}`,
    method:'delete',
  })
}
//修改项目列表
export function editProjectList(id,data){

  return request({
    url:`/ProjectList/${id}`,
    method:'put',
    data:data
  })
}
