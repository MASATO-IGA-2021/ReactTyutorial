export default function StyledPanel({children}) {
    const style = {
        margin: 50,
        padding: 20,
        border: '1px solid #000',
        width: 'it-content',
        boxShadow: '10px 5px 5px #999',
        backgroundColoer: '#fff'
    }
    return (
        <div style={style}>
            {children}
        </div>
    )
}