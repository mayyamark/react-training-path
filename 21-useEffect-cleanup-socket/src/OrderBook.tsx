import { useState, useEffect } from 'react';

interface Orders {
  timestamp: string;
  microtimestamp: string;
  bids: string[];
  asks: string[];
}

const currencyPair = 'btcusd';

const OrderBook = () => {
  const [orders, setOrders] = useState<Orders | null>(null);

  useEffect(() => {
    const subscribe = {
      event: 'bts:subscribe',
      data: {
        channel: `order_book_${currencyPair}`
      }
    };
    const ws = new WebSocket('wss://ws.bitstamp.net');

    ws.onopen = () => {
      ws.send(JSON.stringify(subscribe));
    };

    ws.onmessage = (event) => {
      const response = JSON.parse(event.data);
      setOrders(response.data as Orders);
    };

    ws.onclose = () => {
      ws.close();
    };

    return () => {
      ws.close();
    };
  }, []);

  const renderOrderTable = (title: string, order: string[]) => (
    <table>
      <thead>
        <tr>
          <th colSpan={2}>{title}</th>
        </tr>
        <tr>
          <th>Amount (BTC)</th>
          <th>Price (USD)</th>
        </tr>
      </thead>
      <tbody>
        {order && order.map((o) => (
          <tr key={JSON.stringify(o)}>
            <td>{o[1]}</td>
            <td>{o[0]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  if (!orders) {
    return null;
  }

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>
        {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}
      </h2>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {renderOrderTable('Bids', orders.bids)}
        {renderOrderTable('Asks', orders.asks)}
      </div>
    </div>
  );
};

export default OrderBook;