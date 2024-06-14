import { BiHash, BiHomeCircle, BiUser } from "react-icons/bi";
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notifications",
    icon: <BsBell />,
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
];

export default function Home() {
  return (
    <div>
      <div className="grid h-screen w-screen grid-cols-12 px-56">
        <div className="col-span-3 px-4 pt-8">
          <div className="h-fit w-fit cursor-pointer rounded-full p-4 text-4xl transition-all hover:bg-gray-600">
            <BsTwitter />
          </div>
          <div className="mt-4 text-2xl font-semibold">
            <ul>
              {sidebarMenuItems.map((item) => (
                <li
                  className="mt-2 flex w-fit cursor-pointer items-center justify-start gap-4 rounded-full px-5 py-2 hover:bg-gray-600"
                  key={item.title}
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <button className="mt-4 w-full rounded-full bg-[#1d9bf0] p-4">
              Tweet
            </button>
          </div>
        </div>
        <div className="col-span-6 border-l-[1px] border-r-[1px] border-white"></div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
