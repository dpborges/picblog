import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
// import onClickOutside from "react-onclickoutside";
// import { Link, NavLink } from 'react-router-dom';
import { AngleUpIcon } from '../icons/AngleUpIcon';
import { AngleDownIcon } from '../icons/AngleDownIcon';
import CheckIcon from '../icons/CheckIcon';

// import '../../styles/settings.scss'
import styles from '../../styles/drop-down-menu.module.scss'

/* 
    RECENT CHANGES
    01/29/2020 The drop down list can now support the toggleSelected onClick handler or 
               drop down list can be a list of <Link>'s. If using Links, the ddlist array
               should specify path.

    This is a simple MultiSelect DrownDown, in other words, it allows you to select more than
    one item from the list. The drop down list itself is maintained on the parent
    or can be obtained from calling an API.  Default configuration for this component
    is a multi select dropdown that displays a header (aka title) and list of items underneath.
    When items are selected, a check mark appears next to each item. This allows user to select
    multiple items.
    In addition, you can set the "displayCount" property to show the count of items in the header.
    You can opt to show count of items "selected" or count of "all" items in the list.

    Below is an example of the default list 

     <DropDownMenu title="Names" list={ddlist}  />

    The title will be displayed with the default style along wtih a small down arrow.
    When title or down arrow are clicked, the dropdown is displayed.

    Note: the dropdown list is passed to the component is an array of objects structured as follows:
    [  {key: 0, title: "Header", selected: false, listname: "contributors"},  
       {key: 1, title: "Bob",  selected: false, listname: "contributors"}, 
         .....
    ]
    Note key item 0 is reserved for the title (aka header). You must provide this entry, regardless.
    If you do not want to display it, use config prop displayHeader to disable.


    If you choose not to display title (aka header) you can set the displayHeader to false as follows, 
       config = { displayHeader: false } 

    How it works: 
      The list is the main driver for this component. The component will render based on the selected property on the list.
         This is reason why the list is created and updated on the parent. The toggleSelected callback 
         is the way for parent to know what list item was selected. Based on the selected item it can toggle 
         the selected property. If select is true when component rerenders, it will show a check mark. 
         That being said, this is the basic process for setting this up.
      1) define a toggleSelected method on the parent and pass to the toggleSelected prop
      2) the function prop will be called with the key and the listname of the item that was selected.
      3) the method on the parent sets the selected property for key item selected
         and on the list and updates the state with updated list
      4) When DropDownMenu rerenders, the item will show the updated list with the item 
         selected as true (hence showing a check mark beside it)
    
    What is listname used for?  
    Because it is possible that the parent may be managing more than one dropdown list, it is recommended
    to use the listname in the parent state, for example,  this.state = { nameOfList:  [ {list item 1 }, {list item n }, ....]}
    When the listname is passed to toggleSelected, the parent can toggle the selected item on the targeted list.
    
    How to change styles
    Note the dropdown container has a set of default styles for its various components. You can change
    styles via the component props by providing an alternative  style.  As of this writing, this component
    is providing 2 props: one for a header style alternative and one for a drop-down-list alternative.

    Below are some of the ways you can change the default behavior
    1) Disabling checkmark on item selection. You may want to do this if using DropDown as simple display list
       to select just one item out of this list. If selecting just one item, the logic in toggleSelect, should
       fire upon the first selection, as opposed to toggling states for each selected item.
    2) Add a text button as the last entry. Enables user to take some action on the list.
       Below this component, you'll find a commented sample of the TextButton method used to concat to 
       the list upon rendering. You add this method to the parent and call it when you
       pass your list prop, as follows: list= {yourList.concat(this.getTextButtonItem())}
    3) To change the behavior when hovering over an item, you can modify the drop-down-list-item class.
    4) In addition, below this component, you'll find sample of the toggleSelected method you can use 
       on the parent. If you want to turn off checkmark upon selection, modify logic in toggleSelected function.
    5) Default behavior for upDownArrow next to list name is false. You would want to set this to true
       if you disabe hover effect, and would require user to click the up/down arrow to expand and contract the
       list manually 
    
    IMPORTANT: There is feature that closes the drop down when some one clicks anywhere outside of
       the component. I tried implmenenting react-onclickOutside, but  was not able to make it work.
       Another alternative can be found below: 
       https://medium.com/@pitipatdop/little-neat-trick-to-capture-click-outside-react-component-5604830beb7f
       I believe this is same approach: https://larsgraubner.com/handle-outside-clicks-react/
       This seems alot simpler. Should implement when I'm using 1 or 2 dropdowns on page.
       I chose NOT to use this feature for performance reasons as dropdown will be used across a large number 
       of rows. Having so many listeners to register and unregister may not be practical.
       See this link as well: http://www.syntaxbook.com/post/929O3-detect-click-outside-react-component
*/



export class DropDownMenu extends React.Component {

    constructor (props) {
        super(props);

        // Initialize state
        this.state = {
            listOpen: false,
            displayCount: "no",  /* Config option to show count of all items or selected items in the header. 
                                   Values are "no", "selected", or "all".  */  
            displayHeader: true,
            upDownArrow: true,

            width: 0,           /* window width, will be update by window resize event listener */
            height: 0           /* window height, will be update by window resize event listener */
        }
    }


    /* The following 3 functions have been introduced for purpose of turning off onMouseOver event for mobile devices. */ 
    /* When we resize app for mobile, it seems it requires two clicks 
    /* If device width size is less than 767px, the mouseOver handler on dropdown list is not fired */
    updateWindowSize = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    };
    componentDidMount() {
        window.addEventListener('resize', this.updateWindowSize);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowSize);
    }

    // handleClickOutside = evt => {
    //     this.setState({ listOpen: false });
    //  };
    
    showDropDown = evt => {     
        if (this.state.width > 767) {     /* this is used for mouseOver; only file for device widths > 767) */
            this.setState({ listOpen: true });
        }
    };

    hideDropDown = evt => {
        this.setState({ listOpen: false });
    };


    /* toggles whether list as open/close */
    toggleList = () => {
        this.setState(prevState => ({
             listOpen: !prevState.listOpen
        }))
    }

    /* toggles the selected property true/false for the key in listname provided */
    toggleSelected = (key, listName) => {
        this.props.toggleSelected(key, listName);
    }

    /* if upDownArrow is true, then show arrow up or down based on whether list is open or not */
    showUpDownArrow = (upDownArrowFlag) => {
        if (upDownArrowFlag) {
            return this.state.listOpen ? <AngleUpIcon />  : <AngleDownIcon />
        }
    }
        

    render() {

        /* get default values defined in the local state */
        let { listOpen, displayCount, displayHeader, upDownArrow } = this.state;

        /* set up default classes */
        let headerClass = styles["dropDownHeader"];
        let ddListClass = styles["dropDownList"];

        /* get props */
        let list    = this.props.list;
        let title   = this.props.title || '';
        let altHeaderClass   = this.props.altHeaderClass || '';
        let altDDListClass   = this.props.altDDListClass || '';

        /* See if there are  class overrides */
        if (altHeaderClass) { headerClass = styles[altHeaderClass]}
        if (altDDListClass) { ddListClass = styles[altDDListClass]}

        /* If this is a config prop, handle default overrides here */
        if (this.props.config) {
            if (this.props.config.hasOwnProperty('displayCount'))  { displayCount  = this.props.config.displayCount };
            if (this.props.config.hasOwnProperty('displayHeader')) { displayHeader = this.props.config.displayHeader };
            if (this.props.config.hasOwnProperty('upDownArrow'))   { upDownArrow   = this.props.config.upDownArrow };
        }
           
        /* If display header is false, change title to the fist item's title and have it appear instead of the header title.
           In addition, slice off first item of the list so it does not repeat in the drop down.  */
        if (!displayHeader) {
            title = list[0].title;    /* assign first items title here */
            let listCopy = [...list]; /* make copy of list */
            list = listCopy.slice(1); /* slice off first item */
        }

        /* If displayCount is equal to "selected", then calculate number selected */
        let  numSelected = 0;
        if (displayCount === "selected") {
            /* Obtain number of items selected in order to show in header */
            list.map((item) => {item.selected && numSelected++;})
        }
   
        return (
        <div className={styles.dropDownContainer}>
            <div className={headerClass} onClick={() => this.toggleList()}  onMouseOver = {()=>{} /*this.showDropDown*/}  >
                {displayCount === "no" &&  <div className={`${styles.dropDownTitle} ${styles.ddPageHeaderNavlink}`}>{title}</div>}
                {displayCount === "selected" && <div className={`${styles.dropDownTitle} ddPageHeaderNavlink}`}>{title}&nbsp;{numSelected === 0 ? '' : `(${numSelected})`}</div>}
                {displayCount === "all" &&  <div className={`${styles.dropDownTitle} ${styles.ddPageHeaderNavlink}`}>{title}&nbsp;{list.length === 0 ? '' : `(${list.length})`}</div>}
                <div>{this.showUpDownArrow(upDownArrow)}</div>
            </div>
            <CSSTransition in={listOpen} timeout={300} classNames="ddmenu">
                <div>
                {listOpen && (
                    <ul className={ddListClass}  onMouseLeave={this.hideDropDown}>
                        {/* list.map((item) => (
                        <li key={item.key} >
                            <Link to={`${item.path}`} style={{textDecoration: 'none'}}>
                                <div className="drop-down-list-item">{item.title}</div>
                            </Link>{item.selected && <CheckIcon />}
                        </li>
                        )) */}
                        {/* list.map((item) => (
                            <li className="drop-down-list-item" key={item.key} 
                                onClick={this.toggleSelected.bind(this, item.key, item.listname)} >
                                {item.title} {item.selected && <CheckIcon />}
                            </li>
                        ))*/}
                        { list.map((item) => (
                            <li key={item.key}>
                                <a href={`${item.path}`}><div className={styles.dropDownListItem}>{item.title}</div> </a>
                                {item.selected && <CheckIcon />}
                            </li>
                        )) }
                    </ul>
                )} 
                </div>
            </CSSTransition>
        </div>
        )
    }
}

DropDownMenu.propTypes = {
    title:          PropTypes.string,   /* this is the drop down list title (aka header) */
    list:           PropTypes.array,    /* this is the actual dropdown list */
    toggleSelected: PropTypes.func,     /* function passed by parent to toggle the selected property on the list item  */
    altHeaderClass: PropTypes.string,   /* alternate class for header or title component */
    altDDListClass: PropTypes.string,   /* alternate class for drop down list  component */
    config:         PropTypes.object    /* config is an object with  2 properties displayCount and displayHeader.
                                           displayCount allows you to show count of all items or selected items, in the header. 
                                           Possible values are "no", "selected", or "all".  
                                           displayHeader (aka title) is a boolean value of either true or false */  
};

// var clickOutsideConfig = {       /* this used for custom handler and functinoal component */
//     handleClickOutside: function(instance) {
//       return DropDownMenu.handleClickOutside;
//     }
// };

export default DropDownMenu;
// export default onClickOutside(DropDownMenu);

/*
    THIS IS SAMPLE toggleSelected METHOD USED ON THE PARENT

// This is function called when user selects list item in the drop down list 
toggleSelected = (key, listname) => {
    // assign the name of the local state variable 
    let dropDownList = this.state[listname];  // this is same as this.state.listname 
    dropDownList[key].selected = !dropDownList[key].selected
    this.setState({
      [listname]: dropDownList
    })
}


   THIS IS SAMPLE METHOD USED ON THE PARENT TO APPEND A TEXT BUTTON 
 getTextButtonItem = () => {

        // construct an array with one item to concat to list 
        let textButtonItem = [{
            key: 999,
            title: <TextButton text="Remove my name" myclassname="text-button-xxsmall" onClickHandler={() => {console.log("Remove my name")}} />
            // selected: false,
            // key: "location"
        }]
        return textButtonItem;
    }

   BELOW IS A SAMPLE DROP DOWN COMPONENT CALLING THE ABOVE METHOD TO CONCAT TO THE LIST AT RUN TIME
<DropDownMenu title="Names" list={ddlist.concat(this.getTextButtonItem())} toggleSelected={this.toggleSelected} />


   SAMPLE LIST ITEM DISPLAYING TITLE AS PLAIN TEXT
    {listOpen &&  <ul className={`${ddListClass}`} >
                {list.map((item) => (
                <li className="drop-down-list-item" key={item.key} 
                    onClick={this.toggleSelected.bind(this, item.key, item.listname)} >
                    {item.title} {item.selected && <CheckIcon />}
                </li>
                ))}
            </ul>}


   
            <ul className={`${ddListClass}`}  onMouseLeave={this.hideDropDown}>
                        {list.map((item) => (
                        <li key={item.key} >
  COMMENT OUT            onClick={this.toggleSelected.bind(this, item.key, item.listname)} > 
                        <Link to="/resources/features" style={{textDecoration: 'none'}}>
                        <div className="drop-down-list-item">{item.title}</div>
                    </Link>{item.selected && <CheckIcon />}
                </li>
                ))}
            </ul>
        





*/