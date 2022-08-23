/*
 * @Date         : 2022-08-23 16:26:51
 * @Author       : BDFD,bdfd2005@gmail.com
 * @Github       : https://github.com/bdfd
 * @LastEditTime : 2022-08-23 16:28:01
 * @LastEditors  : BDFD
 * @Description  : 
 * @FilePath     : \nav.config.ts
 * Copyright (c) 2022 by BDFD, All Rights Reserved. 
 */
import { IConfig } from './src/types'

const c: IConfig = {
  // [Mondatory], Please replace following Github url with your own Github address which you forked in.
  // [必填], 请填写您的仓库地址
  gitRepoUrl: 'https://github.com/bdfd/NavPage',

  // Deployment branch name
  // 部署分支
  branch: 'main',

  // Whether the route is in Hash mode, if it is deployed on github pages, it must be set to true
  // 路由是否Hash模式, 如果是部署在github pages 务必设为 true
  hashMode: true,
}

export default c
