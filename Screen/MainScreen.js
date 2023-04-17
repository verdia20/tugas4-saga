import React from "react";
import { TouchableOpacity, View, FlatList, StyleSheet, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Jadwal = [
  {
    id: "1",
    departureCity: "Bali",
    arrivalCity: "Korea",
    airline: "Elang Indonesia",
    departureDate: "5 Mar 2023, 10:00",
    arrivalDate: "6 Mar 2023, 09:00",
  },
  {
    id: "2",
    departureCity: "Bali",
    arrivalCity: "Korea",
    airline: "Air Europe",
    departureDate: "5 Mar 2023, 13:00",
    arrivalDate: "6 Mar 2023, 05:00",
  },
  {
    id: "3",
    departureCity: "Bali",
    arrivalCity: "Korea",
    airline: "Tiger Air",
    departureDate: "5 Mar 2023, 01:00",
    arrivalDate: "6 Mar 2023, 03:00",
  },
  {
    id: "4",
    departureCity: "Bali",
    arrivalCity: "Korea",
    airline: "Majapahit Air",
    departureDate: "5 Mar 2023, 07:00",
    arrivalDate: "6 Mar 2023, 12:00",
  },
  {
    id: "5",
    departureCity: "Bali",
    arrivalCity: "Korea",
    airline: "Tapis Air",
    departureDate: "5 Mar 2023, 03:00",
    arrivalDate: "6 Mar 2023, 01:30",
  },
  {
    id: "6",
    departureCity: "Bali",
    arrivalCity: "Korea",
    airline: "Townlink",
    departureDate: "6 Mar 2023, 12:30",
    arrivalDate: "7 Mar 2023, 01:00",
  },
  {
    id: "7",
    departureCity: "Bali",
    arrivalCity: "Korea",
    airline: "Pilipino Air",
    departureDate: "6 Mar 2023, 09:30",
    arrivalDate: "7 Mar 2023, 10:00",
  },
  {
    id: "8",
    departureCity: "Bali",
    arrivalCity: "Korea",
    airline: "Elang Indonesia",
    departureDate: "6 Mar 2023, 09:00",
    arrivalDate: "7 Mar 2023, 01:30",
  },
  {
    id: "9",
    departureCity: "Bali",
    arrivalCity: "Korea",
    airline: "Air Europe",
    departureDate: "7 Mar 2023, 01:00",
    arrivalDate: "7 Mar 2023, 24:00",
  },
];

const MainScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>
        {item.departureCity} - {item.arrivalCity}
      </Text>
      <View style={styles.detailContainer}>
        <View style={styles.airlineContainer}>
          <FontAwesome name="plane" size={28} color="black" />
          <Text style={styles.airline}>{item.airline}</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>
            <FontAwesome5 name="plane-departure" size={15} color="black" />
            {item.departureDate}
          </Text>
          <Text style={styles.date}>
            <FontAwesome5 name="plane-arrival" size={15} color="black" />
            {item.arrivalDate}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.pop()}>
            <AntDesign name="arrowleft" size={30} color="white" />
          </TouchableOpacity>
          <Text style={styles.title}>Terbangkan.id</Text>
          <Feather name="user" size={30} color="white" />
        </View>
        <Text style={styles.subTitle}>Hasil Pencarian Penerbangan</Text>
      </View>
      <FlatList data={Jadwal} renderItem={renderItem} keyExtractor={(item) => item.id} />
      <Text style={styles.copyright}>Copyright Ferdy. M - 120140098</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E7B10A",
    marginTop: 20,
  },
  header: {
    width: "100%",
    backgroundColor: "#E7B10A",
    padding: 20,
    marginBottom: 10,
  },
  title: {
    color: "white",
    fontSize: 30,
  },
  subTitle: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  itemContainer: {
    backgroundColor: "#F7F1E5",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    flex: 1,
  },
  detailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  airlineContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: "red",
  },
  dateContainer: {
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 15,
    alignItems: "space-between",
  },
  airline: {
    fontSize: 17,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  date: {
    color: "#E7B10A",
  },
  copyright: {
    color: "white",
    marginBottom: 5,
    padding: 10,
    marginTop: 5,
    textAlign: "center",
  },
});

export default MainScreen;
