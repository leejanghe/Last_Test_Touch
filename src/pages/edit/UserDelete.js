import React from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert';
import "./UserEdit.css"


function UserDelete() {

    const history = useHistory();

    const deleteUser = () => {
		axios
			.delete('https://localhost:4000/unregister', { withCredentials: true })
			.then(() =>{
				swal({
					title: '회원탈퇴 완료.',
					text: '회원탈퇴 완료되었습니다.',
					icon: 'success'
				})
					.then(() => {
						history.push('/');
						window.location.reload();
					})
			})
			.catch((err) => {
				console.log(err);
			});
	}

    const style = {
        color:'red'
    }


    return (
        <div>
            <section className="user_background">
                <div className="user_container">

                <form className="user_form_center">
            <h1>
            회원 탈퇴를 하시겠습니까?
            </h1>
            <h3 style={style}>
           😭 회원 탈퇴시 정보가 삭제 됩니다.
            </h3>

            <button 
            className="user_delete_btn"
        
            onClick={deleteUser}>회원탈퇴</button>
            
            </form>
            </div>
            </section>
        </div>
    );
}

export default UserDelete
