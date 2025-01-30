import apiData from './blogNewData.mjs'
const mainBlogContainer = document.getElementById("mainBlogContainer")
const readMorePage = document.getElementById("readMorePage");
const closeReadMorePage = document.getElementById("closeReadMorePage")

closeReadMorePage.addEventListener("click", () => {
  readMorePage.style.display = "none"
})
function blogBox(apiData, index) {
  readMorePage.style.display = "none"

  return ` <div class="col-4">
                    <div class="card">
                        <img src="./image/cat.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${apiData[index].name}</h5>
                          <p class="card-text">${apiData[index].characterDetails.substring(0, 150) + "......."}</p>
                          <button class="btn readMoreBtn btn-primary">Read More</button>
                        </div>
                </div>
 </div>`
}


function showData(takingData) {
  takingData.forEach((element, index) => {
    mainBlogContainer.innerHTML += blogBox(takingData, index)

  })
}
showData(apiData)

const blogContainerDatah1 = document.querySelectorAll(".blog-container-data h1")
const blogContainerDatah2 = document.querySelectorAll(".blog-container-data h2")
const blogContainerDataPara = document.querySelectorAll(".blog-container-data p")
let readMoreBtn = document.querySelectorAll(".readMoreBtn")
const searchBtn = document.getElementById(`searchBtn`)
let inputValueSearch = document.getElementsByTagName("input")



searchBtn.addEventListener("click", () => {
  let newAPIData = []
  mainBlogContainer.innerHTML = ""
  console.log(inputValueSearch[0].value.length)
  newAPIData = apiData.filter((element) => {
    if (element.name.toUpperCase().includes(inputValueSearch[0].value.toUpperCase())) {
      return element
    }
    if (inputValueSearch[0].value.length == 0) {
      return apiData
    }
  })
  console.log(newAPIData);
  showData(newAPIData)
  console.log(readMoreBtn);
  

})

console.log(readMoreBtn);

readMoreBtn.forEach((readBtn, index) => {
  console.log("SAd");

  readBtn.addEventListener("click", () => {
    readMorePage.style.display = "block";
    document.body.style.height = "100vh !important";
    blogContainerDatah1[0].innerHTML = apiData[index].name + "'s Journey : " + apiData[index].characterDetails.substring(0, 20) + "...";
    blogContainerDatah2[0].innerHTML = "Hi! I'm " + apiData[index].name;
    blogContainerDataPara[0].innerHTML = apiData[index].aboutUs;
    blogContainerDataPara[1].innerHTML = `Meet my father Mr. ${apiData[index].parent.father.name} a ${apiData[index].parent.father.age}-years old man, He is a  ${apiData[index].parent.father.occupation}.  And, my mother Mrs. ${apiData[index].parent.mother.name} a ${apiData[index].parent.father.age}-year's old woman, She is ${apiData[index].parent.mother.occupation}. I have ${apiData[index].parent.pChildren.length} siblings ${apiData[index].parent.pChildren.map((e)=> e.childName).join(", ")}. ${apiData[index].parent.pChildren.map((e , index)=> { return e.childName + " is " + e.childAge + " year's old." + " and hobby is " + e.childHobby.join(", ") + "."  } ).join(" ")} "This is my joyful and vibrant world, filled with happiness and positivity."` ;
 
    blogContainerDataPara[2].innerHTML = apiData[index].futurePlan.futureDesc;
    blogContainerDataPara[3].innerHTML = "What's in Mind? :- " + apiData[index].futurePlan.futurePlanning.whatisinMind;
    blogContainerDataPara[4].innerHTML = apiData[index].futurePlan.futurePlanning.stepsTaken.map((steps, stepCount) => {
      return stepCount + 1 + " " + steps.steps + " " + "Requirements Needed : " + steps.requirementsNeeded
    });
    blogContainerDataPara[5].innerHTML = apiData[index].characterDetails;
  })
});
