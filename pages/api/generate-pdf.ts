import { NextApiRequest, NextApiResponse } from 'next';
import { renderToBuffer } from '@react-pdf/renderer';
import fs from 'fs';
import path from 'path';
import CheatsheetPDF from '../../components/CheatsheetPDF';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Using a simpler approach - prebuild a PDF template
    const pdfContent = `
%PDF-1.7
1 0 obj
<</Type/Catalog/Pages 2 0 R>>
endobj
2 0 obj
<</Type/Pages/Count 1/Kids[3 0 R]>>
endobj
3 0 obj
<</Type/Page/MediaBox[0 0 595 842]/Parent 2 0 R/Resources<<
/Font<</F1<</Type/Font/Subtype/Type1/BaseFont/Helvetica>>>>
>>/Contents 4 0 R>>
endobj
4 0 obj
<</Length 404>>
stream
BT
/F1 16 Tf
50 790 Td
(IMAGINATION G - 5 Signals You're Drifting Instead of Moving) Tj
/F1 12 Tf
0 -30 Td
(A quick diagnostic to spot momentum killers in your project, business, or team.) Tj
0 -30 Td
(1. Meetings Multiply, Outcomes Disappear) Tj
0 -20 Td
(2. You're Collecting Insights, Not Decisions) Tj
0 -20 Td
(3. Everything Feels 'Almost Ready'... Forever) Tj
0 -20 Td
(4. Your Team Asks for Permission, Not Accountability) Tj
0 -20 Td
(5. Your Energy is Scattered Across Too Many 'Nice to Haves') Tj
0 -40 Td
(© IMAGINATION G - Marcus Davis, Founder) Tj
ET
endstream
endobj
xref
0 5
0000000000 65535 f
0000000009 00000 n
0000000054 00000 n
0000000105 00000 n
0000000250 00000 n
trailer
<</Size 5/Root 1 0 R>>
startxref
704
%%EOF
    `;

    // Set response headers
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=IMAGINATION_G_5_Signals_Cheatsheet.pdf');

    // Send the PDF content
    res.send(Buffer.from(pdfContent));
  } catch (error) {
    console.error('Error generating PDF:', error);
    res.status(500).json({ message: 'Error generating PDF', error });
  }
}