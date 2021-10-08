import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/everything?q=apple&from=2021-10-05&to=2021-10-05&sortBy=popularity&apiKey=f2ddb23f8d2b418caafa0492e361ce5e&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
    });
  }

  handledPreviousClick = async () => {
    console.log("clicked previous button");
    let url = `https://newsapi.org/v2/everything?q=apple&from=2021-10-05&to=2021-10-05&sortBy=popularity&apiKey=f2ddb23f8d2b418caafa0492e361ce5e&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();

    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };

  handledNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalArticles / 20)) {
    } else {
      let url = `https://newsapi.org/v2/everything?q=apple&from=2021-10-05&to=2021-10-05&sortBy=popularity&apiKey=f2ddb23f8d2b418caafa0492e361ce5e&page=${
        this.state.page + 1
      }&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();

      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };

  render() {
    return (
      <div className="container my-3 center">
        <h1 className="mb-6 my-3">News-Monkey Top Headlines</h1>
        <div className="row d-flex justify-content-center">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 mx-5" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 40) : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handledPreviousClick}
          >
            🦘Previous
          </button>
          <button className="btn btn-success" onClick={this.handledNextClick}>
            Next 🐱‍🏍
          </button>
        </div>
      </div>
    );
  }
}
