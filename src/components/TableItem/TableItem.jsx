import moment from 'moment';

export default function TableItem({ item, handleClick }) {
  const { date, distance } = item;

  return (
    <tr>
      <td className="records__data">{moment(date).format("DD.MM.YYYY")}</td>
      <td className="records__data">{distance}</td>
      <td className="records__data records__data--actions" onClick={handleClick}>&#10007;</td>
    </tr>
  );
}
