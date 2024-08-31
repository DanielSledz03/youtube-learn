import { PoppinsText } from "@components";
import { colors } from "@constants";
import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
} from "react-native";

interface CardData {
  id: string;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
}

interface HorizontalScrollCardsProps {
  title: string;
  data: CardData[];
}

const HorizontalScrollCards: React.FC<HorizontalScrollCardsProps> = ({
  data,
  title,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <PoppinsText weight="SemiBold" style={styles.heading}>
          {title}
        </PoppinsText>

        <PoppinsText weight="Regular" style={styles.showMore}>
          Show more
        </PoppinsText>
      </View>

      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.date}>{item.date}</Text>
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
    fontSize: 18,
    fontWeight: "bold",
    padding: 10,
    color: "#333",
  },
  description: {
    fontSize: 14,
    color: "#555",
    paddingHorizontal: 10,
  },
  date: {
    fontSize: 12,
    color: "#999",
    padding: 10,
  },

  heading: {
    fontSize: 18,
  },
});

export default HorizontalScrollCards;
