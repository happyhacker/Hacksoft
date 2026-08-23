// Swiper Slider
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import type { Swiper as SwiperInstance } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

// Routing
import { useNavigate, useParams } from 'react-router-dom';

// Data
import { articles } from './articles';

// ---------------

type ArticleProps = {
  slug?: string;
};

function Article({ slug: slugProp }: ArticleProps) {
  const { slug: slugParam } = useParams();
  const navigate = useNavigate();

  const slug = slugProp ?? slugParam;
  const activeIndex = Math.max(
    0,
    articles.findIndex((article) => article.slug === slug)
  );
  const article = articles[activeIndex];

  /**
   * Moving to the article matching the slide the visitor swiped/clicked to
   *
   * @param swiper the swiper instance reporting the new active slide
   */
  const handleSlideChange = (swiper: SwiperInstance) => {
    const nextArticle = articles[swiper.activeIndex];
    if (nextArticle && nextArticle.slug !== slug) {
      navigate(`/articles/${nextArticle.slug}`);
    }
  };

  return (
    <div
      id="content"
      className="site-content center-relative single single-post"
      style={{ marginBottom: '100px' }}
    >
      <article>
        <div className="single-post-header-content content-1170 center-relative">
          <div className="image-slider-wrapper relative">
            <Swiper
              key={slug}
              initialSlide={activeIndex}
              pagination={{ clickable: true }}
              grabCursor={true}
              modules={[Pagination]}
              className="portfolio-item-slider"
              onSlideChange={handleSlideChange}
            >
              {articles.map((a) => (
                <SwiperSlide key={a.slug}>
                  <img src={a.image} alt={a.title} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="post-wrapper content-1170 center-relative">
          <div className="single-content-wrapper center-relative">
            <h1 className="entry-title">{article.title}</h1>

            <div className="post-info-wrapper">
              <div className="entry-info">
                <div className="cat-links">
                  <ul>
                    {article.tags.map((tag) => (
                      <li key={tag}>
                        <a href="#">{tag}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="entry-date published">{article.date}</div>
                <div className="author-nickname">
                  <a href="#" rel="author">
                    {article.author}
                  </a>
                </div>
              </div>
            </div>

            <div className="entry-content">
              {article.content ?? <p>This article is coming soon.</p>}
            </div>
          </div>
          <div className="clear"></div>
        </div>
      </article>
    </div>
  );
}

export default Article;
