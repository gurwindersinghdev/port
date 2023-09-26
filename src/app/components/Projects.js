import Image from "next/image";
import Link from "next/link";
const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>

      <div className="projects__cards">
        <div className="projects__card">
          <h3>Uniswap Token Swap Dapp (v-3)</h3>
          <Image
            src="/project1.png"
            alt="Uniswap Swap Page"
            width={1000}
            height={1000}
          />

          <ul>
            <li>
              <p>
                Created Erc-20 Uniswap Token Swapping features, allowing users
                to swap their tokens.
              </p>
            </li>
            <li>
              <p>
                Implemented Token Erc-20 Price Fetching Feature to fetch token
                prices.
              </p>
            </li>
          </ul>

          <Link
            href="https://erc20-tokenswapping.vercel.app/"
            target="_blank"
            className="button"
          >
            Site
          </Link>
          {/* <Link
            href="https://github.com/gsdeveloperr/erc20-tokenswapping"
            target="_blank"
            className="button"
          >
            Code
          </Link> */}

          <Link
            href="https://www.youtube.com/watch?v=N3iC5WIf6_4"
            target="_blank"
            className="button"
          >
            Video Walkthrough
          </Link>
        </div>

        <div className="projects__card">
          <h3>Decentralized Store</h3>
          <Image src="/rstore.png" alt="" width={10000} height={10000} />
          <ul>
            <li>
              <p>
                Implemented the ERC-721 standard, allowing users to purchase
                items that will be minted as ERC-721 tokens on the Polygon
                blockchain network.
              </p>
            </li>
            <li>
              <p>Added Pinata Gateway for image optimization and retrieval.</p>
            </li>
          </ul>

          <Link
            href="https://r-s.vercel.app/"
            target="_blank"
            className="button"
          >
            Site
          </Link>
          {/* <Link
            href="https://github.com/gsdeveloperr/r-s"
            target="_blank"
            className="button"
          >
            Code
          </Link> */}

          <Link
            href="https://www.youtube.com/watch?v=mD998O3wGBw"
            target="_blank"
            className="button"
          >
            Video Walkthrough
          </Link>
        </div>

        <div className="projects__card">
          <h3>Stable-Coin (Algorithmic)</h3>
          <Image src="/stable.png" alt="algo" width={10000} height={10000} />
          <ul>
            <li>
              <p>
                Built a Governance Smart Contract to handle operations related
                to token burning and minting.
              </p>
            </li>
            <li>
              <p>
                Constructed a Reserve Smart Contract to support Stable and
                Unstable Collaterals, maintaining the peg and stabilizing the
                value of the Stable coin.
              </p>
            </li>
            <li>
              <p>
                Added three ERC-20 Smart contracts: one for the Stable coin, a
                second for Stable Collateral (USDT), and a third for Unstable
                Collateral (ETH).
              </p>
            </li>
          </ul>

          {/* <Link
            href="https://github.com/gsdeveloperr/algorithmic_stablecoin"
            target="_blank"
            className="button"
          >
            Code
          </Link> */}

          <Link
            href="https://www.youtube.com/watch?v=0_Zm910o-Qk"
            target="_blank"
            className="button"
          >
            Video Walkthrough
          </Link>
        </div>

        <div className="projects__card">
          <h3>NFT Ticket Clone</h3>
          <Image src="/nftticket.png" alt="algo" width={10000} height={10000} />
          <ul>
            <li>
              <p>
                Built an NFT ticket system where users can purchase tickets for
                global Ethereum events. When users buy a ticket(seat), an
                ERC-721 token will be minted on the Polygon blockchain network.
              </p>
            </li>
          </ul>

          <Link
            href="https://eth-global-events.vercel.app/"
            target="_blank"
            className="button"
          >
            Site
          </Link>

          {/* <Link
            href="https://github.com/gsdeveloperr/Eth-Global-Events"
            target="_blank"
            className="button"
          >
            Code
          </Link> */}

          <Link
            href="https://www.youtube.com/watch?v=IyMzI-XyuvE"
            target="_blank"
            className="button"
          >
            Video Walkthrough
          </Link>
        </div>

        <div className="projects__card">
          <h3>ERC-20 Token Staking (Clone)</h3>
          <Image src="/token.png" alt="algo" width={10000} height={10000} />
          <ul>
            <li>
              <p>
                This is a custom ERC-20 Token Staking Dapp, where users can
                stake their ERC-20 tokens for a specific period to earn rewards.
              </p>
            </li>
            <li>
              <p>
                Added custom fee feature for every staking period timelines.
              </p>
            </li>
          </ul>

          <Link
            href="https://erc-20-staking.vercel.app/staking-1.html"
            target="_blank"
            className="button"
          >
            Site
          </Link>
          {/* <Link
            href="https://github.com/gsdeveloperr/ERC-20-Staking"
            target="_blank"
            className="button"
          >
            Code
          </Link> */}
          <Link
            href="https://www.youtube.com/watch?v=g5hUe5O5htE&t=32s"
            target="_blank"
            className="button"
          >
            Video Walkthrough
          </Link>
        </div>
        <div className="projects__card">
          <h3>under construction</h3>
          <Image src="/" alt="" width={10000} height={10000} />
          <ul>
            <li>
              <p></p>
            </li>
            <li>
              <p> </p>
            </li>
          </ul>

          <Link href="" target="_blank" className="button">
            Site
          </Link>
          <Link href="" target="_blank" className="button">
            Code
          </Link>

          <Link href="" target="_blank" className="button">
            Video Walkthrough
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
