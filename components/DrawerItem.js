import React from 'react';
import { Linking, StyleSheet, TouchableOpacity } from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import { useNavigation } from '@react-navigation/native';

import Icon from './Icon';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import nowTheme from '../constants/Theme';

const DrawerItem = ({ focused, title, icon, to }) => {
  const containerStyles = [
    styles.defaultStyle,
    focused ? [styles.activeStyle, styles.shadow] : null,
  ];

  const navigation = useNavigation()

  const iconProps = {
    name: icon,
    family: 'NowExtra',
    size: 18,
    color: focused ? nowTheme.COLORS.PRIMARY : 'black',
    style: { opacity: 0.75 },
  };

  return (
    <TouchableOpacity
      style={{ height: 60 }}
      onPress={() =>
        navigation.navigate(to)
      }
    >
      <Block flex row style={containerStyles}>
        <Block middle flex={0.1} style={{ marginRight: 5 }}>
        <MaterialCommunityIcons {...iconProps} />
        </Block>
        <Block row center flex={0.9}>
          <Text
            style={{
              fontFamily: 'montserrat-regular',
              textTransform: 'uppercase',
              fontWeight: '300',
            }}
            size={12}
            bold={focused ? true : false}
            color={focused ? nowTheme.COLORS.PRIMARY : 'black'}
          >
            {title}
          </Text>
        </Block>
      </Block>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  defaultStyle: {
    paddingVertical: 15,
    paddingHorizontal: 14,
    color: 'white',
  },
  activeStyle: {
    backgroundColor: nowTheme.COLORS.WHITE,
    borderRadius: 30,
    color: 'white',
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
  },
});

export default DrawerItem;
