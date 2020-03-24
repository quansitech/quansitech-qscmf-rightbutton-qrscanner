<?php
namespace RightButton\Item;

use Illuminate\Support\Str;
use Qscmf\Builder\ListRightButton\ListRightButton;
use Think\View;

/**
 * Class QrcodeScanner
 */
class QrcodeScanner extends  ListRightButton {

    public function build(&$option, $data, $listBuilder){
        $my_attribute['title'] = "扫码";
        $my_attribute['class'] = 'label label-primary';

        $option['attribute'] = array_merge($my_attribute, is_array($option['attribute']) ? $option['attribute'] : [] );

        $gid = Str::uuid()->getHex();

        $option['attribute']['id'] = $gid;

        $view = new View();
        $view->assign('gid', $gid);
        $view->assign('option', $option['options']);
        return $view->fetch(__DIR__ . '/qrscanner.html');
    }
}