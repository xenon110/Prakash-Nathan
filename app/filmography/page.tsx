"use client";
import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Film {
  title: string;
  role: string;
  lang: "Hindi" | "English" | "Tamil" | "Malayalam" | "Marathi" | "Punjabi" | "Multi-Language";
  poster?: string;
  year?: string;
  note?: string;
  highlight?: boolean;
  imdbUrl?: string;
}

const filmographyData: Film[] = [
  {
    "title": "PK",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2014",
    "highlight": true,
    "poster": "/assets/films/pk.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt2338151/"
  },
  {
    "title": "Chennai Express",
    "role": "Distribution & Marketing",
    "lang": "Hindi",
    "year": "2013",
    "highlight": true,
    "poster": "/assets/films/chennai-express.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt2112124/"
  },
  {
    "title": "Jodhaa Akbar",
    "role": "UTV Home Entertainment Team",
    "lang": "Hindi",
    "year": "2008",
    "highlight": true,
    "poster": "/assets/films/jodhaa-akbar.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt0449994/"
  },
  {
    "title": "Yeh Jawaani Hai Deewani",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2013",
    "highlight": true,
    "poster": "/assets/films/yeh-jawaani-hai-deewani.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt2178470/"
  },
  {
    "title": "Barfi!",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2012",
    "highlight": true,
    "poster": "/assets/films/barfi.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt2082197/"
  },
  {
    "title": "Dilwale",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2015",
    "poster": "/assets/films/dilwale.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt4535650/"
  },
  {
    "title": "Raees",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2017",
    "poster": "/assets/films/raees.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt3405236/"
  },
  {
    "title": "Kick",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2014",
    "poster": "/assets/films/kick.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt2372222/"
  },
  {
    "title": "2 States",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2014",
    "poster": "/assets/films/2-states.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt2372678/"
  },
  {
    "title": "Dear Zindagi",
    "role": "Overseas Distribution Logistics",
    "lang": "Hindi",
    "year": "2016",
    "poster": "/assets/films/dear-zindagi.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt5946128/"
  },
  {
    "title": "Haider",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2014",
    "highlight": true,
    "poster": "/assets/films/haider.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt3390572/"
  },
  {
    "title": "Highway",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2014",
    "poster": "/assets/films/highway.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt2980794/"
  },
  {
    "title": "Tubelight",
    "role": "Theatrical Distribution Logistics",
    "lang": "Hindi",
    "year": "2017",
    "poster": "/assets/films/tubelight.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt5882970/"
  },
  {
    "title": "Raajneeti",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2010",
    "poster": "/assets/films/raajneeti.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1291465/"
  },
  {
    "title": "Satyagraha",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2013",
    "poster": "/assets/films/satyagraha.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt2275802/"
  },
  {
    "title": "Kaminey",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2009",
    "poster": "/assets/films/kaminey.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1274295/"
  },
  {
    "title": "Rowdy Rathore",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2012",
    "poster": "/assets/films/rowdy-rathore.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt2077833/"
  },
  {
    "title": "Rustom",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2016",
    "poster": "/assets/films/rustom.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt5165344/"
  },
  {
    "title": "The Lunchbox",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2013",
    "highlight": true,
    "poster": "/assets/films/the-lunchbox.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt2350496/"
  },
  {
    "title": "Guzaarish",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2010",
    "poster": "/assets/films/guzaarish.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1438298/"
  },
  {
    "title": "Delhi-6",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2009",
    "poster": "/assets/films/delhi-6.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1043451/"
  },
  {
    "title": "Dev.D",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2009",
    "highlight": true,
    "poster": "/assets/films/devd.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1327035/"
  },
  {
    "title": "Tees Maar Khan",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2010",
    "poster": "/assets/films/tees-maar-khan.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1572311/"
  },
  {
    "title": "I Hate Luv Storys",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2010",
    "poster": "/assets/films/i-hate-luv-storys.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1667838/"
  },
  {
    "title": "Wake Up Sid",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2009",
    "poster": "/assets/films/wake-up-sid.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1324059/"
  },
  {
    "title": "Paan Singh Tomar",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2012",
    "highlight": true,
    "poster": "/assets/films/paan-singh-tomar.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1620933/"
  },
  {
    "title": "Chillar Party",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2011",
    "poster": "/assets/films/chillar-party.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1841542/"
  },
  {
    "title": "Delhi Belly",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2011",
    "poster": "/assets/films/delhi-belly.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1934231/"
  },
  {
    "title": "Heroine",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2012",
    "poster": "/assets/films/heroine.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1949548/"
  },
  {
    "title": "7 Khoon Maaf",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2011",
    "poster": "/assets/films/7-khoon-maaf.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1629376/"
  },
  {
    "title": "No One Killed Jessica",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2011",
    "poster": "/assets/films/no-one-killed-jessica.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1734110/"
  },
  {
    "title": "Arjun: The Warrior Prince",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2012",
    "poster": "/assets/films/arjun-the-warrior-prince.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt2404027/"
  },
  {
    "title": "ABCD: Any Body Can Dance",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2013",
    "poster": "/assets/films/abcd-any-body-can-dance.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt2321163/"
  },
  {
    "title": "Kai Po Che!",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2013",
    "poster": "/assets/films/kai-po-che.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt2213054/"
  },
  {
    "title": "Himmatwala",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2013",
    "poster": "/assets/films/himmatwala.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt2344678/"
  },
  {
    "title": "Heropanti",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2014",
    "poster": "/assets/films/heropanti.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt3142232/"
  },
  {
    "title": "Luv Shuv Tey Chicken Khurana",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2012",
    "poster": "/assets/films/luv-shuv-tey-chicken-khurana.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt2186933/"
  },
  {
    "title": "Gippi",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2013",
    "poster": "/assets/films/gippi.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt2814372/"
  },
  {
    "title": "Shahid",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2012",
    "highlight": true,
    "poster": "/assets/films/shahid.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt2181831/"
  },
  {
    "title": "Filmistaan",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2014",
    "poster": "/assets/films/filmistaan.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt2417560/"
  },
  {
    "title": "Rangrezz",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2013",
    "poster": "/assets/films/rangrezz.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt2706264/"
  },
  {
    "title": "Joker",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2012",
    "poster": "/assets/films/joker.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt7286456/"
  },
  {
    "title": "Tere Naal Love Ho Gaya",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2012",
    "poster": "/assets/films/tere-naal-love-ho-gaya.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt2130242/"
  },
  {
    "title": "Thank You",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2011",
    "poster": "/assets/films/thank-you.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1720254/"
  },
  {
    "title": "Saheb, Biwi Aur Gangster",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2011",
    "poster": "/assets/films/saheb-biwi-aur-gangster.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt2073070/"
  },
  {
    "title": "My Friend Pinto",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2011",
    "poster": "/assets/films/my-friend-pinto.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1512220/"
  },
  {
    "title": "Kurbaan",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2009",
    "poster": "/assets/films/kurbaan.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1185442/"
  },
  {
    "title": "Chance Pe Dance",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2010",
    "poster": "/assets/films/chance-pe-dance.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1392744/"
  },
  {
    "title": "We Are Family",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2010",
    "poster": "/assets/films/we-are-family.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1428459/"
  },
  {
    "title": "Peepli Live",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2010",
    "poster": "/assets/films/peepli-live.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1447508/"
  },
  {
    "title": "Udaan",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2010",
    "highlight": true,
    "poster": "/assets/films/udaan.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1639426/"
  },
  {
    "title": "A Wednesday!",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2008",
    "highlight": true,
    "poster": "/assets/films/a-wednesday.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1280558/"
  },
  {
    "title": "Aamir",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2008",
    "poster": "/assets/films/aamir.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1241195/"
  },
  {
    "title": "Life in a... Metro",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2007",
    "poster": "/assets/films/life-in-a-metro.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt0800956/"
  },
  {
    "title": "The Blue Umbrella",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2005",
    "poster": "/assets/films/the-blue-umbrella.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt0457802/"
  },
  {
    "title": "Mumbai Meri Jaan",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2008",
    "poster": "/assets/films/mumbai-meri-jaan.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1266583/"
  },
  {
    "title": "Dhan Dhana Dhan Goal",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2007",
    "poster": "/assets/films/dhan-dhana-dhan-goal.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1120897/"
  },
  {
    "title": "Kismat Konnection",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2008",
    "poster": "/assets/films/kismat-konnection.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1105733/"
  },
  {
    "title": "Oye Lucky! Lucky Oye!",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2008",
    "poster": "/assets/films/oye-lucky-lucky-oye.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1292703/"
  },
  {
    "title": "Welcome to Sajjanpur",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2008",
    "poster": "/assets/films/welcome-to-sajjanpur.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1221139/"
  },
  {
    "title": "Dhoondte Reh Jaaoge",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2009",
    "poster": "/assets/films/dhoondte-reh-jaaoge.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1391544/"
  },
  {
    "title": "Aagey Se Right",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2009",
    "poster": "/assets/films/aagey-se-right.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1479667/"
  },
  {
    "title": "What's Your Raashee?",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2009",
    "poster": "/assets/films/whats-your-raashee.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1242530/"
  },
  {
    "title": "Main Aurr Mrs Khanna",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2009",
    "poster": "/assets/films/main-aurr-mrs-khanna.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1174041/"
  },
  {
    "title": "Agyaat",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2009",
    "poster": "/assets/films/agyaat.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1415252/"
  },
  {
    "title": "Jayantabhai Ki Luv Story",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2013",
    "poster": "/assets/films/jayantabhai-ki-luv-story.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt2622130/"
  },
  {
    "title": "Ghanchakkar",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2013",
    "poster": "/assets/films/ghanchakkar.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt2246724/"
  },
  {
    "title": "Issaq",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2013",
    "poster": "/assets/films/issaq.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt2215163/"
  },
  {
    "title": "Raja Natwarlal",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2014",
    "poster": "/assets/films/raja-natwarlal.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt3483712/"
  },
  {
    "title": "Dongri Ka Raja",
    "role": "Head of Marketing & Distribution",
    "lang": "Hindi",
    "year": "2016",
    "poster": "/assets/films/dongri-ka-raja.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt6046994/"
  },
  {
    "title": "Bollywood Diaries",
    "role": "Associate Producer",
    "lang": "Hindi",
    "year": "2016",
    "highlight": true,
    "poster": "/assets/films/bollywood-diaries.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt5216810/"
  },
  {
    "title": "Project Marathwada",
    "role": "Co-Producer",
    "lang": "Hindi",
    "year": "2016",
    "poster": "/assets/films/project-marathwada.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt5714802/"
  },
  {
    "title": "A Flying Jatt",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2016",
    "poster": "/assets/films/a-flying-jatt.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt5235880/"
  },
  {
    "title": "Shortcut Safari",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2016",
    "poster": "/assets/films/shortcut-safari.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt4505006/"
  },
  {
    "title": "Lipstick Under My Burkha",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Hindi",
    "year": "2017",
    "highlight": true,
    "poster": "/assets/films/lipstick-under-my-burkha.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt4807830/"
  },
  {
    "title": "Love All",
    "role": "Marketing & In-film",
    "lang": "Hindi",
    "year": "2023",
    "poster": "/assets/films/love-all.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt9511468/"
  },
  {
    "title": "The Avengers",
    "role": "Marketing, Distribution & Syndication",
    "lang": "English",
    "year": "2012",
    "highlight": true,
    "poster": "/assets/films/the-avengers.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt0848228/"
  },
  {
    "title": "Guardians of the Galaxy",
    "role": "Marketing, Distribution & Syndication",
    "lang": "English",
    "year": "2014",
    "highlight": true,
    "poster": "/assets/films/guardians-of-the-galaxy.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt2015381/"
  },
  {
    "title": "Captain America: The Winter Soldier",
    "role": "Marketing, Distribution & Syndication",
    "lang": "English",
    "year": "2014",
    "highlight": true,
    "poster": "/assets/films/captain-america-the-winter-soldier.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1843866/"
  },
  {
    "title": "Maleficent",
    "role": "Marketing, Distribution & Syndication",
    "lang": "English",
    "year": "2014",
    "poster": "/assets/films/maleficent.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1587310/"
  },
  {
    "title": "Up",
    "role": "Marketing, Distribution & Syndication",
    "lang": "English",
    "year": "2009",
    "highlight": true,
    "poster": "/assets/films/up.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1049413/"
  },
  {
    "title": "Cinderella",
    "role": "Marketing, Distribution & Syndication",
    "lang": "English",
    "year": "2015",
    "poster": "/assets/films/cinderella.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1661199/"
  },
  {
    "title": "Million Dollar Arm",
    "role": "Marketing, Distribution & Syndication",
    "lang": "English",
    "year": "2014",
    "poster": "/assets/films/million-dollar-arm.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1647668/"
  },
  {
    "title": "The Proposal",
    "role": "Marketing, Distribution & Syndication",
    "lang": "English",
    "year": "2009",
    "poster": "/assets/films/the-proposal.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1080016/"
  },
  {
    "title": "The Lone Ranger",
    "role": "Marketing, Distribution & Syndication",
    "lang": "English",
    "year": "2013",
    "poster": "/assets/films/the-lone-ranger.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1210819/"
  },
  {
    "title": "Oz the Great and Powerful",
    "role": "Marketing, Distribution & Syndication",
    "lang": "English",
    "year": "2013",
    "poster": "/assets/films/oz-the-great-and-powerful.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1621044/"
  },
  {
    "title": "Planes",
    "role": "Marketing, Distribution & Syndication",
    "lang": "English",
    "year": "2013",
    "poster": "/assets/films/planes.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1691916/"
  },
  {
    "title": "Planes: Fire & Rescue",
    "role": "Marketing, Distribution & Syndication",
    "lang": "English",
    "year": "2014",
    "poster": "/assets/films/planes-fire-rescue.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt2980706/"
  },
  {
    "title": "Surrogates",
    "role": "Marketing, Distribution & Syndication",
    "lang": "English",
    "year": "2009",
    "poster": "/assets/films/surrogates.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt0986263/"
  },
  {
    "title": "Bolt",
    "role": "Marketing, Distribution & Syndication",
    "lang": "English",
    "year": "2008",
    "poster": "/assets/films/bolt.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt0435705/"
  },
  {
    "title": "A Christmas Carol",
    "role": "Marketing, Distribution & Syndication",
    "lang": "English",
    "year": "2009",
    "poster": "/assets/films/a-christmas-carol.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1049413/"
  },
  {
    "title": "The Princess and the Frog",
    "role": "Marketing, Distribution & Syndication",
    "lang": "English",
    "year": "2009",
    "poster": "/assets/films/the-princess-and-the-frog.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt0780521/"
  },
  {
    "title": "Muppets Most Wanted",
    "role": "Marketing, Distribution & Syndication",
    "lang": "English",
    "year": "2014",
    "poster": "/assets/films/muppets-most-wanted.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt2281587/"
  },
  {
    "title": "Bedtime Stories",
    "role": "Marketing, Distribution & Syndication",
    "lang": "English",
    "year": "2008",
    "poster": "/assets/films/bedtime-stories.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt0960731/"
  },
  {
    "title": "Race to Witch Mountain",
    "role": "Marketing, Distribution & Syndication",
    "lang": "English",
    "year": "2009",
    "poster": "/assets/films/race-to-witch-mountain.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1075417/"
  },
  {
    "title": "G-Force",
    "role": "Marketing, Distribution & Syndication",
    "lang": "English",
    "year": "2009",
    "poster": "/assets/films/g-force.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1095217/"
  },
  {
    "title": "Tinker Bell and the Lost Treasure",
    "role": "Marketing, Distribution & Syndication",
    "lang": "English",
    "year": "2009",
    "poster": "/assets/films/tinker-bell-and-the-lost-treasure.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1216515/"
  },
  {
    "title": "Old Dogs",
    "role": "Marketing, Distribution & Syndication",
    "lang": "English",
    "year": "2009",
    "poster": "/assets/films/old-dogs.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt0960731/"
  },
  {
    "title": "Confessions of a Shopaholic",
    "role": "Marketing, Distribution & Syndication",
    "lang": "English",
    "year": "2009",
    "poster": "/assets/films/confessions-of-a-shopaholic.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1093908/"
  },
  {
    "title": "Vettai",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Tamil",
    "year": "2012",
    "poster": "/assets/films/vettai.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt2140507/"
  },
  {
    "title": "Thaandavam",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Tamil",
    "year": "2012",
    "poster": "/assets/films/thaandavam.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt2359483/"
  },
  {
    "title": "Anjaan",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Tamil",
    "year": "2014",
    "poster": "/assets/films/anjaan.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt3492576/"
  },
  {
    "title": "Settai",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Tamil",
    "year": "2013",
    "poster": "/assets/films/settai.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt2438814/"
  },
  {
    "title": "Kalakalappu",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Tamil",
    "year": "2012",
    "poster": "/assets/films/kalakalappu.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt2373300/"
  },
  {
    "title": "Mugamoodi",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Tamil",
    "year": "2012",
    "poster": "/assets/films/mugamoodi.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt2372863/"
  },
  {
    "title": "Theeya Velai Seiyyanum Kumaru",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Tamil",
    "year": "2013",
    "poster": "/assets/films/theeya-velai-seiyyanum-kumaru.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt2929944/"
  },
  {
    "title": "Muran",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Tamil",
    "year": "2011",
    "poster": "/assets/films/muran.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt2024479/"
  },
  {
    "title": "Grandmaster",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Malayalam",
    "year": "2012",
    "highlight": true,
    "poster": "/assets/films/grandmaster.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt2325754/"
  },
  {
    "title": "Husbands in Goa",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Malayalam",
    "year": "2012",
    "poster": "/assets/films/husbands-in-goa.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt2396349/"
  },
  {
    "title": "Ventilator",
    "role": "Marketing & Commercials Consultant (Purple Pebble / 3 National Awards)",
    "lang": "Marathi",
    "year": "2016",
    "highlight": true,
    "poster": "/assets/films/ventilator.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt6074158/"
  },
  {
    "title": "Harishchandrachi Factory",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Marathi",
    "year": "2009",
    "highlight": true,
    "poster": "/assets/films/harishchandrachi-factory.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1520268/"
  },
  {
    "title": "No Entry: Pudhe Dhoka Aahey",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Marathi",
    "year": "2012",
    "poster": "/assets/films/no-entry-pudhe-dhoka-aahey.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt2372481/"
  },
  {
    "title": "Youth",
    "role": "Associate Producer",
    "lang": "Marathi",
    "year": "2016",
    "poster": "/assets/films/youth.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt5784964/"
  },
  {
    "title": "Sur Sapata",
    "role": "Presented By",
    "lang": "Marathi",
    "year": "2019",
    "poster": "/assets/films/sur-sapata.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt9877472/"
  },
  {
    "title": "Sarvann",
    "role": "Marketing & Commercials Consultant (Priyanka Chopra / Purple Pebble Pictures)",
    "lang": "Punjabi",
    "year": "2017",
    "highlight": true,
    "poster": "/assets/films/sarvann.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt6380614/"
  },
  {
    "title": "Tutak Tutak Tutiya",
    "role": "Special thanks",
    "lang": "Multi-Language",
    "year": "2016",
    "note": "Hindi / Tamil / Telugu",
    "poster": "/assets/films/tutak-tutak-tutiya.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt6090724/"
  },
  {
    "title": "Ship of Theseus",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Multi-Language",
    "year": "2013",
    "note": "English / Hindi / Arabic / Swedish",
    "highlight": true,
    "poster": "/assets/films/ship-of-theseus.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt2260723/"
  },
  {
    "title": "The Namesake",
    "role": "Marketing, Distribution & Syndication",
    "lang": "Multi-Language",
    "year": "2006",
    "note": "English / Hindi",
    "highlight": true,
    "poster": "/assets/films/the-namesake.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt0492452/"
  }
];

const languageFilters = [
  "All",
  "Hindi",
  "English",
  "Tamil",
  "Malayalam",
  "Marathi",
  "Punjabi",
  "Multi-Language",
] as const;

const langThemeColors: Record<string, { bg: string; text: string; border: string; gradient: string }> = {
  Hindi: { bg: "bg-blue-500/10", text: "text-[#1D4ED8]", border: "border-blue-500/25", gradient: "from-blue-700 to-slate-950" },
  English: { bg: "bg-sky-500/10", text: "text-sky-700", border: "border-sky-500/25", gradient: "from-sky-700 to-indigo-950" },
  Marathi: { bg: "bg-rose-500/10", text: "text-rose-700", border: "border-rose-500/25", gradient: "from-rose-700 to-red-950" },
  Tamil: { bg: "bg-indigo-500/10", text: "text-indigo-700", border: "border-indigo-500/25", gradient: "from-indigo-700 to-slate-950" },
  Malayalam: { bg: "bg-emerald-500/10", text: "text-emerald-700", border: "border-emerald-500/25", gradient: "from-emerald-700 to-teal-950" },
  Punjabi: { bg: "bg-amber-500/10", text: "text-amber-700", border: "border-amber-500/25", gradient: "from-amber-700 to-orange-950" },
  "Multi-Language": { bg: "bg-orange-500/10", text: "text-orange-700", border: "border-orange-500/25", gradient: "from-orange-700 to-amber-950" },
};

function FilmPosterCard({ film, onSelect }: { film: Film; onSelect: () => void }) {
  const [imgError, setImgError] = useState(false);
  const theme = langThemeColors[film.lang] || langThemeColors.Hindi;

  return (
    <div
      onClick={onSelect}
      className={`group relative rounded-2xl overflow-hidden glass-card-interactive cursor-pointer border flex flex-col justify-between transition-all duration-300
        ${film.highlight ? "border-blue-400/90 shadow-[0_8px_24px_rgba(29,78,216,0.12)] ring-1 ring-blue-300/40" : "border-slate-200/90 shadow-sm hover:border-blue-300"}`}
    >
      {/* Poster Image Container */}
      <div className="relative aspect-[2/3] w-full overflow-hidden bg-slate-900">
        {film.poster && !imgError ? (
          <Image
            src={film.poster}
            alt={`${film.title} Poster`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
            className="object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${theme.gradient} p-4 flex flex-col justify-between relative overflow-hidden`}>
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-black pointer-events-none" />
            <div className="flex items-center justify-between z-10">
              <span className="px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[0.6rem] font-accent font-bold uppercase tracking-wider text-white border border-white/20">
                {film.lang}
              </span>
              {film.year && (
                <span className="text-[0.7rem] font-accent text-sky-200 font-semibold">
                  {film.year}
                </span>
              )}
            </div>

            <div className="z-10 space-y-0.5 my-auto text-center py-2">
              <span className="text-2xl block mb-1 opacity-80">🎬</span>
              <h4 className="font-display font-bold text-base sm:text-lg text-white leading-tight drop-shadow-md">
                {film.title}
              </h4>
            </div>

            <div className="z-10 text-center">
              <p className="font-accent text-[0.6rem] text-white/80 uppercase tracking-widest font-medium m-0">
                Cinema Portfolio
              </p>
            </div>
          </div>
        )}

        {/* Ambient Dark Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-50 group-hover:opacity-85 transition-opacity duration-300" />

        {/* Top Badges */}
        <div className="absolute top-2 left-2 right-2 flex items-center justify-between z-20">
          <span className={`px-2 py-0.5 rounded-full backdrop-blur-md font-accent text-[0.6rem] font-bold uppercase tracking-wider shadow-sm ${theme.bg} ${theme.text} bg-white/95 border ${theme.border}`}>
            {film.lang}
          </span>
          
          {/* Official IMDb Badge on Card */}
          {film.imdbUrl && (
            <a
              href={film.imdbUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="px-2 py-0.5 rounded bg-[#F5C518] hover:bg-[#e2b616] text-black font-accent text-[0.62rem] font-extrabold uppercase tracking-wider shadow-md flex items-center gap-0.5 no-underline transition-transform hover:scale-105"
              title={`Open ${film.title} on IMDb`}
            >
              <span>IMDb</span>
              <span className="text-[0.55rem]">↗</span>
            </a>
          )}
        </div>

        {/* Hover Inspect Icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
          <div className="w-9 h-9 rounded-full bg-white/95 text-[#1D4ED8] flex items-center justify-center text-sm font-bold shadow-2xl scale-75 group-hover:scale-100 transition-transform">
            🔍
          </div>
        </div>

        {/* Bottom Details on Poster */}
        <div className="absolute bottom-0 left-0 right-0 p-3 z-10 transform translate-y-0.5 group-hover:translate-y-0 transition-transform">
          <div className="flex items-baseline justify-between gap-1">
            <h3 className="font-display text-sm sm:text-base font-bold text-white drop-shadow m-0 leading-snug truncate">
              {film.title}
            </h3>
            {film.year && (
              <span className="font-accent text-[0.7rem] font-semibold text-sky-200 drop-shadow shrink-0">
                {film.year}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Caption Strip Under Poster */}
      <div className="p-3 bg-white border-t border-slate-100 flex-1 flex flex-col justify-between">
        <div>
          <p className="font-accent text-[0.72rem] text-[#64748B] leading-snug m-0 line-clamp-2 group-hover:text-[#334155] transition-colors">
            <strong className="text-[#0F172A] font-semibold">Role:</strong> {film.role}
          </p>
          {film.note && (
            <p className="font-accent text-[0.68rem] text-[#1D4ED8] mt-0.5 m-0 font-medium truncate">
              ✨ {film.note}
            </p>
          )}
        </div>

        <div className="pt-2 mt-2 border-t border-slate-100 flex items-center justify-between text-[0.68rem] font-accent text-[#64748B]">
          {film.imdbUrl ? (
            <a
              href={film.imdbUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-[#D97706] hover:text-[#B45309] font-bold flex items-center gap-1 no-underline"
            >
              <span className="px-1.5 py-0.5 rounded bg-[#F5C518] text-black text-[0.6rem]">IMDb</span>
              <span>Link ↗</span>
            </a>
          ) : (
            <span>Details</span>
          )}
          <span className="text-[#1D4ED8] font-bold group-hover:translate-x-0.5 transition-transform">→</span>
        </div>
      </div>
    </div>
  );
}

export default function FilmographyPage() {
  const [selectedLang, setSelectedLang] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalFilm, setActiveModalFilm] = useState<Film | null>(null);

  const filteredFilms = useMemo(() => {
    return filmographyData.filter((film) => {
      const matchLang = selectedLang === "All" || film.lang === selectedLang;
      const matchSearch =
        film.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        film.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (film.note && film.note.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (film.year && film.year.includes(searchQuery));
      return matchLang && matchSearch;
    });
  }, [selectedLang, searchQuery]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveModalFilm(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* ══ HEADER BANNER ══════════════════════════════════════ */}
      <div className="relative pt-36 pb-16 px-6 overflow-hidden border-b border-slate-200/80">
        <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-sky-400/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-4">
          <div className="flex items-center gap-2 text-xs text-[#64748B] font-accent">
            <Link href="/" className="no-underline text-[#64748B] hover:text-[#1D4ED8] transition-colors">
              Home
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-[#1D4ED8] font-medium">Filmography</span>
          </div>

          <div className="section-label">Cinema Legacy &amp; Posters</div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#0F172A] max-w-4xl leading-[1.12]">
            Filmography &amp; <span className="text-royal-gradient">Releases</span>
          </h1>

          <p className="font-accent text-base sm:text-lg text-[#475569] max-w-3xl leading-relaxed">
            <span className="text-[#0F172A] font-semibold">120+ films</span> across Hindi, English, Tamil, Malayalam, Marathi, Punjabi and Multi-Language cinema. Explore visual posters, release titles, direct IMDb links, and commercial distribution leadership.
          </p>

          {/* Quick Metrics */}
          <div className="flex flex-wrap gap-4 pt-2">
            <div className="px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-sm font-accent text-xs text-[#475569]">
              <span className="text-[#1D4ED8] font-bold text-sm">120+</span> Film Releases &amp; Posters
            </div>
            <div className="px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-sm font-accent text-xs text-[#475569]">
              <span className="text-[#1D4ED8] font-bold text-sm">6+</span> Languages
            </div>
            <div className="px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-sm font-accent text-xs text-[#475569]">
              <span className="text-[#1D4ED8] font-bold text-sm">3</span> National Awards (Ventilator)
            </div>
          </div>
        </div>
      </div>

      {/* ══ INTERACTIVE DIRECTORY ══════════════════════════════ */}
      <section className="py-16 px-6 relative min-h-screen">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Controls: Search & Language Filters */}
          <div className="space-y-6">
            {/* Search Input */}
            <div className="relative max-w-md">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search film title, role or year (e.g. PK, Avengers, Ventilator)..."
                className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-3.5 pl-11 text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/20 outline-none shadow-sm"
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#64748B]">
                🔍
              </span>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#64748B] hover:text-[#0F172A] bg-transparent border-0 cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Language Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {languageFilters.map((lang) => {
                const count =
                  lang === "All"
                    ? filmographyData.length
                    : filmographyData.filter((f) => f.lang === lang).length;
                const active = selectedLang === lang;

                return (
                  <button
                    key={lang}
                    onClick={() => setSelectedLang(lang)}
                    className={`px-4 py-2 rounded-full font-accent text-xs font-semibold tracking-wide whitespace-nowrap transition-all duration-200 cursor-pointer border
                      ${
                        active
                          ? "bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#1E40AF] text-white border-transparent shadow-[0_2px_12px_rgba(29,78,216,0.35)]"
                          : "bg-white text-[#475569] border-slate-200 hover:border-blue-300 hover:text-[#1D4ED8] shadow-sm"
                      }`}
                  >
                    <span>{lang}</span>
                    <span
                      className={`ml-1.5 px-1.5 py-0.5 rounded-full text-[0.65rem] ${
                        active ? "bg-white/20 text-white" : "bg-slate-100 text-[#64748B]"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between text-xs font-accent text-[#64748B] border-b border-slate-200/80 pb-3">
            <span>
              Showing <strong className="text-[#0F172A]">{filteredFilms.length}</strong> of {filmographyData.length} cinematic titles
            </span>
            <span className="text-[#1D4ED8] font-medium">Click any card to inspect poster &amp; IMDb page</span>
          </div>

          {/* Films Poster Grid */}
          {filteredFilms.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3.5 sm:gap-4.5">
              {filteredFilms.map((film, index) => (
                <FilmPosterCard
                  key={`${film.title}-${index}`}
                  film={film}
                  onSelect={() => setActiveModalFilm(film)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 rounded-3xl glass-card border border-slate-200 space-y-4">
              <p className="text-4xl">🎬</p>
              <p className="font-display text-xl text-[#0F172A]">No films matching "{searchQuery}"</p>
              <p className="text-xs text-[#64748B]">Try clearing your search query or selecting a different language tab.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedLang("All");
                }}
                className="px-5 py-2 rounded-full font-accent text-xs font-semibold bg-[#1D4ED8] text-white cursor-pointer border-none shadow-sm"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ══ FILM DETAIL & POSTER MODAL ════════════════════════ */}
      {activeModalFilm && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 select-none animate-in fade-in duration-200"
          onClick={() => setActiveModalFilm(null)}
        >
          <div
            className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalFilm(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-900/80 text-white flex items-center justify-center cursor-pointer border-none shadow-md hover:bg-[#1D4ED8] transition-colors"
            >
              ✕
            </button>

            {/* Poster Left */}
            <div className="md:w-1/2 relative aspect-[2/3] bg-slate-900">
              {activeModalFilm.poster ? (
                <Image
                  src={activeModalFilm.poster}
                  alt={activeModalFilm.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-blue-700 to-slate-900 text-white">
                  <span className="text-5xl mb-3">🎬</span>
                  <h3 className="font-display text-2xl font-bold">{activeModalFilm.title}</h3>
                  <p className="font-accent text-xs text-sky-200 mt-2">{activeModalFilm.lang} Cinema</p>
                </div>
              )}
            </div>

            {/* Content Right */}
            <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-accent font-bold uppercase tracking-wider text-[#1D4ED8]">
                    {activeModalFilm.lang}
                  </span>
                  {activeModalFilm.year && (
                    <span className="text-xs font-accent text-[#64748B] font-semibold">
                      Released {activeModalFilm.year}
                    </span>
                  )}
                </div>

                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0F172A] leading-tight m-0">
                  {activeModalFilm.title}
                </h2>

                {activeModalFilm.highlight && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs font-accent font-bold text-[#D97706]">
                    ⭐ Landmark Release / Award Recognition
                  </div>
                )}

                <div className="space-y-1.5 pt-2">
                  <p className="font-accent text-xs font-bold uppercase tracking-wider text-[#64748B] m-0">
                    Prakash Nathan's Role &amp; Contribution
                  </p>
                  <p className="font-accent text-sm text-[#0F172A] font-semibold leading-relaxed m-0">
                    {activeModalFilm.role}
                  </p>
                </div>

                {activeModalFilm.note && (
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-accent text-[#475569]">
                    {activeModalFilm.note}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3">
                {activeModalFilm.imdbUrl && (
                  <a
                    href={activeModalFilm.imdbUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full font-accent font-extrabold text-xs uppercase tracking-wider no-underline bg-[#F5C518] hover:bg-[#e2b616] text-black shadow-md flex items-center gap-1.5 transition-transform hover:scale-105"
                  >
                    <span>View on IMDb</span>
                    <span className="text-sm">↗</span>
                  </a>
                )}
                <Link
                  href="/contact"
                  onClick={() => setActiveModalFilm(null)}
                  className="px-5 py-2.5 rounded-full font-accent font-bold text-xs uppercase tracking-wider no-underline bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#1E40AF] text-white shadow-sm"
                >
                  Consult On Similar Projects →
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ══ COLLABORATION CALLOUT ═════════════════════════════ */}
      <section className="relative py-20 px-6 text-center border-t border-slate-200/80 bg-slate-50">
        <div className="max-w-3xl mx-auto space-y-5">
          <div className="section-label">Commercial Collaboration</div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Planning Your Next Film Release or Syndication Strategy?
          </h2>
          <p className="font-accent text-sm sm:text-base text-[#475569]">
            Benefit from 30+ years of distribution logistics, marketing consultancy, and commercial monetization expertise.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-accent font-bold text-xs uppercase tracking-wider no-underline
                bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#1E40AF] text-white shadow-[0_4px_25px_rgba(29,78,216,0.35)] hover:shadow-[0_8px_35px_rgba(29,78,216,0.5)] hover:scale-105 transition-all duration-200"
            >
              Get In Touch →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
