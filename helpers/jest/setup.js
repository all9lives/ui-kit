/* eslint-env jest */

/* Fix react@16 enzyme incompatible */
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })
/* Fix react@16 enzyme incompatible */
