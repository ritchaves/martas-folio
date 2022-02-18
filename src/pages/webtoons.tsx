import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Header from '../components/header';

const EP_1 =
  'https://www.webtoons.com/en/challenge/ichi-go-ichi-e-for-this-time-only-h/ep-01-for/viewer?title_no=426568&episode_no=1';
const EP_2 =
  'https://www.webtoons.com/en/challenge/ichi-go-ichi-e-for-this-time-only-h/ep-02-this/viewer?title_no=426568&episode_no=2';
const EP_3 =
  'https://www.webtoons.com/en/challenge/ichi-go-ichi-e-for-this-time-only-h/ep-03-time/viewer?title_no=426568&episode_no=3';

const Webtoons = (): JSX.Element => {
  return (
    <>
      <Header />
      <div className="ml-20 mr-20 mt-10">
        <p className="text-5xl">Webtoon</p>
        <div className="lg:flex sm:m-10 lg:justify-evenly">
          <div className="xs:hidden sm:block sm:float-left">
            <StaticImage
              src="../images/webtoons/igie_bannersaturated.jpg"
              alt="webtoon_p1"
              width={350}
              height={350}
            />
          </div>
          <p className="sm:m-10 lg:w-2/4">
            <p className="mb-5 text-3xl">
              <strong>Title:</strong> ichi-go ichi-e: for this time only
            </p>
            <p className="mb-5 text-2xl">
              一期一会 (ichi-go ichi-e), noun. once-in-a-lifetime encounter. ---
              Any encounter in life can never be repeated. Even if you gather
              the same people in the same place, that singular moment with all
              its nuances can never be replicated. And so, it should be
              treasured as such. You never know when one of these single moments
              can change the entire course of your life.
            </p>
          </p>
        </div>
        <p className="m-5 text-3xl">Chapters</p>
        <div className="flex sm:justify-evenly">
          <div>
            <StaticImage
              src="../images/webtoons/thumbnail_p1.jpg"
              alt="webtoon_p1"
              width={160}
              height={120}
              style={{ cursor: 'pointer' }}
              onClick={() => window.open(EP_1, '_blank')}
            />
            <p className="text-s text-right">Ch 1</p>
          </div>
          <div>
            <StaticImage
              src="../images/webtoons/thumbnail_p2.jpg"
              alt="webtoon_p2"
              width={160}
              height={120}
              style={{ cursor: 'pointer' }}
              onClick={() => window.open(EP_2, '_blank')}
            />
            <p className="text-s text-right">Ch 2</p>
          </div>
          <div>
            <StaticImage
              src="../images/webtoons/thumbnail_p3.jpg"
              alt="webtoon_p3"
              width={160}
              height={120}
              style={{ cursor: 'pointer' }}
              onClick={() => window.open(EP_3, '_blank')}
            />
            <p className="text-s text-right">Ch 3</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Webtoons;
