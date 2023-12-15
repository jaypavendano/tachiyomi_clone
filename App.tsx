import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useState } from 'react';
import { Content } from './Content';

export default function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar style="auto" />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingBottom: 20,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white', fontSize: 24 }}>Library</Text>
        <View
          style={{
            flexDirection: 'row',
            gap: 20,
          }}
        >
          <MaterialIcons name="search" size={24} color="white" />
          <MaterialIcons name="filter-list" size={24} color="white" />
          <MaterialCommunityIcons
            name="dots-vertical"
            size={24}
            color="white"
          />
        </View>
      </View>

      <Content />
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#08070C',
    padding: 10,
  },
  footerText: {
    color: 'white',
  },
});

const Footer = () => {
  type ItemType = {
    id: number;
    title: string;
    icon: keyof typeof MaterialIcons.glyphMap;
  };
  const items: ItemType[] = [
    {
      id: 1,
      title: 'Library',
      icon: 'collections-bookmark',
    },
    {
      id: 2,
      title: 'Updates',
      icon: 'update',
    },
    {
      id: 3,
      title: 'History',
      icon: 'history',
    },
    {
      id: 4,
      title: 'Browse',
      icon: 'chrome-reader-mode',
    },
    {
      id: 5,
      title: 'More',
      icon: 'more-horiz',
    },
  ];

  const [active, setActive] = useState(1);

  const handlePress = (id: number) => {
    setActive(id);
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingTop: 10,
      }}
    >
      {items.map((item) => (
        <View key={item.id} style={{ width: `${80 / 5}%` }}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => handlePress(item.id)}
          >
            <View
              style={{
                backgroundColor: active === item.id ? '#F3B375' : 'transparent',
                alignItems: 'center',
                padding: 3,
                borderRadius: 30,
              }}
            >
              <MaterialIcons
                name={item.icon}
                size={25}
                color={active === item.id ? 'black' : '#C6C0CA'}
              />
            </View>
            <Text
              style={{ color: 'white', textAlign: 'center', paddingTop: 8 }}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};
