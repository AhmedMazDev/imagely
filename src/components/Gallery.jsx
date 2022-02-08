import React, { useCallback, useEffect, useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const Gallery = ({ photos, setPhotos, page, setPage, fetchData }) => {
  const fetchMoreData = () => {
    axios
      .get(`https://api.unsplash.com/photos?page=${page}`, {
        params: {
          client_id: "v4zjW08UgbcIQd9YvcQnDeZh2J7FQWmIid5ZajsWKOE",
        },
      })
      .then((response) => {
        setPhotos((prevData) => [...prevData, ...response.data]);
        setPage((prevPage) => prevPage + 1);
        console.log(page);
      });
  };
  return (
    <InfiniteScroll
      dataLength={photos.length}
      next={fetchMoreData}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <div className="gallery">
        {photos.map((photo) => {
          return (
            <div className="gallery-photo" key={uuidv4()}>
              <img src={photo.urls.regular} alt={photo.alt_description} />
            </div>
          );
        })}
      </div>
    </InfiniteScroll>
  );
};

export default Gallery;
