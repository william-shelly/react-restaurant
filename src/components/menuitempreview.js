export default function MenuItemPreview(props) {
    return (
        <>
            {props.image ? <div className="menu-item-img col-12 col-lg-3 mb-4"><img src={props.image} alt={props.name} /></div> : undefined }
            <div className="menu-item-description col-12 col-lg-3 mb-4">
                <h2>{props.name}</h2>
                <p>{props.description}</p>
            </div>
        </>
    )
}
