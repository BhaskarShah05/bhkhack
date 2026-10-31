import ProfileCardBackdrop from "../components/ProfileCardBackdrop";
import AlumniCardBottomOverlay from "../components/AlumniCardBottomOverlay";
import ProfileCardGhostOverlay from "../components/ProfileCardGhost"
import ResponsiveWaveGrid from "../components/ui/ResponsiveWaveGrid";

import Footer from "../components/Footer"

const assetPathPrefix = "/assets"
const imgRectangle31 = `${assetPathPrefix}/c7048.png`
const imgRectangle32 = `${assetPathPrefix}/86c98.png`
const imgRectangle33 = `${assetPathPrefix}/8c31b.png`
const imgRectangle34 = `${assetPathPrefix}/4f418.png`
const imgRectangle35 = `${assetPathPrefix}/b69df.png`
const imgRectangle36 = `${assetPathPrefix}/acb23.png`
const imgRectangle37 = `${assetPathPrefix}/705f1.png`
const imgRectangle38 = `${assetPathPrefix}/8d82c.png`
const imgRectangle39 = `${assetPathPrefix}/3a040.png`
const imgRectangle40 = `${assetPathPrefix}/cee4d.png`
const imgRectangle41 = `${assetPathPrefix}/94463.png`
const imgRectangle42 = `${assetPathPrefix}/7bc95.png`
const imgRectangle43 = `${assetPathPrefix}/67893.png`
const imgRectangle44 = `${assetPathPrefix}/3ef8f.png`
const imgRectangle45 = `${assetPathPrefix}/b226c.png`
const imgRectangle46 = `${assetPathPrefix}/e3f80.png`
const imgRectangle47 = `${assetPathPrefix}/87b6f.png`
const imgRectangle48 = `${assetPathPrefix}/82760.png`
const imgRectangle49 = `${assetPathPrefix}/46b2c.png`
const imgRectangle50 = `${assetPathPrefix}/bcdcb.png`
const imgRectangle51 = `${assetPathPrefix}/d5d6f.png`
const imgRectangle52 = `${assetPathPrefix}/98d2f.png`
const imgRectangle53 = `${assetPathPrefix}/54e9f.png`
const imgRectangle54 = `${assetPathPrefix}/b5a56.png`
const imgRectangle55 = `${assetPathPrefix}/cf25e.png`
const imgRectangle56 = `${assetPathPrefix}/b76c8.png`
const imgRectangle57 = `${assetPathPrefix}/87223.png`
const imgRectangle58 = `${assetPathPrefix}/72af1.png`
const imgRectangle59 = `${assetPathPrefix}/6c25f.png`
const imgRectangle60 = `${assetPathPrefix}/3ee3e.png`
const imgRectangle61 = `${assetPathPrefix}/b317d.png`
const imgRectangle62 = `${assetPathPrefix}/335fd.png`
const imgRectangle63 = `${assetPathPrefix}/d2217.png`
const imgRectangle64 = `${assetPathPrefix}/77250.png`
const imgRectangle65 = `${assetPathPrefix}/f0703.png`
const imgRectangle66 = `${assetPathPrefix}/fd2a7.png`
const imgRectangle67 = `${assetPathPrefix}/47b08.png`
const imgRectangle68 = `${assetPathPrefix}/218f4.png`
const imgRectangle69 = `${assetPathPrefix}/961a7.png`
const imgRectangle70 = `${assetPathPrefix}/1e4c7.png`
const imgRectangle71 = `${assetPathPrefix}/9b416.png`
const imgRectangle72 = `${assetPathPrefix}/fc610.png`
const imgRectangle73 = `${assetPathPrefix}/cf3e8.png`
const imgRectangle74 = `${assetPathPrefix}/82028.png`
const imgRectangle75 = `${assetPathPrefix}/a0f74.png`
const imgRectangle76 = `${assetPathPrefix}/c69a4.png`
const imgRectangle77 = `${assetPathPrefix}/f581b.png`
const imgRectangle78 = `${assetPathPrefix}/919f7.png`
const imgRectangle79 = `${assetPathPrefix}/a4080.png`
const imgRectangle80 = `${assetPathPrefix}/bb70d.png`
const imgRectangle81 = `${assetPathPrefix}/50e45.png`
const imgRectangle82 = `${assetPathPrefix}/fce82.png`
const imgRectangle83 = `${assetPathPrefix}/236be.png`
const imgRectangle84 = `${assetPathPrefix}/d3279.png`
const imgRectangle85 = `${assetPathPrefix}/a81fc.png`
const imgRectangle86 = `${assetPathPrefix}/da792.png`
const imgRectangle87 = `${assetPathPrefix}/8dc54.png`
const imgRectangle88 = `${assetPathPrefix}/171ec.png`
const imgRectangle89 = `${assetPathPrefix}/bd08e.png`
const imgRectangle90 = `${assetPathPrefix}/9f1b5.png`
const imgRectangle91 = `${assetPathPrefix}/ed2c2.png`
const imgRectangle92 = `${assetPathPrefix}/4c239.png`
const imgNcsLogo = `${assetPathPrefix}/d3aad.svg`
const imgLine1 = `${assetPathPrefix}/2d226.svg`

export default function Alumni({ activePage = "Alumni", onNavigate }) {
  return (
    <div
      className="bg-transparent relative w-full max-w-[1668px] min-h-screen mx-auto flex flex-col items-center pt-[27px] pb-[40px] px-2 sm:px-4 md:px-0 shrink-0"
      data-node-id="1:575"
      data-name="Alumni"
    >
      <div
        className="content-stretch flex flex-col gap-[60px] md:gap-[102px] items-center w-full max-w-[1668px]"
        data-node-id="1:576"
      >
        <div
          className="content-stretch flex flex-col gap-[30px] md:gap-[47px] items-center relative shrink-0 w-full max-w-[1305.84px]"
          data-node-id="1:577"
        >

          <div
            className="content-stretch flex flex-col gap-[40px] md:gap-[85px] items-center relative shrink-0 w-full"
            data-node-id="1:588"
          >
            <div className="flex flex-col items-center text-center gap-6 w-full mb-6">
              <p
                className="bg-clip-text font-['Satoshi:Black','Poppins:SemiBold',sans-serif] relative shrink-0 text-[48px] sm:text-[64px] md:text-[80px] text-[transparent] tracking-[-2px] md:tracking-[-3.2px] whitespace-nowrap"
                style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 263 108' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(13.15 0 0 22.055 131.5 54)'><stop stop-color='rgba(153,153,153,1)' offset='0.33'/><stop stop-color='rgba(204,204,204,1)' offset='0.665'/><stop stop-color='rgba(255,255,255,1)' offset='1'/></radialGradient></defs></svg>\")" }}
              >
                ALUMNI
              </p>
              <p className="font-['Satoshi',Arial,sans-serif] font-normal text-[14px] sm:text-[18px] md:text-[26px] lg:text-[34px] leading-[1.5] text-white/60 md:text-white/70 max-w-[1340px] w-full px-4 text-center tracking-tight break-words">
                Since 2000, our society has been a launchpad for world-class tech talent. Fueled by an relentless passion for computer science and a drive to push boundaries, we&apos;ve spent over two decades shaping curious minds into visionaries and leaders.
              </p>
            </div>
            <div
              className="content-stretch flex flex-col gap-[40px] md:gap-[110px] items-center md:items-start relative shrink-0 w-full"
              data-node-id="1:590"
            >
              <p
                className="font-['Satoshi',Arial,sans-serif] font-bold text-[36px] sm:text-[52px] md:text-[60px] leading-none min-w-full not-italic relative shrink-0 text-center tracking-[-2.4px] w-full text-transparent bg-clip-text my-2"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, #FFFFFF 0%, #D4D4D8 45%, #52525B 100%)",
                  textShadow: "0 8px 30px rgba(0,0,0,0.8)",
                }}
                data-node-id="1:591"
              >
                2026
              </p>
              <div
                className="content-stretch flex flex-col gap-[17px] items-center leading-[0] relative shrink-0 w-full max-w-[1305px]"
                data-node-id="1:592"
              >
                <ResponsiveWaveGrid>
                  <div
                    className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
                    data-node-id="1:593"
                  >
                  
<div className="col-1 h-[600px] ml-0 mt-0 relative group cursor-pointer row-1 w-[200px]"
                    data-node-id="1:594"
                  >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#feb9ce" />
                    <ProfileCardGhostOverlay src={imgRectangle31} />

                    <div className="-translate-x-1/2 absolute h-[380.7px] left-[calc(50%+7.92px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[37px] w-[255.83px] profile-img-bottom-shadow"
                      data-node-id="1:595"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                        src={imgRectangle31}
                      />
                    </div>
                    <div
                      className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                      data-node-id="1:596"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                      }}
                    />
                          <AlumniCardBottomOverlay>
        <div
                      className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                      data-node-id="1:597"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                        data-node-id="1:598"
                      >
                        <p className="leading-[1.25] mb-0">Insha</p>
                        <p className="leading-[1.25]">Naseem</p>
                      </div>
                    </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                  
<div className="col-1 h-[600px] ml-[434.88px] mt-0 relative group cursor-pointer row-1 w-[200px]"
                    data-node-id="1:599"
                  >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#6663ff" />
                    <ProfileCardGhostOverlay src={imgRectangle32} />

                    <div className="-translate-x-1/2 absolute h-[586px] left-[calc(50%-8.88px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[14px] w-[394px] profile-img-bottom-shadow"
                      data-node-id="1:600"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                        src={imgRectangle32}
                      />
                    </div>
                    <div
                      className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                      data-node-id="1:601"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                      }}
                    />
                          <AlumniCardBottomOverlay>
        <div
                      className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                      data-node-id="1:602"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                        data-node-id="1:603"
                      >
                        <p className="leading-[1.25] mb-0">Parth</p>
                        <p className="leading-[1.25]">Mishra</p>
                      </div>
                    </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                  <div
                    className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[217.44px] mt-[177.12px] place-items-start relative row-1"
                    data-node-id="1:604"
                  >
                    
<div className="col-1 h-[600px] ml-0 mt-0 relative group cursor-pointer row-1 w-[200px]"
                      data-node-id="1:605"
                    >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#b3fd44" />
                    <ProfileCardGhostOverlay src={imgRectangle33} />

                      <div className="-translate-x-1/2 absolute h-[455px] left-[calc(50%-37.94px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[123.88px] w-[305px] profile-img-bottom-shadow"
                        data-node-id="1:606"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                          src={imgRectangle33}
                        />
                      </div>
                      <div
                        className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                        data-node-id="1:607"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                        }}
                      />
                            <AlumniCardBottomOverlay>
        <div
                        className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                        data-node-id="1:608"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                          data-node-id="1:609"
                        >
                          <p className="leading-[1.25] mb-0">Krati</p>
                          <p className="leading-[1.25]">Bajpai</p>
                        </div>
                      </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                  </div>
                  
<div className="col-1 h-[600px] ml-[652.32px] mt-[177.12px] relative group cursor-pointer row-1 w-[200px]"
                    data-node-id="1:610"
                  >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#ffc931" />
                    <ProfileCardGhostOverlay src={imgRectangle34} />

                    <div className="-translate-x-1/2 absolute h-[507px] left-[calc(50%+19.18px)] shadow-[2.88px_2.88px_2.88px_0px_rgba(0,0,0,0.25)] top-[45.88px] w-[341px] profile-img-bottom-shadow"
                      data-node-id="1:611"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                        src={imgRectangle34}
                      />
                    </div>
                    <div
                      className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                      data-node-id="1:612"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                      }}
                    />
                          <AlumniCardBottomOverlay>
        <div
                      className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                      data-node-id="1:613"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                        data-node-id="1:614"
                      >
                        <p className="leading-[1.25] mb-0">Mohit</p>
                        <p className="leading-[1.25]">Singh</p>
                      </div>
                    </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                  
<div className="col-1 h-[600px] ml-[869.76px] mt-0 relative group cursor-pointer row-1 w-[200px]"
                    data-node-id="1:615"
                  >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#feb9ce" />
                    <ProfileCardGhostOverlay src={imgRectangle35} />

                    <div className="-translate-x-1/2 absolute h-[586px] left-[calc(50%+12px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-0 w-[394px] profile-img-bottom-shadow"
                      data-node-id="1:616"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                        src={imgRectangle35}
                      />
                    </div>
                    <div
                      className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                      data-node-id="1:617"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                      }}
                    />
                          <AlumniCardBottomOverlay>
        <div
                      className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                      data-node-id="1:618"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                        data-node-id="1:619"
                      >
                        <p className="leading-[1.25] mb-0">Piyush</p>
                        <p className="leading-[1.25]">Yadav</p>
                      </div>
                    </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                  
<div className="col-1 h-[600px] ml-[1095.84px] mt-[179.12px] relative group cursor-pointer row-1 w-[200px]"
                    data-node-id="1:620"
                  >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#b3fd44" />
                    <ProfileCardGhostOverlay src={imgRectangle36} />

                    <div className="-translate-x-1/2 absolute h-[595px] left-[calc(50%-20.84px)] shadow-[4.32px_4.32px_4.32px_0px_rgba(0,0,0,0.25)] top-[22.88px] w-[400px] profile-img-bottom-shadow"
                      data-node-id="1:621"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                        src={imgRectangle36}
                      />
                    </div>
                    <div
                      className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                      data-node-id="1:622"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                      }}
                    />
                          <AlumniCardBottomOverlay>
        <div
                      className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                      data-node-id="1:623"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                        data-node-id="1:624"
                      >
                        <p className="leading-[1.25] mb-0">Rohit</p>
                        <p className="leading-[1.25]">Pandey</p>
                      </div>
                    </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                </div>
                <div
                  className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
                  data-node-id="1:625"
                >
                  
<div className="col-1 h-[600px] ml-0 mt-0 relative group cursor-pointer row-1 w-[200px]"
                    data-node-id="1:626"
                  >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#feb9ce" />
                    <ProfileCardGhostOverlay src={imgRectangle37} />

                    <div className="-translate-x-1/2 absolute h-[586px] left-[calc(50%-10px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[98px] w-[394px] profile-img-bottom-shadow"
                      data-node-id="1:627"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                        src={imgRectangle37}
                      />
                    </div>
                    <div
                      className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                      data-node-id="1:628"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                      }}
                    />
                          <AlumniCardBottomOverlay>
        <div
                      className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                      data-node-id="1:629"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                        data-node-id="1:630"
                      >
                        <p className="leading-[1.25] mb-0">Sankalp</p>
                        <p className="leading-[1.25]">Saxena</p>
                      </div>
                    </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                  
<div className="col-1 h-[600px] ml-[217px] mt-[177px] relative group cursor-pointer row-1 w-[200px]"
                    data-node-id="1:631"
                  >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#b3fd44" />
                    <ProfileCardGhostOverlay src={imgRectangle38} />

                    <div className="-translate-x-1/2 absolute h-[586px] left-[calc(50%+29px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-0 w-[394px] profile-img-bottom-shadow"
                      data-node-id="1:632"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                        src={imgRectangle38}
                      />
                    </div>
                    <div
                      className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                      data-node-id="1:633"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                      }}
                    />
                          <AlumniCardBottomOverlay>
        <div
                      className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                      data-node-id="1:634"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                        data-node-id="1:635"
                      >
                        <p className="leading-[1.25] mb-0">Unnat</p>
                        <p className="leading-[1.25] mb-0">Kumar</p>
                        <p className="leading-[1.25]">Agarwal</p>
                      </div>
                    </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                  
<div className="col-1 h-[600px] ml-[434px] mt-0 relative group cursor-pointer row-1 w-[200px]"
                    data-node-id="1:636"
                  >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#6663ff" />
                    <ProfileCardGhostOverlay src={imgRectangle39} />

                    <div className="-translate-x-1/2 absolute h-[528px] left-[calc(50%-0.42px)] shadow-[4.32px_4.32px_4.32px_0px_rgba(0,0,0,0.25)] top-[-5.12px] w-[327px] profile-img-bottom-shadow"
                      data-node-id="1:637"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                        src={imgRectangle39}
                      />
                    </div>
                    <div
                      className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                      data-node-id="1:638"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                      }}
                    />
                          <AlumniCardBottomOverlay linkedinUrl="https://www.linkedin.com/in/utkarsh-shukla-b2442b329/">
        <div
                      className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                      data-node-id="1:639"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                        data-node-id="1:640"
                      >
                        <p className="leading-[1.25] mb-0">Utkarsh</p>
                        <p className="leading-[1.25]">Gupta</p>
                      </div>
                    </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                  
<div className="col-1 h-[600px] ml-[868px] mt-0 relative group cursor-pointer row-1 w-[200px]"
                    data-node-id="1:641"
                  >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#feb9ce" />
                    <ProfileCardGhostOverlay src={imgRectangle40} />

                    <div className="-translate-x-1/2 absolute h-[494px] left-[calc(50%-31px)] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[53px] w-[332px] profile-img-bottom-shadow"
                      data-node-id="1:642"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                        src={imgRectangle40}
                      />
                    </div>
                    <div
                      className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                      data-node-id="1:643"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                      }}
                    />
                          <AlumniCardBottomOverlay>
        <div
                      className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                      data-node-id="1:644"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                        data-node-id="1:645"
                      >
                        <p className="leading-[1.25] mb-0">Kushagra</p>
                        <p className="leading-[1.25]">Singh</p>
                      </div>
                    </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                  
<div className="col-1 h-[600px] ml-[651px] mt-[177px] relative group cursor-pointer row-1 w-[200px]"
                    data-node-id="1:646"
                  >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#ffc931" />
                    <ProfileCardGhostOverlay src={imgRectangle41} />

                    <div className="-translate-x-1/2 absolute h-[558px] left-[calc(50%+9.58px)] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[-49.12px] w-[375px] profile-img-bottom-shadow"
                      data-node-id="1:647"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                        src={imgRectangle41}
                      />
                    </div>
                    <div
                      className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                      data-node-id="1:648"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                      }}
                    />
                          <AlumniCardBottomOverlay>
        <div
                      className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                      data-node-id="1:649"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                        data-node-id="1:650"
                      >
                        <p className="leading-[1.25] mb-0">Yash</p>
                        <p className="leading-[1.25]">Jha</p>
                      </div>
                    </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                  </div>
                </ResponsiveWaveGrid>
              </div>
              <p
                className="[word-break:break-word] font-['Satoshi',Arial,sans-serif] font-bold font-bold leading-[normal] min-w-full not-italic relative shrink-0 text-[52px] sm:text-[68px] md:text-[80px] text-center text-white tracking-tight w-[min-content]"
                data-node-id="1:651"
              >
                2025
              </p>
              <div
                className="content-stretch flex flex-col items-center relative shrink-0 w-full"
                data-node-id="1:652"
                data-name="2024"
              >
                <div
                  className="content-stretch flex flex-col gap-[17px] items-center relative shrink-0"
                  data-node-id="1:653"
                >
                  <ResponsiveWaveGrid>
                    <div
                      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
                      data-node-id="1:654"
                    >
                    
<div className="col-1 h-[600px] ml-0 mt-0 relative group cursor-pointer row-1 w-[200px]"
                      data-node-id="1:655"
                    >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#feb9ce" />
                    <ProfileCardGhostOverlay src={imgRectangle42} />

                      <div className="-translate-x-1/2 absolute h-[380.7px] left-[calc(50%-28.08px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[108px] w-[255.83px] profile-img-bottom-shadow"
                        data-node-id="1:656"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                          src={imgRectangle42}
                        />
                      </div>
                      <div
                        className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                        data-node-id="1:657"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                        }}
                      />
                            <AlumniCardBottomOverlay>
        <div
                        className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                        data-node-id="1:658"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                          data-node-id="1:659"
                        >
                          <p className="leading-[1.25] mb-0">Aayush</p>
                          <p className="leading-[1.25]">Aryan</p>
                        </div>
                      </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                    
<div className="col-1 h-[600px] ml-[434.88px] mt-0 relative group cursor-pointer row-1 w-[200px]"
                      data-node-id="1:660"
                    >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#6663ff" />
                    <ProfileCardGhostOverlay src={imgRectangle43} />

                      <div className="-translate-x-1/2 absolute h-[540px] left-[calc(50%+48.62px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[101px] w-[363px] profile-img-bottom-shadow"
                        data-node-id="1:661"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                          src={imgRectangle43}
                        />
                      </div>
                      <div
                        className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                        data-node-id="1:662"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                        }}
                      />
                            <AlumniCardBottomOverlay>
        <div
                        className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                        data-node-id="1:663"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                          data-node-id="1:664"
                        >
                          <p className="leading-[1.25] mb-0">Adarsh</p>
                          <p className="leading-[1.25]">Bajpai</p>
                        </div>
                      </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                    <div
                      className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[217.44px] mt-[177.12px] place-items-start relative row-1"
                      data-node-id="1:665"
                    >
                      
<div className="col-1 h-[600px] ml-0 mt-0 relative group cursor-pointer row-1 w-[200px]"
                        data-node-id="1:666"
                      >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#b3fd44" />
                    <ProfileCardGhostOverlay src={imgRectangle44} />

                        <div className="-translate-x-1/2 absolute h-[455px] left-[calc(50%+33.06px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[33.88px] w-[305px] profile-img-bottom-shadow"
                          data-node-id="1:667"
                        >
                          <img
                            alt=""
                            className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                            src={imgRectangle44}
                          />
                        </div>
                        <div
                          className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                          data-node-id="1:668"
                          style={{
                            backgroundImage:
                              "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                          }}
                        />
                              <AlumniCardBottomOverlay>
        <div
                          className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                          data-node-id="1:669"
                        >
                          <div
                            className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                            data-node-id="1:670"
                          >
                            <p className="leading-[1.25] mb-0">Abhishek</p>
                            <p className="leading-[1.25]">Pandey</p>
                          </div>
                        </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                    </div>
                    
<div className="col-1 h-[600px] ml-[652.32px] mt-[177.12px] relative group cursor-pointer row-1 w-[200px]"
                      data-node-id="1:671"
                    >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#ffc931" />
                    <ProfileCardGhostOverlay src={imgRectangle45} />

                      <div className="-translate-x-1/2 absolute h-[507px] left-[calc(50%+19.18px)] shadow-[2.88px_2.88px_2.88px_0px_rgba(0,0,0,0.25)] top-[45.88px] w-[341px] profile-img-bottom-shadow"
                        data-node-id="1:672"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                          src={imgRectangle45}
                        />
                      </div>
                      <div
                        className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                        data-node-id="1:673"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                        }}
                      />
                            <AlumniCardBottomOverlay>
        <div
                        className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                        data-node-id="1:674"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                          data-node-id="1:675"
                        >
                          <p className="leading-[1.25] mb-0">Aditi</p>
                          <p className="leading-[1.25]">Pandey</p>
                        </div>
                      </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                    
<div className="col-1 h-[600px] ml-[869.76px] mt-0 relative group cursor-pointer row-1 w-[200px]"
                      data-node-id="1:676"
                    >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#feb9ce" />
                    <ProfileCardGhostOverlay src={imgRectangle46} />

                      <div className="-translate-x-1/2 absolute h-[586px] left-[calc(50%+9.24px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[-26px] w-[394px] profile-img-bottom-shadow"
                        data-node-id="1:677"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                          src={imgRectangle46}
                        />
                      </div>
                      <div
                        className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                        data-node-id="1:678"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                        }}
                      />
                            <AlumniCardBottomOverlay>
        <div
                        className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                        data-node-id="1:679"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                          data-node-id="1:680"
                        >
                          <p className="leading-[1.25] mb-0">Alok</p>
                          <p className="leading-[1.25]">Ranjan</p>
                        </div>
                      </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                    
<div className="col-1 h-[600px] ml-[1095.84px] mt-[179.12px] relative group cursor-pointer row-1 w-[200px]"
                      data-node-id="1:681"
                    >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#b3fd44" />
                    <ProfileCardGhostOverlay src={imgRectangle47} />

                      <div className="-translate-x-1/2 absolute h-[595px] left-[calc(50%-20.84px)] shadow-[4.32px_4.32px_4.32px_0px_rgba(0,0,0,0.25)] top-[22.88px] w-[400px] profile-img-bottom-shadow"
                        data-node-id="1:682"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                          src={imgRectangle47}
                        />
                      </div>
                      <div
                        className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                        data-node-id="1:683"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                        }}
                      />
                            <AlumniCardBottomOverlay>
        <div
                        className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                        data-node-id="1:684"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                          data-node-id="1:685"
                        >
                          <p className="leading-[1.25] mb-0">Anubhav</p>
                          <p className="leading-[1.25]">Baranwal</p>
                        </div>
                      </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                  </div>
                  <div
                    className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
                    data-node-id="1:686"
                  >
                    
<div className="col-1 h-[600px] ml-0 mt-0 relative group cursor-pointer row-1 w-[200px]"
                      data-node-id="1:687"
                    >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#feb9ce" />
                    <ProfileCardGhostOverlay src={imgRectangle48} />

                      <div className="-translate-x-1/2 absolute h-[473px] left-1/2 shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[3px] w-[318px] profile-img-bottom-shadow"
                        data-node-id="1:688"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                          src={imgRectangle48}
                        />
                      </div>
                      <div
                        className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                        data-node-id="1:689"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                        }}
                      />
                            <AlumniCardBottomOverlay linkedinUrl="https://www.linkedin.com/in/ayush-vashisth-4600a5338">
        <div
                        className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                        data-node-id="1:690"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                          data-node-id="1:691"
                        >
                          <p className="leading-[1.25] mb-0 whitespace-pre">{`Ayush `}</p>
                          <p className="leading-[1.25] whitespace-pre">
                            Jaiswal
                          </p>
                        </div>
                      </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                    
<div className="col-1 h-[600px] ml-[434.88px] mt-0 relative group cursor-pointer row-1 w-[200px]"
                      data-node-id="1:692"
                    >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#6663ff" />
                    <ProfileCardGhostOverlay src={imgRectangle49} />

                      <div className="-translate-x-1/2 absolute h-[629px] left-[calc(50%-11.38px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[-45px] w-[423px] profile-img-bottom-shadow"
                        data-node-id="1:693"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                          src={imgRectangle49}
                        />
                      </div>
                      <div
                        className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                        data-node-id="1:694"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                        }}
                      />
                            <AlumniCardBottomOverlay>
        <div
                        className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                        data-node-id="1:695"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                          data-node-id="1:696"
                        >
                          <p className="leading-[1.25] mb-0">Harsh</p>
                          <p className="leading-[1.25]">Mishra</p>
                        </div>
                      </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                    <div
                      className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[217.44px] mt-[177.12px] place-items-start relative row-1"
                      data-node-id="1:697"
                    >
                      
<div className="col-1 h-[600px] ml-0 mt-0 relative group cursor-pointer row-1 w-[200px]"
                        data-node-id="1:698"
                      >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#b3fd44" />
                    <ProfileCardGhostOverlay src={imgRectangle50} />

                        <div className="-translate-x-1/2 absolute h-[455px] left-[calc(50%+11.06px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[88.88px] w-[305px] profile-img-bottom-shadow"
                          data-node-id="1:699"
                        >
                          <img
                            alt=""
                            className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                            src={imgRectangle50}
                          />
                        </div>
                        <div
                          className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                          data-node-id="1:700"
                          style={{
                            backgroundImage:
                              "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                          }}
                        />
                              <AlumniCardBottomOverlay>
        <div
                          className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                          data-node-id="1:701"
                        >
                          <div
                            className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                            data-node-id="1:702"
                          >
                            <p className="leading-[1.25] mb-0">Dhruv</p>
                            <p className="leading-[1.25]">Karnwal</p>
                          </div>
                        </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                    </div>
                    
<div className="col-1 h-[600px] ml-[652.32px] mt-[177.12px] relative group cursor-pointer row-1 w-[200px]"
                      data-node-id="1:703"
                    >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#ffc931" />
                    <ProfileCardGhostOverlay src={imgRectangle51} />

                      <div className="-translate-x-1/2 absolute h-[507px] left-[calc(50%+19.18px)] shadow-[2.88px_2.88px_2.88px_0px_rgba(0,0,0,0.25)] top-[41.88px] w-[341px] profile-img-bottom-shadow"
                        data-node-id="1:704"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                          src={imgRectangle51}
                        />
                      </div>
                      <div
                        className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                        data-node-id="1:705"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                        }}
                      />
                            <AlumniCardBottomOverlay>
        <div
                        className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                        data-node-id="1:706"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                          data-node-id="1:707"
                        >
                          <p className="leading-[1.25] mb-0">Lalit</p>
                          <p className="leading-[1.25]">Verma</p>
                        </div>
                      </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                    
<div className="col-1 h-[600px] ml-[869.76px] mt-0 relative group cursor-pointer row-1 w-[200px]"
                      data-node-id="1:708"
                    >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#feb9ce" />
                    <ProfileCardGhostOverlay src={imgRectangle52} />

                      <div className="-translate-x-1/2 absolute h-[522px] left-[calc(50%+17.24px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[56.88px] w-[350px] profile-img-bottom-shadow"
                        data-node-id="1:709"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                          src={imgRectangle52}
                        />
                      </div>
                      <div
                        className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                        data-node-id="1:710"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                        }}
                      />
                            <AlumniCardBottomOverlay>
        <div
                        className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                        data-node-id="1:711"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                          data-node-id="1:712"
                        >
                          <p className="leading-[1.25] mb-0">Neev</p>
                          <p className="leading-[1.25]">Gaur</p>
                        </div>
                      </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                  </div>
                  <div
                    className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
                    data-node-id="1:713"
                  >
                    
<div className="col-1 h-[600px] ml-0 mt-0 relative group cursor-pointer row-1 w-[200px]"
                      data-node-id="1:714"
                    >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#feb9ce" />
                    <ProfileCardGhostOverlay src={imgRectangle53} />

                      <div className="-translate-x-1/2 absolute h-[439px] left-[calc(50%-0.5px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[37px] w-[295px] profile-img-bottom-shadow"
                        data-node-id="1:715"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                          src={imgRectangle53}
                        />
                      </div>
                      <div
                        className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                        data-node-id="1:716"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                        }}
                      />
                            <AlumniCardBottomOverlay>
        <div
                        className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                        data-node-id="1:717"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                          data-node-id="1:718"
                        >
                          <p className="leading-[1.25] mb-0">Raghvendra</p>
                          <p className="leading-[1.25]">Singh</p>
                        </div>
                      </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                    
<div className="col-1 h-[600px] ml-[434.88px] mt-0 relative group cursor-pointer row-1 w-[200px]"
                      data-node-id="1:719"
                    >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#6663ff" />
                    <ProfileCardGhostOverlay src={imgRectangle54} />

                      <div className="-translate-x-1/2 absolute h-[586px] left-[calc(50%-14.88px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[75px] w-[394px] profile-img-bottom-shadow"
                        data-node-id="1:720"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                          src={imgRectangle54}
                        />
                      </div>
                      <div
                        className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                        data-node-id="1:721"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                        }}
                      />
                            <AlumniCardBottomOverlay linkedinUrl="https://www.linkedin.com/in/shivangi-trivedi031">
        <div
                        className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                        data-node-id="1:722"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                          data-node-id="1:723"
                        >
                          <p className="leading-[1.25] mb-0">Shivang</p>
                          <p className="leading-[1.25]">Yadav</p>
                        </div>
                      </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                    <div
                      className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[217.44px] mt-[177.12px] place-items-start relative row-1"
                      data-node-id="1:724"
                    >
                      
<div className="col-1 h-[600px] ml-0 mt-0 relative group cursor-pointer row-1 w-[200px]"
                        data-node-id="1:725"
                      >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#b3fd44" />
                    <ProfileCardGhostOverlay src={imgRectangle55} />

                        <div className="-translate-x-1/2 absolute h-[455px] left-[calc(50%-51.94px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[123.88px] w-[305px] profile-img-bottom-shadow"
                          data-node-id="1:726"
                        >
                          <img
                            alt=""
                            className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                            src={imgRectangle55}
                          />
                        </div>
                        <div
                          className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                          data-node-id="1:727"
                          style={{
                            backgroundImage:
                              "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                          }}
                        />
                              <AlumniCardBottomOverlay>
        <div
                          className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                          data-node-id="1:728"
                        >
                          <div
                            className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                            data-node-id="1:729"
                          >
                            <p className="leading-[1.25] mb-0">Saumya</p>
                            <p className="leading-[1.25]">Gupta</p>
                          </div>
                        </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                    </div>
                    
<div className="col-1 h-[600px] ml-[652.32px] mt-[177.12px] relative group cursor-pointer row-1 w-[200px]"
                      data-node-id="1:730"
                    >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#ffc931" />
                    <ProfileCardGhostOverlay src={imgRectangle56} />

                      <div className="-translate-x-1/2 absolute h-[507px] left-[calc(50%-0.82px)] shadow-[2.88px_2.88px_2.88px_0px_rgba(0,0,0,0.25)] top-[45.88px] w-[341px] profile-img-bottom-shadow"
                        data-node-id="1:731"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                          src={imgRectangle56}
                        />
                      </div>
                      <div
                        className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                        data-node-id="1:732"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                        }}
                      />
                            <AlumniCardBottomOverlay linkedinUrl="https://www.linkedin.com/in/shreyansh-pandey-54949730b">
        <div
                        className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                        data-node-id="1:733"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                          data-node-id="1:734"
                        >
                          <p className="leading-[1.25] mb-0">Shreyansh</p>
                          <p className="leading-[1.25]">Agarwal</p>
                        </div>
                      </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                    
<div className="col-1 h-[600px] ml-[869.76px] mt-0 relative group cursor-pointer row-1 w-[200px]"
                      data-node-id="1:735"
                    >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#feb9ce" />
                    <ProfileCardGhostOverlay src={imgRectangle57} />

                      <div className="-translate-x-1/2 absolute h-[586px] left-[calc(50%+12px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-0 w-[394px] profile-img-bottom-shadow"
                        data-node-id="1:736"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                          src={imgRectangle57}
                        />
                      </div>
                      <div
                        className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                        data-node-id="1:737"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                        }}
                      />
                            <AlumniCardBottomOverlay>
        <div
                        className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                        data-node-id="1:738"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                          data-node-id="1:739"
                        >
                          <p className="leading-[1.25] mb-0">Urvashi</p>
                          <p className="leading-[1.25]">Shukla</p>
                        </div>
                      </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                  </div>
                  <div
                    className="content-stretch flex gap-[17px] items-end relative shrink-0"
                    data-node-id="1:740"
                  >
                    <div
                      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
                      data-node-id="1:741"
                    >
                      
<div className="col-1 h-[600px] ml-[217px] mt-0 relative group cursor-pointer row-1 w-[200px]"
                        data-node-id="1:742"
                      >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#6663ff" />
                    <ProfileCardGhostOverlay src={imgRectangle58} />

                        <div className="-translate-x-1/2 absolute h-[600px] left-1/2 shadow-[10.161px_10.161px_10.161px_0px_rgba(0,0,0,0.25)] top-[-41px] w-[372px] profile-img-bottom-shadow"
                          data-node-id="1:743"
                        >
                          <img
                            alt=""
                            className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                            src={imgRectangle58}
                          />
                        </div>
                        <div
                          className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                          data-node-id="1:744"
                          style={{
                            backgroundImage:
                              "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                          }}
                        />
                              <AlumniCardBottomOverlay>
        <div
                          className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                          data-node-id="1:745"
                        >
                          <div
                            className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                            data-node-id="1:746"
                          >
                            <p className="leading-[1.25] mb-0">Yogita</p>
                            <p className="leading-[1.25]">Singh</p>
                          </div>
                        </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                      
<div className="col-1 h-[600px] ml-0 mt-[177px] relative group cursor-pointer row-1 w-[200px]"
                        data-node-id="1:747"
                      >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#feb9ce" />
                    <ProfileCardGhostOverlay src={imgRectangle59} />

                        <div className="-translate-x-1/2 absolute h-[436px] left-[calc(50%-0.5px)] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[61px] w-[293px] profile-img-bottom-shadow"
                          data-node-id="1:748"
                        >
                          <img
                            alt=""
                            className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                            src={imgRectangle59}
                          />
                        </div>
                        <div
                          className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                          data-node-id="1:749"
                          style={{
                            backgroundImage:
                              "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                          }}
                        />
                              <AlumniCardBottomOverlay>
        <div
                          className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                          data-node-id="1:750"
                        >
                          <div
                            className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                            data-node-id="1:751"
                          >
                            <p className="leading-[1.25] mb-0">Utsav</p>
                            <p className="leading-[1.25]">Upadhayay</p>
                          </div>
                        </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                    </div>
                    <div
                      className="bg-black border border-white/10 h-[600px] overflow-clip relative rounded-[300px] group cursor-pointer shrink-0 w-[200px]"
                      data-node-id="1:752"
                    >
                      <ProfileCardBackdrop color="#feb9ce" />
                      <ProfileCardGhostOverlay src={imgRectangle60} />
                      <div className="-translate-x-1/2 absolute h-[595px] left-[calc(50%-20.84px)] shadow-[4.32px_4.32px_4.32px_0px_rgba(0,0,0,0.25)] top-[22.88px] w-[400px] profile-img-bottom-shadow"
                        data-node-id="1:753"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                          src={imgRectangle60}
                        />
                      </div>
                      <div
                        className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                        data-node-id="1:754"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                        }}
                      />
                      <AlumniCardBottomOverlay>
                        <div
                          className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                          data-node-id="1:755"
                        >
                          <div
                            className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                            data-node-id="1:756"
                          >
                            <p className="leading-[1.25] mb-0">Vivek</p>
                            <p className="leading-[1.25]">Singh</p>
                          </div>
                        </div>
                      </AlumniCardBottomOverlay>
                    </div>
                    </div>
                  </ResponsiveWaveGrid>
                </div>
              </div>
              <p
                className="[word-break:break-word] font-['Satoshi',Arial,sans-serif] font-bold font-bold leading-[normal] min-w-full not-italic relative shrink-0 text-[40px] sm:text-[52px] md:text-[60px] text-center text-white tracking-[-2.4px] w-[min-content]"
                data-node-id="1:757"
              >
                2024
              </p>
              <div
                className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full"
                data-node-id="1:758"
                data-name="2023"
              >
                <div
                  className="content-stretch flex flex-col gap-[17px] items-start leading-[0] relative shrink-0"
                  data-node-id="1:759"
                >
                  <ResponsiveWaveGrid>
                    <div
                      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
                      data-node-id="1:760"
                    >
                    
<div className="col-1 h-[600px] ml-0 mt-0 relative group cursor-pointer row-1 w-[200px]"
                      data-node-id="1:761"
                    >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#feb9ce" />
                    <ProfileCardGhostOverlay src={imgRectangle61} />

                      <div className="-translate-x-1/2 absolute h-[586px] left-[calc(50%+0.08px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[13.88px] w-[394px] profile-img-bottom-shadow"
                        data-node-id="1:762"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                          src={imgRectangle61}
                        />
                      </div>
                      <div
                        className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                        data-node-id="1:763"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                        }}
                      />
                            <AlumniCardBottomOverlay>
        <div
                        className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                        data-node-id="1:764"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                          data-node-id="1:765"
                        >
                          <p className="leading-[1.25] mb-0">Aditi</p>
                          <p className="leading-[1.25]">Sahu</p>
                        </div>
                      </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                    
<div className="col-1 h-[600px] ml-[217px] mt-[177px] relative group cursor-pointer row-1 w-[200px]"
                      data-node-id="1:766"
                    >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#b3fd44" />
                    <ProfileCardGhostOverlay src={imgRectangle62} />

                      <div className="-translate-x-1/2 absolute h-[586px] left-[calc(50%+0.08px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[-0.12px] w-[394px] profile-img-bottom-shadow"
                        data-node-id="1:767"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                          src={imgRectangle62}
                        />
                      </div>
                      <div
                        className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                        data-node-id="1:768"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                        }}
                      />
                            <AlumniCardBottomOverlay>
        <div
                        className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                        data-node-id="1:769"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                          data-node-id="1:770"
                        >
                          <p className="leading-[1.25]">Anadee</p>
                        </div>
                      </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                    
<div className="col-1 h-[600px] ml-[434px] mt-0 relative group cursor-pointer row-1 w-[200px]"
                      data-node-id="1:771"
                    >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#6663ff" />
                    <ProfileCardGhostOverlay src={imgRectangle63} />

                      <div className="-translate-x-1/2 absolute h-[528px] left-[calc(50%-0.42px)] shadow-[4.32px_4.32px_4.32px_0px_rgba(0,0,0,0.25)] top-[-5.12px] w-[327px] profile-img-bottom-shadow"
                        data-node-id="1:772"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                          src={imgRectangle63}
                        />
                      </div>
                      <div
                        className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                        data-node-id="1:773"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                        }}
                      />
                            <AlumniCardBottomOverlay>
        <div
                        className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                        data-node-id="1:774"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                          data-node-id="1:775"
                        >
                          <p className="leading-[1.25] mb-0">Anant</p>
                          <p className="leading-[1.25]">Mishra</p>
                        </div>
                      </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                    
<div className="col-1 h-[600px] ml-[868px] mt-0 relative group cursor-pointer row-1 w-[200px]"
                      data-node-id="1:776"
                    >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#feb9ce" />
                    <ProfileCardGhostOverlay src={imgRectangle64} />

                      <div className="-translate-x-1/2 absolute h-[567px] left-[calc(50%+17.58px)] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[-43.12px] w-[381px] profile-img-bottom-shadow"
                        data-node-id="1:777"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                          src={imgRectangle64}
                        />
                      </div>
                      <div
                        className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                        data-node-id="1:778"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                        }}
                      />
                            <AlumniCardBottomOverlay>
        <div
                        className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                        data-node-id="1:779"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                          data-node-id="1:780"
                        >
                          <p className="leading-[1.25] mb-0">Hiteshwaram</p>
                          <p className="leading-[1.25]">Dubey</p>
                        </div>
                      </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                    
<div className="col-1 h-[600px] ml-[651px] mt-[177px] relative group cursor-pointer row-1 w-[200px]"
                      data-node-id="1:781"
                    >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#ffc931" />
                    <ProfileCardGhostOverlay src={imgRectangle65} />

                      <div className="-translate-x-1/2 absolute h-[407px] left-[calc(50%-36.42px)] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[68.88px] w-[273px] profile-img-bottom-shadow"
                        data-node-id="1:782"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                          src={imgRectangle65}
                        />
                      </div>
                      <div
                        className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                        data-node-id="1:783"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                        }}
                      />
                            <AlumniCardBottomOverlay>
        <div
                        className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                        data-node-id="1:784"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                          data-node-id="1:785"
                        >
                          <p className="leading-[1.25] mb-0">Dev</p>
                          <p className="leading-[1.25]">Batra</p>
                        </div>
                      </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                  </div>
                  <div
                    className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
                    data-node-id="1:786"
                  >
                    
<div className="col-1 h-[600px] ml-0 mt-0 relative group cursor-pointer row-1 w-[200px]"
                      data-node-id="1:787"
                    >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#feb9ce" />
                    <ProfileCardGhostOverlay src={imgRectangle66} />

                      <div className="-translate-x-1/2 absolute h-[586px] left-[calc(50%-39px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[14px] w-[394px] profile-img-bottom-shadow"
                        data-node-id="1:788"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                          src={imgRectangle66}
                        />
                      </div>
                      <div
                        className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                        data-node-id="1:789"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                        }}
                      />
                            <AlumniCardBottomOverlay>
        <div
                        className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                        data-node-id="1:790"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                          data-node-id="1:791"
                        >
                          <p className="leading-[1.25] mb-0">Janvi</p>
                          <p className="leading-[1.25]">Soni</p>
                        </div>
                      </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                    
<div className="col-1 h-[600px] ml-[217px] mt-[177px] relative group cursor-pointer row-1 w-[200px]"
                      data-node-id="1:792"
                    >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#b3fd44" />
                    <ProfileCardGhostOverlay src={imgRectangle67} />

                      <div className="-translate-x-1/2 absolute h-[586px] left-[calc(50%+24px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[41px] w-[394px] profile-img-bottom-shadow"
                        data-node-id="1:793"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                          src={imgRectangle67}
                        />
                      </div>
                      <div
                        className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                        data-node-id="1:794"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                        }}
                      />
                            <AlumniCardBottomOverlay>
        <div
                        className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                        data-node-id="1:795"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                          data-node-id="1:796"
                        >
                          <p className="leading-[1.25] mb-0">Jayati</p>
                          <p className="leading-[1.25]">Dixit</p>
                        </div>
                      </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                    
<div className="col-1 h-[600px] ml-[434px] mt-0 relative group cursor-pointer row-1 w-[200px]"
                      data-node-id="1:797"
                    >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#6663ff" />
                    <ProfileCardGhostOverlay src={imgRectangle68} />

                      <div className="-translate-x-1/2 absolute h-[528px] left-[calc(50%-0.42px)] shadow-[4.32px_4.32px_4.32px_0px_rgba(0,0,0,0.25)] top-[-5.12px] w-[327px] profile-img-bottom-shadow"
                        data-node-id="1:798"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                          src={imgRectangle68}
                        />
                      </div>
                      <div
                        className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                        data-node-id="1:799"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                        }}
                      />
                            <AlumniCardBottomOverlay linkedinUrl="https://www.linkedin.com/in/om-tripathi-67332b26a/">
        <div
                        className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                        data-node-id="1:800"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                          data-node-id="1:801"
                        >
                          <p className="leading-[1.25] mb-0">Om</p>
                          <p className="leading-[1.25]">Kumar</p>
                        </div>
                      </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                    
<div className="col-1 h-[600px] ml-[868px] mt-0 relative group cursor-pointer row-1 w-[200px]"
                      data-node-id="1:802"
                    >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#feb9ce" />
                    <ProfileCardGhostOverlay src={imgRectangle69} />

                      <div className="-translate-x-1/2 absolute h-[494px] left-1/2 shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[53px] w-[332px] profile-img-bottom-shadow"
                        data-node-id="1:803"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                          src={imgRectangle69}
                        />
                      </div>
                      <div
                        className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                        data-node-id="1:804"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                        }}
                      />
                            <AlumniCardBottomOverlay>
        <div
                        className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                        data-node-id="1:805"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                          data-node-id="1:806"
                        >
                          <p className="leading-[1.25] mb-0">Pavitra</p>
                          <p className="leading-[1.25]">Lalwani</p>
                        </div>
                      </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                    
<div className="col-1 h-[600px] ml-[651px] mt-[177px] relative group cursor-pointer row-1 w-[200px]"
                      data-node-id="1:807"
                    >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#ffc931" />
                    <ProfileCardGhostOverlay src={imgRectangle70} />

                      <div className="-translate-x-1/2 absolute h-[503px] left-[calc(50%+16px)] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[26px] w-[338px] profile-img-bottom-shadow"
                        data-node-id="1:808"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                          src={imgRectangle70}
                        />
                      </div>
                      <div
                        className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                        data-node-id="1:809"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                        }}
                      />
                            <AlumniCardBottomOverlay>
        <div
                        className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                        data-node-id="1:810"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                          data-node-id="1:811"
                        >
                          <p className="leading-[1.25] mb-0">Parth</p>
                          <p className="leading-[1.25]">Agarwal</p>
                        </div>
                      </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                    </div>
                  </ResponsiveWaveGrid>
                </div>
              </div>
              <p
                className="[word-break:break-word] font-['Satoshi',Arial,sans-serif] font-bold font-bold leading-[normal] min-w-full not-italic relative shrink-0 text-[40px] sm:text-[52px] md:text-[60px] text-center text-white tracking-[-2.4px] w-[min-content]"
                data-node-id="1:812"
              >
                2023
              </p>
              <div
                className="content-stretch flex flex-col gap-[17px] items-start leading-[0] relative shrink-0"
                data-node-id="1:813"
              >
                <ResponsiveWaveGrid>
                  <div
                    className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
                    data-node-id="1:814"
                  >
                  
<div className="col-1 h-[600px] ml-0 mt-0 relative group cursor-pointer row-1 w-[200px]"
                    data-node-id="1:815"
                  >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#feb9ce" />
                    <ProfileCardGhostOverlay src={imgRectangle71} />

                    <div className="-translate-x-1/2 absolute h-[380.7px] left-[calc(50%-28.58px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[80.88px] w-[255.83px] profile-img-bottom-shadow"
                      data-node-id="1:816"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                        src={imgRectangle71}
                      />
                    </div>
                    <div
                      className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                      data-node-id="1:817"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                      }}
                    />
                          <AlumniCardBottomOverlay>
        <div
                      className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                      data-node-id="1:818"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                        data-node-id="1:819"
                      >
                        <p className="leading-[1.25] mb-0">Kapil</p>
                        <p className="leading-[1.25]">Arya</p>
                      </div>
                    </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                  
<div className="col-1 h-[600px] ml-[434.88px] mt-0 relative group cursor-pointer row-1 w-[200px]"
                    data-node-id="1:820"
                  >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#6663ff" />
                    <ProfileCardGhostOverlay src={imgRectangle72} />

                    <div className="-translate-x-1/2 absolute h-[467px] left-[calc(50%+23.62px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[65.88px] w-[314px] profile-img-bottom-shadow"
                      data-node-id="1:821"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                        src={imgRectangle72}
                      />
                    </div>
                    <div
                      className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                      data-node-id="1:822"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                      }}
                    />
                          <AlumniCardBottomOverlay>
        <div
                      className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                      data-node-id="1:823"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                        data-node-id="1:824"
                      >
                        <p className="leading-[1.25] mb-0">Shruti</p>
                        <p className="leading-[1.25]">Agarwal</p>
                      </div>
                    </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                  <div
                    className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[217.44px] mt-[177.12px] place-items-start relative row-1"
                    data-node-id="1:825"
                  >
                    
<div className="col-1 h-[600px] ml-0 mt-0 relative group cursor-pointer row-1 w-[200px]"
                      data-node-id="1:826"
                    >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#b3fd44" />
                    <ProfileCardGhostOverlay src={imgRectangle73} />

                      <div className="-translate-x-1/2 absolute h-[455px] left-[calc(50%+16.56px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[33.76px] w-[305px] profile-img-bottom-shadow"
                        data-node-id="1:827"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                          src={imgRectangle73}
                        />
                      </div>
                      <div
                        className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                        data-node-id="1:828"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                        }}
                      />
                            <AlumniCardBottomOverlay linkedinUrl="https://www.linkedin.com/in/ayush-vashisth-4600a5338">
        <div
                        className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                        data-node-id="1:829"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                          data-node-id="1:830"
                        >
                          <p className="leading-[1.25] mb-0">Ayush</p>
                          <p className="leading-[1.25]">Kumar</p>
                        </div>
                      </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                  </div>
                  
<div className="col-1 h-[600px] ml-[652.32px] mt-[177.12px] relative group cursor-pointer row-1 w-[200px]"
                    data-node-id="1:831"
                  >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#ffc931" />
                    <ProfileCardGhostOverlay src={imgRectangle74} />

                    <div className="-translate-x-1/2 absolute h-[477px] left-[calc(50%+18.18px)] shadow-[2.88px_2.88px_2.88px_0px_rgba(0,0,0,0.25)] top-[80.76px] w-[320px] profile-img-bottom-shadow"
                      data-node-id="1:832"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                        src={imgRectangle74}
                      />
                    </div>
                    <div
                      className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                      data-node-id="1:833"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                      }}
                    />
                          <AlumniCardBottomOverlay>
        <div
                      className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                      data-node-id="1:834"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                        data-node-id="1:835"
                      >
                        <p className="leading-[1.25] mb-0">Anurag</p>
                        <p className="leading-[1.25]">Srivastava</p>
                      </div>
                    </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                  
<div className="col-1 h-[600px] ml-[869.76px] mt-0 relative group cursor-pointer row-1 w-[200px]"
                    data-node-id="1:836"
                  >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#feb9ce" />
                    <ProfileCardGhostOverlay src={imgRectangle75} />

                    <div className="-translate-x-1/2 absolute h-[486px] left-[calc(50%+18.74px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[56.88px] w-[326px] profile-img-bottom-shadow"
                      data-node-id="1:837"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                        src={imgRectangle75}
                      />
                    </div>
                    <div
                      className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                      data-node-id="1:838"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                      }}
                    />
                          <AlumniCardBottomOverlay>
        <div
                      className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                      data-node-id="1:839"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                        data-node-id="1:840"
                      >
                        <p className="leading-[1.25] mb-0">Ojuswi</p>
                        <p className="leading-[1.25]">Rastogi</p>
                      </div>
                    </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                  
<div className="col-1 h-[600px] ml-[1095.84px] mt-[179.12px] relative group cursor-pointer row-1 w-[200px]"
                    data-node-id="1:841"
                  >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#b3fd44" />
                    <ProfileCardGhostOverlay src={imgRectangle76} />

                    <div className="-translate-x-1/2 absolute h-[595px] left-[calc(50%-21.34px)] shadow-[4.32px_4.32px_4.32px_0px_rgba(0,0,0,0.25)] top-[-14.24px] w-[400px] profile-img-bottom-shadow"
                      data-node-id="1:842"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                        src={imgRectangle76}
                      />
                    </div>
                    <div
                      className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                      data-node-id="1:843"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                      }}
                    />
                          <AlumniCardBottomOverlay>
        <div
                      className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                      data-node-id="1:844"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                        data-node-id="1:845"
                      >
                        <p className="leading-[1.25] mb-0">Vaibhav</p>
                        <p className="leading-[1.25]">Shukla</p>
                      </div>
                    </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                </div>
                <div
                  className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
                  data-node-id="1:846"
                >
                  
<div className="col-1 h-[600px] ml-0 mt-0 relative group cursor-pointer row-1 w-[200px]"
                    data-node-id="1:847"
                  >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#feb9ce" />
                    <ProfileCardGhostOverlay src={imgRectangle77} />

                    <div className="-translate-x-1/2 absolute h-[416px] left-[calc(50%-27px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[73px] w-[280px] profile-img-bottom-shadow"
                      data-node-id="1:848"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                        src={imgRectangle77}
                      />
                    </div>
                    <div
                      className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                      data-node-id="1:849"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                      }}
                    />
                          <AlumniCardBottomOverlay>
        <div
                      className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                      data-node-id="1:850"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                        data-node-id="1:851"
                      >
                        <p className="leading-[1.25] mb-0">Aditee</p>
                        <p className="leading-[1.25]">Singh</p>
                      </div>
                    </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                  
<div className="col-1 h-[600px] ml-[434.88px] mt-0 relative group cursor-pointer row-1 w-[200px]"
                    data-node-id="1:852"
                  >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#6663ff" />
                    <ProfileCardGhostOverlay src={imgRectangle78} />

                    <div className="-translate-x-1/2 absolute h-[423px] left-[calc(50%-53.88px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[48px] w-[284px] profile-img-bottom-shadow"
                      data-node-id="1:853"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                        src={imgRectangle78}
                      />
                    </div>
                    <div
                      className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                      data-node-id="1:854"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                      }}
                    />
                          <AlumniCardBottomOverlay>
        <div
                      className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                      data-node-id="1:855"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                        data-node-id="1:856"
                      >
                        <p className="leading-[1.25] mb-0">Mihir</p>
                        <p className="leading-[1.25]">Sahai</p>
                      </div>
                    </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                  <div
                    className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[217.44px] mt-[177.12px] place-items-start relative row-1"
                    data-node-id="1:857"
                  >
                    
<div className="col-1 h-[600px] ml-0 mt-0 relative group cursor-pointer row-1 w-[200px]"
                      data-node-id="1:858"
                    >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#b3fd44" />
                    <ProfileCardGhostOverlay src={imgRectangle79} />

                      <div className="-translate-x-1/2 absolute h-[455px] left-[calc(50%+0.06px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[33.88px] w-[305px] profile-img-bottom-shadow"
                        data-node-id="1:859"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                          src={imgRectangle79}
                        />
                      </div>
                      <div
                        className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                        data-node-id="1:860"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                        }}
                      />
                            <AlumniCardBottomOverlay>
        <div
                        className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                        data-node-id="1:861"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                          data-node-id="1:862"
                        >
                          <p className="leading-[1.25] mb-0">Naves</p>
                          <p className="leading-[1.25]">Akhtar</p>
                        </div>
                      </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                  </div>
                  
<div className="col-1 h-[600px] ml-[652.32px] mt-[177.12px] relative group cursor-pointer row-1 w-[200px]"
                    data-node-id="1:863"
                  >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#ffc931" />
                    <ProfileCardGhostOverlay src={imgRectangle80} />

                    <div className="-translate-x-1/2 absolute h-[556px] left-[calc(50%+15.68px)] shadow-[2.88px_2.88px_2.88px_0px_rgba(0,0,0,0.25)] top-[18.88px] w-[374px] profile-img-bottom-shadow"
                      data-node-id="1:864"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                        src={imgRectangle80}
                      />
                    </div>
                    <div
                      className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                      data-node-id="1:865"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                      }}
                    />
                          <AlumniCardBottomOverlay>
        <div
                      className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                      data-node-id="1:866"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                        data-node-id="1:867"
                      >
                        <p className="leading-[1.25] mb-0">Paarth</p>
                        <p className="leading-[1.25]">Agarwal</p>
                      </div>
                    </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                  
<div className="col-1 h-[600px] ml-[869.76px] mt-0 relative group cursor-pointer row-1 w-[200px]"
                    data-node-id="1:868"
                  >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#feb9ce" />
                    <ProfileCardGhostOverlay src={imgRectangle81} />

                    <div className="-translate-x-1/2 absolute h-[586px] left-[calc(50%+0.24px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[33px] w-[394px] profile-img-bottom-shadow"
                      data-node-id="1:869"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                        src={imgRectangle81}
                      />
                    </div>
                    <div
                      className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                      data-node-id="1:870"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                      }}
                    />
                          <AlumniCardBottomOverlay linkedinUrl="https://www.linkedin.com/in/shreyansh-pandey-54949730b">
        <div
                      className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                      data-node-id="1:871"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                        data-node-id="1:872"
                      >
                        <p className="leading-[1.25] mb-0">Shrey</p>
                        <p className="leading-[1.25]">Jain</p>
                      </div>
                    </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                  
<div className="col-1 h-[600px] ml-[1095.84px] mt-[179.12px] relative group cursor-pointer row-1 w-[200px]"
                    data-node-id="1:873"
                  >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#b3fd44" />
                    <ProfileCardGhostOverlay src={imgRectangle82} />

                    <div className="-translate-x-1/2 absolute h-[507px] left-[calc(50%+50.66px)] shadow-[4.32px_4.32px_4.32px_0px_rgba(0,0,0,0.25)] top-[20.88px] w-[341px] profile-img-bottom-shadow"
                      data-node-id="1:874"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                        src={imgRectangle82}
                      />
                    </div>
                    <div
                      className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                      data-node-id="1:875"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                      }}
                    />
                          <AlumniCardBottomOverlay linkedinUrl="https://www.linkedin.com/in/shivamgoyal0308?utm_source=share_via&utm_content=profile&utm_medium=member_android">
        <div
                      className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                      data-node-id="1:876"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                        data-node-id="1:877"
                      >
                        <p className="leading-[1.25] mb-0">Shivam</p>
                        <p className="leading-[1.25]">Singh</p>
                      </div>
                    </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                  </div>
                </ResponsiveWaveGrid>
              </div>
              <p
                className="[word-break:break-word] font-['Satoshi',Arial,sans-serif] font-bold font-bold leading-[normal] min-w-full not-italic relative shrink-0 text-[40px] sm:text-[52px] md:text-[60px] text-center text-white tracking-[-2.4px] w-[min-content]"
                data-node-id="1:878"
              >
                2022
              </p>
              <div
                className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full"
                data-node-id="1:879"
                data-name="2022"
              >
                <div
                  className="content-stretch flex flex-col gap-[17px] items-start leading-[0] relative shrink-0"
                  data-node-id="1:880"
                >
                  <ResponsiveWaveGrid>
                    <div
                      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
                      data-node-id="1:881"
                    >
                    
<div className="col-1 h-[600px] ml-0 mt-0 relative group cursor-pointer row-1 w-[200px]"
                      data-node-id="1:882"
                    >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#feb9ce" />
                    <ProfileCardGhostOverlay src={imgRectangle83} />

                      <div className="-translate-x-1/2 absolute h-[514px] left-[calc(50%-15.84px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[26.52px] w-[346px] profile-img-bottom-shadow"
                        data-node-id="1:883"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                          src={imgRectangle83}
                        />
                      </div>
                      <div
                        className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                        data-node-id="1:884"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                        }}
                      />
                            <AlumniCardBottomOverlay>
        <div
                        className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                        data-node-id="1:885"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                          data-node-id="1:886"
                        >
                          <p className="leading-[1.25] mb-0">Devansh</p>
                          <p className="leading-[1.25]">Chaudhary</p>
                        </div>
                      </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                    
<div className="col-1 h-[600px] ml-[217px] mt-[177px] relative group cursor-pointer row-1 w-[200px]"
                      data-node-id="1:887"
                    >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#b3fd44" />
                    <ProfileCardGhostOverlay src={imgRectangle84} />

                      <div className="-translate-x-1/2 absolute h-[586px] left-[calc(50%+22.16px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[-0.48px] w-[394px] profile-img-bottom-shadow"
                        data-node-id="1:888"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                          src={imgRectangle84}
                        />
                      </div>
                      <div
                        className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                        data-node-id="1:889"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                        }}
                      />
                            <AlumniCardBottomOverlay>
        <div
                        className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                        data-node-id="1:890"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                          data-node-id="1:891"
                        >
                          <p className="leading-[1.25] mb-0">Devansh</p>
                          <p className="leading-[1.25]">Gera</p>
                        </div>
                      </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                    
<div className="col-1 h-[600px] ml-[434px] mt-0 relative group cursor-pointer row-1 w-[200px]"
                      data-node-id="1:892"
                    >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#6663ff" />
                    <ProfileCardGhostOverlay src={imgRectangle85} />

                      <div className="-translate-x-1/2 absolute h-[542px] left-[calc(50%+5.16px)] shadow-[4.32px_4.32px_4.32px_0px_rgba(0,0,0,0.25)] top-[-31.48px] w-[336px] profile-img-bottom-shadow"
                        data-node-id="1:893"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                          src={imgRectangle85}
                        />
                      </div>
                      <div
                        className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                        data-node-id="1:894"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                        }}
                      />
                            <AlumniCardBottomOverlay>
        <div
                        className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                        data-node-id="1:895"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                          data-node-id="1:896"
                        >
                          <p className="leading-[1.25] mb-0">Mansi</p>
                          <p className="leading-[1.25]">Gupta</p>
                        </div>
                      </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                    
<div className="col-1 h-[600px] ml-[868px] mt-0 relative group cursor-pointer row-1 w-[200px]"
                      data-node-id="1:897"
                    >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#feb9ce" />
                    <ProfileCardGhostOverlay src={imgRectangle86} />

                      <div className="-translate-x-1/2 absolute h-[509px] left-[calc(50%+0.16px)] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[-12.48px] w-[342px] profile-img-bottom-shadow"
                        data-node-id="1:898"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                          src={imgRectangle86}
                        />
                      </div>
                      <div
                        className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                        data-node-id="1:899"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                        }}
                      />
                            <AlumniCardBottomOverlay>
        <div
                        className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                        data-node-id="1:900"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                          data-node-id="1:901"
                        >
                          <p className="leading-[1.25] mb-0">Prajwal</p>
                          <p className="leading-[1.25]">Shirur</p>
                        </div>
                      </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                    
<div className="col-1 h-[600px] ml-[651px] mt-[177px] relative group cursor-pointer row-1 w-[200px]"
                      data-node-id="1:902"
                    >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#ffc931" />
                    <ProfileCardGhostOverlay src={imgRectangle87} />

                      <div className="-translate-x-1/2 absolute h-[407px] left-[calc(50%+0.66px)] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[68.52px] w-[273px] profile-img-bottom-shadow"
                        data-node-id="1:903"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                          src={imgRectangle87}
                        />
                      </div>
                      <div
                        className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                        data-node-id="1:904"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                        }}
                      />
                            <AlumniCardBottomOverlay>
        <div
                        className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                        data-node-id="1:905"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                          data-node-id="1:906"
                        >
                          <p className="leading-[1.25] mb-0">Mohamed</p>
                          <p className="leading-[1.25] mb-0">Zaid</p>
                          <p className="leading-[1.25]">Ansari</p>
                        </div>
                      </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                  </div>
                  <div
                    className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
                    data-node-id="1:907"
                  >
                    
<div className="col-1 h-[600px] ml-0 mt-0 relative group cursor-pointer row-1 w-[200px]"
                      data-node-id="1:908"
                    >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#feb9ce" />
                    <ProfileCardGhostOverlay src={imgRectangle88} />

                      <div className="-translate-x-1/2 absolute h-[462px] left-[calc(50%+17.66px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[13.52px] w-[311px] profile-img-bottom-shadow"
                        data-node-id="1:909"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                          src={imgRectangle88}
                        />
                      </div>
                      <div
                        className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                        data-node-id="1:910"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                        }}
                      />
                            <AlumniCardBottomOverlay>
        <div
                        className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                        data-node-id="1:911"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                          data-node-id="1:912"
                        >
                          <p className="leading-[1.25] mb-0">Pranav</p>
                          <p className="leading-[1.25]">Kumar</p>
                        </div>
                      </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                    
<div className="col-1 h-[600px] ml-[217px] mt-[177px] relative group cursor-pointer row-1 w-[200px]"
                      data-node-id="1:913"
                    >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#b3fd44" />
                    <ProfileCardGhostOverlay src={imgRectangle89} />

                      <div className="-translate-x-1/2 absolute h-[586px] left-[calc(50%+15.16px)] shadow-[3.6px_3.6px_3.6px_0px_rgba(0,0,0,0.25)] top-[28.52px] w-[394px] profile-img-bottom-shadow"
                        data-node-id="1:914"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                          src={imgRectangle89}
                        />
                      </div>
                      <div
                        className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                        data-node-id="1:915"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                        }}
                      />
                            <AlumniCardBottomOverlay>
        <div
                        className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                        data-node-id="1:916"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                          data-node-id="1:917"
                        >
                          <p className="leading-[1.25] mb-0">Rajat</p>
                          <p className="leading-[1.25]">Verma</p>
                        </div>
                      </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                    
<div className="col-1 h-[600px] ml-[434px] mt-0 relative group cursor-pointer row-1 w-[200px]"
                      data-node-id="1:918"
                    >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#6663ff" />
                    <ProfileCardGhostOverlay src={imgRectangle90} />

                      <div className="-translate-x-1/2 absolute h-[528px] left-[calc(50%+0.66px)] shadow-[4.32px_4.32px_4.32px_0px_rgba(0,0,0,0.25)] top-[35.52px] w-[327px] profile-img-bottom-shadow"
                        data-node-id="1:919"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                          src={imgRectangle90}
                        />
                      </div>
                      <div
                        className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                        data-node-id="1:920"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                        }}
                      />
                            <AlumniCardBottomOverlay>
        <div
                        className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                        data-node-id="1:921"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                          data-node-id="1:922"
                        >
                          <p className="leading-[1.25] mb-0">Saksham</p>
                          <p className="leading-[1.25]">Raghuvanshi</p>
                        </div>
                      </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                    
<div className="col-1 h-[600px] ml-[868px] mt-0 relative group cursor-pointer row-1 w-[200px]"
                      data-node-id="1:923"
                    >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#feb9ce" />
                    <ProfileCardGhostOverlay src={imgRectangle91} />

                      <div className="-translate-x-1/2 absolute h-[494px] left-[calc(50%+0.16px)] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[-5.48px] w-[332px] profile-img-bottom-shadow"
                        data-node-id="1:924"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                          src={imgRectangle91}
                        />
                      </div>
                      <div
                        className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                        data-node-id="1:925"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                        }}
                      />
                            <AlumniCardBottomOverlay>
        <div
                        className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                        data-node-id="1:926"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                          data-node-id="1:927"
                        >
                          <p className="leading-[1.25] mb-0">Viral</p>
                          <p className="leading-[1.25]">Luke</p>
                        </div>
                      </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                    
<div className="col-1 h-[600px] ml-[651px] mt-[177px] relative group cursor-pointer row-1 w-[200px]"
                      data-node-id="1:928"
                    >
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">

                    <ProfileCardBackdrop color="#ffc931" />
                    <ProfileCardGhostOverlay src={imgRectangle92} />

                      <div className="-translate-x-1/2 absolute h-[503px] left-[calc(50%+0.16px)] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[-14.48px] w-[338px] profile-img-bottom-shadow"
                        data-node-id="1:929"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]"
                          src={imgRectangle92}
                        />
                      </div>
                      <div
                        className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px]"
                        data-node-id="1:930"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
                        }}
                      />
                            <AlumniCardBottomOverlay>
        <div
                        className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[427px]"
                        data-node-id="1:931"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap"
                          data-node-id="1:932"
                        >
                          <p className="leading-[1.25] mb-0">Sharad</p>
                          <p className="leading-[1.25]">Mehrotra</p>
                        </div>
                      </div>
      </AlumniCardBottomOverlay>
    </div>
  </div>
</div>
                  </div>
                </ResponsiveWaveGrid>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer hideParticleLogo />
    </div>
  </div>
  )
}
