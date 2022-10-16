import { Button } from "react-bootstrap";
import "./style/login-button-component.css";
export default function LoginButtonComponent(props){
    return (<div className="login-button">
        <Button className="login-button-component" onClick={props.onClick}>Login</Button>
    </div>);
}