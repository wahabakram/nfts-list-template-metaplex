import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Card } from "../Card";
import { NFT } from "../../types";

export const Slider = () => {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);
  const nftList: NFT[] = [
    {
      id: 1,
      name: "Cyberlinx #2551",
      image: "/images/4a9MO9LYWx16J9KhV2m74GLlZ6WwlkFM-rm6iC40ZkQ 1.png",
      mintAddress: "4a9MO9LYWx16J9KhV2m74GLlZ6WwlkFM-rm6iC40ZkQ",
      ownerAddress: "4a9MO9LYWx16J9KhV2m74GLlZ6WwlkFM-rm6iC40ZkQ",
      tokenAddress: "4a9MO9LYWx16J9KhV2m74GLlZ6WwlkFM-rm6iC40ZkQ",
    },
    {
      id: 2,
      name: "Cyberlinx #2552",
      image: "/images/4a9MO9LYWx16J9KhV2m74GLlZ6WwlkFM-rm6iC40ZkQ 1.png",
      mintAddress: "4a9MO9LYWx16J9KhV2m74GLlZ6WwlkFM-rm6iC40ZkQ",
      ownerAddress: "4a9MO9LYWx16J9KhV2m74GLlZ6WwlkFM-rm6iC40ZkQ",
      tokenAddress: "4a9MO9LYWx16J9KhV2m74GLlZ6WwlkFM-rm6iC40ZkQ",
    },
    {
      id: 3,
      name: "Cyberlinx #2553",
      image: "/images/4a9MO9LYWx16J9KhV2m74GLlZ6WwlkFM-rm6iC40ZkQ 1.png",
      mintAddress: "4a9MO9LYWx16J9KhV2m74GLlZ6WwlkFM-rm6iC40ZkQ",
      ownerAddress: "4a9MO9LYWx16J9KhV2m74GLlZ6WwlkFM-rm6iC40ZkQ",
      tokenAddress: "4a9MO9LYWx16J9KhV2m74GLlZ6WwlkFM-rm6iC40ZkQ",
    },
    {
      id: 4,
      name: "Cyberlinx #2554",
      image: "/images/4a9MO9LYWx16J9KhV2m74GLlZ6WwlkFM-rm6iC40ZkQ 1.png",
      mintAddress: "4a9MO9LYWx16J9KhV2m74GLlZ6WwlkFM-rm6iC40ZkQ",
      ownerAddress: "4a9MO9LYWx16J9KhV2m74GLlZ6WwlkFM-rm6iC40ZkQ",
      tokenAddress: "4a9MO9LYWx16J9KhV2m74GLlZ6WwlkFM-rm6iC40ZkQ",
    },
  ];

  // we want the scope to be always to be in the scope of the array so that the carousel is endless
  const indexInArrayScope =
    ((activeIndex % nftList.length) + nftList.length) % nftList.length;

  // so that the carousel is endless, we need to repeat the nftList twice
  // then, we slice the the array so that we only have 3 nftList visible at the same time
  const visibleItems = [...nftList, ...nftList].slice(
    indexInArrayScope,
    indexInArrayScope + 3
  );
  const handleClick = (newDirection: number) => {
    setActiveIndex((prevIndex) => [prevIndex[0] + newDirection, newDirection]);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex">
        {/*AnimatePresence is necessary to show the nftList after they are deleted because only max. 3 are shown*/}
        <AnimatePresence mode="popLayout" initial={false}>
          {visibleItems.map((item) => {
            // The layout prop makes the elements change its position as soon as a new one is added
            // The key tells framer-motion that the elements changed its position
            return (
              <motion.div
                className="card"
                key={item.id}
                layout
                custom={{
                  direction,
                  position: () => {
                    if (item === visibleItems[0]) {
                      return "left";
                    } else if (item === visibleItems[1]) {
                      return "center";
                    } else {
                      return "right";
                    }
                  },
                }}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.8 }}
              >
                <div className="mx-3">
                  <Card item={item} />
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      <div className="bg-black rounded-full flex justify-between mt-4 p-3 w-full max-w-xs">
        <motion.button
          className="bg-black-russian-dark rounded-full p-4 w-12"
          whileTap={{ scale: 0.8 }}
          onClick={() => handleClick(-1)}
        >
          <img
            src="/images/previous.png"
            alt="Previous"
          />
        </motion.button>
        <motion.button
          className="bg-black-russian-dark rounded-full p-4 w-12"
          whileTap={{ scale: 0.8 }}
          onClick={() => handleClick(1)}
        >
          <img src="/images/next.png" alt="Next" />
        </motion.button>
      </div>
    </div>
  );
};

const variants = {
  enter: ({ direction }: { direction: number }) => {
    return { scale: 0.2, x: direction < 1 ? 50 : -50, opacity: 0 };
  },
  center: ({
    position,
    direction,
  }: {
    position: () => string;
    direction: number;
  }) => {
    return {
      scale: 1,
      x: 0,
      zIndex: getZIndex({ position, direction }),
      opacity: 1,
    };
  },
  exit: ({ direction }: { direction: number }) => {
    return { scale: 0.2, x: direction < 1 ? -50 : 50, opacity: 0 };
  },
};

function getZIndex({
  position,
  direction,
}: {
  position: () => string;
  direction: number;
}) {
  const indexes: any = {
    left: direction > 0 ? 2 : 1,
    center: 3,
    right: direction > 0 ? 1 : 2,
  };
  return indexes[position()];
}
