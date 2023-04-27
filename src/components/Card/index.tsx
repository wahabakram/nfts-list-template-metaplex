import { NFT } from "../../types";

export const Card = ({ item }: { item: NFT }) => {
  return (
    <div className="max-w-sm bg-black rounded-3xl backdrop-blur-md p-3 space-y-2">
      <div className="flex items-center justify-between py-1 px-2">
        <span>{item.name}</span>
        <button>
          <img
            src="/images/more options light.png"
            alt="More Options"
            width="24"
            height="24"
          />
        </button>
      </div>
      <a href="#/" className="inline-block max-h-96 rounded-xl overflow-hidden">
        <img className="" src={item.image} alt="" />
      </a>
      <div className="rounded-xl bg-black-russian-light font-sfProTextLight text-sm p-2 space-y-2">
        <div className="flex items-center justify-between bg-black-russian-dark px-3 py-2 rounded-lg">
          <span>Owner</span>
          <span className="opacity-20">72UGr...YdD</span>
        </div>
        <div className="flex items-center justify-between bg-black-russian-dark px-3 py-2 rounded-lg">
          <span>Mint Address</span>
          <span className="opacity-20">72UGr...YdD</span>
        </div>
        <div className="flex items-center justify-between bg-black-russian-dark px-3 py-2 rounded-lg">
          <span>Token Address</span>
          <span className="opacity-20">72UGr...YdD</span>
        </div>
      </div>
    </div>
  );
};
