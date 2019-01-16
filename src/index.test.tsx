import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import { App } from './index'

test('renders correctly', () => {
  const tree = renderer.create(
    <App />
  )
  expect(tree).toBeDefined()
})
