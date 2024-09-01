import { PoppinsText } from "@components";
import { colors } from "@constants";
import { useYouTubeSearch } from "@hooks";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";

interface CardData {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
  channelTitle: string;
}

interface VerticalScrollCardsProps {
  title: string;
}

const VerticalScrollCards: React.FC<VerticalScrollCardsProps> = ({ title }) => {
  const { results, loading, error } = useYouTubeSearch(title);

  const data: CardData[] = results.map((item) => ({
    id: item.id.videoId || "",
    title:
      item.snippet.title.length > 50
        ? item.snippet.title.slice(0, 50) + "..."
        : item.snippet.title,
    description: item.snippet.description,
    date: new Date(item.snippet.publishedAt).toLocaleDateString("pl-PL"),
    imageUrl: item.snippet.thumbnails.high.url,
    channelTitle: item.snippet.channelTitle,
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
        <PoppinsText weight="Regular" style={styles.textResults}>
          {data.length} results found for: “
          <PoppinsText weight="SemiBold">{title}</PoppinsText>”
        </PoppinsText>

        <TouchableOpacity>
          <PoppinsText style={styles.textSortBy} weight="Regular">
            Sort by: <PoppinsText weight="SemiBold">Most popular</PoppinsText>
          </PoppinsText>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View key={item.id} style={styles.card}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <PoppinsText weight="Bold" style={styles.channelTitle}>
              {item.channelTitle}
            </PoppinsText>
            <PoppinsText weight="Regular" style={styles.title}>
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
    justifyContent: "space-between",
    marginBottom: 20,
  },

  showMore: {
    textDecorationLine: "underline",
    fontSize: 12,
  },

  card: {
    width: "100%",
    marginBottom: 20,
    borderRadius: 8,
    overflow: "hidden",
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 200,
    objectFit: "cover",
    borderRadius: 16,
  },
  channelTitle: {
    fontSize: 12,
    marginTop: 10,
    paddingHorizontal: 10,
  },

  title: {
    fontSize: 16,
    marginTop: 10,
    paddingHorizontal: 10,
  },

  date: {
    fontSize: 12,
    marginTop: 5,
    textAlign: "right",
    paddingHorizontal: 10,
    paddingBottom: 10,
  },

  heading: {
    fontSize: 18,
  },

  indicator: {
    marginBottom: 300,
    justifyContent: "center",
    alignItems: "center",
  },

  textResults: {
    fontSize: 10,
    width: "100%",
  },

  textSortBy: {
    fontSize: 12,
    width: "100%",
    textAlign: "right",
  },
});

export default VerticalScrollCards;
