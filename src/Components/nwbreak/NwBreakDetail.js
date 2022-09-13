import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import CommentWrite from "../comment/CommentWrite";
import CommentList from "../comment/CommentList";
import { AuthContext } from "../context/AuthProvider";



function NwBreakDetail() {

	const { auth, setAuth } = useContext(AuthContext)

	const [nwbreak, setNwBreak] = useState({});
	const { seq } = useParams(); // 파라미터 가져오기

	const navigate = useNavigate();

	const getNwBreakDetail = async () => {

		await axios.get(`http://localhost:3000/nwbreak/${seq}`, {params: {readerId: auth ? auth : ""}})
		.then((resp) => {
			console.log("[NwBreakDetail.js] getNwBreakDetail() success :D");
			console.log(resp.data);

			setNwBreak(resp.data.bbs);
		})
		.catch((err) => {
			console.log("[NwBreakDetail.js] getNwBreakDetail() error :<");
			console.log(err);
		});

	}

	const deleteNwBreak = async () => {

		await axios.delete(`http://localhost:3000/nwbreak/${seq}`)
		.then((resp) => {
			console.log("[BbsDetail.js] deleteNwBreak() success :D");
			console.log(resp.data);

			if (resp.data.deletedRecordCount === 1) {
				alert("게시글을 성공적으로 삭제했습니다 :D");
				navigate("/nwbreaklist");
			}

		}).catch((err) => {
			console.log("[NwBreakDetail.js] deleteNwBreak() error :<");
			console.log(err);
		});

	}

	useEffect(() => {
		getNwBreakDetail();
	}, []);

	const updateNwBreak = {
		seq: nwbreak.seq,
		id: nwbreak.id,
		title: nwbreak.title,
		content: nwbreak.content
	}

	const parentNwBreak = {
		id: nwbreak.id,
		title: nwbreak.title
	}

	return (
		<div>

			<div className="my-3 d-flex justify-content-end">
				<Link className="btn btn-outline-secondary" to={{pathname: `/nwbreakanswer/${nwbreak.seq}` }} state={{ parentNwBreak: parentNwBreak }}><i className="fas fa-pen"></i> 답글쓰기</Link> &nbsp;

			{
				/* 자신이 작성한 게시글인 경우에만 수정 삭제 가능 */
				(localStorage.getItem("id") == nwbreak.id) ?
					<>
						<Link className="btn btn-outline-secondary"  to="/nwbreakupdate" state={{ nwbreak: updateNwBreak }}><i className="fas fa-edit"></i> 수정</Link> &nbsp;
						<button className="btn btn-outline-danger"  onClick={deleteNwBreak}><i className="fas fa-trash-alt"></i> 삭제</button>
					</>
				:
				null
			}

			</div>

			<table className="table table-striped">
				<tbody>
					<tr>
						<th className="col-3">작성자</th>
						<td>
							<span>{nwbreak.id}</span>
						</td>
					</tr>

					<tr>
						<th>제목</th>
						<td>
							<span>{nwbreak.title}</span>
						</td>
					</tr>

					<tr>
						<th>작성일</th>
						<td>
							<span>{nwbreak.createdAt}</span>
						</td>
					</tr>

					<tr>
						<th>조회수</th>
						<td>
							<span>{nwbreak.readCount}</span>
						</td>
					</tr>

					<tr>
						<th>내용</th>
						<td>
							<div>
								{nwbreak.content}
							</div>
						</td>
					</tr>
				</tbody>
			</table>

			<div className="my-3 d-flex justify-content-center">
				<Link className="btn btn-outline-secondary" to="/nwbreaklist"><i className="fas fa-list"></i> 글목록</Link>
			</div><br/><br/>

			{/* 댓글 작성 컴포넌트 */}
			{
				(auth) ? // 로그인한 사용자만 댓글 작성 가능
					<CommentWrite seq={seq}/>
				:
					null
			}
			

			{/* 댓글 리스트 컴포넌트 */}
			<CommentList  seq={seq}/>

		</div>
	);
}

export default NwBreakDetail;