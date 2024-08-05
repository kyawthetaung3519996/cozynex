import {
  IoThumbsUpSharp,
  IoChatbubbleEllipsesSharp,
  IoShareSocialSharp,
  IoPeopleSharp,
  IoBookmarkSharp,
  IoAlbumsSharp,
} from "react-icons/io5";
import user_logo from "./../assets/images/user.jpg";
import logo from "./../assets/images/cozynex.png";

function Home() {
  const posts = [
    {
      content:
        "Updated his profile picture.",
      image: user_logo,
    },
    {
      content:
        "This is an example post. It can contain text, images, or other content similar to what you would see in a social media feed.",
      image: logo,
    },
    {
      content:
        "This is an example post. It can contain text, images, or other content similar to what you would see in a social media feed.",
      image: null,
    },
  ];

  const contacts = [
    { name: "Alice Johnson" },
    { name: "Bob Smith" },
    { name: "Charlie Brown" },
  ];

  return (
    <div className="p-5 flex justify-center gap-2 xl:gap-20 w-full">
      {/* Menu Card */}
      <div className="hidden lg:block bg-white shadow-md rounded-lg p-4 w-64">
        <div className="flex items-center mb-5">
          <img
            src={user_logo}
            alt="profile"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <strong>Kyaw Thet Aung</strong>
          </div>
        </div>
        <ul className="space-y-2">
          <li className="flex items-center text-gray-600 hover:text-blue-600 cursor-pointer">
            <IoPeopleSharp className="text-[20px] mr-2" />
            <span>Contacts</span>
          </li>
          <li className="flex items-center text-gray-600 hover:text-blue-600 cursor-pointer">
            <IoBookmarkSharp className="text-[20px] mr-2" />
            <span>Saved</span>
          </li>
          <li className="flex items-center text-gray-600 hover:text-blue-600 cursor-pointer">
            <IoAlbumsSharp className="text-[20px] mr-2" />
            <span>Group</span>
          </li>
        </ul>
      </div>

      {/* Post Card */}
      <div className="flex flex-col overflow-y-auto h-[90vh] w-[600px] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 scrollbar-thumb-rounded">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 mb-6 w-full"
          >
            {/* Post Header */}
            <div className="flex items-center mb-4">
              <img
                src={user_logo}
                alt="User"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="font-semibold">John Doe</p>
                <p className="text-gray-500 text-sm">2 hours ago</p>
              </div>
            </div>

            {/* Post Content */}
            <div className="mb-4">
              <p className="mb-2">{post.content}</p>
              {post.image && (
                <img
                  src={post.image}
                  alt="Post"
                  className="w-full h-auto rounded-lg"
                />
              )}
            </div>

            {/* Post Footer */}
            <div className="flex justify-between items-center border-t pt-2">
              <button className="flex items-center text-gray-600 hover:text-blue-600">
                <IoThumbsUpSharp className="text-[20px] mr-1" />
                <span>Like</span>
              </button>

              <button className="flex items-center text-gray-600 hover:text-blue-600">
                <IoChatbubbleEllipsesSharp className="text-[20px] mr-1" />
                <span>Comment</span>
              </button>

              <button className="flex items-center text-gray-600 hover:text-blue-600">
                <IoShareSocialSharp className="text-[20px] mr-1" />
                <span>Share</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Contacts Card */}
      <div className="hidden lg:block bg-white shadow-md rounded-lg p-4 w-64">
        <h2 className="text-xl font-semibold mb-5">Contacts</h2>
        <ul className="space-y-2">
          {contacts.map((contact, index) => (
            <li
              key={index}
              className="flex items-center text-gray-600 hover:text-blue-600 cursor-pointer"
            >
              <img
                src={user_logo}
                alt="profile"
                className="w-8 h-8 rounded-full mr-3"
              />
              <span className="ml-2">{contact.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
