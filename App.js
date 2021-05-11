import "./styles.css";
import React from "react";

export default class FetchRandomUser extends React.Component {
  state = {
    loading: true,
    people: []
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/?results=50";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ people: data.results, loading: false });
  }
  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.people.length) {
      return <div>Didn't get a person</div>;
    }

    return (
      <div>
        <colgroup className="MainContainer">
          <div>
            <SideBar />
            <UserButton />
          </div>
          <div>
            <NewsFeedCol />
            <div className="App">
              <div className="NewPost">
                <div>
                  <img
                    className="UserPicture"
                    src="https://scontent-iad3-2.xx.fbcdn.net/v/t1.6435-9/168829320_10222028005581467_201926953821753882_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=7VcV71nnD5kAX_PrSW8&_nc_ht=scontent-iad3-2.xx&oh=196448afea4155ae8889df74437f0531&oe=60A8C603"
                    alt="User Icon"
                  />
                  <input className="NewInput" placeholder="What's happening?" />
                </div>
                <div className="PostButtons">
                  <button className="Button2">
                    <img
                      className="Icon"
                      src="https://i.ibb.co/bR5W4RD/65-F17-A15-BF5-A-4-EB0-881-B-CE8-BBF6-AE0-F3.png"
                      alt="logo"
                    />
                  </button>
                  <button className="Button2">
                    <img
                      className="Icon"
                      src="https://i.ibb.co/bR5W4RD/65-F17-A15-BF5-A-4-EB0-881-B-CE8-BBF6-AE0-F3.png"
                      alt="logo"
                    />
                  </button>
                  <button className="Button2">
                    <img
                      className="Icon"
                      src="https://i.ibb.co/bR5W4RD/65-F17-A15-BF5-A-4-EB0-881-B-CE8-BBF6-AE0-F3.png"
                      alt="logo"
                    />
                  </button>
                  <button className="Button2">
                    <img
                      className="Icon"
                      src="https://i.ibb.co/bR5W4RD/65-F17-A15-BF5-A-4-EB0-881-B-CE8-BBF6-AE0-F3.png"
                      alt="logo"
                    />
                  </button>
                  <button className="Button2">
                    <img
                      className="Icon"
                      src="https://i.ibb.co/bR5W4RD/65-F17-A15-BF5-A-4-EB0-881-B-CE8-BBF6-AE0-F3.png"
                      alt="logo"
                    />
                  </button>
                  <div>
                    <button className="TweetButton2">Tweet</button>
                  </div>
                </div>
              </div>
              <div>
                {this.state.people.map((person) => (
                  <div key={person.login.uuid}>
                    <div className="Profile">
                      <img
                        className="Picture"
                        src={person.picture.large}
                        alt="User"
                      />
                      <div className="UserInfo">
                        {person.name.first} {person.name.last}
                        <div className="UserHandle">
                          @{person.login.username}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <TrendingCol />
        </colgroup>
      </div>
    );

    function Buttons() {
      return (
        <div>
          <div className="ButtonRow">
            <button className="Button">
              <img
                className="Logo"
                src="https://i.ibb.co/C6nmMvx/AB5-EAFE4-AC20-4-E6-D-BFD0-EF953-C9818-A0.png"
                alt="logo"
              />
            </button>
            <button className="Button">
              <img
                src="https://i.ibb.co/xjhYJVS/13-EFDA03-9-FF1-49-F8-96-AC-62-E76-C333001.png"
                alt="Home Icon"
              />
              <p className="ButtonText">Home</p>
            </button>
            <button className="Button">
              <img
                src="https://i.ibb.co/sy1GwZC/1-F9-F8124-5143-484-B-93-A2-BE55-E3-FD6315.png"
                alt="Explore Icon"
              />
              <p className="ButtonText">Explore</p>
            </button>
            <button className="Button">
              <img
                src="https://i.ibb.co/hRxn6X5/2-C3-B091-D-8-B8-B-4-C71-847-D-EE17-C9176-E9-C.png"
                alt="Notificatins icon"
              />
              <p className="ButtonText">Notifications</p>
            </button>
            <button className="Button">
              <img
                src="https://i.ibb.co/sy1GwZC/1-F9-F8124-5143-484-B-93-A2-BE55-E3-FD6315.png"
                alt="Messages"
              />
              <p className="ButtonText">Messages</p>
            </button>
            <button className="Button">
              <img
                src="https://i.ibb.co/sy1GwZC/1-F9-F8124-5143-484-B-93-A2-BE55-E3-FD6315.png"
                alt="Bookmarks"
              />
              <p className="ButtonText">Bookmarks</p>
            </button>
            <button className="Button">
              <img
                src="https://i.ibb.co/sy1GwZC/1-F9-F8124-5143-484-B-93-A2-BE55-E3-FD6315.png"
                alt="Lists"
              />
              <p className="ButtonText">Lists</p>
            </button>
            <button className="Button">
              <img
                src="https://i.ibb.co/sy1GwZC/1-F9-F8124-5143-484-B-93-A2-BE55-E3-FD6315.png"
                alt="Profile"
              />
              <p className="ButtonText">Profile</p>
            </button>
            <button className="Button">
              <img
                src="https://i.ibb.co/sy1GwZC/1-F9-F8124-5143-484-B-93-A2-BE55-E3-FD6315.png"
                alt="More"
              />
              <p className="ButtonText">More</p>
            </button>
          </div>
          <button className="TweetButton">Tweet</button>
        </div>
      );
    }

    function SideBar() {
      return (
        <div className="NavBarCol">
          <col />
          <Buttons />
        </div>
      );
    }

    function UserButton() {
      return (
        <div>
          <button className="UserButton">
            <img
              className="UserPicture"
              src="https://scontent-iad3-2.xx.fbcdn.net/v/t1.6435-9/168829320_10222028005581467_201926953821753882_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=7VcV71nnD5kAX_PrSW8&_nc_ht=scontent-iad3-2.xx&oh=196448afea4155ae8889df74437f0531&oe=60A8C603"
              alt="User Icon"
            />
            <div className="UserNames">
              <div className="UserDisplay">
                <p>Cory Allen Byrum</p>
              </div>
              <div className="UserHandle">
                <p>@CoryThePresby</p>
              </div>
            </div>
            <p className="ButtonText"> ... </p>
          </button>
        </div>
      );
    }

    function NewsFeedCol() {
      return (
        <div className="NewsFeedCol">
          <col />
          <div className="HomeHeader">
            <h3>Home</h3>
          </div>
          <col />
        </div>
      );
    }

    function TrendingCol() {
      return (
        <div>
          <div className="ThirdSection">
            <input className="SearchBar" />
          </div>
          <div className="TrendingCol">
            <col />
            <div className="TrendingHeader">
              <h3>What's happening</h3>
            </div>
            <p>Trending News article</p>
            <p>Trending topic</p>
            <p>News Article</p>
          </div>
        </div>
      );
    }
  }
}
