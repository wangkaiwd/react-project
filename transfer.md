## 译: 开发一个`React`开关切换组件
学习如何使用原生`HTML`的复选框来开发一个`React`开关组件，在这个过程你将会学到许多`React`复选框相关的知识。

下面是`IOS`向世界推出的`UI`组件，人们把它称之为`Switch`或者`Toggle`：  

### 我们在开发什么

在`IOS`推出`Switch`之前，网页中的布尔输入只有复选框。复选框当然依旧可以在今天继续使用，但是`switch`根据现实生活中真实的开关改进了复选框。

`switch`给人真实的感觉。相比于点击复选框，`switch`的点击效果就像你在真实的使用一个开关一样。

因此，在这篇教程中，我们将会基于原生的`HTML`复选输入框来开发一个新的`React` `Switch`组件。此外，我们也会添加一些`CSS`样式，来让简单、古老的复选框变成一个时髦漂亮的`Switch`。

### 使用`HTML`开发`Switch`元素
每当我创建一个新的`React`组件的时候,我会先建立一个初步令人满意的`HTML`和`CSS`结构，然后再去编写`JavaScript`代码。

创建一个`Switch.js`的新文件，为它添加如下代码：  
```jsx harmony
import React from 'react';
import './Switch.css';

const Switch = () => {
  return (
    <>
      <input
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Switch;
```

你这时候如果在编辑器中完成了这段代码，由于我们使用了原生复选框来作为`React Switch`组件的基础，你将会看到一个简单的复选框。
> 提示：  
> 这里我们没有必要再重新发明一个轮子。毕竟，开关是展示布尔值的另一种方式，而复选框原本就是用来处理布尔值的输入框。

### 用`CSS`来美化组件
在组件文件的同一目录下建立`Switch.css`文件,加入下面的`CSS`代码，大概看一下每个类的用途。我不打算在这篇教程中去探索`CSS`,文章的重点是`JavaScript`和`React`。

