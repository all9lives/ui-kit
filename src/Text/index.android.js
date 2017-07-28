import styled from 'styled-components/native';
import base from './base';
import defaultProps from './defaultProps';

const Text = styled.Text`
  ${base}
`;
Text.defaultProps = defaultProps;

export default Text;
