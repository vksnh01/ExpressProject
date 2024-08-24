const data = document.getElementById("inputField");
data.value = "";
const checkWeather = () => {
  const time = document.getElementById("time");

  data.value == ""
    ? alert("please enter city name")
    : (fetchData(data.value), (time.innerText = dateFunction()));
};

const fetchData = async (city) => {
  const curr = document.getElementById("currTemp");
  const loc = document.getElementById("city");
  const maxi = document.getElementById("maxTemp");
  const mini = document.getElementById("minTemp");
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ce472dac06292782f6d67354e2e1eb12&units=metric`
  );
  // sys.country
  const data = await res.json();
  console.log(data);
  if (data.cod == "404") {
    alert("please check the spelling of city name");
  } else {
    curr.innerText = data.main.temp;
    maxi.innerText = `Max-${data.main.temp_max}`;
    mini.innerText = `Min-${data.main.temp_min}`;
    loc.innerText = `${data.name},${data.sys.country}`;
  }
};

const dateFunction = () => {
  const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "june",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];
  const days = ["sun", "mon", "tue", "wed", "thur", "fri", "sat"];
  const date = new Date();
  const dated = date.getDate();
  const month = months[date.getMonth()];
  const day = days[date.getDay()];
let hour;
  hr > 12 ? (hour = hr - 12) : (hour = hr);
  //  hour = date.getHours() - 12;
  let min = date.getMinutes();
  let period = "am";
  hour >= 12 ? (period = "pm") : (period = "am");
  min < 10 ? (min = "0" + min) : "";
  const currTime = `${day} ${dated} ${month} | ${hour}:${min} ${period}`;
  return currTime;
};
