const Box = ({item, handleClick}) => {
    return <div className={"box " + (item?.isClicked ? "green" : "gray")} onClick={() => handleClick(item)}>
        {/* {item.id} */}
        {/* Id shown can be removed later */}
    </div>;
}

export default Box;