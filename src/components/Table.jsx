/* eslint-disable react/prop-types */
const Table = ({ headers, admindata }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {headers &&
              headers.map((t) => {
                return (
                  <th key={t} className="px-20">
                    {t}
                  </th>
                );
              })}
          </tr>
        </thead>
        <tbody>
          {admindata instanceof Array && admindata.length > 0 ? (
            admindata.map((data) => (
              <tr key={data?.ID}>
                <td className="px-20">{data?.ID}</td>
                <td className="px-20">{data?.Name}</td>
                <td className="px-20">{data?.Email}</td>
              </tr>
            ))
          ) : (
            <></>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
