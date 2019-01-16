import * as React from 'react'
import { SectionList, Text } from 'react-native';

import { Item } from './Item';

export interface Props { }

export const ItemList = function(props: Props) {
  return (
    <SectionList
      renderItem={({item, index, section}) => (
        <Item key={index} item={item} />
      )}
      renderSectionHeader={({section: {title}}) => (
        <Text style={{fontWeight: 'bold'}}>{title}</Text>
      )}
      sections={[
        {title: 'Title1', data: [{name: 'item1'}, {name:'item2'}]},
        {title: 'Title2', data: [{name: 'item3'}, {name: 'item4'}]},
        {title: 'Title3', data: [{name:'item5'}, {name:'item6'}]},
      ]}
      keyExtractor={(item, index) => item + index}
    />
  );
}
