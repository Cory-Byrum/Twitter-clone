import "./styles.css";

function MainContainer() {
  return (
    <div>
      <colgroup className="MainContainer">
        <SideBar />
        <NewsFeedCol />
        <TrendingCol />
      </colgroup>
    </div>
  );
}

function SideBar() {
  return (
    <div className="NavBarCol">
      <col />
      <div classNAme="ButtonRow">
        <button className="Icon1" />
        <button className="Icon" />
        <p>Home</p>
        <button className="Icon" />
        <p>Explore</p>
        <button className="Icon" />
        <p>Notifications</p>
        <button className="Icon" />
        <p>Messages</p>
        <button className="Icon" />
        <p>Bookmarks</p>
        <button className="Icon" />
        <p>Lists</p>
        <button className="Icon" />
        <p>Profile</p>
        <button className="Icon" />
        <p>More</p>
      </div>
      <button className="TweetButton">Tweet</button>
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
      <h3>News Feed</h3>
      <p>Placeholder text for newsfeed API bla bla bla</p>
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
        <h3 className="TrendingHeader">What's happening</h3>
        <p>Trending News article</p>
        <p>Trending topic</p>
        <p>News Article</p>
      </div>
    </div>
  );
}

export default function App() {
  return <div>{MainContainer()}</div>;
}
