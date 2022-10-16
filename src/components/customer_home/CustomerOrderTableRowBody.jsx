
export default function CustomerOrderTableRowBody(props){


    return ( <tbody>
        <tr>
          <td>{props.id}</td>
          <td>{props.data.id}</td>
          <td>{props.data.toping.topingName}</td>
          <td>{props.data.orderReceivedDate}</td>
          <td>{props.data.orderDeliveryDate}</td>
          <td>{props.data.status}</td>
          <td>{props.data.totalPrice}/-</td>
        </tr>
      </tbody>);
}