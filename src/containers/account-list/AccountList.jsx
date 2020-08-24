import React, { useState, useEffect } from "react"
import Filter from "../../components/filter/Filter"
import Pagination from "../../components/pagination/Pagination"
import List from "../../components/list/List"
import "./AccountList.scss"
import Axios from "axios"

// const dataUsers = [
//   {
//     id: "15243994339822322",
//     avatar:
//       "https://kingcontent.mediacdn.vn/2019/8/23/ung-hoang-phuc-15665402436141351202194.jpeg",
//     fullName: "Ưng Hoàng Phúc",
//     createdBy: "15241887819300928",
//     status: 1,
//     labelMode: null,
//     type: 2,
//     phoneOwner: "0907993979",
//     ownerStatus: 1,
//     class: 5,
//     classType: null,
//     notifySettings: "",
//     configExtension: "{}",
//     mediaChannel: "122306320618491904",
//   },
//   {
//     id: "15244695961404136",
//     avatar:
//       "https://kingcontent.mediacdn.vn/2019/8/23/eatenbylong-15665421315501474427911-crop-15665421616591811446011.jpg",
//     fullName: "EatenbyLong",
//     createdBy: "15241890469595526",
//     status: 1,
//     labelMode: null,
//     type: 2,
//     phoneOwner: "0888126369",
//     ownerStatus: 1,
//     class: 3,
//     classType: 31,
//     notifySettings: "",
//     configExtension: "{}",
//     mediaChannel: "122306318814941184",
//   },
//   {
//     id: "15244820052527796",
//     avatar:
//       "https://kingcontent.mediacdn.vn/crop/1,0_959,958/2019/8/23/co-em-trendy-1566541777009276123713.jpg",
//     fullName: "Cô em Trendy",
//     createdBy: "15241891289039322",
//     status: 1,
//     labelMode: null,
//     type: 2,
//     phoneOwner: "0989631777",
//     ownerStatus: 1,
//     class: 3,
//     classType: 31,
//     notifySettings: "",
//     configExtension: "{}",
//     mediaChannel: "122306316973641728",
//   },
//   {
//     id: "15244852287851064",
//     avatar:
//       "https://kingcontent.lotuscdn.vn/crop/141,0_861,720/2019/9/23/3613733310209690677102143805081260174082048n-15692124770471555360297.jpg",
//     fullName: "SHINPHAMM",
//     createdBy: "15241891564814794",
//     status: 1,
//     labelMode: null,
//     type: 2,
//     phoneOwner: "0988781395",
//     ownerStatus: 1,
//     class: 3,
//     classType: 0,
//     notifySettings: "",
//     configExtension: "{}",
//     mediaChannel: "122306314985541632",
//   },
//   {
//     id: "15245063028016075",
//     avatar:
//       "https://kingcontent.mediacdn.vn/2019/8/23/mini-anti-1566543345890298456665.png",
//     fullName: "MiNi Anti Official",
//     createdBy: "15241892628614040",
//     status: 1,
//     labelMode: null,
//     type: 2,
//     phoneOwner: "0961829934",
//     ownerStatus: 1,
//     class: 3,
//     classType: null,
//     notifySettings: "",
//     configExtension: "{}",
//     mediaChannel: "122306312909361152",
//   },
//   {
//     id: "15245169300144756",
//     avatar:
//       "https://kingcontent.mediacdn.vn/2019/8/23/pantv-15665437595621913100665.jpg",
//     fullName: "PanTV",
//     createdBy: "15241893481612215",
//     status: 1,
//     labelMode: null,
//     type: 2,
//     phoneOwner: "0935496388",
//     ownerStatus: 1,
//     class: 3,
//     classType: null,
//     notifySettings: "",
//     configExtension: "{}",
//     mediaChannel: "122306311290359808",
//   },
//   {
//     id: "15245251817833258",
//     avatar:
//       "https://kingcontent.mediacdn.vn/2019/8/23/michelle-ngn-156654329939133678285.jpg",
//     fullName: "Michelle Ngn",
//     createdBy: "15241893589614777",
//     status: 1,
//     labelMode: null,
//     type: 2,
//     phoneOwner: "0902761198",
//     ownerStatus: 1,
//     class: 253,
//     classType: null,
//     notifySettings: "",
//     configExtension: "{}",
//     mediaChannel: "122306309373562880",
//   },
//   {
//     id: "15245444193274223",
//     avatar:
//       "https://kingcontent.mediacdn.vn/crop/0,8_944,952/2019/8/26/pham-thanh-long-1566787730473666742544.jpg",
//     fullName: "Phạm Thành Long",
//     createdBy: "15241895100106756",
//     status: 1,
//     labelMode: null,
//     type: 2,
//     phoneOwner: "0904790838",
//     ownerStatus: 1,
//     class: 2,
//     classType: null,
//     notifySettings: "",
//     configExtension: "{}",
//     mediaChannel: "122306307641315328",
//   },
//   {
//     id: "15245489427794698",
//     avatar:
//       "https://kingcontent.mediacdn.vn/crop/0,0_850,850/2019/8/23/tran-quoc-khanh-15665443188451020827050.jpg",
//     fullName: "Trần Quốc Khánh",
//     createdBy: "15241895292502027",
//     status: 1,
//     labelMode: null,
//     type: 2,
//     phoneOwner: "0963186789",
//     ownerStatus: 1,
//     class: 2,
//     classType: null,
//     notifySettings: "",
//     configExtension: "{}",
//     mediaChannel: "122306306278166528",
//   },
//   {
//     id: "15245570049656908",
//     avatar:
//       "https://kingcontent.mediacdn.vn/2019/8/23/con-tho-1566541851230698778235.jpg",
//     fullName: "Con Thỏ",
//     createdBy: "15241896315912449",
//     status: 1,
//     labelMode: null,
//     type: 2,
//     phoneOwner: "0973012194",
//     ownerStatus: 1,
//     class: 3,
//     classType: null,
//     notifySettings: "",
//     configExtension: "{}",
//     mediaChannel: "122306304780800000",
//   },
//   {
//     id: "15587976375244127",
//     avatar:
//       "https://kingcontent.mediacdn.vn/crop/4,0_956,952/2019/8/27/18527918102112639502674154480419834883994033n-15669090194901339635285.jpg",
//     fullName: "Tiếng Trung Cầm Xu",
//     createdBy: "15587660900934614",
//     status: 1,
//     labelMode: null,
//     type: 2,
//     phoneOwner: "0932314298",
//     ownerStatus: 1,
//     class: 2,
//     classType: null,
//     notifySettings: "",
//     configExtension: "{}",
//     mediaChannel: "122306303002415104",
//   },
//   {
//     id: "15857924011274142",
//     avatar: "",
//     fullName: "Nhạc Chế Phố Núi",
//     createdBy: "15241882155436670",
//     status: 1,
//     labelMode: null,
//     type: 2,
//     phoneOwner: "0963073847",
//     ownerStatus: 1,
//     class: 3,
//     classType: null,
//     notifySettings: "",
//     configExtension: "{}",
//     mediaChannel: "122306300590690304",
//   },
//   {
//     id: "15858077243878576",
//     avatar:
//       "https://kingcontent.mediacdn.vn/2019/8/24/mc-thanh-ngan-1566617841976255640583.jpg",
//     fullName: "MC Thanh Ngân",
//     createdBy: "15241882902022170",
//     status: 1,
//     labelMode: null,
//     type: 2,
//     phoneOwner: "0965102102",
//     ownerStatus: 1,
//     class: 3,
//     classType: null,
//     notifySettings: "",
//     configExtension: "{}",
//     mediaChannel: "122306296840982528",
//   },
//   {
//     id: "15858114416946689",
//     avatar:
//       "https://kingcontent.mediacdn.vn/2019/8/24/sen-365-15666178757332064346458.jpg",
//     fullName: "Sến 365",
//     createdBy: "15241882902022170",
//     status: 1,
//     labelMode: null,
//     type: 2,
//     phoneOwner: "0965102102",
//     ownerStatus: 1,
//     class: 3,
//     classType: null,
//     notifySettings: "",
//     configExtension: "{}",
//     mediaChannel: "122306295079374848",
//   },
//   {
//     id: "15858160551927602",
//     avatar: "",
//     fullName: "Yamaha Trung Tá",
//     createdBy: "15241880249631314",
//     status: 1,
//     labelMode: null,
//     type: 2,
//     phoneOwner: "0906049999",
//     ownerStatus: 1,
//     class: 3,
//     classType: null,
//     notifySettings: "",
//     configExtension: "{}",
//     mediaChannel: "122306293116440576",
//   },
//   {
//     id: "15858242312543693",
//     avatar:
//       "https://kingcontent.mediacdn.vn/2019/8/24/tung-tang-tv-1566632570245499207212.jpg",
//     fullName: "Tung Tăng TV",
//     createdBy: "15241880249631314",
//     status: 1,
//     labelMode: null,
//     type: 2,
//     phoneOwner: "0906049999",
//     ownerStatus: 1,
//     class: 3,
//     classType: null,
//     notifySettings: "",
//     configExtension: "{}",
//     mediaChannel: "122306291619074048",
//   },
//   {
//     id: "15858273153261087",
//     avatar: "",
//     fullName: "Hồng Đào",
//     createdBy: "15241885588980559",
//     status: 1,
//     labelMode: null,
//     type: 2,
//     phoneOwner: "0906898102",
//     ownerStatus: 1,
//     class: 5,
//     classType: null,
//     notifySettings: "",
//     configExtension: "{}",
//     mediaChannel: "122306289714860032",
//   },
//   {
//     id: "15858303237172569",
//     avatar:
//       "https://kingcontent.lotuscdn.vn/2019/9/15/1-15685529480331185221091.png",
//     fullName: "Những kẻ mộng mơ",
//     createdBy: "11148193239549880",
//     status: 1,
//     labelMode: null,
//     type: 2,
//     phoneOwner: "0965055799",
//     ownerStatus: 1,
//     class: 3,
//     classType: null,
//     notifySettings: "",
//     configExtension: "{}",
//     mediaChannel: "122318760441810944",
//   },
//   {
//     id: "15858407461432776",
//     avatar:
//       "https://kingcontent.lotuscdn.vn/crop/626,0_2500,1874/2019/9/18/sunhuyn-1568775776757429421226.jpg",
//     fullName: "Sunhuyn",
//     createdBy: "15239594391699929",
//     status: 1,
//     labelMode: null,
//     type: 2,
//     phoneOwner: "0982291995",
//     ownerStatus: 1,
//     class: 3,
//     classType: null,
//     notifySettings: "",
//     configExtension: "{}",
//     mediaChannel: "122306285264703488",
//   },
//   {
//     id: "15858452753624851",
//     avatar:
//       "https://kingcontent.mediacdn.vn/2019/8/23/son-sun-15665440307856630344.jpg",
//     fullName: "Sơn Sun",
//     createdBy: "15241893516214355",
//     status: 1,
//     labelMode: null,
//     type: 2,
//     phoneOwner: "0966274625",
//     ownerStatus: 1,
//     class: 3,
//     classType: null,
//     notifySettings: "",
//     configExtension: "{}",
//     mediaChannel: "122306283939303424",
//   },
//   {
//     id: "15858495133920824",
//     avatar:
//       "https://kingcontent.mediacdn.vn/2019/8/23/dj-minh-tri-1566542013492668427123.jpg",
//     fullName: "DJ Minh Tri",
//     createdBy: "15241897493463446",
//     status: 1,
//     labelMode: null,
//     type: 2,
//     phoneOwner: "0984250692",
//     ownerStatus: 1,
//     class: 3,
//     classType: null,
//     notifySettings: "",
//     configExtension: "{}",
//     mediaChannel: "122306281603076096",
//   },
//   {
//     id: "15876187599215942",
//     avatar: "",
//     fullName: "Nguyễn Công Phượng",
//     createdBy: "15876128992206645",
//     status: 1,
//     labelMode: null,
//     type: 2,
//     phoneOwner: "0825280555",
//     ownerStatus: 1,
//     class: 5,
//     classType: null,
//     notifySettings: "",
//     configExtension: "{}",
//     mediaChannel: "122306279740805120",
//   },
//   {
//     id: "15881638861676491",
//     avatar: "",
//     fullName: "Dám nghĩ lớn",
//     createdBy: "15863512895139521",
//     status: 1,
//     labelMode: null,
//     type: 2,
//     phoneOwner: "0766660799",
//     ownerStatus: 1,
//     class: 3,
//     classType: null,
//     notifySettings: "",
//     configExtension: "{}",
//     mediaChannel: "122306277710761984",
//   },
//   {
//     id: "15972331177455491",
//     avatar:
//       "https://kingcontent.mediacdn.vn/2019/8/20/logo-danviet-ntnn2-15662948805241200950913.jpg",
//     fullName: "Báo Dân Việt",
//     createdBy: "15972179027762466",
//     status: 1,
//     labelMode: null,
//     type: 2,
//     phoneOwner: "0938343333",
//     ownerStatus: 1,
//     class: 1,
//     classType: null,
//     notifySettings: '{"OfficerId":15972331177455491,"Quota":1,"Time":0}',
//     configExtension: "{}",
//     mediaChannel: "122318758655037440",
//   },
//   {
//     id: "16085210779954563",
//     avatar: "",
//     fullName: "Đầm Lầy",
//     createdBy: "2004486171003791",
//     status: 0,
//     labelMode: null,
//     type: 2,
//     phoneOwner: "0975205879",
//     ownerStatus: 1,
//     class: 3,
//     classType: null,
//     notifySettings: "",
//     configExtension: "{}",
//     mediaChannel: "122318756885041152",
//   },
//   {
//     id: "16132822789084068",
//     avatar:
//       "https://kingcontent.lotuscdn.vn/2019/9/17/logo-500-15687144958271465197570.png",
//     fullName: "500Bros Studio",
//     createdBy: "16144714420801837",
//     status: 1,
//     labelMode: null,
//     type: 2,
//     phoneOwner: "0348768880",
//     ownerStatus: 1,
//     class: 253,
//     classType: null,
//     notifySettings: "",
//     configExtension: "{}",
//     mediaChannel: "122318754779500544",
//   },
//   {
//     id: "16133205027541912",
//     avatar: "",
//     fullName: "Vikings Cybercafe",
//     createdBy: "16132334453346408",
//     status: 0,
//     labelMode: null,
//     type: 2,
//     phoneOwner: "0944800456",
//     ownerStatus: 1,
//     class: null,
//     classType: null,
//     notifySettings: "",
//     configExtension: "{}",
//     mediaChannel: "122306273260605440",
//   },
//   {
//     id: "16147177209156568",
//     avatar:
//       "https://kingcontent.mediacdn.vn/2019/8/22/6511229015258603942165587320993745711661056n-15664616177441119427741.png",
//     fullName: "ON",
//     createdBy: "16058146417880858",
//     status: 1,
//     labelMode: null,
//     type: 2,
//     phoneOwner: "0916686147",
//     ownerStatus: 1,
//     class: 253,
//     classType: null,
//     notifySettings: "",
//     configExtension: "{}",
//     mediaChannel: "122306270840492032",
//   },
//   {
//     id: "16315158654710107",
//     avatar:
//       "https://kingcontent.mediacdn.vn/crop/139,0_859,720/2019/8/24/6874829223617287639347111453012493076004864n-15666218153101385398719.jpg",
//     fullName: "Mai Linh ZuTo ",
//     createdBy: "16314645821641094",
//     status: 1,
//     labelMode: null,
//     type: 2,
//     phoneOwner: "0966822474",
//     ownerStatus: 1,
//     class: 3,
//     classType: null,
//     notifySettings: "",
//     configExtension: "{}",
//     mediaChannel: "122306268806254592",
//   },
//   {
//     id: "16787678442929286",
//     avatar:
//       "https://kingcontent.mediacdn.vn/2019/9/3/6737207024471828088877965116760643290005504n-1567501019020441700492.jpg",
//     fullName: "Xấc Xược",
//     createdBy: "16671660265545105",
//     status: 1,
//     labelMode: null,
//     type: 2,
//     phoneOwner: "0397750219",
//     ownerStatus: 1,
//     class: 253,
//     classType: null,
//     notifySettings: "",
//     configExtension: "{}",
//     mediaChannel: "122318751294033920",
//   },
// ]

const AccountList = () => {
  let [currentPage, setCurrentPage] = useState(1)
  let [users, setUsers] = useState([])

  function handleNextPage() {
    setCurrentPage(currentPage + 1)
  }

  function handlePreviousPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  useEffect(() => {
    getUsers()
  }, [currentPage])

  async function getUsers() {
    try {
      const res = await Axios.get(
        `http://b11.cnnd.vn/social/api/system/list_page_manager?PageIndex=${currentPage}&PageSize=10`,
        {
          headers: { Authorization: `${localStorage.getItem("token")}` },
        }
      )
      setUsers([...res?.data?.data?.data])
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='account-list'>
      <div className='filter'>
        <Filter />
      </div>
      <div className='pagination'>
        <Pagination
          currentPage={currentPage}
          onNextPage={handleNextPage}
          onPreviousPage={handlePreviousPage}
        />
      </div>
      <div className='list'>
        <List users={users} />
      </div>
    </div>
  )
}

export default AccountList
