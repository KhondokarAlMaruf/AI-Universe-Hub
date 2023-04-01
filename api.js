const loadData = async () => {
  const url = ` https://openapi.programming-hero.com/api/ai/tools`;
  const res = await fetch(url);
  const data = await res.json();
  displayData(data.data.tools);
};

const displayData = (univers) => {
  console.log(univers);
  const universeContainer = document.getElementById("universe-container");
  univers.forEach((univer) => {
    console.log(univer.image);
    const universDiv = document.createElement("div");
    universDiv.classList.add("col");

    universeContainer.appendChild(universDiv);
  });
};
loadData();
