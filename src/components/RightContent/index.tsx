import { Tooltip, Tag, Space } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import React from 'react';
import { useModel, SelectLang } from 'umi';
import Avatar from './AvatarDropdown';
import HeaderSearch from '../HeaderSearch';
import styles from './index.less';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

export type SiderTheme = 'light' | 'dark';

const ENVTagColor = {
  dev: 'orange',
  test: 'green',
  pre: '#87d068',
};

const GlobalHeaderRight: React.FC<{}> = () => {
  const { initialState, setInitialState } = useModel('@@initialState');
  if (!initialState || !initialState.settings) {
    return null;
  };
  let { settings, settings: { navTheme, layout, collapsed } } = initialState;
  function clickCollapsedBtn() {
    collapsed = !collapsed
    setInitialState({
      ...initialState,
      settings: {
        ...settings,
        collapsed,
      }

    })
  }


  let className = styles.right;

  if ((navTheme === 'dark' && layout === 'top') || layout === 'mix') {
    className = `${styles.right}  ${styles.dark}`;
  }
  return (
    <div className={styles.header__layout}>
      <div className={styles.left} onClick={() => clickCollapsedBtn()}>
        {collapsed ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
      </div>
      <Space className={className}>
        <HeaderSearch
          className={`${styles.action} ${styles.search}`}
          placeholder="站内搜索"
          defaultValue="umi ui"
          options={[
            { label: <a href="https://umijs.org/zh/guide/umi-ui.html">umi ui</a>, value: 'umi ui' },
            {
              label: <a href="next.ant.design">Ant Design</a>,
              value: 'Ant Design',
            },
            {
              label: <a href="https://protable.ant.design/">Pro Table</a>,
              value: 'Pro Table',
            },
            {
              label: <a href="https://prolayout.ant.design/">Pro Layout</a>,
              value: 'Pro Layout',
            },
          ]}
        // onSearch={value => {
        //   console.log('input', value);
        // }}
        />
        <Tooltip title="使用文档">
          <span
            className={styles.action}
            onClick={() => {
              window.location.href = 'https://pro.ant.design/docs/getting-started';
            }}
          >
            <QuestionCircleOutlined />
          </span>
        </Tooltip>
        <Avatar />
        {REACT_APP_ENV && (
          <span>
            <Tag color={ENVTagColor[REACT_APP_ENV]}>{REACT_APP_ENV}</Tag>
          </span>
        )}
        <SelectLang className={styles.action} />
      </Space>
    </div>
  );
};
export default GlobalHeaderRight;
