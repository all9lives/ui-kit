import React from 'react'
import createStory from '../../storybook/createStory'
import ModalWrapper from '../../storybook/createStory/ModalWrapper'
import Modal from '../../src/Modal'
import Text from '../../src/Text'

createStory('Modal', module)
  .add('default', () => (
    <ModalWrapper>
      <Modal>
        <Text>Content</Text>
      </Modal>
    </ModalWrapper>
  ))
