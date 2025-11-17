const weatherDayStates = {
  // ===================================================================
  // SUN / CLEAR
  // ===================================================================
  1000: {
    description: "Sunny",
    from: "#00C2FF",
    trans: "#4FC3F7",
    to: "#FFF7E0",
    color: "#0D47A1",
    icon: "./assets/weather_icons/113.svg"
  },

  // ===================================================================
  // CLOUDS
  // ===================================================================
  1003: { // Partly cloudy
    description: "Partly cloudy",
    from: "#78909C",
    trans: "#B0BEC5",
    to: "#FFFFFF",
    color: "#1A237E",
    icon: "./assets/weather_icons/116.svg"
  },
  1006: { // Cloudy
    description: "Cloudy",
    from: "#607D8B",
    trans: "#90A4AE",
    to: "#CFD8DC",
    color: "#263238",
    icon: "./assets/weather_icons/119.svg"
  },
  1009: { // Overcast
    description: "Overcast",
    from: "#546E7A",
    trans: "#78909C",
    to: "#B0BEC5",
    color: "#263238",
    icon: "./assets/weather_icons/122.svg"
  },

  // ===================================================================
  // MIST & FOG
  // ===================================================================
  1030: {
    description: "Mist",
    from: "#B0BEC5",
    trans: "#CFD8DC",
    to: "#ECEFF1",
    color: "#37474F",
    icon: "./assets/weather_icons/143.svg"
  },
  1135: {
    description: "Fog",
    from: "#90A4AE",
    trans: "#B0BEC5",
    to: "#ECEFF1",
    color: "#263238",
    icon: "./assets/weather_icons/248.svg"
  },
  1147: {
    description: "Freezing fog",
    from: "#78909C",
    trans: "#B0BEC5",
    to: "#ECEFF1",
    color: "#263238",
    icon: "./assets/weather_icons/260.svg"
  },

  // ===================================================================
  // PATCHY / POSSIBLE PRECIPITATION
  // ===================================================================
  1063: { description: "Patchy rain possible",           from: "#607D8B", trans: "#90A4AE", to: "#E3F2FD", color: "#1565C0", icon: "./assets/weather_icons/176.svg" },
  1066: { description: "Patchy snow possible",           from: "#78909C", trans: "#B0BEC5", to: "#ECEFF1", color: "#263238", icon: "./assets/weather_icons/179.svg" },
  1069: { description: "Patchy sleet possible",          from: "#78909C", trans: "#B0BEC5", to: "#ECEFF1", color: "#263238", icon: "./assets/weather_icons/182.svg" },
  1072: { description: "Patchy freezing drizzle possible", from: "#78909C", trans: "#B0BEC5", to: "#ECEFF1", color: "#263238", icon: "./assets/weather_icons/185.svg" },

  // ===================================================================
  // DRIZZLE
  // ===================================================================
  1150: { description: "Patchy light drizzle",           from: "#607D8B", trans: "#90A4AE", to: "#E3F2FD", color: "#1565C0", icon: "./assets/weather_icons/263.svg" },
  1153: { description: "Light drizzle",                  from: "#546E7A", trans: "#78909C", to: "#BBDEFB", color: "#0D47A1", icon: "./assets/weather_icons/266.svg" },
  1168: { description: "Freezing drizzle",               from: "#78909C", trans: "#B0BEC5", to: "#ECEFF1", color: "#263238", icon: "./assets/weather_icons/281.svg" },
  1171: { description: "Heavy freezing drizzle",         from: "#607D8B", trans: "#90A4AE", to: "#CFD8DC", color: "#263238", icon: "./assets/weather_icons/284.svg" },

  // ===================================================================
  // RAIN
  // ===================================================================
  1180: { description: "Patchy light rain",              from: "#607D8B", trans: "#90A4AE", to: "#E3F2FD", color: "#1565C0", icon: "./assets/weather_icons/293.svg" },
  1183: { description: "Light rain",                     from: "#546E7A", trans: "#78909C", to: "#BBDEFB", color: "#0D47A1", icon: "./assets/weather_icons/296.svg" },
  1186: { description: "Moderate rain at times",         from: "#455A64", trans: "#607D8B", to: "#90CAF9", color: "#0D47A1", icon: "./assets/weather_icons/299.svg" },
  1189: { description: "Moderate rain",                  from: "#455A64", trans: "#607D8B", to: "#90CAF9", color: "#0D47A1", icon: "./assets/weather_icons/302.svg" },
  1192: { description: "Heavy rain at times",            from: "#37474F", trans: "#546E7A", to: "#64B5F6", color: "#0D47A1", icon: "./assets/weather_icons/305.svg" },
  1195: { description: "Heavy rain",                     from: "#37474F", trans: "#546E7A", to: "#64B5F6", color: "#0D47A1", icon: "./assets/weather_icons/308.svg" },
  1198: { description: "Light freezing rain",            from: "#78909C", trans: "#B0BEC5", to: "#ECEFF1", color: "#263238", icon: "./assets/weather_icons/311.svg" },
  1201: { description: "Moderate or heavy freezing rain", from: "#607D8B", trans: "#90A4AE", to: "#CFD8DC", color: "#263238", icon: "./assets/weather_icons/314.svg" },

  // ===================================================================
  // SLEET
  // ===================================================================
  1204: { description: "Light sleet",                    from: "#78909C", trans: "#B0BEC5", to: "#ECEFF1", color: "#263238", icon: "./assets/weather_icons/317.svg" },
  1207: { description: "Moderate or heavy sleet",        from: "#607D8B", trans: "#90A4AE", to: "#CFD8DC", color: "#263238", icon: "./assets/weather_icons/320.svg" },

  // ===================================================================
  // SNOW
  // ===================================================================
  1114: { description: "Blowing snow",                   from: "#546E7A", trans: "#78909C", to: "#B0BEC5", color: "#263238", icon: "./assets/weather_icons/227.svg" },
  1117: { description: "Blizzard",                       from: "#455A64", trans: "#607D8B", to: "#90A4AE", color: "#263238", icon: "./assets/weather_icons/230.svg" },
  1210: { description: "Patchy light snow",              from: "#78909C", trans: "#B0BEC5", to: "#ECEFF1", color: "#263238", icon: "./assets/weather_icons/323.svg" },
  1213: { description: "Light snow",                     from: "#78909C", trans: "#B0BEC5", to: "#ECEFF1", color: "#263238", icon: "./assets/weather_icons/326.svg" },
  1216: { description: "Patchy moderate snow",           from: "#607D8B", trans: "#90A4AE", to: "#CFD8DC", color: "#263238", icon: "./assets/weather_icons/329.svg" },
  1219: { description: "Moderate snow",                  from: "#607D8B", trans: "#90A4AE", to: "#CFD8DC", color: "#263238", icon: "./assets/weather_icons/332.svg" },
  1222: { description: "Patchy heavy snow",              from: "#546E7A", trans: "#78909C", to: "#B0BEC5", color: "#263238", icon: "./assets/weather_icons/335.svg" },
  1225: { description: "Heavy snow",                     from: "#546E7A", trans: "#78909C", to: "#B0BEC5", color: "#263238", icon: "./assets/weather_icons/338.svg" },

  // ===================================================================
  // ICE PELLETS & SHOWERS
  // ===================================================================
  1237: { description: "Ice pellets",                    from: "#607D8B", trans: "#90A4AE", to: "#CFD8DC", color: "#263238", icon: "./assets/weather_icons/350.svg" },
  1240: { description: "Light rain shower",              from: "#546E7A", trans: "#78909C", to: "#BBDEFB", color: "#0D47A1", icon: "./assets/weather_icons/353.svg" },
  1243: { description: "Moderate or heavy rain shower",  from: "#455A64", trans: "#607D8B", to: "#90CAF9", color: "#0D47A1", icon: "./assets/weather_icons/356.svg" },
  1246: { description: "Torrential rain shower",         from: "#37474F", trans: "#546E7A", to: "#64B5F6", color: "#0D47A1", icon: "./assets/weather_icons/359.svg" },
  1249: { description: "Light sleet showers",            from: "#78909C", trans: "#B0BEC5", to: "#ECEFF1", color: "#263238", icon: "./assets/weather_icons/362.svg" },
  1252: { description: "Moderate or heavy sleet showers", from: "#607D8B", trans: "#90A4AE", to: "#CFD8DC", color: "#263238", icon: "./assets/weather_icons/365.svg" },
  1255: { description: "Light snow showers",             from: "#78909C", trans: "#B0BEC5", to: "#ECEFF1", color: "#263238", icon: "./assets/weather_icons/368.svg" },
  1258: { description: "Moderate or heavy snow showers", from: "#607D8B", trans: "#90A4AE", to: "#CFD8DC", color: "#263238", icon: "./assets/weather_icons/371.svg" },
  1261: { description: "Light showers of ice pellets",   from: "#607D8B", trans: "#90A4AE", to: "#CFD8DC", color: "#263238", icon: "./assets/weather_icons/374.svg" },
  1264: { description: "Moderate or heavy showers of ice pellets", from: "#546E7A", trans: "#78909C", to: "#B0BEC5", color: "#263238", icon: "./assets/weather_icons/377.svg" },

  // ===================================================================
  // THUNDER & THUNDERSTORMS
  // ===================================================================
  1087: { description: "Thundery outbreaks possible",    from: "#455A64", trans: "#607D8B", to: "#90CAF9", color: "#0D47A1", icon: "./assets/weather_icons/200.svg" },
  1273: { description: "Patchy light rain with thunder", from: "#37474F", trans: "#546E7A", to: "#64B5F6", color: "#0D47A1", icon: "./assets/weather_icons/386.svg" },
  1276: { description: "Moderate or heavy rain with thunder", from: "#263238", trans: "#455A64", to: "#42A5F5", color: "#0D47A1", icon: "./assets/weather_icons/389.svg" },
  1279: { description: "Patchy light snow with thunder", from: "#607D8B", trans: "#90A4AE", to: "#CFD8DC", color: "#263238", icon: "./assets/weather_icons/392.svg" },
  1282: { description: "Moderate or heavy snow with thunder", from: "#546E7A", trans: "#78909C", to: "#B0BEC5", color: "#263238", icon: "./assets/weather_icons/395.svg" }
};

export default weatherDayStates;