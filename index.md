# index.md
<h3 align=center>这份文件用来存储网页的各种元素的命名及解释，以及CSS文件内部编写规则</h3>
<hr/>

## html代码规范
### 暂行命名规则

为了让代码更清晰易读，目前实施以下规则，随需求进行更新修改:

1. 一段内容用 **`Part`** 表示；

2. 一个内容单元用 **`Mod`** 表示；
    - 例如，**`Desktop`** 视图下，一段内容一般分成 **`Painting`** 装饰画和 **`Text`** 文字部分，已在**html代码**内备注 **`Painting Mod`** 和 **`Text Mod`**；

3. **`Layout`** 是指 **`Mobile` `Desktop`** 两种视图；

4. 元素 **`id`** 用 **`{包裹的元素类型}-{名称}-{Mod}-{Part}-{Layout}`** 表示；
    - layout是可选参数，在不需要时可以省略；
    - Sample:
        - **`id="p-motto-title-text-aboutus-desktop"`** 表示这是被 **`<p>`** 包裹的 **`motto-title`** ，它属于 **`"text" mod`**、**`"aboutus" part`**，且视图版本是 **`desktop`** ；       

5. 元素 **`class`** 用 **`{名称}-{Layout版本}`** 表示；
    - Sample：
        - **`class="motto-title-desktop"`** 表示这是 **`motto-title`** ，且视图版本是 **`desktop`** ；

6. 元素使用 **`class`** 和 **`id`** 的原则
    - 只有当**等于或多于两个元素可以应用相同的样式**才使用 **`class`** 统一控制，**特殊的/单一的元素**用 **`id`** 控制；

7. 元素的 **`id`** 应**放在 `class` 前面**，以便阅读；

8. 不同类型的元素如果需要**大批量应用相同的样式**，可以不按照上文要求命名 **`class`** ，但是命名应**简明易懂**；
    - Sample：
        - **`class="text-white"`** 应用该样式使文字设置为 **`白色`** ;
        - **`class="svg-width100"`** 该 **`svg`** 属性设置为 **`width=100%`** ;
### 任务
1. [x] 将html内的 **`id`** 和 **`class`** 全部按规范修改。

<hr/>

## CSS代码规范
### Web页面布局设计原则
- 移动设备优先;
- 基于 **移动设备优先** 政策，CSS默认样式是为移动设备编写的；
- 大屏幕模式的布局在 **移动设备** 基础上修改；
### CSS文件编写规则
- 全部字母小写；
- 距离单位一律用 **`vw`** 和 **`%`** ，绝对禁止使用 **`pixel`**，例外 ：**Nav Bar**及**超大屏幕布局**；
### 任务
1. [ ] 用新命名的 **`id`** 和 **`class`** 修改CSS文件内容。
2. [ ] 删除旧的/无用的CSS代码。
### 自定义公用类
1. `mobile-layout`类
    - 应用在 **只在** `mobile layout` 出现的最大父级`div`元素上，在 `desktop layout` 下会应用 `display=none`属性，在 `mobile layout` 下会应用 `display=block`属性。
2. `desktop-layout`类
    - 应用在 **只在** `desktop layout` 出现的最大父级`div`元素上，在 `mobile layout` 下会应用 `display=none`属性，在 `desktop layout` 下会应用 `display=block`属性。
### Bootstrap类
***！！！！如无必要请勿覆盖！！！！！！！！***
1. text-start/text-center/text-end
    - 控制文本位置（相对父容器左对齐/居中/右对齐）
2. col-{num}
    - 容器布局专用

### 注释解释
1. `<!-- id issue -->`
    - `id`命名有问题；
2. `<!-- class issue -->`
    - `class`命名有问题；
3. `<!-- Bootstrap class -->`
    - `class`内包含`bootstrap`的`class`标记；
4. `<!-- Bootstrap id -->`
    - `id`内包含`bootstrap`的`id`标记；
5. `<!-- Checked -->`
    - `id`和`class`都检查过了；
6. `<!-- New class Checked -->`
    - `class`正确使用了新的规则；
7. `<!-- New id Checked -->`
    - `id`正确使用了新的规则；

### Navbar使用的类

### 网页主要内容使用的类
1. `titleicon`代表part标题上面的小装饰图标;
#### 缩写解释
1. `qmrk`代表`Quotation Mark`;
2. `msg`代表`message`;
3. `msgbox`代表`message box`;

### Foobar使用的类
