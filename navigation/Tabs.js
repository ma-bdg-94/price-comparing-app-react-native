import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HistoryMonth, HistoryWeek, News } from '../tabs/home';
import {
  Achenes,
  Berries,
  Capsules,
  Caryopsis,
  Drupes,
  Follicles,
  Hesperida,
  Legumes,
  Nuts,
  Pomes,
  Samaras,
  Schizocarps,
  Siliques,
  Syconiums,
} from '../tabs/fruits';
import { Bulbs, Flowers, Leaves, Roots, Stems, Tubers } from '../tabs/vegetables';
import {
  Chickens,
  Ducks,
  Geese,
  Hares,
  Pheasants,
  Pigeons,
  Quails,
  Turkeys,
} from '../tabs/whiteMeats';
import { Camels, Cattles, Goats, Sheeps } from '../tabs/redMeats';
import { Fishes, Octopi, Seafood } from '../tabs/fishes';
import { Eggs, FreshMilk, Honey } from '../tabs/otherProducts';

const Tab = createBottomTabNavigator();

export const HomeTabs = () => {
  return (
    <Tab.Navigator initialRouteName='News' screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarStyle: { height: 0 } }}>
      <Tab.Screen name="News" component={News} />
      <Tab.Screen name="Weekly" component={HistoryWeek} />
      <Tab.Screen name="Monthly" component={HistoryMonth} />
    </Tab.Navigator>
  );
};

export const FruitTabs = () => {
  return (
    <Tab.Navigator initialRouteName='Achenes' screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarStyle: { height: 0 } }}>
      <Tab.Screen name="Achenes" component={Achenes} />
      <Tab.Screen name="Berries" component={Berries} />
      <Tab.Screen name="Capsules" component={Capsules} />
      <Tab.Screen name="Caryopsis" component={Caryopsis} />
      <Tab.Screen name="Drupes" component={Drupes} />
      <Tab.Screen name="Follicles" component={Follicles} />
      <Tab.Screen name="Hesperida" component={Hesperida} />
      <Tab.Screen name="Legumes" component={Legumes} />
      <Tab.Screen name="Nuts" component={Nuts} />
      <Tab.Screen name="Pomes" component={Pomes} />
      <Tab.Screen name="Samaras" component={Samaras} />
      <Tab.Screen name="Schizocarps" component={Schizocarps} />
      <Tab.Screen name="Siliques" component={Siliques} />
      <Tab.Screen name="Syconiums" component={Syconiums} />
    </Tab.Navigator>
  );
};

export const VegetableTabs = () => {
  return (
    <Tab.Navigator initialRouteName='Bulbs' screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarStyle: { height: 0 } }}>
      <Tab.Screen name="Bulbs" component={Bulbs} />
      <Tab.Screen name="Flowers" component={Flowers} />
      <Tab.Screen name="Leaves" component={Leaves} />
      <Tab.Screen name="Roots" component={Roots} />
      <Tab.Screen name="Stems" component={Stems} />
      <Tab.Screen name="Tubers" component={Tubers} />
    </Tab.Navigator>
  );
};

export const WhiteMeatTabs = () => {
  return (
    <Tab.Navigator initialRouteName='Chickens' screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarStyle: { height: 0 } }}>
      <Tab.Screen name="Chickens" component={Chickens} />
      <Tab.Screen name="Ducks" component={Ducks} />
      <Tab.Screen name="Geese" component={Geese} />
      <Tab.Screen name="Hares" component={Hares} />
      <Tab.Screen name="Pheasants" component={Pheasants} />
      <Tab.Screen name="Pigeons" component={Pigeons} />
      <Tab.Screen name="Quails" component={Quails} />
      <Tab.Screen name="Turkeys" component={Turkeys} />
    </Tab.Navigator>
  );
};

export const RedMeatTabs = () => {
  return (
    <Tab.Navigator initialRouteName='Cattles' screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarStyle: { height: 0 } }}>
      <Tab.Screen name="Camels" component={Camels} />
      <Tab.Screen name="Cattles" component={Cattles} />
      <Tab.Screen name="Goats" component={Goats} />
      <Tab.Screen name="Sheeps" component={Sheeps} />
    </Tab.Navigator>
  );
};

export const FishTabs = () => {
  return (
    <Tab.Navigator initialRouteName='Fishes' screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarStyle: { height: 0 } }}>
      <Tab.Screen name="Fishes" component={Fishes} />
      <Tab.Screen name="Octopi" component={Octopi} />
      <Tab.Screen name="Seafood" component={Seafood} />
    </Tab.Navigator>
  );
};

export const OtherProductsTabs = () => {
  return (
    <Tab.Navigator initialRouteName='Eggs' screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarStyle: { height: 0 } }}>
      <Tab.Screen name="Eggs" component={Eggs} />
      <Tab.Screen name="Honey" component={Honey} />
      <Tab.Screen name="FreshMilk" component={FreshMilk} />
    </Tab.Navigator>
  );
};
