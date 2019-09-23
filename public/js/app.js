const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const loading = document.querySelector("#loading");
const result = document.querySelector("#result");

weatherForm.addEventListener("submit", e => {
  e.preventDefault();
  const location = search.value;
  loading.textContent = "Loading...";
  result.textContent = "";
  fetch(`/weather?address=${location}`).then(res => {
    res.json().then(data => {
      loading.textContent = "";
      if (data.error) {
        result.textContent = data.error;
      } else {
        result.textContent = `${data.location} ${data.forecast}`;
      }
    });
  });
});
