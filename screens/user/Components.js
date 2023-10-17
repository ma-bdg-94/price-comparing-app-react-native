import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Animated,
  ImageBackground
} from 'react-native';

import Articles from '../user/Articles';
// Galio components
import { Block, Text, Button as GaButton, theme } from 'galio-framework';

// Now UI themed components
import { Images, nowTheme, articles, tabs } from '../../constants';
import { Button, Select, Icon, Input, Header, Switch } from '../../components';

import Img from '../../components/Img';
import { Card } from '../../components';

const { width } = Dimensions.get('screen');

const thumbMeasure = (width - 48 - 32) / 3;

const Components = () => {
  const [checkSelected, setCheckSelected] = useState([]);
  const [switches, setSwitches] = useState({
    'switch-1': true,
    'switch-2': false,
  });

  const toggleSwitch = (switchId) => {
    setSwitches({ ...switches, [switchId]: !switches[switchId] });
  };

  const renderButtons = () => {
    return (
      <Block flex>
        <Text size={16} style={styles.title}>
          Buttons
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Block center>
            <Button
              textStyle={{ fontFamily: 'montserrat-regular', fontSize: 12 }}
              color="default"
              style={styles.button}
            >
              DEFAULT
            </Button>
          </Block>
          {/* Add more Button components here */}
        </Block>
      </Block>
    );
  };

  const renderText = () => {
    return (
      <Block flex style={styles.group}>
        <Text size={16} style={styles.title}>
          Typography
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          {/* Add Text components for different headings and paragraphs here */}
        </Block>
      </Block>
    );
  };

  const renderImages = () => {
    return (
      <Block flex style={styles.group}>
        <Text size={16} style={styles.title}>
          Images
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          {/* Add Img components for different image types here */}
        </Block>
      </Block>
    );
  };

  const renderInputs = () => {
    return (
      <Block flex style={styles.group}>
        <Text size={16} style={styles.title}>
          Inputs
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          {/* Add Input components for different input types here */}
        </Block>
      </Block>
    );
  };

  const renderSwitches = () => {
    return (
      <Block flex style={styles.group}>
        <Text size={16} style={styles.title}>
          Switches
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          {/* Add Switch components here */}
        </Block>
      </Block>
    );
  };

  const renderTableCell = () => {
    return (
      <Block flex style={styles.group}>
        <Text size={16} style={styles.title}>
          Table Cell
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Block style={styles.rows}>
            {/* Add Table Cell content here */}
          </Block>
        </Block>
      </Block>
    );
  };

  const renderNavigation = () => {
    return (
      <Block flex style={styles.group}>
        <Text size={16} style={styles.title}>
          Navigation
        </Text>
        <Block>
          {/* Add Navigation components here */}
        </Block>
      </Block>
    );
  };

  const renderSocial = () => {
    return (
      <Block flex style={styles.group}>
        <Text size={16} style={styles.title}>
          Social
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          {/* Add Social components here */}
        </Block>
      </Block>
    );
  };

  const renderCards = () => {
    scrollX = new Animated.Value(0);
    const cards = [articles[5], articles[6]];
    return (
      <Block flex style={styles.group}>
        <Articles />
        <Block flex card center shadow style={styles.category}>
          <ImageBackground
            source={Images.Products['path']}
            style={[
              styles.imageBlock,
              { width: width - theme.SIZES.BASE * 2, height: 252 },
            ]}
            imageStyle={{
              width: width - theme.SIZES.BASE * 2,
              height: 252,
            }}
          >
            <Block style={styles.categoryTitle}>
              <Text size={18} bold color={theme.COLORS.WHITE}>
                View article
              </Text>
            </Block>
          </ImageBackground>
        </Block>
        <ScrollView
          horizontal={true}
          style={styles.contentContainer}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          contentContainerStyle={{
            width: width * 2,
          }}
        >
          {cards.map((item, index) => {
            return (
              <Card
                key={index}
                item={item}
                full
                titleStyle={styles.productTitle}
                imageStyle={{ height: 300, width: '100%', resizeMode: 'contain' }}
              />
            );
          })}
        </ScrollView>
      </Block>
    );
  };

  const renderAlbums = () => {
    return (
      <Block flex style={[styles.group, { paddingBottom: theme.SIZES.BASE * 5 }]}>
        <Block style={{ marginHorizontal: theme.SIZES.BASE * 2 }}>
          <Block row space="between">
            <Text bold size={16} color="#333" style={{ marginTop: 3 }}>
              Album
            </Text>
            <Button
              small
              color="transparent"
              textStyle={{ color: nowTheme.COLORS.PRIMARY, fontSize: 14 }}
            >
              View All
            </Button>
          </Block>
          <Block
            row
            space="between"
            style={{ marginTop: theme.SIZES.BASE, flexWrap: 'wrap' }}
          >
            {Images.Viewed.map((img, index) => (
              <Block key={`viewed-${img}`} style={styles.shadow}>
                <Image
                  resizeMode="cover"
                  source={img}
                  style={styles.albumThumb}
                />
              </Block>
            ))}
          </Block>
        </Block>
      </Block>
    );
  };

  return (
    <Block flex center>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30, width }}
      >
        {renderButtons()}
        {renderText()}
        {renderInputs()}
        {renderSwitches()}
        {renderTableCell()}
        {renderNavigation()}
        {renderSocial()}
        {renderCards()}
        {renderAlbums()}
      </ScrollView>
    </Block>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'montserrat-bold',
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 44,
    color: nowTheme.COLORS.HEADER
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: 'center'
  },
  group: {
    paddingTop: theme.SIZES.BASE * 2
  },
  shadow: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.2,
    elevation: 2
  },
  button: {
    marginBottom: theme.SIZES.BASE,
    width: width - theme.SIZES.BASE * 2,
  },
  optionsButton: {
    width: 'auto',
    height: 34,
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  category: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE / 2,
    borderWidth: 0
  },
  categoryTitle: {
    height: '100%',
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBlock: {
    overflow: 'hidden',
    borderRadius: 4,
    marginHorizontal: 10
  },
  albumThumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: 'center',
    width: thumbMeasure,
    height: thumbMeasure
  },
  productTitle: {
    color: nowTheme.COLORS.PRIMARY,
    textAlign: 'center',
    fontFamily: 'montserrat-bold',
    fontSize: 18
  }
});

export default Components;
