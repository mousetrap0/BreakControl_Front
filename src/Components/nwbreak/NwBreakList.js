import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "react-js-pagination";

import moment from "moment";

import "../../css/bbslist.css";
import "../../css/page.css";

function NwBreakList() {
    const [nwBreakList, setNwBreakList] = useState([]);

    //체크된 박스 저장
    const [Checked, setChecked] = useState(new Set());

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
            .get("http://192.168.97.7:3000/nwbreak", {
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
            ? Checked.add(e.target.value)
            : Checked.delete(e.target.value);

        setChecked(Checked);
    };

    const cnvrt = (v) => {
        return moment(v).format("YYYY-MM-DD HH:mm");
    };

    const onClickDeletes = () => {
        const CheckedItems = Array.from(Checked);
        console.log(CheckedItems, "11111");
        CheckedItems.map(async (CheckedItem) => {
            console.log(typeof CheckedItem, "<<<<<<<<<<<");
            await axios
                .delete(`http://192.168.97.7:3000/nwbreak/${CheckedItem}`)
                .then((resp) => {
                    console.log("[NWBreakList.js] deletesNwBreak() success :D");
                    console.log(resp.data);

                    if (resp.data.deletedRecordCount === 1) {
                        alert("게시글을 성공적으로 삭제했습니다 :D");
                        navigate("/nwbreaklist");
                    }
                })
                .catch((err) => {
                    console.log("[NWBreakList.js] deletesNwBreak() error :<");
                    console.log(err);
                });
        });
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
                        <th className="col-1">Line ID</th>
                        <th className="col-1">시설 위치</th>
                        <th className="col-1">시설명</th>
                        <th className="col-1">Break Id</th>
                        <th className="col-2">Break 시간</th>
                        <th className="col-2">해소 시간</th>
                        <th className="col-1">담당자</th>
                        <th className="col-1">지속시간</th>
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
                                    <td>{nwbreak.lineId}</td>
                                    <td>{nwbreak.facilityGround}</td>
                                    <td>{nwbreak.facilityName}</td>

                                    <td>
                                        <Link
                                            to={{
                                                pathname: `/nwbreakdetail/${nwbreak.breakId}`,
                                            }}
                                        >
                                            {" "}
                                            {/* 게시글 상세 링크 */}
                                            <span className="underline bbs-title">
                                                {nwbreak.breakId}{" "}
                                            </span>{" "}
                                            {/* 게시글 제목 */}
                                        </Link>
                                    </td>
                                    <td>{cnvrt(nwbreak.breakTime)}</td>
                                    <td>{cnvrt(nwbreak.recoveryTime)}</td>
                                    <td>{nwbreak.breakManager}</td>
                                    <td>{nwbreak.failTime}분</td>
                                </tr>
                            </>
                        );
                    })}
                </tbody>
            </table>
            <button type="button" onClick={onClickDeletes}>
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

export default NwBreakList;
