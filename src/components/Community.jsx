import React from 'react'

const Community = () => {
  return (
    <div>
      <section className="college-communities">
        <div className="college-communities-head">
          <h1 className="event-para">COLLEGE COMMUNITIES</h1>
        </div>
        <div className="colleges">
          <div className="college">
            <img
              className="college-img"
              src="reva-logo.png"
              alt=""
            />
            <h1 className="college-name">REVA</h1>
          </div>
        </div>
      </section>
      <section className="college-communities community-partners">
        <div className="college-communities-head">
          <h1 className="event-para">COMMUNITY PARTNERS</h1>
        </div>
        <div className="communities">
          <div className="community">
          <a href="https://twitter.com/hyderabaddao?s=21&t=uGmuP8mHNlf7MNnFWQqcGQ">
            <img
              className="community-img"
              src="HYD DAO Logo - Black.png"
              alt="Hydrebad DAO"
            />
          </a>
          </div>

          <div className="community">
            <a href="https://twitter.com/garidevdao?s=21&t=uGmuP8mHNlf7MNnFWQqcGQ">
            <img
              className="community-img"
              src="gdd-removebg-preview.png"
              alt="GARI DEVELOPERS DAO"
            /></a>
          </div>
          <div className="community">
            <a href="https://twitter.com/pune_dao?s=21&t=uGmuP8mHNlf7MNnFWQqcGQ">
            <img
              className="community-img"
              src="puneDao.png"
              alt="PUNE DAO"
            /></a>
          </div>
          <div className="community">
            <a href="https://twitter.com/movefunsdao?s=21&t=uGmuP8mHNlf7MNnFWQqcGQ">
            <img
              className="community-img"
              src="funmovedao.jpg"
              alt="FUN MOVE DAO"
            /></a>
          </div>
          <div className="community">
          <a href="https://twitter.com/movefunsdao?s=21&t=uGmuP8mHNlf7MNnFWQqcGQ">
            <img
              className="community-img chennai-web3-img"
              src="chennaiweb3.png"
              alt="FUN MOVE DAO"
            /></a>
          </div>
        </div>
        <div className="communitiess">
          {/* ////////////////////// */}
          <div className="community">
            <a href="https://twitter.com/collegedao_hub?s=21&t=uGmuP8mHNlf7MNnFWQqcGQ">
            <img
              className="community-img"
              src="clgs.png"
              alt="College DAO"
            /></a>
          </div>
          <div className="community">
            <a href="https://twitter.com/web3assam?s=21&t=uGmuP8mHNlf7MNnFWQqcGQ">
            <img
              className="community-img"
              src="black.png"
              alt="Web3 Assam"
            /></a>
          </div>
          <div className="community">
            <a href="https://twitter.com/noncegeek">
            <img
              className="community-img"
              src="box.png"
              alt="Nonce Geek DAO"
            /></a>
          </div>
          <div className="community">
            <a href="">
            <img
              className="community-img"
              src="hello.jpg"
              alt="E- Dam"
            /></a>
          </div>
          <div className="community">
          <a href="https://twitter.com/blotic_web3?s=21&t=uGmuP8mHNlf7MNnFWQqcGQ">
            <img
              className="community-img chennai-web3-img"
              src="lotic.jpg"
              alt="Bloctic"
            /></a>
          </div>
        </div>
      </section>

      <section className="college-communities community-partners">
        <div className="college-communities-head">
          <h1 className="event-para">EDUCATION PARTNERS</h1>
        </div>
        <div className="communities">
          <div className="community">
            <a href="https://imcoding.online/">
            <img
              className="college-img"
              src="imcoding.svg"
              alt="Hydrebad DAO"
            />
            </a>
          </div>
          <div className="community">
            <a href="https://overmind.xyz/">
            <img
              className="college-img"
              src="overmind-mainweb-removebg-preview.png"
              alt="Hydrebad DAO"
            />
            </a>
          </div>
          <div className="community">
            <a href="https://twitter.com/quill_academy">
            <img
              className="college-img"
              src="Quill.png"
              alt="Quill Academy"
            />
            </a>
          </div>

          {/* <div className="community">
            <img
              onClick="openGdd()"
              className="community-img"
              src="gdd-removebg-preview.png"
              alt="GARI DEVELOPERS DAO"
            />
          </div>
          <div className="community">
            <img
              className="community-img"
              src="puneDao.png"
              alt="PUNE DAO"
            />
          </div>
          <div className="community">
            <img
              className="community-img"
              src="funmovedao.jpg"
              alt="FUN MOVE DAO"
            />
          </div> */}
        </div>
      </section>

      <section className="partners">
        <div className="card-heading">
          <p className="event-para">ECOSYSTEM PARTNERS</p>
        </div>
        <div className="main-partner-sec">
          <img
            id="partners-img"
            src="partners-sec-new-img-2.png"
            alt=""
          />
          <div className="companies">
            <div className="c-box-1 layer-box">
              <div className="c-box aptos top-bottom-c-box">
                <img
                  className="c-img aptos-img"
                  src="aptos.png"
                  alt=""
                />
                <a href="https://aptoslabs.com/" className="c-name aptos-name">
                  Aptos
                </a>
              </div>
            </div>
            <div className="c-box-2 layer-box">
              <div className="c-box martian">
                <img className="c-img" src="martian.png" alt="" />

                <a href="https://martianwallet.xyz/" className="c-name">
                  Martian
                </a>
              </div>

              <div className="c-box movebit">
                <img className="c-img" src="movebit.png" alt="" />
                <a href="https://movebit.xyz/" className="c-name">
                  MoveBit
                </a>
              </div>
            </div>

            <div className="c-box-3 layer-box">
              <div className="c-box petra">
                <img className="c-img" src="petra.png" alt="" />
                <a href="https://petra.app/" className="c-name">
                  Petra
                </a>
              </div>

              <div className="c-box kanalabs">
                <img className="c-img" src="kanalabs.png" alt="" />
                <a href="https://www.kanalabs.io/" className="c-name">
                  KanaLabs
                </a>
              </div>
            </div>

            <div className="c-box-4 layer-box top-bottom-c-box">
              <div className="c-box chingari">
                <img className="c-img" src="chingari.png" alt="" />
                <a href="https://kudo.money/" className="c-name">
                  Chingari
                </a>
              </div>
              <div className="c-box kudomoney">
                <img
                  className="c-img"
                  src="kusdomoney.png"
                  alt=""
                />
                <a href="https://kudo.money/" className="c-name">
                  Kudo Money
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Community
