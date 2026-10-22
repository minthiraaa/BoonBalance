import records from "./places.json";

const images = {
  "lakshmi": require("../assets/places/lakshmi.jpg"),
  "maenak": require("../assets/places/maenak.jpg"),
  "city-pillar": require("../assets/places/city-pillar.jpg"),
  "khamchanot": require("../assets/places/khamchanot.jpg"),
  "hiran": require("../assets/places/hiran.jpg"),
  "kuanyin": require("../assets/places/kuanyin.jpg"),
  "tiger": require("../assets/places/tiger.jpg"),
  "wat-khaek": require("../assets/places/wat-khaek.jpg"),
};

export const places = records.map((place) => ({ ...place, picture: images[place.id] }));
export const getPlacesByCategory = (category) => places.filter((place) => place.code === category);
