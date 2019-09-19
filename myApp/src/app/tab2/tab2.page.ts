import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {
    
    var request = new XMLHttpRequest();
    request.open('GET', 'https://newsapi.org/v2/everything?q=bitcoin&from=2019-08-19&sortBy=publishedAt&apiKey=1afbdd2fe7d34a098dcd4e363b4b674e', true);
    request.onload = function () {
      const app = document.getElementById('root');

      const containe = document.createElement('div');
      containe.setAttribute('class', 'container');
  
      console.log(app);
      app.appendChild(containe);

  // Begin accessing JSON data here
 
      var data = JSON.parse(this.response);
      console.log(data);
      if (request.status >= 200 && request.status < 400) {
        Object.keys(data.articles).forEach(articles => {
          const card = document.createElement('div');
          card.setAttribute('class', 'card');

          console.log(articles);
          const logo = document.createElement('img') 
          logo.src = data.articles[articles].urlToImage;
    
          const h1 = document.createElement('ion-card-subtitle');
          h1.textContent = data.articles[articles].source.name;
          console.log(h1);

          const title = document.createElement('ion-card-title');
          title.textContent = data.articles[articles].title;
          console.log(title);

          const p = document.createElement('ion-card-content');
          data.articles[articles].description = data.articles[articles].description.substring(0, 300);
          p.textContent = `${data.articles[articles].description}...`;

          containe.appendChild(card);
          card.appendChild(logo);
          card.appendChild(h1);
          card.appendChild(title);
          card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();
  }

}
