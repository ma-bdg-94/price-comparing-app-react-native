import { Block, theme } from 'galio-framework';
import { Dimensions, Image, ScrollView, StyleSheet, View } from 'react-native';
import { DrawerItem, Icon } from '../components';

import Images from '../constants/Images';
import React, { useState } from 'react';
import { animalFoodList, plantFoodList, screenList, screenSupList } from './screenData';

function CustomDrawerContent() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <Block style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <Block style={styles.header}>
        <Image style={styles.logo} source={Images.Logo} />
      </Block>
      <Block flex style={{ paddingLeft: 8, paddingRight: 14 }}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          {screenList?.map((screen) => {
            return (
              <DrawerItem
                title={screen?.name?.en}
                key={screen?.id}
                to={screen?.to}
                icon={screen?.icon}
              />
            );
          })}
          <Block flex style={{ marginTop: 12, marginVertical: 8, paddingHorizontal: 8 }}>
            <Block
              style={{
                borderColor: 'black',
                width: '93%',
                borderWidth: StyleSheet.hairlineWidth,
                marginHorizontal: 10,
              }}
            />
            
          </Block>

          {plantFoodList?.map((screen) => {
            return (
              <DrawerItem
                title={screen?.name?.en}
                key={screen?.id}
                to={screen?.to}
                icon={screen?.icon}
              />
            );
          })}

          <Block flex style={{ marginTop: 12, marginVertical: 8, paddingHorizontal: 8 }}>
            <Block
              style={{
                borderColor: 'black',
                width: '93%',
                borderWidth: StyleSheet.hairlineWidth,
                marginHorizontal: 10,
              }}
            />
            
          </Block>

          {animalFoodList?.map((screen) => {
            return (
              <DrawerItem
                title={screen?.name?.en}
                key={screen?.id}
                to={screen?.to}
                icon={screen?.icon}
              />
            );
          })}

          <Block flex style={{ marginTop: 12, marginVertical: 8, paddingHorizontal: 8 }}>
            <Block
              style={{
                borderColor: 'black',
                width: '93%',
                borderWidth: StyleSheet.hairlineWidth,
                marginHorizontal: 10,
              }}
            />
            
          </Block>
          <View>
            {
              screenSupList?.map((screen) => (
                <DrawerItem key={screen?.id} title={screen?.name?.en} to={screen?.to} icon={screen?.icon} />
              ))
            }
          </View>
        </ScrollView>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 28,
    paddingBottom: theme.SIZES.BASE * 1.5,
    paddingTop: theme.SIZES.BASE * 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerIcon: {
    marginTop: -20,
  },
  logo: {
    height: 40,
    width: 37,
    tintColor: 'black',
  },
});

export default CustomDrawerContent;
