import alienIsolation from "../assets/covers/alien-isolation.jpg";
import antichamber from "../assets/covers/antichamber.jpg";
import aStoryAboutMyUncle from "../assets/covers/a-story-about-my-uncle.jpg";
import bioshock from "../assets/covers/bioshock.jpg";
import bioshock2 from "../assets/covers/bioshock-2.jpg";
import bioshockInfinite from "../assets/covers/bioshock-infinite.png";
import conarium from "../assets/covers/conarium.jpg";
import draugen from "../assets/covers/draugen.jpg";
import firewatch from "../assets/covers/firewatch.png";
import impostorFactory from "../assets/covers/impostor-factory.jpg";
import lifeIsStrange from "../assets/covers/life-is-strange.jpg";
import littleNightmares from "../assets/covers/little-nightmares.jpg";
import outlast from "../assets/covers/outlast.jpg";
import pubg from "../assets/covers/pubg.jpg";
import returnOfTheObraDinn from "../assets/covers/return-of-the-obra-dinn.jpg";
import seaOfSolitude from "../assets/covers/sea-of-solitude.jpg";
import theTownOfLight from "../assets/covers/the-town-of-light.jpg";
import theVanishingOfEthanCarter from "../assets/covers/the-vanishing-of-ethan-carter.jpg";

const modalData = [
  {
    id: "alien-isolation",
    name: "Alien Isolation",
    img: alienIsolation,
    releaseDate: "6 Jun, 2017",
    developer: "Zoetrope Interactive.",
    publisher: "Iceerg Interactive.",
    genres: "Adventure, Lovecraftian, Horror, Atmospheric.",
    storeLink: "https://store.steampowered.com/app/313780/Conarium/",
  },
  {
    id: "antichamber",
    name: "Antichamber",
    img: antichamber,
    releaseDate: "31 Jan, 2013",
    developer: "Alexander Bruce.",
    publisher: "Demruth.",
    genres: "Surreal, Puzzle, Psychedelic.",
    storeLink: "https://store.steampowered.com/app/219890/Antichamber/",
  },
  {
    id: "a-story-about-my-uncle",
    name: "A Story About My Uncle",
    img: aStoryAboutMyUncle,
    releaseDate: "28 May, 2014",
    developer: "Gone North Games.",
    publisher: "Coffee Stain Publishing.",
    genres: "Adventure, Parkour, Narration.",
    storeLink:
      "https://store.steampowered.com/app/278360/A_Story_About_My_Uncle/",
  },
  {
    id: "bioshock",
    name: "Bioshock",
    img: bioshock,
    releaseDate: "21 Aug, 2007",
    developer: "2K Boston, 2K Australia.",
    publisher: "2K.",
    genres: "FPS, Athmospheric, Sci-fi, Story Rich.",
    storeLink: "https://store.steampowered.com/agecheck/app/7670/",
  },
  {
    id: "bioshock-2",
    name: "Bioshock 2",
    img: bioshock2,
    releaseDate: "15 Sep, 2016",
    developer:
      "2K Marin, 2K China, Digital Extremes, 2k Australia, Blind Squirrel, Feral Interactive (Mac).",
    publisher: "2K, Feral Interactive (Mac).",
    genres: "FPS, Athmospheric, Sci-fi, Story Rich.",
    storeLink:
      "https://store.steampowered.com/app/409720/BioShock_2_Remastered/",
  },
  {
    id: "bioshock-infinite",
    name: "Bioshock Infinite",
    img: bioshockInfinite,
    releaseDate: "25 Mar, 2013",
    developer: "Irrational Games, Virtual Programming (Linux).",
    publisher: "2K.",
    genres: "FPS, Adventure, Sci-fi, Action.",
    storeLink: "https://store.steampowered.com/app/8870/BioShock_Infinite/",
  },
  {
    id: "conarium",
    name: "Conarium",
    img: conarium,
    releaseDate: "6 Jun, 2017",
    developer: "Zoetrope Interactive.",
    publisher: "Iceberg Interactive.",
    genres: "Adventure, Lovecraftian, Horror, Atmospheric.",
    storeLink: "https://store.steampowered.com/app/313780/Conarium/",
  },
  {
    id: "draugen",
    name: "Draugen",
    img: draugen,
    releaseDate: "29 May, 2019",
    developer: "Red Thread Games.",
    publisher: "Red Thread Games.",
    genres: "Adventure, Mistery, Narration, Atmosphere.",
    storeLink: "https://store.steampowered.com/app/770390/Draugen/",
  },
  {
    id: "firewatch",
    name: "Firewatch",
    img: firewatch,
    releaseDate: "9 Feb, 2016",
    developer: "Campo Santo.",
    publisher: "Panic, Campo Santo.",
    genres: "Adventure, Walking Simultaor, Open World, Exploration.",
    storeLink: "https://store.steampowered.com/app/383870/Firewatch/",
  },
  {
    id: "impostor-factory",
    name: "Impostor Factory",
    img: impostorFactory,
    releaseDate: "30 Sep, 2021",
    developer: "Freebird Games.",
    publisher: "Freebird Games.",
    genres: "Emotional, Adventure, Story Rich, Interactive movie.",
    storeLink: "https://store.steampowered.com/app/1182620/Impostor_Factory/",
  },
  {
    id: "life-is-strange",
    name: "Life Is Strange",
    img: lifeIsStrange,
    releaseDate: "29 Jan, 2015",
    developer:
      "DONTNOD Entertainment, Feral Interactive (Mac), Feral Interactive (Linux).",
    publisher:
      "Square Enix, Feral interactive (Mac), Feral Interactive (Linux).",
    genres: "Time Travel, Episodic, Choices Matter, Mystery.",
    storeLink:
      "https://store.steampowered.com/app/319630/Life_is_Strange__Episode_1/",
  },
  {
    id: "little-nightmares",
    name: "Little Nightmares",
    img: littleNightmares,
    releaseDate: "27 Abr, 2017",
    developer: "Tarsier Studios.",
    publisher: "BANDAI NAMCO Entertainment.",
    genres: "Terror, Atmospheric, Puzzle, Indie.",
    storeLink: "https://store.steampowered.com/app/424840/Little_Nightmares/",
  },
  {
    id: "outlast",
    name: "Outlast",
    img: outlast,
    releaseDate: "4 Sep, 2013",
    developer: "Red Barrels.",
    publisher: "Red Barrels.",
    genres: "Horror, Survival, Atmospheric, Gore.",
    storeLink: "https://store.steampowered.com/app/238320/Outlast/",
  },
  {
    id: "pubg",
    name: "PUBG",
    img: pubg,
    releaseDate: "21 Dec, 2017",
    developer: "KRAFTON, Inc.",
    publisher: "KRAFTON, Inc.",
    genres: "Battle Royale, FPS, Multiplayer, Tactic.",
    storeLink: "https://store.steampowered.com/app/578080/PUBG_BATTLEGROUNDS/",
  },
  {
    id: "return-of-the-obra-dinn",
    name: "Return Of The Obra Dinn",
    img: returnOfTheObraDinn,
    releaseDate: "18 Oct, 2018",
    developer: "Lucas Pope.",
    publisher: "3909.",
    genres: "Detective, Mystery, Puzzle, Atmospheric, Multiple Endings.",
    storeLink:
      "https://store.steampowered.com/app/653530/Return_of_the_Obra_Dinn/",
  },
  {
    id: "sea-of-solitude",
    name: "Sea Of Solitude",
    img: seaOfSolitude,
    releaseDate: "5 Jul, 2019",
    developer: "Jo-Mei Games.",
    publisher: "Electronic Arts.",
    genres: "Adventure, Emodional, Dark, Story Rich.",
    storeLink: "https://store.steampowered.com/app/1225590/Sea_of_Solitude/",
  },
  {
    id: "the-town-of-light",
    name: "The Town Of Light",
    img: theTownOfLight,
    releaseDate: "26 Feb, 2016",
    developer: "LKA.",
    publisher: "LKA, Wired Productions.",
    genres: "Exploration, Psychological, Horror, Mystery.",
    storeLink: "https://store.steampowered.com/app/433100/The_Town_of_Light/",
  },
  {
    id: "the-vanishing-of-ethan-carter",
    name: "The Vanishing Of Ethan Carter",
    img: theVanishingOfEthanCarter,
    releaseDate: "25 Sep, 2014",
    developer: "The Astronauts.",
    publisher: "The Astronauts.",
    genres: "Mystery, Atmospheric, Detective, Exploration.",
    storeLink:
      "https://store.steampowered.com/app/400430/The_Vanishing_of_Ethan_Carter_Redux/",
  },
];

export default modalData;
