import { Metaplex, keypairIdentity } from "@metaplex-foundation/js";
import { Connection, PublicKey, clusterApiUrl, Keypair } from "@solana/web3.js";
import { Header } from "../../components/Header";
import { PageTitle } from "../../components/PageTitle";
import { Slider } from "../../components/Slider";
import { Wallet } from "../../components/Wallet";
import { errorAlert } from "../../components/Toaster";

const owner = new PublicKey("Cqwk4szRUmzVmVHP8CbVhPrYZWqxt7WSabB6QLwMHw93");
const connection = new Connection(clusterApiUrl("devnet"), "finalized");
// const connection = new Connection("https://frequent-side-silence.solana-mainnet.discover.quiknode.pro/5ed5fdd025d18e33f0e98d11c18544237bc4d4a7/", "finalized");
// const keypair = Keypair.generate();

const metaplex = new Metaplex(connection);

// metaplex.use(keypairIdentity(keypair));

export const Dashboard = () => {
  // createNFT()
  getNFTs();

  return (
    <section>
      <Header>
        <Wallet />
        <div className="flex items-center justify-between px-12 py-6">
          <PageTitle>Dashboard</PageTitle>
          <a
            href="/"
            className="p-2 bg-black-russian-dark rounded-xl cursor-pointer"
          >
            <img
              src="/images/refresh cta.png"
              alt="Refresh CTA"
              width="24"
              height="24"
            />
          </a>
        </div>
      </Header>
      <main className="px-12">
        <Slider />
      </main>
    </section>
  );
};

const getNFTs = async () => {
  try {
    const ownerNfts = await metaplex.nfts().findAllByOwner({ owner });
    console.log(ownerNfts);

    return ownerNfts;
  } catch (error) {
    errorAlert({
      title: "Error Occured",
      message: "Somthing went wrong, contact your provider.",
    });
  }
};

// const createNFT = async () => {
//   const { nft } = await metaplex.nfts().create({
//     name: "Monkey NFT",
//     uri: "https://gateway.pinata.cloud/ipfs/QmUmtHKsmhmY862quUH4avJx2XphN7JYSa47neCTLKmydX?_gl=1*16a4pyo*rs_ga*YzU0ZmYyODAtYzc0NC00Njc1LTgxOTUtNjg1ZGIzMDlmZGQx*rs_ga_5RMPXG14TE*MTY4MTAzMzM5NS4xLjEuMTY4MTAzMzUwMi4yMi4wLjA.",
//     sellerFeeBasisPoints: 250, // 2.5%
//   });
//   console.log(nft);
// };

//  "@metaplex-foundation/js": "^0.17.0",
// "@solana/web3.js": "^1.66.2",
