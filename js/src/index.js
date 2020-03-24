import React from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button } from 'antd';
import  { QrcodeScanner, Util } from "@quansitech/react-qrscanner";
import "./index.css";

class Qrscanner extends React.Component {


    constructor(props) {
        super(props);

        this.state = { visible: false };
    }

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };

    show = () => this.setState({ visible: true } );

    render() {
        return (
                <Modal
                    title="二维码"
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    closable={false}
                    destroyOnClose={true}
                    footer={ <Button onClick={ this.handleCancel }>cancel</Button>}
                >
                    <QrcodeScanner url={this.props.url} websocket={this.props.websocket}
                                   queryStr={this.props.queryStr} size={this.props.size} scannedRenderText={this.props.scannedRenderText}
                                   bgColor={this.props.bgColor} fgColor={this.props.fgColor} imageSettings={this.props.imageSettings}
                                   scannedCallback={this.props.scannedCallback} scannedRender={this.props.scannedRender} />
                </Modal>
        );
    }
}

class QrscannerWrapper{

    constructor(id, option){
        this.ref = React.createRef()
        ReactDOM.render(<Qrscanner ref={this.ref} url={option.url} websocket={option.websocket}
                                   queryStr={option.queryStr} size={option.size} scannedRenderText={option.scannedRenderText}
                                   bgColor={option.bgColor} fgColor={option.fgColor} imageSettings={option.imageSettings}
                                   scannedCallback={option.scannedCallback} scannedRender={option.scannedRender} />
            , document.getElementById(id));
    }

    show(){
        this.ref.current.show();
    }

    static scan(ps, token, callback, param){
        let util = new Util();
        util.scan(ps, token, callback, param);
    }
}

window.Qrscanner = QrscannerWrapper;

