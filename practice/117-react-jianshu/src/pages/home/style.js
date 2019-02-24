import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`;
export const HomeLeft = styled.div`
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    float: left;
    .banner-img {
        width: 625px;
        height: 240px;
        border-radius: 5px;
    }
`;
export const HomeRight = styled.div`
    width: 280px;
    float: right;
`;

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    padding-right: 10px;
    margin-left: 18px;
    margin-bottom: 18px;
    font-size: 14px;
    background: #f7f7f7;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-pic {
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`;
export const TopicMore  = styled.a.attrs({
    href: '/'
})`
    display: block;
    float: left;
    height: 32px;
    line-height: 32px;
    padding-right: 10px;
    padding-left: 10px;
    margin-left: 18px;
    margin-bottom: 18px;
    font-size: 14px;
    background: #f1f1f1;
    color: #888;
    text-decoration: none;
`;

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .list-pic {
        display: block;
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 10px;
    }
`;
export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title {
        font-size: 18px;
        line-height: 27px;
        font-weight: bold;
        color: #333;
    }
    .desc {
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
`;
export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`;
export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    margin-bottom: 8px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
`;
export const QRCodeWrapper = styled.div`
    margin-bottom: 30px;
    padding: 10px 20px;
    width: 85%;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
    overflow: hidden;
    vertical-align: center;
`;
export const QRCodeLift = styled.div`
    float: left;
    width: 60px;
    height: 60px;
    opacity: .85;
    margin-right: 20px;
    .QRCode-pic {
        width: 100%;
    }
`;
export const QRCodeRight = styled.div`
    float: left;
    vertical-align: center;
    line-height:1.2;
    margin-top: 10px;
    .title {
        font-size: 15px;
        color: #333;
    }
    .desc {
        margin-top: 4px;
        font-size: 13px;
        color: #999;
    }
`;

export const WriterWrapper = styled.div`
    width: 278px;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    height: 300px;
    line-height: 300px;
    text-align: center;
`;
export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: 30px 0;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
`;
export const BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    font-size: 14px;
`;

