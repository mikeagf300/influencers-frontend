// components/TweetCard.tsx
import { FC } from 'react';

type Tweet = {
  username: string;
  content: string;
  verified: boolean;
};

type TweetCardProps = {
  tweet: Tweet;
};

const TweetCard: FC<TweetCardProps> = ({ tweet }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-2">
        <span className="font-semibold text-xl">{tweet.username}</span>
        <span
          className={`ml-2 text-sm ${tweet.verified ? 'text-green-500' : 'text-red-500'}`}
        >
          {tweet.verified ? 'Verified' : 'Not Verified'}
        </span>
      </div>
      <p className="text-gray-700">{tweet.content}</p>
    </div>
  );
};

export default TweetCard;
