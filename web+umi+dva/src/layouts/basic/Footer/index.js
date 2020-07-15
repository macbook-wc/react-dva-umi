/**
 * @author M
 * @email mpw0311@163.com
 * @version  1.0.0
 * @description  
 */
import { copyright } from '@platformConfig';
import React, { Fragment } from 'react';
import { Layout, Icon } from 'antd';
import GlobalFooter from '../../components/GlobalFooter';

const { Footer } = Layout;
const FooterView = () => (
    <Footer style={{ padding: 0 }}>
        <GlobalFooter
              links={[
                {
                  key: 'UmiJS 首页',
                  title: 'UmiJS 首页',
                  href: 'https://www.baidu.com',
                  blankTarget: true,
                },
                {
                  key: 'github',
                  title: <Icon type="github" />,
                  href: 'https://www.baidu.com',
                  blankTarget: true,
                },
                {
                  key: 'Ant Design',
                  title: 'Ant Design',
                  href: 'https://www.baidu.com',
                  blankTarget: true,
                },
              ]}
            copyright={
                <Fragment>
                    Copyright <Icon type="copyright" /> {copyright}
                </Fragment>
            }
        />
    </Footer>
);
export default FooterView;
