import playwright from 'playwright-aws-lambda';
import { createHash } from 'crypto';
import fs from 'fs';

// export const createImage = async (obj) => {
// 		let fullUrl;
// 		const baseUrl = 'http://localhost:3000/openGraph';
// 		if (obj.tags) {
// 			fullUrl = `${baseUrl}?title=${title}&tags=${tags}&author=${author}&date=${date}`;
// 		} else {
// 			fullUrl = `${baseUrl}?title=${title}&author=${author}&date=${date}`;
// 		}
// 		// if (process.env.NODE_ENV === 'development') {
// 		// 	return {
// 		// 		body: 'image will be genarated in prod'
// 		// 	};
// 		// }
// 		const hash = createHash('md5').update(fullUrl).digest('hex');
// 		const ogImageDir = `./static/images/og`;
// 		const imagePath = `${ogImageDir}/${hash}.png`;
// 		const publicPath = `${process.env.BASE_URL || 'http://localhost:3000'}/images/og/${hash}.png`;
// 		try {
// 			fs.statSync(imagePath);
// 			return {
// 				status: 200,
// 				body: { publicPath: publicPath }
// 			};
// 		} catch (error) {
// 			// file does not exists, so we create it
// 		}
// 		const browser = await playwright.launchChromium({ headless: true });
// 		const page = await browser.newPage();
// 		await page.setViewportSize({ width: 1200, height: 630 });
// 		await page.goto(fullUrl, { waitUntil: 'networkidle' });
// 		const buffer = await page.screenshot({ type: 'png' });
// 		await browser.close();
// 		fs.mkdirSync(ogImageDir, { recursive: true });
// 		fs.writeFileSync(imagePath, buffer);
// 		return {
// 			status: 200,
// 			body: { publicPath: publicPath }
// 		};
// 	};
// };
