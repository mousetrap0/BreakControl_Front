import  React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "react-js-pagination";

import "../../css/bbslist.css";
import "../../css/page.css";

function NwBreakList() {

	const [nwBreakList, setNwBreakList] = useState([]);

	// 검색용 Hook
	const [choiceVal, setChoiceVal] = useState("");
	const [searchVal, setSearchVal] = useState("");

	// Paging
	const [page, setPage] = useState(1);
	const [totalCnt, setTotalCnt] = useState(0);

	// Link 용 (함수) 
	let navigate = useNavigate();


	/* [GET /nwbreak]: 게시글 목록 */
	const getNwBreakList = async (choice, search, page) => {

		await axios.get("http://localhost:3000/nwbreak", { params: { "choice": choice, "search": search, "page": page } })
			.then((resp) => {
				console.log("[NwBreakList.js] useEffect() success :D");
				console.log(resp.data);

				setNwBreakList(resp.data.nwbreakList);
				setTotalCnt(resp.data.pageCnt);
			})
			.catch((err) => {
				console.log("[NwBreakList.js] useEffect() error :<");
				console.log(err);

			});
	}

	useEffect(() => {
		getNwBreakList("", "", 1);
	}, []);


	const changeChoice = (event) => { setChoiceVal(event.target.value); }
	const changeSearch = (event) => { setSearchVal(event.target.value); }
	const search = () => {
		console.log("[NwBreakList.js searchBtn()] choiceVal=" + choiceVal + ", searchVal=" + searchVal);

		navigate("/nwbreaklist");
		getNwBreakList(choiceVal, searchVal, 1);
	}

	const changePage = (page) => {
		setPage(page);
		getNwBreakList(choiceVal, searchVal, page);
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
								<option value="breakId">Break ID</option>
								<option value="lineId">Line ID</option>								
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
						<th className="col-1">Break ID</th>
						<th className="col-8">Line ID</th>
						<th className="col-3">Break Date</th>
					</tr>
				</thead>

				<tbody>
					{
						nwBreakList.map(function (nwbreak, idx) {
							return (
								<TableRow obj={nwbreak} key={idx} cnt={idx + 1} />
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
				<Link className="btn btn-outline-secondary" to="/nwbreakwrite"><i className="fas fa-pen"></i> &nbsp; 글쓰기</Link>
			</div>

		</div>
	);
}

/* 글 목록 테이블 행 컴포넌트 */
function TableRow(props) {
	const nwbreak = props.obj;

	return (
			<tr>
				
						<td >
								<Link to={{ pathname: `/nwbreakdetail/${nwbreak.breakId}` }}> { /* 게시글 상세 링크 */}
									<span className="underline bbs-title" >{nwbreak.breakId} </span> { /* 게시글 제목 */}
								</Link>
						</td>
						<td>{nwbreak.lineId}</td>
						<td>{nwbreak.breakDate}</td>
					
				
			</tr>
		
	);
}

const tap = "\u00A0\u00A0\u00A0\u00A0";
function Arrow( props ) {
	const depth = props.depth;

	if (depth === 0) {
		return null;
	}

	const taps = [];
	for(let i = 0; i < depth; i++) {
		taps.push(tap);
	}

	return (
		<>
			{taps} <i className="fas fa-long-arrow-alt-right"></i>
		</> 
	 );
}

export default NwBreakList;