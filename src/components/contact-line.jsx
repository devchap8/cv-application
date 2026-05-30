export default function ContactLine({icon, text, isLink = false}) {
    return (
        <div className="contactLine">
            {icon}
            {isLink ? <a href={`https://${text}`}>{text}</a> : <p>{text}</p>}
        </div>
    )
}