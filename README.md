##二维码扫码

#### 介绍
该组件可用于需要生成二维码，并使用扫码触发某些业务的场景。如：绑定用户二维码

#### 安装
```php
composer require quansitech/qscmf-rightbutton-qrscanner
```

#### demo图
扫码组件
<img src="https://user-images.githubusercontent.com/1665649/77417738-c3aa6180-6e00-11ea-8ff9-325c4be69b52.gif" />

设置了二维码5秒后失效，点击可刷新二维码
<img src="https://user-images.githubusercontent.com/1665649/77417866-02401c00-6e01-11ea-99cf-f55a0345075f.gif" />

#### 使用样例
生成列表按钮
```php
$builder->addRightButton('qrscanner', null, '', '', [
                        'websocket' => 'ws://192.168.31.222:2346',
                        'url' => U('home/index/scan', '', false, true),
                        'queryStr' => 'project_id=__id__'
                    ]);
```

websocket服务端的安装配置方法请移步[传送门](https://github.com/quansitech/qrscanner)

该组件封装了react-qrscanner，以下代码为封装好的前端扫码调用实例
```javascript
<script type="text/javascript" src="__PUBLIC__/qrscanner/qrscanner-bundle.js"></script>
<script>
    //第一个参数 websocket地址
    //第二个参数 自动生成的二维码token
    //第三个参数 扫码回调 status是扫码状态1表示成功，0表示失败  | error 为扫码失败时的错误原因
    //第四个参数 需要传递给服务端业务处理的客制化参数
    window.Qrscanner.scan('ws://192.168.31.222:2346', '{$token}', function(status, error){
        var msg = '';
        if(status){
            msg = '绑定成功';
        }
        else{
            msg = error;
        }
        alert(msg);
    }, {project_id: {$project_id}});
</script>
```