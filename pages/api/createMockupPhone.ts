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

    // let color: string = req.query.color as string;

    const input = (await axios({ url: url, responseType: "arraybuffer" })).data as Buffer;
    const frame = (await axios({ url: `https://tools.cnrad.dev/mockup/Phone.png`, responseType: "arraybuffer" })).data as Buffer;

    let outputB64 = "";

    await sharp(input)
        .resize({width: 851, height: 1850, fit: sharp.fit.fill})
        .toBuffer() 
        .then(async data => {

            await sharp(frame)
                .resize(1129, 2048)
                .composite([{
                    input: data,
                    top: 97,
                    left: 139
                }])
                .png()
                .toBuffer()
                .then(async data => {

                    await sharp(data)
                    .composite([{
                        input: frame,
                        top: 0,
                        left: 0
                    }])
                    .png()
                    .toBuffer()
                    .then(data => {
                        outputB64 = data.toString('base64');
                    });

                });

        })
        .catch(err => { 
            console.log("Error: ", err);
        });

    res.json({url: `data:image/png;base64,${outputB64}`})
}
