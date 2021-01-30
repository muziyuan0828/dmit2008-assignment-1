import ejs from "ejs";

const stockDisplay = `
<aside class="stock">
  <header>
    <h3 class="name"><span><%= stockData['01. symbol'] %></span></h3>
  </header>
  <ul class="details" >
    <li> Stock Price: <span><%= stockData['05. price'] %>USD</span></li>
    <li> Date: <span><%= stockData['07. latest trading day'] %></span></li>
    <li> High: <span><%= stockData['03. high'] %></span></li>
    <li> Low: <span><%= stockData['04. low'] %></span></li>
    <li> Change: <span><%= stockData['09. change'] %></span></li>
    <li> Change Percent: <span><%= stockData['10. change percent'] %></span></li>
  </ul>
</aside>`;

const noResultsView = `
<aside class="error">
  <header>
    <h3> There are no results matching this search</h3>
 <header>
</aside>`;

function StockDisplay(displayClass) {
    this.configUI = function(stockData){
        if(Object.keys(stockData).length == 0) {
            const elem = ejs.render(noResultsView);
            document.querySelector(displayClass).insertAdjacentHTML('afterbegin', elem);
        }
        else {const elem = ejs.render(stockDisplay, {stockData});
        document.querySelector(displayClass).insertAdjacentHTML('afterbegin', elem);}
        
        
    }

    this.renderStock = function (stockData) {
        // if there are no stocks in the results
        this.removeChildElements();
        if (stockData.results.length === 0) {
          const elem = ejs.render(noResultsView);
          this.container.insertAdjacentHTML("afterbegin", elem);
        }
        
        // search returns results
        if (people.results !== 0) {
          //this.removeChildElements();
          people.results.forEach((person) => {
            console.log(person);
            const elem = ejs.render(personView, { person });
            this.container.insertAdjacentHTML("afterbegin", elem);
          });
        }
      };
}

export {StockDisplay}