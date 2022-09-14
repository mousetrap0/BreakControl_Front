import  React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "react-js-pagination";

import "../../css/bbslist.css";
import "../../css/page.css";

function LineList() {

	const [lineList, setLineList] = useState([]);

	// 검색용 Hook
	const [choiceVal, setChoiceVal] = useState("");
	const [searchVal, setSearchVal] = useState("");

	// Paging
	const [page, setPage] = useState(1);
	const [totalCnt, setTotalCnt] = useState(0);

	// Link 용 (함수) 
	let navigate = useNavigate();


	/* [GET /line]: 게시글 목록 */
	const getLineList = async (choice, search, page) => {

		await axios.get("http://localhost:3000/line", { params: { "choice": choice, "search": search, "page": page } })
			.then((resp) => {
				console.log("[LineList.js] useEffect() success :D");
				console.log(resp.data);

				setLineList(resp.data.lineList);
				setTotalCnt(resp.data.pageCnt);
			})
			.catch((err) => {
				console.log("[LineList.js] useEffect() error :<");
				console.log(err);

			});
	}

	useEffect(() => {
		getLineList("", "", 1);
	}, []);


	const changeChoice = (event) => { setChoiceVal(event.target.value); }
	const changeSearch = (event) => { setSearchVal(event.target.value); }
	const search = () => {
		console.log("[LineList.js searchBtn()] choiceVal=" + choiceVal + ", searchVal=" + searchVal);

		navigate("/linelist");
		getLineList(choiceVal, searchVal, 1);
	}

	const changePage = (page) => {
		setPage(page);
		getLineList(choiceVal, searchVal, page);
	}

	return (

		<div>

			{ /* 검색 */}
			<table className="search">
				<tbody>
					<tr>
						<td>
							<select className="custom-select" value={choiceVal} onChange={changeChoice}>
								<option>검색 옵션 선택</option>
								<option value="lineId">라인 ID</option>
								<option value="lineName">라인명</option>								
							</select>
						</td>
						<td>
							<input type="text" className="form-control" placeholder="검색어" value={searchVal} onChange={changeSearch} />
						</td>
						<td>
							<button type="button" className="btn btn-outline-secondary" onClick={search}><i className="fas fa-search"></i> 검색</button>
						</td>
					</tr>
				</tbody>
			</table><br />

			<table className="table table-hover">
				<thead>
					<tr>
						<th className="col-1">라인ID</th>
						<th className="col-1">라인명</th>
						<th className="col-1">채널모드</th>
						<th className="col-1">속도</th>
						<th className="col-1">NPC번호</th>
						<th className="col-1">MSPP번호</th>
					</tr>
				</thead>

				<tbody>
					{
						lineList.map(function (line, idx) {
							return (
								<TableRow obj={line} key={idx} cnt={idx + 1} />
							)
						})
					}
				</tbody>
			</table>

			<Pagination className="pagination"
				activePage={page}
				itemsCountPerPage={10}
				totalItemsCount={totalCnt}
				pageRangeDisplayed={5}
				prevPageText={"‹"}
				nextPageText={"›"}
				onChange={changePage} />
				
			<div className="my-5 d-flex justify-content-center">
				<Link className="btn btn-outline-secondary" to="/linewrite"><i className="fas fa-pen"></i> &nbsp; 글쓰기</Link>
			</div>

		</div>
	);
}

/* 글 목록 테이블 행 컴포넌트 */
function TableRow(props) {
	const line = props.obj;

	return (
			<tr>
					{						
						<>
							<td>{line.lineId}</td>
							<td>{line.lineName}</td>							
							<td>{line.channelMode}</td>
							<td>{line.speed}</td>
							<td>{line.npcNumber}</td>
							<td>{line.msppNumber}</td>
						</>
						
					}
					
				
			</tr>
		
	);
}


export default LineList;