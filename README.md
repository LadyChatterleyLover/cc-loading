`cc-loading`是是基于 `loaders.css` 二次封装的 vue3 加载动画组件库, 帮你轻松的在项目中使用不同风格的加载动画。  
该项目受`@alex_xu/react-loading`启发，是`@alex_xu/react-loading`的vue3实现版本。全部采用`ts`编写，支持全局组件。  
效果图如下:  
<img src="https://camo.githubusercontent.com/578d6e2073c668e4a39fc513001cb0fea18ae4060fa24e4711ea8ba26045c96b/687474703a2f2f63646e2e646f6f72696e672e636e2f64722f72656163742d6c6f6164696e672e676966">

## 组件使用
1. 安装依赖: `npm i -S cc-loading`  
2. 在`main.ts`里引入以下代码: 
``` js
import ccLoading from 'cc-loading'
import 'cc-loading/cc-loading.css'

createApp().use(ccLoading)
```
3. 在组件里即可使用全部组件:  
``` js
<cc-ball-beat text="加载中..."></cc-ball-beat>
<cc-ball-clip-rotate text="加载中..."></cc-ball-clip-rotate>
// ...
```