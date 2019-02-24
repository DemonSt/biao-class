import React, { PureComponent } from 'react';
import { QRCodeWrapper, QRCodeLift, QRCodeRight } from '../../style';

class QRCode extends PureComponent {
  render () {
    return (
      <QRCodeWrapper>
        <QRCodeLift>
          <img className="QRCode-pic" src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
        </QRCodeLift>
        <QRCodeRight>
          <h5 className="title">下载手机简书App</h5>
          <div className="desc">随时随地发现和创造内容</div>
        </QRCodeRight>
      </QRCodeWrapper>
    )
  }
};

export default QRCode;