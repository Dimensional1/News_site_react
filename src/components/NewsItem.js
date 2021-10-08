
import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className="container"> 
        <div className="card my-3 " style={{width: "18rem"}}>
          <img src={!imageUrl?"https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F6b%2FTaka_Shiba.jpg%2F1200px-Taka_Shiba.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FShiba_Inu&tbnid=UvBK8t-8cyW1mM&vet=12ahUKEwi-mrKstLXzAhWyoksFHbVVD_cQMygBegUIARC5AQ..i&docid=OwGJIKvbjVKVqM&w=1200&h=900&q=shiba%20images&ved=2ahUKEwi-mrKstLXzAhWyoksFHbVVD_cQMygBegUIARC5AQ":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target=" _blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
