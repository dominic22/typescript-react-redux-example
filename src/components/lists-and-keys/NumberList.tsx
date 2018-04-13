import * as React from 'react';

function ListItem(props: {value: number}) {
    // There is no need to specify the key here:
    return <li>{props.value}</li>;
}

function NumberList(props: {numbers: number[]}) {
    const numbers = props.numbers;

    // Keys help React identify which items have changed, are added, or are removed.
    // Keys should be given to the elements inside the array to give the elements a stable identity:
    const listItems = numbers.map((num: number) =>
        (
            <ListItem key={num.toString()} value={num}/>
        )
    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}

export default NumberList;