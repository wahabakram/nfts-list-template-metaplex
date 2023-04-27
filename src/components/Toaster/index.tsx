import classNames from "classnames";
import toast from "react-hot-toast";
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export const errorAlert = ({
  title,
  message,
}: {
  title: string;
  message: string;
}) =>
  toast.custom(
    (t) => (
      <div
        className={classNames([
          "flex flex-row items-center justify-between w-96 bg-black px-4 py-6 text-white shadow-2xl hover:shadow-none transform-gpu translate-y-0 hover:translate-y-1 rounded-xl relative transition-all duration-500 ease-in-out",
          t.visible ? "top-0" : "-top-96",
        ])}
      >
        <div className="text-xl">
          <HiOutlineExclamationCircle />
        </div>
        <div className="flex flex-col items-start justify-center ml-4 cursor-default">
          <h1 className="text-base font-semibold leading-none tracking-wider">
            {title}
          </h1>
          <p className="text-sm mt-2 leading-relaxed tracking-wider">
            {message}
          </p>
        </div>
        <div
          className="absolute top-2 right-2 cursor-pointer text-lg"
          onClick={() => toast.dismiss(t.id)}
        >
          <MdOutlineClose />
        </div>
      </div>
    ),
    { id: "unique-notification", position: "top-center" }
  );
