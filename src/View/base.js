import { css } from 'styled-components'
import Unit from '../utils/Unit'
import Spacing from '../utils/Spacing'

const alignItemsMapping = {
  column_left: 'align-items: flex-start;',
  column_center: 'align-items: center;',
  column_right: 'align-items: flex-end;',
  row_top: 'align-items: flex-start;',
  row_middle: 'align-items: center;',
  row_bottom: 'align-items: flex-end;'
}

const justifyContentMapping = {
  column_top: 'justify-content: flex-start;',
  column_middle: 'justify-content: center;',
  column_bottom: 'justify-content: flex-end;',
  row_left: 'justify-content: flex-start;',
  row_center: 'justify-content: center;',
  row_right: 'justify-content: flex-end;'
}

const getAlignStyles = ({ direction, align }) => {
  const alignList = align.split(' ')
  return `${alignItemsMapping[`${direction}_${alignList[0]}`] || alignItemsMapping[`${direction}_${alignList[1]}`] || ''}
${justifyContentMapping[`${direction}_${alignList[0]}`] || justifyContentMapping[`${direction}_${alignList[1]}`] || ''}`
}

const base = css`
  flex-direction: ${props => props.direction};
  ${props => getAlignStyles(props)}
  margin: ${props => Unit.parse(props.margin, (margin) => Spacing[margin] || margin)};
  padding: ${props => Unit.parse(props.padding, (padding) => Spacing[padding] || padding)};
`

export default base
