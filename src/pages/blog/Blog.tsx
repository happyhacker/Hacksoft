// UI Components
import { Link as RouterLink } from 'react-router-dom';

// Images
import article1 from '../../assets/images/news/blog_img_01.jpg';
import article2 from '../../assets/images/news/blog_img_02.jpg';
import article3 from '../../assets/images/news/blog_img_03.jpg';

// ---------------

function Blog() {
  /**
   * Returning window to (0 position) when going to single blog page
   */
  const handleClick = () => {
    window.scroll(0, 0);
  };

  return (
    <div
      id="content"
      className="site-content center-relative single single-post"
      style={{ marginTop: '100px', marginBottom: '120px' }}
    >
      <div className="blog-holder block center-relative">
        <article className="relative blog-item-holder center-relative has-post-thumbnail">
          <div className="blog-item-wrapper">
            <div className="post-thumbnail">
              <RouterLink to="/single" onClick={handleClick}>
                <div className="post-thumbnail-image">
                  <img src={article1} alt="" />
                </div>
              </RouterLink>
            </div>
            <div className="entry-holder">
              <h2 className="entry-title">
                <RouterLink to="/single" onClick={handleClick}>
                Navigating the AI Revolution in Technology
                </RouterLink>
              </h2>
              <div className="entry-info">
                <div className="entry-info-left">
                  <div className="cat-links">
                    <ul>
                      <li>
                        <a href="#">Technology</a>
                      </li>
                      <li>
                        <a href="#">AI</a>
                      </li>
                    </ul>
                  </div>
                  <div className="entry-date published">January 28, 2024</div>
                </div>
                <div className="excerpt">
                  <p>
                  Welcome to the forefront of the technological revolution, where Artificial 
                  Intelligence (AI) is no longer a futuristic concept, but a present-day reality 
                  transforming our world. As we stand at this pivotal juncture, it's essential to 
                  understand how AI is not just reshaping the digital landscape, but also redefining 
                  the potential of human-machine collaboration. This article delves into the 
                  profound impact of AI across various domains, from software development to 
                  business strategy, and explores the intricate ways in which AI technologies are 
                  enhancing our capabilities and driving innovation. Join us on this journey to 
                  unravel the complexities of AI and witness its transformative power in modern 
                  technology.
                  </p>
                </div>
              </div>
              <RouterLink className="button" to="/single">
                READ MORE
              </RouterLink>
            </div>
            <div className="clear"></div>
          </div>
        </article>

        <article className="relative blog-item-holder center-relative has-post-thumbnail">
          <div className="blog-item-wrapper">
            <div className="post-thumbnail">
              <RouterLink to="/single" onClick={handleClick}>
                <div className="post-thumbnail-image">
                  <img src={article2} alt="" />
                </div>
              </RouterLink>
            </div>
            <div className="entry-holder">
              <h2 className="entry-title">
                <RouterLink to="/single" onClick={handleClick}>
                  Epochs encyclopa galactica stellar
                </RouterLink>
              </h2>
              <div className="entry-info">
                <div className="entry-info-left">
                  <div className="cat-links">
                    <ul>
                      <li>
                        <a href="#">CSS</a>
                      </li>
                      <li>
                        <a href="#">Video</a>
                      </li>
                    </ul>
                  </div>
                  <div className="entry-date published">September 10, 2018</div>
                </div>
                <div className="excerpt">
                  <p>
                    Bearable only through love hydrogen atoms bits of moving
                    fluff culture shores of the cosmic ocean paroxysm of global
                    death rich in heavy atoms with pretty stories …
                  </p>
                </div>
              </div>
              <RouterLink className="button" to="/single" onClick={handleClick}>
                READ MORE
              </RouterLink>
            </div>
            <div className="clear"></div>
          </div>
        </article>
        
        <article className="relative blog-item-holder center-relative has-post-thumbnail">
          <div className="blog-item-wrapper">
            <div className="post-thumbnail">
              <RouterLink to="/single" onClick={handleClick}>
                <div className="post-thumbnail-image">
                  <img src={article3} alt="" />
                </div>
              </RouterLink>
            </div>
            <div className="entry-holder">
              <h2 className="entry-title">
                <RouterLink to="/single" onClick={handleClick}>
                  Connection of paper and web makes
                </RouterLink>
              </h2>
              <div className="entry-info">
                <div className="entry-info-left">
                  <div className="cat-links">
                    <ul>
                      <li>
                        <a href="#">Music</a>
                      </li>
                    </ul>
                  </div>
                  <div className="entry-date published">September 10, 2018</div>
                </div>
                <div className="excerpt">
                  <p>
                    Bearable only through love hydrogen atoms bits of moving
                    fluff culture shores of the cosmic ocean paroxysm of global
                    death rich in heavy atoms with pretty stories …
                  </p>
                </div>
              </div>
              <RouterLink className="button" to="/single" onClick={handleClick}>
                READ MORE
              </RouterLink>
            </div>
            <div className="clear"></div>
          </div>
        </article>
        
      </div>
    </div>
  );
}

export default Blog;
