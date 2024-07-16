import { UserPng } from "./styles"
import PropTypes from 'prop-types';
import Img from "../../assets/users.png"

function UsersPng({theme, ...props}) {

    return (


        <UserPng {...props} theme={theme} src={Img} alt="" />


    )

}

UsersPng.propTypes = {

    theme: PropTypes.string
}

export default UsersPng