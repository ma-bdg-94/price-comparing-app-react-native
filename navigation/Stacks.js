import { createStackNavigator } from '@react-navigation/stack';
import { Dimensions } from 'react-native'
import { FishTabs, FruitTabs, HomeTabs, RedMeatTabs, VegetableTabs, WhiteMeatTabs } from './Tabs';
import { Header } from '../components';
import { ForgotPassword, Login, Register } from '../screens/authentication'
import { Articles, Components, Profile, Settings } from '../screens/user';
import { Onboarding, Pro } from '../screens/app'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { nowTheme } from '../constants';
import CustomDrawerContent from './Menu'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const { width } = Dimensions.get('screen');


const HomeStack = (props) => {
  return (
    <Stack.Navigator screenOptions={{ headerMode: 'screen', headerShown: 'false' }}>
      <Stack.Screen
        name="HomeStack"
        component={HomeTabs}
        options={{
          header: (props) => (
            <Header title="Home" navigation={props.navigation} {...props} back={false} />
          ),
          cardStyle: { backgroundColor: '#FFFFFF' },
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="" back white transparent navigation={navigation} scene={scene} />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};

const FruitStack = (props) => {
  return (
    <Stack.Navigator screenOptions={{ headerMode: 'screen', headerShown: 'screen' }}>
      <Stack.Screen
        name="FruitsStack"
        component={FruitTabs}
        options={{
          header: (props) => (
            <Header title="Fruits" navigation={props.navigation} {...props} back={false} />
          ),
          cardStyle: { backgroundColor: '#FFFFFF' },
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="" back white transparent navigation={navigation} scene={scene} />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};

const VegetableStack = (props) => {
  return (
    <Stack.Navigator screenOptions={{ headerMode: 'screen', headerShown: 'screen' }}>
      <Stack.Screen
        name="VegetablesStack"
        component={VegetableTabs}
        options={{
          header: (props) => (
            <Header title="Vegetables" navigation={props.navigation} {...props} back={false} />
          ),
          cardStyle: { backgroundColor: '#FFFFFF' },
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="" back white transparent navigation={navigation} scene={scene} />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};

const WhiteMeatStack = (props) => {
  return (
    <Stack.Navigator screenOptions={{ headerMode: 'screen', headerShown: 'screen' }}>
      <Stack.Screen
        name="WhiteMeatsStack"
        component={WhiteMeatTabs}
        options={{
          header: (props) => (
            <Header title="White Meats" navigation={props.navigation} {...props} back={false} />
          ),
          cardStyle: { backgroundColor: '#FFFFFF' },
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="" back white transparent navigation={navigation} scene={scene} />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};

const RedMeatStack = (props) => {
  return (
    <Stack.Navigator screenOptions={{ headerMode: 'screen', headerShown: 'screen' }}>
      <Stack.Screen
        name="RedMeatsStack"
        component={RedMeatTabs}
        options={{
          header: (props) => (
            <Header title="Red Meats" navigation={props.navigation} {...props} back={false} />
          ),
          cardStyle: { backgroundColor: '#FFFFFF' },
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="" back white transparent navigation={navigation} scene={scene} />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};

const FishStack = (props) => {
  return (
    <Stack.Navigator screenOptions={{ headerMode: 'screen', headerShown: 'screen' }}>
      <Stack.Screen
        name="FishesStack"
        component={FishTabs}
        options={{
          header: (props) => (
            <Header title="Fishes" navigation={props.navigation} {...props} back={false} />
          ),
          cardStyle: { backgroundColor: '#FFFFFF' },
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="" back white transparent navigation={navigation} scene={scene} />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};

const OtherProductsStack = (props) => {
  return (
    <Stack.Navigator screenOptions={{ headerMode: 'screen', headerShown: 'screen' }}>
      <Stack.Screen
        name="OtherProductsStack"
        component={OtherProductsStack}
        options={{
          header: (props) => (
            <Header title="Other Products" navigation={props.navigation} {...props} back={false} />
          ),
          cardStyle: { backgroundColor: '#FFFFFF' },
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="" back white transparent navigation={navigation} scene={scene} />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};

const RegisterStack = (props) => {
  return (
    <Stack.Navigator
      initialRouteName="Register"
      screenOptions={{
        mode: 'card',
        headerShown: 'screen',
      }}
    >
      <Stack.Screen
        name="RegisterStack"
        component={Register}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Register" navigation={navigation} scene={scene} />
          ),
          backgroundColor: '#FFFFFF',
        }}
      />
    </Stack.Navigator>
  );
}

const LoginStack = (props) => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        mode: 'card',
        headerShown: 'screen',
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Login" navigation={navigation} scene={scene} />
          ),
          backgroundColor: '#FFFFFF',
        }}
      />
    </Stack.Navigator>
  );
}

const ForgotPasswordStack = (props) => {
  return (
    <Stack.Navigator
      initialRouteName="ForgotPassword"
      screenOptions={{
        mode: 'card',
        headerShown: 'screen',
      }}
    >
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Forgot Password" navigation={navigation} scene={scene} />
          ),
          backgroundColor: '#FFFFFF',
        }}
      />
    </Stack.Navigator>
  );
}

const ArticlesStack = (props) => {
  return (
    <Stack.Navigator
      initialRouteName="Articles"
      screenOptions={{
        mode: 'card',
        headerShown: 'screen',
      }}
    >
      <Stack.Screen
        name="Articles"
        component={Articles}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Articles" navigation={navigation} scene={scene} />
          ),
          backgroundColor: '#FFFFFF',
        }}
      />
    </Stack.Navigator>
  );
}

const ComponentsStack = (props) => {
  return (
    <Stack.Navigator
      initialRouteName="Components"
      screenOptions={{
        mode: 'card',
        headerShown: 'screen',
      }}
    >
      <Stack.Screen
        name="Components"
        component={Components}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Components" navigation={navigation} scene={scene} />
          ),
          backgroundColor: '#FFFFFF',
        }}
      />
    </Stack.Navigator>
  );
}

const ProfileStack = (props) => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        mode: 'card',
        headerShown: 'screen',
      }}
    >
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          header: ({ navigation, scene }) => (
            <Header transparent white title="Profile" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: '#FFFFFF' },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="" back white transparent navigation={navigation} scene={scene} />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

const SettingsStack = (props) => {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        mode: 'card',
        headerShown: 'screen',
      }}
    >
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          header: ({ navigation, scene }) => (
            <Header transparent white title="Profile" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: '#FFFFFF' },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="" back white transparent navigation={navigation} scene={scene} />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

const AppStack = () => {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: nowTheme.COLORS.PRIMARY,
        width: width * 0.8,
      }}
      screenOptions={{
        activeTintcolor: nowTheme.COLORS.WHITE,
        inactiveTintColor: nowTheme.COLORS.WHITE,
        activeBackgroundColor: 'transparent',
        itemStyle: {
          width: width * 0.75,
          backgroundColor: 'transparent',
          paddingVertical: 16,
          paddingHorizonal: 12,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: 'normal',
        },
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Fruits"
        component={FruitStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Vegetables"
        component={VegetableStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="WhiteMeats"
        component={WhiteMeatStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="RedMeats"
        component={RedMeatStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Fishes"
        component={FishStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="OtherProducts"
        component={OtherProductsStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Register"
        component={RegisterStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Login"
        component={LoginStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="ForgotPassword"
        component={ForgotPasswordStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Articles"
        component={ArticlesStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Components"
        component={ComponentsStack}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}

export default function  OnboardingStack (props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: 'card',
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
}
