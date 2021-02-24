export default function MenuItemPreview(props) {
    return (
        <>
        <div className="row mb-5">
            {props.image ? <div className="menu-item-img col-12 col-lg-6"><img src={props.image} alt={props.name} /></div> : undefined }
            <div className="menu-item-description col-12 col-lg-6">
                <h2>{props.name}</h2>
                <p>{props.description}</p>
            </div>
        </div>
        </>
    )
}
