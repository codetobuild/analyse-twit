import { useState, useEffect } from "react";
import SearchBar from "../../component/searchbar/SearchBar";
import { userLookUp } from "../../services/twitter/userLookUp.service";
import ProfileCard from "../../component/profile/ProfileCard";
import { searchTweetKeyword } from "../../services/twitter/searchTweetKeyword.service";
const SearchTweets = () => {
  const [searchText, setSearchText] = useState("");
  const [tweetsArray, setTweetsArray] = useState([]);

  const handleSearchBtnClick = (e) => {
    if (searchText.length < 1) return;

    const searchProfile = async () => {
      try {
        // const data = await userLookUp(searchText);
        const data = await searchTweetKeyword(searchText);
        setTweetsArray(data.data);
        console.log(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    searchProfile();
  };

  return (
    <div className="">
      <div className="">
        <SearchBar
          handleSearchBtnClick={handleSearchBtnClick}
          value={searchText}
          handleChange={(e) => setSearchText(e.target.value)}
          tailwindCSS="m-auto mt-20"
          placeholder="Enter word or phrase"
        />
      </div>

      <div className="mt-4">
        <div>
          {tweetsArray.length > 0 ? (
            <div className="m-auto w-[50%] ">
              {tweetsArray.map((item, index) => (
                <div key={item.id} className="bg-blue-200 rounded p-2 mb-4">
                  <p>ID : {item.id}</p>
                  <p className="text-lg font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="m-auto w-[50%] h-32 bg-gray-200 rounded p-2 mb-4 text-3xl text-gray-400 text-center">
              Empty Tweets. Search with keywords.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchTweets;
