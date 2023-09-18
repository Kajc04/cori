import React, { useState, useEffect } from 'react';
import FakeData from './fakeData.json'
import { useLocation } from 'react-router-dom';
import { Details } from './search-details';

function Boo() {

  const { search } = useLocation();
  // The value of search would be '?term=codecademy'
  const queryParams = new URLSearchParams(search);
  // queryParams is an object with a .get() method...
  const termValue = queryParams.get('q');
 const data = [
  {
    "title": "Kirikou and the Sorceress - Wikipedia",
    "link": "https://en.wikipedia.org/wiki/Kirikou_and_the_Sorceress",
    "description": "Kirikou and the Sorceress - Wikipediahttps://en.wikipedia.org › wiki › Kirikou_and_the_Sorc...https://en.wikipedia.org › wiki › Kirikou_and_the_Sorc...Kirikou and the Sorceress is a 1998 traditional animation feature film written and directed by Michel Ocelot. Drawn from elements of West African folk tales ...Production companies: France 3 Cinéma; ‎Les ...‎Produced by: Didier BrunnerBudget: 3,800,000 €‎Written by: Michel Ocelot‎Kirikou and the Wild Beasts · ‎Kirikou and the Men and Women · ‎Michel Ocelot",
    "additional_links": [
      {
        "text": "Kirikou and the Sorceress - Wikipediahttps://en.wikipedia.org › wiki › Kirikou_and_the_Sorc...",
        "href": "https://en.wikipedia.org/wiki/Kirikou_and_the_Sorceress"
      },
      {
        "text": "France 3 Cinéma",
        "href": "http://en.wikipedia.org/wiki/France_3_Cin%C3%A9ma"
      },
      {
        "text": "Les ...",
        "href": "http://en.wikipedia.org/wiki/Les_Armateurs"
      },
      {
        "text": "Didier Brunner",
        "href": "http://en.wikipedia.org/wiki/Didier_Brunner"
      },
      {
        "text": "3",
        "href": "http://en.wikipedia.org/wiki/Kirikou_and_the_Sorceress"
      },
      {
        "text": "Michel Ocelot",
        "href": "http://en.wikipedia.org/wiki/Michel_Ocelot"
      },
      {
        "text": "Kirikou and the Wild Beasts",
        "href": "https://en.wikipedia.org/wiki/Kirikou_and_the_Wild_Beasts"
      },
      {
        "text": "Kirikou and the Men and Women",
        "href": "https://en.wikipedia.org/wiki/Kirikou_and_the_Men_and_Women"
      },
      {
        "text": "Michel Ocelot",
        "href": "https://en.wikipedia.org/wiki/Michel_Ocelot"
      },
      {
        "text": "",
        "href": "https://en.wikipedia.org/wiki/Kirikou_and_the_Sorceress"
      }
    ],
    "cite": {
      "domain": "https://en.wikipedia.org › wiki › Kirikou_and_the_Sorc...",
      "span": " › wiki › Kirikou_and_the_Sorc..."
    }
  },
  {
    "title": "Kirikou and the Sorceress (1998) - IMDb",
    "link": "https://www.imdb.com/title/tt0181627/",
    "description": "In a little village somewhere in Africa, a boy named Kirikou is born. But he's not a normal boy, because he knows what he wants very well.",
    "additional_links": [
      {
        "text": "Kirikou and the Sorceress (1998) - IMDbhttps://www.imdb.com › title",
        "href": "https://www.imdb.com/title/tt0181627/"
      }
    ],
    "cite": {
      "domain": "https://www.imdb.com › title",
      "span": " › title"
    },
    "g_review_stars": " Rating: 7.5/10 · ‎9,638 votes"
  },
  {
    "title": "Kirikou and the Sorceress (1998) ( Kirikou et la sorcière ...",
    "link": "https://www.amazon.com/Kirikou-Sorceress-sorci%C3%A8re-Blu-ray/dp/B001ANZRCC",
    "description": "Kirikou and the Sorceress (1998) ( Kirikou et la sorcière ...https://www.amazon.com › Kirikou-Sorceress-sorcière-...https://www.amazon.com › Kirikou-Sorceress-sorcière-...Amazon.com: Kirikou and the Sorceress (1998) ( Kirikou et la sorcière ) ( Kirikou & the Sorceress ) [ NON-USA FORMAT, Blu-Ray, Reg.Format: Import, Blu-ray, WidescreenGenre: Animation Rating: 4.7 · ‎611 reviews",
    "additional_links": [
      {
        "text": "Kirikou and the Sorceress (1998) ( Kirikou et la sorcière ...https://www.amazon.com › Kirikou-Sorceress-sorcière-...",
        "href": "https://www.amazon.com/Kirikou-Sorceress-sorci%C3%A8re-Blu-ray/dp/B001ANZRCC"
      },
      {
        "text": "",
        "href": "https://www.amazon.com/Kirikou-Sorceress-sorci%C3%A8re-Blu-ray/dp/B001ANZRCC"
      }
    ],
    "cite": {
      "domain": "https://www.amazon.com › Kirikou-Sorceress-sorcière-...",
      "span": " › Kirikou-Sorceress-sorcière-..."
    },
    "g_review_stars": " Rating: 4.7 · ‎611 reviews"
  },
  {
    "title": "Kirikou and the Sorceress - Rotten Tomatoes",
    "link": "https://www.rottentomatoes.com/m/kirikou_and_the_sorceress",
    "description": "Kirikou and the Sorceress is a beautifully uplifting throwback to a simpler animated era, with refreshingly unique art and a timeless soundtrack.Release Date (Streaming): May 23, 2017Release Date (Theaters): Feb 18, 2000 wide Rating: 96% · ‎26 votes",
    "additional_links": [
      {
        "text": "Kirikou and the Sorceress - Rotten Tomatoeshttps://www.rottentomatoes.com › kirikou_and_the_sor...",
        "href": "https://www.rottentomatoes.com/m/kirikou_and_the_sorceress"
      }
    ],
    "cite": {
      "domain": "https://www.rottentomatoes.com › kirikou_and_the_sor...",
      "span": " › kirikou_and_the_sor..."
    },
    "g_review_stars": " Rating: 96% · ‎26 votes"
  },
  {
    "title": "First Thoughts on Kirikou and the Sorceress / Kirikou et la ...",
    "link": "https://feelinganimatedblog.wordpress.com/2018/10/17/first-thoughts-on-kirikou-and-the-sorceress-kirikou-et-la-sorciere-1998/",
    "description": "Oct 17, 2018 — Generally speaking, this is quite a gentle and colourful film, with only the occasional shocking moment such as the burning of a villager's ...",
    "additional_links": [
      {
        "text": "First Thoughts on Kirikou and the Sorceress / Kirikou et la ...https://feelinganimatedblog.wordpress.com › 2018/10/17",
        "href": "https://feelinganimatedblog.wordpress.com/2018/10/17/first-thoughts-on-kirikou-and-the-sorceress-kirikou-et-la-sorciere-1998/"
      }
    ],
    "cite": {
      "domain": "https://feelinganimatedblog.wordpress.com › 2018/10/17",
      "span": " › 2018/10/17"
    }
  },
  {
    "title": "Kirikou and the Sorceress - Film Education",
    "link": "http://www.filmeducation.org/pdf/film/Kirikou.pdf",
    "description": "Kirikou and the Sorceress. Introduction ... The tiny Kirikou is born into an African village upon ... His adventure-filled voyage leads Kirikou to the.9 pages",
    "additional_links": [
      {
        "text": "Kirikou and the Sorceress - Film Educationhttp://www.filmeducation.org › pdf › Kirikou",
        "href": "http://www.filmeducation.org/pdf/film/Kirikou.pdf"
      }
    ],
    "cite": {
      "domain": "http://www.filmeducation.org › pdf › Kirikou",
      "span": " › pdf › Kirikou"
    }
  },
  {
    "title": "Kirikou and the Sorceress Complete listings - CDJapan",
    "link": "https://www.cdjapan.co.jp/series/4149",
    "description": "",
    "additional_links": [
      {
        "text": "Kirikou and the Sorceress Complete listings - CDJapanhttps://www.cdjapan.co.jp › Series",
        "href": "https://www.cdjapan.co.jp/series/4149"
      },
      {
        "text": "",
        "href": "https://www.cdjapan.co.jp/series/4149"
      }
    ],
    "cite": {
      "domain": "https://www.cdjapan.co.jp › Series",
      "span": " › Series"
    }
  },
  {
    "title": "Keynote: Kirikou And The Sorceress - The Dissolve",
    "link": "https://thedissolve.com/features/movie-of-the-week/255-keynote-kirikou-and-the-sorceress/",
    "description": "https://thedissolve.com › features › movie-of-the-week",
    "additional_links": [
      {
        "text": "Keynote: Kirikou And The Sorceress - The Dissolvehttps://thedissolve.com › features › movie-of-the-week",
        "href": "https://thedissolve.com/features/movie-of-the-week/255-keynote-kirikou-and-the-sorceress/"
      },
      {
        "text": "",
        "href": "https://thedissolve.com/features/movie-of-the-week/255-keynote-kirikou-and-the-sorceress/"
      }
    ],
    "cite": {
      "domain": "https://thedissolve.com › features › movie-of-the-week",
      "span": " › features › movie-of-the-week"
    }
  }
]
  return (
    <div className="bundle">
        <Details/> {
            data.map((item) => (
                <div className="box">

                <div className="box-title">
                  <span className="span-title">{item.title}</span> 
            </div>
        
            <div className="box-desc">
                    <span class="span-desc">
                 {item.description}
                    </span>
            </div>
        
            <div className="box-link">
            <a href={item.link}><span className="span-link">{item.link}</span></a>
            </div>
        
            
        </div>
            ))
        }


        
    </div>
);
}

export default Boo;