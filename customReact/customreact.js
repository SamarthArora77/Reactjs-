function customrender(reactElement, container) {
    /* Way 1 - using createElement and appendChild
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);

    container.appendChild(domElement); */

    // Way 2 - using innerHTML
    const { type, props, children } = reactElement;
    const domElement = document.createElement(type);
    domElement.innerHTML = children;
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank',

    },
    children: 'Google'
};

const root = document.querySelector('#root');

customrender(reactElement, root);
