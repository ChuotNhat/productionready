import React from 'react';
import styled from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import "react-tabs/style/react-tabs.css";
import iconUser from '../img/user.png';

const Wrapper = styled.div`

  .react-tabs {
    padding: 30px 0;
  }

  .react-tabs__tab-list {
    border-bottom: 1px solid #4285f4;
    margin: 0 0 10px;
  }

  .react-tabs__tab {
    display: inline-block;
    bottom: -1px;
    position: relative;
    list-style: none;
    padding: 6px 12px;
    cursor: pointer;
  }

  .react-tabs__tab--selected {
    border-bottom: 4px solid #4285f4;
  }

  .react-tabs__tab:focus {
    outline: none;
  }

  .react-tabs__tab-panel {
    display: none;
  }

  .react-tabs__tab-panel--selected {
    display: block;
  }


  .clearfix {
    &:after {
      content: '';
      clear: both;
      display: block;
    }
  }

  .home-content {
    width: 80%;
    margin: 0 auto;

    .article {
      width: 70%;
      float: left;
    }

    .popular-tags {
      float: left;
      width: 20%;
      padding: 10px 15px 30px 15px;
      background: #c7cdd8;
      border-radius: 5px;
      margin: 30px;

      .title {
        margin-bottom: 20px;
      }

      .tag {
        color: white;
        background: #4285f4;
        padding: 5px 7px;
        font-size: 12px;
        margin-right: 4px;
        margin-bottom: 6px;
        border-radius: 9999px;
        display: inline-block;
        text-decoration: none;
      }
    }

    .item {
      border-bottom: 1px solid #4285f4;
      padding-top: 20px;
      &-content {
        padding: 30px 0; 
      }

      .favorite {
        float: right;
        padding: 5px;
        border: 1px solid #4285f4;
        border-radius: 5px;
        margin-top: 10px;
      }

      .heart {
        background-color: red;
        height: 10px;
        transform: rotate(-45deg);
        width: 10px;
        display: inline-block;
        margin: 0 10px;

        &:before,
        &:after {
          content: "";
          background-color: red;
          border-radius: 50%;
          height: 10px;
          position: absolute;
          width: 10px;
        }

        &:before {
          top: -5px;
          left: 0;
        }

        &:after {
          top: 0px;
          left: 5px;
        }
      }
    }

    .infor {
      float: left;
      > div, img {
        display: inline-block;
        vertical-align: middle;
      }

      img {
        margin-right: 10px;
      }
    }
  }

`;

const Intro = styled.div`
  background: #4285f4;
  color: white;
  text-align: center;
  padding: 30px;
`;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      action: this.props.history.action,
    };
  }

  componentDidMount() {
    let self = this;
    fetch('http://www.mocky.io/v2/5cd054ae3200009b4400fc44')
      .then(function(response) {
        return response.json();
      })
      .then(function(res) {
        self.setState({
          tags: res,
        })
      });
  }

  render() {
    const { tags } = this.state;
    return (
      <Wrapper>
        <Intro>
          <h1>Conduit</h1>
          <p>A place to share your knowledge.</p>
        </Intro>
  
        <div className="home-content clearfix">
          <div className="article">
            <Tabs>
              <TabList>
                {(this.state.action === 'REPLACE') && <Tab>Your Feed</Tab>}
                <Tab>Global Feed</Tab>
              </TabList>
              { (this.state.action === 'REPLACE') &&
                <TabPanel>
                  <div className="item">
                    <div className="details clearfix">
                      <div className="infor">
                        <img alt="" src={iconUser}/>
                        <div>
                          <p>Huong Tran</p>
                          <p>May 5, 2019</p>
                        </div>
                      </div>
                      <div className="favorite">
                        <span className="heart"></span>
                        <span>0</span>
                      </div>
                    </div>
                    <div className="item-content">
                      <h3>Title article</h3>
                      <p>Lorrem ddfdf f f fdfdf dfdfd dfdfd fdfdf dfdf</p>
                    </div>
                  </div>
                  
                </TabPanel>
                }
              <TabPanel>
                <p>Demo</p>
              </TabPanel>
            </Tabs>
  
            
          </div>
          
          <div className="popular-tags right-content">
            <p className="title">Popular Tags</p>
            {
              tags.map( item => <a className="tag" href="#" title="" key={item}>{item}</a>)
            }
          </div>  
        </div>
      </Wrapper>
    );
  }
}

export default Home;