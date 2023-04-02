const loadData = async () => {
  const url = ` https://openapi.programming-hero.com/api/ai/tools`;
  const res = await fetch(url);
  const data = await res.json();
  displayData(data.data.tools);
};

const displayData = (univers) => {
  const universeContainer = document.getElementById("universe-container");

  let isShowingAllCards = false;
  document.getElementById("show-all-cards").addEventListener("click", () => {
    isShowingAllCards = !isShowingAllCards;
    showcard();
  });

  const showcard = () => {
    // console.log(univers);
    universeContainer.innerHTML = "";
    const cardsToShow = isShowingAllCards ? univers : univers.slice(0, 6);
    // console.log(univers);
    cardsToShow.forEach((univer) => {
      //   console.log(univer.id);
      const universDiv = document.createElement("div");
      universDiv.classList.add("col");
      universDiv.innerHTML = `<div class="card h-100 p-3">
                            <img src="${univer.image}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Features</h5>
                                ${univer.features}
                            </div>
                            <div class="card-footer d-flex align-items-center justify-content-between">
                                <div class="">
                                <div class="fs-3">
                                ${univer.name}
                                </div>
                                <div>
                                <i class="fa-regular fa-calendar-days"></i> ${univer.published_in}
                                </div>
                                </div>
                                <div class="">
                                <button  onclick="LoadcardData(${univer.id})"><i class="px-2 fa-solid fa-arrow-right" data-bs-toggle="modal" data-bs-target="#phoneDetailsModal"></i></button>
                                </div>
                                
                                
                            </div>
                        </div>
    `;
      universeContainer.appendChild(universDiv);

      // <-------- spinner off ------------->
      toggleSpinner(false);
    });
  };

  showcard();
};

const toggleSpinner = (isLoading) => {
  const spinnerSection = document.getElementById("spinner-section");
  if (isLoading) {
    spinnerSection.classList.remove("d-none");
  } else {
    spinnerSection.classList.add("d-none");
  }
};

loadData();
// <------------- spinner on ---------->
toggleSpinner(true);
