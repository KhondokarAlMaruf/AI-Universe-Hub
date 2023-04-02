const LoadcardData = async (id) => {
  console.log(id);
  const url = `
    https://openapi.programming-hero.com/api/ai/tool/${id}
    `;
  const res = await fetch(url);
  const data = await res.json();
  displayCardData(data.data);
};

const displayCardData = (cards) => {
  console.log(cards.input_output_examples[0].input);

  const modalBody = document.getElementById("modal-body");
  modalBody.innerHTML = `

        <section class="d-flex flex-row p-4 gap-4">

            <section>
                    <div>
            <div>${
              cards.description ? cards.description : "No Description"
            }</div>

            <div  class="d-flex flex-row border gap-5 p-4">
                
                <div>
                    <div>${
                      cards.pricing[0].plan ? cards.pricing[0].plan : "Free"
                    }</div>

                    <div>${
                      cards.pricing[0].price ? cards.pricing[0].price : "Free"
                    }</div>
            </div>

            <div>
                <div>${
                  cards.pricing[1].plan ? cards.pricing[1].plan : "Free"
                }</div>

                <div>${
                  cards.pricing[1].price ? cards.pricing[1].price : "Free"
                }</div>
            </div>

            <div>
                <div>${
                  cards.pricing[2].plan ? cards.pricing[2].plan : "Free"
                }</div>

                <div>${
                  cards.pricing[2].price ? cards.pricing[2].price : "Free"
                }</div>
            </div>

            </div>



            <div class="d-flex flex-row gap-4 border p-4 mt-4 ">
                <div>
                    <h3>Features</h3>
                <li>${
                  cards.features[1].feature_name
                    ? cards.features[1].feature_name
                    : "NO Features"
                }</li>
                <li>${
                  cards.features[2].feature_name
                    ? cards.features[2].feature_name
                    : "NO Features"
                }</li>
                <li>${
                  cards.features[3].feature_name
                    ? cards.features[3].feature_name
                    : "NO Features"
                }</li>
                </div>

                <div>
                    <h3>Integration</h3>
                    <li>${
                      cards.integrations[0]
                        ? cards.integrations[0]
                        : "NO Data Found"
                    }</li>
                    <li>${
                      cards.integrations[1]
                        ? cards.integrations[1]
                        : "NO Data Found"
                    }</li>
                    <li>${
                      cards.integrations[3]
                        ? cards.integrations[3]
                        : "NO Data Found"
                    }</li>

                </div>

            </div>


        </div>
            </section>



            <section class="border p-4">

                    <div>
                        <img width="200" height="200"  src="${
                          cards.image_link[0]
                            ? cards.image_link[0]
                            : cards.image_link[1]
                        }" alt="" />
                    </div>

                    <h4>${
                      cards.input_output_examples[0].input
                        ? cards.input_output_examples[0].input
                        : "No Heading"
                    }</h4>

                    <p>${
                      cards.input_output_examples[0].output
                        ? cards.input_output_examples[0].output
                        : "No Description"
                    }</p>


            </section>

        <section>
          
          
      `;
};

LoadcardData();
