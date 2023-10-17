import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, FlatList, Animated } from 'react-native';
import { Block, theme } from 'galio-framework';

const { width } = Dimensions.get('screen');
import nowTheme from '../constants/Theme';

const defaultMenu = [
  { id: 'music', title: 'Music', },
  { id: 'beauty', title: 'Beauty', },
  { id: 'fashion', title: 'Fashion', },
  { id: 'motocycles', title: 'Motocycles', },
];

const Tabs = ({ data, initialIndex, tabsLocation }) => {
  const [active, setActive] = useState(null);
  const animatedValue = new Animated.Value(1);

  useEffect(() => {
    initialIndex && setActive(data[initialIndex].id);
  }, [initialIndex, data]);

  const selectMenu = (id) => {
    setActive(id);
    animatedValue.setValue(0);
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const renderItem = (item) => {
    const isActive = active === item.id;

    const textColor = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [nowTheme.COLORS.TEXT, isActive ? nowTheme.COLORS.WHITE : nowTheme.COLORS.SECONDARY],
      extrapolate: 'clamp',
    });

    const containerStyles = [
      styles.titleContainer,
      !isActive && { backgroundColor: nowTheme.COLORS.TABS },
      isActive && styles.containerShadow,
    ];

    return (
      <Block style={containerStyles}>
        <Animated.Text
          style={[
            styles.menuTitle,
            { color: textColor },
            { fontFamily: 'montserrat-regular' },
          ]}
          onPress={() => selectMenu(item.id)}>
          {item.title}
        </Animated.Text>
      </Block>
    );
  };

  const renderMenu = () => {
    return (
      <FlatList
        data={data}
        horizontal={true}
        extraData={active}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => renderItem(item)}
        contentContainerStyle={styles.menu}
      />
    );
  };

  return (
    <Block style={styles.container}>
      {renderMenu()}
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    backgroundColor: theme.COLORS.WHITE,
    zIndex: 2,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    elevation: 4,
  },
  menu: {
    paddingHorizontal: theme.SIZES.BASE * 2.5,
    paddingTop: 8,
    paddingBottom: 16,
  },
  titleContainer: {
    alignItems: 'center',
    backgroundColor: nowTheme.COLORS.ACTIVE,
    borderRadius: 21,
    marginRight: 9,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  containerShadow: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 1,
  },
  menuTitle: {
    fontWeight: '600',
    fontSize: 14,
    paddingVertical: 8,
    paddingHorizontal: 12,
    color: nowTheme.COLORS.MUTED
  },
});

export default Tabs