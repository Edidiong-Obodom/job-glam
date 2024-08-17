import { useCallback, useEffect, useState } from "react";
import { RefreshControl, SafeAreaView, ScrollView, View } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [pageRefreshed, setPageRefreshed] = useState({
    popularJobs: false,
    nearbyJobs: false,
  });

  const onRefresh = useCallback(() => {
    setRefreshing(true);
  }, []);

  useEffect(() => {
    if (pageRefreshed.popularJobs && pageRefreshed.nearbyJobs) {
      setPageRefreshed({
        popularJobs: false,
        nearbyJobs: false,
      });
      setRefreshing(false);
    }
  }, [pageRefreshed]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          ),
          headerTitle: "",
        }}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`);
              }
            }}
          />

          <Popularjobs
            refreshing={refreshing}
            pageRefreshed={pageRefreshed}
            setPageRefreshed={setPageRefreshed}
          />
          <Nearbyjobs
            refreshing={refreshing}
            pageRefreshed={pageRefreshed}
            setPageRefreshed={setPageRefreshed}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
