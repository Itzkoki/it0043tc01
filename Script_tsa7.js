
document.addEventListener('DOMContentLoaded', () => {
    const flexContainer = document.getElementById('flex-container');

    // Helper function to set style properties
    const setFlexContainerStyle = (property, value) => {
        flexContainer.style[property] = value;
    };

    // Reset Flexbox
    document.getElementById('reset').addEventListener('click', () => {
        setFlexContainerStyle('flexDirection', 'row');
        setFlexContainerStyle('justifyContent', 'flex-start');
        setFlexContainerStyle('alignItems', 'stretch');
        setFlexContainerStyle('gap', '0px');
        document.querySelectorAll('.flex-item').forEach(item => setFlexContainerStyle('flexGrow', '0'));
    });

    // Set Gap
    document.getElementById('set-gap').addEventListener('click', () => {
        const gapValue = document.getElementById('gap').value;
        setFlexContainerStyle('gap', `${gapValue}px`);
    });

    // Flex Direction
    document.getElementById('direction-row').addEventListener('click', () => setFlexContainerStyle('flexDirection', 'row'));
    document.getElementById('direction-column').addEventListener('click', () => setFlexContainerStyle('flexDirection', 'column'));

    // Justify Content
    document.getElementById('justify-start').addEventListener('click', () => setFlexContainerStyle('justifyContent', 'flex-start'));
    document.getElementById('justify-center').addEventListener('click', () => setFlexContainerStyle('justifyContent', 'center'));
    document.getElementById('justify-end').addEventListener('click', () => setFlexContainerStyle('justifyContent', 'flex-end'));
    document.getElementById('justify-space-between').addEventListener('click', () => setFlexContainerStyle('justifyContent', 'space-between'));
    document.getElementById('justify-space-around').addEventListener('click', () => setFlexContainerStyle('justifyContent', 'space-around'));
    document.getElementById('justify-space-evenly').addEventListener('click', () => setFlexContainerStyle('justifyContent', 'space-evenly'));

    // Align Items
    document.getElementById('align-start').addEventListener('click', () => setFlexContainerStyle('alignItems', 'flex-start'));
    document.getElementById('align-center').addEventListener('click', () => setFlexContainerStyle('alignItems', 'center'));
    document.getElementById('align-end').addEventListener('click', () => setFlexContainerStyle('alignItems', 'flex-end'));

    // Flex Grow Reset
    document.getElementById('grow-reset').addEventListener('click', () => {
        document.querySelectorAll('.flex-item').forEach(item => item.style.flexGrow = '0');
    });

    // Flex Grow All
    document.getElementById('grow-all').addEventListener('click', () => {
        document.querySelectorAll('.flex-item').forEach(item => item.style.flexGrow = '1');
    });

    // Flex Grow for individual items
    const setFlexGrow = (elementId, inputId) => {
        const value = document.getElementById(inputId).value;
        document.getElementById(elementId).style.flexGrow = value;
    };

    document.getElementById('growB1').addEventListener('click', () => setFlexGrow('item1', 'grow-b1'));
    document.getElementById('growB2').addEventListener('click', () => setFlexGrow('item2', 'grow-b2'));
    document.getElementById('growB3').addEventListener('click', () => setFlexGrow('item3', 'grow-b3'));
});
