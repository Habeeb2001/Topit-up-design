import React from 'react'
import styled from 'styled-components'
import {FaBell} from "react-icons/fa"
import AdminImage from "../../assets/admin.png"
const AdminDetails = () => {
  return (
    <>
    <DetailsContainer>
        <div className='pr-1 admin-image'>
        <img className='admin-Img' src={AdminImage}/>
        </div>
        <div className="AdminDetails">
            <span className="admin-name">
                John Doe
            </span>
            <span className="AdminType">
                RETAILER ADMIN
            </span>
        </div>
        <div className=" pl-1 notification-icon">
            <FaBell color='gray'/>
            
        </div>
    </DetailsContainer>
    </>
  )
}
const DetailsContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: 30px;
    .admin-image{
        .admin-Img{
            width: 50px;
            height: 50px;
        }
    }
    .AdminDetails{
        display: grid;
        justify-content: center;
        .AdminType{
            font-size:15px;
        }

    }
    .notification-icon{
        margin: 10px;
    }


`;
export default AdminDetails