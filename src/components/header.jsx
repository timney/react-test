
const Header = (props) =>
    <div>
        <h1>Cakes</h1>
        <hr />
        {props && props.children}
    </div>

export default Header
