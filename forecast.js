const getCityForm = document.querySelector("form");

let updateCity = async (city) => {
  const cityName = await getCity(city);
  const weatherDetail = await getWeather(cityName.Key);

  return { cityName, weatherDetail };
};

getCityForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const city = getCityForm.city.value.trim();
  getCityForm.reset();


  updateCity(city)
    .then((data) => updateUI(data))
    .catch((err) => {
      console.log(alert("Please enter a valid city name"));
      console.log("could not fetch the data", err);
    });
});

const wDetail = document.querySelector(".weather-detail");
const degree = document.querySelector(".deg");
const currTime = document.querySelector(".currtime");
const currcity = document.querySelector(".currcity");
const curMeridiem = document.querySelector(".curMeridiem");
const time = document.querySelector(".time");
const icon = document.querySelector(".icon");
const condition = document.querySelector(".condition");

const updateUI = (data) => {
  wDetail.classList.remove("d-none");
  time.classList.remove("d-none");

  const cityDetail = data.cityName;
  const weatherDetail = data.weatherDetail;

  console.log(cityDetail);
  console.log(weatherDetail);

  degree.textContent = weatherDetail.Temperature.Metric.Value;
  condition.textContent = weatherDetail.WeatherText;

  const weatherIconNumber = weatherDetail.WeatherIcon;
  icon.setAttribute("src", `icons/${weatherIconNumber}.svg`);

  const timestamp = weatherDetail.LocalObservationDateTime;
  const now = new Date(timestamp);
  currTime.textContent = now.toLocaleDateString();
  currcity.textContent = cityDetail.EnglishName;

  if (weatherDetail.IsDayTime) {
    curMeridiem.textContent = "Day";
  } else {
    curMeridiem.textContent = "Night";
  }
};