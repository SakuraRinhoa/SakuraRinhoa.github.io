# Web_Design

## 调试带语言切换脚本的网页方法

<details><summary>为什么需要这个？</summary>由于[CORS 跨來源資源共用](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/CORS)的原因，部分脚本无法在本地调试使用。</details>

- 临时关闭Chrome的CORS Policy
    1. 新增一个Chrome浏览器快捷方式，在其属性的末端增加如下代码 **（注意“--”前空格不可缺）** ；
    ```
    --user-data-dir="C:/Chrome dev session2" --disable-web-security
    ```
    2. 然后将该快捷方式的只读属性打开；
    3. 需要调试时将html绝对路径复制下来，再用该快捷方式打开。
- 使用特定工具运行
    1. VS Code安装插件Live server
    2. 点击右下角 ` Go Live ` 启动调试

## 项目文件储存提示

- 文件夹名一律**纯小写**字母，**禁止**加空格；
- **[.html]** 文件请存放在项目根目录；
- **[.css]** 文件请存放在 **[[css](https://gitlab.com/lemu-tech/web_design/-/tree/main/css)]** 文件夹内；
- **[.js]** 文件请存放在 **[[js](https://gitlab.com/lemu-tech/web_design/-/tree/main/js)]** 文件夹内；
- 图片（包括png、svg、jpeg、webp等）请存放在 **[[assets](https://gitlab.com/lemu-tech/web_design/-/tree/main/assets)]** 文件夹下的 **[[img](https://gitlab.com/lemu-tech/web_design/-/tree/main/assets/img)]** 文件夹内；
- 字体文件请存放在 **[[assets](https://gitlab.com/lemu-tech/web_design/-/tree/main/assets)]** 文件夹下的 **[[fonts](https://gitlab.com/lemu-tech/web_design/-/tree/main/assets/fonts)]** 文件夹内；
- 其他可能用到的文件请在 **[[assets](https://gitlab.com/lemu-tech/web_design/-/tree/main/assets)]** 文件夹下创建一个以**该文件类型为名**的文件夹存放。

## 前端开发记录
### Bootstrap 
#### Bootstrap 文档
- [Bootstrap 5 Document 六角学院译(5.0)](https://bootstrap5.hexschool.com/docs/5.0/getting-started/introduction/)
- [Bootstrap 4 Document Official(4.6.x)](https://getbootstrap.com/docs/4.6/getting-started/introduction/)
- [Bootstrap 5 Document Official(5.1)](https://getbootstrap.com/docs/5.1/getting-started/introduction/)

#### Bootstrap 教程
- [菜鸟教程](https://www.runoob.com/bootstrap5/bootstrap5-tutorial.html)
#### Bootstrap icon
- [Bootstrap Icon(GitHub)](https://github.com/twbs/icons)
- [Bootstrap Icon Official](https://icons.getbootstrap.com/)
#### 设置背景图片自适应屏幕
css中编辑此样式：
```
    .bg {
        background:url(图片地址) no-repeat center;
        background-size:contain;
    } 
```
然后在你的div里引用这个样式就行了：

```
    <div class="row bg">
```
使图片不随滚动条滚动，即固定不动则加fixd：
```
    .bg {
        background:url(图片地址) no-repeat center fixed;
        background-size:contain;
    }
```
#### Navbar & Menubar 设计参考
| 澳大利亚旅游局 |LVDAWEI|
| ------ | ------ |
| [澳大利亚旅游局 · 国际版](Australia.com)  | [lvdawei.com/响应式布局实战](lvdawei.com/post/responsive-layout-realworld)|
| [澳大利亚旅游局 · 中国大陆版](Australia.cn) ||

- [lvdawei.com/响应式布局实战](lvdawei.com/post/responsive-layout-realworld) 提供的是全套源代码/源文件，参考价值大。
- [澳大利亚旅游局官网](Australia.com) 是比较常见的现代化响应式网站，且目的也是展示信息、推广，页面设计可供参考。以下是部分代码截取：
![This is an image](/MD%20media/Australia.com.png)
### 元素悬浮于图片上
- [非响应式-教程](https://www.tutorialrepublic.com/faq/how-to-position-text-over-an-image-using-css.php)
- [响应式-StackOverflow](https://stackoverflow.com/questions/53969347/dynamic-responsive-solution-for-overlapping-divs)
### 让html中的文字不可被选中
- [csdn-blog](https://blog.csdn.net/qq_38152400/article/details/111308904)
### VS Code 比较文件差异
- [csdn-blog](https://blog.csdn.net/qq_41151638/article/details/79650141)
- [博客园cnblog](https://www.cnblogs.com/dead-micky/p/8472647.html)
- [简书jianshu](https://www.jianshu.com/p/fc18d228de91)
### 更改网站语言
- [GitHub-jquery.i18n](https://github.com/wikimedia/jquery.i18n#usage)
- [GitHub-jquery.i18n.properties](https://github.com/jquery-i18n-properties/jquery-i18n-properties)

### Windows Explorer 预览SVG文件
- 使用[PowerToys](https://github.com/microsoft/PowerToys)工具
    - 该工具还有很多其他的高级功能……
<!-- ## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://gitlab.com/-/experiment/new_project_readme_content:8b0b0bd6c7e63c4ca51687a09f1f68f8?https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://gitlab.com/-/experiment/new_project_readme_content:8b0b0bd6c7e63c4ca51687a09f1f68f8?https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://gitlab.com/-/experiment/new_project_readme_content:8b0b0bd6c7e63c4ca51687a09f1f68f8?https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://gitlab.com/lemu-tech/web_design.git
git branch -M main
git push -uf origin main
```

## Integrate with your tools

- [ ] [Set up project integrations](https://gitlab.com/-/experiment/new_project_readme_content:8b0b0bd6c7e63c4ca51687a09f1f68f8?https://gitlab.com/lemu-tech/web_design/-/settings/integrations)

## Collaborate with your team

- [ ] [Invite team members and collaborators](https://gitlab.com/-/experiment/new_project_readme_content:8b0b0bd6c7e63c4ca51687a09f1f68f8?https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://gitlab.com/-/experiment/new_project_readme_content:8b0b0bd6c7e63c4ca51687a09f1f68f8?https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://gitlab.com/-/experiment/new_project_readme_content:8b0b0bd6c7e63c4ca51687a09f1f68f8?https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://gitlab.com/-/experiment/new_project_readme_content:8b0b0bd6c7e63c4ca51687a09f1f68f8?https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Automatically merge when pipeline succeeds](https://gitlab.com/-/experiment/new_project_readme_content:8b0b0bd6c7e63c4ca51687a09f1f68f8?https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

## Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://gitlab.com/-/experiment/new_project_readme_content:8b0b0bd6c7e63c4ca51687a09f1f68f8?https://docs.gitlab.com/ee/ci/quick_start/index.html)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing(SAST)](https://gitlab.com/-/experiment/new_project_readme_content:8b0b0bd6c7e63c4ca51687a09f1f68f8?https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://gitlab.com/-/experiment/new_project_readme_content:8b0b0bd6c7e63c4ca51687a09f1f68f8?https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://gitlab.com/-/experiment/new_project_readme_content:8b0b0bd6c7e63c4ca51687a09f1f68f8?https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://gitlab.com/-/experiment/new_project_readme_content:8b0b0bd6c7e63c4ca51687a09f1f68f8?https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

***

# Editing this README

When you're ready to make this README your own, just edit this file and use the handy template below (or feel free to structure it however you want - this is just a starting point!).  Thank you to [makeareadme.com](https://www.makeareadme.com) for this template.

## Suggestions for a good README
Every project is different, so consider which of these sections apply to yours. The sections used in the template are suggestions for most open source projects. Also keep in mind that while a README can be too long and detailed, too long is better than too short. If you think your README is too long, consider utilizing another form of documentation rather than cutting out information.

## Name
Choose a self-explaining name for your project.

## Description
Let people know what your project can do specifically. Provide context and add a link to any reference visitors might be unfamiliar with. A list of Features or a Background subsection can also be added here. If there are alternatives to your project, this is a good place to list differentiating factors.

## Badges
On some READMEs, you may see small images that convey metadata, such as whether or not all the tests are passing for the project. You can use Shields to add some to your README. Many services also have instructions for adding a badge.

## Visuals
Depending on what you are making, it can be a good idea to include screenshots or even a video (you'll frequently see GIFs rather than actual videos). Tools like ttygif can help, but check out Asciinema for a more sophisticated method.

## Installation
Within a particular ecosystem, there may be a common way of installing things, such as using Yarn, NuGet, or Homebrew. However, consider the possibility that whoever is reading your README is a novice and would like more guidance. Listing specific steps helps remove ambiguity and gets people to using your project as quickly as possible. If it only runs in a specific context like a particular programming language version or operating system or has dependencies that have to be installed manually, also add a Requirements subsection.

## Usage
Use examples liberally, and show the expected output if you can. It's helpful to have inline the smallest example of usage that you can demonstrate, while providing links to more sophisticated examples if they are too long to reasonably include in the README.

## Support
Tell people where they can go to for help. It can be any combination of an issue tracker, a chat room, an email address, etc.

## Roadmap
If you have ideas for releases in the future, it is a good idea to list them in the README.

## Contributing
State if you are open to contributions and what your requirements are for accepting them.

For people who want to make changes to your project, it's helpful to have some documentation on how to get started. Perhaps there is a script that they should run or some environment variables that they need to set. Make these steps explicit. These instructions could also be useful to your future self.

You can also document commands to lint the code or run tests. These steps help to ensure high code quality and reduce the likelihood that the changes inadvertently break something. Having instructions for running tests is especially helpful if it requires external setup, such as starting a Selenium server for testing in a browser.

## Authors and acknowledgment
Show your appreciation to those who have contributed to the project.

## License
For open source projects, say how it is licensed.

## Project status
If you have run out of energy or time for your project, put a note at the top of the README saying that development has slowed down or stopped completely. Someone may choose to fork your project or volunteer to step in as a maintainer or owner, allowing your project to keep going. You can also make an explicit request for maintainers.
 -->
