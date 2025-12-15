import React from 'react';
import { Order, StoreProfile } from '../types';

interface ReceiptProps {
  order: Order | null;
  store: StoreProfile;
}

export const Receipt: React.FC<ReceiptProps> = ({ order, store }) => {
  if (!order) return null;

  return (
    <div id="printable-area" className="hidden print:block w-[80mm] p-2 bg-white text-black font-mono text-sm leading-tight">
      <div className="text-center mb-4">
        <h1 className="text-xl font-bold uppercase">{store.name}</h1>
        <p className="text-xs">{store.address}</p>
        <p className="text-xs">Ph: {store.phone}</p>
        {store.gstin && <p className="text-xs">GSTIN: {store.gstin}</p>}
      </div>

      <div className="border-b border-black border-dashed mb-2 pb-2">
        <div className="flex justify-between text-xs">
          <span>Bill No: #{order.id.slice(-6)}</span>
          <span>{new Date(order.timestamp).toLocaleDateString()}</span>
        </div>
        <div className="flex justify-between text-xs">
          <span>Mode: {order.paymentMode}</span>
          <span>{new Date(order.timestamp).toLocaleTimeString()}</span>
        </div>
      </div>

      <div className="mb-2">
        <div className="grid grid-cols-12 font-bold text-xs border-b border-black pb-1 mb-1">
          <div className="col-span-6">Item</div>
          <div className="col-span-2 text-right">Qty</div>
          <div className="col-span-4 text-right">Amt</div>
        </div>
        {order.items.map((item, idx) => (
          <div key={idx} className="grid grid-cols-12 text-xs mb-1">
            <div className="col-span-6 truncate">{item.name}</div>
            <div className="col-span-2 text-right">{item.quantity}</div>
            <div className="col-span-4 text-right">{(item.price * item.quantity).toFixed(2)}</div>
          </div>
        ))}
      </div>

      <div className="border-t border-black border-dashed pt-2 mb-4">
        <div className="flex justify-between text-xs">
          <span>Subtotal</span>
          <span>{order.subtotal.toFixed(2)}</span>
        </div>
        {order.discount > 0 && (
          <div className="flex justify-between text-xs">
            <span>Discount</span>
            <span>-{order.discount.toFixed(2)}</span>
          </div>
        )}
         <div className="flex justify-between text-xs">
          <span>Tax (5%)</span>
          <span>{order.tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-lg mt-2 border-t border-black pt-1">
          <span>TOTAL</span>
          <span>{store.currency} {order.total.toFixed(2)}</span>
        </div>
      </div>

      <div className="text-center text-xs mt-4">
        <p>{store.footerMessage}</p>
        <p className="mt-2 text-[10px] text-gray-500">Powered by ProBiller</p>
      </div>
    </div>
  );
};
