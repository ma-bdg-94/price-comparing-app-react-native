import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Platform,
  Dimensions,
  Keyboard,
  View,
  ScrollView,
  Image,
} from 'react-native';
import { Button, Block, NavBar, Text, theme } from 'galio-framework';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import Icon from './Icon';
import Input from './Input';
import Tabs from './Tabs';
import nowTheme from '../constants/Theme';
import {
  fishTabs,
  vegeTabs,
  fruitTabs,
  homeTabs,
  otherProductsTabs,
  redMeatTabs,
  whiteMeatTabs,
} from './data';
import { screenList, plantFoodList, animalFoodList, screenSupList } from '../navigation/screenData';

const { height, width } = Dimensions.get('window');
const iPhoneX = () =>
  Platform.OS === 'ios' && (height === 812 || width === 812 || height === 896 || width === 896);

const BellButton = ({ isWhite, style, navigation }) => (
  <TouchableOpacity style={[styles.button, style]} onPress={() => navigation.navigate('Pro')}>
    <Icon
      family="NowExtra"
      size={16}
      name="bell"
      color={nowTheme.COLORS[isWhite ? 'WHITE' : 'ICON']}
    />
    <Block
      middle
      style={[styles.notify, { backgroundColor: nowTheme.COLORS[isWhite ? 'WHITE' : 'PRIMARY'] }]}
    />
  </TouchableOpacity>
);

const BasketButton = ({ isWhite, style, navigation }) => (
  <TouchableOpacity style={[styles.button, style]} onPress={() => navigation.navigate('Pro')}>
    <Icon
      family="NowExtra"
      size={16}
      name="basket2x"
      color={nowTheme.COLORS[isWhite ? 'WHITE' : 'ICON']}
    />
  </TouchableOpacity>
);

const Header = (props) => {
  const {
    back,
    navigation,
    white,
    title,

    tabs,
    transparent,
    bgColor,
    iconColor,
    titleColor,
  } = props;

  let dump = 'dandelion.png';

  const handleLeftPress = () => {
    return back ? navigation?.goBack() : navigation?.openDrawer();
  };

  const renderRight = () => {
    return [
      <BellButton key="chat-home" navigation={navigation} isWhite={white} />,
      <BasketButton key="basket-home" navigation={navigation} isWhite={white} />,
    ];
  };

  const screenNames = screenList?.map((screen) => screen?.name?.en);
  const plantNames = plantFoodList?.map((screen) => screen.name.en);
  const meatNames = animalFoodList?.map((screen) => screen.name.en);
  const supScreenNames = screenSupList?.map((screen) => screen.name.en);
  const noShadow = ![...screenNames, ...plantNames, ...meatNames, ...supScreenNames].includes(
    title
  );
  const headerStyles = [
    !noShadow ? styles.shadow : null,
    transparent ? { backgroundColor: 'rgba(0,0,0,0)' } : null,
  ];

  const navbarStyles = [styles.navbar, bgColor && { backgroundColor: bgColor }];

  return (
    <Block style={headerStyles}>
      <NavBar
        back={false}
        title={title}
        style={navbarStyles}
        transparent={transparent}
        right={renderRight()}
        rightStyle={{ alignItems: 'center' }}
        left={
          <Icon
            name={back ? 'minimal-left2x' : 'align-left-22x'}
            family="NowExtra"
            size={16}
            onPress={handleLeftPress}
            color={iconColor || (white ? nowTheme.COLORS.WHITE : nowTheme.COLORS.ICON)}
          />
        }
        leftStyle={{ paddingVertical: 12, flex: 0.2 }}
        titleStyle={[
          styles.title,
          { color: nowTheme.COLORS[white ? 'WHITE' : 'HEADER'] },
          titleColor && { color: titleColor },
        ]}
        {...props}
      />
      {title === 'Home' && (
        <Block center>
          <Input
            right
            color="black"
            style={styles.search}
            placeholder="What are you looking for?"
            placeholderTextColor="#8898AA"
            onFocus={() => {
              Keyboard.dismiss();
              navigation.navigate('Pro');
            }}
            iconContent={
              <Icon size={16} color={theme.COLORS.MUTED} name="zoom-bold2x" family="NowExtra" />
            }
          />

          <Block row style={styles.options}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.tabsContainer}
              //style={{ height: 40 }}
            >
              {homeTabs?.map((tab) => (
                <Button
                  key={tab?.id}
                  shadowless
                  style={styles.tab}
                  onPress={() => navigation.navigate('Pro')}
                >
                  <Block row middle>
                    <Image
                      style={{ width: 16, height: 16, marginHorizontal: 5 }}
                      source={tab?.icon}
                    />
                    <Text
                      style={{
                        fontFamily: 'montserrat-regular',
                        lineHeight: 19,
                        fontWeight: '400',
                        color: nowTheme.COLORS.HEADER,
                      }}
                      size={12}
                    >
                      {tab?.title?.en}
                    </Text>
                  </Block>
                </Button>
              ))}
            </ScrollView>
          </Block>

          {tabs && (
            <View>
              <Tabs
                data={tabs || []}
                initialIndex={props.tabIndex || (props.tabs && props.tabs[0] && props.tabs[0].id)}
                onChange={(id) => navigation.setParams({ tabId: id })}
              />
            </View>
          )}
        </Block>
      )}
      {title === 'Fruits' && (
        <Block center>
          <Block row style={styles.options}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.tabsContainer}
            >
              {fruitTabs?.map((tab) => (
                <Button
                  key={tab?.id}
                  shadowless
                  style={styles.tab}
                  onPress={() => navigation.navigate('Pro')}
                >
                  <Block row middle>
                    <Image
                      style={{ width: 16, height: 16, marginHorizontal: 5 }}
                      source={tab?.icon}
                    />
                    <Text
                      style={{
                        fontFamily: 'montserrat-regular',
                        lineHeight: 19,
                        fontWeight: '400',
                        color: nowTheme.COLORS.HEADER,
                      }}
                      size={12}
                    >
                      {tab?.title?.en}
                    </Text>
                  </Block>
                </Button>
              ))}
            </ScrollView>
          </Block>

          {tabs && (
            <View>
              <Tabs
                data={tabs || []}
                initialIndex={props.tabIndex || (props.tabs && props.tabs[0] && props.tabs[0].id)}
                onChange={(id) => navigation.setParams({ tabId: id })}
              />
            </View>
          )}
        </Block>
      )}
      {title === 'Vegetables' && (
        <Block center>
          <Block row style={styles.options}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.tabsContainer}
            >
              {vegeTabs?.map((tab) => (
                <Button
                  key={tab?.id}
                  shadowless
                  style={styles.tab}
                  onPress={() => navigation.navigate('Pro')}
                >
                  <Block row middle>
                    <Image
                      style={{ width: 16, height: 16, marginHorizontal: 5 }}
                      source={tab?.icon}
                    />
                    <Text
                      style={{
                        fontFamily: 'montserrat-regular',
                        lineHeight: 19,
                        fontWeight: '400',
                        color: nowTheme.COLORS.HEADER,
                      }}
                      size={12}
                    >
                      {tab?.title?.en}
                    </Text>
                  </Block>
                </Button>
              ))}
            </ScrollView>
          </Block>

          {/* {tabs && (
            <View>
              <Tabs
                data={tabs || []}
                initialIndex={props.tabIndex || (props.tabs && props.tabs[0] && props.tabs[0].id)}
                onChange={(id) => navigation.setParams({ tabId: id })}
              />
            </View>
          )} */}
        </Block>
      )}
      {title === 'White Meats' && (
        <Block center>
          <Block row style={styles.options}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.tabsContainer}
            >
              {whiteMeatTabs?.map((tab) => (
                <Button
                  key={tab?.id}
                  shadowless
                  style={[styles.tab]}
                  onPress={() => navigation.navigate('Pro')}
                >
                  <Block row middle>
                    <Ionicons
                      name={tab?.icon}
                      size={16}
                      color="black"
                      style={{ marginHorizontal: 5 }}
                    />
                    <Text
                      style={{
                        fontFamily: 'montserrat-regular',
                        lineHeight: 19,
                        fontWeight: '400',
                        color: nowTheme.COLORS.HEADER,
                      }}
                      size={12}
                    >
                      {tab?.title?.en}
                    </Text>
                  </Block>
                </Button>
              ))}
            </ScrollView>
          </Block>

          {tabs && (
            <View>
              <Tabs
                data={tabs || []}
                initialIndex={props.tabIndex || (props.tabs && props.tabs[0] && props.tabs[0].id)}
                onChange={(id) => navigation.setParams({ tabId: id })}
              />
            </View>
          )}
        </Block>
      )}
      {title === 'Red Meats' && (
        <Block center>
          <Block row style={styles.options}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.tabsContainer}
            >
              {redMeatTabs?.map((tab) => (
                <Button
                  key={tab?.id}
                  shadowless
                  style={[styles.tab]}
                  onPress={() => navigation.navigate('Pro')}
                >
                  <Block row middle>
                    <MaterialCommunityIcons
                      name={tab?.icon}
                      size={16}
                      color="black"
                      style={{ marginHorizontal: 5 }}
                    />
                    <Text
                      style={{
                        fontFamily: 'montserrat-regular',
                        lineHeight: 19,
                        fontWeight: '400',
                        color: nowTheme.COLORS.HEADER,
                      }}
                      size={12}
                    >
                      {tab?.title?.en}
                    </Text>
                  </Block>
                </Button>
              ))}
            </ScrollView>
          </Block>

          {tabs && (
            <View>
              <Tabs
                data={tabs || []}
                initialIndex={props.tabIndex || (props.tabs && props.tabs[0] && props.tabs[0].id)}
                onChange={(id) => navigation.setParams({ tabId: id })}
              />
            </View>
          )}
        </Block>
      )}
      {title === 'Fishes' && (
        <Block center>
          <Block row style={styles.options}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.tabsContainer}
            >
              {fishTabs?.map((tab) => (
                <Button
                  key={tab?.id}
                  shadowless
                  style={[styles.tab]}
                  onPress={() => navigation.navigate('Pro')}
                >
                  <Block row middle>
                    <MaterialCommunityIcons
                      name={tab?.icon}
                      size={16}
                      color="black"
                      style={{ marginHorizontal: 5 }}
                    />
                    <Text
                      style={{
                        fontFamily: 'montserrat-regular',
                        lineHeight: 19,
                        fontWeight: '400',
                        color: nowTheme.COLORS.HEADER,
                      }}
                      size={12}
                    >
                      {tab?.title?.en}
                    </Text>
                  </Block>
                </Button>
              ))}
            </ScrollView>
          </Block>

          {tabs && (
            <View>
              <Tabs
                data={tabs || []}
                initialIndex={props.tabIndex || (props.tabs && props.tabs[0] && props.tabs[0].id)}
                onChange={(id) => navigation.setParams({ tabId: id })}
              />
            </View>
          )}
        </Block>
      )}
      {title === 'Other Products' && (
        <Block center>
          <Block row style={styles.options}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.tabsContainer}
            >
              {otherProductsTabs?.map((tab) => (
                <Button
                  key={tab?.id}
                  shadowless
                  style={[styles.tab]}
                  onPress={() => navigation.navigate('Pro')}
                >
                  <Block row middle>
                    <MaterialCommunityIcons
                      name={tab?.icon}
                      size={16}
                      color="black"
                      style={{ marginHorizontal: 5 }}
                    />
                    <Text
                      style={{
                        fontFamily: 'montserrat-regular',
                        lineHeight: 19,
                        fontWeight: '400',
                        color: nowTheme.COLORS.HEADER,
                      }}
                      size={12}
                    >
                      {tab?.title?.en}
                    </Text>
                  </Block>
                </Button>
              ))}
            </ScrollView>
          </Block>

          {tabs && (
            <View>
              <Tabs
                data={tabs || []}
                initialIndex={props.tabIndex || (props.tabs && props.tabs[0] && props.tabs[0].id)}
                onChange={(id) => navigation.setParams({ tabId: id })}
              />
            </View>
          )}
        </Block>
      )}
    </Block>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 12,
    position: 'relative',
  },
  tabsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: nowTheme.COLORS.PRIMARY, // Style for the active tab
  },
  activeTabTitle: {
    color: nowTheme.COLORS.WHITE, // Text color for the active tab
  },
  title: {
    width: '100%',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'montserrat-regular',
  },
  navbar: {
    paddingVertical: 0,
    paddingBottom: theme.SIZES.BASE * 1.5,
    paddingTop: iPhoneX ? theme.SIZES.BASE * 4 : theme.SIZES.BASE,
    zIndex: 5,
  },
  shadow: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 3,
  },
  notify: {
    backgroundColor: nowTheme.COLORS.SUCCESS,
    borderRadius: 4,
    height: theme.SIZES.BASE / 2,
    width: theme.SIZES.BASE / 2,
    position: 'absolute',
    top: 9,
    right: 12,
  },
  header: {
    backgroundColor: theme.COLORS.WHITE,
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.ICON,
  },
  search: {
    height: 40,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: nowTheme.COLORS.BORDER,
  },
  options: {
    marginBottom: 14,
    marginTop: 8,
    elevation: 4,
  },
  tab: {
    backgroundColor: theme.COLORS.transparent,
    //width: 100 ,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    paddingHorizontal: 0,
    elevation: 0,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: '400',
    color: nowTheme.COLORS.HEADER,
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: 'center',
  },
});

export default Header;
