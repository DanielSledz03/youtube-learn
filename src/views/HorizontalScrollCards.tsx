import { PoppinsText } from "@components";
import { colors } from "@constants";
import { useYouTubeSearch } from "@hooks";
import { CombinedParamList } from "@navigation";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { setSearchText } from "@store";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";

interface CardData {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
}

interface HorizontalScrollCardsProps {
  title: string;
}

const HorizontalScrollCards: React.FC<HorizontalScrollCardsProps> = ({
  title,
}) => {
  const { results, loading, error } = useYouTubeSearch(title);
  const dispatch = useDispatch();
  const navigate = useNavigation<NavigationProp<CombinedParamList>>();

  const handleShowMore = () => {
    dispatch(setSearchText(title));
    navigate.navigate("SearchScreen");
  };

  const data: CardData[] = results.map((item, index) => ({
    id: item.id.videoId || `${item.snippet.title}-${index}`,
    title:
      item.snippet.title.length > 50
        ? item.snippet.title.slice(0, 50) + "..."
        : item.snippet.title,
    description: item.snippet.description,
    date: new Date(item.snippet.publishedAt).toLocaleDateString("pl-PL"),
    imageUrl: item.snippet.thumbnails.high.url,
  }));

  if (loading) {
    return (
      <View style={styles.indicator}>
        <ActivityIndicator size="large" color={colors.black} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={{ color: "red" }}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <PoppinsText weight="SemiBold" style={styles.heading}>
          {title}
        </PoppinsText>

        <TouchableOpacity onPress={handleShowMore}>
          <PoppinsText weight="Regular" style={styles.showMore}>
            Show more
          </PoppinsText>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <PoppinsText weight="Medium" style={styles.title}>
              {item.title}
            </PoppinsText>
            <PoppinsText weight="Regular" style={styles.date}>
              {item.date}
            </PoppinsText>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: colors.black,
    borderBottomWidth: 2,
    marginHorizontal: -30,
    paddingHorizontal: 30,
    paddingBottom: 20,
    marginBottom: 20,
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  showMore: {
    textDecorationLine: "underline",
    fontSize: 12,
  },

  card: {
    width: Dimensions.get("window").width * 0.5,
    marginRight: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 120,
    objectFit: "cover",
    borderRadius: 16,
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 10,
  },

  date: {
    fontSize: 10,
    marginTop: 5,
    textAlign: "right",
  },

  heading: {
    fontSize: 18,
  },

  indicator: {
    marginBottom: 300,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HorizontalScrollCards;
