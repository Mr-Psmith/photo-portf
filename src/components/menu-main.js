import classes from "./menu-main.module.css";



function MenuMain (props) {


return (
    <>
        <div className={classes.menu_main}>
            <li onClick={props.gallerySelectionHandlerPr}>Selected Showcase</li>
            <li onClick={props.aboutHandlerPr}>About Me</li>
            <li onClick={props.galleryThematicHandlerPr} onMouseEnter={props.galleryMenuPr} onMouseLeave={props.galleryMenuLeavePr}>Galleries</li>
            <li onClick={props.contactHandlerPr}>Contact</li>
            {/* <li onClick={props.printsHandlerPr}>Prints!</li> */}
        </div>
    </>
)
}

export default MenuMain;