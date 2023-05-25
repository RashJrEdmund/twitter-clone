/* eslint-disable @next/next/no-img-element */
type Props = { article: Text};

export default function News({ article }: Props) {
    return (
      <a rel="noreferrer" href=" " target="_blank">
        <div className="flex items-center justify-between px-4 py-2 space-x-1 hover:bg-gray-200 transition duration-500 ease-out">
          <div className="space-y-0.5">
            <h6 className="text-sm font-bold">Yesss</h6>
            <p className="text-xs font-medium text-gray-500">
              Heyyyyy
            </p>
          </div>
          <img
            className="rounded-xl "
            width="70"
            src={" "}
            alt=""
          />
        </div>
      </a>
    );
  }