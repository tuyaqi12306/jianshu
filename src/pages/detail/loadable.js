import React from 'react'
import Loadable from 'react-loadable'
// import Loading from './my-loading-component';

const LoadableComponent = Loadable({
  loader: () => import('./'), // 这里import是异步加载的语法
  loading() {
    return <div>正在加载。。。</div>
  }
})

export default () => <LoadableComponent/>
