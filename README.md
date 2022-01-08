# cc-ui

> 这个仓库暂时废弃了，组件代码暂时都写在了cc-plugin里面

Cocos Creator插件，官方也提供了内置的UI空间，比如ui-button，ui-input等等。

但是随着开发插件的深入，我发现默认的ui控件在所有的Creator版本上表现并不是太一致
在实际开发过程中，我也发现了这个问题，偶尔会有小伙伴给我反馈一些bug

比如控件的disable属性在部分版本上无法生效
就目前来说，Creator2.x的用户基数还是非常庞大的，而且插件在Creator3.x上，书写方式发生了比较大的变化，实际适配的时候，还是很头疼的，并不是很容易的就能将已有的2.x插件迁徙到3.x，而且在后续的插件开发工作中，还要同时维护2.x，3.x这2个版本的插件，想想都心累，当然，3.x肯定是后起之秀，但是目前来说，2.x仍旧是主站版本。

但是为啥Creator编辑器自身没有发生这个问题，后来仔细思考了下原因：
1. Creator的每个版本中，都完整包含了引擎、编辑器，并且两者是一一对应绑定的关系，至少当前引擎版本和当前编辑器版本是没有任何大问题的。

2. 插件则不同，一款插件可能是要运行在N个Creator版本上的。如果插件使用了编辑器自带的UI控件，如果某个Creator版本没有这个UI控件，或者该UI控件的功能版本之间有差异，就会导致插件的运行异常。

3. Creator自身是不会发生该问题，因为UI控件的迭代，是跟随Creator版本一起发布的。

经过上述思考，插件的UI控件如果使用了编辑器默认的，的确会踩中这个坑。

如果你的插件要尽可能的兼容尽可能多的Creator版本，那有什么解决办法呢？

当然是插件尽可能减少使用编辑器的功能（我的意思不是编辑器做的太垃圾），
这就是这个仓库产生的原因，插件自身就携带了UI控件，这样就能在适配所有的版本。
那么我们为什么不使用第三方的UI库呢？比如element-ui、iview等，原因是恶心的shadow-dom，主流的UI框架，并没有处理shadow-dom，而creator在处理插件之间样式隔离的时候，选择的方案就是shadow-dom，这就是很尴尬的地方。






## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


https://monocy.site/2019/07/11/%E4%BD%BF%E7%94%A8-vue-cli-%E5%8F%91%E5%B8%83%E4%B8%80%E4%B8%AA%E5%AE%8C%E5%96%84%E7%9A%84%E5%8C%85/
