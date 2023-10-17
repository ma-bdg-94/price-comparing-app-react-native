import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import { Block, GalioProvider } from 'galio-framework';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';

import Screens from './navigation/Stacks';
import { Images, articles, nowTheme } from './constants';

// cache app images
const assetImages = [
  Images.Onboarding,
  Images.Logo,
  Images.Pro,
  Images.NowLogo,
  Images.iOSLogo,
  Images.androidLogo,
  Images.ProfilePicture,
  Images.CreativeTimLogo,
  Images.InvisionLogo,
  Images.RegisterBackground,
  Images.ProfileBackground
];

// cache product images
articles.map((article) => assetImages.push(article.image));

function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

const App = () => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const [fontLoaded, setFontLoaded] = useState(false);

  const loadResourcesAsync = async () => {
    await Font.loadAsync({
      'montserrat-regular': require('./assets/font/Montserrat-Regular.ttf'),
      'montserrat-bold': require('./assets/font/Montserrat-Bold.ttf')
    });

    setFontLoaded(true);
    await Promise.all([...cacheImages(assetImages)]);
  };

  useEffect(() => {
    SplashScreen.preventAutoHideAsync(); // Prevent auto-hiding of the splash screen

    const loadAppAsync = async () => {
      await loadResourcesAsync();
      setIsLoadingComplete(true);
    };

    loadAppAsync().finally(() => {
      SplashScreen.hideAsync(); // Hide the splash screen when loading is complete
    });
  }, []);

  if (!isLoadingComplete) {
    return null; // You can return a loading indicator if needed
  }

  return (
    <NavigationContainer>
      <GalioProvider theme={nowTheme}>
        <Block flex>
          <Screens />
        </Block>
      </GalioProvider>
    </NavigationContainer>
  );
};

export default App;
