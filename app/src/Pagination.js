export default function Pagination(props) {

    const getPages = () => {
        const result = [];
        for (var i = 0; i < props.total; i++) {
            let page = i + 1;
            result.push(
                <a 
                    onClick={() => props.pageChange(page)}
                    className={props.current === page ? 'active' : ''}
                >
                    {page}
                </a>
            );
        }
        return result;
    }

    return (
        <div className="topbar-filter">
            <label>Movies per page:</label>
            <select>
                <option value="range">5 Movies</option>
                <option value="saab">10 Movies</option>
            </select>
            <div className="pagination2">
                <span>Page {props.current} of {props.total}:</span>

                {/* Array.apply(0, Array(props.total)).map(value => {
                    <a className="active" href="#">{value}</a>
                }) */}
                
                {getPages()}
                
            </div>
        </div>
    );
}