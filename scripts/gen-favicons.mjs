/**
 * Generates the favicon set from the pine mark.
 *
 * Run with:  node scripts/gen-favicons.mjs
 *
 * The tab icon needs its own copy of the artwork rather than reusing
 * data/logo.svg: at 16px a transparent mark disappears against a dark tab
 * strip, so this version sits on a filled disc and drops the gradient.
 */
import { writeFileSync } from 'node:fs'
import sharp from 'sharp'

const OUT = 'public/static/favicons'

/** The pine, minus the gradient — flat ink reads better when tiny. */
const pine = `  <g fill="#1f5f45">
    <path d="M8 56 L20 50 L30 54 L42 49 L54 56 Z"/>
    <path d="M24 52 C25 42 27 33 31 25 L36 27 C33 35 31 43 30 52 Z"/>
    <rect x="30" y="27" width="30" height="4.5" rx="2.2" transform="rotate(-5 30 27)"/>
    <ellipse cx="36" cy="34" rx="21" ry="4.6" transform="rotate(-5 36 34)"/>
    <ellipse cx="39" cy="25" rx="23" ry="4.6" transform="rotate(-6 39 25)"/>
    <ellipse cx="33" cy="17" rx="17" ry="4.2" transform="rotate(-7 33 17)"/>
    <ellipse cx="28" cy="10" rx="10" ry="3.6" transform="rotate(-8 28 10)"/>
    <ellipse cx="14" cy="39" rx="9" ry="3.4" transform="rotate(7 14 39)"/>
  </g>`

const svg = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <circle cx="32" cy="32" r="32" fill="#f4efe3"/>
${pine}
</svg>`
)

for (const [name, size] of [
  ['favicon-16x16.png', 16],
  ['favicon-32x32.png', 32],
  ['android-chrome-96x96.png', 96],
  ['mstile-150x150.png', 150],
  ['apple-touch-icon.png', 180],
]) {
  await sharp(svg, { density: 512 }).resize(size, size).png().toFile(`${OUT}/${name}`)
  console.log(`${name.padEnd(26)} ${size}x${size}`)
}

// favicon.ico — an ICO container may hold a PNG payload, which every current
// browser understands and is far simpler than emitting a real bitmap.
const png = await sharp(svg, { density: 512 }).resize(32, 32).png().toBuffer()
const head = Buffer.alloc(22)
head.writeUInt16LE(0, 0) // reserved
head.writeUInt16LE(1, 2) // type: icon
head.writeUInt16LE(1, 4) // one image
head.writeUInt8(32, 6) // width
head.writeUInt8(32, 7) // height
head.writeUInt16LE(1, 10) // colour planes
head.writeUInt16LE(32, 12) // bits per pixel
head.writeUInt32LE(png.length, 14)
head.writeUInt32LE(22, 18) // payload offset
writeFileSync(`${OUT}/favicon.ico`, Buffer.concat([head, png]))
console.log(`${'favicon.ico'.padEnd(26)} 32x32`)

// Safari's pinned-tab icon is a single-colour mask: solid shapes, no background.
writeFileSync(
  `${OUT}/safari-pinned-tab.svg`,
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
${pine.replace(/#1f5f45/g, '#000000')}
</svg>
`
)
console.log(`${'safari-pinned-tab.svg'.padEnd(26)} mask`)
