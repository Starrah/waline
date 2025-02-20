---
title: 前端配置
icon: config
---

## el

- 类型: `string | HTMLElement`
- 必填: 否

Waline 的初始化挂载器。必须是一个有效的 **CSS 选择器** 或 HTMLELement 对象。

::: tip

如果你只想使用浏览量统计功能，请不要设置该项。

:::

## serverURL

- 类型: `string`
- 必填: 是

Waline 的服务端地址。

## path

- 类型: `string`
- 默认值: `window.location.pathname`
- 必填: 否

当前 _文章页_ 路径，用于区分不同的 _文章页_，以保证正确读取该 _文章页_ 下的评论列表。

::: warning

请保证每个 _文章页_ 路径的唯一性，否则可能会出现不同 _文章页_ 下加载相同评论列表的情况。

例子: 如果你站点的 `/example/path/` 和 `/example/path` 对应同一个页面，你最好将其设置为 `window.location.pathname.replace(/\/$/,'')`。

:::

## lang

- 类型: `string`
- 默认值: `'zh-CN'`
- 必填: 否

多语言支持。

可选值:

- `'zh'`
- `'zh-CN'`
- `'zh-TW'`
- `'en'`
- `'en-US'`
- `'jp'`
- `'jp-JP'`

如需 _自定义语言_，请参考 [i18n](../guide/client/i18n.md)。

## visitor

- 类型: `boolean`
- 默认值: `false`
- 必填: 否

文章访问量统计。

## emoji

- 类型: `(string | EmojiInfo)[]`
- 默认值: `['https://cdn.jsdelivr.net/gh/walinejs/emojis/weibo']`

表情设置，详见 [自定义表情](../guide/client/emoji.md)

## dark

- 类型: `string`
- 必填: 否

暗黑模式适配。

- 设置 `'auto'` 会根据设备暗黑模式自适应。
- 填入 CSS 选择器会在对应选择器生效时启用夜间模式。

::: tip 针对不同主题的例子

- **Docusaurus**: 它会在 `<html>` 上通过设置 `data-theme="dark"` 开启暗黑模式，那么你需要将 `dark` 选项设置为 `'html[data-theme="dark"]'`。

- **hexo-theme-fluid**: 它会在 `<html>` 上通过设置 `data-user-color-scheme="dark"` 开启暗黑模式。那么你需要将 `dark` 选项设置为 `'html[data-user-color-scheme="dark"]'`。

- **vuepress-theme-hope**: 它会在 `<body>` 上添加`theme-dark` class 来开启暗黑模式。那么你需要将 `dark` 选项设置为 `body.theme-dark`。

:::

自定义样式与暗黑模式详见 [自定义样式](../guide/client/style.md)。

## meta

- 类型: `string[]`
- 默认值: `['nick', 'mail', 'link']`
- 必填: 否

评论者相关属性。可选值: `'nick'`, `'mail'`, `'link'`

## requiredMeta

- 类型: `string[]`
- 默认值: `[]`
- 必填: 否

设置**必填项**，默认匿名，可选值:

- `[]`
- `['nick']`
- `['nick', 'mail']`

## login

- 类型: `string`
- 默认值: `'enable'`
- 必填: 否

登录模式状态，可选值:

- `'enable'`: 启用登录 (默认)
- `'disable'`: 禁用登录，用户只能填写信息评论
- `'force'`: 强制登录，用户必须注册并登录才可发布评论

## wordLimit

- 类型: `number | [number, number]`
- 默认值: `0`
- 必要性: `false`

评论字数限制。填入单个数字时为最大字数限制。设置为 `0` 时无限制。

## pageSize

- 类型: `number`
- 默认值: `10`
- 必填: 否

评论列表分页，每页条数。

## uploadImage

- 类型: `Function | false`
- 必填: 否

自定义图片上传方法，方便更好的存储图片。方法执行时会将图片对象传入。

你可以设置为 `false` 以禁用图片上传功能。

## highlight

- 类型: `Highlighter | false`
- 必填: 否

**代码高亮**，默认使用 `hanabi`，你可以传入一个自己的代码高亮器。

```ts
(code: string, lang: string) => string

// 或

(
  code: string,
  lang: string,
  callback?: (error: unknown | undefined, code?: string) => void
) => void;
```

你可以设置为 `false` 以禁用代码高亮功能。

## math

- 类型: `(blockMode: boolean, tex: string) => string | false`
- 必填: 否

自定义数学公式的渲染方法，方便更好的预览数学公式。更多请参考 [KaTeX API](https://katex.org/docs/api.html#server-side-rendering-or-rendering-to-a-string) 或 [MathJax API](http://docs.mathjax.org/en/latest/web/typeset.html#converting-a-math-string-to-other-formats)。

你可以设置为 `false` 以禁止预览数学公式。

## copyright

- 类型: `boolean`
- 默认值: `true`
- 必填: 否

是否显示页脚版权信息。

::: tip

我们希望你保持打开以支持 Waline

:::

## 废弃的 API

以下 API 仍然有效，但它们会在 V2 版本中移除

### langMode

::: warning 已过时

请使用 `locale`

:::

- 类型: `Locale`
- 必填: 否

自定义语言。

### placeholder

::: warning 已过时

请使用 `locale.placeholder`

:::

- 类型: `string`
- 默认值: `'Just Go GO'`
- 必填: 否

评论框 **占位提示符**。

### emojiCDN

::: warning 已过时

请使用 `emoji`

:::

- 类型: `string`
- 默认值: `https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/`
- 必填: 否

设置**表情包 CDN**，参考[自定义表情](../guide/client/emoji.md)

### emojiMaps

::: warning 已过时

请使用 `emoji`

:::

- 类型: `Object`
- 默认值: `微博表情包`
- 必填: 否

设置**表情包映射**，参考[自定义表情](../guide/client/emoji.md)

### requiredFields

::: warning 已过时

请使用 `requiredMeta`

:::

### avatar

::: warning 已过时

建议配合最新版本的服务端，通过服务端的 `AVATAR_PROXY` 配置。

:::

- 类型: `string`
- 默认值: `mp`
- 必填: 否

[Gravatar](http://cn.gravatar.com/) 头像展示方式。

可选值:

- `''`
- `'mp'`
- `'identicon'`
- `'monsterid'`
- `'wavatar'`
- `'retro'`
- `'robohash'`
- `'hide'`

更多信息，请查看 [头像配置](../guide/client/avatar.md)。

### avatarForce

::: warning 已过时

建议配合最新版本的服务端，通过服务端的 `AVATAR_PROXY` 配置。

:::

- 类型: `boolean`
- 默认值: `false`
- 必填: 否

每次访问是否**强制**拉取最新的*评论列表头像*

> 不推荐设置为 `true`，目前的*评论列表头像*会自动带上 `Waline` 的版本号

### avatarCDN

::: warning 已过时

建议配合最新版本的服务端，通过服务端的 `AVATAR_PROXY` 配置。

:::

- 类型: `string`
- 默认值: `https://seccdn.libravatar.org/avatar/`
- 必填: 否

设置头像 CDN 地址。可使用任何与 [Gravatar](http://cn.gravatar.com/) API 兼容的服务。

### anonymous

::: warning 已过时

请使用 `login`

:::

- 类型: `boolean`
- 必填: 否

是否允许登录评论。默认情况是两者都支持，设置为 `true` 表示仅支持匿名评论，`false` 表示仅支持登录评论。

### mathTagSupport

::: warning 已过时

请在服务端使用 mathjax 渲染公式。

:::

- 类型: `boolean`
- 默认值: `false`
- 必填: 否

是否注入核外样式以兼容 `<math>` 显示。

### copyRight

::: danger 已废弃

请使用 `copyright`

:::
