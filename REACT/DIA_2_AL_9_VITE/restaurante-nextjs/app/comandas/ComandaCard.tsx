import type { Pedido } from '../../src/types';

interface Props {
    pedido: Pedido;
}

export default function ComandaCard({ pedido }: Props) {
    return (
        <div className="border rounded p-4">
            <p>ID: {pedido._id}</p>
            <p>Estado: {pedido.estado}</p>
        </div>
    );
}