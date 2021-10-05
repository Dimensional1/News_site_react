import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  article = [
    {
      source: {
        id: "bbc-sport",
        name: "BBC Sport",
      },
      author: "BBC Sport",
      title: "Mumbai Indians v Delhi Capitals - Cricket - BBC Sport",
      description:
        "Find out the in depth batting and bowling figures for Mumbai Indians v Delhi Capitals in the Indian Premier League on BBC Sport.",
      url: "https://www.bbc.co.uk/sport/cricket/scorecard/ECKO50851",
      urlToImage:
        "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.21.1/images/bbc-sport-logo.png",
      publishedAt: "2021-10-02T10:07:35.6371042Z",
      content:
        "<table><tr><th>Batter</th><th>How Out</th><th>Bowler</th><th>Runs</th><th>Balls</th><th>4s</th><th>6s</th><th>Mins</th><th>SR</th></tr>\r\n<tr><th>Total</th><th>(1.3 overs)</th><th>8-for0wickets</th><t… [+1157 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.article,
      loading: false,
    }
  }
  render() {
    return (
      <div className="container my-6">
        <h2 className="mb-6">News-Monkey Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}  >
              <NewsItem
                title={element.title.slice(0,40)}
                description={element.description.slice(0,80)}
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

