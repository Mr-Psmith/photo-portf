import HeaderUpper from "./header-upper";
import classes from "./header.module.css";
import MenuMain from "./menu-main";



function Header () {


return (
    <>
        <div className={classes.header_main}>
            <HeaderUpper />
            <MenuMain />
        </div>
    </>
)
}

export default Header;