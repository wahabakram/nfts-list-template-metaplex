export const Wallet = () => {
  return (
    <section className="flex justify-between font-sfProTextLight text-sm px-12 py-6">
      <div className="bg-black-russian-dark flex space-x-2 justify-between items-center h-10 px-3 rounded-4xl">
        <img src="/images/coin.png" alt="Ether Coin" width="24" height="24" />
        <span>ETH/USDT</span>
        <span className="text-success">1137.62 +2.62%↑</span>
      </div>

      <div className="bg-black-russian-dark flex space-x-2 justify-between items-center h-10 px-3 rounded-4xl">
        <img
          src="/images/avatar.png"
          alt="Your Avatar"
          width="24"
          height="24"
        />
        <span>zash</span>
        <span className="h-3 border opacity-20"></span>
        <span className="text-success">User ID: 11026666</span>
      </div>
    </section>
  );
};
