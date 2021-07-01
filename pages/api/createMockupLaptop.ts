// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { createCanvas, loadImage } from 'canvas';

type Data = {
  url: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    const url: string = req.query.url as string;

    console.log(url);

    const canvas = createCanvas(2002, 1140);
    const ctx = canvas.getContext('2d');

    loadImage('https://tools.cnrad.dev/mockup/MacbookLight.png').then((image: any) => {
        ctx.drawImage(image, 0, 0, 2002, 1140);
    });

    // loadImage(url).then((image: any) => {
    //     ctx.drawImage(image, 229, 65, 1542, 965);
    // })

    let data = await canvas.toDataURL();

    res.status(200).redirect(data);
}
