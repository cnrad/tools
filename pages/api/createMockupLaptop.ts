// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
// import { createCanvas, loadImage } from 'canvas';
import sharp from 'sharp';
import axios from 'axios';

type Data = {
  url: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    let url: string = req.query.url as string;
    url = decodeURIComponent(url);

    let color: string = req.query.color as string;

    const input = (await axios({ url: url, responseType: "arraybuffer" })).data as Buffer;
    const frame = (await axios({ url: `https://tools.cnrad.dev/mockup/Macbook${color}.png`, responseType: "arraybuffer" })).data as Buffer;

    let outputB64 = "";

    await sharp(input)
        .resize({width: 1542, height: 965, fit: sharp.fit.fill})
        .toBuffer() 
        .then(async data => {

            await sharp(frame)
                .resize(2002, 1140)
                .composite([{
                    input: data,
                    top: 65,
                    left: 229
                }])
                .png()
                .toBuffer()
                .then(data => {
                    outputB64 = data.toString('base64');
                });

        })
        .catch(err => { 
            console.log("Error: ", err);
        });

    res.json({url: `data:image/png;base64,${outputB64}`})
}
