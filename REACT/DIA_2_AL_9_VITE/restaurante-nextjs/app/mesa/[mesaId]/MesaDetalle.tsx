'use client';

import type { Mesa } from '../../../src/types';

export default function MesaDetalle({
    mesa,
}: {
    mesa: Mesa;
}) {
    return (
        <div className="bg-white rounded-lg p-4 shadow-sm">
            <p>Estado actual: {mesa.estado}</p>
        </div>
    );
}