// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>



class Tab {
  constructor(topicData){
    this.topicData = topicData;
    console.log(this.topicData);
    this.topicWrapper = document.querySelector('.topics');
    
    this.createTab();
  }
  createTab() {
    this.topicData.topics.forEach(topic => {
      this.tab = document.createElement('div');
      this.tab.classList.add('tab');
      this.tab.textContent = topic;
      this.topicWrapper.appendChild(this.tab); 
    }) 
  }
};

  const lambdaTimes = axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then((data) => {
      let topicsArray =[];
      topicsArray.push(data.data.topics);
      topicsArray.forEach(topic => new Tab(data.data));
    })
    .catch((err) => {
      console.log('error: ', err);
    });

