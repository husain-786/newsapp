import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  // variables ussed in the class....
  // articles=[
  //   {
  //     "source": {
  //       "id": "cnn",
  //       "name": "CNN"
  //     },
  //     "author": "Betsy Klein, Chris Isidore",
  //     "title": "Biden to walk the picket line in Michigan to support UAW strikers - CNN",
  //     "description": "President Joe Biden will travel to Michigan on Tuesday and walk the picket line with members of the United Auto Workers union, he announced Friday, a trip that comes after the president faced political pressure to ramp up his public support for the union memb…",
  //     "url": "https://www.cnn.com/2023/09/22/politics/joe-biden-michigan-trip-uaw/index.html",
  //     "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230922141250-02-uaw-strike-expansion-langhorne-pa-0922.jpg?c=16x9&q=w_800,c_fill",
  //     "publishedAt": "2023-09-23T16:03:00Z",
  //     "content": "President Joe Biden will travel to Michigan on Tuesday and walk the picket line with members of the United Auto Workers union, he announced Friday, a trip that comes after the president faced politic… [+4580 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "[Removed]"
  //     },
  //     "author": null,
  //     "title": "[Removed]",
  //     "description": "[Removed]",
  //     "url": "https://removed.com",
  //     "urlToImage": null,
  //     "publishedAt": "1970-01-01T00:00:00Z",
  //     "content": "[Removed]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "New York Post"
  //     },
  //     "author": "Andrew Court",
  //     "title": "Meghan, Harry hobnob with Oprah, Kevin Costner at glitzy Santa Barbara fundraiser - New York Post ",
  //     "description": "From actual royalty to Hollywood royalty.",
  //     "url": "https://nypost.com/2023/09/23/meghan-harry-hobnob-with-oprah-kevin-costner-at-glitzy-santa-barbara-fundraiser/",
  //     "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/09/newspress-collage-g7a8ewjti-1695486030688.jpg?quality=75&strip=all&1695471734&w=1024",
  //     "publishedAt": "2023-09-23T14:49:00Z",
  //     "content": "From actual royalty to Hollywood royalty. \r\nPrince Harry and Meghan Markle took center stage at the star-studded One805 Live! charity event in Santa Barbara on Friday. \r\nThe couple who have just retu… [+3152 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "associated-press",
  //       "name": "Associated Press"
  //     },
  //     "author": "BRIAN P. D. HANNON",
  //     "title": "Trudeau pledges Canada's support for Ukraine and punishment for Russia - The Associated Press",
  //     "description": "Canadian Prime Minister Justin Trudeau has announced several support measures for Ukraine including military, economic and humanitarian assistance. Trudeau also pledged an additional show of diplomatic backing through steps intended to punish Russia. He said …",
  //     "url": "https://apnews.com/article/ukraine-canada-trudeau-russia-war-617bed2c975833c9c5e2038c8582b2ab",
  //     "urlToImage": "https://dims.apnews.com/dims4/default/1441212/2147483647/strip/true/crop/2752x1548+0+142/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F0e%2F19%2Fb25e4446afdf480674dfd0b65ba6%2Fb781db2aece54b608be995d96d2111f0",
  //     "publishedAt": "2023-09-23T14:36:00Z",
  //     "content": "Canadian Prime Minister Justin Trudeau has announced several support measures for Ukraine, including military, economic and humanitarian assistance, while also pledging an additional show of diplomat… [+2332 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Android Police"
  //     },
  //     "author": "Rajesh Pandey",
  //     "title": "Google Pixel 8's amazing new camera features shown off in leaked teaser video - Android Police",
  //     "description": "Video boost, Magic Editor, and a pro camera mode",
  //     "url": "https://www.androidpolice.com/google-pixel-8-amazing-new-camera-features-leaked-teaser-video/",
  //     "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/09/the-w8-is-almost-over-_-made-by-google-on-october-4-2023-0-12-screenshot.png",
  //     "publishedAt": "2023-09-23T14:36:00Z",
  //     "content": "Summary\r\n<ul><li> Google's Pixel 8 series is expected to bring a significant improvement in camera quality, raising the bar for flagship Android phones. </li><li> Leaked information suggests that the… [+2936 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "usa-today",
  //       "name": "USA Today"
  //     },
  //     "author": "John Connolly",
  //     "title": "Home explosion in West Milford, New Jersey, leaves 5 hospitalized - USA TODAY",
  //     "description": "Around 9 p.m., reports came in to authorities about an explosion in West Milford, about 44 miles northwest of Newark.",
  //     "url": "https://www.usatoday.com/story/news/nation/2023/09/23/new-jersey-home-explosion/70944780007/",
  //     "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/09/23/PNJM/70944751007-092223-explosion-17-cs.JPG?crop=5039,2836,x0,y342&width=3200&height=1801&format=pjpg&auto=webp",
  //     "publishedAt": "2023-09-23T14:28:17Z",
  //     "content": "Five people were taken to hospitals after an explosion at a New Jersey home prompted a flurry of 911 calls on Friday night, police said.\r\nAround 9 p.m., reports came in to authorities about an explos… [+879 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "reuters",
  //       "name": "Reuters"
  //     },
  //     "author": "Reuters",
  //     "title": "Shared intelligence from Five Eyes informed Trudeau's India allegation, CTV News reports - Reuters",
  //     "description": "U.S. Ambassador to Canada David Cohen confirmed that \"shared intelligence among Five Eyes partners\" had informed Canadian Prime Minister Justin Trudeau of the possible involvement of Indian agents in the murder of a Canadian citizen in June, CTV News reported.",
  //     "url": "https://www.reuters.com/world/shared-intelligence-five-eyes-informed-trudeaus-india-allegation-ctv-news-2023-09-23/",
  //     "urlToImage": "https://www.reuters.com/resizer/7DDATSN0KJo-65RoJRlLJ8iDAyw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/DWRN2UZSGRJFLCXYQWMDRM3IRI.jpg",
  //     "publishedAt": "2023-09-23T13:52:00Z",
  //     "content": "Sept 23 (Reuters) - U.S. Ambassador to Canada David Cohen confirmed that \"shared intelligence among Five Eyes partners\" had informed Canadian Prime Minister Justin Trudeau of the possible involvement… [+1536 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "CBS Sports"
  //     },
  //     "author": "",
  //     "title": "Notre Dame vs. Ohio State prediction, pick, spread, football game odds, live stream, TV channel, watch online - CBS Sports",
  //     "description": "A top-10 battle has classic early-season buzz for the Fighting Irish as they visit the Buckeyes",
  //     "url": "https://www.cbssports.com/college-football/news/notre-dame-vs-ohio-state-prediction-pick-spread-football-game-odds-live-stream-tv-channel-watch-online/",
  //     "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/09/20/d77abb2d-780d-4347-9a94-c3f1aafa9d38/thumbnail/1200x675/16f6d87a5d75e7d216a4bee0124f0fa2/ohio-state-notre-dame.jpg",
  //     "publishedAt": "2023-09-23T12:40:00Z",
  //     "content": "South Bend, Indiana, will play host to one of the best matchups of this early season when No. 9 Notre Dame hosts No. 6 Ohio State on Saturday. The game is a rematch from last year, when the Buckeyes … [+3730 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "YouTube"
  //     },
  //     "author": null,
  //     "title": "New Jersey Sen. Robert Menendez indicted on federal bribery charges - CBS News",
  //     "description": "New Jersey Sen. Robert Menendez and his wife are facing allegations stemming from a sweeping federal bribery scheme. An indictment was announced Friday. Mene...",
  //     "url": "https://www.youtube.com/watch?v=tc4bPFNZvdk",
  //     "urlToImage": "https://i.ytimg.com/vi/tc4bPFNZvdk/maxresdefault.jpg",
  //     "publishedAt": "2023-09-23T12:35:36Z",
  //     "content": null
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "YouTube"
  //     },
  //     "author": null,
  //     "title": "Microsoft Surface Studio 2 and Surface Go 3 Laptops (Hands-On) - CNET",
  //     "description": "Check out CNET editor Josh Goldman's first look at Microsoft's latest Surface laptops. Both laptops have updated internals and should be peppier than their p...",
  //     "url": "https://www.youtube.com/watch?v=WOLPexX7_wo",
  //     "urlToImage": "https://i.ytimg.com/vi/WOLPexX7_wo/maxresdefault.jpg",
  //     "publishedAt": "2023-09-23T12:00:33Z",
  //     "content": null
  //   },
  //   {
  //     "source": {
  //       "id": "bloomberg",
  //       "name": "Bloomberg"
  //     },
  //     "author": "Hannah Levitt",
  //     "title": "Wells Fargo Preps for Wealth Battle After $1 Billion Turnaround - Bloomberg",
  //     "description": "Three years and nearly $1 billion later, Wells Fargo &amp; Co. is finally playing offense in one of Wall Street’s hottest battlegrounds: wealth management.",
  //     "url": "https://www.bloomberg.com/news/articles/2023-09-23/wells-fargo-preps-for-wealth-battle-after-1-billion-turnaround",
  //     "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ixz1p3bRh71o/v1/1200x800.jpg",
  //     "publishedAt": "2023-09-23T12:00:00Z",
  //     "content": "Three years and nearly $1 billion later, Wells Fargo &amp; Co. is finally playing offense in one of Wall Streets hottest battlegrounds: wealth management.\r\nThe banking giant is trying to lure hundred… [+299 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Space.com"
  //     },
  //     "author": "Robert Lea",
  //     "title": "Watch NASA's OSIRIS-REx asteroid probe approach Earth tonight with free telescope livestream - Space.com",
  //     "description": "The Virtual Telescope Project will attempt to image the OSIRIS-REx spacecraft as it approaches Earth.",
  //     "url": "https://www.space.com/osiris-rex-asteroid-sample-return-telescope-livestream",
  //     "urlToImage": "https://cdn.mos.cms.futurecdn.net/sPp5sxM7xwQjS9iocbPm4A-1200-80.jpg",
  //     "publishedAt": "2023-09-23T11:57:18Z",
  //     "content": "NASA's OSIRIS-REx spacecraft will pass Earth this weekend, returning a sample gathered from the potentially hazardous asteroid Bennu on Sunday (Sept. 24). \r\nFingers crossed that space enthusiasts may… [+3623 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "[Removed]"
  //     },
  //     "author": null,
  //     "title": "[Removed]",
  //     "description": "[Removed]",
  //     "url": "https://removed.com",
  //     "urlToImage": null,
  //     "publishedAt": "1970-01-01T00:00:00Z",
  //     "content": "[Removed]"
  //   },
  //   {
  //     "source": {
  //       "id": "espn",
  //       "name": "ESPN"
  //     },
  //     "author": "Matt Bowen, Jeremy Fowler, Eric Moody, Seth Walder",
  //     "title": "NFL Week 3 predictions, fantasy sleepers, key stats, buzz - ESPN - ESPN",
  //     "description": "Big games for CeeDee Lamb, Desmond Ridder and the Patriots' defense? Is Jordan Love for real? Our experts have the latest.",
  //     "url": "https://www.espn.com/nfl/insider/insider/story/_/id/38453588/nfl-week-3-predictions-fantasy-sleepers-stats-latest-buzz-2023",
  //     "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0921%2Fr1227680_1296x729_16%2D9.jpg",
  //     "publishedAt": "2023-09-23T10:59:33Z",
  //     "content": "Sep 23, 2023, 07:00 AM ET\r\nWe're on to the third weekend of the 2023 NFL season, and we're sure you are fully prepared for the loaded Week 3 slate. But just in case you need some last-minute intel, o… [+659 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "PEOPLE"
  //     },
  //     "author": "https://www.facebook.com/peoplemag",
  //     "title": "Sharna Burgess and Brian Austin Green 'Haven't Even Talked About' Wedding Plans - PEOPLE",
  //     "description": "Sharna Burgess and Brian Austin Green opened up to PEOPLE at the iHeartRadio Music Festival in Las Vegas on Friday about their wedding plans, shortly after announcing that they are engaged.",
  //     "url": "https://people.com/sharna-burgess-and-brian-austin-green-havent-even-talked-about-wedding-plans-exclusive-7973890",
  //     "urlToImage": "https://people.com/thmb/siBOuU_zEPN83Edyz6f_eLZOnLI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(748x396:750x398)/Sharna-Burgess-Brian-Austin-Green-092323-06-fdb2b49edc124bed916fed3212cbb592.jpg",
  //     "publishedAt": "2023-09-23T10:52:54Z",
  //     "content": "Sharna Burgess and Brian Austin Green aren't rushing their wedding planning!\r\nOn Friday, the couple announced during an episode of the iHeartRadio podcast Oldish that they have been engaged for two m… [+4185 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "reuters",
  //       "name": "Reuters"
  //     },
  //     "author": "Anna Voitenko",
  //     "title": "Ukrainian heavy artillery inflicts 'hell' on Russian lines near Bakhmut - Reuters.com",
  //     "description": "The use of heavy weapons supplied by the West in the fierce battle raging on the outskirts of Bakhmut, which was captured by Russia in May, is inflicting a significant toll on enemy lines, Ukrainian commanders have told Reuters.",
  //     "url": "https://www.reuters.com/world/europe/ukrainian-heavy-artillery-inflicts-hell-russian-lines-near-bakhmut-2023-09-23/",
  //     "urlToImage": "https://www.reuters.com/resizer/I7Kpxz7nRWK3SBc_VFSI6za9ByA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ZOWCBFSRHVPHTBRC2BJOMKO5QA.jpg",
  //     "publishedAt": "2023-09-23T10:47:00Z",
  //     "content": "NEAR BAKHMUT, Sept 22 (Reuters) - The use of heavy weapons supplied by the West in the fierce battle raging on the outskirts of Bakhmut, which was captured by Russia in May, is inflicting a significa… [+1699 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "BBC News"
  //     },
  //     "author": "https://www.facebook.com/bbcnews",
  //     "title": "Pope Francis says migration is a reality in call for action during France visit - BBC",
  //     "description": "The pontiff says people risking their lives at sea \"do not invade\" during a visit to Marseille.",
  //     "url": "https://www.bbc.com/news/world-europe-66900525",
  //     "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/16D0D/production/_131235439_7cf09dc8dc8e5e352f2eeaa320ad7fb8dd06e52d0_62_3000_16881000x563.jpg",
  //     "publishedAt": "2023-09-23T10:16:56Z",
  //     "content": "Pope Francis has called on European nations to show greater tolerance towards migrants during a visit to the southern French city of Marseille.\r\nSpeaking at a meeting of bishops and young people from… [+2368 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Detroit Free Press"
  //     },
  //     "author": "Kevin Skiver",
  //     "title": "College football schedule today: TV coverage, scores for Big Ten games - Detroit Free Press",
  //     "description": "Several teams open their Big Ten schedules Saturday, with Iowa-Penn State looking like the marquee matchup in a whited out Happy Valley.",
  //     "url": "https://www.freep.com/story/sports/college/2023/09/23/college-football-schedule-today-tv-coverage-scores-big-ten-games/70900730007/",
  //     "urlToImage": "https://www.freep.com/gcdn/presto/2023/09/11/PPYR/4e30ac4e-f55b-40eb-8a7b-647e3a7e22bf-230909-YDR-DR-PSUDEL-70.jpg?crop=3594,2022,x0,y182&width=3200&height=1801&format=pjpg&auto=webp",
  //     "publishedAt": "2023-09-23T10:05:23Z",
  //     "content": "<ul><li>Michigan will open its Big Ten schedule against Rutgers.</li><li>Ohio State plays the biggest game of the week against Notre Dame.</li><li>Iowa travels to Happy Valley to take on Penn State.<… [+2538 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Tomahawk Nation"
  //     },
  //     "author": "FrankDNole",
  //     "title": "Gameday Central: Is FSU vs. Clemson a preview of ACC Championship game? — Previews, predictions, odds - Tomahawk Nation",
  //     "description": "Florida State’s defense has allowed just 5 touchdowns in 21 attempts inside their 10-yard line this season",
  //     "url": "https://www.tomahawknation.com/florida-state-football-fsu-seminoles-college-cfb-acc-norvell-team-roster-schedule-game/2023/9/23/23886216/watch-tv-channel-clemson-tigers-college-live-stream-game-espn-odds-travis-norvell-free-score-bet",
  //     "urlToImage": "https://cdn.vox-cdn.com/thumbor/zur2psKfEGnkZYhA6DhpZEV3bkw=/0x330:4608x2743/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24910373/_MAY9549Mays.jpg",
  //     "publishedAt": "2023-09-23T10:00:00Z",
  //     "content": "The 4th-ranked Florida State Seminoles and the Clemson Tigers will be kicking off at noon today from Memorial Stadium in Clemson, S.C., in an ACC matchup that could determine one, or both, of the par… [+3783 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "cnn",
  //       "name": "CNN"
  //     },
  //     "author": null,
  //     "title": "The Umpqua Community College shooting left nine people dead in 2015. Roseburg, Oregon, is still trying to heal - CNN",
  //     "description": "Nearly eight years after a shooting at Umpqua Community College left nine people dead, an Oregon city is still trying to heal.",
  //     "url": "https://www.cnn.com/interactive/2023/09/us/umpqua-shooting-roseburg-oregon-cnnphotos/",
  //     "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/230921112814-01-umpqua-shooting-roseburg-oregon-cnnphotos-super-tease.jpg",
  //     "publishedAt": "2023-09-23T09:44:29Z",
  //     "content": "The sun rises over downtown Roseburg, Oregon, inside the Umpqua Valley.Roseburg, Oregon Driving into Roseburg feels like entering a postcard.\r\nThe small city, tucked in the mountains of southwestern … [+17605 chars]"
  //   }
  // ]
  // static defaultProps = {
  //   country:'in',
  //   category:'science'
  // }

  // static propTypes = {
  //   country:PropTypes.string,
  //   category:PropTypes.string,
  // }

  constructor(props){
    // If want to use props inside constructor then we need to send the props inside the constructor as well in the super......
    super(props);
    // creating states in the constructor....
    this.state={
      // articles:[this.articles],
      articles:[],
      loading:true,
      page:1,
      totalRecords: 0,
      pageSize:15,
      cardBorderColor:"white",
      apiKey:process.env.REACT_APP_NEWS_API_KEY
    }
    document.title=`${this.convertToCamaelCase(this.props.category)} - NewsFlash`
  }

  convertToCamaelCase = (value) => {
    return value.charAt(0).toUpperCase()+value.slice(1);
  }

  async updateNews (){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.apiKey}&page=${this.state.page}&pageSize=${this.state.pageSize}`

    // calling callback function defined in the parent component......
    this.props.setProgressBar(20)

    // this.setState({
    //   loading:true,
    // })

    let data = await fetch(url);
    let parsedData = await data.json()

    // calling callback function defined in the parent component......
    this.props.setProgressBar(70)

    console.log(parsedData)
    this.setState({
      articles: parsedData.articles,
      totalRecords:parsedData.totalResults,
      loading:false,
    }) 

    // calling callback function defined in the parent component......
    this.props.setProgressBar(100)
  }

  async componentDidMount(){
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.apiKey}&pageSize=${this.state.pageSize}`

    // this.setState({
    //   loading:true,
    // })

    // let data = await fetch(url);
    // let parsedData = await data.json()
    // console.log(parsedData)
    // this.setState({
    //   articles: parsedData.articles,
    //   page:1,
    //   totalRecords:parsedData.totalResults,
    //   loading:false,
    // })

    await this.updateNews()
  }

  handlePreviousClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.apiKey}&page=${this.state.page - 1}&pageSize=${this.state.pageSize}`
    
    // this.setState({
    //   loading:true,
    // })

    // let data = await fetch(url);
    // let parsedData = await data.json()
    // console.log(parsedData)
    // this.setState({
    //   articles: parsedData.articles,
    //   page: this.state.page - 1,
    //   loading:false,
    // }) 

    this.setState({
      page:this.state.page-1
    })

    await this.updateNews()
  }

  handleNextClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.apiKey}&page=${this.state.page + 1}&pageSize=${this.state.pageSize}`
        
    // this.setState({
    //   loading:true,
    // })

    // let data = await fetch(url);
    // let parsedData = await data.json()
    // console.log(parsedData)
    // this.setState({
    //   articles: parsedData.articles,
    //   page: this.state.page+1,
    //   loading:false,
    // })

    await this.setState({
      page:this.state.page + 1
    })

    await this.updateNews()    
  }
  
  fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.apiKey}&page=${this.state.page+1}&pageSize=${this.state.pageSize}`
    
    this.props.setProgressBar(20)

    this.setState({
      page:this.state.page + 1,
      loading:true,
    })

    this.props.setProgressBar(50)

    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData)

    this.props.setProgressBar(70)

    await setTimeout(()=>{
      this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        totalRecords:parsedData.totalResults,
        loading:false,
      }) 
    }, 750)

    this.props.setProgressBar(100)
  };

  render() {
    return (
      <div className={`pt-5 mode-${this.props.mode}`} style={this.props.style}>
       {/* <div className={`container mode-${this.props.mode}`} style={this.props.style}> */}
         {/* <div className="container py-3"> */}
            {/* <div className={`mode-${this.props.mode}`} style={this.props.style}> */}
              <h1 className={`pt-3 pb-4 mb-0 text-center mode-${this.props.mode}`} style={this.props.style}>NewsFlash - Latest "{this.convertToCamaelCase(this.props.category)}" Headlines</h1>  
            {/* </div> */}
            {this.state.loading && <Spinner/>}
            {/* this.state.loading is true then hide all the news cards and if the this.state.loading is false then display only cards
                or in another words to display the loader hide the cards and to hide the loader display the cards. */}

            <InfiniteScroll
                      className={`mode-${this.props.mode}`}
                      style={this.props.style}
                      // number of details to cancatinate after each loading......
                      dataLength={this.state.articles.length}
                      // fetchMoreData function used to concat the next requested details to display after loading.......
                      next={this.fetchMoreData} 
                      // if has more value is true then only infinite loader work.....
                      hasMore={this.state.articles.length !== this.state.totalRecords}
                      // loader that want to display while data is getting fetched and concatinating the data to display.....
                      loader={this.state.loading && <Spinner/>}   
                    >
              {/* <div className={`ds-card-grid    ds-card-grid-include-descriptions row mode-${this.props.mode}`} style={this.props.style}> */}
              <div className="container">
                <div className={`row mode-${this.props.mode}`} style={this.props.style}>
                  {/* {!this.state.loading && this.state.articles.map((element)=>{  */}
                  {this.state.articles.map((element)=>{ 
                    // Here articles is a list, which contails details of multiple different news article.
                    // Here I am looping through the articles using map and returning a component with unique id..... 
                    return <div className={`col-md-4 my-3 mode-${this.props.mode}`} style={this.props.style} id={element.url}>
                      <a className="text-decoration-none" href={element.url} target="_blank" rel="noreferrer">
                        <NewsItem title={element.title} cardBorderColor={this.state.cardBorderColor} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} mode={this.props.mode} style={this.props.style} date={element.publishedAt} author={element.author} 
                        source={element.source.name}/>
                      </a>
                    </div>
                  })}
                </div>
              </div>
            </InfiniteScroll>
        {/* </div> */}

        {/* Removing next and previous buttons as adding the infinite scrolling */}
        {/* <div className="container d-flex justify-content-between pb-5">
          <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePreviousClick}>&larr; Previous</button>
          <button disabled={this.state.page*this.state.pageSize>=this.state.totalRecords} type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
        {/* </div> */}
      </div>
    )
  }
}

export default News
