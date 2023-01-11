/* eslint-disable react/no-array-index-key */
/* eslint-disable react/style-prop-object */
/* eslint-disable react/button-has-type */

import axios from 'axios';
import { useEffect, useState } from 'react';

import topic_1 from '../assets/images/topic-1.png';
import topic_2 from '../assets/images/topic-2.png';
import topic_3 from '../assets/images/topic-3.png';
import topic_4 from '../assets/images/topic-4.png';
import topic_5 from '../assets/images/topic-5.png';

import SliderItem from './SubComponents/SliderItem';

const Topics = ({ categoryData }) => (
  <section className="topics" id="topics" aria-labelledby="topic-label">
    <div className="container">

      <div className="card topic-card">

        <div className="card-content">

          <h2 className="headline headline-2 section-title card-title" id="topic-label">
            Hot topics
          </h2>

          <p className="card-text">
            Don&apos;t miss out on the latest news about Travel tips, Hotels review, Food guide...
          </p>

          <div className="btn-group">
            <button className="btn-icon" aria-label="previous" data-slider-prev>
              <ion-icon name="arrow-back" aria-hidden="true" />
            </button>

            <button className="btn-icon" aria-label="next" data-slider-next>
              <ion-icon name="arrow-forward" aria-hidden="true" />
            </button>
          </div>

        </div>

        <div className="slider" data-slider>
          <ul className="slider-list" data-slider-container>

            <li className="slider-item">
              <a href="/" className="slider-card">

                {/* <figure className="slider-banner img-holder"
                 style={{ width: 507, height: 618 }}> */}
                <figure className="slider-banner img-holder">
                  <img
                    src={topic_1}
                    width="507"
                    height="618"
                    loading="lazy"
                    alt="Sport"
                    className="img-cover"
                  />
                </figure>

                <div className="slider-content">
                  <span className="slider-title">Sport</span>

                  <p className="slider-subtitle">38 Articles</p>
                </div>

              </a>
            </li>

            <li className="slider-item">
              <a href="/" className="slider-card">

                {/* <figure className="slider-banner img-holder"
                 style={{ width: 507, height: 618 }}> */}
                <figure className="slider-banner img-holder">
                  <img
                    src={topic_2}
                    width="507"
                    height="618"
                    loading="lazy"
                    alt="Travel"
                    className="img-cover"
                  />
                </figure>

                <div className="slider-content">
                  <span className="slider-title">Travel</span>

                  <p className="slider-subtitle">63 Articles</p>
                </div>

              </a>
            </li>

            {
                categoryData.map((object, i) => (
                  <SliderItem category={object} key={object._id} />
                ))
              }

            <li className="slider-item">
              <a href="/" className="slider-card">

                {/* <figure className="slider-banner img-holder"
                 style={{ width: 507, height: 618 }}> */}
                <figure className="slider-banner img-holder">
                  <img
                    src={topic_3}
                    width="507"
                    height="618"
                    loading="lazy"
                    alt="Design"
                    className="img-cover"
                  />
                </figure>

                <div className="slider-content">
                  <span className="slider-title">Design</span>

                  <p className="slider-subtitle">78 Articles</p>
                </div>

              </a>
            </li>

            <li className="slider-item">
              <a href="/" className="slider-card">

                {/* <figure className="slider-banner img-holder"
                 style={{ width: 507, height: 618 }}> */}
                <figure className="slider-banner img-holder">
                  <img
                    src={topic_4}
                    width="507"
                    height="618"
                    loading="lazy"
                    alt="Movie"
                    className="img-cover"
                  />
                </figure>

                <div className="slider-content">
                  <span className="slider-title">Movie</span>

                  <p className="slider-subtitle">125 Articles</p>
                </div>

              </a>
            </li>

            <li className="slider-item">
              <a href="/" className="slider-card">

                {/* <figure className="slider-banner img-holder"
                 style={{ width: 507, height: 618 }}> */}
                <figure className="slider-banner img-holder">
                  <img
                    src={topic_5}
                    width="507"
                    height="618"
                    loading="lazy"
                    alt="Lifestyle"
                    className="img-cover"
                  />
                </figure>

                <div className="slider-content">
                  <span className="slider-title">Lifestyle</span>

                  <p className="slider-subtitle">78 Articles</p>
                </div>

              </a>
            </li>

          </ul>
        </div>

      </div>

    </div>
  </section>
);

export default Topics;
