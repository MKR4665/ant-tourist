import React from 'react'
import {
  FaCheck,
  FaChevronUp,
  FaClock,
  FaDownload,
  FaFileInvoice,
  FaPhoneAlt,
  FaReceipt,
  FaWhatsapp,
} from 'react-icons/fa'
import FigmaNavbar from '../components/figma/FigmaNavbar'
import EnquiryFooter from '../components/EnquiryFooter'
import FloatingCTA from '../components/ui/FloatingCTA'
import logoGreenImage from '../assets/Logo-green.png'
import qrImage from '../image/qr.png'
import stampImage from '../image/stamp.png'

function ReceiptButton({ icon: Icon, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-[50px] items-center justify-center gap-2.5 rounded-xl border border-[#E2E8F0] bg-white px-8 text-[14px] font-bold leading-5 text-[#334155] shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
    >
      <Icon className="text-[18px]" />
      {children}
    </button>
  )
}

function buildAntLogo() {
  return `
    <div class="ant-logo">
      <div class="ant-word">ANT</div>
      <div class="ant-lines">
        <span></span><span></span><span></span>
        <strong>TOURIST</strong>
        <span></span><span></span><span></span>
      </div>
    </div>
  `
}

function buildDocumentShell(title, body) {
  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${title}</title>
  <style>
    * { box-sizing: border-box; }
    body { margin: 0; background: #f4f5f3; color: #4D4D4D; font-family: Inter, Arial, sans-serif; }
    .page { width: 595px; min-height: 842px; margin: 24px auto; background: #fff; box-shadow: 0 16px 40px rgba(0,0,0,.12); position: relative; overflow: hidden; }
    .header { display: flex; align-items: flex-start; justify-content: space-between; padding: 18px 26px 14px; border-bottom: 1px solid #e5e7eb; }
    .title { text-align: center; flex: 1; }
    .title h1 { margin: 0; font-size: 16px; line-height: 22px; font-weight: 700; color: #4D4D4D; }
    .title h1.green { color: #748E36; font-size: 18px; }
    .title p { margin: 2px 0 0; color: #7E7E7E; font-size: 8px; line-height: 14px; }
    .top-meta { min-width: 125px; font-size: 8px; line-height: 17px; text-align: right; }
    .ant-logo { width: 118px; color: #748E36; }
    .ant-word { font-size: 30px; font-weight: 900; letter-spacing: -2px; line-height: 24px; }
    .ant-lines { display: grid; grid-template-columns: 1fr; gap: 2px; width: 110px; }
    .ant-lines span { display: block; height: 1px; background: #748E36; }
    .ant-lines strong { display: block; text-align: center; font-size: 8px; line-height: 7px; letter-spacing: .4px; }
    .company { padding: 6px 26px 10px; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; font-size: 8px; line-height: 17px; border-bottom: 1px solid #e5e7eb; }
    .company h2 { margin: 0 0 4px; font-size: 16px; color: #4D4D4D; }
    .company .right { text-align: right; }
    .card { margin: 20px 21px; border: .6px solid #D6D6D6; border-radius: 6px; background: white; box-shadow: 2px 2px 4px rgba(59,75,150,.2); overflow: hidden; }
    .card-title { background: #748E36; color: white; padding: 10px 18px; font-size: 14px; font-weight: 700; }
    .card-body { padding: 16px 24px; }
    .row { display: grid; grid-template-columns: 1fr 18px 1fr; align-items: center; gap: 10px; padding: 5px 0; font-size: 11px; line-height: 18px; }
    .row .value { text-align: right; font-weight: 500; }
    .row .colon { text-align: center; font-weight: 700; }
    .split { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; font-size: 9px; line-height: 18px; }
    .split b { color: #748E36; }
    table { width: 100%; border-collapse: collapse; font-size: 8px; }
    th { background: rgba(116,142,54,.1); color: #748E36; font-weight: 700; }
    th, td { border: 1px solid #e5e7eb; padding: 10px 8px; text-align: left; vertical-align: top; }
    td.right, th.right { text-align: right; }
    .total-line { display: flex; justify-content: space-between; padding: 9px 14px; background: rgba(116,142,54,.1); font-size: 11px; font-weight: 700; color: #748E36; }
    .info { margin: 20px 21px; border-radius: 4px; background: rgba(116,142,54,.1); padding: 10px 14px; font-size: 10px; line-height: 18px; }
    .footer { position: absolute; left: 0; right: 0; bottom: 0; border-top: .6px solid #D6D6D6; padding: 18px 28px 20px; font-size: 8px; line-height: 17px; display: flex; justify-content: space-between; gap: 24px; }
    .qr { width: 76px; height: 76px; border: 6px solid #748E36; display: grid; grid-template-columns: repeat(5,1fr); gap: 3px; padding: 5px; background: white; }
    .qr span:nth-child(odd) { background: #111; }
    .thanks { position: absolute; left: 0; right: 0; bottom: 20px; text-align: center; font-size: 12px; color: #4D4D4D; }
    .thanks span { color: #748E36; font-weight: 800; }
    .actions { display: flex; justify-content: flex-end; gap: 8px; padding: 10px 22px 0; }
    .actions button { border: .3px solid #4D4D4D; border-radius: 4px; background: white; color: #4D4D4D; height: 24px; padding: 0 12px; font-size: 8px; }
    .terms { margin: 20px 26px 0; font-size: 8px; line-height: 15px; }
    .terms h3 { margin: 0 0 8px; font-size: 10px; text-decoration: underline; }
    @media print { body { background: white; } .page { margin: 0 auto; box-shadow: none; } .no-print { display: none; } }
  </style>
</head>
<body>${body}</body>
</html>`
}

function downloadHtml(filename, html) {
  const blob = new Blob([html], { type: 'text/html;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  link.remove()
  URL.revokeObjectURL(url)
}

async function imageToDataUri(src) {
  try {
    const response = await fetch(src)
    const blob = await response.blob()
    return await new Promise((resolve) => {
      const reader = new FileReader()
      reader.onloadend = () => resolve(reader.result)
      reader.readAsDataURL(blob)
    })
  } catch {
    return src
  }
}

function getReceiptData(isTraveller) {
  return {
    serviceName: isTraveller ? 'Traveller / Minivan Tour' : 'Bus Hire',
    vehicleLabel: isTraveller ? 'Vehicle Name' : 'Vehicle Type',
    vehicleName: isTraveller ? '12 Seater (2+1) Force Traveller' : '45 Seater (2+2) AC Luxury Coach',
    bookingId: 'ANT-01-2026',
    destination: 'Jaipur (Roundtrip)',
    amount: '70,000',
    addOns: '600',
    tax: '12,726',
    total: '83,426',
    paid: '50,000',
  }
}

function buildBookingReceipt(data) {
  return buildDocumentShell(
    'Booking Receipt',
    `<div class="page">
      <div class="header">
        ${buildAntLogo()}
        <div class="title"><h1>Booking Receipt</h1><p>Thanku for choose us.</p></div>
        <div class="top-meta">Receipt No. : ANTBKNGT01<br/>Receipt Date : 06- FEB-2026</div>
      </div>
      <div class="card">
        <div class="card-title">Booking Details</div>
        <div class="card-body">
          ${[
            ['Booking ID', data.bookingId],
            ['Destination', data.destination],
            ['Duration', '2 Days 1 Night'],
            ['Departure', '10-FEB-2026| 6:00 AM'],
            ['Arrival', '14-FEB-2026| 9:00 PM'],
            ['Service Name', data.serviceName],
            [data.vehicleLabel, data.vehicleName],
            ['Booked By', 'Isha Thakur'],
            ['Contact Number', '9899941402'],
            ['Mail ID', 'isha63198@gmail.com'],
          ].map(([label, value]) => `<div class="row"><span>${label}</span><span class="colon">:</span><span class="value">${value}</span></div>`).join('')}
        </div>
      </div>
      <div class="card">
        <div class="card-title">Payment Details</div>
        <div class="card-body">
          ${[
            ['Amount', data.amount],
            ['Add-ons Driver / 2 Blankets / Parking', data.addOns],
            ['IGST 18%', data.tax],
            ['Total Paid Amount', data.total],
          ].map(([label, value], index) => `<div class="row"><span>${label}</span><span class="colon">:</span><span class="value" style="${index === 3 ? 'color:#748E36;font-weight:800' : ''}">${value}</span></div>`).join('')}
        </div>
      </div>
      <div class="footer">
        <div>1800 1027 408<br/>support@anttravell.com<br/>www.anttravels.com<br/>B-128, Transport Nagar, Sector-69, Noida, Uttar Pradesh 201301- India</div>
        <div style="text-align:center"><b style="font-size:13px;color:#748E36">Ant Travel Pvt Ltd.</b><div class="qr">${Array.from({ length: 25 }).map(() => '<span></span>').join('')}</div><small>Scan & share your review</small></div>
      </div>
      <div class="thanks">Thanks for Choosing <span>ANT BUS</span><br/><small>We Make Travel Joyful</small></div>
    </div>`,
  )
}

function buildPaymentReceipt(data) {
  return buildDocumentShell(
    'Payment Receipt',
    `<div class="page">
      <div class="header" style="padding-top:30px">
        ${buildAntLogo()}
        <div class="title"><h1>Payment Receipt</h1><p>Thank you for payment. Here is the receipt for <b style="color:#748E36">${data.paid}</b> paid towards your tour booking.</p></div>
        <div class="top-meta">Receipt No. : ANTRCPT01<br/>Receipt Date : 06- FEB-2026</div>
      </div>
      <div class="card" style="margin-top:28px">
        <div class="card-title">Payment Details</div>
        <div class="card-body">
          ${[
            ['Paid Amount', `&#8377; ${data.paid}`],
            ['Payment Method', 'Bank Transfer'],
            ['Transaction ID', '1313547584 (HDFC)'],
            ['Payment Type', 'NEFT / IMPS/ RTGS'],
          ].map(([label, value], index) => `<div class="row"><span>${label}</span><span class="colon">:</span><span class="value" style="${index === 0 ? 'color:#748E36;font-weight:800' : ''}">${value}</span></div>`).join('')}
        </div>
      </div>
      <div class="card">
        <div class="card-title">Payment Summary</div>
        <div class="card-body">
          ${[
            ['Total Amount', `&#8377; ${data.total}`],
            ['Total Paid', '&#8377; 00'],
            ['Remaining Amount', '&#8377; 00'],
          ].map(([label, value]) => `<div class="row"><span>${label}</span><span class="colon">:</span><span class="value">${value}</span></div>`).join('')}
        </div>
      </div>
      <div class="info">Remaining balance must be cleared at least 7 days before the tour.</div>
      <div class="footer">
        <div>1800 1027 408<br/>support@anttravell.com<br/>www.anttravels.com<br/>B-128, Transport Nagar, Sector-69, Noida, Uttar Pradesh 201301- India</div>
        <div style="text-align:center"><b style="font-size:13px;color:#748E36">Ant Travel Pvt Ltd.</b><div class="qr">${Array.from({ length: 25 }).map(() => '<span></span>').join('')}</div><small>Scan & share your review</small></div>
      </div>
      <div class="thanks">Thanks for Choosing <span>ANT BUS</span><br/><small>We Make Travel Joyful</small></div>
    </div>`,
  )
}

function buildTaxInvoice(data) {
  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Tax Invoice</title>
  <style>
    @page { size: A4; margin: 0; }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      background: #f2f3f1;
      color: #4D4D4D;
      font-family: Inter, Arial, sans-serif;
    }
    .invoice-page {
      width: 794px;
      min-height: 1123px;
      margin: 24px auto;
      background: #fff;
      position: relative;
      padding: 46px 38px 70px;
      box-shadow: 0 24px 60px rgba(0,0,0,.12);
    }
    .invoice-top {
      display: grid;
      grid-template-columns: 1fr 260px 1fr;
      align-items: start;
      gap: 16px;
      padding-bottom: 18px;
      border-bottom: 1px solid #d6d6d6;
    }
    .logo {
      width: 154px;
      height: auto;
      display: block;
      margin-bottom: 6px;
    }
    .brand-name {
      margin: 0 0 8px;
      font-size: 20px;
      font-weight: 700;
      line-height: 22px;
    }
    .muted-list {
      margin: 0;
      padding: 0;
      list-style: none;
      font-size: 10px;
      line-height: 20px;
      letter-spacing: .02em;
    }
    .muted-list li::before {
      content: "•";
      color: #748E36;
      font-weight: 900;
      margin-right: 8px;
    }
    .invoice-title {
      text-align: center;
      padding-top: 22px;
    }
    .invoice-title h1 {
      margin: 0;
      color: #748E36;
      font-size: 20px;
      line-height: 26px;
      font-weight: 800;
      letter-spacing: .02em;
    }
    .top-actions {
      display: flex;
      justify-content: flex-end;
      gap: 10px;
      margin-bottom: 14px;
    }
    .top-actions button {
      height: 32px;
      min-width: 105px;
      border: .6px solid #4D4D4D;
      border-radius: 4px;
      background: #fff;
      color: #4D4D4D;
      font-size: 9px;
      font-weight: 500;
    }
    .tax-meta {
      text-align: right;
      font-size: 10px;
      line-height: 20px;
      letter-spacing: .02em;
    }
    .tax-meta b { color: #748E36; }
    .card {
      border: .8px solid #d6d6d6;
      border-radius: 8px;
      background: #fff;
      box-shadow: 2px 2px 5px rgba(59,75,150,.2);
      overflow: hidden;
      margin-top: 14px;
    }
    .card-body {
      padding: 20px 30px;
    }
    .info-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 38px;
      font-size: 10px;
      line-height: 24px;
    }
    .info-grid strong {
      font-weight: 800;
      color: #4D4D4D;
    }
    .info-grid .green {
      color: #748E36;
      font-weight: 800;
    }
    .billed-title {
      margin: 0 0 12px;
      font-size: 12px;
      font-weight: 800;
      line-height: 18px;
    }
    .service-head {
      height: 48px;
      background: #748E36;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      font-weight: 800;
      letter-spacing: .02em;
    }
    .service-lines {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 36px;
      padding: 24px 30px;
      font-size: 10px;
      line-height: 24px;
    }
    .invoice-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 10px;
    }
    .invoice-table th {
      background: rgba(116,142,54,.1);
      color: #748E36;
      font-weight: 800;
    }
    .invoice-table th,
    .invoice-table td {
      border: 1px solid #e1e5dc;
      padding: 14px 10px;
      vertical-align: top;
      text-align: left;
      height: 38px;
    }
    .invoice-table .right { text-align: right; }
    .payable {
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-height: 42px;
      padding: 0 18px;
      background: rgba(116,142,54,.1);
      color: #748E36;
      font-size: 14px;
      font-weight: 900;
      border: 1px solid #e1e5dc;
      border-top: 0;
    }
    .words {
      margin-top: 26px;
      border-radius: 4px;
      background: rgba(116,142,54,.08);
      padding: 18px;
      font-size: 12px;
      line-height: 16px;
    }
    .terms-wrap {
      margin-top: 26px;
      display: grid;
      grid-template-columns: 1fr 130px;
      gap: 26px;
      align-items: start;
    }
    .terms h3 {
      margin: 0 0 12px;
      font-size: 12px;
      text-decoration: underline;
      line-height: 16px;
    }
    .terms p {
      margin: 0;
      font-size: 9px;
      line-height: 17px;
      letter-spacing: .01em;
    }
    .review {
      text-align: center;
      font-size: 9px;
      color: #4D4D4D;
    }
    .review img.qr {
      width: 94px;
      height: 94px;
      object-fit: cover;
      border: 4px solid #748E36;
      display: block;
      margin: 0 auto 4px;
    }
    .review img.stamp {
      width: 92px;
      margin-top: 16px;
      opacity: .72;
    }
    .invoice-footer {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 46px;
      border-top: .8px solid #d6d6d6;
      display: flex;
      align-items: center;
      justify-content: space-around;
      font-size: 10px;
      font-weight: 700;
      color: #4D4D4D;
      background: #fff;
    }
    .invoice-footer span::before {
      content: "●";
      color: #748E36;
      margin-right: 8px;
      font-size: 9px;
    }
    @media print {
      body { background: #fff; }
      .invoice-page { margin: 0 auto; box-shadow: none; }
      .no-print { display: none; }
    }
  </style>
</head>
<body>
  <main class="invoice-page">
    <section class="invoice-top">
      <div>
        <img class="logo" src="${logoGreenImage}" alt="ANT Tourist" />
        <h2 class="brand-name">Ant Travel</h2>
        <ul class="muted-list">
          <li>+92787966897</li>
          <li>support@antsoft.com</li>
          <li>www.antbus.in</li>
          <li>B-128, Transport Nagar, Sector-69, Noida, Uttar Pradesh 201301- India</li>
        </ul>
      </div>
      <div class="invoice-title">
        <h1>TAX INVOICE</h1>
      </div>
      <div>
        <div class="top-actions no-print">
          <button onclick="window.print()">Download PDF</button>
          <button onclick="window.print()">Print Invoice</button>
        </div>
        <div class="tax-meta">
          09AAKCA403B2Z1 : <b>GSTIN</b><br />
          996423 : <b>HSN/SAC</b><br />
          1800 1027 408 : <b>Toll FREE</b>
        </div>
      </div>
    </section>

    <section class="card">
      <div class="card-body info-grid">
        <div>
          Invoice No. : <strong>ANT-2026-01</strong><br />
          Booking ID : <strong>ANT45821</strong>
        </div>
        <div>
          Invoice Date : <strong>03 Feb 2026</strong><br />
          Payment Status : <span class="green">Paid</span>
        </div>
      </div>
    </section>

    <section class="card">
      <div class="card-body">
        <h3 class="billed-title">Billed To :</h3>
        <div class="info-grid">
          <div>
            Isha Thakur<br />
            +9899941402<br />
            isha63198@gmail.com
          </div>
          <div>
            <span class="green">Company Name :</span> xyz Enterprises<br />
            <span class="green">GSTIN :</span> OPXCGTYZ5686<br />
            <span class="green">Address :</span> B-72/21, Mandir Wali Gali, Bhajanpura, Near Maujpur
          </div>
        </div>
      </div>
    </section>

    <section class="card">
      <div class="service-head">Service Details</div>
      <div class="service-lines">
        <div>
          Service Name : <strong>${data.serviceName}</strong><br />
          ${data.vehicleLabel} : <strong>${data.vehicleName}</strong>
        </div>
        <div>
          Destination : <strong>Delhi - Jaipur</strong><br />
          Travel Date : <strong>10 Feb 2026 - 14 Feb 2026</strong>
        </div>
      </div>
    </section>

    <section class="card">
      <table class="invoice-table">
        <thead>
          <tr>
            <th style="width:56px">S.no</th>
            <th style="width:150px">Service</th>
            <th>Description</th>
            <th style="width:112px">Add-ons</th>
            <th class="right" style="width:95px">Amount</th>
            <th class="right" style="width:110px">Total Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>${data.serviceName}</td>
            <td>${data.vehicleName}</td>
            <td>600<br /><small>Driver/ Toll/ Parking</small></td>
            <td class="right">70,000</td>
            <td class="right">70,700</td>
          </tr>
          <tr><td colspan="4"></td><td>Total Amount</td><td class="right">70,700</td></tr>
          <tr><td colspan="4"></td><td>IGST 18%</td><td class="right">12726</td></tr>
          <tr><td colspan="4"></td><td>CGST 9%</td><td class="right"></td></tr>
          <tr><td colspan="4"></td><td>SGST 9%</td><td class="right"></td></tr>
        </tbody>
      </table>
      <div class="payable">
        <span>Total Payable</span>
        <span>83,426</span>
      </div>
    </section>

    <section class="words">
      <strong>In Words :</strong> &nbsp; Seventy One Thousand One Hundred
    </section>

    <section class="terms-wrap">
      <div class="terms">
        <h3>Terms & Condition</h3>
        <p>
          Payment Must be made within 7 days from the invoice date.<br />
          If Payment is not received within 7 day. late payment charges will be applicable.<br />
          All Payment are valid only if made to the official bank account of ANT BUS PVT. LTD.<br />
          All disputes shall be subject to Noida Jurisdiction only.
        </p>
      </div>
      <div class="review">
        <img class="qr" src="${qrImage}" alt="Review QR" />
        <strong>Scan & share your review</strong><br />
        <small>we value your feedback</small>
        <img class="stamp" src="${stampImage}" alt="Authorized signature" />
      </div>
    </section>

    <footer class="invoice-footer">
      <span>Customer Support : +1234568907</span>
      <span>Support Mail : antsupport@gmail.com</span>
    </footer>
  </main>
</body>
</html>`
}

async function buildTaxInvoiceA4(data) {
  const [logoSrc, qrSrc, stampSrc] = await Promise.all([
    imageToDataUri(logoGreenImage),
    imageToDataUri(qrImage),
    imageToDataUri(stampImage),
  ])

  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Tax Invoice</title>
  <style>
    @page { size: A4; margin: 0; }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      background: #eff1ef;
      color: #4D4D4D;
      font-family: Inter, Arial, sans-serif;
    }
    .page {
      width: 210mm;
      height: 297mm;
      margin: 8mm auto;
      background: #fff;
      padding: 12mm 12mm 14mm;
      position: relative;
      overflow: hidden;
      box-shadow: 0 24px 60px rgba(0,0,0,.14);
    }
    .top {
      min-height: 50mm;
      display: grid;
      grid-template-columns: 1fr 64mm 1fr;
      gap: 7mm;
      border-bottom: .6px solid #d6d6d6;
      padding-bottom: 7mm;
    }
    .logo { width: 38mm; height: auto; display: block; margin-bottom: 2mm; }
    .brand { margin: 0 0 2mm; font-size: 18px; line-height: 20px; font-weight: 800; }
    .contact { margin: 0; padding: 0; list-style: none; font-size: 8px; line-height: 5.2mm; }
    .contact li::before { content: "\\2022"; color: #748E36; font-weight: 900; margin-right: 2.4mm; }
    h1 {
      margin: 14mm 0 0;
      text-align: center;
      color: #748E36;
      font-size: 20px;
      line-height: 26px;
      letter-spacing: .02em;
      font-weight: 900;
    }
    .actions { display: flex; justify-content: flex-end; gap: 3mm; margin-bottom: 7mm; }
    .actions button {
      height: 8mm;
      min-width: 25mm;
      background: #fff;
      border: .4px solid #4D4D4D;
      border-radius: 4px;
      color: #4D4D4D;
      font-size: 8px;
    }
    .tax-meta { text-align: right; font-size: 8px; line-height: 5.4mm; }
    .green { color: #748E36; font-weight: 800; }
    .card {
      margin-top: 6mm;
      background: #fff;
      border: .6px solid #d6d6d6;
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 2px 2px 5px rgba(59,75,150,.2);
    }
    .pad { padding: 7mm 9mm; }
    .two { display: grid; grid-template-columns: 1fr 1fr; gap: 28mm; font-size: 9px; line-height: 6.2mm; }
    .two strong { color: #4D4D4D; font-weight: 800; }
    .billed-title { margin: 0 0 4mm; font-size: 11px; line-height: 16px; font-weight: 800; }
    .service-title {
      height: 12mm;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #748E36;
      color: #fff;
      font-size: 16px;
      line-height: 20px;
      font-weight: 900;
      letter-spacing: .02em;
    }
    .service-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28mm; padding: 8mm 9mm; font-size: 9px; line-height: 6.2mm; }
    table { width: 100%; border-collapse: collapse; font-size: 8px; }
    th { background: rgba(116,142,54,.1); color: #748E36; font-weight: 900; }
    th, td { border: 1px solid #e1e5dc; padding: 4.5mm 3mm; text-align: left; vertical-align: top; height: 11mm; }
    .right { text-align: right; }
    .payable {
      height: 11mm;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 5mm;
      background: rgba(116,142,54,.1);
      border: 1px solid #e1e5dc;
      border-top: 0;
      color: #748E36;
      font-size: 13px;
      font-weight: 900;
    }
    .words { margin-top: 8mm; padding: 5mm; background: rgba(116,142,54,.08); border-radius: 4px; font-size: 10px; }
    .bottom { margin-top: 7mm; display: grid; grid-template-columns: 1fr 32mm; gap: 14mm; }
    .terms h3 { margin: 0 0 4mm; font-size: 10px; line-height: 14px; text-decoration: underline; }
    .terms p { margin: 0; font-size: 7px; line-height: 13px; }
    .review { text-align: center; font-size: 8px; }
    .qr { width: 24mm; height: 24mm; object-fit: cover; border: 3px solid #748E36; display: block; margin: 0 auto 2mm; }
    .stamp { width: 24mm; display: block; margin: 5mm auto 0; opacity: .74; }
    .footer {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 12mm;
      border-top: .6px solid #d6d6d6;
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 8px;
      font-weight: 700;
    }
    .footer span::before { content: "\\2022"; color: #748E36; margin-right: 2mm; }
    @media print {
      body { background: #fff; }
      .page { margin: 0; box-shadow: none; }
      .no-print { display: none; }
    }
  </style>
</head>
<body>
  <main class="page">
    <section class="top">
      <div>
        <img class="logo" src="${logoSrc}" alt="ANT Tourist" />
        <h2 class="brand">Ant Travel</h2>
        <ul class="contact">
          <li>+92787966897</li>
          <li>support@antsoft.com</li>
          <li>www.antbus.in</li>
          <li>B-128, Transport Nagar, Sector-69, Noida, Uttar Pradesh 201301- India</li>
        </ul>
      </div>
      <div><h1>TAX INVOICE</h1></div>
      <div>
        <div class="actions no-print">
          <button onclick="window.print()">Download PDF</button>
          <button onclick="window.print()">Print Invoice</button>
        </div>
        <div class="tax-meta">
          09AAKCA403B2Z1 : <span class="green">GSTIN</span><br />
          996423 : <span class="green">HSN/SAC</span><br />
          1800 1027 408 : <span class="green">Toll FREE</span>
        </div>
      </div>
    </section>

    <section class="card"><div class="pad two">
      <div>Invoice No. : <strong>ANT-2026-01</strong><br />Booking ID : <strong>ANT45821</strong></div>
      <div>Invoice Date : <strong>03 Feb 2026</strong><br />Payment Status : <span class="green">Paid</span></div>
    </div></section>

    <section class="card"><div class="pad">
      <h3 class="billed-title">Billed To :</h3>
      <div class="two">
        <div>Isha Thakur<br />+9899941402<br />isha63198@gmail.com</div>
        <div><span class="green">Company Name :</span> xyz Enterprises<br /><span class="green">GSTIN :</span> OPXCGTYZ5686<br /><span class="green">Address :</span> B-72/21, Mandir Wali Gali, Bhajanpura, Near Maujpur</div>
      </div>
    </div></section>

    <section class="card">
      <div class="service-title">Service Details</div>
      <div class="service-grid">
        <div>Service Name : <strong>${data.serviceName}</strong><br />${data.vehicleLabel} : <strong>${data.vehicleName}</strong></div>
        <div>Destination : <strong>Delhi - Jaipur</strong><br />Travel Date : <strong>10 Feb 2026 - 14 Feb 2026</strong></div>
      </div>
    </section>

    <section class="card">
      <table>
        <thead>
          <tr><th style="width:15mm">S.no</th><th style="width:38mm">Service</th><th>Description</th><th style="width:30mm">Add-ons</th><th class="right" style="width:25mm">Amount</th><th class="right" style="width:29mm">Total Amount</th></tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>${data.serviceName}</td><td>${data.vehicleName}</td><td>600<br /><small>Driver/ Toll/ Parking</small></td><td class="right">70,000</td><td class="right">70,700</td></tr>
          <tr><td colspan="4"></td><td>Total Amount</td><td class="right">70,700</td></tr>
          <tr><td colspan="4"></td><td>IGST 18%</td><td class="right">12726</td></tr>
          <tr><td colspan="4"></td><td>CGST 9%</td><td class="right"></td></tr>
          <tr><td colspan="4"></td><td>SGST 9%</td><td class="right"></td></tr>
        </tbody>
      </table>
      <div class="payable"><span>Total Payable</span><span>83,426</span></div>
    </section>

    <section class="words"><strong>In Words :</strong> &nbsp; Seventy One Thousand One Hundred</section>

    <section class="bottom">
      <div class="terms">
        <h3>Terms & Condition</h3>
        <p>Payment Must be made within 7 days from the invoice date.<br />If Payment is not received within 7 day. late payment charges will be applicable.<br />All Payment are valid only if made to the official bank account of ANT BUS PVT. LTD.<br />All disputes shall be subject to Noida Jurisdiction only.</p>
      </div>
      <div class="review">
        <img class="qr" src="${qrSrc}" alt="Review QR" />
        <strong>Scan & share your review</strong><br />
        <small>we value your feedback</small>
        <img class="stamp" src="${stampSrc}" alt="Authorized signature" />
      </div>
    </section>

    <footer class="footer">
      <span>Customer Support : +1234568907</span>
      <span>Support Mail : antsupport@gmail.com</span>
    </footer>
  </main>
</body>
</html>`
}

function BookingInfo({ label, value, align = 'left' }) {
  return (
    <div className={align === 'right' ? 'text-left sm:text-right' : 'text-left'}>
      <p className="text-[14px] font-normal leading-5 text-[#4D4D4D]/60">{label}</p>
      <p className="mt-1 text-[14px] font-semibold leading-5 text-[#4D4D4D]">{value}</p>
    </div>
  )
}

export default function BookingConfirmedPage({ variant = 'bus' }) {
  const isTraveller = variant === 'traveller'
  const vehicleLabel = isTraveller ? 'Vehicle Name' : 'Vehicle Type'
  const vehicleValue = isTraveller ? '12 Seater (2+1) Force Traveller' : '45 Seater (2+2)AC Luxury Coach'
  const receiptData = getReceiptData(isTraveller)

  const handleBookingReceiptDownload = () => {
    downloadHtml('booking-receipt-preview.html', buildBookingReceipt(receiptData))
  }

  const handlePaymentReceiptDownload = () => {
    downloadHtml('payment-receipt-preview.html', buildPaymentReceipt(receiptData))
  }

  const handleTaxInvoiceDownload = async () => {
    downloadHtml('tax-invoice-preview.html', await buildTaxInvoiceA4(receiptData))
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <FigmaNavbar />

      <section className="bg-[linear-gradient(180deg,#ECFDF5_0%,#FFFFFF_100%)] px-4 pb-20 pt-24">
        <div className="mx-auto flex w-full max-w-[896px] flex-col items-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border-[3.7px] border-[#10B981] text-[#10B981]">
            <FaCheck className="text-[44px]" />
          </div>
          <h1 className="mt-8 text-center text-[36px] font-extrabold leading-[42px] tracking-[-1.2px] text-[#0F172A] md:text-[48px] md:leading-[48px]">
            Booking Confirmed 🎉
          </h1>
          <p className="mt-4 max-w-[672px] text-center text-[18px] font-normal leading-8 text-[#475569] md:text-[20px]">
            Your journey is secured. Complete your final payment to finalize your premium travel experience.
          </p>
        </div>
      </section>

      <main className="-mt-10 px-4 pb-24">
        <div className="mx-auto flex w-full max-w-[896px] flex-col gap-10">
          <section className="rounded-[24px] border border-[#F1F5F9] bg-white shadow-[0_25px_50px_-12px_rgba(226,232,240,0.5)]">
            <div className="flex flex-col items-center gap-10 p-8 md:p-14">
              <h2 className="text-center text-[12px] font-bold uppercase leading-4 tracking-[2.4px] text-[#4D4D4D]">
                Payment Summary
              </h2>

              <div className="grid w-full max-w-[782px] gap-8 text-center md:grid-cols-3 md:text-left">
                <div className="hidden md:block" />
                <div className="border-[#F8FAFC] md:border-r md:px-8">
                  <p className="text-[20px] font-semibold leading-5 text-[#4D4D4D]">Paid Amount</p>
                  <p className="mt-1 text-[32px] font-semibold leading-8 text-[#748E36]">{'\u20B950,000'}</p>
                </div>
                <div className="hidden md:block" />
              </div>

              <div className="w-full max-w-[672px]">
                <div className="mb-3 flex items-center justify-between gap-4 text-[12px] font-bold uppercase leading-4 tracking-[0.6px] text-[#4D4D4D]">
                  <span>12% Secured</span>
                  <span>Final Milestone</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-[#F1F5F9]">
                  <div className="h-full w-full rounded-full bg-[#748E36]" />
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-[#E2E8F0] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between gap-4 p-6">
              <h2 className="text-[16px] font-bold leading-6 text-[#1E293B]">
                Booking Details <span className="text-[#748E36]">(Booking ID:- ANT2026)</span>
              </h2>
              <FaChevronUp className="text-[18px] text-[#94A3B8]" />
            </div>

            <div className="grid gap-6 px-6 pb-8 sm:grid-cols-2">
              <BookingInfo label="Destination" value="Delhi to Jaipur (Roundtrip)" />
              <BookingInfo label={vehicleLabel} value={vehicleValue} align="right" />
              <BookingInfo label="Departure" value="10 FEB 2026, 8:30 PM" />
              <BookingInfo label="Arrival" value="14 FEB 2026, 7:30 PM" align="right" />
            </div>
          </section>

          <section className="flex flex-col items-center gap-8">
            <div className="flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
              <ReceiptButton icon={FaDownload} onClick={handleBookingReceiptDownload}>
                Booking Receipt
              </ReceiptButton>
              <ReceiptButton icon={FaClock} onClick={handlePaymentReceiptDownload}>
                Payment Receipt
              </ReceiptButton>
              <ReceiptButton icon={FaFileInvoice} onClick={handleTaxInvoiceDownload}>
                TAX INVOICE
              </ReceiptButton>
            </div>

            <div className="w-full rounded-[24px] border border-[#F1F5F9] bg-white p-8 shadow-[0_1px_2px_rgba(0,0,0,0.05)] md:p-10">
              <p className="text-center text-[16px] font-medium leading-6 text-[#64748B]">
                Need professional assistance? Our concierge is available 24/7
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="tel:+919899941402"
                  className="flex h-[50px] items-center justify-center gap-3 rounded-full border border-[#E2E8F0] bg-white px-10 text-[14px] font-bold leading-5 text-[#334155] shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
                >
                  <FaPhoneAlt />
                  Call Customer Support
                </a>
                <a
                  href="https://wa.me/919899941402"
                  className="flex h-[50px] items-center justify-center gap-3 rounded-full border border-[#E2E8F0] bg-white px-10 text-[14px] font-bold leading-5 text-[#334155] shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
                >
                  <FaWhatsapp className="text-[20px] text-[#10B981]" />
                  WhatsApp Concierge
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <EnquiryFooter />
      <FloatingCTA />
    </div>
  )
}
