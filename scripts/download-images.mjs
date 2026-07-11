import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const imagesDir = join(root, 'public', 'images');

const images = [
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACiak0yhS8fsgfHWurB0VMArGMuJJXeJsgaprH9uzj-dKsK-C1xA8EqLcB34_iNJudAew-cvQHJejo7rzsOSwWM8EaUMlxU2ZSZ2uBWLfWv0qXATUYi-_sz7flpoQ2gSGzmcuWMHGzyqXEORfds9mpUUKGgsUgLj5oW4kqz7mvrN0qENAnibfAAO9jnOGd-ULDlzFkebMjk3v5fuSU9SRHU-kT3KWUoCvRpr4ozKnv3Pw18S883PwDXEMmgVgFvz97QYUWikjSazDUWsw',
    dest: 'logo.png',
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlrYcZ1WEFNVA2qbTcoT1XtJostaxhyGV5vsCKGMPscxH_DjBFexvzCmQEbGFj3YsKBILm1LW4EYnzBCHwSw0bvjHsb8Akd4xyDfwzy1B43yXHO6UbpKTMJCmiStAVlidoqCY2RHrqk_7x2V8CIuVp2EWYpWjV0DP71yFa5dtctI3kaIR8CKXL1uxHok2subt6n9xWQ2X5TUPX-0Fmhg9yB0dgYN_k1CCbTWgOJVfaMiDbLAB1BvkneZ9CCs8bt9MV1b0',
    dest: 'logo-footer.png',
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8nPuQ2SxF2yOSCVRqNmcu5zsQGWKf6rr5FhtaSLbF294ENgy9kTuUsJsfnNSPbiB5He07fo02KtwmCBl-biketvHkObexKQMSBcUyShEGHiMRzh62uDGb7iQ5P7docaqpPUS1e9K65z1sjQC1XLp_fiPAKKIhTl5xIBUq0vEa6e5jlKGJJ4OwJ0b-BKYsQ9txv_kdEFmXA6ZKcCgmaiVf51-GOt_vjLTpifOJqm5QW_COzKizkXvc9Q',
    dest: 'hero-nuts.jpg',
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2sb_O09wmwLu9cHe3_40LMFKhiNZaSV9vFseJ6OsVbQHDJWRZsMi2udm9RZI0S6WmPdJ4tDq6bBQpkdkgSbMO-jruq6rLl63FuCRZOpzRZc5ZFxsximJLU35JT1Bsqiwht9KgNiGrFds4M5Yv76u1sAPyFFauUVpkHkw0p--v2CL9tkQVHkdQDVx9Mr_4AN9PbuU8wDEc0L7Mh3cw64XfFX2hWCceUwgqO_ZM7lUyxLxNwuoL-1IdNg',
    dest: 'about-truck.jpg',
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDydWhTELg8qtA4gQSOVBfrqpy50g0tbxWT4_wpfRQe-9M_j7WxsKJJ3viday8wjGjUM-92lREf3CuXKol_zbbWtJGkQlmr9k9wQTSUDoKKgZZQvfrrbwSaKA-2kgVmoIj7P2HP7xTHixPpLgSdh8V-LuRNhuPNfXCWcNI6VFz2q1vbu9KudNpfOLaguOVLyz3dzNd3yd4ooSDj0VNVx8mZcbjF2seWibX-n5Uy_ZRusf4G0nE0DINSQA',
    dest: 'products/almonds.jpg',
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClFcVM0w21PDx4N-__dsjGGvCPTiMwgl4OyKqiFnj8wAdSYrljUj7_Dcw87FyD6cRO6hyPHYVKG2xeLFECO56ENfC7BYvMJOcTkXVWJ5c3pn6-3gOWgqcymcsEP3Q1QKVzSPAYAqMgAqPoLMdLGvK9hoDv-2lfsr4p1rm-uCz07MtnLoukbTHd296_dhh1Wsiw4pnkSKjlVmvZ2qfyUp-7UHbuICd31yb6zkJtgvlJZ8nHGYFx_X_AfA',
    dest: 'products/cashews.jpg',
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEbLtnyzdSC2VArGypLpnQKzckl0j6os7c79Ri4vgqZ2iw3Di8MOoJnKErqEPVncKyvrFmoqHD3axeRs8F5c1MY_8Zs37uLMLJvjow1gKxkf2Qp7EF0jKloMRQBJb40uGaderwIMSzsq4_LZ0FVCPeDZkVKy20NKDCQUBobdapweGxmFDDzuotjIj7Bc-aUC3LwUUyl8aKQHDVd02aGwm6dqzjDg_P0J9ctagabaV1PMSOatv3iMXgKA',
    dest: 'products/hazelnuts.jpg',
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNVDFwVisarAjqgneK0gvWyrt_ELGw5QUhekQekvK1Ww6mbKwGuDButhimShC4yu18utL9aVU-WCqRadS6Nm0EWfE6_LpF6zVGOjW5Fm7PBt2AjDJE5618tgJILvlKSfBCG9Dbw91akcbcZ-tE6wJY72WFL9f7thRCF8x_9vicshCgQh2YCbjUtvmctqoM_6H_LguTd7J9lRG6jrqUSCny1cnjdq37g2BPiSwdO4LaYX7Vyr7TgFZwvA',
    dest: 'products/raisins.jpg',
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRysdwMYTfySkuXlg3P83XuFoNKwWtOM8-D3bAm9TxsaEOKH7ucozWEjG67YjjFHE_flSJBPTvtK4NCBK1wG5m91TwitJVR30h9OBIoPqf0aruo3LlePKXyCTruuvzsV0URWNasyogkqSkCJcdlMbOBqKIQ-gzSJRlJwWy_qgApgmuMxZ_OstFBlQIl7bRBgfjs91UPfkH1I6VeH5lH187XMLUsfbsr5FaUxYJyL70i2ym7J4aS1MODQ',
    dest: 'products/macadamia.jpg',
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7IpzYUOhr6Y1wdYqw8mAYHYZBbw9g6FqwnoHjY4k07URpIjFcVoJhWcWszHsdKI7B9pncqTvWp8JaGAEyqWUg8FtLH8cJuHJFjMjp-Dz7-jTaEkbZMPpizXJewmB30ujdDR_t_fxQDQrJFuuTTWydqoXdPk7aQ5T8GguoCO4DSG8cc1PKJuqM4R3UGBttrCLmmxWiPTev43MeN0drmuYcL9piYSu1pnoTU_oc6oEjQPVUehJqLRapkQ',
    dest: 'quality-lab.jpg',
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxKdO_e3grMzDOne56enBCeYby_DIxrSekiJWYFlKhYwnv8cQKCCd8iUZayUqL4-5yP6XvPq0OE53zX5xEYsute3KJiBXT8gBbf1JYsltN9bDHZ-0zaQhaLhnmNRUATsCY8_Ib17QjmhzfvmOp3FBij9KZaDL223s2w2NUs7ZnTVMxXR3yQLdiTkrGBZUgMAmptcSqOOgKYedf_k-r2O6DrUEziV5UKxabkW1ZMu5LrlsDnuYqwQH0Wg',
    dest: 'packaging-warehouse.jpg',
  },
];

const placeholderSvg = (label) => `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600" role="img" aria-label="${label}">
  <rect width="800" height="600" fill="#e2e3e1"/>
  <rect x="40" y="40" width="720" height="520" fill="#f9faf8" stroke="#bec9c3" stroke-width="2" rx="8"/>
  <text x="400" y="300" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" fill="#3f4944">${label}</text>
  <text x="400" y="340" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#6f7974">Replace with your image</text>
</svg>`;

async function downloadImage(url, destPath) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  const buffer = Buffer.from(await response.arrayBuffer());
  await mkdir(dirname(destPath), { recursive: true });
  await writeFile(destPath, buffer);
}

async function main() {
  await mkdir(join(imagesDir, 'products'), { recursive: true });

  let succeeded = 0;
  let failed = 0;

  for (const image of images) {
    const destPath = join(imagesDir, image.dest);
    try {
      console.log(`Downloading ${image.dest}...`);
      await downloadImage(image.url, destPath);
      succeeded += 1;
    } catch (error) {
      failed += 1;
      console.warn(`Failed: ${image.dest} (${error.message})`);

      const placeholderPath = destPath.endsWith('.jpg')
        ? destPath.replace('.jpg', '.svg')
        : destPath.replace(/\.(png|svg)$/, '-placeholder.svg');

      const label = image.dest.replace(/[/.]/g, ' ').replace(/\s+/g, ' ').trim();
      await writeFile(placeholderPath, placeholderSvg(label));
    }
  }

  console.log(`\nDone. ${succeeded} downloaded, ${failed} failed (placeholders created).`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
