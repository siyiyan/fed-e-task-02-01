###plop-demo

####安装

    npm install --save-dev plop     //将项目添加到项目中
    npm install -g plop             //全局安装plop（可选，但建议您方便使用）

###在项目的根目录下创建一个plopfile.js

    //plop 入口文件，需要导出一个函数
    //此函数接收一个plop 对象，这个对象提供了一系列的工具函数，用于创建生成器任务

    module.exports = plop => {
        plop.setGenerator('component', {
            description: 'create a component',
            prompts: [
                {
                    type: 'input',
                    name: 'name',
                    message: 'component name',
                    default: 'MyComponent'
                }
            ],
            actions: [
                {
                    type: 'add',    //
                    path: 'src/components/{{name}}/{{name}}.js',
                    templateFile: 'plop-templates/component.hbs',
                }
            ]
        })
    }

###在根目录下创建文件夹plop-templates,下面再创建文件component.hbs

    import React form 'react';

    export default () => {
        <div className="{{name}}">
            <h1>{{name}} Component</h1>
        </div>
    }

###在根目录下创建文件夹src,下面再创建文件components

###在终端执行 plop 
    一旦安装了plop并创建了一个生成器，就可以从终端运行plop了。plop不带参数运行将为您提供可供选择的生成器列表。您还可以运行plop [generatorName]以直接触发生成器。如果未全局安装plop，则需要设置一个npm脚本来为您运行plop。

    //  package.json
    {
        ... ，
        “脚本”：{ 
            “ plop ”：“ plop ” 
        } ，
        ...
    }

###弹出 ? component name

###输入名称 如：Footer,将生成Footer文件夹和Footer.js文件


