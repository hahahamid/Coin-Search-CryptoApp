import ChooseBox from "./ChooseBox";
import BitHand from "../images/chooseus/choose-main.png";

function WhyUs() {
  return (
    <>
      <section id="choose-us" className="why-section">
        <div className="container">
          <div className="choose-container">
            <h2>
              why <span>choose us</span>
            </h2>
            <div className="choose-container__content">
              <div className="choose-container__content__1">
                <ChooseBox
                  img="fa-solid fa-wallet"
                  title="CONNECT YOUR WALLET"
                  text="Use Trust Wallet, Metamask or to connect to the app."
                />
                <ChooseBox
                  img="fa-solid fa-pen-ruler"
                  title="SELECT YOUR QUANTITY"
                  text="Upload your crypto and set a title, description and price."
                />
                <ChooseBox
                  img="fa-solid fa-bolt"
                  title="CONFIRM TRANSACTION"
                  text="Earn by selling your crypto on our marketplace."
                />
              </div>
              <div className="choose-container__content__2">
                <img src={BitHand} alt="hand_img" />
              </div>
              <div className="choose-container__content__3">
                <ChooseBox
                  img="fa-solid fa-satellite-dish"
                  title="RECEIVE YOUR OWN NFTS"
                  text="Invest all your crypto at one place on one platform."
                />
                <ChooseBox
                  img="fa-solid fa-chess-knight"
                  title="TAKE A MARKET
                  TO SELL"
                  text="Discover, collect the right crypto collections to buy or sell."
                />
                <ChooseBox
                  img="fa-solid fa-boxes-stacked"
                  title="DRIVE YOUR COLLECTION"
                  text="We make it easy to Discover, Invest and manage."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyUs;
