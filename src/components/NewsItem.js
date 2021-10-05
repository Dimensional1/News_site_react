import { getByTitle } from "@testing-library/dom";
import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl} = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src={!imageUrl?"https://www.google.com/search?q=shin+chan&sxsrf=AOaemvIgkv8y_ZU7nHF-3xOa9GS0UuLyow:1633453194902&source=lnms&tbm=isch&sa=X&ved=2ahUKEwirs8Gr37PzAhXEumMGHfP_BmgQ_AUoAXoECAEQAw&biw=1280&bih=623&dpr=1.5#imgrc=EcSssSxje2XrcM":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target=" _blank" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
