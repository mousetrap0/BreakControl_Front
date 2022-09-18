import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "react-js-pagination";

import moment from "moment";

import "../../css/bbslist.css";
import "../../css/page.css";

function NwBreakList() {
    /*     const [CheckedItems, setCheckedItems] = useState(new Set());
     */
    const CheckedItems = new Set();
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
        await axios
            .get("http://localhost:3000/nwbreak", {
                params: { choice: choice, search: search, page: page },
            })
            .then((resp) => {
                console.log("[NwBreakList.js] useEffect() success :D");
                console.log(resp.data);

                setNwBreakList(resp.data.nwBreakList);
                setTotalCnt(resp.data.pageCnt);
            })
            .catch((err) => {
                console.log("[NwBreakList.js] useEffect() error :<");
                console.log(err);
            });
    };

    useEffect(() => {
        getNwBreakList("", "", 1);
    }, []);

    const changeChoice = (event) => {
        setChoiceVal(event.target.value);
    };
    const changeSearch = (event) => {
        setSearchVal(event.target.value);
    };
    const search = () => {
        console.log(
            "[NwBreakList.js searchBtn()] choiceVal=" +
                choiceVal +
                ", searchVal=" +
                searchVal
        );

        navigate("/nwbreaklist");
        getNwBreakList(choiceVal, searchVal, 1);
    };

    const changePage = (page) => {
        setPage(page);
        getNwBreakList(choiceVal, searchVal, page);
    };

    const onClickCheckbox = (e) => {
        e.target.checked
            ? CheckedItems.add(e.target.value)
            : CheckedItems.delete(e.target.value);
        /*         setCheckedItems(CheckedItems);
         */
    };

    const cnvrt = (v) => {
        return moment(v).format("YYYY-MM-DD HH:mm");
    };

    return (
        <div>
            {/* 검색 */}
            <table className="search">
                <tbody>
                    <tr>
                        <td>
                            <select
                                className="custom-select"
                                value={choiceVal}
                                onChange={changeChoice}
                            >
                                <option>검색 옵션 선택</option>
                                <option value="breakId">Break ID</option>
                                <option value="lineId">Line ID</option>
                            </select>
                        </td>
                        <td>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="검색어"
                                value={searchVal}
                                onChange={changeSearch}
                            />
                        </td>
                        <td>
                            <button
                                type="button"
                                className="btn btn-outline-secondary"
                                onClick={search}
                            >
                                <i className="fas fa-search"></i> 검색
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br />

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th className="col-1"></th>
                        <th className="col-1">번호</th>
                        <th className="col-1">Line ID</th>
                        <th className="col-1">시설 위치</th>
                        <th className="col-1">시설명</th>
                        <th className="col-2">Break 시간</th>
                        <th className="col-2">해소 시간</th>
                        <th className="col-1">담당자</th>
                        <th className="col-1">지속시간</th>
                        <th className="col-1">장애시간</th>
                    </tr>
                </thead>

                <tbody>
                    {nwBreakList.map((nwbreak, idx) => {
                        return (
                            <>
                                <tr>
                                    <th>
                                        <input
                                            type="checkbox"
                                            value={nwbreak.breakId}
                                            onClick={(e) => {
                                                onClickCheckbox(e);
                                            }}
                                        />
                                    </th>
                                    <th>{idx}</th>
                                    <td>{nwbreak.lineId}</td>
                                    <td>{nwbreak.facilityGround}</td>
                                    <td>{nwbreak.facilityName}</td>
                                    <td>{cnvrt(nwbreak.breakTime)}</td>
                                    <td>{cnvrt(nwbreak.recoveryTime)}</td>
                                    <td>{nwbreak.breakManager}</td>
                                    <td>{nwbreak.failTime}</td>
                                </tr>
                            </>
                        );
                    })}
                    {/* {nwBreakList.map(function (nwbreak, idx) {
                        // return (
                        //     <TableRow obj={nwbreak} key={idx} cnt={idx + 1} />
                        // );
                    })} */}
                </tbody>
            </table>
            <button
                type="button"
                onClick={() => {
                    console.log(Array.from(CheckedItems));
                    // axios.delete(Array.from(CheckedItems))
                }}
            >
                testDelete
            </button>

            <Pagination
                className="pagination"
                activePage={page}
                itemsCountPerPage={10}
                totalItemsCount={totalCnt}
                pageRangeDisplayed={5}
                prevPageText={"‹"}
                nextPageText={"›"}
                onChange={changePage}
            />

            <div className="my-5 d-flex justify-content-center">
                <Link className="btn btn-outline-secondary" to="/nwbreakwrite">
                    <i className="fas fa-pen"></i> &nbsp; 글쓰기
                </Link>
            </div>
        </div>
    );
}

/** 글 목록 테이블 행 컴포넌트 */
function TableRow(props) {
    const nwbreak = props.obj;
    const cnvrt = (v) => {
        return moment(v).format("YYYY-MM-DD HH:mm");
    };
    const onCheckClick = () => {
        return nwbreak.breakId;
    };
    return (
        <tr>
            <th>
                <input
                    type="checkbox"
                    value={nwbreak.breakId}
                    onClick={onCheckClick}
                />
            </th>
            <th>{props.cnt}</th>
            {
                <>
                    <td>{nwbreak.lineId}</td>
                    <td>{nwbreak.facilityGround}</td>
                    <td>
                        <Link
                            to={{
                                pathname: `/nwbreakdetail/${nwbreak.breakId}`,
                            }}
                        >
                            {" "}
                            {/* 게시글 상세 링크 */}
                            <span className="underline bbs-title">
                                {nwbreak.facilityName}{" "}
                            </span>{" "}
                            {/* 게시글 제목 */}
                        </Link>
                    </td>

                    <td>{cnvrt(nwbreak.breakTime)}</td>
                    <td>{cnvrt(nwbreak.recoveryTime)}</td>
                    <td>{nwbreak.breakManager}</td>
                    <td>{nwbreak.failtime}</td>
                </>
            }
        </tr>
    );
}
export default NwBreakList;
