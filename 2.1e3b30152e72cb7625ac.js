(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{17:function(n,e,t){"use strict";t.r(e);var o=t(0),s=t(4);t(220);e.default=function(){console.log(Object(s.useParams)());var n=Object(s.useParams)().fileName;return o.createElement("article",{className:"markdown-body mt20 mb20",dangerouslySetInnerHTML:{__html:t(314)("./".concat(n))}})}},314:function(n,e,t){var o={"./19.10.12-webpack4新手向.md":315,"./19.10.12-新的开始.md":316,"./19.10.15-webpack4+react+babel 踩坑.md":317,"./19.10.18-搭建自己的Github Page.md":318,"./19.10.24-webpack打包优化.md":319,"./19.10.24-贴一个自己的单页面配置.md":320,"./19.10.26-瞎搞webhook.md":321,"./19.10.30-记一道面试题.md":324,"./19.10.31-HTTP协议.md":325,"./19.10.31-HTTP状态码.md":329,"./19.11.01-ES6 Iterator.md":330,"./19.11.05-What is this.md":331,"./19.11.07-事件循环（Event Loop）.md":332,"./19.11.08-webpack 热更新原理.md":335};function s(n){var e=r(n);return t(e)}function r(n){if(t.o(o,n))return o[n];var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}s.keys=function(){return Object.keys(o)},s.resolve=r,(n.exports=s).id=314},315:function(n,e){n.exports='<h3 id="webpack4新手向">webpack4新手向</h3>\n<p>写自己配置webpack的经历 </p>\n<p>参考资料：<br><a href="https://www.webpackjs.com/guides/">webpack 中文文档 指南栏</a><br><a href="https://webpack.js.org/guides/">webpack 英文文档 指南栏</a><br>ps: 感觉 英文 Configuration 栏 看着舒服 知道 是哪个配置项</p>\n<h4 id="初始化webpack">初始化webpack</h4>\n<p>安装 webpack &amp; webpack-cli</p>\n<pre><code>npm init -y\nnpm install webpack webpack-cli --save-dev</code></pre><p>添加webpack配置文件 webpack.config.js</p>\n<pre><code>const path = require(&#39;path&#39;);\n\nmodule.exports = {\n  entry: &#39;./src/index.js&#39;,\n  output: {\n    filename: &#39;bundle.js&#39;,\n    path: path.resolve(__dirname, &#39;dist&#39;)\n  }\n}</code></pre><p>package.json 的 scripts 中添加 build 命令</p>\n<pre><code>&quot;build&quot;: &quot;webpack --mode production&quot;,</code></pre><p>这样 我们就可以 <em>npm run build</em> 打包我们的代码了</p>\n<p>根据上面的配置:<br>入口文件： <em>src/index.js</em><br>打包后的目录： <em>dist</em>  </p>\n<pre><code>  |- package.json\n+ |- webpack.config.js\n  |- /dist\n    |- bundle.js\n  |- /src\n    |- index.js</code></pre><h4 id="添加html模版">添加html模版</h4>\n<p>我们打包生成的js文件需要配合html文件，可以生成web入口。<br>我们可以通过 webpack的plugins配置项，添加 html-webpack-plugin，生成一个html入口模版</p>\n<p>安装html-webpack-plugin依赖</p>\n<pre><code>npm i html-webpack-plugin -D</code></pre><p>修改webpack.config.js </p>\n<pre><code>const htmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;)\n\nmodule.exports = {\n  ...\n  plugins: [\n    new HtmlwebpackPlugin({\n      title: &#39;title 参数 生成的html模板的title。但指定了 template 后 该参数无效！！！&#39;\n      filename: &#39;xxxx.html&#39;,   // build后html文件名\n      template: &#39;./src/index.html&#39;  // 入口html文件模板，不指定的话，会默认生成 一个html模版\n    })\n  ]\n}</code></pre><p><em>基本模版内容仅供参考</em>\n需放到上面配置的template对应目录</p>\n<pre><code>&lt;!DOCTYPE html&gt;\n&lt;html lang=&quot;en&quot;&gt;\n&lt;head&gt;\n  &lt;meta charset=&quot;UTF-8&quot;&gt;\n  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;\n  &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;\n  &lt;title&gt;React App&lt;/title&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;div id=&quot;app&quot;&gt;&lt;/div&gt;\n&lt;/body&gt;\n&lt;/html&gt;</code></pre><p>打包后的文件结构</p>\n<pre><code>  |- package.json\n  |- webpack.config.js\n  |- /dist\n    |- bundle.js\n  + |- xxx.html\n  |- /src\n    |- index.js</code></pre><h4 id="可以开始开发react了">可以开始开发React了</h4>\n<p>webpack-dev-server登场</p>\n<pre><code>npm i webpack-dev-server --save-dev</code></pre><p>安装React &amp; React-Dom</p>\n<pre><code>npm i react react-dom -S</code></pre><p>package.json 的 scripts 中添加 start 命令</p>\n<pre><code>&quot;start&quot;: &quot;webpack-dev-server --mode development --open --hot&quot;,</code></pre><p>这样 我们就可以 <em>npm start</em> 本地开发我们的项目了</p>\n<p>在src下 添加以下文件看看效果吧\n<em>src/index.js</em></p>\n<pre><code>import React from &#39;react&#39;\nimport ReactDOM from &#39;react-dom&#39;\nimport App from &#39;./components/app&#39;\n\nReactDOM.render(&lt;App /&gt;, document.getElementById(&#39;app&#39;))</code></pre><p><em>src/components/app.js</em></p>\n<pre><code>import React, { Component } from &#39;react&#39;\n\nexport default class App extends Component {\n  render() {\n    return (\n      &lt;div&gt;\n        test \n      &lt;/div&gt;\n    )\n  }\n}</code></pre><h4 id="添加-babel">添加 babel</h4>\n<p>安装依赖 <em>@babel/core @babel/preset-env @ bable/preset-react</em></p>\n<pre><code>npm install --save-dev @babel/core @babel/preset-env @ bable/preset-react</code></pre><p>添加 .babelrc 配置文件</p>\n<pre><code>// targets, useBuiltIns 等选项用于编译出兼容目标环境的代码\n// 其中 useBuiltIns 如果设为 &quot;usage&quot;\n// Babel 会根据实际代码中使用的 ES6/ES7 代码，以及与你指定的 targets，按需引入对应的 polyfill\n// 而无需在代码中直接引入 import &#39;@babel/polyfill&#39;，避免输出的包过大，同时又可以放心使用各种新语法特性。\n// 还需要指定corejs 版本\n{\n  &quot;presets&quot;: [\n    [\n      &quot;@babel/preset-env&quot;,\n      {\n        {\n          &quot;modules&quot;: false,\n          &quot;targets&quot;: {\n            &quot;browsers&quot;: [&quot;&gt; 1%&quot;, &quot;last 2 versions&quot;, &quot;not ie &lt;= 8&quot;]\n          },\n          &quot;useBuiltIns&quot;: &quot;usage&quot;,\n          &quot;corejs&quot;: 2\n        } \n      }\n    ],\n    &quot;@babel/preset-react&quot;\n  ]\n}</code></pre>'},316:function(n,e){n.exports='<h4 id="新的开始">新的开始</h4>\n<ul>\n<li>拥抱变化</li>\n<li>满怀信心</li>\n<li>HAPPY </li>\n</ul>\n'},317:function(n,e){n.exports='<h3 id="webpack4reactbabel-踩坑">webpack4+react+babel 踩坑</h3>\n<p>自己踩坑的经历 </p>\n<h4 id="react-router">react-router</h4>\n<p>issue: 定义的 BrowserRouter, 路由刷新 报 cannot get /xxx</p>\n<p>answer:  </p>\n<ul>\n<li><p>本地webpack 配置 </p>\n<pre><code>devServer: {\n  historyApiFallback: true,\n}</code></pre><p><em>只适合开发环境中进行配置</em>\n<em>线上环境需要服务器支持</em></p>\n</li>\n<li><p>BrowserRouter 改为 HashRouter   </p>\n<ol>\n<li>路由会有 # 号，影响美观</li>\n<li>不能使用服务器渲染</li>\n</ol>\n</li>\n</ul>\n<h4 id="babel7">Babel7</h4>\n<p>issue: Support for the experimental syntax &#39;classProperties&#39; isn&#39;t currently enabled </p>\n<p>answer: </p>\n<pre><code>npm i -D @babel/plugin-proposal-class-properties\n\n\n配置.babelrc \n\n{ \n  &quot;plugins&quot;: [ \n    [\n      &quot;@babel/plugin-proposal-class-properties&quot;, \n      { &quot;loose&quot;: true }\n    ] \n  ] \n}   \n</code></pre><p>issue: babel 在每个文件都插入了辅助代码，使代码体积过大！</p>\n<p>answer: </p>\n<pre><code>你必须执行 \nnpm install @babel/plugin-transform-runtime --save-dev 来把它包含到你的项目中，也要使用 \nnpm install babel-runtime --save-dev 把 babel-runtime 安装为一个依赖\n\n修改.babelrc\n\n&quot;plugins&quot;: [\n  ...\n  &quot;@babel/transform-runtime&quot;,\n  ...\n]</code></pre><p>issue: this.setDynamic is not a function</p>\n<p>answer: </p>\n<pre><code>babel7-\nnpm install babel-plugin-transform-runtime --save-dev\n\nbabel7+ 插件 修改\nnpm install @babel/plugin-transform-runtime --save-dev</code></pre>'},318:function(n,e){n.exports='<h3 id="搭建自己的github-page">搭建自己的Github Page</h3>\n<p>有两种方式</p>\n<ul>\n<li><p>创建一个 username.github.io repo<br>创建一个 index.md / index.html\n路径 在  <code>https://username.github.io</code></p>\n</li>\n<li><p>创建一个 xxx repo<br>创建一个 index.md / index.html<br>setting 下 选择 github page 打开 page 功能\n路径 在  <code>https://username.github.io/xxx</code></p>\n</li>\n</ul>\n<blockquote>\n<p>master 分支下 默认 读取 index 文件 作为 根路由。</p>\n</blockquote>\n<blockquote>\n<p>Github Page 的路由规则 是 托管 master 根目录下的 xxx.md(html)，对应 <code>https://username.github.io/xxx</code>。 </p>\n</blockquote>\n<blockquote>\n<p>index除外，index文件默认根路由。</p>\n</blockquote>\n<h4 id="这样我们-就可以-将我们-通过脚手架-build-后的文件-托管到-git-查看效果了">这样我们 就可以 将我们 通过脚手架 build 后的文件 托管到 git 查看效果了</h4>\n<p>我们的 单页面应用 路由 建议使用 HashRouter，因为 BroswerRouter 有问题</p>\n<p>ps: 等着看看是否解决 和 如何解决</p>\n<h4 id="我的经验">我的经验</h4>\n<h5 id="stage-1-本着各各代码库-各司其职的原则">stage 1: 本着各各代码库 各司其职的原则</h5>\n<pre><code>step 1:\n\ngit clone https://github.com/xxx/xxx.github.io.git  \n初始化 我们的 Github Pages 的本地库  \n\nstep 2:\n\n新建另一个开发代码库   \n初始化 开发框架 开发完 npm run build 生成 dist 目录\n\nstep 3:\n\n将 dist 目录下 的 文件 复制到 Github Page 库下 更新</code></pre><p><em>我的心路历程@1</em>  </p>\n<blockquote>\n<p>init github-page-repo -&gt; init work-repo -&gt; work done -&gt; build -&gt; move dist to github-page-repo -&gt; update</p>\n</blockquote>\n<p>大写的心累</p>\n<h5 id="stage-2-聪明一点的我，把开发库改成了-github-page-库下的-开发分支">stage 2: 聪明一点的我，把开发库改成了 Github Page 库下的 开发分支</h5>\n<pre><code>step 1:\n\ngit clone https://github.com/xxx/xxx.github.io.git  \n初始化 我们的 Github Pages 的本地库  \n\nstep 2:\ngit checkout -b dev\n新建另一个开发分支 \n初始化 开发框架 开发完 npm run build 生成 dist 目录\n\nstep 3:\n\n将 dist 目录下 的 文件 复制到 master 分支 更新</code></pre><p><em>我的心路历程@2</em></p>\n<blockquote>\n<p>init github-page-repo -&gt; checkout dev-branch -&gt; work done -&gt; build -&gt; move dist to master -&gt; update</p>\n</blockquote>\n<p>虽然依旧心累但是 只维护 一个库 不用 切文件夹 了，但是要切分支</p>\n<p><em>我的心路历程@2.1</em></p>\n<p>干嘛不用个脚本！！！</p>\n<blockquote>\n<p>添加 deploy.sh 一键 ./deploy.sh 部署发布</p>\n</blockquote>\n<pre><code class="language-shell">npm run build\ngit checkout master\nrm -rf index.html\nrm -rf *.js\nrm -rf *.css\nmv dist/* ./\ngit add .\ngit commit -m &#39;commit message&#39;\ngit push origin master\ngit checkout dev</code></pre>\n<p>Because of Lan, I become stronger!!!</p>\n'},319:function(n,e){n.exports='<h3 id="webpack-配置打包优化">webpack 配置打包优化</h3>\n<h4 id="样式提取及压缩">样式提取及压缩</h4>\n<p><em>mini-css-extract-plugin</em> 将css文件提取成一个文件\n<em>optimize-css-assets-webpack-plugin</em> 压缩css文件</p>\n<pre><code>mini-css-extract-plugin 将css文件提取成一个文件\n\nconst MiniCssExtractPlugin = require(&#39;mini-css-extract-plugin&#39;) // css 并合并成 文件\n\nmodule: {\n  rules: [\n    {\n      test: /\\.(le|c)ss$/,\n      use: [\n        // 添加 环境判断 变量 只有生产环境 使用 MiniCssExtractPlugin\n        isDEV ? &#39;style-loader&#39; : MiniCssExtractPlugin.loader,\n        &#39;css-loader&#39;, \n        { \n          loader: &#39;postcss-loader&#39;,\n          options: {\n            plugins: loader =&gt; [\n              require(&#39;autoprefixer&#39;)(), // CSS浏览器兼容 需要package.json 添加 对应的 browserslist,也有其他方式，自行搜索\n            ]\n          }\n        },\n        `less-loader?{&quot;sourceMap&quot;:true, &quot;modifyVars&quot;:${JSON.stringify(theme)}, &quot;javascriptEnabled&quot;: true}`,\n      ], // 注意排列顺序，执行顺序与排列顺序相反\n    },\n  ],\n}\n\nplugins: [\n  ...,\n  ...(isDEV ? \n    []\n    : [\n      new MiniCssExtractPlugin({\n        filename: &#39;[name].css&#39;,\n        // 将相关模块的 样式分离，生成不同的文件，按需加载 css下载变小，加快页面加载\n        chunkFilename: &#39;[name].[contenthash].css&#39; \n      }),\n    ]\n  ),\n  ...,\n],\n\noptimize-css-assets-webpack-plugin 压缩css文件\n\noptimization: {\n  minimizer: [\n    // 混淆 js\n    new UglifyJsPlugin({\n      uglifyOptions: {\n        compress: {\n          drop_console: true,\n        },\n        ecma: 5,\n      },\n      cache: true,\n      parallel: true,\n      sourceMap: true,\n    }),\n    // 压缩css\n    new OptimizeCSSAssetsPlugin({\n      assetNameRegExp: /\\.css$/g,\n      cssProcessorOptions: {\n        // const safeParser = require(&#39;postcss-safe-parser&#39;) 添加前缀的规则\n        parser: safeParser, \n        discardComments: {\n          removeAll: true,\n        },\n      },\n    }),\n  ],\n},</code></pre><h4 id="js模块打包拆分">js模块打包拆分</h4>\n<h5 id="commonjs-提取">common.js 提取</h5>\n<pre><code>optimization: {\n  splitChunks: {\n    cacheGroups: {\n      common: {\n        test: /[\\\\/]node_modules[\\\\/] || src\\//,\n        chunks: &#39;all&#39;,\n        name: &#39;common&#39;,\n        minSize: 0,\n        minChunks: 2,\n        priority: 10, //优先级\n        enforce: true,\n      },\n    },\n  },\n}</code></pre><h5 id="react、react-dom、react-router-dom-等公用模块-走cdn">react、react-dom、react-router-dom 等公用模块 走CDN</h5>\n<blockquote>\n<p>将我们用到的依赖 通过外部cdn的方式引入，打包时不打包，减少打包体积大小，将它们从package.json里面删掉</p>\n</blockquote>\n<pre><code>externals: {\n  react: &#39;React&#39;,\n  &#39;react-dom&#39;: &#39;ReactDOM&#39;,\n  &#39;react-router-dom&#39;: &#39;ReactRouterDOM&#39;,\n},\nplugins: [\n  ...,\n  new HtmlWebpackPlugin({\n    jsCdns: [\n      &#39;https://cdn.jsdelivr.net/npm/react@16.10.2/umd/react.production.min.js&#39;,\n      &#39;https://cdn.jsdelivr.net/npm/react-dom@16.10.2/umd/react-dom.production.min.js&#39;,\n      &#39;https://cdn.jsdelivr.net/npm/react-router-dom@5.1.2/umd/react-router-dom.min.js&#39;,\n    ],\n    template: &#39;./template/index.html&#39;,\n    minify: {\n      collapseWhitespace: true, // 折叠空白\n      removeComments: true, // 移除注释\n      removeAttributeQuotes: true // 移除属性的引号\n    }\n  }),\n  ...,\n],</code></pre><p><em>模版对应修改</em></p>\n<pre><code>&lt;!DOCTYPE html&gt;\n&lt;html lang=&quot;en&quot;&gt;\n&lt;head&gt;\n  &lt;meta charset=&quot;UTF-8&quot;&gt;\n  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;\n  &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;\n  &lt;title&gt;suyunlonsy&lt;/title&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;div id=&quot;app&quot;&gt;&lt;/div&gt;\n\n  &lt;% htmlWebpackPlugin.options.jsCdns.map(item =&gt; {{ %&gt;\n    &lt;script type=&quot;text/javascript&quot; src=&quot;&lt;%= item %&gt;&quot;&gt;&lt;/script&gt;\n  &lt;% }}) %&gt;\n&lt;/body&gt;\n&lt;/html&gt;</code></pre><h4 id="配置-resolve-优化-加载解析速度">配置 resolve 优化 加载解析速度</h4>\n<pre><code>resolve: {\n  alias: {\n    src: resolve(&#39;src&#39;),\n    common: resolve(&#39;src/common&#39;),\n    images: resolve(&#39;src/images&#39;),\n    markdowns: resolve(&#39;src/markdowns&#39;),\n    mods: resolve(&#39;src/components&#39;),\n  },\n  extensions: [&#39;.js&#39;, &#39;.jsx&#39;, &#39;css&#39;]\n},</code></pre>'},320:function(n,e){n.exports='<h3 id="公示鞭尸">公示鞭尸</h3>\n<pre><code>const path = require(&#39;path&#39;)\nconst webpack = require(&#39;webpack&#39;)\nconst HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;) // html模版\nconst UglifyJsPlugin = require(&#39;uglifyjs-webpack-plugin&#39;) // 混淆代码\nconst MiniCssExtractPlugin = require(&#39;mini-css-extract-plugin&#39;) // 压缩 css 并合并成 文件\nconst OptimizeCSSAssetsPlugin = require(&#39;optimize-css-assets-webpack-plugin&#39;) // 压缩css &amp; 去除注释  \nconst { CleanWebpackPlugin } = require(&#39;clean-webpack-plugin&#39;) // 删除 旧的文件 \nconst safeParser = require(&#39;postcss-safe-parser&#39;) // 添加前缀的规则\n\nconst HOST = &#39;127.0.0.1&#39;\nconst PORT = &#39;8080&#39;\n\nmodule.exports = (env, argv) =&gt; {\n  const { \n    mode,  // 通过 mode 判断 开发 和 生产\n  } = argv\n\n  const resolve = dir =&gt; path.join(__dirname, dir)\n\n  const theme = resolve(&#39;theme.js&#39;)\n\n  const isDEV = mode === &#39;development&#39;\n\n  return {\n    devServer: {\n      contentBase: [resolve(&#39;node_modules&#39;)],\n      compress: true,\n      inline: true,\n      hot: true,\n      port: PORT,\n      host: HOST,\n      headers: {\n        &#39;Access-Control-Allow-Origin&#39;: &#39;*&#39;,\n      },\n      noInfo: true,\n      historyApiFallback: {\n        disableDotRule: true\n      },\n      open: false,\n      quiet: false,\n      overlay: {\n        errors: true\n      },\n    },\n    entry: &#39;./src/index.js&#39;,\n    output: {\n      path: resolve(&#39;dist&#39;),\n      filename: &#39;[name].js&#39;,\n      chunkFilename: isDEV ? &#39;[name].chunk.js&#39; : &#39;[name].[contenthash].js&#39;,\n      publicPath: &#39;/&#39;,\n    },\n    optimization: {\n      splitChunks: {\n        cacheGroups: {\n          common: {\n            test: /[\\\\/]node_modules[\\\\/] || src\\//,\n            chunks: &#39;all&#39;,\n            name: &#39;common&#39;,\n            minSize: 0,\n            minChunks: 2,\n            priority: 10, //优先级\n            enforce: true,\n          },\n        },\n      },\n      minimizer: [\n        new UglifyJsPlugin({\n          uglifyOptions: {\n            compress: {\n              drop_console: true,\n            },\n            ecma: 5,\n          },\n          cache: true,\n          parallel: true,\n          sourceMap: true,\n        }),\n        new OptimizeCSSAssetsPlugin({\n          assetNameRegExp: /\\.css$/g,\n          cssProcessorOptions: {\n            parser: safeParser,\n            discardComments: {\n              removeAll: true,\n            },\n          },\n        }),\n      ],\n    },\n    resolve: {\n      alias: {\n        src: resolve(&#39;src&#39;),\n        common: resolve(&#39;src/common&#39;),\n        images: resolve(&#39;src/images&#39;),\n        markdowns: resolve(&#39;src/markdowns&#39;),\n        mods: resolve(&#39;src/components&#39;),\n      },\n      extensions: [&#39;.js&#39;, &#39;.jsx&#39;, &#39;css&#39;]\n    },\n    externals: {\n      react: &#39;React&#39;,\n      &#39;react-dom&#39;: &#39;ReactDOM&#39;,\n      &#39;react-router-dom&#39;: &#39;ReactRouterDOM&#39;,\n    },\n    module: {\n      rules: [\n        {\n          test: /\\.js$/,\n          include: resolve(&#39;src&#39;),\n          exclude: /node_modules/,\n          use: [&#39;babel-loader?cacheDirectory&#39;],\n        },\n        {\n          test: /\\.(le|c)ss$/,\n          use: [\n            isDEV ? &#39;style-loader&#39; : MiniCssExtractPlugin.loader,\n            &#39;css-loader&#39;, \n            { \n              loader: &#39;postcss-loader&#39;,\n              options: {\n                plugins: loader =&gt; [\n                  require(&#39;autoprefixer&#39;)(), // CSS浏览器兼容 需要package.json 添加 对应的 browserslist,也有其他方式，自行搜索\n                ]\n              }\n            },\n            `less-loader?{&quot;sourceMap&quot;:true, &quot;modifyVars&quot;:${JSON.stringify(theme)}, &quot;javascriptEnabled&quot;: true}`,\n          ], // 注意排列顺序，执行顺序与排列顺序相反\n        },\n        {\n          test: /\\.styl$/,\n          use: [\n            isDEV ? &#39;style-loader&#39; : MiniCssExtractPlugin.loader,\n            &#39;css-loader&#39;,\n            { \n              loader: &#39;postcss-loader&#39;,\n              options: {\n                plugins: loader =&gt; [\n                  require(&#39;autoprefixer&#39;)(), // CSS浏览器兼容 需要package.json 添加 对应的 browserslist,也有其他方式，自行搜索\n                ]  \n              },\n            },\n            &#39;stylus-loader&#39;,\n          ],\n          include: [path.resolve(__dirname, &#39;src&#39;)],\n          exclude: /node_modules/,\n        }, \n        {\n          test: /\\.(jpg|jpeg|png|gif|svg)$/,\n          use: {\n            loader: &#39;url-loader&#39;,\n            options: {\n              limit: 1024 * 8, // 8k以下的base64内联，不产生图片文件\n              fallback: &#39;file-loader&#39;, // 8k以上，用file-loader抽离（非必须，默认就是file-loader）\n              name: &#39;[name].[ext]?[hash]&#39;, // 文件名规则，默认是[hash].[ext]\n              outputPath: &#39;images/&#39;, // 输出路径\n              publicPath: &#39;&#39;  // 可访问到图片的引用路径(相对/绝对)\n            }\n          }\n        }, \n        {\n          test: /\\.md$/,\n          use: [\n            &#39;html-loader&#39;, \n            &#39;markdown-loader&#39;\n          ]\n        }\n      ]\n    },\n    plugins: [\n      new HtmlWebpackPlugin({\n        jsCdns: [\n          &#39;https://cdn.jsdelivr.net/npm/react@16.10.2/umd/react.production.min.js&#39;,\n          &#39;https://cdn.jsdelivr.net/npm/react-dom@16.10.2/umd/react-dom.production.min.js&#39;,\n          &#39;https://cdn.jsdelivr.net/npm/react-router-dom@5.1.2/umd/react-router-dom.min.js&#39;,\n        ],\n        template: &#39;./template/index.html&#39;,\n        minify: {\n          collapseWhitespace: true, // 折叠空白\n          removeComments: true, // 移除注释\n          removeAttributeQuotes: true // 移除属性的引号\n        }\n      }),\n      ...(isDEV ? \n        []\n        : [\n          new CleanWebpackPlugin({\n            cleanOnceBeforeBuildPatterns: [path.join(__dirname, &#39;dist&#39;)]\n          }),\n          new MiniCssExtractPlugin({\n            filename: &#39;[name].css&#39;,\n            chunkFilename: &#39;[name].[contenthash].css&#39;\n          }),\n        ]\n      ),\n    ],\n  }\n}</code></pre>'},321:function(n,e,t){n.exports='<h4 id="瞎搞webhook">瞎搞webhook</h4>\n<blockquote>\n<p>Webhooks是GitHub提供的一个API。Webhooks可以在GitHub仓库(repositories)发生事件(比如提交代码,创建分支，发布版本)时，通知到其他服务器。Webhook实质上就是一个callback</p>\n</blockquote>\n<h5 id="在github中设置项目的webhook">在GitHub中设置项目的webhook</h5>\n<ol>\n<li><p>进入 GitHub 代码库，依次点击「Settings」、「Webhooks &amp; Services」、「Add Webhook」\n<img src="'+t(322)+'" alt="alt 仓库setting页"></p>\n</li>\n<li><p>填入对应的Webhook地址，即可完成配置\n<img src="'+t(323)+'" alt="alt 仓库setting页"></p>\n</li>\n</ol>\n<h5 id="神奇的工具">神奇的工具</h5>\n<p><a href="https://ngrok.com/">公网映射工具 ngrok</a></p>\n'},322:function(n,e,t){n.exports=t.p+"images/webhook-setting.jpg?3dff130d5bae83e8a8a3649650259cec"},323:function(n,e,t){n.exports=t.p+"images/webhook-config.jpeg?14a9fc8c5f84688f548f339d3d3e0f22"},324:function(n,e){n.exports='<pre><code>// 题目：\n// 以 provinces 为数据源，设计并实现区域选择组件 RegionSelect\n// 要求：确保 Demo 能够正常使用 RegionSelect\n// 具体包含：\n// 1. Demo 向 RegionSelect 传值能够正确渲染\n// 2. Demo 中的 handleRegionChange 能够正确输出\n// 3. 考虑 RegionSelect 组件的通用性\n\nimport React, { Component } from &quot;react&quot;;\nimport ReactDOM from &quot;react-dom&quot;;\nimport &quot;antd/dist/antd.css&quot;;\nimport &quot;./index.css&quot;;\nimport { Select } from &quot;antd&quot;;\n\nconst { Option } = Select;\n\nconst provinces = [\n  {\n    name: &quot;浙江省&quot;,\n    code: 1,\n    cities: [\n      {\n        name: &quot;杭州市&quot;,\n        code: 11,\n        areas: [{ name: &quot;西湖区&quot;, code: 111 }, { name: &quot;余杭区&quot;, code: 112 }]\n      },\n      {\n        name: &quot;宁波市&quot;,\n        code: 12,\n        areas: [{ name: &quot;江北区&quot;, code: 121 }, { name: &quot;江东区&quot;, code: 122 }]\n      }\n    ]\n  },\n  {\n    name: &quot;广东省&quot;,\n    code: 2,\n    cities: [\n      {\n        name: &quot;广州市&quot;,\n        code: 21,\n        areas: [{ name: &quot;白云区&quot;, code: 211 }, { name: &quot;天河区&quot;, code: 212 }]\n      },\n      {\n        name: &quot;深圳市&quot;,\n        code: 22,\n        areas: [{ name: &quot;宝安区&quot;, code: 221 }, { name: &quot;南山区&quot;, code: 222 }]\n      }\n    ]\n  }\n];\n\n// 完善组件功能\nclass RegionSelect extends Component {\n  render() {\n    return (\n      &lt;div&gt;\n        &lt;Select /&gt;省\n        &lt;Select /&gt;市\n        &lt;Select /&gt;区\n      &lt;/div&gt;\n    );\n  }\n}\n\n// 确保 RegionSelect 在以下 Demo 中能够正常运行\nclass Demo extends Component {\n  state = {\n    value: [1, 11, 111]\n  };\n\n  handleRegionChange(value) {\n    console.log(value);\n  }\n\n  render() {\n    const { value } = this.state;\n    return &lt;RegionSelect value={value} /&gt;;\n  }\n}\n\nReactDOM.render(&lt;Demo /&gt;, document.getElementById(&quot;container&quot;));\n</code></pre><p><a href="http://suyunlongsy.github.io/#/region-select">自己写的组件</a></p>\n'},325:function(n,e,t){n.exports='<h2 id="http-协议">HTTP 协议</h2>\n<p><img src="'+t(326)+'" alt="alt 模拟流程图"></p>\n<h3 id="请求">请求</h3>\n<blockquote>\n<p>一个http请求由<em>请求行</em>，<em>请求头</em>，<em>空行</em>，<em>请求主体</em>组成</p>\n</blockquote>\n<p><img src="'+t(327)+'" alt="alt HTTP Request"></p>\n<h4 id="请求头中的请求方式（http11新增5种）：">请求头中的请求方式（http/1.1新增5种）：</h4>\n<ul>\n<li>GET 请求指定的页面信息，并返回实体主体</li>\n<li>HEAD 类似于get请求，只不过返回的响应中没有具体的内容，用于获取报头</li>\n<li>POST 向指定资源提交数据进行处理请求（例如提交表单或者上传文件）。数据被包含在请求体中。POST请求可能会导致新的资源的建立和/或已有资源的修改。</li>\n<li>PUT 从客户端向服务器传送的数据取代指定的文档的内容。</li>\n<li>DELETE 请求服务器删除指定的页面。</li>\n</ul>\n<h3 id="响应">响应</h3>\n<blockquote>\n<p>一个http响应由<em>状态行</em>，<em>响应头</em>，<em>空行</em>，<em>响应主体</em>组成</p>\n</blockquote>\n<p><img src="'+t(328)+'" alt="alt HTTP Response"></p>\n<h4 id="响应头">响应头</h4>\n<ul>\n<li>Content-Disposition：附件只需要把文件名给过去就可以，这个名称就是下载时显示的文件名称</li>\n<li>content-type：文件类型</li>\n</ul>\n<h4 id="状态码">状态码</h4>\n<p><a href="https://suyunlongsy.github.io/#/detail/19.10.31-HTTP%E7%8A%B6%E6%80%81%E7%A0%81.md">戳我查看</a></p>\n<h3 id="http工作原理">HTTP工作原理</h3>\n<ol>\n<li><p>客户端连接到Web服务器</p>\n<blockquote>\n<p>一个HTTP客户端，通常是浏览器，与Web服务器的HTTP端口（默认为80）建立一个TCP套接字连接\n（TCP用主机的IP地址加上主机上的端口号作为TCP连接的端点，这种端点就叫做套接字（socket））</p>\n</blockquote>\n</li>\n<li><p>发送HTTP请求</p>\n<blockquote>\n<p>通过TCP套接字，客户端向Web服务器发送一个文本的请求报文，一个请求报文由请求行、请求头部、空行和请求数据4部分组成。</p>\n</blockquote>\n</li>\n<li><p>服务器接受请求并返回HTTP响应</p>\n<blockquote>\n<p>Web服务器解析请求，定位请求资源。服务器将资源复本写到TCP套接字，由客户端读取。一个响应由状态行、响应头部、空行和响应数据4部分组成。</p>\n</blockquote>\n</li>\n<li><p>释放连接TCP连接</p>\n<blockquote>\n<p>若connection 模式为close，则服务器主动关闭TCP连接，客户端被动关闭连接，释放TCP连接;若connection 模式为keepalive，则该连接会保持一段时间，在该时间内可以继续接收请求</p>\n</blockquote>\n</li>\n</ol>\n<blockquote>\n<p><a href="https://baike.baidu.com/item/TCP/33012?fr=aladdin#6">TCP工作方式</a></p>\n</blockquote>\n<ol start="5">\n<li>客户端浏览器解析HTML内容<blockquote>\n<p>客户端浏览器首先<em>解析状态行</em>，查看表明请求是否成功的<em>状态码</em>。然后解析每一个<em>响应头</em>，响应头告知以下为若干字节的HTML文档和文档的字符集。客户端浏览器读取响应数据HTML，根据HTML的语法对其进行格式化，并在浏览器窗口中显示。</p>\n</blockquote>\n</li>\n</ol>\n<h3 id="在浏览器地址栏输入url按回车后经历的流程">在浏览器地址栏输入URL按回车后经历的流程</h3>\n<p>1、浏览器向 DNS 服务器请求解析该 URL 中的域名所对应的 IP 地址;</p>\n<p>2、解析出 IP 地址后，根据该 IP 地址和默认端口 80，和服务器建立TCP连接;</p>\n<p>3、浏览器发出读取文件(URL中域名后面部分对应的文件)的HTTP 请求，该请求报文作为TCP三次握手的第三个报文的数据发送给服务器;</p>\n<p>4、服务器对浏览器请求作出响应，并把对应的 html 文本发送给浏览器;</p>\n<p>5、释放TCP连接;</p>\n<p>6、浏览器将该 html 文本并显示内容;</p>\n'},326:function(n,e,t){n.exports=t.p+"images/HTTP-simulated-interaction-diagram.png?3edcfede7fc5f342d2584c1e8e0f0712"},327:function(n,e,t){n.exports=t.p+"images/HTTP-Request.png?f88ce3073d2e3b2355863675eff509fe"},328:function(n,e,t){n.exports=t.p+"images/HTTP-Response.png?e201f2e2c0821a48b0d7e64f96342a10"},329:function(n,e){n.exports='<h4 id="http-状态码">HTTP 状态码</h4>\n<table>\n<thead>\n<tr>\n<th align="left"></th>\n<th align="left">类别</th>\n<th align="left">原因短语</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">1XX</td>\n<td align="left">Informational（信息性状态码）</td>\n<td align="left">接受的请求正在处理</td>\n</tr>\n<tr>\n<td align="left">2XX</td>\n<td align="left">Success（成功状态码）</td>\n<td align="left">请求正常处理完毕</td>\n</tr>\n<tr>\n<td align="left">3XX</td>\n<td align="left">Redirection（重定向状态码）</td>\n<td align="left">需要进行附加操作以完成请求</td>\n</tr>\n<tr>\n<td align="left">4XX</td>\n<td align="left">Client Error（客户端错误状态码）</td>\n<td align="left">服务器无法处理请求</td>\n</tr>\n<tr>\n<td align="left">5XX</td>\n<td align="left">Server Error（服务器错误状态码）</td>\n<td align="left">服务器处理请求出错</td>\n</tr>\n</tbody></table>\n<ul>\n<li><em>2XX——表明请求被正常处理了</em></li>\n<li><em>3XX——表明浏览器需要执行某些特殊的处理以正确处理请求</em></li>\n<li><em>4XX——表明客户端是发生错误的原因所在</em></li>\n<li><em>5XX——服务器本身发生错误</em></li>\n</ul>\n<h4 id="2xx">2XX</h4>\n<pre><code>200 OK：请求已正常处理。</code></pre><h4 id="3xx">3XX</h4>\n<pre><code>304 Not Modified：客户端对该资源进行了缓存，服务端返回空，客户端直接从缓存中读取对应资源。（响应头中包含了Last-Modified或ETag）</code></pre><h4 id="4xx">4XX</h4>\n<pre><code>400 Bad Request：服务器端无法理解客户端发送的请求，请求报文中可能存在语法错误。\n\n401 Unauthorized：该状态码表示发送的请求需要有通过HTTP认证（BASIC认证，DIGEST认证）的认证信息。\n\n403 Forbidden：不允许访问那个资源。该状态码表明对请求资源的访问被服务器拒绝了。（权限，未授权IP等）\n\n404 Not Found：服务器上没有请求的资源。路径错误等。</code></pre><h4 id="5xx">5XX</h4>\n<pre><code>500 Internal Server Error：貌似内部资源出故障了。该状态码表明服务器端在执行请求时发生了错误。也有可能是web应用存在bug或某些临时故障。\n\n503 Service Unavailable：抱歉，我现在正在忙着。该状态码表明服务器暂时处于超负载或正在停机维护，现在无法处理请求</code></pre>'},330:function(n,e){n.exports='<h2 id="iterator">Iterator</h2>\n<blockquote>\n<p>JavaScript 原有的表示“集合”的数据结构，主要是数组（Array）和对象（Object），ES6 又添加了Map和Set。这样就有了四种数据集合，用户还可以组合使用它们，定义自己的数据结构，比如数组的成员是Map，Map的成员是对象。这样就需要一种统一的接口机制，来处理所有不同的数据结构。</p>\n</blockquote>\n<blockquote>\n<p>遍历器（Iterator）就是这样一种机制。它是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署 Iterator 接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）。</p>\n</blockquote>\n<blockquote>\n<p>Iterator 的作用有三个：一是为各种数据结构，提供一个统一的、简便的访问接口；二是使得数据结构的成员能够按某种次序排列；三是 ES6 创造了一种新的遍历命令for...of循环，Iterator 接口主要供for...of消费。</p>\n</blockquote>\n<blockquote>\n<p>Iterator 的遍历过程是这样的。</p>\n</blockquote>\n<blockquote>\n<p>（1）创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。</p>\n</blockquote>\n<blockquote>\n<p>（2）第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。</p>\n</blockquote>\n<blockquote>\n<p>（3）第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。</p>\n</blockquote>\n<blockquote>\n<p>（4）不断调用指针对象的next方法，直到它指向数据结构的结束位置。</p>\n</blockquote>\n<blockquote>\n<p>每一次调用next方法，都会返回数据结构的当前成员的信息。具体来说，就是返回一个包含value和done两个属性的对象。其中，value属性是当前成员的值，done属性是一个布尔值，表示遍历是否结束。</p>\n</blockquote>\n'},331:function(n,e){n.exports='<h2 id="what-is-this">What is this</h2>\n<h4 id="普通函数中的this">普通函数中的this</h4>\n<p>普通函数，this的概念是：this是JavaScript的一个关键字，他是指函数执行过程中，自动生成的一个内部对象，是指当前的对象，只在当前函数内部使用。（this对象是在运行时基于<code>函数的执行环境</code>绑定的：在全局函数中，this指向的是window；当函数被作为<code>某个对象的方法</code>调用时，this就等于那个对象）。</p>\n<h4 id="箭头函数的this">箭头函数的this</h4>\n<p>箭头函数的this是在<code>定义函数</code>时绑定的，不是在执行过程中绑定的。简单的说，函数在定义时，this就继承了定义函数的对象。</p>\n<p>比如：解决了匿名函数this指向的问题（匿名函数的执行环境具有全局性），包括setTimeout和setInterval中使用this所造成的问题</p>\n<h4 id="bind-call-apply">bind call apply</h4>\n<blockquote>\n<p>作用都是改变函数运行时上下文（this指向）而存在的</p>\n</blockquote>\n<p>区别</p>\n<ul>\n<li>接收的第一个参数都是要绑定的this 指向</li>\n<li>apply 的 第二个参数 是一个 参数数组，call和bind的第二个及之后的参数作为函数士参按顺序传入</li>\n<li>bind 不会立即调用，其他两个会立即调用</li>\n</ul>\n<h4 id="es6-简易实现">es6 简易实现</h4>\n<p>call</p>\n<pre><code>Function.prototype.call = function(context) {\n  const ctx = context || window\n\n  // 将当前被调用的方法定义在cxt.func上。（为了能以对象调用的形式绑定this）\n  ctx.func = this\n\n  // 获取实参\n  const args = Array.from(arguments).slice(1)\n\n  // 以对象调用的 形式 调用func，此时this指向ctx，也就是传入的需要绑定的this指向\n  const res = arguments.length &gt; 1 ? ctx.fun(...args) : ctx.fun()\n\n  // 删除该方法，不然会对传入的对象造成污染（添加该方法）\n  delete ctx.func\n\n  return res\n}</code></pre><p>apply</p>\n<pre><code>Function.prototype.apply = function(context) {\n  const ctx = context || window\n\n  ctx.func = this\n\n  const res = arguments[1] ? ctx.func(...arguments[1]) : ctx.func()\n\n  delete ctx.func\n\n  return res\n}</code></pre><p>bind</p>\n<pre><code>Function.prototype.bind = function(context) {\n  // 对context进行深拷贝，防止污染\n  const ctx = JSON.parse(JSON.stringify(context)) || window\n\n  // 将当前被调用的方法定义在cxt.func上。（为了能以对象调用的形式绑定this） \n  ctx.func = this\n\n  const args = Array.from(arguments).slice(1)\n\n  return function() {\n    // 这里注意一点的是需要对bind函数的实参和返回的的绑定函数的实参进行参数合并，调用时传入！\n    const allArgs = args.concat(Array.from(arguments))\n\n    // 以对象的方式调用func，此时this指向ctx，也就是传入的需要被绑定的this指向\n    return allArgs.length &gt; 0 ? ctx.func(...allArgs) : ctx.func()\n  } \n}</code></pre>'},332:function(n,e,t){n.exports='<h2 id="事件循环（event-loop）">事件循环（Event Loop）</h2>\n<blockquote>\n<p>Event Loop即事件循环，是解决javaScript单线程运行阻塞的一种机制。</p>\n</blockquote>\n<blockquote>\n<p>一个例子开胃</p>\n</blockquote>\n<pre><code>//请写出输出内容\nasync function async1() {\n    console.log(&#39;async1 start&#39;);\n    await async2();\n    console.log(&#39;async1 end&#39;);\n}\nasync function async2() {\n    console.log(&#39;async2&#39;);\n}\n\nconsole.log(&#39;script start&#39;);\n\nsetTimeout(function() {\n    console.log(&#39;setTimeout&#39;);\n}, 0)\n\nasync1();\n\nnew Promise(function(resolve) {\n    console.log(&#39;promise1&#39;);\n    resolve();\n}).then(function() {\n    console.log(&#39;promise2&#39;);\n});\nconsole.log(&#39;script end&#39;);\n\n\n/*\nscript start\nasync1 start\nasync2\npromise1\nscript end\nasync1 end\npromise2\nsetTimeout\n*/</code></pre><h3 id="一执行栈、事件队列和事件循环原理">一.执行栈、事件队列和事件循环原理</h3>\n<h4 id="eventloop的相关概念">EventLoop的相关概念</h4>\n<p>1、堆（Heap）\n堆表示一大块非结构化的内存区域，对象，数据被存放在堆中</p>\n<p>2、栈（Stack）\n栈在javascript中又称执行栈，调用栈，是一种后进先出的数组结构，\nJavascript 有一个 主线程（main thread）和 调用栈(或执行栈call-stack)，主线各所有的任务都会被放到调用栈等待主线程执行。\nJS调用栈采用的是后进先出的规则，当函数执行的时候，会被添加到栈的顶部，当执行栈执行完成后，就会从栈顶移出，直到栈内被清空。</p>\n<p>3、队列（Queue）\n队列即任务队列Task Queue，是一种先进先出的一种数据结构。在队尾添加新元素，从队头移除元素。</p>\n<p>当javascript代码执行的时候会将不同的变量存于内存中的不同位置：<code>堆（heap）</code>和<code>栈（stack）</code>中来加以区分。其中，堆里存放着一些<code>对象</code>。而栈中则存放着一些<code>基础类型变量</code>以及对象的<code>指针</code>。 但是我们这里说的执行栈和上面这个栈的意义却有些不同。</p>\n<p>我们知道，当我们调用一个方法的时候，js会生成一个与这个方法对应的<code>执行环境（context）</code>，又叫``执行上下文<code>。这个执行环境中存在着这个方法的</code>私有作用域<code>，</code>上层作用域的指向，方法的参数<code>，这个作用域中定义的</code>变量<code>以及这个作用域的</code>this对象`。 而当一系列方法被依次调用的时候，因为js是单线程的，同一时间只能执行一个方法，于是这些方法被排队在一个单独的地方。这个地方被称为<strong>执行栈</strong>。</p>\n<p>当一个脚本第一次执行的时候，js引擎会解析这段代码，并将其中的同步代码按照执行顺序加入执行栈中，然后从头开始执行。如果当前执行的是一个方法，那么<code>js会向执行栈中添加这个方法的执行环境</code>，然后进入这个执行环境继续执行其中的代码。当这个执行环境中的代码 执行完毕并返回结果后，<code>js会退出这个执行环境并把这个执行环境销毁，回到上一个方法的执行环境</code>。这个过程反复进行，直到执行栈中的代码全部执行完毕。</p>\n<p>一个方法执行会向执行栈中加入这个方法的执行环境，在这个执行环境中还可以调用其他方法，甚至是自己，其结果不过是在执行栈中再添加一个执行环境。这个过程可以是无限进行下去的，除非发生了栈溢出，即超过了所能使用内存的最大值。</p>\n<p>以上的过程说的都是同步代码的执行。那么当一个异步代码（如发送ajax请求数据）执行后会如何呢？前文提过，js的另一大特点是<code>非阻塞</code>，实现这一点的关键在于下面要说的这项机制——<strong>事件队列（Task Queue）</strong>。</p>\n<p>js引擎遇到一个异步事件后并不会一直等待其返回结果，而是会将这个事件挂起，继续执行执行栈中的其他任务。\n当这个异步事件返回结果后，js会将这个事件加入与当前执行栈不同的另一个队列，我们称之为<strong>事件队列（任务队列）</strong>。\n被放入事件队列不会立刻执行其回调，而是<code>等待当前执行栈中的所有任务都执行完毕</code>， 主线程处于闲置状态时，主线程会去查找事件队列是否有任务。\n如果有，那么主线程会从中取出排在第一位的事件，并把这个事件对应的回调放入执行栈中，然后执行其中的同步代码，如此反复，这样就形成了一个无限的循环。这就是这个过程被称为“事件循环（Event Loop）”的原因。</p>\n<h4 id="同步任务和异步任务">同步任务和异步任务</h4>\n<p>javascript是单线程。单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。如果前一个任务耗时很长，后一个任务就不得不一直等着。\n于是js所有任务分为两种：同步任务，异步任务\n<strong>同步任务</strong>是调用立即得到结果的任务，同步任务在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务；</p>\n<p><strong>异步任务</strong>是调用无法立即得到结果，需要额外的操作才能预期结果的任务，异步任务不进入主线程、而进入&quot;任务队列&quot;（task queue）的任务，只有&quot;任务队列&quot;通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行。</p>\n<p>JS引擎遇到异步任务（DOM事件监听、网络请求、setTimeout计时器等），会交给相应的线程单独去维护异步任务，等待某个时机（计时器结束、网络请求成功、用户点击DOM），然后由 事件触发线程 将异步对应的 回调函数 加入到消息队列中，消息队列中的回调函数等待被执行。</p>\n<p>具体来说，异步运行机制如下：</p>\n<p>（1）所有同步任务都在主线程上执行，形成一个[执行栈]</p>\n<p>（2）主线程之外，还存在一个&quot;任务队列&quot;（task queue）。只要异步任务有了运行结果，就在&quot;任务队列&quot;之中放置一个事件。</p>\n<p>（3）一旦&quot;执行栈&quot;中的所有同步任务执行完毕，系统就会读取&quot;任务队列&quot;，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。</p>\n<p>（4）主线程不断重复上面的第三步。</p>\n<p><img src="'+t(333)+'" alt="alt event loop"></p>\n<h4 id="宏任务和微任务">宏任务和微任务</h4>\n<pre><code>console.log(&#39;script start&#39;)\n\nsetTimeout(function() {\n    console.log(&#39;timer over&#39;)\n}, 0)\n\nPromise.resolve().then(function() {\n    console.log(&#39;promise1&#39;)\n}).then(function() {\n    console.log(&#39;promise2&#39;)\n})\n\nconsole.log(&#39;script end&#39;)\n\n// script start\n// script end\n// promise1\n// promise2\n// timer over</code></pre><p>&quot;promise 1&quot; &quot;promise 2&quot; 在 &quot;timer over&quot; 之前打印了？\n这里有一个新概念：macrotask（宏任务） 和 microtask（微任务）。</p>\n<p>所有任务分为宏任务（macrotask ）和微任务（microtask ） 两种。\nMacroTask（宏任务）：* script全部代码、setTimeout、setInterval、setImmediate（浏览器暂时不支持，只有IE10支持，具体可见MDN）、I/O、UI Rendering。</p>\n<p>MicroTask（微任务）：* Process.nextTick（Node独有）、Promise、Object.observe(废弃)、MutationObserver（具体使用方式查看这里）</p>\n<p>在挂起任务时，JS 引擎会将所有任务按照类别分到这两个队列中，首先在 宏任务 的队列中取出第一个任务，执行完毕后取出 微任务 队列中的所有任务顺序执行；之后再取 宏任务，周而复始，直至两个队列的任务都取完。</p>\n<p><img src="'+t(334)+'" alt="alt event loop"></p>\n'},333:function(n,e,t){n.exports=t.p+"images/event-loop.png?144645b50fccbfa42ef607a1f02315e9"},334:function(n,e,t){n.exports=t.p+"images/macrotask&microtask.png?854e9333d3ed4335941f350752774b53"},335:function(n,e,t){n.exports='<h3 id="webpack-热更新原理">webpack 热更新原理</h3>\n<p><img src="'+t(336)+'" alt="alt webpack热更新"></p>\n<p>Server端使用webpack-dev-server去启动本地服务，内部实现主要使用了webpack、express、websocket。</p>\n<ul>\n<li><p>使用express启动本地服务，当浏览器访问资源时对此做响应。</p>\n</li>\n<li><p>服务端和客户端使用websocket实现长连接</p>\n</li>\n<li><p>webpack监听源文件的变化，即当开发者保存文件时触发webpack的重新编译。</p>\n<ul>\n<li>每次编译都会生成hash值、已改动模块的json文件、已改动模块代码的js文件</li>\n<li>编译完成后通过socket向客户端推送当前编译的hash戳</li>\n</ul>\n</li>\n<li><p>客户端的websocket监听到有文件改动推送过来的hash戳，会和上一次对比</p>\n<ul>\n<li>一致则走缓存</li>\n<li>不一致则通过ajax和jsonp向服务端获取最新资源</li>\n</ul>\n</li>\n<li><p>使用内存文件系统去替换有修改的内容实现局部刷新</p>\n</li>\n</ul>\n'},336:function(n,e,t){n.exports=t.p+"images/webpack-hot-update.jpeg?2dd1c0bff436166ce9bbedccd950d757"}}]);