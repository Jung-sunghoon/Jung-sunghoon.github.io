// import React, { useCallback, useEffect, useState } from "react";
// import "./blog.css";
// import { Button, Pagination } from "antd";
// import { Link, useNavigate } from "react-router-dom";
// import { PlusOutlined } from "@ant-design/icons";
// import { formatDate } from "../../utils/common";

const Blog: React.FC = () => {
  return <>hello</>;
};

export default Blog;

// const Info: React.FC = () => {
//   const [searchText, setSearchText] = useState<string>("");
//   const [infos, setInfos] = useState<InfoTypes>([]);
//   const [filteredData, setFilteredData] = useState<InfoTypes>([]);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [pageSize] = useState<number>(10);
//   const handlePageChange = (page: number) => setCurrentPage(page);
//   const navigate = useNavigate();

//   const slicedData = filteredData?.slice(
//     (currentPage - 1) * pageSize,
//     currentPage * pageSize
//   );

//   const handleSearch = (text: string) => setSearchText(text);

//   const performSearchAndSort = useCallback(() => {
//     let filtered = [...infos]; // 원본 데이터를 보존하기 위해 복사

//     if (searchText) {
//       filtered = filtered.filter((item) =>
//         item?.title.toLowerCase().includes(searchText.toLowerCase())
//       );
//     }

//     setFilteredData(filtered);
//   }, [infos, searchText]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `${import.meta.env.VITE_API_ENDPOINT}/api/it-info-list`
//         );
//         const data = response.data.reverse();
//         setInfos(data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     performSearchAndSort();
//   }, [infos, searchText]);

//   const handleNewPost = () => navigate("/infogenerate");

//   const renderGenerateBtn = () => {
//     if (localStorage.userId === "master") {
//       return (
//         <div className="floating-button">
//           <Button
//             type="primary"
//             icon={<PlusOutlined />}
//             onClick={handleNewPost}
//           />
//         </div>
//       );
//     }
//   };

//   return (
//     <div>
//       <div
//         style={{
//           margin: "50px 100px 0 100px",
//           paddingLeft: "30px",
//           paddingRight: "30px",
//         }}
//       >
//         <div style={{ display: "flex", justifyContent: "space-between" }}>
//           <h2>IT 정보</h2>
//           <div style={{ marginTop: "20px" }}>
//             <Search onSearch={handleSearch} />
//           </div>
//         </div>
//         <table className="infoTable">
//           <colgroup>
//             <col className="colNum"></col>
//             <col className="colTitle"></col>
//             <col className="colDate"></col>
//             <col className="colView"></col>
//           </colgroup>
//           <thead>
//             <tr>
//               <th>번호</th>
//               <th>제목</th>
//               <th>작성일</th>
//               <th>조회수</th>
//             </tr>
//           </thead>
//           <tbody>
//             {slicedData?.map((item) => (
//               <tr key={item?.itInfoId}>
//                 <td>{item?.itInfoId}</td>
//                 <td>
//                   <Link to={`/infodetails/${item?.itInfoId}`}>
//                     {item?.title}
//                   </Link>
//                 </td>
//                 <td>
//                   {item?.generateDate
//                     ? formatDate(new Date(item?.generateDate))
//                     : ""}
//                 </td>
//                 <td>{item?.views}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div style={{ marginTop: "10px" }}>
//           <Pagination
//             className="Board__page"
//             current={currentPage}
//             total={filteredData?.length}
//             pageSize={pageSize}
//             showSizeChanger={false} // 페이지 크기 변경 옵션 숨김
//             onChange={handlePageChange}
//           />
//         </div>
//         {renderGenerateBtn()}
//       </div>
//     </div>
//   );
// };
