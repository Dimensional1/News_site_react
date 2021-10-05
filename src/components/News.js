import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
 
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    }
  }

  async componentDidMount() {
    let url="https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=f2ddb23f8d2b418caafa0492e361ce5e";
    let data =await fetch(url);
    let parsedData=await data.json()
    this.setState({articles: parsedData.articles})
  }
  
  render() {
    return (
      <div className="container my-6">
        <h1 className="mb-6">News-Monkey Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}  >
              <NewsItem
                title={element.title?element.title.slice(0,40):""}
                description={element.description?element.description:""}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>;
          })}
        </div>
      </div>
    )
  }
}

