import React, { useState } from "react";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";

const LikeButton = ({ data }) => {
	const [like, setLike] = useState(false);

	const likeHandler = () => {
		if (like) {
			setLike(false);
			data.like = JSON.stringify(parseInt(data.like) - 1);
		} else {
			setLike(true);
			data.like = JSON.stringify(parseInt(data.like) + 1);
		}
	};

	return (
		<button className="like" onClick={() => likeHandler(data.id)}>
			<div style={{ color: "black" }}> {data.like}</div>
			{like ? (
				<FcLike style={{ fontSize: "1.5rem" }} />
			) : (
				<FcLikePlaceholder style={{ fontSize: "1.5rem" }} />
			)}
		</button>
	);
};
export default LikeButton;
