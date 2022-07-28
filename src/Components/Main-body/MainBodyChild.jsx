import React from "react";
import styled from "styled-components";
import admin_img from "../../assets/support_line_attendant.png"
const MainBodyChild = () => {
	return (
		<>
			<Container>
				<h2 className="support-line-header">Support Lines</h2>
				<div className="cards-parent">
					<div className="card">
						<img src={admin_img} className="admin_img" alt="" />
						<div className="about_attendant">
							<ul className="details">
								<li className="fullName">
									<span>Nigerian </span> Support
								</li>
								<li className="phoneNumber">
									<span>phone numbers:</span> 09079785436
								</li>
								<li className="email">Email: lance@gmail.com</li>
							</ul>
						</div>
					</div>
					<div className="card">
						<img src={admin_img} className="admin_img" alt="" />
						<div className="about_attendant">
							<ul className="details">
								<li className="fullName">
									<span>Nigerian </span> Support
								</li>
								<li className="phoneNumber">
									<span>phone numbers:</span> 09079785436
								</li>
								<li className="email">Email: lance@gmail.com</li>
							</ul>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
};
const Container = styled.div`
	width: 100%;
    height: 100%;
	margin: 0;
	background: #f1f1f1;
	padding: 30px 3rem;
	top: 0;
	.support-line-header {
		width: 100%;
		border-bottom: 1.5px solid rgba(90, 89, 89, 0.559);
	}
	.cards-parent {
        margin-top: 20px;
		display: flex;
		justify-content: space-between;
		gap: 0.8rem;
		.card {
            display: flex;
            align-items: center;
			width: 45%;
			/* padding: 1rem; */
			background: #fff;
			border-radius: 10px;
            .admin_img{
                width: 40%;
                height: 100%;
            }
            .about_attendant{
                width: 100%;
                list-style: none;
                display: block;
                height: 90%;
                .fullName{
                    margin-top: 20px;
                    font-weight: 600;
                    
                    span{
                        text-transform: uppercase;
                        font-size: 20px;
                    }
                }
                .phoneNumber{
                    margin-top: 10px;
                }
                .email{
                    margin-top: 30px;
                }
            }

		}
	}
`;
export default MainBodyChild;
