import React, { useEffect, useState } from "react";
import { getNews } from "../Service/getNews";
import moment from "moment";
import alanBtn from "@alan-ai/alan-sdk-web";

const NewsData = () => {
  const [newsData, setNewsData] = useState([]);
  const alanKey =
    "dd2e111ddd9f5b9a81742769b86cb5b12e956eca572e1d8b807a3e2338fdd0dc/stage";
  const [selectOption, setSelectOption] = useState("");

  const getAllNews = async () => {
    let data = await getNews(selectOption);
    setNewsData(data.data.articles);
  };

  const selectCategory = (event) => {
    setSelectOption(event.target.value);
  };
  console.log(selectCategory);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: (commandData) => {
        setSelectOption(commandData.data);
      },
    });
  });

  useEffect(() => {
    getAllNews();
  }, [selectOption]);

  // console.log(newsData?.data?.articles);
  return (
    <div className="main">
      <h1 className="voicenews"> Voice News</h1>
      <div className="select">
        <label for="cars"> Choose a Category: </label>
        <select
          className="select-box"
          name="category"
          id="category"
          onChange={selectCategory}
          value={selectOption}
        >
          <option value="general"> General</option>
          <option value="health"> Health</option>
          <option value="business">Business </option>
          <option value="sports"> Sports</option>
        </select>
      </div>

      <div className="grid-main">
        {newsData?.map((news) => {
          return (
            <div className="grid-child">
              <img
                className="news-image"
                src={news?.urlToImage}
                alt="urlimage"
              />

              <p className="news-title">{news?.title} </p>
              <p className="news-content"> {news?.content}</p>
              <div className="space-between">
                <p className="news-author">
                  Author:
                  {news?.author
                    ? news?.author
                    : "Author Name is not available!"}
                </p>
                <p className="news-date">
                  Date: {moment(news?.publishedAt).format("LL")}
                </p>
              </div>
              <a href={news?.url}>Read More ...</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewsData;
