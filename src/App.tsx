/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Printer, User, School, Bus, MapPin, Phone, UserCheck } from 'lucide-react';

interface CardData {
  nombre: string;
  gela: string;
  autobus: string;
  maisu: string;
  parada: string;
  telefonos: string;
  educacion: string;
  accentColor: string;
}

const BusCardSVG = ({ data }: { data: CardData }) => {
  return (
    <svg
      width="80mm"
      height="60mm"
      viewBox="0 0 302.3622 226.77165"
      version="1.1"
      id="svg5"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsSvg="http://www.w3.org/2000/svg"
      className="max-w-full h-auto shadow-lg bg-white"
    >
      <g id="layer1">
        <rect
          style={{ fill: 'none', fillOpacity: 1, stroke: '#002f87', strokeWidth: 1.37249, strokeDasharray: 'none', strokeOpacity: 1 }}
          id="rect699"
          width="278.23438"
          height="203.22087"
          x="12.063912"
          y="11.77539"
        />
        <text
          xmlSpace="preserve"
          style={{ fontSize: '12.297px', lineHeight: 1.25, fontFamily: 'sans-serif', fill: data.accentColor, strokeWidth: 0.768563 }}
          x="123.54158"
          y="43.974033"
          id="text1758"
        >
          <tspan
            id="tspan1756"
            x="123.54158"
            y="50.0"
            style={{ fontStyle: 'normal', fontVariant: 'normal', fontWeight: 'normal', fontStretch: 'normal', fontSize: '10.2475px', fontFamily: 'Arial', fill: data.accentColor, strokeWidth: 0.768563 }}
          >
            {data.educacion}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{ fontSize: '22.8373px', lineHeight: 1.25, fontFamily: 'sans-serif', fill: '#002f88', fillOpacity: 1, strokeWidth: 1.42733 }}
          x="263.7403"
          y="48.84787"
          id="text1812"
          transform="scale(0.90728721,1.1021868)"
        >
          <tspan
            id="tspan1810"
            x="263.7403"
            y="48.84787"
            style={{ fontStyle: 'normal', fontVariant: 'normal', fontWeight: 'bold', fontStretch: 'normal', fontSize: '34.2558px', fontFamily: 'sans-serif', fill: '#002f88', fillOpacity: 1, strokeWidth: 1.42733 }}
          >
            {data.gela}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{ fontSize: '16px', lineHeight: 1.25, fontFamily: 'sans-serif', fill: '#1f6cc5', fillOpacity: 1 }}
          x="24.92757"
          y="91.401093"
          id="text2506"
        >
          <tspan
            id="tspan2504"
            x="24.92757"
            y="91.401093"
            style={{ fontStyle: 'normal', fontVariant: 'normal', fontWeight: 'bold', fontStretch: 'normal', fontSize: '16px', fontFamily: 'Arial', fill: '#1f6cc5', fillOpacity: 1 }}
          >
            {data.nombre}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{ fontSize: '16px', lineHeight: 1.25, fontFamily: 'sans-serif', fill: '#000080' }}
          x="26.11507"
          y="113.38583"
          id="text2514"
        >
          <tspan
            id="tspan2512"
            x="26.11507"
            y="113.38583"
            style={{ fontStyle: 'normal', fontVariant: 'normal', fontWeight: 'bold', fontStretch: 'normal', fontSize: '12px', fontFamily: 'Arial', fill: '#000080' }}
          >
            Parada
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{ fontSize: '13.3333px', lineHeight: 1.25, fontFamily: 'sans-serif', fill: '#000080', fontWeight: 'normal' }}
          x="26.191242"
          y="134.0345"
          id="text2518"
        >
          <tspan
            id="tspan2516"
            x="26.191242"
            y="134.0345"
            style={{ fontStyle: 'normal', fontVariant: 'normal', fontWeight: 'normal', fontStretch: 'normal', fontSize: '13.3333px', fontFamily: 'sans-serif', fill: '#000080' }}
          >
            {data.parada}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{ fontStyle: 'normal', fontVariant: 'normal', fontWeight: 'normal', fontStretch: 'normal', fontSize: '8px', lineHeight: 1.25, fontFamily: 'Arial', fill: data.accentColor, strokeWidth: 0.768563 }}
          x="221.95151"
          y="117.79885"
          id="text1758-3"
        >
          <tspan
            id="tspan1756-5"
            x="221.95151"
            y="117.79885"
            style={{ fontStyle: 'normal', fontVariant: 'normal', fontWeight: 'normal', fontStretch: 'normal', fontSize: '8px', fontFamily: 'Arial', fill: data.accentColor, strokeWidth: 0.768563 }}
          >
            Nº Autobús
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{ fontStyle: 'italic', fontVariant: 'normal', fontWeight: 'bold', fontStretch: 'normal', fontSize: '64px', lineHeight: 1.25, fontFamily: 'Arial', fill: data.accentColor, strokeWidth: 0.768563 }}
          x="201.53531"
          y="184.27083"
          id="text1758-3-3"
        >
          <tspan
            id="tspan1756-5-5"
            x="201.53531"
            y="184.27083"
            style={{ fontStyle: 'italic', fontVariant: 'normal', fontWeight: 'bold', fontStretch: 'normal', fontSize: '64px', fontFamily: 'Arial', fill: data.accentColor, strokeWidth: 0.768563 }}
          >
            {data.autobus}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{ fontStyle: 'normal', fontVariant: 'normal', fontWeight: 'bold', fontStretch: 'normal', fontSize: '8px', lineHeight: 1.25, fontFamily: 'Arial', fill: '#000080' }}
          x="27.430103"
          y="149.35342"
          id="text2514-8"
        >
          <tspan
            id="tspan2512-5"
            x="27.430103"
            y="149.35342"
            style={{ fontStyle: 'normal', fontVariant: 'normal', fontWeight: 'bold', fontStretch: 'normal', fontSize: '8px', fontFamily: 'Arial', fill: '#000080' }}
          >
            Andareño / Maisu
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{ fontStyle: 'normal', fontVariant: 'normal', fontWeight: 'normal', fontStretch: 'normal', fontSize: '8px', lineHeight: 1.25, fontFamily: 'Arial', fill: '#000080' }}
          x="27.430103"
          y="159.66527"
          id="text2514-8-5"
        >
          <tspan
            id="tspan2512-5-7"
            x="27.430103"
            y="159.66527"
            style={{ fontStyle: 'normal', fontVariant: 'normal', fontWeight: 'normal', fontStretch: 'normal', fontSize: '8px', fontFamily: 'Arial', fill: '#000080' }}
          >
            {data.maisu}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{ fontStyle: 'normal', fontVariant: 'normal', fontWeight: 'bold', fontStretch: 'normal', fontSize: '8px', lineHeight: 1.25, fontFamily: 'Arial', fill: '#000080' }}
          x="27.430103"
          y="175.28348"
          id="text2514-8-4"
        >
          <tspan
            id="tspan2512-5-4"
            x="27.430103"
            y="175.28348"
            style={{ fontStyle: 'normal', fontVariant: 'normal', fontWeight: 'bold', fontStretch: 'normal', fontSize: '8px', fontFamily: 'Arial', fill: '#000080' }}
          >
            Teléfonos
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{ fontStyle: 'normal', fontVariant: 'normal', fontWeight: 'normal', fontStretch: 'normal', fontSize: '8px', lineHeight: 1.25, fontFamily: 'Arial', fill: '#000080' }}
          x="27.430103"
          y="185.59532"
          id="text2514-8-5-3"
        >
          <tspan
            id="tspan2512-5-7-0"
            x="27.430103"
            y="185.59532"
            style={{ fontStyle: 'normal', fontVariant: 'normal', fontWeight: 'normal', fontStretch: 'normal', fontSize: '8px', fontFamily: 'Arial', fill: '#000080' }}
          >
            {data.telefonos}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{ fontStyle: 'italic', fontVariant: 'normal', fontWeight: 'normal', fontStretch: 'normal', fontSize: '6.66667px', lineHeight: 1.25, fontFamily: 'Arial', fill: '#000080' }}
          x="27.430103"
          y="207.97308"
          id="text2514-8-5-3-5"
        >
          <tspan
            id="tspan2512-5-7-0-1"
            x="27.430103"
            y="207.97308"
            style={{ fontStyle: 'italic', fontVariant: 'normal', fontWeight: 'normal', fontStretch: 'normal', fontSize: '6.66667px', fontFamily: 'Arial', fill: '#000080' }}
          >
            TLF Colegio Vizcaya 944541400 / TLF Urgencias Colegio Vizcaya 629756696
          </tspan>
        </text>
        <image
          width="89.864906"
          height="43.331532"
          preserveAspectRatio="none"
          href="https://upload.wikimedia.org/wikipedia/commons/5/56/Logotipo_2019.png"
          id="image355"
          x="15.626141"
          y="18.228436"
        />
      </g>
    </svg>
  );
};

export default function App() {
  const [data, setData] = useState<CardData>({
    nombre: 'NOMBRE APELLIDO APELLIDO',
    gela: '4A',
    autobus: '01',
    maisu: 'Nombre Apellido',
    parada: 'Parada Parada (Parada)',
    telefonos: '611111111 / 61222222',
    educacion: 'Educación Infantil',
    accentColor: '#ff6600',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Header - Hidden on Print */}
      <header className="bg-white border-b border-slate-200 py-6 px-4 sm:px-8 print:hidden">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
              <Bus className="text-indigo-600" />
              Txartela Autobús Vizcaya
            </h1>
            <p className="text-slate-500 text-sm">Generador de tarjetas de identificación de autobús</p>
          </div>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-xl font-medium transition-all shadow-sm active:scale-95"
          >
            <Printer size={18} />
            Imprimir
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-4 sm:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 print:p-0 print:block">
        {/* Form Section - Hidden on Print */}
        <section className="space-y-6 print:hidden">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-4">
            <h2 className="text-lg font-semibold flex items-center gap-2 border-b pb-3">
              <User size={20} className="text-slate-400" />
              Datos del Alumno
            </h2>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <User size={14} /> Nombre Apellido
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={data.nombre}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                    <School size={14} /> Gela
                  </label>
                  <input
                    type="text"
                    name="gela"
                    value={data.gela}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                    <Bus size={14} /> Autobús
                  </label>
                  <input
                    type="text"
                    name="autobus"
                    value={data.autobus}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <School size={14} /> Educación
                </label>
                <input
                  type="text"
                  name="educacion"
                  value={data.educacion}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <MapPin size={14} /> Parada
                </label>
                <input
                  type="text"
                  name="parada"
                  value={data.parada}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <UserCheck size={14} /> Andareño / Maisu
                </label>
                <input
                  type="text"
                  name="maisu"
                  value={data.maisu}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <Phone size={14} /> Teléfonos
                </label>
                <input
                  type="text"
                  name="telefonos"
                  value={data.telefonos}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  Color de Acento
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    name="accentColor"
                    value={data.accentColor}
                    onChange={handleChange}
                    className="w-12 h-12 p-1 bg-white border border-slate-200 rounded-lg cursor-pointer"
                  />
                  <span className="text-sm font-mono text-slate-500 uppercase">{data.accentColor}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Preview Section */}
        <section className="flex flex-col items-center justify-start space-y-6 print:m-0 print:p-0">
          <div className="print:hidden">
            <h2 className="text-sm font-medium text-slate-400 uppercase tracking-widest mb-4">Vista Previa</h2>
          </div>
          
          {/* Paper CSS Container for Print */}
          <div className="sheet-container print:block">
            <div className="sheet bg-white flex items-center justify-center overflow-hidden print:shadow-none" style={{ width: '80mm', height: '60mm' }}>
              <BusCardSVG data={data} />
            </div>
          </div>

          <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 max-w-md print:hidden">
            <p className="text-xs text-indigo-700 leading-relaxed">
              <strong>Nota:</strong> Al imprimir, asegúrate de que la escala esté al 100% y los márgenes estén desactivados para obtener el tamaño exacto de 8cm x 6cm.
            </p>
          </div>
        </section>
      </main>

      {/* Print-only styles */}
      <style>{`
        @media print {
          body {
            background: white !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .sheet-container {
            display: block !important;
            width: 80mm;
            height: 60mm;
            margin: 0;
            padding: 0;
          }
          .sheet {
            box-shadow: none !important;
            border: none !important;
          }
          @page {
            size: 80mm 60mm;
            margin: 0;
          }
        }
      `}</style>
    </div>
  );
}
