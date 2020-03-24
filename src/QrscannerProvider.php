<?php
namespace RightButton;

use Bootstrap\Provider;
use Bootstrap\RegisterContainer;
use RightButton\Item\QrcodeScanner;

class QrscannerProvider implements Provider{

    public function register(){
        RegisterContainer::registerSymLink(WWW_DIR . '/Public/qrscanner', __DIR__ . '/../js/dist');

        RegisterContainer::registerListRightButtonType('qrscanner', QrcodeScanner::class);
    }
}