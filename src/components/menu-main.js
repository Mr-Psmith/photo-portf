import classes from "./menu-main.module.css";



function MenuMain () {


return (
    <>
        <div className={classes.menu_main}>
            <li>Selected Showcase</li>
            <li>About Me</li>
            <li>Contact</li>
            <li>Galleries</li>
            <li>Prints!</li>
        </div>
    </>
)
}

export default MenuMain;