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

//合同管理
//获取合同列表
export function getContractList(params){
  return request({
    url:'/ContractList',
    method:'get',
    params: params,
  })
}
//添加合同列表
export function addContractList(data){

  return request({
    url:'/ContractList',
    method:'post',
    data:data
  })
}
//删除合同列表
export function deleteContractList(id){

  return request({
    url:`/ContractList/${id}`,
    method:'delete',
  })
}
//修改合同列表
export function editContractList(id,data){

  return request({
    url:`/ContractList/${id}`,
    method:'put',
    data:data
  })
}

//甲方管理
//获取甲方列表
export function getJFList(params){
  return request({
    url:'/JFList',
    method:'get',
    params: params,
  })
}
//添加甲方列表
export function addJFList(data){

  return request({
    url:'/JFList',
    method:'post',
    data:data
  })
}
//删除甲方列表
export function deleteJFList(id){

  return request({
    url:`/JFList/${id}`,
    method:'delete',
  })
}
//修改甲方列表
export function editJFList(id,data){

  return request({
    url:`/JFList/${id}`,
    method:'put',
    data:data
  })
}

//乙方管理
//获取乙方列表
export function getYFList(params){
  return request({
    url:'/YFList',
    method:'get',
    params: params,
  })
}
//添加乙方列表
export function addYFList(data){

  return request({
    url:'/YFList',
    method:'post',
    data:data
  })
}
//删除乙方列表
export function deleteYFList(id){

  return request({
    url:`/YFList/${id}`,
    method:'delete',
  })
}
//修改乙方列表
export function editYFList(id,data){

  return request({
    url:`/YFList/${id}`,
    method:'put',
    data:data
  })
}
