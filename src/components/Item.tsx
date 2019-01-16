import * as React from 'react'

import { Text } from 'react-native';

interface item {
  name: string
}

export interface Props {
  item: item
}

export function Item(props: Props) {
  return (<Text>{props.item.name}</Text>)
}
