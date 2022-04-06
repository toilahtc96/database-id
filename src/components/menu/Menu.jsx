import React, { useRef, useState, useEffect, createRef } from "react";




/*--------------------
Menu
--------------------*/
const Menu = ({ items }) => {
    const $root = useRef();
    const $items = useRef(items.map(createRef));
    const [active, setActive] = useState(0);

    const animate = () => {
        const menuOffset = $root.current.getBoundingClientRect();
        const activeItem = $items.current[active].current;
        const { width, height, top, left } = activeItem.getBoundingClientRect();

        const settings = {
            x: left - menuOffset.x,
            y: top - menuOffset.y,
            width: width,
            height: height,
            backgroundColor: items[active].color,
            ease: 'elastic.out(.7, .7)',
            duration: .8
        };


        // gsap.to($indicator1.current, {
        //   ...settings });


        // gsap.to($indicator2.current, {
        //   ...settings,
        //   duration: 1 });

    };

    useEffect(() => {
        animate();
        window.addEventListener('resize', animate);

        return () => {
            window.removeEventListener('resize', animate);
        };
    }, [active]);

    return /*#__PURE__*/(
        React.createElement("div", {
            ref: $root,
            className: "menu"
        },
            React.createElement("div", {
                ref: $root,
                className: "",

            },`EZYFOX MESSAGE BOX`),
            React.createElement("div", {
                ref: $root,
                className: "space-menu",

            }),
            items.map((item, index) => /*#__PURE__*/
                React.createElement("a", {
                    key: item.name,
                    ref: $items.current[index],
                    className: `item ${active === index ? 'active' : ''}`,
                    onMouseEnter: () => {
                        setActive(index);
                    },
                    href: item.href
                },

                    item.name)), /*#__PURE__*/


        ));



};


// /*--------------------
// App
// --------------------*/
// const App = () => {
//   return /*#__PURE__*/(
//     React.createElement("div", { className: "App" }, /*#__PURE__*/
//     React.createElement(Menu, { items: items })));


// };


// /*--------------------
// Render
// --------------------*/
// ReactDOM.render( /*#__PURE__*/React.createElement(App, null),
// document.getElementById("root"));
export default Menu;