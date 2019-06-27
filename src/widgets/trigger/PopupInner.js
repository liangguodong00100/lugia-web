/**
 * 弹出面板内框
 * @flow
 */
import * as React from 'react';
import ContentBox from './ContentBox';
import VisibleBox from '../common/VisibleBox';
import { ZIndex } from '../common/MaskBox';
import styled from 'styled-components';

const getWidth = props => {
  const { theme = {} } = props;
  const { width } = theme;
  return `width: ${width ? `${width}px;` : ';'}`;
};

const getZIndex = props => {
  const { theme = {} } = props;
  const { zIndex } = theme;
  return zIndex ? `z-index: ${zIndex ? zIndex : ZIndex + 1};` : 'z-index: 9999;';
};

/* ${getWidth}; */
/* background-color: pink; */
/* box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2); */
/* overflow: hidden; */

const PopupInnerBox = styled(VisibleBox)`
  position: absolute;
  border-radius: 4px;
  box-sizing: border-box;
  left: -9999px;
  top: -9999px;
  ${getZIndex}
`;

type PopupInnerProps = {
  getTheme: Function,
  visible: boolean,
  onMouseEnter?: Function,
  onMouseLeave?: Function,
  children: ?React.Node,
  className: string,
};

class PopupInner extends React.Component<PopupInnerProps> {
  static defaultProps = {
    visible: true,
    className: '',
    getTheme() {
      return {};
    },
  };

  render() {
    const { visible, onMouseEnter, onMouseLeave, children, getTheme, className } = this.props;
    return (
      <PopupInnerBox
        className={className}
        visible={visible}
        theme={getTheme()}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <ContentBox visible={visible}>{children}</ContentBox>
      </PopupInnerBox>
    );
  }
}

export default PopupInner;
