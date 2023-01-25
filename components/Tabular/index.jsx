export default function TabularTable({ data }) {
  
  return (
    <div>
      <table className="uk-table uk-table-divider ">
        <thead>
          <tr>
            <th>ProjectName</th>
            <th>TechStack</th>
            <th>Category</th>
            <th>Tags</th>
            <th>Contributors</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr>
              <td>
                <div className=" uk-flex uk-flex-row">
                  <div className=" uk-margin-small-right">
                    <img
                      className="uk-border-circle "
                      src={row.icon_url}
                      width="40"
                      height="40"
                      alt=""
                    ></img>
                  </div>
                  <div>
                    <h3 className="uk-h3 uk-text-bolder uk-margin-small-bottom">
                      {row.name}
                    </h3>
                    <p style={{ color: "rgb(115, 115, 115)", width: "350px" }}>
                      {row.description}
                    </p>
                  </div>
                </div>
              </td>
              <td>
                <div className=" uk-flex uk-flex-row ">
                  {row.languages.map((Lang) => (
                    <span
                      className="mpl-badge uk-light uk-padding-small"
                      style={{ marginRight: "2px" }}
                    >
                      {Lang}
                    </span>
                  ))}
                </div>
              </td>
              <td>
                <span className="mpl-badge uk-light uk-padding-small uk-margin-small-bottom uk-margin-small-right">
                  utilities
                </span>
              </td>
              <td className="uk-flex uk-flex-row">
                {row.topics.map((topic) => (
                  <span
                    className="mpl-badge uk-light uk-padding-small"
                    style={{ marginRight: "2px" }}
                  >
                    {topic}
                  </span>
                ))}
              </td>
              <td>
                <div className="uk-flex ">
                  {row.top_contributors.map((user) => (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      key={user.login}
                      href={user.html_url}
                    >
                      <img
                        className="uk-comment-avatar uk-border-circle uk-box-shadow-medium grayscale"
                        uk-tooltip={`title: ${user.login}; pos: bottom`}
                        src={user.avatar_url}
                        width="25"
                        height="25"
                        alt=""
                      />
                    </a>
                  ))}
                  <div>
                    {row.contributors.length > 3 && (
                      <button className="contribButton">
                        {`+${row.contributors.length - 3}`}
                      </button>
                    )}
                    <div uk-dropdown="pos: bottom-left; mode: click;boundary: !.contribButton">
                      <ul className="uk-nav uk-dropdown-nav uk-text-bold">
                        {row.contributors.slice(3).map((contrib) => (
                          <li className="uk-margin-small-bottom">
                            <div className="uk-flex">
                            <img src={contrib.avatar_url} className="uk-margin-small-right additionalContributorsStyle"></img>
                            <span>{contrib.login}</span>
                            </div>
                          </li>
                          
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
