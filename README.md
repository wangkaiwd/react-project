## 问题记录
### 项目中使用`ant design mobile`
在使用了`craco`这个工具后，并不能直接使用根目录下的`.babelrc`配置文件，还需要安装一个插件: [`@jackwilsdon/craco-use-babelrc`](https://www.npmjs.com/package/@jackwilsdon/craco-use-babelrc) 

之后在`.babelrc`中配置如下内容：  
```json
{
  "presets": [
    "react-app" 
  ],
  "plugins": [
    [
      "import",
      {
        "libraryName": "antd-mobile",
        "style": "css"
      }
    ]
  ]
}
```
要在设置前添加`"presets": ["react-app"]`,不然无法识别`jsx`语法。配置之后可以正常运行，但是感觉可能会有问题。
### 一个奇怪的问题
为`tsconfig.json`配置`baseUrl`和`paths`属性，在执行`yarn start`命令之后会自动删除`paths`的相关配置。

当通过`extends`属性继承一个新的配置文件的时候，这个问题解决了。
