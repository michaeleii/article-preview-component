import { useState } from "react";
import ShareIcon from "./ShareIcon";
import { Tooltip } from "react-tooltip";

function Article() {
  const [isShareOpen, setIsShareOpen] = useState(false);
  return (
    <div className="text-wide max-w-md rounded-xl bg-white font-medium text-[hsl(214_17%_51%)] drop-shadow-lg xl:flex xl:max-w-7xl">
      <img
        src="/drawers.jpg"
        alt=""
        className="rounded-t-xl object-cover xl:max-w-md xl:rounded-l-xl xl:rounded-tr-none"
      />
      <div className="px-10 pt-10 xl:max-w-xl">
        <h2 className="mb-3 text-xl font-bold text-[hsl(217_19%_35%)] xl:text-2xl">
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h2>
        <p className="xl:text-lg">
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>
        <div className="mt-10 hidden items-center gap-5 xl:flex">
          <img
            src="/avatar-michelle.jpg"
            alt=""
            className="w-14 rounded-full"
          />
          <div className="flex flex-col">
            <span className="font-bold text-[hsl(217_19%_35%)]">
              Michelle Appleton
            </span>
            <span>28 Jun 2020</span>
          </div>
          <button
            data-tooltip-id="shareTooltip"
            className={`ml-auto rounded-full ${
              !isShareOpen ? "bg-slate-200" : "bg-slate-400"
            } p-4`}
            onClick={() => setIsShareOpen((open) => !open)}
          >
            <ShareIcon isopen={isShareOpen} />
          </button>
          <Tooltip
            id="shareTooltip"
            className="tooltip"
            clickable
            isOpen={isShareOpen}
          >
            <div className="flex items-center gap-5">
              <h3 className="uppercase tracking-[0.5em] text-slate-400">
                Share
              </h3>
              <ul className="flex items-center gap-5">
                <li className="hover:cursor-pointer">
                  <img src="/icon-facebook.svg" alt="" />
                </li>
                <li className="hover:cursor-pointer">
                  <img src="/icon-pinterest.svg" alt="" />
                </li>
                <li className="hover:cursor-pointer">
                  <img src="/icon-twitter.svg" alt="" />
                </li>
              </ul>
            </div>
          </Tooltip>
        </div>
      </div>
      <div
        className={
          "mt-5 flex items-center justify-between rounded-b-xl xl:hidden " +
          (isShareOpen ? "items-center bg-slate-600 px-10 py-5" : "px-10 py-5")
        }
      >
        {!isShareOpen && (
          <div className="flex items-center gap-5 xl:hidden">
            <img
              src="/avatar-michelle.jpg"
              alt=""
              className="w-14 rounded-full"
            />
            <div className="flex flex-col">
              <span className="font-bold text-[hsl(217_19%_35%)]">
                Michelle Appleton
              </span>
              <span>28 Jun 2020</span>
            </div>
          </div>
        )}
        {isShareOpen && (
          <div className="flex items-center gap-5 xl:hidden">
            <h3 className="text-lg uppercase tracking-[0.5em] text-slate-400">
              Share
            </h3>
            <ul className="flex items-center gap-5">
              <li className="hover:cursor-pointer">
                <img src="/icon-facebook.svg" alt="" />
              </li>
              <li className="hover:cursor-pointer">
                <img src="/icon-pinterest.svg" alt="" />
              </li>
              <li className="hover:cursor-pointer">
                <img src="/icon-twitter.svg" alt="" />
              </li>
            </ul>
          </div>
        )}
        <button
          className={`rounded-full ${
            !isShareOpen ? "bg-slate-200" : "bg-slate-400"
          } p-4`}
          onClick={() => setIsShareOpen((open) => !open)}
        >
          <ShareIcon isopen={isShareOpen} />
        </button>
      </div>
    </div>
  );
}
export default Article;
